# Changed — Bundle Modifications Report (Part 094 / 138)

- **Updated at**: `2026-11-25T13:06 JST`
- **Part**: `94 / 138` (**375** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 093](part-093.md) · [Part 095 →](part-095.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (igzsf.a0b73a5f → dz8ef.98c5e741 · continued)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (57 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 28. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L247-L250` → after: `L247-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L247-L250) · [Before (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L247-L250)

```diff
-             case Ht.k.my:
-               return void yt.my++;
-             case Ht.k.mI:
-               return yt.lockSkips++, void(0 === Dt && 0 === mt || tt.outlier(`lock skip dropped raw (${Qt(Dt)}, ${Qt(mt)}) at ${lt(Ot)} ms`))
+             case fu.m.uh:
+               return void hu.uh++;
+             case fu.m.lV:
+               return hu.lockSkips++, void(0 === Zu && 0 === Xu || uu.outlier(`lock skip dropped raw (${bu(Zu)}, ${bu(Xu)}) at ${cu(su)} ms`))
```

#### 29. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L254-L255` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L254-L255) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L254-L255)

```diff
-             Mt = `raw (${Qt(Dt)}, ${Qt(mt)}) over ${lt(qt)} ms, limit ${Qt(wt)}, filter v (${Et.toFixed(3)}, ${ft.toFixed(3)}) px/ms, at ${lt(Ot)} ms`;
-           Xt === Ht.k.qI ? (yt.qI++, tt.outlier(`spike put right: ${Mt} -> turned (${Qt(dt)}, ${Qt(jt)})`)) : Nt ? (yt.pastLimit++, tt.outlier(`kept past limit: ${Mt}`)) : qt > 50 && (yt.longFrames++, tt.remote || tt.outlier(`long frame: ${Mt}, turned in full`))
+             gu = `raw (${bu(Zu)}, ${bu(Xu)}) over ${cu(Uu)} ms, limit ${bu(Yu)}, filter v (${Nu.toFixed(3)}, ${Ou.toFixed(3)}) px/ms, at ${cu(su)} ms`;
+           Cu === fu.m.XV ? (hu.XV++, uu.outlier(`spike put right: ${gu} -> turned (${bu(lu)}, ${bu(qu)})`)) : Du ? (hu.pastLimit++, uu.outlier(`kept past limit: ${gu}`)) : Uu > 50 && (hu.longFrames++, uu.remote || uu.outlier(`long frame: ${gu}, turned in full`))
```

#### 30. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L258)

```diff
-           if (Ht.o.mouseMove(tt, et), !this.topicOn) return;
+           if (fu.q.mouseMove(uu, Eu), !this.topicOn) return;
```

#### 31. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L266)

```diff
-           Vt.eventMax = Math.max(Vt.eventMax, Dt), Dt >= 200 && (Vt.bigEvents++, this.eventOutlier(`big mousemove (${Ot}, ${qt}) at ${lt(tt.timeStamp)} ms, lock ${et?"Pd":"free"}`))
+           ju.eventMax = Math.max(ju.eventMax, Zu), Zu >= 200 && (ju.bigEvents++, this.eventOutlier(`big mousemove (${su}, ${Uu}) at ${cu(uu.timeStamp)} ms, lock ${Eu?"dl":"free"}`))
```

#### 32. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L269)

```diff
-           tt ? Ht.o.lockGained() : Ht.o.change(Ht.e.lockLost), this.topicOn && (0, qt.n)("look", `pointer lock ${tt?`gained (${tt.tagName.toLowerCase()})`:"lost"} at ${lt(performance.now())} ms`)
+           uu ? fu.q.lockGained() : fu.q.change(fu.d.lockLost), this.topicOn && (0, Uu.k)("look", `pointer lock ${uu?`gained (${uu.tagName.toLowerCase()})`:"lost"} at ${cu(performance.now())} ms`)
```

#### 33. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L271)

```diff
-           Ht.o.change(Ht.e.lockError), this.topicOn && (0, qt.n)("look", `pointer lock request failed at ${lt(performance.now())} ms`)
+           fu.q.change(fu.d.lockError), this.topicOn && (0, Uu.k)("look", `pointer lock request failed at ${cu(performance.now())} ms`)
```

#### 34. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L273)

```diff
-           Ht.o.change("hidden" === document.visibilityState ? Ht.e.hidden : Ht.e.visible), this.topicOn && (0, qt.n)("look", `page ${document.visibilityState} at ${lt(performance.now())} ms`)
+           fu.q.change("hidden" === document.visibilityState ? fu.d.hidden : fu.d.visible), this.topicOn && (0, Uu.k)("look", `page ${document.visibilityState} at ${cu(performance.now())} ms`)
```

#### 35. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L275)

```diff
-           Ht.o.change(Ht.e.focus)
+           fu.q.change(fu.d.focus)
```

#### 36. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L277)

```diff
-           Ht.o.change(Ht.e.blur)
+           fu.q.change(fu.d.blur)
```

#### 37. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L283-L284` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L283-L284) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L283-L284)

```diff
-             Vt = [`${tt.frames} frames (${tt.looked} looked, ${tt.idle} idle${"wasm"===Ht.o.client?`, ${tt.my} carried`:""})`, `dt avg ${lt(et)} min ${lt(tt.dtMin)} max ${lt(tt.dtMax)}, ${tt.longFrames} long`, `${tt.events} mousemoves (max ${Qt(tt.eventMax)} px, ${tt.bigEvents} b … [truncated]
-           tt.dropped > 0 && Vt.push(`${tt.dropped} doubled spike copies dropped`), tt.cameraSets > 0 && Vt.push(`${tt.cameraSets} camera sets`), tt.cameraSetsLost > 0 && Vt.push(`${tt.cameraSetsLost} camera set records lost`), tt.lost > 0 && Vt.push(`${tt.lost} records lost`), tt … [truncated]
+             ju = [`${uu.frames} frames (${uu.looked} looked, ${uu.idle} idle${"wasm"===fu.q.client?`, ${uu.uh} carried`:""})`, `dt avg ${cu(Eu)} min ${cu(uu.dtMin)} max ${cu(uu.dtMax)}, ${uu.longFrames} long`, `${uu.events} mousemoves (max ${bu(uu.eventMax)} px, ${uu.bigEvents} b … [truncated]
+           uu.dropped > 0 && ju.push(`${uu.dropped} doubled spike copies dropped`), uu.cameraSets > 0 && ju.push(`${uu.cameraSets} camera sets`), uu.cameraSetsLost > 0 && ju.push(`${uu.cameraSetsLost} camera set records lost`), uu.lost > 0 && ju.push(`${uu.lost} records lost`), uu … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L288)

```diff
-         if (Ht.o.start(tt, null !== document.pointerLockElement), this.takes = et, this.topicOn) {
+         if (fu.q.start(uu, null !== document.pointerLockElement), this.takes = Eu, this.topicOn) {
```

#### 39. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L292)

```diff
-           (0, qt.n)("look", `start: ${tt} client, dpr ${window.devicePixelRatio}, screen ${et.width}x${et.height}, pointer lock ${document.pointerLockElement?"Pd":"free"}`)
+           (0, Uu.k)("look", `start: ${uu} client, dpr ${window.devicePixelRatio}, screen ${Eu.width}x${Eu.height}, pointer lock ${document.pointerLockElement?"dl":"free"}`)
```

#### 40. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L297)

```diff
-         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
+         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L301)

```diff
-         et.outliers >= 20 ? et.suppressed++ : (et.outliers++, (0, qt.n)("look", tt))
+         Eu.outliers >= 20 ? Eu.suppressed++ : (Eu.outliers++, (0, Uu.k)("look", uu))
```

#### 42. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L305)

```diff
-         et.eventLines >= 10 ? et.suppressed++ : (et.eventLines++, (0, qt.n)("look", tt))
+         Eu.eventLines >= 10 ? Eu.suppressed++ : (Eu.eventLines++, (0, Uu.k)("look", uu))
```

#### 43. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L311)

```diff
-           this.counted(Ht.e.stepsLost, tt[0]), this.counted(Ht.e.droppedCopies, tt[1]);
+           this.counted(fu.d.stepsLost, uu[0]), this.counted(fu.d.droppedCopies, uu[1]);
```

#### 44. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L315-L317` → after: `L315-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L315-L317) · [Before (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L315-L317)

```diff
-         if (et.length >= Ot.d) {
-           this.counted(Ht.e.cameraSetsLost, et[0]);
-           for (let tt = Ot.d; tt + Ot.e <= et.length; tt += Ot.e) Ht.o.cameraSet(et, tt), this.topicOn && (this.tally.cameraSets++, this.outlier(jt(et, tt)))
+         if (Eu.length >= su.b) {
+           this.counted(fu.d.cameraSetsLost, Eu[0]);
+           for (let uu = su.b; uu + su.f <= Eu.length; uu += su.f) fu.q.cameraSet(Eu, uu), this.topicOn && (this.tally.cameraSets++, this.outlier(qu(Eu, uu)))
```

#### 45. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L321)

```diff
-         this.counted(Ht.e.droppedCopies, 1)
+         this.counted(fu.d.droppedCopies, 1)
```

#### 46. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L325)

```diff
-         if (Ht.o.change(tt, et), !this.topicOn) return;
+         if (fu.q.change(uu, Eu), !this.topicOn) return;
```

#### 47. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L327)

```diff
-         tt === Ht.e.droppedCopies ? Vt.dropped += et : tt === Ht.e.stepsLost ? Vt.lost += et : Vt.cameraSetsLost += et
+         uu === fu.d.droppedCopies ? ju.dropped += Eu : uu === fu.d.stepsLost ? ju.lost += Eu : ju.cameraSetsLost += Eu
```

#### 48. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L355-L356` → after: `L355-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L355-L356) · [Before (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L355-L356)

```diff
-       } = await Vt.e(29).then((() => Vt(34239)));
-       await Ot, Ht.o.save({
+       } = await ju.e(29).then((() => ju(34431)));
+       await su, fu.q.save({
```

#### 49. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L362)

```diff
-   4963: (tt, et, Vt) => {
+   4976: (uu, Eu, ju) => {
```

#### 50. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L366-L370` → after: `L367-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L367-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L367-L371) · [Before (L366-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L366-L370)

```diff
-       D: () => dt,
-       Eb: () => yt,
-       G: () => Ot,
-       Hb: () => ct,
-       J: () => Dt,
+       F: () => lu,
+       Gb: () => Qu,
+       H: () => su,
+       Jb: () => hu,
+       K: () => Zu,
```

#### 51. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L375-L376` → after: `L374-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L374-L376) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L375-L376)

```diff
-       Ob: () => Yt,
-       Q: () => Qt,
+       O: () => zu,
+       Pb: () => Pu,
+       R: () => bu,
```

#### 52. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L379-L380` → after: `L379-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L379-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L379-L381) · [Before (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L379-L380)

```diff
-       Vb: () => Ut,
-       W: () => Xt,
+       Ub: () => tu,
+       V: () => Cu,
+       Wb: () => Su,
```

#### 53. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L382-L386` → after: `L383-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L383-L387) · [Before (L382-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L382-L386)

```diff
-       Zb: () => At,
-       _b: () => vt,
-       bb: () => jt,
-       bc: () => Wt,
-       d: () => Mt,
+       Xb: () => Fu,
+       Yb: () => Bu,
+       ac: () => du,
+       b: () => gu,
+       cb: () => qu,
```

#### 54. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L393` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L394) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L393)

```diff
-       gc: () => st,
+       h: () => Mu,
```

#### 55. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L395-L398` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L396-L397) · [Before (L395-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L395-L398)

```diff
-       ib: () => Pt,
-       jb: () => Zt,
-       k: () => bt,
-       l: () => Tt,
+       j: () => Au,
+       jc: () => Uu,
```

#### 56. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L402-L406` → after: `L400-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L400-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L400-L407) · [Before (L402-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L402-L406)

```diff
-       o: () => ht,
-       ob: () => Bt,
-       q: () => xt,
-       sb: () => it,
-       u: () => Kt,
+       mc: () => yu,
+       n: () => Nu,
+       pb: () => mu,
+       r: () => Ju,
+       s: () => Hu,
+       tb: () => Vu,
+       ub: () => xu,
+       v: () => wu,
```

#### 57. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L408-L411` → after: `L409-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L409-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/91.js#L409-L411) · [Before (L408-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/91.js#L408-L411)

```diff
-       w: () => ut,
-       wb: () => Ft,
-       yb: () => zt,
-       z: () => mt
+       xb: () => Iu,
+       y: () => pu,
+       zb: () => ru
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (982 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 1. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L4)

```diff
-   41719: (tt, et, Vt) => {
+   41745: (uu, Eu, ju) => {
```

#### 2. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12)

```diff
-       }] = await Promise.all([Promise.resolve().then((() => Vt(1293))), Promise.resolve().then((() => Vt(1223))), Promise.resolve().then((() => Vt(2024)))]), mt = Dt.latest("connectedGame").websocketUrl;
+       }] = await Promise.all([Promise.resolve().then((() => ju(1255))), Promise.resolve().then((() => ju(1183))), Promise.resolve().then((() => ju(1986)))]), Xu = Zu.latest("connectedGame").websocketUrl;
```

#### 3. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L14)

```diff
-       const dt = `${Ot.getHttpUrlFromWebSocketUrl(mt)}${tt}`;
+       const lu = `${su.getHttpUrlFromWebSocketUrl(Xu)}${uu}`;
```

#### 4. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L23)

```diff
-   6723: (tt, et, Vt) => {
+   6737: (uu, Eu, ju) => {
```

#### 5. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L25)

```diff
-       b: () => qt
+       c: () => Uu
```

#### 6. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L27)

```diff
-     var Ot = Vt(1188);
+     var su = ju(1154);
```

#### 7. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L46)

```diff
-   41713: (tt, et, Vt) => {
+   41743: (uu, Eu, ju) => {
```

#### 8. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L51-L52)

```diff
-     var Ot = Vt(63),
-       qt = Vt(1140),
+     var su = ju(58),
+       Uu = ju(1105),
```

#### 9. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L54)

```diff
-       mt = Vt(1188);
+       Xu = ju(1154);
```

#### 10. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L67)

```diff
-       const [lt, Et] = (0, Ot.useState)(jt), ft = null !== Ht && void 0 !== Ht ? Ht : lt;
+       const [cu, Nu] = (0, su.useState)(qu), Ou = null !== fu && void 0 !== fu ? fu : cu;
```

#### 11. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L87-L98` → after: `L87-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L87-L98) · [Before (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L87-L98)

```diff
-     var jt = Vt(2024),
-       Ht = Vt(6687),
-       Xt = Vt(1556),
-       Qt = Vt(37115),
-       lt = Vt(1152),
-       Et = Vt(4914),
-       ft = Vt(37107),
-       wt = Vt(37133),
-       yt = Vt(1676),
-       Nt = Vt(4986),
-       Mt = Vt(6680);
-     const bt = new URL(yt.c).host;
+     var qu = ju(1986),
+       fu = ju(6705),
+       Cu = ju(1506),
+       bu = ju(37290),
+       cu = ju(1116),
+       Nu = ju(4931),
+       Ou = ju(37276),
+       Yu = ju(37304),
+       hu = ju(1639),
+       Du = ju(4992),
+       gu = ju(6691);
+     const Mu = new URL(hu.e).host;
```

#### 12. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L104-L106` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L104-L106) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L104-L106)

```diff
-         const tt = /^docs\//i.test(et) ? `${yt.c}/` : `${yt.c}/docs/`,
-           Ot = et.toLowerCase().replace(/^www\./, "").startsWith(`${bt}/`);
-         Vt = new URL(Ot ? `https://${et}` : et, tt)
+         const uu = /^docs\//i.test(Eu) ? `${hu.e}/` : `${hu.e}/docs/`,
+           su = Eu.toLowerCase().replace(/^www\./, "").startsWith(`${Mu}/`);
+         ju = new URL(su ? `https://${Eu}` : Eu, uu)
```

#### 13. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L110)

```diff
-       if ("https:" !== Vt.protocol && "http:" !== Vt.protocol || Vt.host !== bt && Vt.host !== `www.${bt}`) return null;
+       if ("https:" !== ju.protocol && "http:" !== ju.protocol || ju.host !== Mu && ju.host !== `www.${Mu}`) return null;
```

#### 14. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L112)

```diff
-       return Ct(Ot) || null !== (0, Nt.u)(Ot) ? Ot : (0, Nt.t)(Ot)
+       return Gu(su) || null !== (0, Du.C)(su) ? su : (0, Du.y)(su)
```

#### 15. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L116)

```diff
-       return tt === Nt.h || tt === Nt.l
+       return uu === Du.f || uu === Du.m
```

#### 16. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L121)

```diff
-       return null === et ? tt : `${yt.c}${et}`
+       return null === Eu ? uu : `${hu.e}${Eu}`
```

#### 17. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L123-L124` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L123-L124) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L123-L124)

```diff
-     var Kt = Vt(241),
-       ht = Vt(41639),
+     var wu = ju(207),
+       Ju = ju(41649),
```

#### 18. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L191)

```diff
-         const Vt = /\w/.test(et[0]) && /\w/.test(null !== (jt = tt[dt - 1]) && void 0 !== jt ? jt : "") || /\w/.test(null !== (Ht = et.at(-1)) && void 0 !== Ht ? Ht : "") && /\w/.test(null !== (Xt = tt[dt + et.length]) && void 0 !== Xt ? Xt : "");
+         const ju = /\w/.test(Eu[0]) && /\w/.test(null !== (qu = uu[lu - 1]) && void 0 !== qu ? qu : "") || /\w/.test(null !== (fu = Eu.at(-1)) && void 0 !== fu ? fu : "") && /\w/.test(null !== (Cu = uu[lu + Eu.length]) && void 0 !== Cu ? Cu : "");
```

#### 19. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L209)

```diff
-       return null !== (et = null === (Vt = /^[ \t]*/.exec(tt)) || void 0 === Vt ? void 0 : Vt[0]) && void 0 !== et ? et : ""
+       return null !== (Eu = null === (ju = /^[ \t]*/.exec(uu)) || void 0 === ju ? void 0 : ju[0]) && void 0 !== Eu ? Eu : ""
```

#### 20. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L228)

```diff
-         return (null !== (Vt = null === (Ot = tt.replace(/\\`/g, "").match(/`/g)) || void 0 === Ot ? void 0 : Ot.length) && void 0 !== Vt ? Vt : 0) % 2 === 1 && (Qt = !Qt), qt || jt && et !== Xt ? tt : function(tt, et, Vt) {
+         return (null !== (ju = null === (su = uu.replace(/\\`/g, "").match(/`/g)) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0) % 2 === 1 && (bu = !bu), Uu || qu && Eu !== Cu ? uu : function(uu, Eu, ju) {
```

#### 21. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L249)

```diff
-         (null !== (mt = null === (dt = tt.replace(/\\`/g, "").match(/`/g)) || void 0 === dt ? void 0 : dt.length) && void 0 !== mt ? mt : 0) % 2 === 1 && (Dt = !Dt);
+         (null !== (Xu = null === (lu = uu.replace(/\\`/g, "").match(/`/g)) || void 0 === lu ? void 0 : lu.length) && void 0 !== Xu ? Xu : 0) % 2 === 1 && (Zu = !Zu);
```

#### 22. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L253-L254)

```diff
-         const lt = null !== (jt = qt.slice(et + 1).find((tt => "" !== tt.trim()))) && void 0 !== jt ? jt : Vt;
-         return /^(?:[([`+-]|\/(?![/*]))/.test(lt.trim()) ? tt : tt.slice(0, tt.length - tt.trimStart().length) + Qt
+         const cu = null !== (qu = Uu.slice(Eu + 1).find((uu => "" !== uu.trim()))) && void 0 !== qu ? qu : ju;
+         return /^(?:[([`+-]|\/(?![/*]))/.test(cu.trim()) ? uu : uu.slice(0, uu.length - uu.trimStart().length) + bu
```

#### 23. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L256)

```diff
-       return mt.trim() === tt.trim() && et.trim() !== tt.trim() ? et : mt
+       return Xu.trim() === uu.trim() && Eu.trim() !== uu.trim() ? Eu : Xu
```

#### 24. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L261)

```diff
-       return null !== (et = tt.split("\n").find((tt => "" !== tt.trim()))) && void 0 !== et ? et : ""
+       return null !== (Eu = uu.split("\n").find((uu => "" !== uu.trim()))) && void 0 !== Eu ? Eu : ""
```

#### 25. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L268)

```diff
-         Vt.set(mt, (null !== (Ot = Vt.get(mt)) && void 0 !== Ot ? Ot : 0) + 1)
+         ju.set(Xu, (null !== (su = ju.get(Xu)) && void 0 !== su ? su : 0) + 1)
```

#### 26. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L273)

```diff
-         const tt = null !== (Dt = Vt.get(mt)) && void 0 !== Dt ? Dt : 0;
+         const uu = null !== (Zu = ju.get(Xu)) && void 0 !== Zu ? Zu : 0;
```

#### 27. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L326)

```diff
-       for (const Dt of (null !== (qt = vt().getLeadingCommentRanges(tt, et.getFullStart())) && void 0 !== qt ? qt : []).reverse()) {
+       for (const Zu of (null !== (Uu = du().getLeadingCommentRanges(uu, Eu.getFullStart())) && void 0 !== Uu ? Uu : []).reverse()) {
```

#### 28. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L339)

```diff
-       return (null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.length) && void 0 !== et ? et : 0) > 0
+       return (null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.length) && void 0 !== Eu ? Eu : 0) > 0
```

#### 29. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L348)

```diff
-             if (vt().isFunctionDeclaration(tt)) return null !== (et = null === (Vt = tt.name) || void 0 === Vt ? void 0 : Vt.text) && void 0 !== et ? et : null;
+             if (du().isFunctionDeclaration(uu)) return null !== (Eu = null === (ju = uu.name) || void 0 === ju ? void 0 : ju.text) && void 0 !== Eu ? Eu : null;
```

#### 30. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L393-L394` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L393-L394) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L393-L394)

```diff
-         Dt = qt.length > 0 ? qt : Ot;
-       return null !== (Vt = Dt.find((tt => tt.topLevel))) && void 0 !== Vt ? Vt : Dt[0]
+         Zu = Uu.length > 0 ? Uu : su;
+       return null !== (ju = Zu.find((uu => uu.topLevel))) && void 0 !== ju ? ju : Zu[0]
```

#### 31. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L398)

```diff
-       return "" === tt.trim() ? `${et.trim()}\n` : `${tt.replace(/\s*$/,"")}\n\n${et.trim()}\n`
+       return "" === uu.trim() ? `${Eu.trim()}\n` : `${uu.replace(/\s*$/,"")}\n\n${Eu.trim()}\n`
```

#### 32. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L414)

```diff
-       const Dt = null !== (Ot = Vt.find((tt => tt.topLevel && !tt.isProperty))) && void 0 !== Ot ? Ot : Vt.find((tt => tt.topLevel)),
+       const Zu = null !== (su = ju.find((uu => uu.topLevel && !uu.isProperty))) && void 0 !== su ? su : ju.find((uu => uu.topLevel)),
```

#### 33. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L417)

```diff
-       return null !== (qt = void 0 !== dt && !Vt.some((tt => tt.topLevel && tt.name === mt)) ? dt : Bt(tt, mt)) && void 0 !== qt ? qt : dt
+       return null !== (Uu = void 0 !== lu && !ju.some((uu => uu.topLevel && uu.name === Xu)) ? lu : xu(uu, Xu)) && void 0 !== Uu ? Uu : lu
```

#### 34. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L441)

```diff
-       return dt && Xt ? st(tt, mt, null !== lt && void 0 !== lt ? lt : dt, jt.functions, qt) : function(tt, et, Vt, Ot, qt) {
+       return lu && Cu ? yu(uu, Xu, null !== cu && void 0 !== cu ? cu : lu, qu.functions, Uu) : function(uu, Eu, ju, su, Uu) {
```

#### 35. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L458)

```diff
-       return 0 === Vt || "\n" === tt[Vt - 1] ? Vt : et
+       return 0 === ju || "\n" === uu[ju - 1] ? ju : Eu
```

#### 36. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L463)

```diff
-       if ("" !== tt.trim() && ("top" === Ot || "start" === Ot)) return `${Vt.trim()}\n\n${tt.replace(/^\s+/,"")}`;
+       if ("" !== uu.trim() && ("top" === su || "start" === su)) return `${ju.trim()}\n\n${uu.replace(/^\s+/,"")}`;
```

#### 37. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L465)

```diff
-       return qt ? `${tt.slice(0,qt.to)}\n\n${Vt.trim()}${tt.slice(qt.to)}` : pt(tt, Vt)
+       return Uu ? `${uu.slice(0,Uu.to)}\n\n${ju.trim()}${uu.slice(Uu.to)}` : Tu(uu, ju)
```

#### 38. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L479)

```diff
-         et = `${tt.slice(0,Math.max(tt.lastIndexOf(" "),60)).trimEnd()}\u2026`
+         Eu = `${uu.slice(0,Math.max(uu.lastIndexOf(" "),60)).trimEnd()}\u2026`
```

#### 39. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L518)

```diff
-           Dt = tt.length > 0 || !/\bplayerCommand\b/.test(jt) ? tt : [jt];
+           Zu = uu.length > 0 || !/\bplayerCommand\b/.test(qu) ? uu : [qu];
```

#### 40. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L520)

```diff
-           for (const tt of et.matchAll(me)) qt.add(`/${tt[1].split(/\s/)[0]}`)
+           for (const uu of Eu.matchAll(ZE)) Uu.add(`/${uu[1].split(/\s/)[0]}`)
```

#### 41. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L563)

```diff
-       return `When: ${tt.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
+       return `When: ${uu.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
```

#### 42. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L575-L576` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L575-L576) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L575-L576)

```diff
-         qt = new Set((null !== (et = tt.match(le)) && void 0 !== et ? et : []).map((tt => tt.toLowerCase().replace(/s$/, "")))).size,
-         Dt = (null !== (Vt = tt.match(Ee)) && void 0 !== Vt ? Vt : []).length;
+         Uu = new Set((null !== (Eu = uu.match(bE)) && void 0 !== Eu ? Eu : []).map((uu => uu.toLowerCase().replace(/s$/, "")))).size,
+         Zu = (null !== (ju = uu.match(cE)) && void 0 !== ju ? ju : []).length;
```

#### 43. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L581-L582)

```diff
-       const et = tt.split(/\n|\|/).map((tt => tt.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((tt => "" !== tt)).slice(0, 5).map((tt => tt.length > 90 ? `${tt.slice(0,89).trimEnd()}\u2026` : tt));
-       return et.length >= 2 ? et : []
+       const Eu = uu.split(/\n|\|/).map((uu => uu.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((uu => "" !== uu)).slice(0, 5).map((uu => uu.length > 90 ? `${uu.slice(0,89).trimEnd()}\u2026` : uu));
+       return Eu.length >= 2 ? Eu : []
```

#### 44. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L584)

```diff
-     var ye = Vt(5038);
+     var YE = ju(5041);
```

#### 45. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L604)

```diff
-         qt.set(tt, [...null !== (Dt = qt.get(tt)) && void 0 !== Dt ? Dt : [], Qt])
+         Uu.set(uu, [...null !== (Zu = Uu.get(uu)) && void 0 !== Zu ? Zu : [], bu])
```

#### 46. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L613-L614` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L613-L614) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L613-L614)

```diff
-         const tt = null !== (Xt = qt.get(Ne(Qt))) && void 0 !== Xt ? Xt : [];
-         1 !== tt.length || mt.includes(tt[0]) || (Ht = (0, ye.s)(Ht, new RegExp(`${Qt}(?![\\w$])`, "g"), ye.l, (() => tt[0])), jt.push({
+         const uu = null !== (Cu = Uu.get(hE(bu))) && void 0 !== Cu ? Cu : [];
+         1 !== uu.length || Xu.includes(uu[0]) || (fu = (0, YE.u)(fu, new RegExp(`${bu}(?![\\w$])`, "g"), YE.j, (() => uu[0])), qu.push({
```

#### 47. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L629)

```diff
-       Je = Object.keys(be).map((tt => `"${tt}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
+       eE = Object.keys(ME).map((uu => `"${uu}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
```

#### 48. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L997)

```diff
-         description: `Reads a page of Bloxd's docs as Markdown. ${Nt.k} lists every page with its link; then read the page, or the part of a long page, you need`,
+         description: `Reads a page of Bloxd's docs as Markdown. ${Du.i} lists every page with its link; then read the page, or the part of a long page, you need`,
```

#### 49. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1003` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1003) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1003)

```diff
-               description: `${Nt.k}, or a page it links to`
+               description: `${Du.i}, or a page it links to`
```

#### 50. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1021)

```diff
-               description: `${Je}, to list every one of them`
+               description: `${eE}, to list every one of them`
```

#### 51. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1110)

```diff
-       if (!et) throw new Error(`No AI Helper tool ${tt}`);
+       if (!Eu) throw new Error(`No AI Helper tool ${uu}`);
```

#### 52. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1114-L1115` → after: `L1114-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1114-L1115) · [Before (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1114-L1115)

```diff
-       Se = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       ce = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${We})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
+       PE = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
+       oE = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${aE})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1127)

```diff
-           Vt = -1 === et ? tt : tt.slice(0, et);
+           ju = -1 === Eu ? uu : uu.slice(0, Eu);
```

#### 54. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1133` → after: `L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1133) · [Before (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1133)

```diff
-           Ie(Vt.slice(Dt, tt)) && (Ot = -1 === Ot ? Dt : Ot, qt = tt), Dt = tt
+           mE(ju.slice(Zu, uu)) && (su = -1 === su ? Zu : su, Uu = uu), Zu = uu
```

#### 55. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1135-L1136` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1135-L1136) · [Before (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1135-L1136)

```diff
-         return -1 === qt ? tt : "" !== Vt.slice(qt).trim() ? tt.slice(qt).trimStart() : `${tt.slice(0,Ot).trimEnd()}\n${tt.slice(Vt.length)}`.trim()
-       }(Vt) : "" !== Vt.trim() ? Vt : tt
+         return -1 === Uu ? uu : "" !== ju.slice(Uu).trim() ? uu.slice(Uu).trimStart() : `${uu.slice(0,su).trimEnd()}\n${uu.slice(ju.length)}`.trim()
+       }(ju) : "" !== ju.trim() ? ju : uu
```

#### 56. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1145)

```diff
-       }(et) ? et : null
+       }(Eu) ? Eu : null
```

#### 57. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1159` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1159) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1159)

```diff
-             Ht[null !== (mt = Vt[1]) && void 0 !== mt ? mt : Vt[2]] = null !== (dt = Vt[3]) && void 0 !== dt ? dt : Vt[4]
+             fu[null !== (Xu = ju[1]) && void 0 !== Xu ? Xu : ju[2]] = null !== (lu = ju[3]) && void 0 !== lu ? lu : ju[4]
```

#### 58. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1185` → after: `L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1185) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1185)

```diff
-       let et = null !== tt && void 0 !== tt ? tt : {};
+       let Eu = null !== uu && void 0 !== uu ? uu : {};
```

#### 59. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1193` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1193) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1193)

```diff
-       for (const [Ot, qt] of Object.entries(et)) "string" === typeof qt ? Vt[Ot] = Le.has(Ot) && Ze.test(qt) && !qt.includes("\n") ? Ge(qt) : qt : "boolean" === typeof qt || "number" === typeof qt ? Vt[Ot] = String(qt) : "object" !== typeof qt || null === qt || Array.isArray(qt)  … [truncated]
+       for (const [su, Uu] of Object.entries(Eu)) "string" === typeof Uu ? ju[su] = VE.has(su) && KE.test(Uu) && !Uu.includes("\n") ? iE(Uu) : Uu : "boolean" === typeof Uu || "number" === typeof Uu ? ju[su] = String(Uu) : "object" !== typeof Uu || null === Uu || Array.isArray(Uu)  … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1219` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1219) · [Before (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1219)

```diff
-     const Ue = new RegExp(`\\b(${Ke.map((tt=>tt.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const FE = new RegExp(`\\b(${wE.map((uu=>uu.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
```

#### 61. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1226)

```diff
-           return `${tt}(${JSON.stringify(Vt)})`
+           return `${uu}(${JSON.stringify(ju)})`
```

#### 62. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1230-L1232` → after: `L1230-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1230-L1232) · [Before (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1230-L1232)

```diff
-         fileResult: (tt, et, Vt) => `<file path="${tt}"${Vt?' open_in_editor="true"':""}>\n${et}\n</file>`,
-         editFailure: (tt, et) => `${tt} failed: ${et}`,
-         lookupResult: (tt, et, Vt) => `${tt} ${et}:\n${Vt}`
+         fileResult: (uu, Eu, ju) => `<file path="${uu}"${ju?' open_in_editor="true"':""}>\n${Eu}\n</file>`,
+         editFailure: (uu, Eu) => `${uu} failed: ${Eu}`,
+         lookupResult: (uu, Eu, ju) => `${uu} ${Eu}:\n${ju}`
```

#### 63. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1245)

```diff
-           const mt = null !== (Vt = null === (Ot = tt.slice(dt).match(/^\s*<\|call\|>/)) || void 0 === Ot ? void 0 : Ot[0]) && void 0 !== Vt ? Vt : "";
+           const Xu = null !== (ju = null === (su = uu.slice(lu).match(/^\s*<\|call\|>/)) || void 0 === su ? void 0 : su[0]) && void 0 !== ju ? ju : "";
```

#### 64. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1267` → after: `L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1267) · [Before (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1267)

```diff
-       const dt = null !== (et = null !== (Vt = null !== (Ot = null !== (qt = mt.arguments) && void 0 !== qt ? qt : mt.params) && void 0 !== Ot ? Ot : mt.param) && void 0 !== Vt ? Vt : mt.args) && void 0 !== et ? et : mt.input,
+       const lu = null !== (Eu = null !== (ju = null !== (su = null !== (Uu = Xu.arguments) && void 0 !== Uu ? Uu : Xu.params) && void 0 !== su ? su : Xu.param) && void 0 !== ju ? ju : Xu.args) && void 0 !== Eu ? Eu : Xu.input,
```

#### 65. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1273` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1273) · [Before (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1273)

```diff
-         } = mt, Vt = ze(null !== dt && void 0 !== dt ? dt : et);
+         } = Xu, ju = WE(null !== lu && void 0 !== lu ? lu : Eu);
```

#### 66. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1312` → after: `L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1312) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1312)

```diff
-       if (Array.isArray(tt)) return `[${tt.map(xe).join(", ")}]`;
+       if (Array.isArray(uu)) return `[${uu.map(HE).join(", ")}]`;
```

#### 67. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1314)

```diff
-         return `{${Object.entries(tt).map((tt=>{let[et,Vt]=tt;return`${JSON.stringify(et)}: ${xe(Vt)}`})).join(", ")}}`
+         return `{${Object.entries(uu).map((uu=>{let[Eu,ju]=uu;return`${JSON.stringify(Eu)}: ${HE(ju)}`})).join(", ")}}`
```

#### 68. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1319-L1320` → after: `L1319-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1319-L1320) · [Before (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1319-L1320)

```diff
-         formatCall: (tt, et) => `<tool_call>\n<function=${tt}>\n${Object.entries(et).flatMap((tt=>{let[et,Vt]=tt;return void 0===Vt?[]:[`<parameter=${et}>\n${Vt}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
-         declareTools: (tt, et, Vt) => Vt || 0 === et.length ? tt : `${function(tt){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${tt.map((tt=>`\n${xe({type:"function",function:{name:tt.name,description:tt.description,parameters:tt.inputSchema}})}`)).joi … [truncated]
+         formatCall: (uu, Eu) => `<tool_call>\n<function=${uu}>\n${Object.entries(Eu).flatMap((uu=>{let[Eu,ju]=uu;return void 0===ju?[]:[`<parameter=${Eu}>\n${ju}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
+         declareTools: (uu, Eu, ju) => ju || 0 === Eu.length ? uu : `${function(uu){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${uu.map((uu=>`\n${HE({type:"function",function:{name:uu.name,description:uu.description,parameters:uu.inputSchema}})}`)).joi … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1322-L1324` → after: `L1322-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1322-L1324) · [Before (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1322-L1324)

```diff
-         fileResult: (tt, et, Vt) => `<tool_response>\nview_file ${tt}${Vt?" (open in the editor)":""}:\n${et}\n</tool_response>`,
-         editFailure: (tt, et) => `<tool_response>\nError: ${et}\n</tool_response>`,
-         lookupResult: (tt, et, Vt) => `<tool_response>\n${tt} ${et}:\n${Vt}\n</tool_response>`
+         fileResult: (uu, Eu, ju) => `<tool_response>\nview_file ${uu}${ju?" (open in the editor)":""}:\n${Eu}\n</tool_response>`,
+         editFailure: (uu, Eu) => `<tool_response>\nError: ${Eu}\n</tool_response>`,
+         lookupResult: (uu, Eu, ju) => `<tool_response>\n${uu} ${Eu}:\n${ju}\n</tool_response>`
```

#### 70. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1329-L1330` → after: `L1329-L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1329-L1330) · [Before (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1329-L1330)

```diff
-         formatCall: (tt, et) => `<tool_call name="${tt}">\n${Object.entries(et).flatMap((tt=>{let[et,Vt]=tt;return void 0===Vt?[]:[`<param name="${et}">${se.has(et)?Vt:`\n${Vt}\n`}</param>\n`]})).join("")}</tool_call>`,
-         declareTools: tt => tt,
+         formatCall: (uu, Eu) => `<tool_call name="${uu}">\n${Object.entries(Eu).flatMap((uu=>{let[Eu,ju]=uu;return void 0===ju?[]:[`<param name="${Eu}">${yE.has(Eu)?ju:`\n${ju}\n`}</param>\n`]})).join("")}</tool_call>`,
+         declareTools: uu => uu,
```

#### 71. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1332-L1334` → after: `L1332-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1332-L1334) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1332-L1334)

```diff
-         fileResult: (tt, et, Vt) => `<tool_result name="view_file" path="${tt}"${Vt?' open_in_editor="true"':""}>\n${et}\n</tool_result>`,
-         editFailure: (tt, et) => `<tool_result name="${tt}" is_error="true">\n${et}\n</tool_result>`,
-         lookupResult: (tt, et, Vt) => `<tool_result name="${tt}" about="${et.replace(/"/g,"'")}">\n${Vt}\n</tool_result>`
+         fileResult: (uu, Eu, ju) => `<tool_result name="view_file" path="${uu}"${ju?' open_in_editor="true"':""}>\n${Eu}\n</tool_result>`,
+         editFailure: (uu, Eu) => `<tool_result name="${uu}" is_error="true">\n${Eu}\n</tool_result>`,
+         lookupResult: (uu, Eu, ju) => `<tool_result name="${uu}" about="${Eu.replace(/"/g,"'")}">\n${ju}\n</tool_result>`
```

#### 72. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1352)

```diff
-             if (null === jt || null === Xt || (null !== (Vt = null === (Ot = et.at(-1)) || void 0 === Ot ? void 0 : Ot.index) && void 0 !== Vt ? Vt : -1) + (null !== (qt = null === (Dt = et.at(-1)) || void 0 === Dt ? void 0 : Dt.call.source.length) && void 0 !== qt ? qt : 0) > dt … [truncated]
+             if (null === qu || null === Cu || (null !== (ju = null === (su = Eu.at(-1)) || void 0 === su ? void 0 : su.index) && void 0 !== ju ? ju : -1) + (null !== (Uu = null === (Zu = Eu.at(-1)) || void 0 === Zu ? void 0 : Zu.call.source.length) && void 0 !== Uu ? Uu : 0) > lu … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1356)

```diff
-               Et = tt.slice(dt.index, Xt + (null !== (mt = null === lt || void 0 === lt ? void 0 : lt[0].length) && void 0 !== mt ? mt : 0));
+               Nu = uu.slice(lu.index, Cu + (null !== (Xu = null === cu || void 0 === cu ? void 0 : cu[0].length) && void 0 !== Xu ? Xu : 0));
```

#### 74. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1469` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1469) · [Before (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1469)

```diff
-           stopsWhen: tt => `${tt} !== undefined && ${tt} !== false`,
+           stopsWhen: uu => `${uu} !== undefined && ${uu} !== false`,
```

#### 75. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1473` → after: `L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1473) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1473)

```diff
-           stopsWhen: tt => `${tt} === false || ${tt} === null`,
+           stopsWhen: uu => `${uu} === false || ${uu} === null`,
```

#### 76. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1477)

```diff
-           stopsWhen: tt => `${tt} === "preventDamage"`,
+           stopsWhen: uu => `${uu} === "preventDamage"`,
```

#### 77. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1490)

```diff
-         hasErrors: (null !== (et = null === Ot || void 0 === Ot ? void 0 : Ot.length) && void 0 !== et ? et : 0) > 0
+         hasErrors: (null !== (Eu = null === su || void 0 === su ? void 0 : su.length) && void 0 !== Eu ? Eu : 0) > 0
```

#### 78. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1500)

```diff
-         pE: tt,
+         yN: uu,
```

#### 79. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1507` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1507) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1507)

```diff
-           pE: Vt,
+           yN: ju,
```

#### 80. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1514` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1514) · [Before (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1514)

```diff
-         pE: Vt,
+         yN: ju,
```

#### 81. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1545` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1545) · [Before (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1545)

```diff
-             for (const Dt of (null !== (qt = vt().getLeadingCommentRanges(tt, Vt.getFullStart())) && void 0 !== qt ? qt : []).reverse()) {
+             for (const Zu of (null !== (Uu = du().getLeadingCommentRanges(uu, ju.getFullStart())) && void 0 !== Uu ? Uu : []).reverse()) {
```

#### 82. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1611` → after: `L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1611) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1611)

```diff
-       return /^\s*$/.test(qt) ? qt : `${null!==(Vt=null===(Ot=/^\s*/.exec(qt))||void 0===Ot?void 0:Ot[0])&&void 0!==Vt?Vt:""}\t`
+       return /^\s*$/.test(Uu) ? Uu : `${null!==(ju=null===(su=/^\s*/.exec(Uu))||void 0===su?void 0:su[0])&&void 0!==ju?ju:""}\t`
```

#### 83. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1620-L1621` → after: `L1620-L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1620-L1621) · [Before (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1620-L1621)

```diff
-         Dt = /^[\w$"']+\s*:/.test(qt) && "" === tt.slice(cV(tt, et.getStart(Vt)), et.getStart(Vt)).trim() ? Ot.replace(/^\s*/, "\t") : `\t${et.getText(Vt)},`;
-       return /,\s*(?:\/\/.*)?$/.test(Dt) ? Dt : Dt.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
+         Zu = /^[\w$"']+\s*:/.test(Uu) && "" === uu.slice(oj(uu, Eu.getStart(ju)), Eu.getStart(ju)).trim() ? su.replace(/^\s*/, "\t") : `\t${Eu.getText(ju)},`;
+       return /,\s*(?:\/\/.*)?$/.test(Zu) ? Zu : Zu.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
```

#### 84. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1644` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1644) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1644)

```diff
-         mt = null !== (Vt = Dt[Dt.length - 1]) && void 0 !== Vt ? Vt : qt[qt.length - 1];
+         Xu = null !== (ju = Zu[Zu.length - 1]) && void 0 !== ju ? ju : Uu[Uu.length - 1];
```

#### 85. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1655)

```diff
-       return 1 === jt.length ? Xt : null
+       return 1 === qu.length ? Cu : null
```

#### 86. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1666` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1666) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1666)

```diff
-         pE: Ht
+         yN: fu
```

#### 87. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1675` → after: `L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1675) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1675)

```diff
-           for (let Ot = et; ft.has(Vt); Ot++) Vt = `${tt}${Ot}`;
+           for (let su = Eu; Ou.has(ju); su++) ju = `${uu}${su}`;
```

#### 88. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1683)

```diff
-           Et.push(null === tt ? "undefined" : `...${tt}`);
+           Nu.push(null === uu ? "undefined" : `...${uu}`);
```

#### 89. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1687` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1687) · [Before (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1687)

```diff
-           Et.push(null !== tt && void 0 !== tt ? tt : "undefined");
+           Nu.push(null !== uu && void 0 !== uu ? uu : "undefined");
```

#### 90. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1702` → after: `L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1702) · [Before (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1702)

```diff
-             text: `(${[tt.getText(et),...yt].join(", ")})`
+             text: `(${[uu.getText(Eu),...hu].join(", ")})`
```

#### 91. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1709` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1709) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1709)

```diff
-             text: `${tt}${yt.join(", ")}`
+             text: `${uu}${hu.join(", ")}`
```

#### 92. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1713-L1714` → after: `L1713-L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1713-L1714) · [Before (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1713-L1714)

```diff
-       const Mt = `${qt}(${Et.join(", ")})`,
-         bt = wt(`${LV(mt)}Result`, 2),
+       const gu = `${Uu}(${Nu.join(", ")})`,
+         Mu = Yu(`${Vj(Xu)}Result`, 2),
```

#### 93. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1716)

```diff
-         Ct = aV.has(Ot) ? [Mt] : Jt ? [`const ${bt} = ${Mt}`, `if (${Jt.stopsWhen(bt)}) return ${bt}`] : [`const ${bt} = ${Mt}`],
+         Gu = Dj.has(su) ? [gu] : eu ? [`const ${Mu} = ${gu}`, `if (${eu.stopsWhen(Mu)}) return ${Mu}`] : [`const ${Mu} = ${gu}`],
```

#### 94. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1731)

```diff
-                 return vt().isIdentifier(Ot) && et.has(Ot.text) && tt.expression.getText(Vt).startsWith(`${Ot.text} `)
+                 return du().isIdentifier(su) && Eu.has(su.text) && uu.expression.getText(ju).startsWith(`${su.text} `)
```

#### 95. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1736)

```diff
-                 text: `return ${bt}`
+                 text: `return ${Mu}`
```

#### 96. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1743)

```diff
-                   text: `${Ot.text} !== undefined ? ${Ot.text} : ${bt}`
+                   text: `${su.text} !== undefined ? ${su.text} : ${Mu}`
```

#### 97. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1753)

```diff
-             Ot = Dt ? RV(tt, Dt.getStart(et)) : `${tt.slice(cV(tt,Ht.getStart(et)),Ht.getStart(et)).replace(/\S.*$/,"")}\t`,
+             su = Zu ? kj(uu, Zu.getStart(Eu)) : `${uu.slice(oj(uu,fu.getStart(Eu)),fu.getStart(Eu)).replace(/\S.*$/,"")}\t`,
```

#### 98. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1755` → after: `L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1755) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1755)

```diff
-             mt = /^\s*$/.test(qt) ? `${Ot}return ${bt}\n${qt}` : `\n${Ot}return ${bt}\n`;
+             Xu = /^\s*$/.test(Uu) ? `${su}return ${Mu}\n${Uu}` : `\n${su}return ${Mu}\n`;
```

#### 99. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1771` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1771) · [Before (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1771)

```diff
-         text: `\n${RV(tt,Wt.getStart(et))}${Mt}`
+         text: `\n${kj(uu,au.getStart(Eu))}${gu}`
```

#### 100. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1775` → after: `L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1775) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1775)

```diff
-           Ot = Vt ? RV(tt, Vt.getStart(et)) : `${tt.slice(cV(tt,Ht.getStart(et)),Ht.getStart(et)).replace(/\S.*$/,"")}\t`,
+           su = ju ? kj(uu, ju.getStart(Eu)) : `${uu.slice(oj(uu,fu.getStart(Eu)),fu.getStart(Eu)).replace(/\S.*$/,"")}\t`,
```

#### 101. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1781)

```diff
-           text: `\n${Ct.map((tt=>`${Ot}${tt}`)).join("\n")}${Vt?Dt?`\n${Ot}`:"":"\n"}`
+           text: `\n${Gu.map((uu=>`${su}${uu}`)).join("\n")}${ju?Zu?`\n${su}`:"":"\n"}`
```

#### 102. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1786)

```diff
-           qt = ut ? [`const ${Ot} = ${Xt.getText(et)}`, `return ${Ot} !== undefined ? ${Ot} : ${bt}`] : [`return ${Xt.getText(et)}`];
+           Uu = pu ? [`const ${su} = ${Cu.getText(Eu)}`, `return ${su} !== undefined ? ${su} : ${Mu}`] : [`return ${Cu.getText(Eu)}`];
```

#### 103. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1790)

```diff
-           text: `{\n${[...Ct,...qt].map((tt=>`${Vt}\t${tt}`)).join("\n")}\n${Vt}}`
+           text: `{\n${[...Gu,...Uu].map((uu=>`${ju}\t${uu}`)).join("\n")}\n${ju}}`
```

#### 104. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1801)

```diff
-       return vt().isIdentifier(tt) ? et.has(tt.text) ? tt : null : vt().isConditionalExpression(tt) ? oV(tt.whenFalse, et) : null
+       return du().isIdentifier(uu) ? Eu.has(uu.text) ? uu : null : du().isConditionalExpression(uu) ? Sj(uu.whenFalse, Eu) : null
```

#### 105. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1814)

```diff
-       return (0, ye.f)(null !== (Ot = null === (qt = tt.body) || void 0 === qt ? void 0 : qt.getText(et)) && void 0 !== Ot ? Ot : "", new RegExp(`${Vt}\\s*\\(`), ye.l).length > 0
+       return (0, YE.e)(null !== (su = null === (Uu = uu.body) || void 0 === Uu ? void 0 : Uu.getText(Eu)) && void 0 !== su ? su : "", new RegExp(`${ju}\\s*\\(`), YE.j).length > 0
```

#### 106. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1822)

```diff
-       } = Vt, mt = null !== (Ot = Vt.overrides) && void 0 !== Ot ? Ot : new Set;
+       } = ju, Xu = null !== (su = ju.overrides) && void 0 !== su ? su : new Set;
```

#### 107. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1824)

```diff
-         const tt = `${Dt?`${Dt}\n`:""}${et.trim()}\n`,
+         const uu = `${Zu?`${Zu}\n`:""}${Eu.trim()}\n`,
```

#### 108. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1838)

```diff
-             return (null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.properties) && void 0 !== et ? et : []).flatMap((tt => {
+             return (null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.properties) && void 0 !== Eu ? Eu : []).flatMap((uu => {
```

#### 109. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1897)

```diff
-                 return vt().isPropertyAssignment(tt) && void 0 !== Vt ? `\t${tt.name.getText(et)}: ${Vt},` : `\t${tt.getText(et)},`
+                 return du().isPropertyAssignment(uu) && void 0 !== ju ? `\t${uu.name.getText(Eu)}: ${ju},` : `\t${uu.getText(Eu)},`
```

#### 110. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1903` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1903) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1903)

```diff
-                   text: `{\n${[...tt,...Xt].join("\n")}\n}`
+                   text: `{\n${[...uu,...Cu].join("\n")}\n}`
```

#### 111. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1918)

```diff
-               text: `${Xt.join("\n")}\n`
+               text: `${Cu.join("\n")}\n`
```

#### 112. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1932)

```diff
-               text: `${Mt?",":""}\n${Xt.join("\n")}\n`
+               text: `${gu?",":""}\n${Cu.join("\n")}\n`
```

#### 113. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1949` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1949) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1949)

```diff
-             text: `${qt}${et.slice(Mt.from,Mt.to)}\n\n`
+             text: `${Uu}${Eu.slice(gu.from,gu.to)}\n\n`
```

#### 114. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1960` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1960) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1960)

```diff
-           ft.push(0 === ft.length ? tt : `${qt}${tt}`), Jt.push(Vt)
+           Ou.push(0 === Ou.length ? uu : `${Uu}${uu}`), eu.push(ju)
```

#### 115. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1976` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1976) · [Before (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1976)

```diff
-           const mt = `${LV(qt)}${ZV(et)}`,
+           const Xu = `${Vj(Uu)}${Kj(Eu)}`,
```

#### 116. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1984)

```diff
-           const ft = kV(Xt.pE).map(((tt, et) => null !== tt && void 0 !== tt ? tt : `arg${et}`));
+           const Ou = Qj(Cu.yN).map(((uu, Eu) => null !== uu && void 0 !== uu ? uu : `arg${Eu}`));
```

#### 117. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1986-L1988` → after: `L1986-L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1986-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1986-L1988) · [Before (L1986-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1986-L1988)

```diff
-             const tt = `${mt}(${ft.join(", ")})`,
-               Vt = `${LV(qt)}Result`;
-             Ct(`function ${et}(${ft.join(", ")}) {\n\t${aV.has(et)?tt:`const ${Vt} = ${tt}\n\treturn ${Vt}`}\n}`, -1), wt.push(et), lt.add(et);
+             const uu = `${Xu}(${Ou.join(", ")})`,
+               ju = `${Vj(Uu)}Result`;
+             Gu(`function ${Eu}(${Ou.join(", ")}) {\n\t${Dj.has(Eu)?uu:`const ${ju} = ${uu}\n\treturn ${ju}`}\n}`, -1), Yu.push(Eu), cu.add(Eu);
```

#### 118. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1991` → after: `L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L1991) · [Before (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L1991)

```diff
-           UV(Dt.pE, dt.file, mt) || (Et.push(...GV(tt, dt.file, Dt, et, mt, ft, qt, !0 === Vt.runsLast)), yt.push(et));
+           Fj(Zu.yN, lu.file, Xu) || (Nu.push(...ij(uu, lu.file, Zu, Eu, Xu, Ou, Uu, !0 === ju.runsLast)), hu.push(Eu));
```

#### 119. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2003)

```diff
-         ut = `${""===tt?"":`${tt}\n\n`}${Dt?`${Dt}\n`:""}${ft.join("")}\n`
+         pu = `${""===uu?"":`${uu}\n\n`}${Zu?`${Zu}\n`:""}${Ou.join("")}\n`
```

#### 120. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2040` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2040) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2040)

```diff
-         qt = null !== (Vt = Ot.find((tt => "color" === tt.name))) && void 0 !== Vt ? Vt : Ot[0];
+         Uu = null !== (ju = su.find((uu => "color" === uu.name))) && void 0 !== ju ? ju : su[0];
```

#### 121. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2044)

```diff
-       return `{ ${qt.name}: ${mt} }`
+       return `{ ${Uu.name}: ${Xu} }`
```

#### 122. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2056)

```diff
-         return et.length > 7 ? `${et.slice(0,7).join(" or ")} or ...` : et.join(" or ")
+         return Eu.length > 7 ? `${Eu.slice(0,7).join(" or ")} or ...` : Eu.join(" or ")
```

#### 123. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2058-L2059` → after: `L2058-L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2058-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2058-L2059) · [Before (L2058-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2058-L2059)

```diff
-       if (Ot.isStringLiteral()) return `"${Ot.value}"`;
-       if (Ot.isNumberLiteral()) return `${Ot.value}`;
+       if (su.isStringLiteral()) return `"${su.value}"`;
+       if (su.isNumberLiteral()) return `${su.value}`;
```

#### 124. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2064)

```diff
-         return `[${tt.getTypeArguments(Ot).map((et=>gV(tt,et,Vt+1))).join(", ")}]`
+         return `[${uu.getTypeArguments(su).map((Eu=>nj(uu,Eu,ju+1))).join(", ")}]`
```

#### 125. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2069` → after: `L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2069) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2069)

```diff
-         return `a list of ${et.includes(" or ")?`(${et})`:et}`
+         return `a list of ${Eu.includes(" or ")?`(${Eu})`:Eu}`
```

#### 126. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2074)

```diff
-       return `{ ${qt.slice(0,10).map((tt=>`${tt.name}${tt.flags&vt().SymbolFlags.Optional?"?":""}`)).join(", ")}${qt.length>10?", ...":""} }`
+       return `{ ${Uu.slice(0,10).map((uu=>`${uu.name}${uu.flags&du().SymbolFlags.Optional?"?":""}`)).join(", ")}${Uu.length>10?", ...":""} }`
```

#### 127. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2102-L2103` → after: `L2102-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2102-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2102-L2103) · [Before (L2102-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2102-L2103)

```diff
-               jt = null !== (Dt = null === Ot || void 0 === Ot ? void 0 : Ot.getParameters()) && void 0 !== Dt ? Dt : [],
-               Ht = new Set((null !== (mt = null === Ot || void 0 === Ot || null === (dt = Ot.getDeclaration()) || void 0 === dt ? void 0 : dt.typeParameters) && void 0 !== mt ? mt : []).map((tt => tt.name.text)));
+               qu = null !== (Zu = null === su || void 0 === su ? void 0 : su.getParameters()) && void 0 !== Zu ? Zu : [],
+               fu = new Set((null !== (Xu = null === su || void 0 === su || null === (lu = su.getDeclaration()) || void 0 === lu ? void 0 : lu.typeParameters) && void 0 !== Xu ? Xu : []).map((uu => uu.name.text)));
```

#### 128. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2107)

```diff
-                 dt = mt && vt().isParameter(mt) ? mt : void 0;
+                 lu = Xu && du().isParameter(Xu) ? Xu : void 0;
```

#### 129. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2112` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2112) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2112)

```diff
-                 Vt.add(`${qt.expression.getText(tt)} can't take null as ${jt[Ot].name} (value ${Ot+1}): ${mt}, or it throws when that line runs.`)
+                 ju.add(`${Uu.expression.getText(uu)} can't take null as ${qu[su].name} (value ${su+1}): ${Xu}, or it throws when that line runs.`)
```

#### 130. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2150)

```diff
-             const Ot = null !== (Dt = null === (mt = et.getResolvedSignature(qt)) || void 0 === mt ? void 0 : mt.getParameters()) && void 0 !== Dt ? Dt : [];
+             const su = null !== (Zu = null === (Xu = Eu.getResolvedSignature(Uu)) || void 0 === Xu ? void 0 : Xu.getParameters()) && void 0 !== Zu ? Zu : [];
```

#### 131. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2153)

```diff
-               dt && OO(Dt, et.getTypeOfSymbol(dt), tt, et) && Vt.add(`${qt.expression.getText(tt)} can't take api.createEnchantmentAttributesForItem(...) as ${dt.name} (value ${mt+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
+               lu && ss(Zu, Eu.getTypeOfSymbol(lu), uu, Eu) && ju.add(`${Uu.expression.getText(uu)} can't take api.createEnchantmentAttributesForItem(...) as ${lu.name} (value ${Xu+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
```

#### 132. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2191)

```diff
-           return vt().isPropertyAccessExpression(tt) && vt().isIdentifier(tt.expression) && "CONFIG" === tt.expression.text && null !== (et = Vt.get(tt.name.text)) && void 0 !== et ? et : tt.getText()
+           return du().isPropertyAccessExpression(uu) && du().isIdentifier(uu.expression) && "CONFIG" === uu.expression.text && null !== (Eu = ju.get(uu.name.text)) && void 0 !== Eu ? Eu : uu.getText()
```

#### 133. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2193` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L2193) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L2193)

```diff
-         mt = tt => tt && (vt().isStringLiteral(tt) || vt().isNoSubstitutionTemplateLiteral(tt)) ? tt.text : tt && vt().isObjectLiteralExpression(tt) ? tt.properties.flatMap((tt => vt().isPropertyAssignment(tt) && (vt().isIdentifier(tt.name) || vt().isStringLiteral(tt.name)) ? [`$ … [truncated]
+         Xu = uu => uu && (du().isStringLiteral(uu) || du().isNoSubstitutionTemplateLiteral(uu)) ? uu.text : uu && du().isObjectLiteralExpression(uu) ? uu.properties.flatMap((uu => du().isPropertyAssignment(uu) && (du().isIdentifier(uu.name) || du().isStringLiteral(uu.name)) ? [`$ … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5098` → after: `L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5098) · [Before (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5098)

```diff
-       } = bV(`(${tt})`), Ot = et.statements[0];
+       } = Mj(`(${uu})`), su = Eu.statements[0];
```

#### 135. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5136` → after: `L5136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5136) · [Before (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5136)

```diff
-       }(et.startsWith("{") ? et : `{${et}}`);
+       }(Eu.startsWith("{") ? Eu : `{${Eu}}`);
```

#### 136. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5147` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5147) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5147)

```diff
-         if (qt && Dt > 0) qt[1] += `\n${et}`;
+         if (Uu && Zu > 0) Uu[1] += `\n${Eu}`;
```

#### 137. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5154` → after: `L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5154) · [Before (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5154)

```diff
-         Dt = Math.max(0, Dt + (null !== (dt = null === (jt = Vt.match(/[[{(]/g)) || void 0 === jt ? void 0 : jt.length) && void 0 !== dt ? dt : 0) - (null !== (Ht = null === (Xt = Vt.match(/[\]})]/g)) || void 0 === Xt ? void 0 : Xt.length) && void 0 !== Ht ? Ht : 0))
+         Zu = Math.max(0, Zu + (null !== (lu = null === (qu = ju.match(/[[{(]/g)) || void 0 === qu ? void 0 : qu.length) && void 0 !== lu ? lu : 0) - (null !== (fu = null === (Cu = ju.match(/[\]})]/g)) || void 0 === Cu ? void 0 : Cu.length) && void 0 !== fu ? fu : 0))
```

#### 138. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5168` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5168) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5168)

```diff
-         problem: `${tt.key} must be a plain value like ${tt.value}, not ${et}`
+         problem: `${uu.key} must be a plain value like ${uu.value}, not ${Eu}`
```

#### 139. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5171` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5171) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5171)

```diff
-         problem: `${tt.key} must be a number, like ${tt.value}`
+         problem: `${uu.key} must be a number, like ${uu.value}`
```

#### 140. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5174` → after: `L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5174) · [Before (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5174)

```diff
-         problem: `${tt.key} must be true or false`
+         problem: `${uu.key} must be true or false`
```

#### 141. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5179` → after: `L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5179) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5179)

```diff
-         problem: `${tt.key} must be a position [x, y, z], like ${"null"===tt.value?"[0, 10, 0]":tt.value}`
+         problem: `${uu.key} must be a position [x, y, z], like ${"null"===uu.value?"[0, 10, 0]":uu.value}`
```

#### 142. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5182` → after: `L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5182) · [Before (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5182)

```diff
-         problem: `${tt.key} must be a list in [ ], like ${tt.value}`
+         problem: `${uu.key} must be a list in [ ], like ${uu.value}`
```

#### 143. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5210` → after: `L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5210) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5210)

```diff
-               mt = Dt ? Qt.get(null !== (et = wO(Dt.initializer)) && void 0 !== et ? et : "") : void 0;
+               Xu = Zu ? bu.get(null !== (Eu = Ys(Zu.initializer)) && void 0 !== Eu ? Eu : "") : void 0;
```

#### 144. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5219` → after: `L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5219) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5219)

```diff
-           const tt = null !== (Et = wO(ft)) && void 0 !== Et ? Et : "",
+           const uu = null !== (Nu = Ys(Ou)) && void 0 !== Nu ? Nu : "",
```

#### 145. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5223-L5225` → after: `L5223-L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5223-L5225) · [Before (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5223-L5225)

```diff
-             const et = qt.named ? `item: ${JSON.stringify(qt.item)}` : `item: ${JSON.stringify(qt.item)}, name: ${JSON.stringify(tt)}`;
-             Ht.unshift(`"${tt}" isn't an item, so it is a ${qt.item}${qt.named?"":` named "${tt}"`}`), jt = `${jt.slice(0,qt.property.getStart()-dt)}${et}${jt.slice(qt.property.getEnd()-dt)}`
-           } else null === et ? Xt.unshift(`"${tt}"`) : et !== tt && (Ht.unshift(`"${tt}" is "${et}"`), jt = `${jt.slice(0,ft.getStart()-dt)}${JSON.stringify(et)}${jt.slice(ft.getEnd()-dt)}`)
+             const Eu = Uu.named ? `item: ${JSON.stringify(Uu.item)}` : `item: ${JSON.stringify(Uu.item)}, name: ${JSON.stringify(uu)}`;
+             fu.unshift(`"${uu}" isn't an item, so it is a ${Uu.item}${Uu.named?"":` named "${uu}"`}`), qu = `${qu.slice(0,Uu.property.getStart()-lu)}${Eu}${qu.slice(Uu.property.getEnd()-lu)}`
+           } else null === Eu ? Cu.unshift(`"${uu}"`) : Eu !== uu && (fu.unshift(`"${uu}" is "${Eu}"`), qu = `${qu.slice(0,Ou.getStart()-lu)}${JSON.stringify(Eu)}${qu.slice(Ou.getEnd()-lu)}`)
```

#### 146. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5228` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5228) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5228)

```diff
-           problem: `${Xt.join(", ")} ${1===Xt.length?"item"===Vt?"isn't an":"isn't a":"aren't"} ${Vt} name${1===Xt.length?"":"s"}, so ${tt.key} kept ${tt.value}`
+           problem: `${Cu.join(", ")} ${1===Cu.length?"item"===ju?"isn't an":"isn't a":"aren't"} ${ju} name${1===Cu.length?"":"s"}, so ${uu.key} kept ${uu.value}`
```

#### 147. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5240` → after: `L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5240) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5240)

```diff
-           problem: `${tt.key} must be text in quotes, like ${tt.value}`
+           problem: `${uu.key} must be text in quotes, like ${uu.value}`
```

#### 148. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5245)

```diff
-             problem: `"${et}" isn't ${"item"===tt.kind?"an":"a"} ${tt.kind} name, so ${tt.key} kept ${tt.value}`
+             problem: `"${Eu}" isn't ${"item"===uu.kind?"an":"a"} ${uu.kind} name, so ${uu.key} kept ${uu.value}`
```

#### 149. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5249` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5249) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5249)

```diff
-             fixed: `"${et}" is "${Ot}"`
+             fixed: `"${Eu}" is "${su}"`
```

#### 150. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5279` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5279) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5279)

```diff
-       return null !== (et = MO.find((tt => JO(tt.name) === Vt || JO(tt.title) === Vt))) && void 0 !== et ? et : null
+       return null !== (Eu = Ms.find((uu => Gs(uu.name) === ju || Gs(uu.title) === ju))) && void 0 !== Eu ? Eu : null
```

#### 151. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5284` → after: `L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5284) · [Before (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5284)

```diff
-       return null !== (et = QO.find((et => et.name === tt))) && void 0 !== et ? et : null
+       return null !== (Eu = bs.find((Eu => Eu.name === uu))) && void 0 !== Eu ? Eu : null
```

#### 152. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5291` → after: `L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5291) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5291)

```diff
-         return 0 === tt.length ? "" : `const CONFIG = {\n${tt.map((tt=>{var Vt;return`\t${tt.key}: ${null!==(Vt=et.get(tt.key))&&void 0!==Vt?Vt:tt.value}, // ${tt.about}`})).join("\n")}\n}`
+         return 0 === uu.length ? "" : `const CONFIG = {\n${uu.map((uu=>{var ju;return`\t${uu.key}: ${null!==(ju=Eu.get(uu.key))&&void 0!==ju?ju:uu.value}, // ${uu.about}`})).join("\n")}\n}`
```

#### 153. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5293` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5293) · [Before (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5293)

```diff
-       return `${""===Vt?"":`${Vt}\n\n`}${tt.code.trim()}\n`
+       return `${""===ju?"":`${ju}\n\n`}${uu.code.trim()}\n`
```

#### 154. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5296` → after: `L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5296) · [Before (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5296)

```diff
-     function hO(tt) {
+     function as(uu) {
```

#### 155. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5303` → after: `L5303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5303) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5303)

```diff
-             for (const tt of null !== (Dt = qt.uses) && void 0 !== Dt ? Dt : []) {
+             for (const uu of null !== (Zu = Uu.uses) && void 0 !== Zu ? Zu : []) {
```

#### 156. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5316` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5316) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5316)

```diff
-         Ot = new RegExp(`function ${et.name}\\s*\\([^)]*\\)\\s*\\{`).exec(tt);
+         su = new RegExp(`function ${Eu.name}\\s*\\([^)]*\\)\\s*\\{`).exec(uu);
```

#### 157. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5335` → after: `L5335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5335) · [Before (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5335)

```diff
-         for (const et of hO(qt)) {
+         for (const Eu of as(Uu)) {
```

#### 158. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5375` → after: `L5375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5375) · [Before (L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5375)

```diff
-       for (const Ot of hO(YV(tt.code)))
+       for (const su of as(tj(uu.code)))
```

#### 159. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5390` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5390) · [Before (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5390)

```diff
-               qt.push(`${tt.name} has no setting ${dt}`);
+               Uu.push(`${uu.name} has no setting ${lu}`);
```

#### 160. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5413` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5413) · [Before (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5413)

```diff
-           heading: "" === tt.trim() ? void 0 : `// ---- ${et.title} (ready-made) ----`
+           heading: "" === uu.trim() ? void 0 : `// ---- ${Eu.title} (ready-made) ----`
```

#### 161. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5430` → after: `L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5430) · [Before (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5430)

```diff
-       return `- ${tt.name}: ${tt.summary}. Settings: ${tt.settings.map((tt=>tt.key)).join(", ")}`
+       return `- ${uu.name}: ${uu.summary}. Settings: ${uu.settings.map((uu=>uu.key)).join(", ")}`
```

#### 162. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5435` → after: `L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5435) · [Before (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5435)

```diff
-       const Vt = null !== (et = null === tt || void 0 === tt ? void 0 : tt.trim().toLowerCase()) && void 0 !== et ? et : "",
+       const ju = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.trim().toLowerCase()) && void 0 !== Eu ? Eu : "",
```

#### 163. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5439` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5439) · [Before (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5439)

```diff
-       return `${Ot?`Prefabs for ${bO.get(Ot)}:`:""===Vt||"all"===Vt?"Every prefab:":`There is no category ${tt}. Every prefab:`}\n${qt.length>0?qt.map(PO).join("\n"):"(none yet)"}${Dt.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${Dt.map((t … [truncated]
+       return `${su?`Prefabs for ${es.get(su)}:`:""===ju||"all"===ju?"Every prefab:":`There is no category ${uu}. Every prefab:`}\n${Uu.length>0?Uu.map(Vs).join("\n"):"(none yet)"}${Zu.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${Zu.map((u … [truncated]
```

#### 164. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5444-L5447` → after: `L5444-L5447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5444-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5444-L5447) · [Before (L5444-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5444-L5447)

```diff
-       const Ot = [...tt.settings, ...RO(tt)].map((tt => `- ${tt.key} (${tt.kind}, default ${tt.value}): ${tt.about}`)).join("\n"),
-         qt = null !== (Vt = tt.changeable) && void 0 !== Vt && Vt.length ? `\nFunctions to replace by name for a game of their own:\n${tt.changeable.map((tt=>`- ${tt.name}: ${tt.about}`)).join("\n")}` : "",
-         Dt = et ? `\nIts code, as it goes in with the default settings:\n${KO(tt)}` : "";
-       return `${tt.name} (${tt.title}): ${tt.summary}.\nHow it plays: ${tt.howItPlays}\nSettings:\n${Ot}${qt}${tt.setup?`\nThe creator sets up: ${tt.setup}`:""}${Dt}`
+       const su = [...uu.settings, ...vs(uu)].map((uu => `- ${uu.key} (${uu.kind}, default ${uu.value}): ${uu.about}`)).join("\n"),
+         Uu = null !== (ju = uu.changeable) && void 0 !== ju && ju.length ? `\nFunctions to replace by name for a game of their own:\n${uu.changeable.map((uu=>`- ${uu.name}: ${uu.about}`)).join("\n")}` : "",
+         Zu = Eu ? `\nIts code, as it goes in with the default settings:\n${ds(uu)}` : "";
+       return `${uu.name} (${uu.title}): ${uu.summary}.\nHow it plays: ${uu.howItPlays}\nSettings:\n${su}${Uu}${uu.setup?`\nThe creator sets up: ${uu.setup}`:""}${Zu}`
```

#### 165. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5455` → after: `L5455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5455) · [Before (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5455)

```diff
-         Ot = ` ${tt.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
+         su = ` ${uu.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
```

#### 166. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5457-L5458` → after: `L5457-L5458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5457-L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5457-L5458) · [Before (L5457-L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5457-L5458)

```diff
-         const et = tt.keywords.map((tt => tt.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((tt => tt.includes(" ") ? Ot.includes(` ${tt} `) : Vt.has(tt))),
-           qt = Math.min(...et.map((tt => Ot.indexOf(` ${tt} `))));
+         const Eu = uu.keywords.map((uu => uu.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((uu => uu.includes(" ") ? su.includes(` ${uu} `) : ju.has(uu))),
+           Uu = Math.min(...Eu.map((uu => su.indexOf(` ${uu} `))));
```

#### 167. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5494` → after: `L5494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5494) · [Before (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5494)

```diff
-               mt = tt => "string" === typeof tt ? tt : "boolean" === typeof tt ? String(tt) : Array.isArray(tt) ? tt.filter((tt => "string" === typeof tt)).join("\n") : void 0,
+               Xu = uu => "string" === typeof uu ? uu : "boolean" === typeof uu ? String(uu) : Array.isArray(uu) ? uu.filter((uu => "string" === typeof uu)).join("\n") : void 0,
```

#### 168. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5508` → after: `L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5508) · [Before (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5508)

```diff
-             return Ot.startsWith("[") ? qt : tt
+             return su.startsWith("[") ? Uu : uu
```

#### 169. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5511-L5512` → after: `L5511-L5512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5511-L5512) · [Before (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5511-L5512)

```diff
-         jt = null !== (et = null === (Vt = dt.question) || void 0 === Vt ? void 0 : Vt.replace(/\s+/g, " ").trim()) && void 0 !== et ? et : "",
-         Ht = (null !== (Ot = dt.choices) && void 0 !== Ot ? Ot : "").includes("\n") ? (null !== (qt = dt.choices) && void 0 !== qt ? qt : "").split("\n") : (null !== (Dt = dt.choices) && void 0 !== Dt ? Dt : "").split("|"),
+         qu = null !== (Eu = null === (ju = lu.question) || void 0 === ju ? void 0 : ju.replace(/\s+/g, " ").trim()) && void 0 !== Eu ? Eu : "",
+         fu = (null !== (su = lu.choices) && void 0 !== su ? su : "").includes("\n") ? (null !== (Uu = lu.choices) && void 0 !== Uu ? Uu : "").split("\n") : (null !== (Zu = lu.choices) && void 0 !== Zu ? Zu : "").split("|"),
```

#### 170. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5535-L5538` → after: `L5535-L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5535-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5535-L5538) · [Before (L5535-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5535-L5538)

```diff
-       YO = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${iO})\s*\(|(?:${iO})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
-       BO = new RegExp(`^(?:${iO})$`),
-       pO = new RegExp(String.raw`^(${iO})(\s*\([^()\n]*\)\s*\{)`, "gm"),
-       xO = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${iO})\b|\buse_?prefab\s*\(`, "i");
+       Ts = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${xs})\s*\(|(?:${xs})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+       Hs = new RegExp(`^(?:${xs})$`),
+       As = new RegExp(String.raw`^(${xs})(\s*\([^()\n]*\)\s*\{)`, "gm"),
+       ns = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${xs})\b|\buse_?prefab\s*\(`, "i");
```

#### 171. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5551` → after: `L5551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5551) · [Before (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5551)

```diff
-           return void 0 === et.path ? et : {
+           return void 0 === Eu.path ? Eu : {
```

#### 172. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5555` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5555) · [Before (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5555)

```diff
-           return void 0 === et.url ? et : {
+           return void 0 === Eu.url ? Eu : {
```

#### 173. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5601-L5603` → after: `L5601-L5603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5601-L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5601-L5603) · [Before (L5601-L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5601-L5603)

```diff
-       const yt = Object.keys(Vt).some(wt.h),
-         Nt = tt => null !== tt && yt && (0, wt.h)(tt),
-         Mt = tt => Nt(tt) ? `${wt.l}${(0,wt.k)(tt)}` : null !== Dt && void 0 !== Dt ? Dt : nO(tt),
+       const hu = Object.keys(ju).some(Yu.c),
+         Du = uu => null !== uu && hu && (0, Yu.c)(uu),
+         gu = uu => Du(uu) ? `${Yu.i}${(0,Yu.e)(uu)}` : null !== Zu && void 0 !== Zu ? Zu : uU(uu),
```

#### 174. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5643-L5645` → after: `L5643-L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5643-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5643-L5645) · [Before (L5643-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5643-L5645)

```diff
-               return `${Vt.slice(0,Math.max(Vt.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
-             }(null !== et && void 0 !== et ? et : ""),
-             Dt = null !== (Ot = It.get(tt)) && void 0 !== Ot ? Ot : [];
+               return `${ju.slice(0,Math.max(ju.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
+             }(null !== Eu && void 0 !== Eu ? Eu : ""),
+             Zu = null !== (su = mu.get(uu)) && void 0 !== su ? su : [];
```

#### 175. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5647` → after: `L5647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5647) · [Before (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5647)

```diff
-           ("" === qt || Dt.includes(qt) || It.set(tt, [...Dt, qt]), "" !== qt) && kt.set(tt, [...null !== (mt = kt.get(tt)) && void 0 !== mt ? mt : [], {
+           ("" === Uu || Zu.includes(Uu) || mu.set(uu, [...Zu, Uu]), "" !== Uu) && Qu.set(uu, [...null !== (Xu = Qu.get(uu)) && void 0 !== Xu ? Xu : [], {
```

#### 176. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5665` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5665) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5665)

```diff
-               error: `There is no prefab called ${et}. The prefabs are: ${MO.map((tt=>tt.name)).join(", ")}.`
+               error: `There is no prefab called ${Eu}. The prefabs are: ${Ms.map((uu=>uu.name)).join(", ")}.`
```

#### 177. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5667` → after: `L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5667) · [Before (L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5667)

```diff
-           }(null !== (qt = Ht[tt]) && void 0 !== qt ? qt : "", et, Vt, jt);
+           }(null !== (Uu = fu[uu]) && void 0 !== Uu ? Uu : "", Eu, ju, qu);
```

#### 178. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5673` → after: `L5673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5673) · [Before (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5673)

```diff
-           }), zt(tt, null !== Ot && void 0 !== Ot ? Ot : mt.prefab.title, mt.text), rt.push({
+           }), Wu(uu, null !== su && void 0 !== su ? su : Xu.prefab.title, Xu.text), Iu.push({
```

#### 179. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5679` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5679) · [Before (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5679)

```diff
-             setup: null !== (Dt = mt.prefab.setup) && void 0 !== Dt ? Dt : null
+             setup: null !== (Zu = Xu.prefab.setup) && void 0 !== Zu ? Zu : null
```

#### 180. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5697` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5697) · [Before (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5697)

```diff
-         const tt = null !== (de = me.get(wt.name)) && void 0 !== de ? de : 0;
+         const uu = null !== (XE = ZE.get(Yu.name)) && void 0 !== XE ? XE : 0;
```

#### 181. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5707` → after: `L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5707) · [Before (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5707)

```diff
-               path: null !== (je = null !== (He = null !== (Xe = wt.args.path) && void 0 !== Xe ? Xe : Dt) && void 0 !== He ? He : Ot) && void 0 !== je ? je : void 0
+               path: null !== (lE = null !== (qE = null !== (fE = Yu.args.path) && void 0 !== fE ? fE : Zu) && void 0 !== qE ? qE : su) && void 0 !== lE ? lE : void 0
```

#### 182. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5718` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5718) · [Before (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5718)

```diff
-           Ct = `${et.name}\n${JSON.stringify({...et.args,why:void 0})}`,
+           Gu = `${Eu.name}\n${JSON.stringify({...Eu.args,why:void 0})}`,
```

#### 183. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5738` → after: `L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5738) · [Before (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5738)

```diff
-             const tt = void 0 !== qt && "" !== qt.trim() ? Mt(qt) : void 0 === Dt ? null !== Ot && void 0 !== Ot ? Ot : "index.js" : null;
+             const uu = void 0 !== Uu && "" !== Uu.trim() ? gu(Uu) : void 0 === Zu ? null !== su && void 0 !== su ? su : "index.js" : null;
```

#### 184. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5742` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5742) · [Before (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5742)

```diff
-               st(tt, et.args.name, null !== (Qe = et.args.settings) && void 0 !== Qe ? Qe : "", et.args.why)
+               yu(uu, Eu.args.name, null !== (CE = Eu.args.settings) && void 0 !== CE ? CE : "", Eu.args.why)
```

#### 185. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5749` → after: `L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5749) · [Before (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5749)

```diff
-             if (0 === pt.length) pt = we(null !== (le = et.args.steps) && void 0 !== le ? le : "")
+             if (0 === Tu.length) Tu = OE(null !== (bE = Eu.args.steps) && void 0 !== bE ? bE : "")
```

#### 186. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5752` → after: `L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5752) · [Before (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5752)

```diff
-             const tt = De(null !== (Ee = et.args.note) && void 0 !== Ee ? Ee : "");
+             const uu = UE(null !== (cE = Eu.args.note) && void 0 !== cE ? cE : "");
```

#### 187. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5767` → after: `L5767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5767) · [Before (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5767)

```diff
-               if (void 0 === mt || "" !== mt.trim() && !rO(TO(mt), void 0 === qt ? "" : null !== (ye = Ht[Mt(qt)]) && void 0 !== ye ? ye : "")) {
+               if (void 0 === Xu || "" !== Xu.trim() && !Bs(ys(Xu), void 0 === Uu ? "" : null !== (YE = fu[gu(Uu)]) && void 0 !== YE ? YE : "")) {
```

#### 188. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5769` → after: `L5769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5769) · [Before (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5769)

```diff
-                 else if (void 0 !== qt && Jt(Mt(qt)) && "" !== (null !== (Ne = Vt[Mt(qt)]) && void 0 !== Ne ? Ne : "").trim()) Et(et.name, Mt(qt), "unread", void 0 === mt ? void 0 : {
+                 else if (void 0 !== Uu && eu(gu(Uu)) && "" !== (null !== (hE = ju[gu(Uu)]) && void 0 !== hE ? hE : "").trim()) Nu(Eu.name, gu(Uu), "unread", void 0 === Xu ? void 0 : {
```

#### 189. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5788` → after: `L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5788) · [Before (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5788)

```diff
-               Dt = null === tt ? "" : null !== (ae = Ht[tt]) && void 0 !== ae ? ae : "",
+               Zu = null === uu ? "" : null !== (DE = fu[uu]) && void 0 !== DE ? DE : "",
```

#### 190. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5795-L5796` → after: `L5795-L5796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5795-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5795-L5796) · [Before (L5795-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5795-L5796)

```diff
-               })) || void 0 === Je ? void 0 : Je.text) && void 0 !== be ? be : null : "replace_function" === et.name ? xt(Dt, Vt, mt) : ee(Dt, Vt, mt);
-             null === tt || null === Qt ? Et(et.name, tt, lV(et) ? "brokenCode" : "missingArgs") : rO(mt, Dt) ? Et(et.name, tt, "placeholder") : "replace_function" === et.name && Jt(tt) && Tt(Dt, null !== Vt && void 0 !== Vt ? Vt : "", mt) ? (Et(et.name, tt, "unread", {
+               })) || void 0 === eE ? void 0 : eE.text) && void 0 !== ME ? ME : null : "replace_function" === Eu.name ? Hu(Zu, ju, Xu) : uE(Zu, ju, Xu);
+             null === uu || null === bu ? Nu(Eu.name, uu, bj(Eu) ? "brokenCode" : "missingArgs") : Bs(Xu, Zu) ? Nu(Eu.name, uu, "placeholder") : "replace_function" === Eu.name && eu(uu) && Au(Zu, null !== ju && void 0 !== ju ? ju : "", Xu) ? (Nu(Eu.name, uu, "unread", {
```

#### 191. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5801-L5802` → after: `L5801-L5802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5801-L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5801-L5802) · [Before (L5801-L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5801-L5802)

```diff
-             const tt = !0 === (null === (Ce = Nt._meta) || void 0 === Ce ? void 0 : Ce.appliesAtOnce) ? null !== Dt && void 0 !== Dt ? Dt : Ot : void 0 === qt ? null : Mt(qt),
-               Vt = null === tt ? "" : null !== (ue = Ht[tt]) && void 0 !== ue ? ue : "",
+             const uu = !0 === (null === (GE = Du._meta) || void 0 === GE ? void 0 : GE.appliesAtOnce) ? null !== Zu && void 0 !== Zu ? Zu : su : void 0 === Uu ? null : gu(Uu),
+               ju = null === uu ? "" : null !== (pE = fu[uu]) && void 0 !== pE ? pE : "",
```

#### 192. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5806-L5808` → after: `L5806-L5808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5806-L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5806-L5808) · [Before (L5806-L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5806-L5808)

```diff
-               ft = null !== jt && void 0 !== jt ? jt : lt,
-               wt = null !== lt ? Ge(null !== Qt && void 0 !== Qt ? Qt : "") : null !== Qt && void 0 !== Qt ? Qt : "",
-               yt = null === ft || void 0 === dt ? wt : Zt(Vt.slice(ft.from, ft.to), Pt(Vt, ft, null !== lt ? Ge(dt) : dt, wt), Lt(Vt.slice(ft.to)));
+               Ou = null !== qu && void 0 !== qu ? qu : cu,
+               Yu = null !== cu ? iE(null !== bu && void 0 !== bu ? bu : "") : null !== bu && void 0 !== bu ? bu : "",
+               hu = null === Ou || void 0 === lu ? Yu : Ku(ju.slice(Ou.from, Ou.to), vu(ju, Ou, null !== cu ? iE(lu) : lu, Yu), Vu(ju.slice(Ou.to)));
```

#### 193. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5815-L5816` → after: `L5815-L5816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5815-L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5815-L5816) · [Before (L5815-L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5815-L5816)

```diff
-               const Ot = bt(tt) ? nt(Vt, ft.from, ft.to, null !== dt && void 0 !== dt ? dt : "", wt) : null;
-               Ht[tt] = null !== Ot && void 0 !== Ot ? Ot : Vt.slice(0, ft.from) + yt + Vt.slice(ft.to), Xt.add(tt), zt(tt, et.args.why, yt)
+               const su = Mu(uu) ? zu(ju, Ou.from, Ou.to, null !== lu && void 0 !== lu ? lu : "", Yu) : null;
+               fu[uu] = null !== su && void 0 !== su ? su : ju.slice(0, Ou.from) + hu + ju.slice(Ou.to), Cu.add(uu), Wu(uu, Eu.args.why, hu)
```

#### 194. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5826-L5827` → after: `L5826-L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5826-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5826-L5827) · [Before (L5826-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5826-L5827)

```diff
-           qt = null !== (Ke = null !== Dt && void 0 !== Dt ? Dt : Ot) && void 0 !== Ke ? Ke : "index.js",
-           mt = null !== (We = Ht[qt]) && void 0 !== We ? We : "";
+           Uu = null !== (wE = null !== Zu && void 0 !== Zu ? Zu : su) && void 0 !== wE ? wE : "index.js",
+           Xu = null !== (aE = fu[Uu]) && void 0 !== aE ? aE : "";
```

#### 195. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5842` → after: `L5842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5842) · [Before (L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5842)

```diff
-           Ht[wt] = HO(jO(tt ? Ht[wt] : Ht[wt].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (ce = Vt[wt]) && void 0 !== ce ? ce : "");
+           fu[Yu] = fs(qs(uu ? fu[Yu] : fu[Yu].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (oE = ju[Yu]) && void 0 !== oE ? oE : "");
```

#### 196. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5847` → after: `L5847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5847) · [Before (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5847)

```diff
-         const tt = Me(eq(tq(Ht[wt])), bt(wt) ? qt : [], null !== (Se = Vt[wt]) && void 0 !== Se ? Se : "");
+         const uu = gE(jU(EU(fu[Yu])), Mu(Yu) ? Uu : [], null !== (PE = ju[Yu]) && void 0 !== PE ? PE : "");
```

#### 197. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5851-L5853` → after: `L5851-L5853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5851-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5851-L5853) · [Before (L5851-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5851-L5853)

```diff
-         const tt = wt.problems.length > 0 ? ` Kept as it was: ${wt.problems.join("; ")}.` : "",
-           et = wt.fixed.length > 0 ? ` Names changed to real ones: ${wt.fixed.join(", ")}.` : "";
-         ft += `\n\nThis uses the ready-made ${wt.title}.${et}${tt}${wt.setup?` ${wt.setup}`:""}`
+         const uu = Yu.problems.length > 0 ? ` Kept as it was: ${Yu.problems.join("; ")}.` : "",
+           Eu = Yu.fixed.length > 0 ? ` Names changed to real ones: ${Yu.fixed.join(", ")}.` : "";
+         Ou += `\n\nThis uses the ready-made ${Yu.title}.${Eu}${uu}${Yu.setup?` ${Yu.setup}`:""}`
```

#### 198. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5859` → after: `L5859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5859) · [Before (L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5859)

```diff
-         of ct) ft += `\n\nI renamed \`${wt}\` to \`${Rt}\`, the name World Code calls.`;
+         of ou) Ou += `\n\nI renamed \`${Yu}\` to \`${ku}\`, the name World Code calls.`;
```

#### 199. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5863` → after: `L5863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5863) · [Before (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5863)

```diff
-         const tt = null !== (Ie = Vt[wt]) && void 0 !== Ie ? Ie : "";
+         const uu = null !== (mE = ju[Yu]) && void 0 !== mE ? mE : "";
```

#### 200. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5958` → after: `L5958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5958) · [Before (L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5958)

```diff
-       const et = null === tt.path ? tt.tool : `${tt.tool} ${tt.path}`;
+       const Eu = null === uu.path ? uu.tool : `${uu.tool} ${uu.path}`;
```

#### 201. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5960-L5965` → after: `L5960-L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5960-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5960-L5965) · [Before (L5960-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5960-L5965)

```diff
-       if ("prefab" === tt.reason) return `${et}: ${null!==(Vt=tt.detail)&&void 0!==Vt?Vt:"the prefab couldn't go in."} Nothing changed.`;
-       if ("missingArgs" === tt.reason) return `${et}: the call was missing an argument it needs, so nothing changed.`;
-       if ("placeholder" === tt.reason) return "write_file" === tt.tool ? `${et}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${et}: the code had a line standing in for code left out ("// ... exi … [truncated]
-       if ("unread" === tt.reason) return `${et}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==tt.path&&(0,wt.h)(tt.path)?"view_world_code":"view_file"} shows.`;
-       if ("brokenCode" === tt.reason) return `${et}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
-       return `${et}: search matched nothing in the file, so nothing changed. ${tt.closest?`The closest lines (${tt.closest.line}-${tt.closest.lastLine}) are:\n${tt.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${tt.functions.length>0?`, or use replace … [truncated]
+       if ("prefab" === uu.reason) return `${Eu}: ${null!==(ju=uu.detail)&&void 0!==ju?ju:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === uu.reason) return `${Eu}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === uu.reason) return "write_file" === uu.tool ? `${Eu}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${Eu}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === uu.reason) return `${Eu}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==uu.path&&(0,Yu.c)(uu.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === uu.reason) return `${Eu}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${Eu}: search matched nothing in the file, so nothing changed. ${uu.closest?`The closest lines (${uu.closest.line}-${uu.closest.lastLine}) are:\n${uu.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${uu.functions.length>0?`, or use replace … [truncated]
```

#### 202. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5982` → after: `L5982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5982) · [Before (L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5982)

```diff
-       wq = tt => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
+       hU = uu => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
```

#### 203. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5984` → after: `L5984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5984) · [Before (L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5984)

```diff
-       Nq = tt => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
+       gU = uu => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
```

#### 204. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5994` → after: `L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L5994) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L5994)

```diff
-     const bq = `You looked at World Code: its files are below, their paths starting ${wt.l}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${w … [truncated]
+     const GU = `You looked at World Code: its files are below, their paths starting ${Yu.i}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${Y … [truncated]
```

#### 205. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6008-L6009` → after: `L6008-L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6008-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6008-L6009) · [Before (L6008-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6008-L6009)

```diff
-       const Mt = et ? wt.e : yt,
-         bt = et ? `${wt.l}index.js` : Mt,
+       const gu = Eu ? Yu.b : hu,
+         Mu = Eu ? `${Yu.i}index.js` : gu,
```

#### 206. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6013-L6028` → after: `L6013-L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6013-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6013-L6028) · [Before (L6013-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6013-L6028)

```diff
-         Kt = Ct("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${Jt("edit … [truncated]
-         ht = Ct("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
-         vt = Ct("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
-         Wt = Ct("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${Jt("edit_fil … [truncated]
-         St = et ? `2. Then give the whole new code with a write_file call, exactly like this:\n${Jt("write_file",{path:Mt,why:"what the change does",content:aq.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${Jt("write_fi … [truncated]
-         ct = et ? "" : ` If there is no code yet, write it in ${Mt}.`,
-         Rt = Jt("switch_to_world_code", {}),
-         It = et ? jt ? `\n${bq}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
-         Pt = lt && Ct("use_prefab") && Qt.length >= 2,
-         Zt = Pt ? Qt.slice(0, 3).map((tt => tt.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
-         Lt = Pt ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
-         Ft = Ct("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
-         kt = Ct("plan") ? `\n${"deepseek"===Vt?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
-         Gt = null !== (qt = Qt[0]) && void 0 !== qt ? qt : CO("parkour"),
-         zt = (null !== (Dt = null === Gt || void 0 === Gt ? void 0 : Gt.settings) && void 0 !== Dt ? Dt : []).slice(0, 2).map((tt => `${tt.key}: ${tt.value}`)).join("\n");
-       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
+         wu = Gu("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${eu("edit … [truncated]
+         Ju = Gu("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
+         du = Gu("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
+         au = Gu("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${eu("edit_fil … [truncated]
+         Pu = Eu ? `2. Then give the whole new code with a write_file call, exactly like this:\n${eu("write_file",{path:gu,why:"what the change does",content:MU.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${eu("write_fi … [truncated]
+         ou = Eu ? "" : ` If there is no code yet, write it in ${gu}.`,
+         ku = eu("switch_to_world_code", {}),
+         mu = Eu ? qu ? `\n${GU}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
+         vu = cu && Gu("use_prefab") && bu.length >= 2,
+         Ku = vu ? bu.slice(0, 3).map((uu => uu.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
+         Vu = vu ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
+         ru = Gu("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
+         Qu = Gu("plan") ? `\n${"deepseek"===ju?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
+         iu = null !== (Uu = bu[0]) && void 0 !== Uu ? Uu : ps("parkour"),
+         Wu = (null !== (Zu = null === iu || void 0 === iu ? void 0 : iu.settings) && void 0 !== Zu ? Zu : []).slice(0, 2).map((uu => `${uu.key}: ${uu.value}`)).join("\n");
+       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
```

#### 207. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6030` → after: `L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6030) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6030)

```diff
-         Ot ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
+         su ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
```

#### 208. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6033` → after: `L6033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6033) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6033)

```diff
-         Dt.join("\n")
+         Zu.join("\n")
```

#### 209. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6035` → after: `L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6035) · [Before (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6035)

```diff
-       `}(tt,Jt,Ht)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(uu,eu,fu)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 210. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6038-L6039` → after: `L6038-L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6038-L6039) · [Before (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6038-L6039)

```diff
-     function Cq(tt, et, Vt) {
-       return Object.keys(tt).filter((tt => !Vt || !(0, wt.h)(tt))).sort(((tt, Vt) => (Vt === et ? 1 : 0) - (tt === et ? 1 : 0) || tt.localeCompare(Vt)))
+     function wU(uu, Eu, ju) {
+       return Object.keys(uu).filter((uu => !ju || !(0, Yu.c)(uu))).sort(((uu, ju) => (ju === Eu ? 1 : 0) - (uu === Eu ? 1 : 0) || uu.localeCompare(ju)))
```

#### 211. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6042-L6045` → after: `L6042-L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6042-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6042-L6045) · [Before (L6042-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6042-L6045)

```diff
-     function uq(tt, et, Vt) {
-       var Ot;
-       const qt = Cq(tt, et, Vt);
-       return null !== et && qt.includes(et) ? et : null !== (Ot = qt[0]) && void 0 !== Ot ? Ot : null
+     function JU(uu, Eu, ju) {
+       var su;
+       const Uu = wU(uu, Eu, ju);
+       return null !== Eu && Uu.includes(Eu) ? Eu : null !== (su = Uu[0]) && void 0 !== su ? su : null
```

#### 212. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6048-L6049` → after: `L6048-L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6048-L6049) · [Before (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6048-L6049)

```diff
-     function Kq(tt) {
-       return tt.includes("index.ts") ? "index.ts" : "index.js"
+     function dU(uu) {
+       return uu.includes("index.ts") ? "index.ts" : "index.js"
```

#### 213. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6052-L6054` → after: `L6052-L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6052-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6052-L6054) · [Before (L6052-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6052-L6054)

```diff
-     function hq(tt) {
-       const et = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${Kq(tt)}`;
-       return `Only ${et} runs by itself: another file runs when ${et} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${et}.\n`
+     function aU(uu) {
+       const Eu = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${dU(uu)}`;
+       return `Only ${Eu} runs by itself: another file runs when ${Eu} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${Eu}.\n`
```

#### 214. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6057-L6058` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6057-L6058) · [Before (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6057-L6058)

```diff
-     function vq(tt, et) {
-       var Vt;
+     function PU(uu, Eu) {
+       var ju;
```

#### 215. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6060-L6065` → after: `L6060-L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6060-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6060-L6065) · [Before (L6060-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6060-L6065)

```diff
-         files: Ot,
-         activePath: qt
-       } = tt, Dt = !0 === tt.codeBlock, mt = Cq(Ot, qt, Dt);
-       if (0 === mt.length || mt.every((tt => "" === Ot[tt].trim()))) return Dt ? "There is no code yet: the code block is empty." : mt.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const dt = null !== (Vt = uq(Ot, qt, Dt)) && void 0 !== Vt ? Vt : mt[0];
-       return `${mt.length>1?`Their files:\n${mt.map((tt=>{const et=""===(Vt=Ot[tt])?0:Vt.replace(/\n$/,"").split("\n").length;var Vt;return`- ${tt}: ${1===et?"1 line":`${et} lines`}${tt===dt?" (open in the editor, its code below)":""}`})).join("\n")}\n${Dt?"":hq(mt)}\n`:""}${func … [truncated]
+         files: su,
+         activePath: Uu
+       } = uu, Zu = !0 === uu.codeBlock, Xu = wU(su, Uu, Zu);
+       if (0 === Xu.length || Xu.every((uu => "" === su[uu].trim()))) return Zu ? "There is no code yet: the code block is empty." : Xu.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const lu = null !== (ju = JU(su, Uu, Zu)) && void 0 !== ju ? ju : Xu[0];
+       return `${Xu.length>1?`Their files:\n${Xu.map((uu=>{const Eu=""===(ju=su[uu])?0:ju.replace(/\n$/,"").split("\n").length;var ju;return`- ${uu}: ${1===Eu?"1 line":`${Eu} lines`}${uu===lu?" (open in the editor, its code below)":""}`})).join("\n")}\n${Zu?"":aU(Xu)}\n`:""}${func … [truncated]
```

#### 216. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6068-L6069` → after: `L6068-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6068-L6069) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6068-L6069)

```diff
-     function Wq(tt) {
-       var et, Vt, Ot, qt, Dt, mt;
+     function oU(uu) {
+       var Eu, ju, su, Uu, Zu, Xu;
```

#### 217. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6071-L6086` → after: `L6071-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6071-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6071-L6086) · [Before (L6071-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6071-L6086)

```diff
-         codeBlock: !0 === tt.codeBlock,
-         hasCode: "" !== (null !== (et = tt.files[null !== (Vt = tt.activePath) && void 0 !== Vt ? Vt : ""]) && void 0 !== et ? et : "").trim(),
-         hasBigFile: Object.values(tt.files).some((tt => tt.length > 6e3)),
-         wantsExport: Dq(tt.request),
-         canAsk: !0 === tt.canAsk,
-         canRemember: !0 === (null === (Ot = tt.about) || void 0 === Ot ? void 0 : Ot.canRemember),
-         isBigRequest: fe(tt.request),
-         canLookUp: !0 === tt.canLookUp,
-         hasOtherFiles: Object.keys(tt.files).length > 1,
-         hasErrors: tt.errors.length > 0,
-         canChangeWorldCode: !0 === tt.canChangeWorldCode,
-         hasWorldCodeFiles: Object.keys(tt.files).some(wt.h),
-         addsToEntryFile: !0 === tt.addsToEntryFile,
-         offersPrefabs: (qt = tt.request, Dt = tt.files, mt = Sq(tt), "never" !== mt.offer && ("always" === mt.offer || FO(qt, 1).length > 0 || fe(qt) || !Eq(Dt) && lq.test(qt))),
-         listsPrefabs: Sq(tt).categories,
-         looksUpDocs: !0 === tt.looksUpDocs
+         codeBlock: !0 === uu.codeBlock,
+         hasCode: "" !== (null !== (Eu = uu.files[null !== (ju = uu.activePath) && void 0 !== ju ? ju : ""]) && void 0 !== Eu ? Eu : "").trim(),
+         hasBigFile: Object.values(uu.files).some((uu => uu.length > 6e3)),
+         wantsExport: XU(uu.request),
+         canAsk: !0 === uu.canAsk,
+         canRemember: !0 === (null === (su = uu.about) || void 0 === su ? void 0 : su.canRemember),
+         isBigRequest: NE(uu.request),
+         canLookUp: !0 === uu.canLookUp,
+         hasOtherFiles: Object.keys(uu.files).length > 1,
+         hasErrors: uu.errors.length > 0,
+         canChangeWorldCode: !0 === uu.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(uu.files).some(Yu.c),
+         addsToEntryFile: !0 === uu.addsToEntryFile,
+         offersPrefabs: (Uu = uu.request, Zu = uu.files, Xu = kU(uu), "never" !== Xu.offer && ("always" === Xu.offer || is(Uu, 1).length > 0 || NE(Uu) || !OU(Zu) && NU.test(Uu))),
+         listsPrefabs: kU(uu).categories,
+         looksUpDocs: !0 === uu.looksUpDocs
```

#### 218. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6090-L6092` → after: `L6090-L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6090-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6090-L6092) · [Before (L6090-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6090-L6092)

```diff
-     function Sq(tt) {
-       var et;
-       return null !== (et = tt.prefabs) && void 0 !== et ? et : Qq
+     function kU(uu) {
+       var Eu;
+       return null !== (Eu = uu.prefabs) && void 0 !== Eu ? Eu : cU
```

#### 219. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6095-L6103` → after: `L6095-L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6095-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6095-L6103) · [Before (L6095-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6095-L6103)

```diff
-     function cq(tt, et) {
-       return "deepseek" === et ? function(tt) {
-         const et = mq[tt ? "codeBlock" : "worldCode"];
-         return Ke.filter((tt => et.has(tt.name)))
-       }(!0 === tt.codeBlock) : function(tt) {
-         const et = (tt.hasCode || tt.hasBigFile) && !tt.codeBlock || !0 === tt.hasWorldCodeFiles || !0 === tt.addsToEntryFile,
-           Vt = !0 === tt.canLookUp,
-           Ot = tt.codeBlock && !0 === tt.canChangeWorldCode && !0 !== tt.hasWorldCodeFiles && Vt,
-           qt = {
+     function mU(uu, Eu) {
+       return "deepseek" === Eu ? function(uu) {
+         const Eu = lU[uu ? "codeBlock" : "worldCode"];
+         return wE.filter((uu => Eu.has(uu.name)))
+       }(!0 === uu.codeBlock) : function(uu) {
+         const Eu = (uu.hasCode || uu.hasBigFile) && !uu.codeBlock || !0 === uu.hasWorldCodeFiles || !0 === uu.addsToEntryFile,
+           ju = !0 === uu.canLookUp,
+           su = uu.codeBlock && !0 === uu.canChangeWorldCode && !0 !== uu.hasWorldCodeFiles && ju,
+           Uu = {
```

#### 220. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6105-L6106` → after: `L6105-L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6105-L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6105-L6106) · [Before (L6105-L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6105-L6106)

```diff
-             edit_file: tt.hasBigFile,
-             replace_function: et,
+             edit_file: uu.hasBigFile,
+             replace_function: Eu,
```

#### 221. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6108-L6125` → after: `L6108-L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6108-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6108-L6125) · [Before (L6108-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6108-L6125)

```diff
-             add_world_code: tt.codeBlock && !0 !== tt.hasWorldCodeFiles,
-             edit_code_in_place: tt.hasCode,
-             export_game: tt.wantsExport,
-             switch_to_world_code: tt.codeBlock,
-             ask_creator: tt.canAsk,
-             remember: !0 === tt.canRemember && !tt.codeBlock,
-             plan: !0 === tt.isBigRequest && tt.canAsk && !tt.codeBlock,
-             view_file: Vt && !0 === tt.hasOtherFiles && !tt.codeBlock,
-             view_world_code: Ot,
-             view_chunk: Vt,
-             view_game_state: Vt,
-             get_docs: Vt,
-             fetch_url: Vt && !0 === tt.looksUpDocs,
-             find_names: Vt,
-             view_errors: Vt && !0 === tt.hasErrors,
-             use_prefab: !0 === tt.offersPrefabs && !tt.codeBlock,
- ... (2 more removed lines; see GitHub link above)
+             add_world_code: uu.codeBlock && !0 !== uu.hasWorldCodeFiles,
+             edit_code_in_place: uu.hasCode,
+             export_game: uu.wantsExport,
+             switch_to_world_code: uu.codeBlock,
+             ask_creator: uu.canAsk,
+             remember: !0 === uu.canRemember && !uu.codeBlock,
+             plan: !0 === uu.isBigRequest && uu.canAsk && !uu.codeBlock,
+             view_file: ju && !0 === uu.hasOtherFiles && !uu.codeBlock,
+             view_world_code: su,
+             view_chunk: ju,
+             view_game_state: ju,
+             get_docs: ju,
+             fetch_url: ju && !0 === uu.looksUpDocs,
+             find_names: ju,
+             view_errors: ju && !0 === uu.hasErrors,
+             use_prefab: !0 === uu.offersPrefabs && !uu.codeBlock,
+ ... (2 more added lines; see GitHub link above)
```

#### 222. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6127-L6130` → after: `L6127-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6127-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6127-L6130) · [Before (L6127-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6127-L6130)

```diff
-         let Dt = Ke.filter((tt => qt[tt.name]));
-         for (const mt of ["remember", "plan"]) Dt.filter((tt => !he(tt.name))).length > 7 && (Dt = Dt.filter((tt => tt.name !== mt)));
-         return Dt
-       }(Wq(tt))
+         let Zu = wE.filter((uu => Uu[uu.name]));
+         for (const Xu of ["remember", "plan"]) Zu.filter((uu => !JE(uu.name))).length > 7 && (Zu = Zu.filter((uu => uu.name !== Xu)));
+         return Zu
+       }(oU(uu))
```

#### 223. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6133-L6140` → after: `L6133-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6133-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6133-L6140) · [Before (L6133-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6133-L6140)

```diff
-     function Rq(tt, et) {
-       var Vt, Ot;
-       const qt = Wq(tt),
-         Dt = !0 === qt.canLookUp,
-         mt = (null !== (Vt = null === (Ot = tt.lookups) || void 0 === Ot ? void 0 : Ot.length) && void 0 !== Vt ? Vt : 0) > 0,
-         dt = !0 === qt.hasWorldCodeFiles,
-         jt = [qt.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", qt.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", Dt ? "" : mt ? "You have looked things up as many times as you can: answer n … [truncated]
-       return jt.length > 0 ? `\n\nFor this request: ${jt.join(" ")}` : ""
+     function vU(uu, Eu) {
+       var ju, su;
+       const Uu = oU(uu),
+         Zu = !0 === Uu.canLookUp,
+         Xu = (null !== (ju = null === (su = uu.lookups) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0) > 0,
+         lu = !0 === Uu.hasWorldCodeFiles,
+         qu = [Uu.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", Uu.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", Zu ? "" : Xu ? "You have looked things up as many times as you can: answer n … [truncated]
+       return qu.length > 0 ? `\n\nFor this request: ${qu.join(" ")}` : ""
```

#### 224. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6143-L6145` → after: `L6143-L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6143-L6145) · [Before (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6143-L6145)

```diff
-     function Iq(tt, et) {
-       var Vt, Ot, qt, Dt, mt, dt;
-       let jt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fq,
+     function KU(uu, Eu) {
+       var ju, su, Uu, Zu, Xu, lu;
+       let qu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YU,
```

#### 225. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6147-L6148` → after: `L6147-L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6147-L6148) · [Before (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6147-L6148)

```diff
-           docsInTurn: Ht = !1,
-           my: Xt = !1
+           docsInTurn: fu = !1,
+           uh: Cu = !1
```

#### 226. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6150-L6182` → after: `L6150-L6182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6150-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6150-L6182) · [Before (L6150-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6150-L6182)

```diff
-       const Qt = "deepseek" === jt.format,
-         lt = Object.values(et.files).join("\n"),
-         Et = et.history.slice(-2).map((tt => tt.text)).join("\n"),
-         ft = `${et.request}\n${Et}\n${et.errors.join("\n")}`,
-         wt = !0 === et.looksUpDocs,
-         yt = wt && !0 === et.canLookUp ? [] : tt.find(ft, lt, 12),
-         Nt = tt.matchItemAndBlockNames(ft, 12),
-         Mt = !0 === et.codeBlock,
-         bt = Mt ? "myId" : "playerId",
-         Jt = cq(et, jt.format),
-         Ct = Jt.some((tt => "use_prefab" === tt.name)),
-         ut = !Ct || Qt && !0 !== Wq(et).offersPrefabs ? [] : function(tt, et, Vt) {
-           if ("never" === Vt.offer || "none" === Vt.list) return [];
-           if ("all" === Vt.list) return [...MO];
-           const Ot = FO(tt, 4);
-           if (Eq(et) || !lq.test(tt) && !fe(tt)) return Ot;
- ... (17 more removed lines; see GitHub link above)
+       const bu = "deepseek" === qu.format,
+         cu = Object.values(Eu.files).join("\n"),
+         Nu = Eu.history.slice(-2).map((uu => uu.text)).join("\n"),
+         Ou = `${Eu.request}\n${Nu}\n${Eu.errors.join("\n")}`,
+         Yu = !0 === Eu.looksUpDocs,
+         hu = Yu && !0 === Eu.canLookUp ? [] : uu.find(Ou, cu, 12),
+         Du = uu.matchItemAndBlockNames(Ou, 12),
+         gu = !0 === Eu.codeBlock,
+         Mu = gu ? "myId" : "playerId",
+         eu = mU(Eu, qu.format),
+         Gu = eu.some((uu => "use_prefab" === uu.name)),
+         pu = !Gu || bu && !0 !== oU(Eu).offersPrefabs ? [] : function(uu, Eu, ju) {
+           if ("never" === ju.offer || "none" === ju.list) return [];
+           if ("all" === ju.list) return [...Ms];
+           const su = is(uu, 4);
+           if (OU(Eu) || !NU.test(uu) && !NE(uu)) return su;
+ ... (17 more added lines; see GitHub link above)
```

#### 227. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6184` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6184) · [Before (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6184)

```diff
-           content: jq([Mt ? Nq(wt) : wq(wt), ...wt ? [] : [Mt ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${tt.index("callback")}` : `## Callbacks (all of them)\n${tt.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: fU([gu ? gU(Yu) : hU(Yu), ...Yu ? [] : [gu ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${uu.index("callback")}` : `## Callbacks (all of them)\n${uu.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 228. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6191-L6196` → after: `L6191-L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6191-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6191-L6196) · [Before (L6191-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6191-L6196)

```diff
-             hasWorldCodeFiles: !0 === Wq(et).hasWorldCodeFiles,
-             hasLookedUp: (null !== (Vt = null === (Ot = et.lookups) || void 0 === Ot ? void 0 : Ot.length) && void 0 !== Vt ? Vt : 0) > 0,
-             movesToWorldCode: !0 === et.canChangeWorldCode,
-             listedPrefabs: ut,
-             guidesToPrefabs: !0 === Sq(et).guide
-           })].filter((tt => "" !== tt)).join("\n\n"), Jt, jt.format, jt.nativeTools)
+             hasWorldCodeFiles: !0 === oU(Eu).hasWorldCodeFiles,
+             hasLookedUp: (null !== (ju = null === (su = Eu.lookups) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0) > 0,
+             movesToWorldCode: !0 === Eu.canChangeWorldCode,
+             listedPrefabs: pu,
+             guidesToPrefabs: !0 === kU(Eu).guide
+           })].filter((uu => "" !== uu)).join("\n\n"), eu, qu.format, qu.nativeTools)
```

#### 229. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6198-L6201` → after: `L6198-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6198-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6198-L6201) · [Before (L6198-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6198-L6201)

```diff
-       if (!Qt)
-         for (const Gt of et.history) Wt.push({
-           role: Gt.role,
-           content: Gt.text
+       if (!bu)
+         for (const iu of Eu.history) au.push({
+           role: iu.role,
+           content: iu.text
```

#### 230. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6203-L6211` → after: `L6203-L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6203-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6203-L6211) · [Before (L6203-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6203-L6211)

```diff
-       const St = Qt && !Xt && et.history.length > 0 ? `Earlier in this chat:\n${et.history.map((tt=>`${"user"===tt.role?"They asked":"You answered"}: ${tt.text}`)).join("\n")}\n\n` : "",
-         ct = null !== (qt = et.about) && void 0 !== qt && qt.notes.length ? `AI notes (notes they kept):\n${et.about.notes.map((tt=>`- ${tt}`)).join("\n")}\n\n` : "",
-         Rt = null !== (Dt = et.about) && void 0 !== Dt && Dt.outline ? `Outline of their code:\n${et.about.outline}\n\n` : "",
-         It = et.errors.length > 0 ? `\n\nErrors their world showed recently:\n${et.errors.slice(-5).join("\n")}` : "",
-         Pt = null === (mt = et.failedEdits) || void 0 === mt || !mt.length || Qt && Xt ? "" : `\n\nWhat happened to your last answer's changes:\n${function(tt,et){return tt.map((tt=>eV[et].editFailure(tt.tool,Xq(tt)))).join("\n\n")}(et.failedEdits,jt.format)}`,
-         Zt = [...Ht ? vt : [], ...Qt ? [Kt, ht] : []].filter((tt => "" !== tt)).map((tt => `${tt}\n\n`)).join(""),
-         Lt = null === (dt = et.lookups) || void 0 === dt || !dt.length || Qt && Xt ? "" : `\n\nWhat you looked up for this request:\n${Ft=et.lookups,kt=jt.format,Ft.map((tt=>eV[kt].lookupResult(tt.tool,tt.about,tt.text))).join("\n\n")}`;
-       var Ft, kt;
-       return Wt.push({
+       const Pu = bu && !Cu && Eu.history.length > 0 ? `Earlier in this chat:\n${Eu.history.map((uu=>`${"user"===uu.role?"They asked":"You answered"}: ${uu.text}`)).join("\n")}\n\n` : "",
+         ou = null !== (Uu = Eu.about) && void 0 !== Uu && Uu.notes.length ? `AI notes (notes they kept):\n${Eu.about.notes.map((uu=>`- ${uu}`)).join("\n")}\n\n` : "",
+         ku = null !== (Zu = Eu.about) && void 0 !== Zu && Zu.outline ? `Outline of their code:\n${Eu.about.outline}\n\n` : "",
+         mu = Eu.errors.length > 0 ? `\n\nErrors their world showed recently:\n${Eu.errors.slice(-5).join("\n")}` : "",
+         vu = null === (Xu = Eu.failedEdits) || void 0 === Xu || !Xu.length || bu && Cu ? "" : `\n\nWhat happened to your last answer's changes:\n${function(uu,Eu){return uu.map((uu=>uj[Eu].editFailure(uu.tool,bU(uu)))).join("\n\n")}(Eu.failedEdits,qu.format)}`,
+         Ku = [...fu ? du : [], ...bu ? [wu, Ju] : []].filter((uu => "" !== uu)).map((uu => `${uu}\n\n`)).join(""),
+         Vu = null === (lu = Eu.lookups) || void 0 === lu || !lu.length || bu && Cu ? "" : `\n\nWhat you looked up for this request:\n${ru=Eu.lookups,Qu=qu.format,ru.map((uu=>uj[Qu].lookupResult(uu.tool,uu.about,uu.text))).join("\n\n")}`;
+       var ru, Qu;
+       return au.push({
```

#### 231. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6214` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6214) · [Before (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6214)

```diff
-       }), Wt
+       }), au
```

#### 232. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6216` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6216) · [Before (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6216)

```diff
-     var Pq = Vt(39842);
+     var VU = ju(39926);
```

#### 233. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6218-L6219` → after: `L6218-L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6218-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6218-L6219) · [Before (L6218-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6218-L6219)

```diff
-     function Zq(tt) {
-       var et, Vt, Ot, qt, Dt, mt;
+     function rU(uu) {
+       var Eu, ju, su, Uu, Zu, Xu;
```

#### 234. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6221-L6223` → after: `L6221-L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6221-L6223) · [Before (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6221-L6223)

```diff
-         args: dt
-       } = tt;
-       switch (tt.name) {
+         args: lu
+       } = uu;
+       switch (uu.name) {
```

#### 235. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6225` → after: `L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6225) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6225)

```diff
-           return null !== (et = dt.path) && void 0 !== et ? et : "a file";
+           return null !== (Eu = lu.path) && void 0 !== Eu ? Eu : "a file";
```

#### 236. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6229` → after: `L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6229) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6229)

```diff
-           return dt.position ? `the blocks near ${null!==(Vt=null===(Ot=(0,Pq.g)(dt.position))||void 0===Ot?void 0:Ot.map(Math.floor).join(", "))&&void 0!==Vt?Vt:dt.position}` : "the blocks around you";
+           return lu.position ? `the blocks near ${null!==(ju=null===(su=(0,VU.g)(lu.position))||void 0===su?void 0:su.map(Math.floor).join(", "))&&void 0!==ju?ju:lu.position}` : "the blocks around you";
```

#### 237. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6233` → after: `L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6233) · [Before (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6233)

```diff
-           return dt.name ? `the docs for ${dt.name}` : `the list of ${Fq(null!==(qt=dt.list)&&void 0!==qt?qt:Lq)}`;
+           return lu.name ? `the docs for ${lu.name}` : `the list of ${iU(null!==(Uu=lu.list)&&void 0!==Uu?Uu:QU)}`;
```

#### 238. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6235-L6239` → after: `L6235-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6235-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6235-L6239) · [Before (L6235-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6235-L6239)

```diff
-           return function(tt) {
-             const et = void 0 === tt ? null : Jt(tt);
-             if (null === et) return null !== tt && void 0 !== tt ? tt : "a docs page";
-             return Ct(et) ? "the list of docs pages" : `the docs page ${function(tt){const et=(0,Nt.u)(tt);return null===et?tt:`${et.name}${null===et.part?"":`/${et.part}`}`}(et)}`
-           }(dt.url);
+           return function(uu) {
+             const Eu = void 0 === uu ? null : eu(uu);
+             if (null === Eu) return null !== uu && void 0 !== uu ? uu : "a docs page";
+             return Gu(Eu) ? "the list of docs pages" : `the docs page ${function(uu){const Eu=(0,Du.C)(uu);return null===Eu?uu:`${Eu.name}${null===Eu.part?"":`/${Eu.part}`}`}(Eu)}`
+           }(lu.url);
```

#### 239. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6241` → after: `L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6241) · [Before (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6241)

```diff
-           return `names for "${null!==(Dt=dt.words)&&void 0!==Dt?Dt:""}"`;
+           return `names for "${null!==(Zu=lu.words)&&void 0!==Zu?Zu:""}"`;
```

#### 240. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6245` → after: `L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6245) · [Before (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6245)

```diff
-           return dt.category ? `the ready-made ${dt.category} games` : "the ready-made games";
+           return lu.category ? `the ready-made ${lu.category} games` : "the ready-made games";
```

#### 241. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6247` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6247) · [Before (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6247)

```diff
-           return `the ready-made ${null!==(mt=dt.name)&&void 0!==mt?mt:"game"}`
+           return `the ready-made ${null!==(Xu=lu.name)&&void 0!==Xu?Xu:"game"}`
```

#### 242. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6250` → after: `L6250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6250) · [Before (L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6250)

```diff
-     const Lq = "functions";
+     const QU = "functions";
```

#### 243. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6252-L6253` → after: `L6252-L6253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6252-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6252-L6253) · [Before (L6252-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6252-L6253)

```diff
-     function Fq(tt) {
-       return tt.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+     function iU(uu) {
+       return uu.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
```

#### 244. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6256-L6257` → after: `L6256-L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6256-L6257) · [Before (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6256-L6257)

```diff
-     function kq(tt) {
-       return "get_docs" === tt.name || "fetch_url" === tt.name
+     function WU(uu) {
+       return "get_docs" === uu.name || "fetch_url" === uu.name
```

#### 245. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6259-L6262` → after: `L6259-L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6259-L6262) · [Before (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6259-L6262)

```diff
-     async function Gq(tt, et) {
-       var Vt;
-       const Ot = Zq(tt),
-         qt = et => ({
+     async function SU(uu, Eu) {
+       var ju;
+       const su = rU(uu),
+         Uu = Eu => ({
```

#### 246. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6264-L6266` → after: `L6264-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6264-L6266) · [Before (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6264-L6266)

```diff
-             tool: tt.name,
-             about: Ot,
-             text: et
+             tool: uu.name,
+             about: su,
+             text: Eu
```

#### 247. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6269` → after: `L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6269) · [Before (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6269)

```diff
-       switch (tt.name) {
+       switch (uu.name) {
```

#### 248. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6271` → after: `L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6271) · [Before (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6271)

```diff
-           return qt((dt = tt.args.path, jt = et.files, void 0 === dt ? "No path was given: give the path of a file from the list." : Object.hasOwn(jt, dt) ? "" === jt[dt] ? `${dt} is empty.` : jt[dt] : `There is no file called ${dt}. Their files are: ${Object.keys(jt).join(", ")} … [truncated]
+           return Uu((lu = uu.args.path, qu = Eu.files, void 0 === lu ? "No path was given: give the path of a file from the list." : Object.hasOwn(qu, lu) ? "" === qu[lu] ? `${lu} is empty.` : qu[lu] : `There is no file called ${lu}. Their files are: ${Object.keys(qu).join(", ")} … [truncated]
```

#### 249. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6273-L6278` → after: `L6273-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6273-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6273-L6278) · [Before (L6273-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6273-L6278)

```diff
-           const tt = et.readWorldCode ? await et.readWorldCode() : null;
-           if (null === tt) return qt("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const Vt = Object.keys(tt).sort(),
-             Ot = Object.fromEntries(Vt.map((et => [`${wt.l}${et}`, tt[et]]))),
-             Dt = Vt.map((et => `${wt.l}${et}:\n${""===tt[et]?"(empty)":tt[et]}`)).join("\n\n"),
-             mt = Vt.length > 1 ? `\n\n${hq(Vt,wt.l)}` : "";
+           const uu = Eu.readWorldCode ? await Eu.readWorldCode() : null;
+           if (null === uu) return Uu("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const ju = Object.keys(uu).sort(),
+             su = Object.fromEntries(ju.map((Eu => [`${Yu.i}${Eu}`, uu[Eu]]))),
+             Zu = ju.map((Eu => `${Yu.i}${Eu}:\n${""===uu[Eu]?"(empty)":uu[Eu]}`)).join("\n\n"),
+             Xu = ju.length > 1 ? `\n\n${aU(ju,Yu.i)}` : "";
```

#### 250. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6280-L6281` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6280-L6281) · [Before (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6280-L6281)

```diff
-             ...qt("" === Dt ? `World Code has no code yet: ${wt.l}index.js is empty.` : `${Dt}${mt}`),
-             worldCodeFiles: Ot
+             ...Uu("" === Zu ? `World Code has no code yet: ${Yu.i}index.js is empty.` : `${Zu}${Xu}`),
+             worldCodeFiles: su
```

#### 251. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6285` → after: `L6285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6285) · [Before (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6285)

```diff
-           return qt(await et.viewChunk((0, Pq.g)(tt.args.position)));
+           return Uu(await Eu.viewChunk((0, VU.g)(uu.args.position)));
```

#### 252. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6287` → after: `L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6287) · [Before (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6287)

```diff
-           return qt(await et.viewGameState());
+           return Uu(await Eu.viewGameState());
```

#### 253. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6289-L6292` → after: `L6289-L6292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6289-L6292) · [Before (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6289-L6292)

```diff
-           return qt(function(tt, et, Vt) {
-             if (void 0 === tt) {
-               const tt = (0, Kt.c)(be, Fq(null !== et && void 0 !== et ? et : Lq));
-               return void 0 === tt ? `There is no list called ${et}: ask for ${Je}.` : Vt.index(tt)
+           return Uu(function(uu, Eu, ju) {
+             if (void 0 === uu) {
+               const uu = (0, wu.c)(ME, iU(null !== Eu && void 0 !== Eu ? Eu : QU));
+               return void 0 === uu ? `There is no list called ${Eu}: ask for ${eE}.` : ju.index(uu)
```

#### 254. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6294-L6298` → after: `L6294-L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6294-L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6294-L6298) · [Before (L6294-L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6294-L6298)

```diff
-             const Ot = Vt.section(tt);
-             if (Ot) return Ot.text;
-             const qt = Vt.find(tt, "", 3).map((tt => tt.name)).join(", ");
-             return `Nothing is called ${tt}.${""===qt?"":` The closest names are: ${qt}.`}`
-           }(tt.args.name, tt.args.list, et.docs));
+             const su = ju.section(uu);
+             if (su) return su.text;
+             const Uu = ju.find(uu, "", 3).map((uu => uu.name)).join(", ");
+             return `Nothing is called ${uu}.${""===Uu?"":` The closest names are: ${Uu}.`}`
+           }(uu.args.name, uu.args.list, Eu.docs));
```

#### 255. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6300` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6300) · [Before (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6300)

```diff
-           return qt(await et.fetchDocsPage(null !== (Vt = tt.args.url) && void 0 !== Vt ? Vt : ""));
+           return Uu(await Eu.fetchDocsPage(null !== (ju = uu.args.url) && void 0 !== ju ? ju : ""));
```

#### 256. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6302-L6304` → after: `L6302-L6304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6302-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6302-L6304) · [Before (L6302-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6302-L6304)

```diff
-           var Dt, mt;
-           const Vt = et.docs.searchNames(null !== (Dt = tt.args.words) && void 0 !== Dt ? Dt : "", 20);
-           return qt(Vt.length > 0 ? Vt.join(", ") : `No block, item or mob name has any of the words "${null!==(mt=tt.args.words)&&void 0!==mt?mt:""}".`)
+           var Zu, Xu;
+           const ju = Eu.docs.searchNames(null !== (Zu = uu.args.words) && void 0 !== Zu ? Zu : "", 20);
+           return Uu(ju.length > 0 ? ju.join(", ") : `No block, item or mob name has any of the words "${null!==(Xu=uu.args.words)&&void 0!==Xu?Xu:""}".`)
```

#### 257. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6307` → after: `L6307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6307) · [Before (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6307)

```diff
-           return qt(et.errors.length > 0 ? et.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return Uu(Eu.errors.length > 0 ? Eu.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 258. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6309` → after: `L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6309) · [Before (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6309)

```diff
-           return qt(ZO(tt.args.category));
+           return Uu(rs(uu.args.category));
```

#### 259. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6311-L6314` → after: `L6311-L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6311-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6311-L6314) · [Before (L6311-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6311-L6314)

```diff
-           return qt(function(tt, et) {
-             const Vt = void 0 === tt ? null : CO(tt);
-             return Vt ? LO(Vt, et) : `There is no prefab called ${null!==tt&&void 0!==tt?tt:"that"}.\n${ZO()}`
-           }(tt.args.name, !0 === et.showPrefabCode))
+           return Uu(function(uu, Eu) {
+             const ju = void 0 === uu ? null : ps(uu);
+             return ju ? Qs(ju, Eu) : `There is no prefab called ${null!==uu&&void 0!==uu?uu:"that"}.\n${rs()}`
+           }(uu.args.name, !0 === Eu.showPrefabCode))
```

#### 260. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6316` → after: `L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6316) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6316)

```diff
-       var dt, jt
+       var lu, qu
```

#### 261. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6318)

```diff
-     const zq = [
+     const IU = [
```

#### 262. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6344-L6401` → after: `L6344-L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6344-L6401) · [Before (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6344-L6401)

```diff
-     function oq(tt) {
-       let et = tt;
-       for (const [Vt, Ot] of zq) et = et.replace(Vt, (tt => tt.length > 1 && tt[0] !== tt[0].toLowerCase() && tt.slice(1) === tt.slice(1).toLowerCase() ? Ot[0].toUpperCase() + Ot.slice(1) : Ot));
-       return et
-     }
-     const rq = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       Uq = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       Aq = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       iq = 12e3,
-       Yq = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function Bq(tt) {
-       var et, Vt, Ot;
-       const qt = null === (et = /Safety:\s*(\w+)/.exec(tt)) || void 0 === et ? void 0 : et[1],
-         Dt = null !== (Vt = null === (Ot = /Categories:\s*(.+)/.exec(tt)) || void 0 === Ot ? void 0 : Ot[1]) && void 0 !== Vt ? Vt : "";
-       return /PII/.test(Dt) ? "personalInfo" : "Unsafe" === qt || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(Dt) ? "unsafe" : "ok"
- ... (42 more removed lines; see GitHub link above)
+     function FU(uu) {
+       let Eu = uu;
+       for (const [ju, su] of IU) Eu = Eu.replace(ju, (uu => uu.length > 1 && uu[0] !== uu[0].toLowerCase() && uu.slice(1) === uu.slice(1).toLowerCase() ? su[0].toUpperCase() + su.slice(1) : su));
+       return Eu
+     }
+     const BU = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       LU = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       tU = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       xU = 12e3,
+       TU = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function HU(uu) {
+       var Eu, ju, su;
+       const Uu = null === (Eu = /Safety:\s*(\w+)/.exec(uu)) || void 0 === Eu ? void 0 : Eu[1],
+         Zu = null !== (ju = null === (su = /Categories:\s*(.+)/.exec(uu)) || void 0 === su ? void 0 : su[1]) && void 0 !== ju ? ju : "";
+       return /PII/.test(Zu) ? "personalInfo" : "Unsafe" === Uu || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(Zu) ? "unsafe" : "ok"
+ ... (42 more added lines; see GitHub link above)
```

#### 263. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6403-L6406` → after: `L6403-L6406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6403-L6406) · [Before (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6403-L6406)

```diff
-           if ("\n" === et) break;
-           if (Vt) Vt = "]" !== et;
-           else if ("[" === et) Vt = !0;
-           else if ("/" === et) return Ot + 1
+           if ("\n" === Eu) break;
+           if (ju) ju = "]" !== Eu;
+           else if ("[" === Eu) ju = !0;
+           else if ("/" === Eu) return su + 1
```

#### 264. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6409-L6430` → after: `L6409-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6409-L6430) · [Before (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6409-L6430)

```diff
-       return et + 1
-     }
- 
-     function tD(tt, et, Vt, Ot) {
-       let qt = et,
-         Dt = 0;
-       for (; qt < tt.length;) {
-         const et = tt[qt],
-           mt = tt[qt + 1];
-         if ("/" === et && "/" === mt) {
-           const et = tt.indexOf("\n", qt);
-           Ot.push(tt.slice(qt + 2, -1 === et ? tt.length : et)), qt = -1 === et ? tt.length : et
-         } else if ("/" === et && "*" === mt) {
-           const et = tt.indexOf("*/", qt + 2);
-           Ot.push(tt.slice(qt + 2, -1 === et ? tt.length : et)), qt = -1 === et ? tt.length : et + 2
-         } else if ("/" === et && sq(tt, qt)) qt = nq(tt, qt);
- ... (6 more removed lines; see GitHub link above)
+       return Eu + 1
+     }
+ 
+     function EZ(uu, Eu, ju, su) {
+       let Uu = Eu,
+         Zu = 0;
+       for (; Uu < uu.length;) {
+         const Eu = uu[Uu],
+           Xu = uu[Uu + 1];
+         if ("/" === Eu && "/" === Xu) {
+           const Eu = uu.indexOf("\n", Uu);
+           su.push(uu.slice(Uu + 2, -1 === Eu ? uu.length : Eu)), Uu = -1 === Eu ? uu.length : Eu
+         } else if ("/" === Eu && "*" === Xu) {
+           const Eu = uu.indexOf("*/", Uu + 2);
+           su.push(uu.slice(Uu + 2, -1 === Eu ? uu.length : Eu)), Uu = -1 === Eu ? uu.length : Eu + 2
+         } else if ("/" === Eu && RU(uu, Uu)) Uu = uZ(uu, Uu);
+ ... (6 more added lines; see GitHub link above)
```

#### 265. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6432-L6435` → after: `L6432-L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6432-L6435) · [Before (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6432-L6435)

```diff
-           if (Vt && "{" === et) Dt++;
-           else if (Vt && "}" === et) {
-             if (0 === Dt) return qt + 1;
-             Dt--
+           if (ju && "{" === Eu) Zu++;
+           else if (ju && "}" === Eu) {
+             if (0 === Zu) return Uu + 1;
+             Zu--
```

#### 266. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6437` → after: `L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6437) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6437)

```diff
-           qt++
+           Uu++
```

#### 267. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6440` → after: `L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6440) · [Before (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6440)

```diff
-       return qt
+       return Uu
```

#### 268. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6442-L6446` → after: `L6442-L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6442-L6446) · [Before (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6442-L6446)

```diff
-     const eD = 4e5;
-     var VD = Vt(41719);
-     let OD = [],
-       qD = 0,
-       DD = null;
+     const jZ = 4e5;
+     var sZ = ju(41745);
+     let UZ = [],
+       ZZ = 0,
+       XZ = null;
```

#### 269. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6448-L6449` → after: `L6448-L6449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6448-L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6448-L6449) · [Before (L6448-L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6448-L6449)

```diff
-     function mD(tt) {
-       return Math.ceil(tt.length / 4)
+     function lZ(uu) {
+       return Math.ceil(uu.length / 4)
```

#### 270. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6452-L6453` → after: `L6452-L6453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6452-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6452-L6453) · [Before (L6452-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6452-L6453)

```diff
-     function dD(tt) {
-       return "number" === typeof tt && Number.isInteger(tt) && tt >= 0
+     function qZ(uu) {
+       return "number" === typeof uu && Number.isInteger(uu) && uu >= 0
```

#### 271. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6456-L6459` → after: `L6456-L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6456-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6456-L6459) · [Before (L6456-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6456-L6459)

```diff
-     function jD(tt, et, Vt) {
-       var Ot;
-       let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(tt) {
+     function fZ(uu, Eu, ju) {
+       var su;
+       let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(uu) {
```

#### 272. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6461-L6464` → after: `L6461-L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6461-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6461-L6464) · [Before (L6461-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6461-L6464)

```diff
-         if (OD.push(tt), OD.length >= 40) return void XD();
-         HD()
-       }(null !== (Ot = function(tt) {
-         if (null === tt || "object" !== typeof tt) return null;
+         if (UZ.push(uu), UZ.length >= 40) return void bZ();
+         CZ()
+       }(null !== (su = function(uu) {
+         if (null === uu || "object" !== typeof uu) return null;
```

#### 273. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6466-L6471` → after: `L6466-L6471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6466-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6466-L6471) · [Before (L6466-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6466-L6471)

```diff
-           prompt_tokens: et,
-           completion_tokens: Vt,
-           prompt_tokens_details: Ot
-         } = tt;
-         if (!dD(et) || !dD(Vt)) return null;
-         const qt = null !== Ot && "object" === typeof Ot ? Ot.cached_tokens : void 0;
+           prompt_tokens: Eu,
+           completion_tokens: ju,
+           prompt_tokens_details: su
+         } = uu;
+         if (!qZ(Eu) || !qZ(ju)) return null;
+         const Uu = null !== su && "object" === typeof su ? su.cached_tokens : void 0;
```

#### 274. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6473-L6475` → after: `L6473-L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6473-L6475) · [Before (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6473-L6475)

```diff
-           sent: et,
-           cached: dD(qt) ? qt : 0,
-           received: Vt
+           sent: Eu,
+           cached: qZ(Uu) ? Uu : 0,
+           received: ju
```

#### 275. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6477-L6478` → after: `L6477-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6477-L6478) · [Before (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6477-L6478)

```diff
-       }(tt)) && void 0 !== Ot ? Ot : {
-         sent: mD(JSON.stringify(et)),
+       }(uu)) && void 0 !== su ? su : {
+         sent: lZ(JSON.stringify(Eu)),
```

#### 276. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6480` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6480) · [Before (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6480)

```diff
-         received: mD(Vt) + qt
+         received: lZ(ju) + Uu
```

#### 277. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6484-L6486` → after: `L6484-L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6484-L6486) · [Before (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6484-L6486)

```diff
-     function HD() {
-       DD ??= setTimeout((() => {
-         XD()
+     function CZ() {
+       XZ ??= setTimeout((() => {
+         bZ()
```

#### 278. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6489-L6493` → after: `L6489-L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6489-L6493) · [Before (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6489-L6493)

```diff
-     async function XD() {
-       null !== DD && (clearTimeout(DD), DD = null);
-       const tt = OD.slice(0, 40);
-       OD = OD.slice(40), OD.length > 0 && (DD = setTimeout((() => {
-         XD()
+     async function bZ() {
+       null !== XZ && (clearTimeout(XZ), XZ = null);
+       const uu = UZ.slice(0, 40);
+       UZ = UZ.slice(40), UZ.length > 0 && (XZ = setTimeout((() => {
+         bZ()
```

#### 279. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6495-L6499` → after: `L6495-L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6495-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6495-L6499) · [Before (L6495-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6495-L6499)

```diff
-       const et = qD;
-       if (qD = 0, 0 !== tt.length || 0 !== et) try {
-         await (0, VD.postToGameServer)("/ai-helper/usage", {
-           calls: tt,
-           pastes: et
+       const Eu = ZZ;
+       if (ZZ = 0, 0 !== uu.length || 0 !== Eu) try {
+         await (0, sZ.postToGameServer)("/ai-helper/usage", {
+           calls: uu,
+           pastes: Eu
```

#### 280. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6503-L6504` → after: `L6503-L6504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6503-L6504) · [Before (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6503-L6504)

```diff
-     const QD = 6e4;
-     const lD = new class {
+     const cZ = 6e4;
+     const NZ = new class {
```

#### 281. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6508-L6510` → after: `L6508-L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6508-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6508-L6510) · [Before (L6508-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6508-L6510)

```diff
-       record(tt) {
-         let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(tt, [...this.recent(tt, et), et])
+       record(uu) {
+         let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(uu, [...this.recent(uu, Eu), Eu])
```

#### 282. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6512-L6516` → after: `L6512-L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6512-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6512-L6516) · [Before (L6512-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6512-L6516)

```diff
-       markFull(tt) {
-         var et;
-         let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(tt, Math.max(null !== (et = this.fullUntil.get(tt)) && void 0 !== et ? et : 0, Vt + Math.max(Ot, QD)))
+       markFull(uu) {
+         var Eu;
+         let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(uu, Math.max(null !== (Eu = this.fullUntil.get(uu)) && void 0 !== Eu ? Eu : 0, ju + Math.max(su, cZ)))
```

#### 283. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6518-L6520` → after: `L6518-L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6518-L6520) · [Before (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6518-L6520)

```diff
-       callsInLastMinute(tt) {
-         let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(tt, et).length
+       callsInLastMinute(uu) {
+         let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(uu, Eu).length
```

#### 284. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6522-L6527` → after: `L6522-L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6522-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6522-L6527) · [Before (L6522-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6522-L6527)

```diff
-       freeAt(tt) {
-         var et;
-         let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const Ot = this.recent(tt, Vt),
-           qt = Ot.length < 2 ? Vt : Ot[Ot.length - 2] + QD;
-         return Math.max(qt, null !== (et = this.fullUntil.get(tt)) && void 0 !== et ? et : 0, Vt)
+       freeAt(uu) {
+         var Eu;
+         let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const su = this.recent(uu, ju),
+           Uu = su.length < 2 ? ju : su[su.length - 2] + cZ;
+         return Math.max(Uu, null !== (Eu = this.fullUntil.get(uu)) && void 0 !== Eu ? Eu : 0, ju)
```

#### 285. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6529-L6531` → after: `L6529-L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6529-L6531) · [Before (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6529-L6531)

```diff
-       firstFreeAt(tt) {
-         let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...tt.map((tt => this.freeAt(tt, et))))
+       firstFreeAt(uu) {
+         let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...uu.map((uu => this.freeAt(uu, Eu))))
```

#### 286. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6536-L6538` → after: `L6536-L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6536-L6538) · [Before (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6536-L6538)

```diff
-       recent(tt, et) {
-         var Vt;
-         return (null !== (Vt = this.calls.get(tt)) && void 0 !== Vt ? Vt : []).filter((tt => et - tt < QD))
+       recent(uu, Eu) {
+         var ju;
+         return (null !== (ju = this.calls.get(uu)) && void 0 !== ju ? ju : []).filter((uu => Eu - uu < cZ))
```

#### 287. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6542-L6543` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6542-L6543) · [Before (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6542-L6543)

```diff
-     function ED(tt) {
-       return tt > 36e5
+     function OZ(uu) {
+       return uu > 36e5
```

#### 288. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6546-L6549` → after: `L6546-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6546-L6549) · [Before (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6546-L6549)

```diff
-     function fD(tt, et) {
-       var Vt;
-       const Ot = null === (Vt = tt.headers.get(et)) || void 0 === Vt ? void 0 : Vt.trim();
-       return void 0 !== Ot && /^\d+$/.test(Ot) ? Number(Ot) : null
+     function YZ(uu, Eu) {
+       var ju;
+       const su = null === (ju = uu.headers.get(Eu)) || void 0 === ju ? void 0 : ju.trim();
+       return void 0 !== su && /^\d+$/.test(su) ? Number(su) : null
```

#### 289. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6552-L6555` → after: `L6552-L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6552-L6555) · [Before (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6552-L6555)

```diff
-     function wD(tt) {
-       var et;
-       const Vt = null !== (et = fD(tt, "retry-after")) && void 0 !== et ? et : fD(tt, "ratelimit-reset");
-       return null === Vt ? null : 1e3 * Vt
+     function hZ(uu) {
+       var Eu;
+       const ju = null !== (Eu = YZ(uu, "retry-after")) && void 0 !== Eu ? Eu : YZ(uu, "ratelimit-reset");
+       return null === ju ? null : 1e3 * ju
```

#### 290. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6558-L6561` → after: `L6558-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6558-L6561) · [Before (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6558-L6561)

```diff
-     function yD(tt, et) {
-       var Vt;
-       const Ot = null !== (Vt = wD(et)) && void 0 !== Vt ? Vt : 0;
-       (429 === et.status || ED(Ot) && 0 === fD(et, "ratelimit-remaining")) && lD.markFull(tt, Date.now(), Ot)
+     function DZ(uu, Eu) {
+       var ju;
+       const su = null !== (ju = hZ(Eu)) && void 0 !== ju ? ju : 0;
+       (429 === Eu.status || OZ(su) && 0 === YZ(Eu, "ratelimit-remaining")) && NZ.markFull(uu, Date.now(), su)
```

#### 291. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6564-L6567` → after: `L6564-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6564-L6567) · [Before (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6564-L6567)

```diff
-     function ND(tt) {
-       const et = Date.now(),
-         Vt = lD.freeAt(tt, et) - et;
-       return Vt <= 0 ? null : ED(Vt) ? "unavailable" : "busy"
+     function gZ(uu) {
+       const Eu = Date.now(),
+         ju = NZ.freeAt(uu, Eu) - Eu;
+       return ju <= 0 ? null : OZ(ju) ? "unavailable" : "busy"
```

#### 292. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6570-L6571` → after: `L6570-L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6570-L6571) · [Before (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6570-L6571)

```diff
-     function aD(tt, et) {
-       return `${function(tt){var et;if("string"===typeof tt)return tt;if(429!==tt.status)return`http-${tt.status}`;if(ED(null!==(et=wD(tt))&&void 0!==et?et:0))return"yearly-limit";const Vt=fD(tt,"retry-after");return null===Vt?"busy":`busy-ra${Vt}`}(et)}__${tt.replace(/[^A-Za-z0- … [truncated]
+     function MZ(uu, Eu) {
+       return `${function(uu){var Eu;if("string"===typeof uu)return uu;if(429!==uu.status)return`http-${uu.status}`;if(OZ(null!==(Eu=hZ(uu))&&void 0!==Eu?Eu:0))return"yearly-limit";const ju=YZ(uu,"retry-after");return null===ju?"busy":`busy-ra${ju}`}(Eu)}__${uu.replace(/[^A-Za-z0- … [truncated]
```

#### 293. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6573-L6575` → after: `L6573-L6575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6573-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6573-L6575) · [Before (L6573-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6573-L6575)

```diff
-     const MD = new class {
-         constructor(tt) {
-           this.loadReporter = tt, this.reportedCodes = new Set
+     const eZ = new class {
+         constructor(uu) {
+           this.loadReporter = uu, this.reportedCodes = new Set
```

#### 294. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6577-L6579` → after: `L6577-L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6577-L6579) · [Before (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6577-L6579)

```diff
-         iE(tt, et) {
-           const Vt = aD(tt, et);
-           "undefined" === typeof window || this.reportedCodes.has(Vt) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(Vt), this.loadReporter().then((et => {
+         HN(uu, Eu) {
+           const ju = MZ(uu, Eu);
+           "undefined" === typeof window || this.reportedCodes.has(ju) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(ju), this.loadReporter().then((Eu => {
```

#### 295. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6581-L6585` → after: `L6581-L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6581-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6581-L6585) · [Before (L6581-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6581-L6585)

```diff
-               reportCappedWasmFailure: Ot
-             } = et;
-             Ot("ai_helper_failed", `World Code AI: ${tt} failed`, Vt)
-           })).catch((tt => {
-             console.error("World Code AI: couldn't report a failure", tt)
+               reportCappedWasmFailure: su
+             } = Eu;
+             su("ai_helper_failed", `World Code AI: ${uu} failed`, ju)
+           })).catch((uu => {
+             console.error("World Code AI: couldn't report a failure", uu)
```

#### 296. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6588-L6600` → after: `L6588-L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6588-L6600) · [Before (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6588-L6600)

```diff
-       }((() => Vt.e(213).then((() => Vt(36487))))),
-       bD = /\n{3,}/,
-       JD = /<tool_call\b|<function=/;
- 
-     function CD(tt) {
-       const et = tt.trimStart(),
-         Vt = bD.exec(et),
-         Ot = JD.exec(et);
-       if (null === Vt || null !== Ot && Ot.index < Vt.index) return null;
-       const qt = et.slice(Vt.index + Vt[0].length);
-       return "" === qt.trim() ? null : qt
-     }
-     const uD = [{
+       }((() => ju.e(213).then((() => ju(36668))))),
+       GZ = /\n{3,}/,
+       pZ = /<tool_call\b|<function=/;
+ 
+     function wZ(uu) {
+       const Eu = uu.trimStart(),
+         ju = GZ.exec(Eu),
+         su = pZ.exec(Eu);
+       if (null === ju || null !== su && su.index < ju.index) return null;
+       const Uu = Eu.slice(ju.index + ju[0].length);
+       return "" === Uu.trim() ? null : Uu
+     }
+     const JZ = [{
```

#### 297. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6619` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6619) · [Before (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6619)

```diff
-     const KD = {
+     const dZ = {
```

#### 298. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6626-L6627` → after: `L6626-L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6626-L6627) · [Before (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6626-L6627)

```diff
-     function hD(tt) {
-       return [...uD, KD].find((et => et.name === tt))
+     function aZ(uu) {
+       return [...JZ, dZ].find((Eu => Eu.name === uu))
```

#### 299. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6630-L6632` → after: `L6630-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6630-L6632) · [Before (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6630-L6632)

```diff
-     function vD(tt) {
-       var et, Vt;
-       return null !== (et = null === (Vt = hD(tt)) || void 0 === Vt ? void 0 : Vt.callFormat) && void 0 !== et ? et : "simple"
+     function PZ(uu) {
+       var Eu, ju;
+       return null !== (Eu = null === (ju = aZ(uu)) || void 0 === ju ? void 0 : ju.callFormat) && void 0 !== Eu ? Eu : "simple"
```

#### 300. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6635-L6636` → after: `L6635-L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6635-L6636) · [Before (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6635-L6636)

```diff
-     function WD(tt) {
-       var et;
+     function oZ(uu) {
+       var Eu;
```

#### 301. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6638-L6639` → after: `L6638-L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6638-L6639) · [Before (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6638-L6639)

```diff
-         format: null !== (et = tt.callFormat) && void 0 !== et ? et : "simple",
-         nativeTools: !0 === tt.nativeTools
+         format: null !== (Eu = uu.callFormat) && void 0 !== Eu ? Eu : "simple",
+         nativeTools: !0 === uu.nativeTools
```

#### 302. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6643-L6644` → after: `L6643-L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6643-L6644) · [Before (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6643-L6644)

```diff
-     function SD(tt, et) {
-       return "function" === typeof tt ? tt(et) : tt
+     function kZ(uu, Eu) {
+       return "function" === typeof uu ? uu(Eu) : uu
```

#### 303. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6646-L6652` → after: `L6646-L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6646-L6652) · [Before (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6646-L6652)

```diff
-     const cD = "TOO_COMPLEX",
-       RD = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${cD} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       ID = 24e4,
-       PD = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class ZD extends Error {
-       constructor(tt) {
-         super(`World Code AI ${tt}`), this.reason = tt
+     const mZ = "TOO_COMPLEX",
+       vZ = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${mZ} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       KZ = 24e4,
+       VZ = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class rZ extends Error {
+       constructor(uu) {
+         super(`World Code AI ${uu}`), this.reason = uu
```

#### 304. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6656-L6658` → after: `L6656-L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6656-L6658) · [Before (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6656-L6658)

```diff
-     function LD(tt, et) {
-       var Vt, Ot, qt, Dt, mt;
-       const dt = tt[null !== (Vt = et.index) && void 0 !== Vt ? Vt : 0] ??= {
+     function QZ(uu, Eu) {
+       var ju, su, Uu, Zu, Xu;
+       const lu = uu[null !== (ju = Eu.index) && void 0 !== ju ? ju : 0] ??= {
```

#### 305. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6662` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6662) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6662)

```diff
-       dt.name += null !== (Ot = null === (qt = et.function) || void 0 === qt ? void 0 : qt.name) && void 0 !== Ot ? Ot : "", dt.args += null !== (Dt = null === (mt = et.function) || void 0 === mt ? void 0 : mt.arguments) && void 0 !== Dt ? Dt : ""
+       lu.name += null !== (su = null === (Uu = Eu.function) || void 0 === Uu ? void 0 : Uu.name) && void 0 !== su ? su : "", lu.args += null !== (Zu = null === (Xu = Eu.function) || void 0 === Xu ? void 0 : Xu.arguments) && void 0 !== Zu ? Zu : ""
```

#### 306. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6665-L6666` → after: `L6665-L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6665-L6666) · [Before (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6665-L6666)

```diff
-     function FD(tt) {
-       return "mcp" === tt ? "simple" : tt
+     function iZ(uu) {
+       return "mcp" === uu ? "simple" : uu
```

#### 307. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6669-L6671` → after: `L6669-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6669-L6671) · [Before (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6669-L6671)

```diff
-     function kD(tt, et, Vt, Ot) {
-       let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return GD(tt, et, Vt, FD(Ot), qt).answer
+     function WZ(uu, Eu, ju, su) {
+       let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return SZ(uu, Eu, ju, iZ(su), Uu).answer
```

#### 308. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6674-L6677` → after: `L6674-L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6674-L6677) · [Before (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6674-L6677)

```diff
-     function GD(tt, et, Vt, Ot, qt) {
-       const Dt = Vt.flatMap((tt => {
-         const et = EV(tt.name, tt.args);
-         return null === et ? [] : [dq(qV(Ot), et.name, et.args)]
+     function SZ(uu, Eu, ju, su, Uu) {
+       const Zu = ju.flatMap((uu => {
+         const Eu = cj(uu.name, uu.args);
+         return null === Eu ? [] : [qU(sj(su), Eu.name, Eu.args)]
```

#### 309. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6679-L6686` → after: `L6679-L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6679-L6686) · [Before (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6679-L6686)

```diff
-       let mt = !1;
-       return 0 !== Dt.length || 0 !== wV(tt, Ot).length || tt.includes("```") || (Dt.push(...qt ? [] : function(tt, et) {
-         let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const Ot = new Map;
-         for (const dt of fV(tt, et)) {
-           const tt = Object.values(dt.args).some((tt => void 0 !== tt && Vt.includes(tt.trim())));
-           var qt, Dt, mt;
-           "export_game" === dt.name || "switch_to_world_code" === dt.name || he(dt.name) || tt || Ot.set(`${dt.name} ${null!==(qt=dt.args.path)&&void 0!==qt?qt:""} ${null!==(Dt=dt.args.search)&&void 0!==Dt?Dt:""} ${null!==(mt=dt.args.name)&&void 0!==mt?mt:""}`, dt.source)
+       let Xu = !1;
+       return 0 !== Zu.length || 0 !== Oj(uu, su).length || uu.includes("```") || (Zu.push(...Uu ? [] : function(uu, Eu) {
+         let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const su = new Map;
+         for (const lu of Nj(uu, Eu)) {
+           const uu = Object.values(lu.args).some((uu => void 0 !== uu && ju.includes(uu.trim())));
+           var Uu, Zu, Xu;
+           "export_game" === lu.name || "switch_to_world_code" === lu.name || JE(lu.name) || uu || su.set(`${lu.name} ${null!==(Uu=lu.args.path)&&void 0!==Uu?Uu:""} ${null!==(Zu=lu.args.search)&&void 0!==Zu?Zu:""} ${null!==(Xu=lu.args.name)&&void 0!==Xu?Xu:""}`, lu.source)
```

#### 310. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6688-L6691` → after: `L6688-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6688-L6691) · [Before (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6688-L6691)

```diff
-         return [...new Set(Ot.values())]
-       }(et, Ot, Mq)), mt = Dt.length > 0), {
-         answer: [tt, ...Dt].join("\n\n").trim(),
-         hasCallsFromReasoning: mt
+         return [...new Set(su.values())]
+       }(Eu, su, eU)), Xu = Zu.length > 0), {
+         answer: [uu, ...Zu].join("\n\n").trim(),
+         hasCallsFromReasoning: Xu
```

#### 311. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6694-L6697` → after: `L6694-L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6694-L6697) · [Before (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6694-L6697)

```diff
-     async function zD(tt, et) {
-       const Vt = tt.getReader(),
-         Ot = new TextDecoder;
-       let qt = "";
+     async function IZ(uu, Eu) {
+       const ju = uu.getReader(),
+         su = new TextDecoder;
+       let Uu = "";
```

#### 312. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6700-L6704` → after: `L6700-L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6700-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6700-L6704) · [Before (L6700-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6700-L6704)

```diff
-           done: tt,
-           value: Dt
-         } = await Vt.read();
-         if (tt) break;
-         qt += Ot.decode(Dt, {
+           done: uu,
+           value: Zu
+         } = await ju.read();
+         if (uu) break;
+         Uu += su.decode(Zu, {
```

#### 313. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6707-L6713` → after: `L6707-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6707-L6713) · [Before (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6707-L6713)

```diff
-         let mt = qt.indexOf("\n");
-         for (; - 1 !== mt;) {
-           const tt = qt.slice(0, mt).trim();
-           if (qt = qt.slice(mt + 1), mt = qt.indexOf("\n"), !tt.startsWith("data:")) continue;
-           const Vt = tt.slice(5).trim();
-           if ("[DONE]" === Vt) return;
-           let Ot;
+         let Xu = Uu.indexOf("\n");
+         for (; - 1 !== Xu;) {
+           const uu = Uu.slice(0, Xu).trim();
+           if (Uu = Uu.slice(Xu + 1), Xu = Uu.indexOf("\n"), !uu.startsWith("data:")) continue;
+           const ju = uu.slice(5).trim();
+           if ("[DONE]" === ju) return;
+           let su;
```

#### 314. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6715` → after: `L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6715) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6715)

```diff
-             Ot = JSON.parse(Vt)
+             su = JSON.parse(ju)
```

#### 315. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6719` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6719) · [Before (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6719)

```diff
-           et(Ot)
+           Eu(su)
```

#### 316. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6724-L6725` → after: `L6724-L6725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6724-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6724-L6725) · [Before (L6724-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6724-L6725)

```diff
-     function oD(tt) {
-       return tt.map((tt => ({
+     function FZ(uu) {
+       return uu.map((uu => ({
```

#### 317. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6728-L6730` → after: `L6728-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6728-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6728-L6730) · [Before (L6728-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6728-L6730)

```diff
-           name: tt.name,
-           description: tt.description,
-           parameters: tt.inputSchema
+           name: uu.name,
+           description: uu.description,
+           parameters: uu.inputSchema
```

#### 318. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6735-L6736` → after: `L6735-L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6735-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6735-L6736) · [Before (L6735-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6735-L6736)

```diff
-     function rD(tt) {
-       return "object" === typeof tt
+     function BZ(uu) {
+       return "object" === typeof uu
```

#### 319. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6738-L6743` → after: `L6738-L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6738-L6743) · [Before (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6738-L6743)

```diff
-     async function UD(tt, et, Vt, Ot) {
-       let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const Dt = ND(tt.name);
-       if (null !== Dt) return Dt;
-       lD.record(tt.name);
-       const mt = await fetch(rq, {
+     async function LZ(uu, Eu, ju, su) {
+       let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const Zu = gZ(uu.name);
+       if (null !== Zu) return Zu;
+       NZ.record(uu.name);
+       const Xu = await fetch(BU, {
```

#### 320. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6749-L6750` → after: `L6749-L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6749-L6750) · [Before (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6749-L6750)

```diff
-           model: tt.name,
-           messages: et,
+           model: uu.name,
+           messages: Eu,
```

#### 321. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6752-L6753` → after: `L6752-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6752-L6753) · [Before (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6752-L6753)

```diff
-           temperature: tt.temperature,
-           reasoning_effort: tt.reasoningEffort,
+           temperature: uu.temperature,
+           reasoning_effort: uu.reasoningEffort,
```

#### 322. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6758-L6759` → after: `L6758-L6759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6758-L6759) · [Before (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6758-L6759)

```diff
-           ...tt.nativeTools && qt.length > 0 ? {
-             tools: oD(qt)
+           ...uu.nativeTools && Uu.length > 0 ? {
+             tools: FZ(Uu)
```

#### 323. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6764` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6764) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6764)

```diff
-         signal: Vt
+         signal: ju
```

#### 324. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6766-L6774` → after: `L6766-L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6766-L6774) · [Before (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6766-L6774)

```diff
-       if (yD(tt.name, mt), 429 === mt.status) return MD.iE(tt.name, mt), "unavailable" === ND(tt.name) ? "unavailable" : "busy";
-       if (!mt.ok || !mt.body) return console.warn(`World Code AI: ${tt.name} answered ${mt.status}`), MD.iE(tt.name, mt.ok ? "empty" : mt), mt.ok ? "failed" : 429 === (dt = mt.status) ? "busy" : 400 === dt || 413 === dt ? "tooLarge" : 401 === dt || 403 === dt ? "turnedAway" : "fa … [truncated]
-       var dt;
-       let jt = "",
-         Ht = "";
-       const Xt = [];
-       let Qt = !1,
-         lt = !1,
-         Et = null;
+       if (DZ(uu.name, Xu), 429 === Xu.status) return eZ.HN(uu.name, Xu), "unavailable" === gZ(uu.name) ? "unavailable" : "busy";
+       if (!Xu.ok || !Xu.body) return console.warn(`World Code AI: ${uu.name} answered ${Xu.status}`), eZ.HN(uu.name, Xu.ok ? "empty" : Xu), Xu.ok ? "failed" : 429 === (lu = Xu.status) ? "busy" : 400 === lu || 413 === lu ? "tooLarge" : 401 === lu || 403 === lu ? "turnedAway" : "fa … [truncated]
+       var lu;
+       let qu = "",
+         fu = "";
+       const Cu = [];
+       let bu = !1,
+         cu = !1,
+         Nu = null;
```

#### 325. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6776-L6782` → after: `L6776-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6776-L6782) · [Before (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6776-L6782)

```diff
-         await async function(tt, et, Vt) {
-           await zD(tt, (tt => {
-             var Ot;
-             const qt = tt,
-               Dt = null === (Ot = qt.choices) || void 0 === Ot ? void 0 : Ot[0];
-             var mt, dt;
-             Dt && et(null !== (mt = Dt.delta) && void 0 !== mt ? mt : {}, null !== (dt = Dt.finish_reason) && void 0 !== dt ? dt : null), qt.usage && (null === Vt || void 0 === Vt || Vt(qt.usage))
+         await async function(uu, Eu, ju) {
+           await IZ(uu, (uu => {
+             var su;
+             const Uu = uu,
+               Zu = null === (su = Uu.choices) || void 0 === su ? void 0 : su[0];
+             var Xu, lu;
+             Zu && Eu(null !== (Xu = Zu.delta) && void 0 !== Xu ? Xu : {}, null !== (lu = Zu.finish_reason) && void 0 !== lu ? lu : null), Uu.usage && (null === ju || void 0 === ju || ju(Uu.usage))
```

#### 326. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6784-L6789` → after: `L6784-L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6784-L6789) · [Before (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6784-L6789)

```diff
-         }(mt.body, ((et, Vt) => {
-           var qt, Dt, mt, dt;
-           Qt ||= "length" === Vt, Ht += null !== (qt = null !== (Dt = et.reasoning) && void 0 !== Dt ? Dt : et.reasoning_content) && void 0 !== qt ? qt : "", jt += null !== (mt = et.content) && void 0 !== mt ? mt : "";
-           for (const tt of null !== (Et = et.tool_calls) && void 0 !== Et ? Et : []) {
-             var Et;
-             lt ||= "" !== Ht && "" === jt.trim(), LD(Xt, tt)
+         }(Xu.body, ((Eu, ju) => {
+           var Uu, Zu, Xu, lu;
+           bu ||= "length" === ju, fu += null !== (Uu = null !== (Zu = Eu.reasoning) && void 0 !== Zu ? Zu : Eu.reasoning_content) && void 0 !== Uu ? Uu : "", qu += null !== (Xu = Eu.content) && void 0 !== Xu ? Xu : "";
+           for (const uu of null !== (Nu = Eu.tool_calls) && void 0 !== Nu ? Nu : []) {
+             var Nu;
+             cu ||= "" !== fu && "" === qu.trim(), QZ(Cu, uu)
```

#### 327. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6791-L6796` → after: `L6791-L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6791-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6791-L6796) · [Before (L6791-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6791-L6796)

```diff
-           const ft = tt.nativeTools && lt ? null !== (dt = CD(jt)) && void 0 !== dt ? dt : "" : jt;
-           null === Ot || void 0 === Ot || Ot({
-             model: tt.name,
-             reasoningChars: Ht.length,
-             answer: ft,
-             isCalling: Xt.length > 0
+           const Ou = uu.nativeTools && cu ? null !== (lu = wZ(qu)) && void 0 !== lu ? lu : "" : qu;
+           null === su || void 0 === su || su({
+             model: uu.name,
+             reasoningChars: fu.length,
+             answer: Ou,
+             isCalling: Cu.length > 0
```

#### 328. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6798-L6799` → after: `L6798-L6799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6798-L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6798-L6799) · [Before (L6798-L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6798-L6799)

```diff
-         }), (tt => {
-           Et = tt
+         }), (uu => {
+           Nu = uu
```

#### 329. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6802` → after: `L6802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6802) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6802)

```diff
-         jD(Et, et, jt + Ht, 20 * Xt.length)
+         fZ(Nu, Eu, qu + fu, 20 * Cu.length)
```

#### 330. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6804-L6821` → after: `L6804-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6804-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6804-L6821) · [Before (L6804-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6804-L6821)

```diff
-       const ft = AD(tt, jt, Ht, Xt, Qt, lt);
-       return null === ft ? (MD.iE(tt.name, "empty"), "failed") : ft
-     }
- 
-     function AD(tt, et, Vt, Ot, qt) {
-       var Dt;
-       let mt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         dt = et;
-       var jt;
-       tt.nativeTools && mt && (dt = null !== (jt = CD(dt)) && void 0 !== jt ? jt : dt);
-       dt = dt.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const Ht = GD(dt, Vt, Ot, null !== (Dt = tt.callFormat) && void 0 !== Dt ? Dt : "simple", qt);
-       return "" === Ht.answer ? null : {
-         model: tt.name,
-         answer: Ht.answer,
-         reasoning: Vt,
- ... (2 more removed lines; see GitHub link above)
+       const Ou = tZ(uu, qu, fu, Cu, bu, cu);
+       return null === Ou ? (eZ.HN(uu.name, "empty"), "failed") : Ou
+     }
+ 
+     function tZ(uu, Eu, ju, su, Uu) {
+       var Zu;
+       let Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         lu = Eu;
+       var qu;
+       uu.nativeTools && Xu && (lu = null !== (qu = wZ(lu)) && void 0 !== qu ? qu : lu);
+       lu = lu.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const fu = SZ(lu, ju, su, null !== (Zu = uu.callFormat) && void 0 !== Zu ? Zu : "simple", Uu);
+       return "" === fu.answer ? null : {
+         model: uu.name,
+         answer: fu.answer,
+         reasoning: ju,
+ ... (2 more added lines; see GitHub link above)
```

#### 331. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6825-L6826` → after: `L6825-L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6825-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6825-L6826) · [Before (L6825-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6825-L6826)

```diff
-     function iD(tt) {
-       return tt.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function xZ(uu) {
+       return uu.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 332. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6829-L6830` → after: `L6829-L6830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6829-L6830) · [Before (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6829-L6830)

```diff
-     function YD(tt) {
-       return rD(tt) && !tt.isCutShort
+     function TZ(uu) {
+       return BZ(uu) && !uu.isCutShort
```

#### 333. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6832-L6835` → after: `L6832-L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6832-L6835) · [Before (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6832-L6835)

```diff
-     async function BD(tt, et, Vt, Ot, qt) {
-       const Dt = tt.map((() => new AbortController)),
-         mt = () => {
-           for (const tt of Dt) tt.abort()
+     async function HZ(uu, Eu, ju, su, Uu) {
+       const Zu = uu.map((() => new AbortController)),
+         Xu = () => {
+           for (const uu of Zu) uu.abort()
```

#### 334. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6837` → after: `L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6837) · [Before (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6837)

```diff
-       null !== Vt && void 0 !== Vt && Vt.aborted && mt(), null === Vt || void 0 === Vt || Vt.addEventListener("abort", mt, {
+       null !== ju && void 0 !== ju && ju.aborted && Xu(), null === ju || void 0 === ju || ju.addEventListener("abort", Xu, {
```

#### 335. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6840-L6854` → after: `L6840-L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6840-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6840-L6854) · [Before (L6840-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6840-L6854)

```diff
-       const dt = tt.map((() => {})),
-         jt = tt.map((() => {}));
-       let Ht = null;
-       const Xt = tt => void 0 !== tt && ("" !== iD(tt.answer).trim() || !0 === tt.isCalling);
-       let Qt = () => {};
-       tt.forEach(((tt, Vt) => {
-         const mt = (0, Mt.d)(ID, Dt[Vt].signal);
-         UD(tt, SD(et, tt), mt.signal, (tt => {
-           jt[Vt] = tt, null === Ht && Xt(tt) && (Ht = Vt), Ht === Vt && (null === Ot || void 0 === Ot || Ot(tt))
-         }), qt).catch((et => {
-           if (Dt[Vt].signal.aborted) return "failed";
-           const Ot = mt.signal.aborted;
-           return console.warn(`World Code AI: ${tt.name} ${Ot?"took longer than 240 s":"couldn't be reached"}`, et), MD.iE(tt.name, Ot ? "timeout" : "network"), Ot ? "timeout" : "failed"
-         })).then((tt => {
-           mt.clear(), dt[Vt] = tt, Ht !== Vt || YD(tt) || (Ht = null), Qt()
+       const lu = uu.map((() => {})),
+         qu = uu.map((() => {}));
+       let fu = null;
+       const Cu = uu => void 0 !== uu && ("" !== xZ(uu.answer).trim() || !0 === uu.isCalling);
+       let bu = () => {};
+       uu.forEach(((uu, ju) => {
+         const Xu = (0, gu.d)(KZ, Zu[ju].signal);
+         LZ(uu, kZ(Eu, uu), Xu.signal, (uu => {
+           qu[ju] = uu, null === fu && Cu(uu) && (fu = ju), fu === ju && (null === su || void 0 === su || su(uu))
+         }), Uu).catch((Eu => {
+           if (Zu[ju].signal.aborted) return "failed";
+           const su = Xu.signal.aborted;
+           return console.warn(`World Code AI: ${uu.name} ${su?"took longer than 240 s":"couldn't be reached"}`, Eu), eZ.HN(uu.name, su ? "timeout" : "network"), su ? "timeout" : "failed"
+         })).then((uu => {
+           Xu.clear(), lu[ju] = uu, fu !== ju || TZ(uu) || (fu = null), bu()
```

#### 336. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6857-L6862` → after: `L6857-L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6857-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6857-L6862) · [Before (L6857-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6857-L6862)

```diff
-       const lt = () => {
-         var tt;
-         if (null !== Ht) {
-           const tt = dt[Ht];
-           return YD(tt) ? {
-             reply: tt
+       const cu = () => {
+         var uu;
+         if (null !== fu) {
+           const uu = lu[fu];
+           return TZ(uu) ? {
+             reply: uu
```

#### 337. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6865-L6867` → after: `L6865-L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6865-L6867) · [Before (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6865-L6867)

```diff
-         const et = dt.find(YD);
-         if (et) return {
-           reply: et
+         const Eu = lu.find(TZ);
+         if (Eu) return {
+           reply: Eu
```

#### 338. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6869-L6870` → after: `L6869-L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6869-L6870) · [Before (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6869-L6870)

```diff
-         if (!dt.includes(void 0)) return {
-           reply: null !== (tt = dt.find(rD)) && void 0 !== tt ? tt : null
+         if (!lu.includes(void 0)) return {
+           reply: null !== (uu = lu.find(BZ)) && void 0 !== uu ? uu : null
```

#### 339. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6873-L6877` → after: `L6873-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6873-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6873-L6877) · [Before (L6873-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6873-L6877)

```diff
-           const tt = dt.findIndex(((tt, et) => void 0 === tt && Xt(jt[et])));
-           if (-1 !== tt) {
-             Ht = tt;
-             const et = jt[tt];
-             et && (null === Ot || void 0 === Ot || Ot(et))
+           const uu = lu.findIndex(((uu, Eu) => void 0 === uu && Cu(qu[Eu])));
+           if (-1 !== uu) {
+             fu = uu;
+             const Eu = qu[uu];
+             Eu && (null === su || void 0 === su || su(Eu))
```

#### 340. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6883-L6886` → after: `L6883-L6886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6883-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6883-L6886) · [Before (L6883-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6883-L6886)

```diff
-           if (null !== Vt && void 0 !== Vt && Vt.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const tt = lt();
-           if (tt) {
-             const et = dt.filter((tt => "string" === typeof tt));
+           if (null !== ju && void 0 !== ju && ju.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const uu = cu();
+           if (uu) {
+             const Eu = lu.filter((uu => "string" === typeof uu));
```

#### 341. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6888-L6889` → after: `L6888-L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6888-L6889) · [Before (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6888-L6889)

```diff
-               reply: tt.reply,
-               failures: et
+               reply: uu.reply,
+               failures: Eu
```

#### 342. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6892-L6893` → after: `L6892-L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6892-L6893) · [Before (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6892-L6893)

```diff
-           await new Promise((tt => {
-             Qt = tt
+           await new Promise((uu => {
+             bu = uu
```

#### 343. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6897` → after: `L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6897) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6897)

```diff
-         null === Vt || void 0 === Vt || Vt.removeEventListener("abort", mt), mt()
+         null === ju || void 0 === ju || ju.removeEventListener("abort", Xu), Xu()
```

#### 344. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6901-L6916` → after: `L6901-L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6901-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6901-L6916) · [Before (L6901-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6901-L6916)

```diff
-     function pD() {
-       let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const et = lD.firstFreeAt(uD.map((tt => tt.name)), tt);
-       return ED(et - tt) ? tt : et
-     }
-     async function xD(tt) {
-       var et;
-       let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const Ot = Date.now(),
-         qt = null !== (et = Vt.models) && void 0 !== et ? et : uD,
-         Dt = void 0 === Vt.models ? function(tt, et) {
-           let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-           const Ot = tt.map((tt => ({
-               model: tt,
-               key: Vt()
-             }))).sort(((tt, et) => tt.key - et.key)).map((tt => {
+     function AZ() {
+       let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const Eu = NZ.firstFreeAt(JZ.map((uu => uu.name)), uu);
+       return OZ(Eu - uu) ? uu : Eu
+     }
+     async function nZ(uu) {
+       var Eu;
+       let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const su = Date.now(),
+         Uu = null !== (Eu = ju.models) && void 0 !== Eu ? Eu : JZ,
+         Zu = void 0 === ju.models ? function(uu, Eu) {
+           let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+           const su = uu.map((uu => ({
+               model: uu,
+               key: ju()
+             }))).sort(((uu, Eu) => uu.key - Eu.key)).map((uu => {
```

#### 345. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6918-L6920` → after: `L6918-L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6918-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6918-L6920) · [Before (L6918-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6918-L6920)

```diff
-                 model: et
-               } = tt;
-               return et
+                 model: Eu
+               } = uu;
+               return Eu
```
