# Changed — Bundle Modifications Report (Part 132 / 140)

- **Updated at**: `2026-11-24T12:43 JST`
- **Part**: `132 / 140` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 131](part-131.md) · [Part 133 →](part-133.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (999 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 23. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L118-L119)

```diff
-             gS = [`${SS.frames} frames (${SS.looked} looked, ${SS.idle} idle${"wasm"===this.client?`, ${SS.NG} carried`:""})`, `dt avg ${jS(HS)} min ${jS(SS.dtMin)} max ${jS(SS.dtMax)}, ${SS.longFrames} long`, `${SS.events} mousemoves (max ${KS(SS.eventMax)} px, ${SS.bigEvents} b … [truncated]
-           SS.dropped > 0 && gS.push(`${SS.dropped} doubled spike copies dropped`), SS.cameraSets > 0 && gS.push(`${SS.cameraSets} camera sets`), SS.cameraSetsLost > 0 && gS.push(`${SS.cameraSetsLost} camera set records lost`), SS.lost > 0 && gS.push(`${SS.lost} records lost`), SS … [truncated]
+             Ik = [`${kk.frames} frames (${kk.looked} looked, ${kk.idle} idle${"wasm"===this.client?`, ${kk.iH} carried`:""})`, `dt avg ${wk(Fk)} min ${wk(kk.dtMin)} max ${wk(kk.dtMax)}, ${kk.longFrames} long`, `${kk.events} mousemoves (max ${ek(kk.eventMax)} px, ${kk.bigEvents} b … [truncated]
+           kk.dropped > 0 && Ik.push(`${kk.dropped} doubled spike copies dropped`), kk.cameraSets > 0 && Ik.push(`${kk.cameraSets} camera sets`), kk.cameraSetsLost > 0 && Ik.push(`${kk.cameraSetsLost} camera set records lost`), kk.lost > 0 && Ik.push(`${kk.lost} records lost`), kk … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L127)

```diff
-         (0, bS.i)("look", `start: ${SS} client, dpr ${window.devicePixelRatio}, screen ${gS.width}x${gS.height}, pointer lock ${document.pointerLockElement?"Ku":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
+         (0, Tk.g)("look", `start: ${kk} client, dpr ${window.devicePixelRatio}, screen ${Ik.width}x${Ik.height}, pointer lock ${document.pointerLockElement?"eq":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
```

#### 25. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L130)

```diff
-         }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, bS.h)("look", this.du … [truncated]
+         }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, Tk.f)("look", this.du … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L134)

```diff
-         HS.outliers >= 20 ? HS.suppressed++ : (HS.outliers++, (0, bS.i)("look", SS))
+         Fk.outliers >= 20 ? Fk.suppressed++ : (Fk.outliers++, (0, Tk.g)("look", kk))
```

#### 27. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L138)

```diff
-         HS.eventLines >= 10 ? HS.suppressed++ : (HS.eventLines++, (0, bS.i)("look", SS))
+         Fk.eventLines >= 10 ? Fk.suppressed++ : (Fk.eventLines++, (0, Tk.g)("look", kk))
```

#### 28. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L148)

```diff
-         if (HS.length >= tS.c) {
+         if (Fk.length >= Xk.e) {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L150)

```diff
-           for (let SS = tS.c; SS + tS.g <= HS.length; SS += tS.g) this.tally.cameraSets++, this.outlier(qS(HS, SS))
+           for (let kk = Xk.e; kk + Xk.f <= Fk.length; kk += Xk.f) this.tally.cameraSets++, this.outlier(ak(Fk, kk))
```

#### 30. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L177)

```diff
-   34117: (SS, HS, gS) => {
+   34048: (kk, Fk, Ik) => {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L179)

```diff
-       b: () => tS
+       c: () => Xk
```

#### 32. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L183)

```diff
-   34271: (SS, HS, gS) => {
+   34222: (kk, Fk, Ik) => {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L185-L187` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L185-L187) · [Before (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L185-L187)

```diff
-       e: () => xS,
-       h: () => bS,
-       i: () => IS
+       c: () => yk,
+       f: () => Tk,
+       h: () => Lk
```

#### 34. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L189)

```diff
-     var tS = gS(1657);
+     var Xk = Ik(1518);
```

#### 35. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L195)

```diff
-         yaw: xS.store.yaw + (null !== (HS = tS.c[SS].previewYaw) && void 0 !== HS ? HS : 0)
+         yaw: yk.store.yaw + (null !== (Fk = Xk.c[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
```

#### 36. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L316)

```diff
-   5212: (SS, HS, gS) => {
+   5047: (kk, Fk, Ik) => {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L318-L320` → after: `L318-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L318-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L318-L320) · [Before (L318-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L318-L320)

```diff
-       e: () => tS.h,
-       i: () => bS,
-       j: () => tS.n
+       b: () => Xk.d,
+       e: () => Tk,
+       i: () => Xk.m
```

#### 38. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L322)

```diff
-     var tS = gS(5221);
+     var Xk = Ik(5053);
```

#### 39. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L328)

```diff
-   39226: (SS, HS, gS) => {
+   39224: (kk, Fk, Ik) => {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L335-L339` → after: `L335-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L335-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L335-L339) · [Before (L335-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L335-L339)

```diff
-     var tS = gS(104),
-       bS = gS(45),
-       XS = (gS(3600), gS(5212), gS(3591)),
-       xS = gS(6848);
-     gS(6824);
+     var Xk = Ik(95),
+       Tk = Ik(41),
+       ik = (Ik(3403), Ik(5047), Ik(3396)),
+       yk = Ik(6644);
+     Ik(6611);
```

#### 41. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L349-L350` → after: `L349-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L349-L350) · [Before (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L349-L350)

```diff
-           if ((0, XS.i)(tS.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), uS().then((SS => {
-             SS && bS.g.removeItem(XS.d)
+           if ((0, ik.j)(Xk.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), qk().then((kk => {
+             kk && Tk.j.removeItem(ik.e)
```

#### 42. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L357)

```diff
-         return (0, XS.g)(tS.featureFlags.settings.canUseShaderPacks)
+         return (0, ik.h)(Xk.featureFlags.settings.canUseShaderPacks)
```

#### 43. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L378)

```diff
-         return this.compiling ??= Promise.all([gS.e(77), gS.e(133), gS.e(140)]).then((() => gS(41763))).then((SS => (SS.prefetchCompiler(), SS))), this.compiling
+         return this.compiling ??= Promise.all([Ik.e(77), Ik.e(133), Ik.e(140)]).then((() => Ik(41740))).then((kk => (kk.prefetchCompiler(), kk))), this.compiling
```

#### 44. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L392` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L392) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L392)

```diff
-       if (!(0, XS.j)(tS.featureFlags.settings.canUseShaderPacks)) return null;
+       if (!(0, ik.m)(Xk.featureFlags.settings.canUseShaderPacks)) return null;
```

#### 45. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L394-L395` → after: `L394-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L394-L395) · [Before (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L394-L395)

```diff
-         const SS = await (0, xS.f)(!0);
-         return SS || bS.g.setItem(XS.d, !1), SS
+         const kk = await (0, yk.i)(!0);
+         return kk || Tk.j.setItem(ik.e, !1), kk
```

#### 46. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L397)

```diff
-         return console.error("Failed to read the stored shader pack", SS), bS.g.removeItem(XS.d), null
+         return console.error("Failed to read the stored shader pack", kk), Tk.j.removeItem(ik.e), null
```

#### 47. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L408)

```diff
-   39267: (SS, HS, gS) => {
+   39264: (kk, Fk, Ik) => {
```

#### 48. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L411)

```diff
-       e: () => kS
+       h: () => Zk
```

#### 49. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L413-L420` → after: `L413-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L413-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L413-L420) · [Before (L413-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L413-L420)

```diff
-     var tS = gS(160),
-       bS = gS(191),
-       XS = gS(1573),
-       xS = gS(3083),
-       NS = gS(1588),
-       qS = gS(36479),
-       uS = gS(713),
-       IS = gS(39226);
+     var Xk = Ik(149),
+       Tk = Ik(178),
+       ik = Ik(1442),
+       yk = Ik(2852),
+       lk = Ik(1453),
+       ak = Ik(36458),
+       qk = Ik(667),
+       Lk = Ik(39224);
```

#### 50. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L423)

```diff
-       (0, xS.reportClientError)("matchmake_failed", SS, tS.g[tS.g.SHADER_PACK])
+       (0, yk.reportClientError)("matchmake_failed", kk, Xk.j[Xk.j.SHADER_PACK])
```

#### 51. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L429)

```diff
-       tS && null !== xS && await NS.b.reportShaderPackSession(SS, {
+       Xk && null !== yk && await lk.e.reportShaderPackSession(kk, {
```

#### 52. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L432)

```diff
-         game: (0, XS.h)(HS, bS.w, "other"),
+         game: (0, ik.e)(Fk, Tk.z, "other"),
```

#### 53. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L434)

```diff
-         visitSessionId: (0, uS.g)()
+         visitSessionId: (0, qk.h)()
```

#### 54. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L438)

```diff
-   6848: (SS, HS, gS) => {
+   6644: (kk, Fk, Ik) => {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L440-L441` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L440-L441) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L440-L441)

```diff
-       d: () => bS,
-       f: () => XS
+       e: () => Tk,
+       i: () => ik
```

#### 56. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L443)

```diff
-     var tS = gS(45);
+     var Xk = Ik(41);
```

#### 57. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L448)

```diff
-       return null !== (SS = await tS.e.getItem(bS, HS)) && void 0 !== SS ? SS : null
+       return null !== (kk = await Xk.g.getItem(Tk, Fk)) && void 0 !== kk ? kk : null
```

#### 58. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L451)

```diff
-   6824: (SS, HS, gS) => {
+   6611: (kk, Fk, Ik) => {
```

#### 59. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L456)

```diff
-     var tS = gS(5221);
+     var Xk = Ik(5053);
```

#### 60. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L461)

```diff
-       return XS ??= Promise.all([gS.e(72), gS.e(188)]).then((() => gS(40526))).then((SS => {
+       return ik ??= Promise.all([Ik.e(72), Ik.e(188)]).then((() => Ik(40500))).then((kk => {
```

#### 61. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L467)

```diff
-         return bS ??= (0, tS.j)(gS, XS, HS), bS
+         return Tk ??= (0, Xk.g)(Ik, ik, Fk), Tk
```

#### 62. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L476)

```diff
-   39062: (SS, HS, gS) => {
+   39034: (kk, Fk, Ik) => {
```

#### 63. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L478)

```diff
-       e: () => NS
+       b: () => lk
```

#### 64. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L480-L482` → after: `L480-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L480-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L480-L482) · [Before (L480-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L480-L482)

```diff
-     var tS = gS(31),
-       bS = gS(1366),
-       XS = gS(3127);
+     var Xk = Ik(34),
+       Tk = Ik(1270),
+       ik = Ik(2889);
```

#### 65. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L530)

```diff
-         const HS = (0, XS.p)(SS);
+         const Fk = (0, ik.n)(kk);
```

#### 66. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L533)

```diff
-         gS && !this.frozen ? (0, bS.u)(xS, {
+         Ik && !this.frozen ? (0, Tk.m)(yk, {
```

#### 67. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L535)

```diff
-         }) : !gS && this.frozen && (0, bS.q)(xS), this.frozen = gS, this.setListening("connected" !== SS), tS.k.cj(XS.o, gS ? "frozen" : SS)
+         }) : !Ik && this.frozen && (0, Tk.l)(yk), this.frozen = Ik, this.setListening("connected" !== kk), Xk.g.GL(ik.m, Ik ? "frozen" : kk)
```

#### 68. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L542)

```diff
-   39068: (SS, HS, gS) => {
+   39040: (kk, Fk, Ik) => {
```

#### 69. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L544` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L544) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L544)

```diff
-       d: () => tS
+       b: () => Xk
```

#### 70. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L565)

```diff
-   34180: (SS, HS, gS) => {
+   34111: (kk, Fk, Ik) => {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L567)

```diff
-       d: () => XS
+       c: () => ik
```

#### 72. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L569)

```diff
-     var tS = gS(1149);
+     var Xk = Ik(1076);
```

#### 73. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L573)

```diff
-       return null !== (SS = null === (HS = screen.orientation) || void 0 === HS ? void 0 : HS.type) && void 0 !== SS ? SS : innerWidth > innerHeight ? "landscape" : "portrait"
+       return null !== (kk = null === (Fk = screen.orientation) || void 0 === Fk ? void 0 : Fk.type) && void 0 !== kk ? kk : innerWidth > innerHeight ? "landscape" : "portrait"
```

#### 74. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L586)

```diff
-           this.holding && (0, tS.Zj)(new Error("Game view size held for 60 s"))
+           this.holding && (0, Xk.ow)(new Error("Game view size held for 60 s"))
```

#### 75. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L613)

```diff
-   39256: (SS, HS, gS) => {
+   39250: (kk, Fk, Ik) => {
```

#### 76. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L615)

```diff
-       c: () => bS
+       b: () => Tk
```

#### 77. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L626` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L626) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L626)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => gS(1844))), Promise.resolve().then((() => gS(1435)))]);
+           }] = await Promise.all([Promise.resolve().then((() => Ik(1665))), Promise.resolve().then((() => Ik(1324)))]);
```

#### 78. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L642)

```diff
-   39076: (SS, HS, gS) => {
+   39054: (kk, Fk, Ik) => {
```

#### 79. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L644)

```diff
-       c: () => uS,
+       d: () => qk,
```

#### 80. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L647-L652` → after: `L647-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L647-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L647-L652) · [Before (L647-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L647-L652)

```diff
-     var tS = gS(1822),
-       bS = gS(198),
-       XS = gS(1792),
-       xS = gS(1898),
-       NS = gS(1286),
-       qS = gS(1216);
+     var Xk = Ik(1649),
+       Tk = Ik(187),
+       ik = Ik(1631),
+       yk = Ik(1716),
+       lk = Ik(1194),
+       ak = Ik(1120);
```

#### 81. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L655)

```diff
-         return "object" === typeof SS && null !== SS && SS.code === bS.c.VpnIp.code
+         return "object" === typeof kk && null !== kk && kk.code === Tk.d.VpnIp.code
```

#### 82. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L657` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L657) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L657)

```diff
-         return XS.d.supports("appCheck") && SS.isLoggedIn() && !SS.hasTriedAppAttestation()
+         return ik.b.supports("appCheck") && kk.isLoggedIn() && !kk.hasTriedAppAttestation()
```

#### 83. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L664` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L664) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L664)

```diff
-           } = await (0, qS.postJsonWithMetricsCookiesAndJsonResponse)(`${NS.clientSideServerUrls.indexUrl}/index/app-attestation`, {
+           } = await (0, ak.postJsonWithMetricsCookiesAndJsonResponse)(`${lk.clientSideServerUrls.indexUrl}/index/app-attestation`, {
```

#### 84. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L671` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L671) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L671)

```diff
-           return HS instanceof tS.e && "failed" === HS.code ? (console.warn("The app couldn't get an App Check token:", HS), SS.markAppAttestationTried()) : console.error("Failed to attest the app:", HS), !1
+           return Fk instanceof Xk.d && "failed" === Fk.code ? (console.warn("The app couldn't get an App Check token:", Fk), kk.markAppAttestationTried()) : console.error("Failed to attest the app:", Fk), !1
```

#### 85. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L684)

```diff
-   40997: (SS, HS, gS) => {
+   40986: (kk, Fk, Ik) => {
```

#### 86. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L686-L687` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L686-L687) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L686-L687)

```diff
-       d: () => NS,
-       g: () => qS
+       c: () => lk,
+       f: () => ak
```

#### 87. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L689)

```diff
-     var tS = gS(1860);
+     var Xk = Ik(1682);
```

#### 88. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L748)

```diff
-         (0, tS.c)(bS.blob, `bloxd-screenshot-${bS.width}x${bS.height}-${Date.now()}.png`)
+         (0, Xk.c)(Tk.blob, `bloxd-screenshot-${Tk.width}x${Tk.height}-${Date.now()}.png`)
```

#### 89. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L754)

```diff
-   39070: (SS, HS, gS) => {
+   39046: (kk, Fk, Ik) => {
```

#### 90. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L756-L757` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L756-L757) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L756-L757)

```diff
-       c: () => kS,
-       e: () => IS
+       e: () => Zk,
+       i: () => Lk
```

#### 91. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L759-L762` → after: `L759-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L759-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L759-L762) · [Before (L759-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L759-L762)

```diff
-     var tS = gS(198),
-       bS = gS(1934),
-       XS = gS(1290),
-       xS = gS(9093);
+     var Xk = Ik(187),
+       Tk = Ik(1759),
+       ik = Ik(1199),
+       yk = Ik(8880);
```

#### 92. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L771-L772` → after: `L771-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L771-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L771-L772) · [Before (L771-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L771-L772)

```diff
-       } = SS, bS = tS.c.duplicateLobbyNameError;
-       return (HS === bS.code || HS === qS) && (gS === bS.text || gS === bS.text + tS.g)
+       } = kk, Tk = Xk.d.duplicateLobbyNameError;
+       return (Fk === Tk.code || Fk === ak) && (Ik === Tk.text || Ik === Tk.text + Xk.m)
```

#### 93. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L775` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L775) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L775)

```diff
-       let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bS.e;
+       let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tk.b;
```

#### 94. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L787)

```diff
-     const fS = new Set([tS.c.duplicateLobbyNameError.code, tS.c.lobbyCantBeCreated.code, tS.c.roomDisposedEarlyError.code, tS.c.roomDisposedLateError.code, tS.c.serverRoomLimitReached.code]);
+     const tk = new Set([Xk.d.duplicateLobbyNameError.code, Xk.d.lobbyCantBeCreated.code, Xk.d.roomDisposedEarlyError.code, Xk.d.roomDisposedLateError.code, Xk.d.serverRoomLimitReached.code]);
```

#### 95. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L791)

```diff
-       const HS = (0, xS.i)(SS);
+       const Fk = (0, yk.g)(kk);
```

#### 96. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L795` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L795) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L795)

```diff
-   39175: (SS, HS, gS) => {
+   39171: (kk, Fk, Ik) => {
```

#### 97. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L797)

```diff
-       c: () => xS
+       e: () => yk
```

#### 98. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L799-L801` → after: `L799-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L799-L801) · [Before (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L799-L801)

```diff
-     var tS = gS(369),
-       bS = gS(138),
-       XS = gS(45);
+     var Xk = Ik(318),
+       Tk = Ik(129),
+       ik = Ik(41);
```

#### 99. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L804` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L804) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L804)

```diff
-       XS.g.setItem(tS.Ob, XS.g.getItem(tS.Ob) + 1), (0, bS.j)() && XS.g.setItem(tS.Kb, XS.g.getItem(tS.Kb) + 1)
+       ik.j.setItem(Xk.Ob, ik.j.getItem(Xk.Ob) + 1), (0, Tk.p)() && ik.j.setItem(Xk.Nb, ik.j.getItem(Xk.Nb) + 1)
```

#### 100. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L807` → after: `L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L807) · [Before (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L807)

```diff
-   36471: (SS, HS, gS) => {
+   36449: (kk, Fk, Ik) => {
```

#### 101. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L809-L810` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L809-L810) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L809-L810)

```diff
-       b: () => DS,
-       f: () => wS
+       d: () => Qk,
+       g: () => sk
```

#### 102. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L812-L829` → after: `L812-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L812-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L812-L829) · [Before (L812-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L812-L829)

```diff
-     var tS = gS(1087),
-       bS = gS(215),
-       XS = gS(378),
-       xS = gS(687),
-       NS = gS(387),
-       qS = gS(1089),
-       uS = gS(699),
-       IS = gS(727),
-       fS = gS(4656),
-       kS = gS(104),
-       aS = gS(138),
-       KS = gS(1844),
-       jS = gS(118),
-       GS = gS(36479),
-       CS = gS(45),
-       nS = gS(713),
- ... (2 more removed lines; see GitHub link above)
+     var Xk = Ik(1018),
+       Tk = Ik(198),
+       ik = Ik(333),
+       yk = Ik(633),
+       lk = Ik(337),
+       ak = Ik(1021),
+       qk = Ik(646),
+       Lk = Ik(684),
+       tk = Ik(4508),
+       Zk = Ik(95),
+       jk = Ik(129),
+       ek = Ik(1665),
+       wk = Ik(111),
+       Hk = Ik(36458),
+       Jk = Ik(41),
+       xk = Ik(667),
+ ... (2 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L833)

```diff
-       return [...null !== (SS = navigator.languages) && void 0 !== SS ? SS : [null !== (HS = navigator.language) && void 0 !== HS ? HS : "none"], "en-gb"]
+       return [...null !== (kk = navigator.languages) && void 0 !== kk ? kk : [null !== (Fk = navigator.language) && void 0 !== Fk ? Fk : "none"], "en-gb"]
```

#### 104. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L837-L838` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L837-L838) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L837-L838)

```diff
-       const ZS = (0, tS.m)(HS) ? (0, tS.t)(HS) : null,
-         JS = SS.isLoggedIn() && void 0 !== (0, bS.c)(XS.m, aS.r) ? (0, PS.z)() : null,
+       const zk = (0, Xk.j)(Fk) ? (0, Xk.n)(Fk) : null,
+         Sk = kk.isLoggedIn() && void 0 !== (0, Tk.d)(ik.i, jk.v) ? (0, Pk.x)() : null,
```

#### 105. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L844` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L844) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L844)

```diff
-             joinDiscord: !!CS.g.getItem("DiscordPressed"),
+             joinDiscord: !!Jk.j.getItem("DiscordPressed"),
```

#### 106. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L856` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L856) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L856)

```diff
-             deviceType: (0, jS.c)()
+             deviceType: (0, wk.e)()
```

#### 107. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L862-L869` → after: `L862-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L862-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L862-L869) · [Before (L862-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L862-L869)

```diff
-           siteUsed: aS.r,
-           subsiteUsed: aS.A,
-           playSessionId: (0, GS.h)(HS),
-           visitSessionId: (0, nS.g)(),
-           clientReason: uS.p.reason,
-           budgetBasis: (0, QS.i)(),
-           ...null !== IS.p && {
-             diagClaim: IS.p.claimId
+           siteUsed: jk.v,
+           subsiteUsed: jk.C,
+           playSessionId: (0, Hk.j)(Fk),
+           visitSessionId: (0, xk.h)(),
+           clientReason: qk.o.reason,
+           budgetBasis: (0, Kk.h)(),
+           ...null !== Lk.t && {
+             diagClaim: Lk.t.claimId
```

#### 108. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L875-L876` → after: `L875-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L875-L876) · [Before (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L875-L876)

```diff
-       return null !== ZS && (0, NS.yc)(ZS) ? (OS.lobbyName = (0, tS.k)(ZS, (0, tS.p)(HS), gS), {
-         roomName: `classic_${qS.c}`,
+       return null !== zk && (0, lk.Kc)(zk) ? (vk.lobbyName = (0, Xk.i)(zk, (0, Xk.l)(Fk), Ik), {
+         roomName: `classic_${ak.f}`,
```

#### 109. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L884)

```diff
-   39102: (SS, HS, gS) => {
+   39080: (kk, Fk, Ik) => {
```

#### 110. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L886-L887` → after: `L886-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L886-L887) · [Before (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L886-L887)

```diff
-       e: () => aS,
-       g: () => kS
+       b: () => jk,
+       e: () => Zk
```

#### 111. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L893-L894` → after: `L893-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L893-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L893-L894) · [Before (L893-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L893-L894)

```diff
-       NS = new RegExp(`^${XS}$`);
-     new RegExp(`^${tS}(${[...bS,"other"].join("|")}):(?:n|k(${XS})|b(0|[1-9][0-9]?)):([01])([01])$`);
+       lk = new RegExp(`^${ik}$`);
+     new RegExp(`^${Xk}(${[...Tk,"other"].join("|")}):(?:n|k(${ik})|b(0|[1-9][0-9]?)):([01])([01])$`);
```

#### 112. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L897)

```diff
-       const uS = "string" === typeof SS && bS.includes(SS) ? SS : "other";
+       const qk = "string" === typeof kk && Tk.includes(kk) ? kk : "other";
```

#### 113. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L899)

```diff
-       return "string" === typeof HS ? IS = NS.test(HS) ? `k${HS}` : "n" : "number" === typeof gS && Number.isInteger(gS) && gS >= 0 && gS <= xS && (IS = `b${gS}`), `${tS}${uS}:${IS}:${XS?1:0}${qS?1:0}`
+       return "string" === typeof Fk ? Lk = lk.test(Fk) ? `k${Fk}` : "n" : "number" === typeof Ik && Number.isInteger(Ik) && Ik >= 0 && Ik <= yk && (Lk = `b${Ik}`), `${Xk}${qk}:${Lk}:${ik?1:0}${ak?1:0}`
```

#### 114. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L901-L902` → after: `L901-L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L901-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L901-L902) · [Before (L901-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L901-L902)

```diff
-     var uS = gS(1758),
-       IS = gS(1846);
+     var qk = Ik(1604),
+       Lk = Ik(1668);
```

#### 115. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L906)

```diff
-       const HS = SS instanceof Element && SS !== document.body && SS !== document.documentElement && !(0, uS.n)(SS) && !SS.closest("#root");
+       const Fk = kk instanceof Element && kk !== document.body && kk !== document.documentElement && !(0, qk.p)(kk) && !kk.closest("#root");
```

#### 116. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L908)

```diff
-         editable: (0, IS.d)(SS),
+         editable: (0, Lk.b)(kk),
```

#### 117. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L927` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L927) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L927)

```diff
-   40689: (SS, HS, gS) => {
+   40661: (kk, Fk, Ik) => {
```

#### 118. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L929` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L929) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L929)

```diff
-       e: () => NS
+       b: () => lk
```

#### 119. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L931)

```diff
-     var tS = gS(39690);
+     var Xk = Ik(39629);
```

#### 120. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1090-L1091` → after: `L1090-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1090-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1090-L1091) · [Before (L1090-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1090-L1091)

```diff
-             XN: 0,
-             jx: null,
+             il: 0,
+             jy: null,
```

#### 121. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1152-L1153` → after: `L1152-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1152-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1152-L1153) · [Before (L1152-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1152-L1153)

```diff
-           worldCodeAiChunk: () => tS.d,
-           worldCodeAiGameState: () => tS.h
+           worldCodeAiChunk: () => Xk.c,
+           worldCodeAiGameState: () => Xk.f
```

#### 122. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1174` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1174) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1174)

```diff
-   40991: (SS, HS, gS) => {
+   40978: (kk, Fk, Ik) => {
```

#### 123. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1177` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1177) · [Before (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1177)

```diff
-       f: () => XS
+       g: () => ik
```

#### 124. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1179-L1180` → after: `L1179-L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1179-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1179-L1180) · [Before (L1179-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1179-L1180)

```diff
-     var tS = gS(2256),
-       bS = gS(1087);
+     var Xk = Ik(2071),
+       Tk = Ik(1018);
```

#### 125. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1183` → after: `L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1183) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1183)

```diff
-       return null !== SS.gameSource && (0, tS.o)(HS, SS.gameSource)
+       return null !== kk.gameSource && (0, Xk.i)(Fk, kk.gameSource)
```

#### 126. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1188)

```diff
-       const gS = (0, bS.m)(HS) ? (0, bS.t)(HS) : null;
+       const Ik = (0, Tk.j)(Fk) ? (0, Tk.n)(Fk) : null;
```

#### 127. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1192` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1192) · [Before (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1192)

```diff
-   40963: (SS, HS, gS) => {
+   40954: (kk, Fk, Ik) => {
```

#### 128. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1194` → after: `L1194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1194) · [Before (L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1194)

```diff
-       d: () => NS
+       b: () => lk
```

#### 129. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1196-L1198` → after: `L1196-L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1196-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1196-L1198) · [Before (L1196-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1196-L1198)

```diff
-     var tS = gS(665),
-       bS = gS(40972),
-       XS = gS(40844);
+     var Xk = Ik(614),
+       Tk = Ik(40957),
+       ik = Ik(40819);
```

#### 130. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1200-L1206` → after: `L1200-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1200-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1200-L1206) · [Before (L1200-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1200-L1206)

```diff
-       const HS = await (0, bS.l)({
-         Helmet: gS(37983),
-         Chestplate: gS(37991),
-         Gauntlets: gS(38011),
-         Leggings: gS(37997),
-         Boots: gS(38003)
-       } [tS.d[SS]]);
+       const Fk = await (0, Tk.i)({
+         Helmet: Ik(37960),
+         Chestplate: Ik(37968),
+         Gauntlets: Ik(37990),
+         Leggings: Ik(37975),
+         Boots: Ik(37984)
+       } [Xk.e[kk]]);
```

#### 131. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1208` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1208) · [Before (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1208)

```diff
-         return (0, XS.k)(HS)
+         return (0, ik.q)(Fk)
```

#### 132. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1216` → after: `L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1216) · [Before (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1216)

```diff
-           HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bS.s;
+           Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tk.o;
```

#### 133. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1220-L1221` → after: `L1220-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1220-L1221) · [Before (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1220-L1221)

```diff
-         for (let SS = 0; SS < tS.d.length; SS++) this.part(SS).catch((HS => {
-           console.warn(`The grayscale armour ${tS.d[SS]} image didn't decode ahead of use`, HS)
+         for (let kk = 0; kk < Xk.e.length; kk++) this.part(kk).catch((Fk => {
+           console.warn(`The grayscale armour ${Xk.e[kk]} image didn't decode ahead of use`, Fk)
```

#### 134. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1243` → after: `L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1243) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1243)

```diff
-           throw new bS.d("decode", `grayscale armour ${tS.d[SS]}`, {
+           throw new Tk.e("decode", `grayscale armour ${Xk.e[kk]}`, {
```

#### 135. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1257)

```diff
-           throw this.decoded.delete(SS), HS instanceof bS.d ? HS : new bS.d("decode", `grayscale armour ${tS.d[SS]}`, {
+           throw this.decoded.delete(kk), Fk instanceof Tk.e ? Fk : new Tk.e("decode", `grayscale armour ${Xk.e[kk]}`, {
```

#### 136. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1265` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1265) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1265)

```diff
-   40954: (SS, HS, gS) => {
+   40946: (kk, Fk, Ik) => {
```

#### 137. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1269` → after: `L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1269) · [Before (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1269)

```diff
-       h: () => IS,
+       i: () => Lk,
```

#### 138. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1271` → after: `L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1271) · [Before (L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1271)

```diff
-       m: () => jS
+       o: () => wk
```

#### 139. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1273-L1275` → after: `L1273-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1273-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1273-L1275) · [Before (L1273-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1273-L1275)

```diff
-     var tS = gS(40824),
-       bS = gS(40963),
-       XS = gS(40972);
+     var Xk = Ik(40799),
+       Tk = Ik(40954),
+       ik = Ik(40957);
```

#### 140. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1300)

```diff
-       const HS = (0, tS.l)();
+       const Fk = (0, Xk.i)();
```

#### 141. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1306)

```diff
-         armourAtlasUrl: async () => (await gS.e(204).then((() => gS(34324)))).armourAtlasUrl,
+         armourAtlasUrl: async () => (await Ik.e(204).then((() => Ik(34274)))).armourAtlasUrl,
```

#### 142. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1312` → after: `L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1312) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1312)

```diff
-         particleItemUrl: async SS => (bS ??= gS.e(38).then((() => gS(51080))).catch((SS => {
+         particleItemUrl: async kk => (Tk ??= Ik.e(38).then((() => Ik(51036))).catch((kk => {
```

#### 143. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1321` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1321) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1321)

```diff
-         this.sources = SS, this.onFailure = HS, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.grey … [truncated]
+         this.sources = kk, this.onFailure = Fk, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.grey … [truncated]
```

#### 144. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1334)

```diff
-         this.glbWrittenImages.delete(SS), HS && this.setGlbImages(SS, void 0 !== gS && gS.length > 0 ? gS : void 0)
+         this.glbWrittenImages.delete(kk), Fk && this.setGlbImages(kk, void 0 !== Ik && Ik.length > 0 ? Ik : void 0)
```

#### 145. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1338)

```diff
-         this.glbTakenCount.set(SS, (null !== (gS = this.glbTakenCount.get(SS)) && void 0 !== gS ? gS : 0) + 1), void 0 === HS ? this.glbImages.delete(SS) : this.glbImages.set(SS, HS);
+         this.glbTakenCount.set(kk, (null !== (Ik = this.glbTakenCount.get(kk)) && void 0 !== Ik ? Ik : 0) + 1), void 0 === Fk ? this.glbImages.delete(kk) : this.glbImages.set(kk, Fk);
```

#### 146. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1354` → after: `L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1354) · [Before (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1354)

```diff
-         if (this.nK) return;
+         if (this.ee) return;
```

#### 147. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1391` → after: `L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1391) · [Before (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1391)

```diff
-         this.nK = !0, this.loading.clear(), this.ready.length = 0;
+         this.ee = !0, this.loading.clear(), this.ready.length = 0;
```

#### 148. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1402` → after: `L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1402) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1402)

```diff
-           this.nK || this.loading.get(HS) !== gS ? this.release(tS.id) : (this.loading.delete(HS), this.answered.set(tS.id, SS), this.ready.push({
+           this.ee || this.loading.get(Fk) !== Ik ? this.release(Xk.id) : (this.loading.delete(Fk), this.answered.set(Xk.id, kk), this.ready.push({
```

#### 149. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1408` → after: `L1408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1408) · [Before (L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1408)

```diff
-           if (this.nK || this.loading.get(HS) !== gS) return;
+           if (this.ee || this.loading.get(Fk) !== Ik) return;
```

#### 150. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1413)

```diff
-           const bS = tS instanceof XS.d && "decode" === tS.stage ? aS : KS;
+           const Tk = Xk instanceof ik.e && "decode" === Xk.stage ? jk : ek;
```

#### 151. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1444` → after: `L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1444) · [Before (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1444)

```diff
-             throw new XS.d("fetch", `image kind ${SS.kind}`, {
+             throw new ik.e("fetch", `image kind ${kk.kind}`, {
```

#### 152. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1458)

```diff
-             throw new XS.d("fetch", tS, {
+             throw new ik.e("fetch", Xk, {
```

#### 153. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1465)

```diff
-         if (!tS) throw new XS.d("decode", `image ${SS.index} of file ${2147483647&SS.word}`, {
+         if (!Xk) throw new ik.e("decode", `image ${kk.index} of file ${2147483647&kk.word}`, {
```

#### 154. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1478` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1478) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1478)

```diff
-       return `${HS}:${gS}:${tS}`
+       return `${Fk}:${Ik}:${Xk}`
```

#### 155. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1482` → after: `L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1482) · [Before (L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1482)

```diff
-       if (null === SS) throw new XS.d("fetch", `no URL for image ${CS(HS)}`, {
+       if (null === kk) throw new ik.e("fetch", `no URL for image ${Jk(Fk)}`, {
```

#### 156. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1492)

```diff
-       return NS.setUint8(0, SS.kind), NS.setUint8(1, SS.index), NS.setUint8(2, HS), NS.setUint32(4, SS.word, !0), NS.setUint32(8, null !== (tS = null === gS || void 0 === gS ? void 0 : gS.id) && void 0 !== tS ? tS : 0, !0), NS.setUint16(12, Math.min(null !== (bS = null === gS ||  … [truncated]
+       return lk.setUint8(0, kk.kind), lk.setUint8(1, kk.index), lk.setUint8(2, Fk), lk.setUint32(4, kk.word, !0), lk.setUint32(8, null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.id) && void 0 !== Xk ? Xk : 0, !0), lk.setUint16(12, Math.min(null !== (Tk = null === Ik ||  … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1509` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1509) · [Before (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1509)

```diff
-       const XS = null !== (HS = tS.images) && void 0 !== HS ? HS : [];
+       const ik = null !== (Fk = Xk.images) && void 0 !== Fk ? Fk : [];
```

#### 158. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1515-L1516` → after: `L1515-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1515-L1516) · [Before (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1515-L1516)

```diff
-         if (!XS || 0 !== (null !== (gS = XS.buffer) && void 0 !== gS ? gS : 0) || void 0 === XS.byteLength) return null;
-         const NS = null !== (bS = XS.byteOffset) && void 0 !== bS ? bS : 0,
+         if (!ik || 0 !== (null !== (Ik = ik.buffer) && void 0 !== Ik ? Ik : 0) || void 0 === ik.byteLength) return null;
+         const lk = null !== (Tk = ik.byteOffset) && void 0 !== Tk ? Tk : 0,
```

#### 159. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1522` → after: `L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1522) · [Before (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1522)

```diff
-   40692: (SS, HS, gS) => {
+   40670: (kk, Fk, Ik) => {
```

#### 160. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1525-L1526` → after: `L1525-L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1525-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1525-L1526) · [Before (L1525-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1525-L1526)

```diff
-       e: () => XS,
-       i: () => bS
+       c: () => ik,
+       e: () => Tk
```

#### 161. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1543` → after: `L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1543) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1543)

```diff
-   36608: (SS, HS, gS) => {
+   36588: (kk, Fk, Ik) => {
```

#### 162. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1545-L1548` → after: `L1545-L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1545-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1545-L1548) · [Before (L1545-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1545-L1548)

```diff
-       e: () => IS,
-       i: () => kS,
-       m: () => CS,
-       o: () => uS
+       d: () => Lk,
+       h: () => Zk,
+       l: () => Jk,
+       p: () => qk
```

#### 163. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1550-L1555` → after: `L1550-L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1550-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1550-L1555) · [Before (L1550-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1550-L1555)

```diff
-     var tS = gS(24),
-       bS = gS(2510),
-       XS = gS(2517),
-       xS = gS(2526),
-       NS = gS(2603),
-       qS = gS(31);
+     var Xk = Ik(25),
+       Tk = Ik(2331),
+       ik = Ik(2338),
+       yk = Ik(2341),
+       lk = Ik(2400),
+       ak = Ik(34);
```

#### 164. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1558)

```diff
-       return (!(0, xS.c)() || 0 === SS && 0 === HS) && (0, XS.y)(bS.g.Joystick, 0, SS, HS, 0)
+       return (!(0, yk.d)() || 0 === kk && 0 === Fk) && (0, ik.q)(Tk.m.Joystick, 0, kk, Fk, 0)
```

#### 165. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1585` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1585) · [Before (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1585)

```diff
-       return document.documentElement.classList.contains(NS.m)
+       return document.documentElement.classList.contains(lk.g)
```

#### 166. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1649` → after: `L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1649) · [Before (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1649)

```diff
-         if (!HS) return void this.write(bS.g.TouchZone, SS, 0, 0, 0);
+         if (!Fk) return void this.write(Tk.m.TouchZone, kk, 0, 0, 0);
```

#### 167. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1654` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1654) · [Before (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1654)

```diff
-         this.write(bS.g.TouchZone, SS, XS.x - this.canvasLeft, XS.y - this.canvasTop, jS(gS.width, gS.height));
+         this.write(Tk.m.TouchZone, kk, ik.x - this.canvasLeft, ik.y - this.canvasTop, wk(Ik.width, Ik.height));
```

#### 168. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1656` → after: `L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1656) · [Before (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1656)

```diff
-         this.write(bS.g.TouchZone, 256 | SS, 0, 0, xS ? jS(xS.width, xS.height) : 0)
+         this.write(Tk.m.TouchZone, 256 | kk, 0, 0, yk ? wk(yk.width, yk.height) : 0)
```

#### 169. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1660)

```diff
-           gS = tS.b.get("worldPanelHud");
+           Ik = Xk.d.get("worldPanelHud");
```

#### 170. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1668-L1669` → after: `L1668-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1668-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1668-L1669) · [Before (L1668-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1668-L1669)

```diff
-     }(XS.y);
-     (0, qS.m)(NS.f, (() => {
+     }(ik.q);
+     (0, ak.i)(lk.d, (() => {
```

#### 171. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1673)

```diff
-   40743: (SS, HS, gS) => {
+   40712: (kk, Fk, Ik) => {
```

#### 172. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1675-L1676` → after: `L1675-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1675-L1676) · [Before (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1675-L1676)

```diff
-       d: () => qS,
-       h: () => uS
+       c: () => ak,
+       f: () => qk
```

#### 173. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1678-L1682` → after: `L1678-L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1678-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1678-L1682) · [Before (L1678-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1678-L1682)

```diff
-     var tS = gS(40869),
-       bS = gS(39076),
-       XS = gS(36471),
-       xS = gS(40748),
-       NS = gS(40716);
+     var Xk = Ik(40843),
+       Tk = Ik(39054),
+       ik = Ik(36449),
+       yk = Ik(40721),
+       lk = Ik(40689);
```

#### 174. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1689` → after: `L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1689) · [Before (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1689)

```diff
-         throw console.error("[bloxd-wasm-client] could not get a traffic code", KS), new NS.p(KS)
+         throw console.error("[bloxd-wasm-client] could not get a traffic code", ek), new lk.t(ek)
```

#### 175. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1695` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1695) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1695)

```diff
-         const HS = (0, XS.f)(SS, uS, IS, qS, (SS => {
+         const Fk = (0, ik.g)(kk, qk, Lk, ak, (kk => {
```

#### 176. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1700` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1700) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1700)

```diff
-         const bS = (0, xS.F)();
+         const Tk = (0, yk.J)();
```

#### 177. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1715` → after: `L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1715) · [Before (L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1715)

```diff
-         optionsAfterRefusal: async HS => await (0, bS.c)(SS, HS) ? fS().joinOptions : null
+         optionsAfterRefusal: async Fk => await (0, Tk.d)(kk, Fk) ? tk().joinOptions : null
```

#### 178. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1719` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1719) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1719)

```diff
-   40979: (SS, HS, gS) => {
+   40966: (kk, Fk, Ik) => {
```

#### 179. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1724` → after: `L1723-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1723-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1723-L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1724)

```diff
-       h: () => xS
+       i: () => tk,
+       m: () => yk
```

#### 180. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1726-L1727` → after: `L1726-L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1726-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1726-L1727) · [Before (L1726-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1726-L1727)

```diff
-     var tS = gS(40954),
-       bS = gS(40824);
+     var Xk = Ik(40946),
+       Tk = Ik(40799);
```

#### 181. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1791)

```diff
-           return null !== (gS = null === (tS = HS()) || void 0 === tS ? void 0 : tS.armourAtlasUrl()) && void 0 !== gS ? gS : SS.armourAtlasUrl()
+           return null !== (Ik = null === (Xk = Fk()) || void 0 === Xk ? void 0 : Xk.armourAtlasUrl()) && void 0 !== Ik ? Ik : kk.armourAtlasUrl()
```

#### 182. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1796` → after: `L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1796) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1796)

```diff
-           const SS = await gS.e(38).then((() => gS(51080))).catch((() => null));
+           const kk = await Ik.e(38).then((() => Ik(51036))).catch((() => null));
```

#### 183. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1801)

```diff
-           return null !== (SS = null === (HS = await NS()) || void 0 === HS ? void 0 : HS.blockImageName(gS)) && void 0 !== SS ? SS : null
+           return null !== (kk = null === (Fk = await lk()) || void 0 === Fk ? void 0 : Fk.blockImageName(Ik)) && void 0 !== kk ? kk : null
```

#### 184. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1807)

```diff
-       return (0, bS.l)().catch((() => null))
+       return (0, Tk.i)().catch((() => null))
```

#### 185. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1815)

```diff
-           bS = null !== (SS = null === tS || void 0 === tS ? void 0 : tS.slice(tS.lastIndexOf("/") + 1)) && void 0 !== SS ? SS : null;
+           Tk = null !== (kk = null === Xk || void 0 === Xk ? void 0 : Xk.slice(Xk.lastIndexOf("/") + 1)) && void 0 !== kk ? kk : null;
```

#### 186. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1830)

```diff
-       const HS = [tS.h.ArmourAtlas, tS.h.LifeformAtlas, tS.h.GroupAtlas, tS.h.BlockImage, tS.h.Particle];
+       const Fk = [Xk.i.ArmourAtlas, Xk.i.LifeformAtlas, Xk.i.GroupAtlas, Xk.i.BlockImage, Xk.i.Particle];
```

#### 187. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1833` → after: `L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1833) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1833)

```diff
-           case tS.h.Particle:
+           case Xk.i.Particle:
```

#### 188. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1835` → after: `L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1835) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1835)

```diff
-           case tS.h.LifeformAtlas:
+           case Xk.i.LifeformAtlas:
```

#### 189. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1843` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1843) · [Before (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1843)

```diff
-   40871: (SS, HS, gS) => {
+   40845: (kk, Fk, Ik) => {
```

#### 190. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1847-L1849` → after: `L1848-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1848-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1848-L1849) · [Before (L1847-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1847-L1849)

```diff
-       h: () => xS,
-       k: () => bS,
-       l: () => XS
+       i: () => Tk,
+       k: () => ik
```

#### 191. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1870` → after: `L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1870) · [Before (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1870)

```diff
-       Promise.resolve().then((() => gS(113))).then((HS => {
+       Promise.resolve().then((() => Ik(104))).then((Fk => {
```

#### 192. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1881)

```diff
-       null !== window.onbeforeunload ? Promise.resolve().then((() => gS(1844))).then((HS => {
+       null !== window.onbeforeunload ? Promise.resolve().then((() => Ik(1665))).then((Fk => {
```

#### 193. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1896` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1896) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1896)

```diff
-   5242: (SS, HS, gS) => {
+   5071: (kk, Fk, Ik) => {
```

#### 194. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1910` → after: `L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1910) · [Before (L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1910)

```diff
-       d: () => tS
+       e: () => Xk
```

#### 195. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1913` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1913) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1913)

```diff
-   40931: (SS, HS, gS) => {
+   40917: (kk, Fk, Ik) => {
```

#### 196. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1917-L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1918) · [Before (L1917-L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1917-L1918)

```diff
-       j: () => jS,
-       k: () => KS
+       i: () => ek
```

#### 197. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1920-L1925` → after: `L1920-L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1920-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1920-L1925) · [Before (L1920-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1920-L1925)

```diff
-     var tS = gS(1934),
-       bS = gS(1290),
-       XS = gS(39070),
-       xS = gS(36503),
-       NS = gS(39087),
-       qS = gS(40716);
+     var Xk = Ik(1759),
+       Tk = Ik(1199),
+       ik = Ik(39046),
+       yk = Ik(36486),
+       lk = Ik(39066),
+       ak = Ik(40689);
```

#### 198. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1949` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1949) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1949)

```diff
-       return `${tS?"https":"http"}://${bS}${XS}/matchmake/${HS}/${encodeURIComponent(gS)}${xS?`?${xS}`:""}`
+       return `${Xk?"https":"http"}://${Tk}${ik}/matchmake/${Fk}/${encodeURIComponent(Ik)}${yk?`?${yk}`:""}`
```

#### 199. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1954-L1955` → after: `L1954-L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1954-L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1954-L1955) · [Before (L1954-L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1954-L1955)

```diff
-       const tS = null !== (gS = HS.protocol) && void 0 !== gS ? gS : "ws";
-       if ("ws" !== tS) throw new Error(`seat reservation asks for the ${tS} transport`);
+       const Xk = null !== (Ik = Fk.protocol) && void 0 !== Ik ? Ik : "ws";
+       if ("ws" !== Xk) throw new Error(`seat reservation asks for the ${Xk} transport`);
```

#### 200. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1963` → after: `L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1963) · [Before (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1963)

```diff
-       return `${bS?"wss":"ws"}://${HS.room.publicAddress||`${XS}${xS}`}/${HS.room.processId}/${HS.room.roomId}?${qS.toString()}`
+       return `${Tk?"wss":"ws"}://${Fk.room.publicAddress||`${ik}${yk}`}/${Fk.room.processId}/${Fk.room.roomId}?${ak.toString()}`
```

#### 201. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1968` → after: `L1968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1968) · [Before (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1968)

```diff
-       const kS = null !== (NS = uS.sleep) && void 0 !== NS ? NS : tS.e,
+       const Zk = null !== (lk = qk.sleep) && void 0 !== lk ? lk : Xk.b,
```

#### 202. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1970-L1971` → after: `L1970-L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1970-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1970-L1971) · [Before (L1970-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1970-L1971)

```diff
-         jS = new xS.d((() => {
-           (0, bS.f)(KS.controller, new xS.e("seat"))
+         wk = new yk.e((() => {
+           (0, Tk.h)(ek.controller, new yk.f("seat"))
```

#### 203. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1977)

```diff
-         const tS = await (0, XS.e)((() => async function(SS, HS, gS, tS) {
+         const Xk = await (0, ik.i)((() => async function(kk, Fk, Ik, Xk) {
```

#### 204. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1986` → after: `L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L1986) · [Before (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L1986)

```diff
-             if (aS > 0) await NS(null !== (jS = fS[aS - 1]) && void 0 !== jS ? jS : 1500, xS);
+             if (jk > 0) await lk(null !== (wk = tk[jk - 1]) && void 0 !== wk ? wk : 1500, yk);
```

#### 205. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2004` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2004) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2004)

```diff
-               KS = new qS.o(`seat request answered HTTP ${HS.status}${null===gS?" without JSON":" without a seat"}`, !1, void 0, HS.status)
+               ek = new ak.r(`seat request answered HTTP ${Fk.status}${null===Ik?" without JSON":" without a seat"}`, !1, void 0, Fk.status)
```

#### 206. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2007` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2007) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2007)

```diff
-           throw null !== (XS = KS) && void 0 !== XS ? XS : new qS.o("seat request made no attempt", !1)
+           throw null !== (ik = ek) && void 0 !== ik ? ik : new ak.r("seat request made no attempt", !1)
```

#### 207. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2020` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2020) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2020)

```diff
-       return new qS.o(SS instanceof Error ? SS.message : String(SS), !0, SS)
+       return new ak.r(kk instanceof Error ? kk.message : String(kk), !0, kk)
```

#### 208. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2026` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2026) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2026)

```diff
-       } = gS, xS = null !== (tS = gS.fetch) && void 0 !== tS ? tS : fetch, NS = await xS(SS, {
+       } = Ik, yk = null !== (Xk = Ik.fetch) && void 0 !== Xk ? Xk : fetch, lk = await yk(kk, {
```

#### 209. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2043` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2043) · [Before (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2043)

```diff
-             answer: "object" === typeof HS && null !== HS ? HS : null,
+             answer: "object" === typeof Fk && null !== Fk ? Fk : null,
```

#### 210. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2066` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2066) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2066)

```diff
-       return new qS.k(SS, "number" === typeof(null === HS || void 0 === HS ? void 0 : HS.code) ? HS.code : 0, (0, NS.m)(SS).text)
+       return new ak.j(kk, "number" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.code) ? Fk.code : 0, (0, lk.p)(kk).text)
```

#### 211. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2086)

```diff
-         throw new PS(`the seat's reconnect was refused: ${null!==xS&&void 0!==xS?xS:`HTTP ${bS.status}`}`, SS)
+         throw new Pk(`the seat's reconnect was refused: ${null!==yk&&void 0!==yk?yk:`HTTP ${Tk.status}`}`, kk)
```

#### 212. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2108` → after: `L2108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2108) · [Before (L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2108)

```diff
-   40632: (SS, HS, gS) => {
+   40598: (kk, Fk, Ik) => {
```

#### 213. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2114-L2122` → after: `L2112-L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2112-L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2112-L2119) · [Before (L2114-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2114-L2122)

```diff
-       G: () => DS,
-       K: () => GS,
-       M: () => OS,
-       P: () => LS,
-       Q: () => KS,
-       U: () => AS,
-       W: () => nS,
-       _: () => CS,
-       b: () => bS,
+       H: () => Kk,
+       L: () => Qk,
+       O: () => Hk,
+       R: () => vk,
+       T: () => pk,
+       X: () => ek,
+       Z: () => bk,
+       ab: () => xk,
```

#### 214. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2126` → after: `L2124-L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2124-L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2124-L2125) · [Before (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2126)

```diff
-       l: () => aS,
+       j: () => Gk,
+       lb: () => sk,
```

#### 215. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2128-L2129` → after: `L2127-L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2127-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2127-L2128) · [Before (L2128-L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2128-L2129)

```diff
-       o: () => cS,
-       r: () => ZS,
+       q: () => wk,
+       s: () => Ok,
```

#### 216. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2131` → after: `L2130-L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2130-L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2130-L2131) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2131)

```diff
-       x: () => JS
+       x: () => Ek,
+       z: () => Sk
```

#### 217. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2133` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2133) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2133)

```diff
-     var tS = gS(3140);
+     var Xk = Ik(2913);
```

#### 218. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2164)

```diff
-       return !ArrayBuffer.isView(SS) || SS instanceof DataView ? Array.isArray(SS) ? SS.map((SS => HS(SS))) : SS : Array.from(SS, (SS => HS(SS)))
+       return !ArrayBuffer.isView(kk) || kk instanceof DataView ? Array.isArray(kk) ? kk.map((kk => Fk(kk))) : kk : Array.from(kk, (kk => Fk(kk)))
```

#### 219. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2184)

```diff
-       return null === SS || "object" !== typeof SS ? SS : [xS(SS.Mq), xS(SS.Fq)]
+       return null === kk || "object" !== typeof kk ? kk : [yk(kk.Ya), yk(kk.Aa)]
```

#### 220. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2188)

```diff
-       return null === SS || "object" !== typeof SS ? SS : [XS(SS.dt, uS), XS(SS.Xx, uS)]
+       return null === kk || "object" !== typeof kk ? kk : [ik(kk.EX, qk), ik(kk.yy, qk)]
```

#### 221. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2192` → after: `L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2192) · [Before (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2192)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Ju), xS(HS.Ou)];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.oq), yk(Fk.vq)];
```

#### 222. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2197` → after: `L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2197) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2197)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [HS.id, HS.GI];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.id, Fk.HL];
```

#### 223. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2202` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2202) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2202)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [HS.BX, xS(HS.MX), HS.FX, xS(HS.oX), HS.rX, HS.Sx, HS.Fx, xS(HS.Rx), xS(HS.Tx)];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.Wi, yk(Fk.Bi), Fk.Yi, yk(Fk.mi), Fk.ky, Fk.Fy, Fk.gy, yk(Fk.my), yk(Fk.hy)];
```

#### 224. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2207` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2207) · [Before (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2207)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [XS(HS.bI, uS), HS.XI];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ik(Fk.TL, qk), Fk.iL];
```

#### 225. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2212` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2212) · [Before (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2212)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [XS(HS.ju, (SS => xS(SS))), xS(HS.Gu), HS.Cu];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ik(Fk.wq, (kk => yk(kk))), yk(Fk.Hq), Fk.Jq];
```

#### 226. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2217` → after: `L2217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2217) · [Before (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2217)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [XS(HS.sx, uS), xS(HS.Bx), HS.Mx];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ik(Fk.Wy, qk), yk(Fk.Yy), Fk.Ay];
```

#### 227. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2222)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.wt), xS(HS.ht)];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.VX), yk(Fk.zX)];
```

#### 228. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2227` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2227) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2227)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.gN)];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.Il)];
```

#### 229. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2236)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Fu), xS(HS.Ru), xS(HS.Mq), xS(HS.Fq)];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.dq), yk(Fk.Yq), yk(Fk.Ya), yk(Fk.Aa)];
```

#### 230. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2249` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2249) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2249)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.bx)];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.iy)];
```

#### 231. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2258` → after: `L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2258) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2258)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Ex), xS(HS.Lx)];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.vy), yk(Fk.Ey)];
```

#### 232. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2275` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2275) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2275)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Tu)];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.Aq)];
```

#### 233. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2280` → after: `L2280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2280) · [Before (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2280)

```diff
-       return (IS ??= (0, tS.e)().map((SS => SS.name)), IS).map((HS => {
+       return (Lk ??= (0, Xk.g)().map((kk => kk.name)), Lk).map((Fk => {
```

#### 234. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2287` → after: `L2287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2287) · [Before (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2287)

```diff
-       return null === (HS = SS) || "object" !== typeof HS ? HS : [HS.Vu, HS.iu, HS.Wu];
+       return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.Rq, Fk.Uq, Fk.Cq];
```

#### 235. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2291)

```diff
-   40986: (SS, HS, gS) => {
+   40971: (kk, Fk, Ik) => {
```

#### 236. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2295-L2296` → after: `L2295-L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2295-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2295-L2296) · [Before (L2295-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2295-L2296)

```diff
-     var tS = gS(40991),
-       bS = gS(40979);
+     var Xk = Ik(40978),
+       Tk = Ik(40966);
```

#### 237. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2340)

```diff
-     }(bS.d)
+     }(Tk.f)
```

#### 238. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2342)

```diff
-   5234: (SS, HS, gS) => {
+   5063: (kk, Fk, Ik) => {
```

#### 239. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2345` → after: `L2345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2345) · [Before (L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2345)

```diff
-       g: () => NS
+       i: () => lk
```

#### 240. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2347-L2348` → after: `L2347-L2348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2347-L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2347-L2348) · [Before (L2347-L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2347-L2348)

```diff
-     var tS = gS(2256),
-       bS = gS(5242);
+     var Xk = Ik(2071),
+       Tk = Ik(5071);
```

#### 241. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2353` → after: `L2353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2353) · [Before (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2353)

```diff
-         pack: SS.metaData.id === tS.d ? null : SS
+         pack: kk.metaData.id === Xk.b ? null : kk
```

#### 242. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2358` → after: `L2358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2358) · [Before (L2358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2358)

```diff
-       return !(null === XS || !(0, bS.d)(XS.pack, SS)) && (XS = null, !0)
+       return !(null === ik || !(0, Tk.e)(ik.pack, kk)) && (ik = null, !0)
```

#### 243. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2361)

```diff
-   40704: (SS, HS, gS) => {
+   40682: (kk, Fk, Ik) => {
```

#### 244. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2371-L2393` → after: `L2371-L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2371-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2371-L2393) · [Before (L2371-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2371-L2393)

```diff
-     var tS = gS(198),
-       bS = gS(1329),
-       XS = gS(160),
-       xS = gS(39106),
-       NS = gS(2060),
-       qS = gS(31),
-       uS = gS(4794),
-       IS = gS(1390),
-       fS = gS(1830),
-       kS = gS(1400),
-       aS = gS(39256),
-       KS = gS(1378),
-       jS = gS(39267),
-       GS = gS(39175),
-       CS = gS(36479),
-       nS = gS(39070),
- ... (7 more removed lines; see GitHub link above)
+     var Xk = Ik(187),
+       Tk = Ik(1234),
+       ik = Ik(149),
+       yk = Ik(39087),
+       lk = Ik(1875),
+       ak = Ik(34),
+       qk = Ik(4671),
+       Lk = Ik(1287),
+       tk = Ik(1652),
+       Zk = Ik(1301),
+       jk = Ik(39250),
+       ek = Ik(1276),
+       wk = Ik(39264),
+       Hk = Ik(39171),
+       Jk = Ik(36458),
+       xk = Ik(39046),
+ ... (7 more added lines; see GitHub link above)
```

#### 245. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2519` → after: `L2519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2519) · [Before (L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2519)

```diff
-         ...ZS.e[SS]
+         ...zk.b[kk]
```

#### 246. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2527` → after: `L2527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2527) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2527)

```diff
-       return null === (SS = null === (HS = (0, hS.h)()) || void 0 === HS ? void 0 : HS.localPlayerAlive()) || void 0 === SS || SS
+       return null === (kk = null === (Fk = (0, Vk.k)()) || void 0 === Fk ? void 0 : Fk.localPlayerAlive()) || void 0 === kk || kk
```

#### 247. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2532` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2532) · [Before (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2532)

```diff
-       return null !== (SS = null === (HS = (0, hS.h)()) || void 0 === HS ? void 0 : HS.localDeaths()) && void 0 !== SS ? SS : null
+       return null !== (kk = null === (Fk = (0, Vk.k)()) || void 0 === Fk ? void 0 : Fk.localDeaths()) && void 0 !== kk ? kk : null
```

#### 248. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2539)

```diff
-           return (0, wS.w)((() => {
+           return (0, sk.y)((() => {
```

#### 249. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2562)

```diff
-             null === (SS = (0, hS.h)()) || void 0 === SS || SS.respawn()
+             null === (kk = (0, Vk.k)()) || void 0 === kk || kk.respawn()
```

#### 250. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2566-L2567` → after: `L2566-L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2566-L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2566-L2567) · [Before (L2566-L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2566-L2567)

```diff
-             null === (HS = (0, hS.h)()) || void 0 === HS || HS.send(JS.b.PlayEmote, (0, JS.F)({
-               gN: SS
+             null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.send(Sk.e.PlayEmote, (0, Sk.H)({
+               Il: kk
```

#### 251. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2575)

```diff
-             null === (HS = (0, hS.h)()) || void 0 === HS || HS.thirdPersonFor(gS)
+             null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.thirdPersonFor(Ik)
```

#### 252. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2579` → after: `L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2579) · [Before (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2579)

```diff
-             null === (HS = (0, hS.h)()) || void 0 === HS || HS.bindCustomButtonKeys(SS)
+             null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.bindCustomButtonKeys(kk)
```

#### 253. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2587)

```diff
-             null === (HS = (0, hS.h)()) || void 0 === HS || HS.pressCustomButton(gS, tS)
+             null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.pressCustomButton(Ik, Xk)
```

#### 254. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2591-L2592` → after: `L2591-L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2591-L2592) · [Before (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2591-L2592)

```diff
-             const HS = (0, JS.P)({
-                 Tu: SS
+             const Fk = (0, Sk.T)({
+                 Aq: kk
```

#### 255. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2595-L2596` → after: `L2595-L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2595-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2595-L2596) · [Before (L2595-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2595-L2596)

```diff
-                 const SS = (0, hS.h)();
-                 return !(null !== SS && void 0 !== SS && SS.isSessionLive) || SS.send(JS.b.StopSleeping, HS)
+                 const kk = (0, Vk.k)();
+                 return !(null !== kk && void 0 !== kk && kk.isSessionLive) || kk.send(Sk.e.StopSleeping, Fk)
```

#### 256. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2599` → after: `L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2599) · [Before (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2599)

```diff
-               const SS = (0, wS.w)((() => {
+               const kk = (0, sk.y)((() => {
```

#### 257. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2606` → after: `L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2606) · [Before (L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2606)

```diff
-             null === (HS = (0, hS.h)()) || void 0 === HS || HS.setCameraZoom(SS)
+             null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.setCameraZoom(kk)
```

#### 258. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2614)

```diff
-             return null !== (SS = null === (HS = (0, hS.h)()) || void 0 === HS ? void 0 : HS.cameraZoom()) && void 0 !== SS ? SS : 0
+             return null !== (kk = null === (Fk = (0, Vk.k)()) || void 0 === Fk ? void 0 : Fk.cameraZoom()) && void 0 !== kk ? kk : 0
```

#### 259. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2618-L2626` → after: `L2618-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2618-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2618-L2626) · [Before (L2618-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2618-L2626)

```diff
-     var YS = gS(39087),
-       AS = gS(40716),
-       yS = gS(40723),
-       VS = gS(40743),
-       iS = gS(1337),
-       WS = gS(113),
-       zS = gS(4656),
-       US = gS(3841),
-       pS = gS(1259);
+     var uk = Ik(39066),
+       bk = Ik(40689),
+       Rk = Ik(40697),
+       Uk = Ik(40712),
+       Ck = Ik(1244),
+       Nk = Ik(104),
+       ck = Ik(4508),
+       Wk = Ik(3671),
+       fk = Ik(1160);
```

#### 260. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2628-L2629` → after: `L2628-L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2628-L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2628-L2629) · [Before (L2628-L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2628-L2629)

```diff
-       VI: () => (0, iS.c)(),
-       inbuiltOverwritten: () => zS.d,
+       RL: () => (0, Ck.c)(),
+       inbuiltOverwritten: () => ck.f,
```

#### 261. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2632-L2634` → after: `L2632-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2632-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2632-L2634) · [Before (L2632-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2632-L2634)

```diff
-       emitReplaced: () => (0, qS.c)(),
-       confirmMesh: () => (0, US.d)(),
-       confirmMeshHitStack: () => (0, US.f)()
+       emitReplaced: () => (0, ak.d)(),
+       confirmMesh: () => (0, Wk.c)(),
+       confirmMeshHitStack: () => (0, Wk.e)()
```

#### 262. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2636-L2645` → after: `L2636-L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2636-L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2636-L2645) · [Before (L2636-L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2636-L2645)

```diff
-     var BS = gS(40727),
-       MS = gS(40871);
-     var FS = gS(24),
-       RS = gS(2069),
-       TS = gS(2111),
-       oS = gS(1736),
-       lS = gS(2144),
-       mS = gS(1281),
-       eS = gS(1334),
-       rS = gS(40876);
+     var dk = Ik(40702),
+       Yk = Ik(40845);
+     var Ak = Ik(25),
+       gk = Ik(1881),
+       mk = Ik(1916),
+       hk = Ik(1585),
+       rk = Ik(1953),
+       Dk = Ik(1179),
+       Mk = Ik(1241),
+       kF = Ik(40852);
```

#### 263. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2648` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2648) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2648)

```diff
-       return eS.f.get().getCurrentLanguageCode()
+       return Mk.d.get().getCurrentLanguageCode()
```

#### 264. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2654` → after: `L2654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2654) · [Before (L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2654)

```diff
-           translate: (SS, HS) => (0, mS.y)(SH(), SS, HS),
+           translate: (kk, Fk) => (0, Dk.t)(FF(), kk, Fk),
```

#### 265. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2656-L2657` → after: `L2656-L2657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2656-L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2656-L2657) · [Before (L2656-L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2656-L2657)

```diff
-             const HS = (0, TS.r)(SS, FS.b.get("isTouchScreen"));
-             return null !== HS ? (0, mS.C)(SH(), HS.translationKey, HS.params) : (0, TS.o)((0, TS.p)(SS))
+             const Fk = (0, mk.r)(kk, Ak.d.get("isTouchScreen"));
+             return null !== Fk ? (0, Dk.w)(FF(), Fk.translationKey, Fk.params) : (0, mk.n)((0, mk.q)(kk))
```

#### 266. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2659-L2660` → after: `L2659-L2660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2659-L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2659-L2660) · [Before (L2659-L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2659-L2660)

```diff
-           isFriend: lS.g,
-           hiddenNames: RS.c.shown,
+           isFriend: rk.h,
+           hiddenNames: gk.d.shown,
```

#### 267. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2667` → after: `L2667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2667) · [Before (L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2667)

```diff
-           (0, mS.n)(SS).then((() => {
+           (0, Dk.j)(kk).then((() => {
```

#### 268. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2671` → after: `L2671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2671) · [Before (L2671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2671)

```diff
-         bS = () => oS.d.getSocialState().friends.map((SS => SS.name.toLowerCase())).sort().join(" ");
+         Tk = () => hk.c.getSocialState().friends.map((kk => kk.name.toLowerCase())).sort().join(" ");
```

#### 269. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2674` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2674) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2674)

```diff
-       const xS = [(0, eS.j)((() => {
+       const yk = [(0, Mk.e)((() => {
```

#### 270. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2676` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2676) · [Before (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2676)

```diff
-       })), (0, qS.m)("customBindingsChanged", HS), (0, qS.m)("appManagerUpdated|isTouchScreen", HS), (0, lS.d)((() => {
+       })), (0, ak.i)("customBindingsChanged", Fk), (0, ak.i)("appManagerUpdated|isTouchScreen", Fk), (0, rk.d)((() => {
```

#### 271. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2679` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2679) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2679)

```diff
-       })), RS.c.subscribe(HS)];
+       })), gk.d.subscribe(Fk)];
```

#### 272. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2685-L2701` → after: `L2685-L2701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2685-L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2685-L2701) · [Before (L2685-L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2685-L2701)

```diff
-     var gH = gS(687),
-       tH = gS(1087),
-       bH = gS(2092),
-       XH = gS(369),
-       xH = gS(191),
-       NH = gS(3021),
-       qH = gS(3030),
-       uH = gS(38739),
-       IH = gS(4812),
-       fH = gS(40889),
-       kH = gS(727),
-       aH = gS(699),
-       KH = gS(748),
-       jH = gS(751),
-       GH = gS(2083),
-       CH = gS(3849),
- ... (1 more removed lines; see GitHub link above)
+     var XF = Ik(633),
+       TF = Ik(1018),
+       iF = Ik(1902),
+       yF = Ik(318),
+       lF = Ik(178),
+       aF = Ik(2801),
+       qF = Ik(2803),
+       LF = Ik(38726),
+       tF = Ik(4692),
+       ZF = Ik(40870),
+       jF = Ik(684),
+       eF = Ik(646),
+       wF = Ik(705),
+       HF = Ik(710),
+       JF = Ik(1894),
+       xF = Ik(3680),
+ ... (1 more added lines; see GitHub link above)
```

#### 273. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2703-L2713` → after: `L2703-L2713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2703-L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2703-L2713) · [Before (L2703-L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2703-L2713)

```diff
-     var QH = gS(1286),
-       DH = gS(1290),
-       wH = gS(4556),
-       hH = gS(3589),
-       ZH = gS(61),
-       JH = gS(364),
-       OH = gS(362),
-       dH = gS(40911),
-       cH = gS(4917);
-     var vH = gS(37723),
-       EH = gS(40914);
+     var QF = Ik(1194),
+       sF = Ik(1199),
+       VF = Ik(4411),
+       zF = Ik(3388),
+       SF = Ik(51),
+       oF = Ik(314),
+       vF = Ik(309),
+       EF = Ik(40891),
+       OF = Ik(4794);
+     var nF = Ik(37718),
+       GF = Ik(40896);
```

#### 274. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2719` → after: `L2719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2719) · [Before (L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2719)

```diff
-         (0, dH.x)()
+         (0, EF.C)()
```

#### 275. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2724` → after: `L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2724) · [Before (L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2724)

```diff
-           value: String((0, dH.n)())
+           value: String((0, EF.p)())
```

#### 276. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2731` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2731) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2731)

```diff
-         (0, EH.k)(SS)
+         (0, GF.f)(kk)
```

#### 277. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2740-L2741` → after: `L2740-L2741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2740-L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2740-L2741) · [Before (L2740-L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2740-L2741)

```diff
-           if (null !== (0, kS.e)().websocketUrl) try {
-             (0, wS.J)().leaveGame(SS)
+           if (null !== (0, Zk.d)().websocketUrl) try {
+             (0, sk.I)().leaveGame(kk)
```

#### 278. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2743` → after: `L2743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2743) · [Before (L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2743)

```diff
-             (0, kS.r)({
+             (0, Zk.s)({
```

#### 279. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2755` → after: `L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2755) · [Before (L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2755)

```diff
-         return (0, wS.r)(SS)
+         return (0, sk.t)(kk)
```

#### 280. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2758` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2758) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2758)

```diff
-         return (0, wS.n)(SS)
+         return (0, sk.s)(kk)
```

#### 281. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2761` → after: `L2761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2761) · [Before (L2761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2761)

```diff
-         return (0, wS.w)(SS)
+         return (0, sk.y)(kk)
```

#### 282. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2764` → after: `L2764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2764) · [Before (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2764)

```diff
-     var yH = gS(40917);
+     var RF = Ik(40900);
```

#### 283. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2812-L2824` → after: `L2812-L2824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2812-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2812-L2824) · [Before (L2812-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2812-L2824)

```diff
-       return WH((await gS.e(204).then((() => gS(34324)))).averageColors)
-     }
-     var pH = gS(4926),
-       sH = gS(4935),
-       BH = gS(40672),
-       MH = gS(3391),
-       FH = gS(36277),
-       RH = gS(40773),
-       TH = gS(672),
-       oH = gS(37084),
-       lH = gS(665),
-       mH = gS(387),
-       eH = gS(40767);
+       return NF((await Ik.e(204).then((() => Ik(34274)))).averageColors)
+     }
+     var fF = Ik(4797),
+       BF = Ik(4799),
+       dF = Ik(40641),
+       YF = Ik(3164),
+       AF = Ik(36236),
+       gF = Ik(40752),
+       mF = Ik(621),
+       hF = Ik(37101),
+       rF = Ik(614),
+       DF = Ik(337),
+       MF = Ik(40738);
```

#### 284. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2828-L2831` → after: `L2828-L2831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2828-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2828-L2831) · [Before (L2828-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2828-L2831)

```diff
-       mobTypes: TH.o,
-       vehicleTypes: oH.e,
-       mobAiStates: TH.k,
-       playerPoses: lH.o
+       mobTypes: mF.n,
+       vehicleTypes: hF.d,
+       mobAiStates: mF.l,
+       playerPoses: rF.u
```

#### 285. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2833-L2841` → after: `L2833-L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2833-L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2833-L2841) · [Before (L2833-L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2833-L2841)

```diff
-     var gg = gS(40755),
-       tg = gS(40802),
-       bg = gS(1149),
-       Xg = gS(40924),
-       xg = gS(40928),
-       Ng = gS(3127),
-       qg = gS(39062),
-       ug = gS(4954),
-       Ig = gS(2510);
+     var XI = Ik(40726),
+       TI = Ik(40776),
+       iI = Ik(1076),
+       yI = Ik(40905),
+       lI = Ik(40914),
+       aI = Ik(2889),
+       qI = Ik(39034),
+       LI = Ik(4814),
+       tI = Ik(2331);
```

#### 286. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2843-L2844` → after: `L2843-L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2843-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2843-L2844) · [Before (L2843-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2843-L2844)

```diff
-       kg = Ng.d;
-     var ag = (0, xg.d)("resumingConn");
+       jI = aI.g;
+     var eI = (0, lI.c)("resumingConn");
```

#### 287. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2851` → after: `L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2851) · [Before (L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2851)

```diff
-         }), this.drops = 0, this.session = new qg.e({
+         }), this.drops = 0, this.session = new qI.b({
```

#### 288. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2861` → after: `L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2861) · [Before (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2861)

```diff
-             SS.uE(HS), (0, ug.i)(fg, HS ? fg : 0, "reconnectFreeze")
+             kk.sE(Fk), (0, LI.g)(ZI, Fk ? ZI : 0, "reconnectFreeze")
```

#### 289. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2937` → after: `L2937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2937) · [Before (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2937)

```diff
-         this.abortAttempt(new AS.m), gS || this.shell.releaseSeat(SS)
+         this.abortAttempt(new bk.o), Ik || this.shell.releaseSeat(kk)
```

#### 290. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2948-L2956` → after: `L2948-L2956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2948-L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2948-L2956) · [Before (L2948-L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2948-L2956)

```diff
-     var jg = gS(39068),
-       Gg = gS(40931),
-       Cg = gS(36493),
-       ng = gS(36485),
-       Pg = gS(2256),
-       Qg = gS(2022),
-       Dg = gS(4438),
-       wg = gS(40782),
-       hg = gS(5234);
+     var HI = Ik(39040),
+       JI = Ik(40917),
+       xI = Ik(36474),
+       PI = Ik(36466),
+       KI = Ik(2071),
+       QI = Ik(1844),
+       sI = Ik(4284),
+       VI = Ik(40757),
+       zI = Ik(5063);
```

#### 291. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2963` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2963) · [Before (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2963)

```diff
-       if (null !== gS && "" !== gS) return `game:${gS}`;
+       if (null !== Ik && "" !== Ik) return `game:${Ik}`;
```

#### 292. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2969` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2969) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2969)

```diff
-       if (tS !== Pg.q.CUSTOM) return `${tS}@${bS}`;
+       if (Xk !== KI.l.CUSTOM) return `${Xk}@${Tk}`;
```

#### 293. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2972-L2993` → after: `L2972-L2993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2972-L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2972-L2993) · [Before (L2972-L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2972-L2993)

```diff
-         for (const [SS, HS] of Object.entries(null !== xS && void 0 !== xS ? xS : {})) XS.push(`${SS}:${HS.length}`);
-       return `${tS}:${(0,Qg.u)(XS.join())}`
-     }
-     var Jg = gS(4540),
-       Og = gS(3403),
-       dg = gS(40934),
-       cg = gS(703),
-       vg = gS(3405),
-       Eg = gS(4634),
-       Lg = gS(45),
-       Yg = gS(40838),
-       Ag = gS(4566),
-       yg = gS(2517),
-       Vg = gS(1733),
-       ig = gS(1758),
-       Wg = gS(1366),
- ... (6 more removed lines; see GitHub link above)
+         for (const [kk, Fk] of Object.entries(null !== yk && void 0 !== yk ? yk : {})) ik.push(`${kk}:${Fk.length}`);
+       return `${Xk}:${(0,QI.r)(ik.join())}`
+     }
+     var oI = Ik(4395),
+       vI = Ik(3175),
+       EI = Ik(40923),
+       OI = Ik(650),
+       nI = Ik(3182),
+       GI = Ik(4491),
+       pI = Ik(41),
+       uI = Ik(40817),
+       bI = Ik(4430),
+       RI = Ik(2338),
+       UI = Ik(1580),
+       CI = Ik(1604),
+       NI = Ik(1270),
+ ... (6 more added lines; see GitHub link above)
```

#### 294. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2996` → after: `L2996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L2996) · [Before (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L2996)

```diff
-       return (SS.shiftKey ? pH._b.Shift : 0) | (SS.ctrlKey ? pH._b.Ctrl : 0) | (SS.altKey ? pH._b.Alt : 0) | (SS.metaKey ? pH._b.Meta : 0) | ("repeat" in SS && SS.repeat ? pH._b.Repeat : 0) | (SS.isTrusted ? 0 : pH._b.Untrusted | function(SS) {
+       return (kk.shiftKey ? fF.Kb.Shift : 0) | (kk.ctrlKey ? fF.Kb.Ctrl : 0) | (kk.altKey ? fF.Kb.Alt : 0) | (kk.metaKey ? fF.Kb.Meta : 0) | ("repeat" in kk && kk.repeat ? fF.Kb.Repeat : 0) | (kk.isTrusted ? 0 : fF.Kb.Untrusted | function(kk) {
```

#### 295. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3001-L3002` → after: `L3001-L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3001-L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3001-L3002) · [Before (L3001-L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3001-L3002)

```diff
-           } = (0, pg.g)(SS.target);
-           return (HS ? pH._b.UntrustedEditable : 0) | (gS ? pH._b.UntrustedOutsideView : 0)
+           } = (0, fI.e)(kk.target);
+           return (Fk ? fF.Kb.UntrustedEditable : 0) | (Ik ? fF.Kb.UntrustedOutsideView : 0)
```

#### 296. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3010` → after: `L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3010) · [Before (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3010)

```diff
-       return "touchOnly" !== (0, zg.c)() && "function" === typeof SS.requestPointerLock
+       return "touchOnly" !== (0, cI.e)() && "function" === typeof kk.requestPointerLock
```

#### 297. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3014` → after: `L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3014) · [Before (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3014)

```diff
-       return 0 === SS.button ? SS.altKey ? Bg.i["Alt+Left Click"] : Bg.i.Mouse1 : 1 === SS.button ? Bg.i.Mouse2 : Bg.i.Mouse3
+       return 0 === kk.button ? kk.altKey ? dI.o["Alt+Left Click"] : dI.o.Mouse1 : 1 === kk.button ? dI.o.Mouse2 : dI.o.Mouse3
```

#### 298. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3038` → after: `L3038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3038) · [Before (L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3038)

```diff
-             (0, ig.t)(SS) || gS(SS)
+             (0, CI.v)(kk) || Ik(kk)
```

#### 299. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3048` → after: `L3048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3048) · [Before (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3048)

```diff
-         xS = (SS, gS, tS, bS, XS) => (!(0, sg.c)() || !Mg.has(SS)) && (HS(SS, gS, tS, bS, XS), !0),
+         yk = (kk, Ik, Xk, Tk, ik) => (!(0, BI.d)() || !YI.has(kk)) && (Fk(kk, Ik, Xk, Tk, ik), !0),
```

#### 300. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3050` → after: `L3050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3050) · [Before (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3050)

```diff
-         qS = (0, Ug.g)(),
+         ak = (0, WI.f)(),
```

#### 301. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3052` → after: `L3052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3052) · [Before (L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3052)

```diff
-           SS.ctrlKey && gS.ctrlCombosAreGames() && !(0, ug.e)(SS.target) && SS.preventDefault()
+           kk.ctrlKey && Ik.ctrlCombosAreGames() && !(0, LI.f)(kk.target) && kk.preventDefault()
```

#### 302. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3055` → after: `L3055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3055) · [Before (L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3055)

```diff
-           gS.inspect(SS, tS, !1), HS(pH.Gb.KeyUp, tS, 0, 0, (0, yg.r)(bS, SS.timeStamp)), gS.keyReleased(tS)
+           Ik.inspect(kk, Xk, !1), Fk(fF.rb.KeyUp, Xk, 0, 0, (0, RI.l)(Tk, kk.timeStamp)), Ik.keyReleased(Xk)
```

#### 303. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3065` → after: `L3065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3065) · [Before (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3065)

```diff
-             for (const [HS, gS] of aS) aS.delete(HS), kS(SS, HS, gS) || (fS.delete(HS), IS(SS, Bg.i[HS], Fg(SS)))
+             for (const [Fk, Ik] of jk) jk.delete(Fk), Zk(kk, Fk, Ik) || (tk.delete(Fk), Lk(kk, dI.o[Fk], AI(kk)))
```

#### 304. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3078` → after: `L3078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3078) · [Before (L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3078)

```diff
-           xS(pH.Gb.MouseMove, pH.$b.Point, HS, gS, tS)
+           yk(fF.rb.MouseMove, fF.Mb.Point, Fk, Ik, Xk)
```

#### 305. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3083` → after: `L3083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3083) · [Before (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3083)

```diff
-         wS && (wS = !1, gS.viewShown() && (0, dH.M)())
+         sk && (sk = !1, Ik.viewShown() && (0, EF.U)())
```

#### 306. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3088` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3088) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3088)

```diff
-         "Escape" === SS.key ? (0, dH.D)(!0) : SS.repeat || (0, ug.e)(SS.target) || (wS = !0, clearTimeout(hS), hS = window.setTimeout(ZS, 0))
+         "Escape" === kk.key ? (0, EF.H)(!0) : kk.repeat || (0, LI.f)(kk.target) || (sk = !0, clearTimeout(Vk), Vk = window.setTimeout(zk, 0))
```

#### 307. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3091` → after: `L3091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3091) · [Before (L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3091)

```diff
-         const HS = Bg.i[SS.code];
+         const Fk = dI.o[kk.code];
```

#### 308. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3093-L3094` → after: `L3093-L3094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3093-L3094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3093-L3094) · [Before (L3093-L3094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3093-L3094)

```diff
-         const tS = (0, ug.e)(SS.target);
-         tS || !gS.prevents(HS) && !og.has(SS.code) || SS.preventDefault(), SS.repeat || gS.inspect(SS, HS, !0), xS(pH.Gb.KeyDown, HS, 0, 0, (0, yg.r)(Fg(SS), SS.timeStamp)) && fS.set(SS.code, HS), tS || gS.keyPressed(HS)
+         const Xk = (0, LI.f)(kk.target);
+         Xk || !Ik.prevents(Fk) && !hI.has(kk.code) || kk.preventDefault(), kk.repeat || Ik.inspect(kk, Fk, !0), yk(fF.rb.KeyDown, Fk, 0, 0, (0, RI.l)(AI(kk), kk.timeStamp)) && tk.set(kk.code, Fk), Xk || Ik.keyPressed(Fk)
```

#### 309. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3099-L3100` → after: `L3099-L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3099-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3099-L3100) · [Before (L3099-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3099-L3100)

```diff
-         "Escape" === SS.key && (0, dH.D)(!1), uS(SS), fS.delete(SS.code), aS.delete(SS.code), jS(SS);
-         const HS = Bg.i[SS.code];
+         "Escape" === kk.key && (0, EF.H)(!1), qk(kk), tk.delete(kk.code), jk.delete(kk.code), wk(kk);
+         const Fk = dI.o[kk.code];
```

#### 310. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3106` → after: `L3106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3106) · [Before (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3106)

```diff
-         "mouse" === PS && QS() ? DS(SS, SS.movementX, SS.movementY) : NS() ? xS(pH.Gb.MouseMove, pH.$b.Stamped, SS.movementX, SS.movementY, (0, yg.r)(0, SS.timeStamp)) : xS(pH.Gb.MouseMove, 0, SS.movementX, SS.movementY, 0)
+         "mouse" === Pk && Kk() ? Qk(kk, kk.movementX, kk.movementY) : lk() ? yk(fF.rb.MouseMove, fF.Mb.Stamped, kk.movementX, kk.movementY, (0, RI.l)(0, kk.timeStamp)) : yk(fF.rb.MouseMove, 0, kk.movementX, kk.movementY, 0)
```

#### 311. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3114` → after: `L3114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3114) · [Before (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3114)

```diff
-         if ((0, sg.c)()) return;
+         if ((0, BI.d)()) return;
```

#### 312. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3117` → after: `L3117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3117) · [Before (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3117)

```diff
-         if (!NS() && (0, dH.K)() && (0, dH.g)() && (vS = !0, !cS)) return void(JS |= tS);
+         if (!lk() && (0, EF.Q)() && (0, EF.e)() && (nk = !0, !Ok)) return void(Sk |= Xk);
```

#### 313. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3120` → after: `L3120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3120) · [Before (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3120)

```diff
-         void 0 !== bS && (dS[SS.button] = bS, gS.inspect(SS, bS, !0)), QS() && DS(SS, 0, 0), HS(pH.Gb.MouseDown, SS.button, SS.clientX, SS.clientY, (0, yg.r)(Fg(SS), SS.timeStamp)), OS |= tS, void 0 !== bS && gS.keyPressed(bS)
+         void 0 !== Tk && (Ek[kk.button] = Tk, Ik.inspect(kk, Tk, !0)), Kk() && Qk(kk, 0, 0), Fk(fF.rb.MouseDown, kk.button, kk.clientX, kk.clientY, (0, RI.l)(AI(kk), kk.timeStamp)), vk |= Xk, void 0 !== Tk && Ik.keyPressed(Tk)
```

#### 314. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3127-L3128` → after: `L3127-L3128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3127-L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3127-L3128) · [Before (L3127-L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3127-L3128)

```diff
-         const xS = SS.button <= 2 ? null !== (tS = dS[SS.button]) && void 0 !== tS ? tS : Tg(SS) : void 0;
-         void 0 !== xS && gS.inspect(SS, xS, !1), HS(pH.Gb.MouseUp, SS.button, SS.clientX, SS.clientY, (0, yg.r)(Fg(SS), SS.timeStamp)), void 0 !== xS && gS.keyReleased(xS)
+         const yk = kk.button <= 2 ? null !== (Xk = Ek[kk.button]) && void 0 !== Xk ? Xk : mI(kk) : void 0;
+         void 0 !== yk && Ik.inspect(kk, yk, !1), Fk(fF.rb.MouseUp, kk.button, kk.clientX, kk.clientY, (0, RI.l)(AI(kk), kk.timeStamp)), void 0 !== yk && Ik.keyReleased(yk)
```

#### 315. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3135` → after: `L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3135) · [Before (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3135)

```diff
-         (NS() || (0, dH.m)() && (0, Wg.v)()) && (SS.ctrlKey || qS && !document.fullscreenElement) && SS.preventDefault()
+         (lk() || (0, EF.n)() && (0, NI.n)()) && (kk.ctrlKey || ak && !document.fullscreenElement) && kk.preventDefault()
```

#### 316. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3138` → after: `L3138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3138) · [Before (L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3138)

```diff
-         ES(SS), jS(SS), xS(pH.Gb.Wheel, SS.deltaMode, SS.deltaX, SS.deltaY, 0)
+         Gk(kk), wk(kk), yk(fF.rb.Wheel, kk.deltaMode, kk.deltaX, kk.deltaY, 0)
```

#### 317. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3150` → after: `L3150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3150) · [Before (L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3150)

```diff
-       YS((0, dH.m)()), tS.push((0, dH.s)(YS)), tS.push((() => {
+       uk((0, EF.n)()), Xk.push((0, EF.x)(uk)), Xk.push((() => {
```

#### 318. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3164-L3165` → after: `L3164-L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3164-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3164-L3165) · [Before (L3164-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3164-L3165)

```diff
-           const tS = (0, yg.r)(Fg(gS), gS.timeStamp);
-           SS !== pH.Gb.TouchStart && SS !== pH.Gb.TouchMove || ((SS, gS) => {
+           const Xk = (0, RI.l)(AI(Ik), Ik.timeStamp);
+           kk !== fF.rb.TouchStart && kk !== fF.rb.TouchMove || ((kk, Ik) => {
```

#### 319. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3171` → after: `L3171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3171) · [Before (L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3171)

```diff
-                 SS || (WS.delete(bS), HS(pH.Gb.TouchCancel, bS, 0, 0, gS))
+                 kk || (Nk.delete(Tk), Fk(fF.rb.TouchCancel, Tk, 0, 0, Ik))
```

#### 320. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3177-L3178` → after: `L3177-L3178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3177-L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3177-L3178) · [Before (L3177-L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3177-L3178)

```diff
-             if (SS === pH.Gb.TouchStart && VS(gS) && yS.add(gS.identifier), yS.has(gS.identifier)) {
-               SS !== pH.Gb.TouchEnd && SS !== pH.Gb.TouchCancel || yS.delete(gS.identifier);
+             if (kk === fF.rb.TouchStart && Uk(Ik) && Rk.add(Ik.identifier), Rk.has(Ik.identifier)) {
+               kk !== fF.rb.TouchEnd && kk !== fF.rb.TouchCancel || Rk.delete(Ik.identifier);
```

#### 321. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3183` → after: `L3183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3183) · [Before (L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3183)

```diff
-             SS === pH.Gb.TouchStart ? NS && WS.add(XS) : SS !== pH.Gb.TouchMove && WS.delete(XS)
+             kk === fF.rb.TouchStart ? lk && Nk.add(ik) : kk !== fF.rb.TouchMove && Nk.delete(ik)
```

#### 322. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3186` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3186) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3186)

```diff
-         US = zS(pH.Gb.TouchStart);
+         Wk = ck(fF.rb.TouchStart);
```

#### 323. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3188` → after: `L3188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3188) · [Before (L3188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3188)

```diff
-         SS.preventDefault(), (0, sg.c)() || (gS.touchStarting(), US(SS))
+         kk.preventDefault(), (0, BI.d)() || (Ik.touchStarting(), Wk(kk))
```

#### 324. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3191` → after: `L3191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3191) · [Before (L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3191)

```diff
-       }), bS(SS, "touchmove", zS(pH.Gb.TouchMove), XS), bS(SS, "touchend", zS(pH.Gb.TouchEnd), XS), bS(SS, "touchcancel", zS(pH.Gb.TouchCancel), XS);
+       }), Tk(kk, "touchmove", ck(fF.rb.TouchMove), ik), Tk(kk, "touchend", ck(fF.rb.TouchEnd), ik), Tk(kk, "touchcancel", ck(fF.rb.TouchCancel), ik);
```

#### 325. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3194` → after: `L3194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3194) · [Before (L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3194)

```diff
-           xS(SS, pS(HS.pointerId), HS.clientX - GS, HS.clientY - CS, (0, yg.r)(Fg(HS), HS.timeStamp))
+           yk(kk, fk(Fk.pointerId), Fk.clientX - Hk, Fk.clientY - Jk, (0, RI.l)(AI(Fk), Fk.timeStamp))
```

#### 326. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3197)

```diff
-         PS = HS.pointerType, "mouse" === HS.pointerType && HS.target !== SS && gS.viewShown() && (0, dH.N)()
+         Pk = Fk.pointerType, "mouse" === Fk.pointerType && Fk.target !== kk && Ik.viewShown() && (0, EF.X)()
```

#### 327. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3199` → after: `L3199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3199) · [Before (L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3199)

```diff
-         "pen" === SS.pointerType && 0 === SS.button && (0, dH.m)() && (0, Wg.v)() && (SS.preventDefault(), (0, sg.c)() || (AS.set(SS.pointerId, {
+         "pen" === kk.pointerType && 0 === kk.button && (0, EF.n)() && (0, NI.n)() && (kk.preventDefault(), (0, BI.d)() || (bk.set(kk.pointerId, {
```

#### 328. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3203` → after: `L3203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3203) · [Before (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3203)

```diff
-         }), gS.touchStarting(), sS(pH.Gb.TouchStart, SS)))
+         }), Ik.touchStarting(), Bk(fF.rb.TouchStart, kk)))
```

#### 329. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3207` → after: `L3207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3207) · [Before (L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3207)

```diff
-         PS = SS.pointerType, AS.has(SS.pointerId) && sS(pH.Gb.TouchMove, SS), "mouse" !== SS.pointerType && QS() && DS(SS, 0, 0)
+         Pk = kk.pointerType, bk.has(kk.pointerId) && Bk(fF.rb.TouchMove, kk), "mouse" !== kk.pointerType && Kk() && Qk(kk, 0, 0)
```

#### 330. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3212` → after: `L3212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3212) · [Before (L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3212)

```diff
-       bS(window, "pointerup", BS(pH.Gb.TouchEnd), XS), bS(window, "pointercancel", BS(pH.Gb.TouchCancel), XS);
+       Tk(window, "pointerup", dk(fF.rb.TouchEnd), ik), Tk(window, "pointercancel", dk(fF.rb.TouchCancel), ik);
```

#### 331. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3219` → after: `L3219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3219) · [Before (L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3219)

```diff
-           null !== SS && HS(pH.Gb.Resize, 0, SS.cssWidth, SS.cssHeight, (0, yg.j)(SS.renderScale)), nS(), gS.resized(), 0 === MS && (MS = requestAnimationFrame(FS))
+           null !== kk && Fk(fF.rb.Resize, 0, kk.cssWidth, kk.cssHeight, (0, RI.h)(kk.renderScale)), xk(), Ik.resized(), 0 === Yk && (Yk = requestAnimationFrame(Ak))
```

#### 332. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3224` → after: `L3224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3224) · [Before (L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3224)

```diff
-         SS.isTrusted && (HS(pH.Gb.Focus, 0, 0, 0, 0), gS.viewShown() && (0, dH.N)())
+         kk.isTrusted && (Fk(fF.rb.Focus, 0, 0, 0, 0), Ik.viewShown() && (0, EF.X)())
```

#### 333. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3229` → after: `L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3229) · [Before (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3229)

```diff
-           (0, dH.D)(!1), JS = 0
+           (0, EF.H)(!1), Sk = 0
```

#### 334. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3237` → after: `L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3237) · [Before (L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3237)

```diff
-         TS(), (0, dH.j)();
+         mk(), (0, EF.l)();
```

#### 335. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3243` → after: `L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3243) · [Before (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3243)

```diff
-           for (const [gS, tS] of AS) HS(pH.Gb.TouchCancel, pS(gS), tS.x, tS.y, (0, yg.r)(0, SS));
+           for (const [Ik, Xk] of bk) Fk(fF.rb.TouchCancel, fk(Ik), Xk.x, Xk.y, (0, RI.l)(0, kk));
```

#### 336. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3245` → after: `L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3245) · [Before (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3245)

```diff
-         })(tS.timeStamp), HS(pH.Gb.Blur, pH.s.KeepTouches, 0, 0, 0)), qS && tS.isTrusted && (clearTimeout(mS), mS = window.setTimeout((() => {
+         })(Xk.timeStamp), Fk(fF.rb.Blur, fF.p.KeepTouches, 0, 0, 0)), ak && Xk.isTrusted && (clearTimeout(Dk), Dk = window.setTimeout((() => {
```

#### 337. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3251` → after: `L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3251) · [Before (L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3251)

```diff
-           document.activeElement instanceof HTMLIFrameElement && (0, Wg.v)() && gS.viewShown() && SS.focus({
+           document.activeElement instanceof HTMLIFrameElement && (0, NI.n)() && Ik.viewShown() && kk.focus({
```

#### 338. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3260` → after: `L3260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3260) · [Before (L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3260)

```diff
-         qS && HS.isTrusted && !document.hasFocus() && (0, Wg.v)() && gS.viewShown() && (window.focus(), SS.focus({
+         ak && Fk.isTrusted && !document.hasFocus() && (0, NI.n)() && Ik.viewShown() && (window.focus(), kk.focus({
```

#### 339. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3264` → after: `L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3264) · [Before (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3264)

```diff
-         document.hidden ? (HS(pH.Gb.Blur, 0, 0, 0, 0), oS()) : document.hasFocus() && HS(pH.Gb.Focus, 0, 0, 0, 0)
+         document.hidden ? (Fk(fF.rb.Blur, 0, 0, 0, 0), hk()) : document.hasFocus() && Fk(fF.rb.Focus, 0, 0, 0, 0)
```

#### 340. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3267-L3268` → after: `L3267-L3268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3267-L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3267-L3268) · [Before (L3267-L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3267-L3268)

```diff
-       }), tS.push((0, sg.g)((() => {
-         TS(), HS(pH.Gb.Blur, pH.s.Release, 0, 0, 0), gS.keysReleased(), KS(), OS = 0, oS(), HS(pH.Gb.Joystick, 0, 0, 0, 0), document.hasFocus() && HS(pH.Gb.Focus, 0, 0, 0, 0)
+       }), Xk.push((0, BI.i)((() => {
+         mk(), Fk(fF.rb.Blur, fF.p.Release, 0, 0, 0), Ik.keysReleased(), ek(), vk = 0, hk(), Fk(fF.rb.Joystick, 0, 0, 0, 0), document.hasFocus() && Fk(fF.rb.Focus, 0, 0, 0, 0)
```

#### 341. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3271` → after: `L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3271) · [Before (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3271)

```diff
-         rS = () => eS && !(0, dH.m)() ? pH.yc.Lockless : pH.yc.Released,
+         kF = () => Mk && !(0, EF.n)() ? fF.ic.Lockless : fF.ic.Released,
```

#### 342. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3273` → after: `L3273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3273) · [Before (L3273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3273)

```diff
-           NS() && (cS = !1, vS = !1), HS(pH.Gb.PointerLock, NS() ? pH.yc.Locked : rS(), 0, 0, 0), (0, dH.G)(NS())
+           lk() && (Ok = !1, nk = !1), Fk(fF.rb.PointerLock, lk() ? fF.ic.Locked : kF(), 0, 0, 0), (0, EF.M)(lk())
```

#### 343. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3278` → after: `L3278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3278) · [Before (L3278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3278)

```diff
-         cS ||= vS, vS = !1, (0, dH.q)()
+         Ok ||= nk, nk = !1, (0, EF.t)()
```

#### 344. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3281-L3283` → after: `L3281-L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3281-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3281-L3283) · [Before (L3281-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3281-L3283)

```diff
-       }), eS && tS.push((0, dH.s)((() => {
-         HS(pH.Gb.PointerLock, rS(), 0, 0, 0)
-       }))), RS(), HS(document.hasFocus() ? pH.Gb.Focus : pH.Gb.Blur, 0, 0, 0, 0), SH(), () => {
+       }), Mk && Xk.push((0, EF.x)((() => {
+         Fk(fF.rb.PointerLock, kF(), 0, 0, 0)
+       }))), gk(), Fk(document.hasFocus() ? fF.rb.Focus : fF.rb.Blur, 0, 0, 0, 0), FF(), () => {
```

#### 345. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3287-L3290` → after: `L3287-L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3287-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3287-L3290) · [Before (L3287-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3287-L3290)

```diff
-     var Ht = gS(34180),
-       gt = gS(34166),
-       tt = gS(2113);
-     const bt = new Map(Bg.b.map(((SS, HS) => [SS, HS]))),
+     var IX = Ik(34111),
+       XX = Ik(34095),
+       TX = Ik(1920);
+     const iX = new Map(dI.e.map(((kk, Fk) => [kk, Fk]))),
```

#### 346. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3295)

```diff
-       return `${tt.b}${SS}`
+       return `${TX.b}${kk}`
```

#### 347. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3302` → after: `L3302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3302) · [Before (L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3302)

```diff
-         const SS = "string" === typeof gS ? Bg.i[gS] : void 0;
+         const kk = "string" === typeof Ik ? dI.o[Ik] : void 0;
```

#### 348. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3310` → after: `L3310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3310) · [Before (L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3310)

```diff
-         for (const [SS, HS] of Object.entries(Bg.f)) this.keys.set(SS, HS);
+         for (const [kk, Fk] of Object.entries(dI.g)) this.keys.set(kk, Fk);
```

#### 349. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3325` → after: `L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3325) · [Before (L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3325)

```diff
-             XS = Array.isArray(bS) ? ut(bS) : Bg.f[gS];
+             ik = Array.isArray(Tk) ? LX(Tk) : dI.g[Ik];
```

#### 350. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3332-L3333` → after: `L3332-L3333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3332-L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3332-L3333) · [Before (L3332-L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3332-L3333)

```diff
-           gS(pH.Gb.Binding, 0, 0, 0, tS | pH.p.Clear << 8);
-           for (const XS of [...HS, ...null !== (bS = Bg.g[SS]) && void 0 !== bS ? bS : []]) {
+           Ik(fF.rb.Binding, 0, 0, 0, Xk | fF.o.Clear << 8);
+           for (const ik of [...Fk, ...null !== (Tk = dI.k[kk]) && void 0 !== Tk ? Tk : []]) {
```

#### 351. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3335` → after: `L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3335) · [Before (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3335)

```diff
-             gS(pH.Gb.Binding, XS, 0, 0, tS | pH.p.Add << 8)
+             Ik(fF.rb.Binding, ik, 0, 0, Xk | fF.o.Add << 8)
```

#### 352. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3342-L3343` → after: `L3342-L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3342-L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3342-L3343) · [Before (L3342-L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3342-L3343)

```diff
-         for (const tS of Bg.j)
-           for (const HS of null !== (SS = this.keys.get(Bg.b[tS])) && void 0 !== SS ? SS : []) {
+         for (const Xk of dI.s)
+           for (const Fk of null !== (kk = this.keys.get(dI.e[Xk])) && void 0 !== kk ? kk : []) {
```

#### 353. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3349` → after: `L3349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3349) · [Before (L3349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3349)

```diff
-           for (const SS of null !== (HS = this.keys.get(tS)) && void 0 !== HS ? HS : []) {
+           for (const kk of null !== (Fk = this.keys.get(Xk)) && void 0 !== Fk ? Fk : []) {
```

#### 354. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3359` → after: `L3359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3359) · [Before (L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3359)

```diff
-             for (const HS of null !== (gS = this.keys.get(SS)) && void 0 !== gS ? gS : []) {
+             for (const Fk of null !== (Ik = this.keys.get(kk)) && void 0 !== Ik ? Ik : []) {
```

#### 355. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3366-L3367` → after: `L3366-L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3366-L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3366-L3367) · [Before (L3366-L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3366-L3367)

```diff
-     var ft = gS(4938),
-       kt = gS(36608);
+     var ZX = Ik(4801),
+       jX = Ik(36588);
```

#### 356. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3371` → after: `L3371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3371) · [Before (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3371)

```diff
-       return "inGame" === FS.b.get("gameState") && !(0, Vg.m)()
+       return "inGame" === Ak.d.get("gameState") && !(0, UI.s)()
```

#### 357. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3379` → after: `L3379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3379) · [Before (L3379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3379)

```diff
-         return gS ? `${SS} ${gS}` : String(SS)
+         return Ik ? `${kk} ${Ik}` : String(kk)
```

#### 358. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3385` → after: `L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3385) · [Before (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3385)

```diff
-       SS === pH.eb.InputAction && tS === pH.Cb && nt.push(HS.getUint32(gS, !0))
+       kk === fF.X.InputAction && Xk === fF.mb && xX.push(Fk.getUint32(Ik, !0))
```

#### 359. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3387-L3389` → after: `L3387-L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3387-L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3387-L3389) · [Before (L3387-L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3387-L3389)

```diff
-     var Qt = gS(40938),
-       Dt = gS(1283),
-       wt = gS(36877);
+     var KX = Ik(40930),
+       QX = Ik(1187),
+       sX = Ik(36879);
```

#### 360. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3405` → after: `L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3405) · [Before (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3405)

```diff
-       return (null !== (HS = null === (gS = ht[bS]) || void 0 === gS ? void 0 : gS[XS]) && void 0 !== HS ? HS : SS).replace(/\{\{(\w+)\}\}/g, ((SS, HS) => {
+       return (null !== (Fk = null === (Ik = VX[Tk]) || void 0 === Ik ? void 0 : Ik[ik]) && void 0 !== Fk ? Fk : kk).replace(/\{\{(\w+)\}\}/g, ((kk, Fk) => {
```

#### 361. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3407` → after: `L3407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3407) · [Before (L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3407)

```diff
-         return null !== (gS = tS[HS]) && void 0 !== gS ? gS : SS
+         return null !== (Ik = Xk[Fk]) && void 0 !== Ik ? Ik : kk
```

#### 362. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3412` → after: `L3412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3412) · [Before (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3412)

```diff
-       (0, Ag.c)();
+       (0, bI.d)();
```

#### 363. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3422` → after: `L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3422) · [Before (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3422)

```diff
-         SS.href = wt.b, SS.target = "_blank", SS.rel = "noreferrer", SS.style.color = "#8ab4ff", SS.textContent = Zt("wasmScreens:reportOnDiscord"), tS.append(SS)
+         kk.href = sX.d, kk.target = "_blank", kk.rel = "noreferrer", kk.style.color = "#8ab4ff", kk.textContent = zX("wasmScreens:reportOnDiscord"), Xk.append(kk)
```

#### 364. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3444` → after: `L3444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3444) · [Before (L3444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3444)

```diff
-     var Ot = gS(40770);
+     var oX = Ik(40745);
```

#### 365. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3447-L3450` → after: `L3447-L3450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3447-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3447-L3450) · [Before (L3447-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3447-L3450)

```diff
-     var vt = gS(3772);
-     var Et = gS(40945),
-       Lt = gS(710),
-       Yt = gS(10);
+     var OX = Ik(3593);
+     var nX = Ik(40935),
+       GX = Ik(659),
+       pX = Ik(15);
```

#### 366. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3453` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3453) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3453)

```diff
-       const gS = Yt.ib.encode(HS);
+       const Ik = pX.hb.encode(Fk);
```

#### 367. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3455` → after: `L3455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3455) · [Before (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3455)

```diff
-         let gS = HS >= 0 ? 2 * HS : 2 * -HS - 1;
+         let Ik = Fk >= 0 ? 2 * Fk : 2 * -Fk - 1;
```

#### 368. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3463` → after: `L3463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3463) · [Before (L3463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3463)

```diff
-       const SS = ["length", 1, 0, void 0, 47, 3, "d", 13, "a", 1023, 2, 211, "c", 65536, 242, 111, 10, 55296, 56320, 6, 12, 63, 128, "b", 192, 129, "Invalid byte index", 228, 80, 255, 224, 4, 31, "Invalid continuation byte", 240, 15, 51, 7, 18, 45, !1, "u", "e", "resolv", "then", … [truncated]
+       const kk = ["length", 1, 0, void 0, "b", 235, 4, 75, 135, 1023, "a", 72, 3, 65536, 10, 55296, 56320, 6, 12, 63, 128, 2, 105, 53, 65, 20, 192, 115, "Invalid byte index", "d", 255, 224, "e", 234, 31, "Invalid continuation byte", 240, 15, "g", 7, 18, !1, "r", 80, "c", "h", "f" … [truncated]
```

#### 369. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3466-L3470` → after: `L3466-L3470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3466-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3466-L3470) · [Before (L3466-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3466-L3470)

```diff
-       const tS = (SS[2], Yt[SS[41]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=" + SS[46]),
-         bS = (SS[2], Yt[SS[41]])("QkFCWUxPTg=="),
-         XS = (SS[2], Yt[SS[41]])("QW5kZXNpdGU="),
-         xS = (SS[2], Yt[SS[41]])("U21vb3RoIEdyYW5pdGU="),
-         NS = (SS[2], Yt[SS[41]])("RGlvcml0ZQ=="),
+       const Xk = (kk[2], pX[kk[42]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
+         Tk = (kk[2], pX[kk[42]])("QkFCWUxPTg=="),
+         ik = (kk[2], pX[kk[42]])("QW5kZXNpdGU="),
+         yk = (kk[2], pX[kk[42]])("U21vb3RoIEdyYW5pdGU="),
+         lk = (kk[2], pX[kk[42]])("RGlvcml0ZQ=="),
```

#### 370. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3476-L3479` → after: `L3485-L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3485-L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3485-L3506) · [Before (L3476-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3476-L3479)

```diff
-             ["postJsonWithMetricsCookiesAndCustomRespons" + SS[42]]: uS
-           }] = await Promise.all([Promise[SS[43] + SS[42]]()[SS[44]]((() => gS(1286))), Promise[SS[43] + SS[42]]()[SS[44]](((...tS) => (tS[SS[0]] = SS[2], "TG88l3" in HS && function(...HS) {
-             HS[SS[0]] = SS[2]
-           }(), gS(1216))))]), IS = NS.getHttpUrlFromWebSocketUrl(tS.endpoint), fS = tS[SS[48] + SS[49]] === SS[72] ? SS[3] : await tS[SS[48] + SS[49]]();
+             ["postJsonWithMetricsCookiesAndCustomRespons" + kk[32]]: qk
+           }] = await Promise.all([Promise[kk[53] + kk[32]]()[kk[54]](((...Xk) => (Xk[kk[0]] = kk[2], "qyOgGK" + kk[64] in Fk && function(...Fk) {
+             function Ik() {}
+             Fk[kk[0]] = kk[2], Lk(Fk[kk[4]] = function(...Fk) {
+               for (Lk(Fk[kk[0]] = kk[21], Fk[kk[10]] = kk[2], Fk[kk[12]] = kk[2], Fk[kk[44]] = new Ik(kk[2]), Fk[kk[29]] = Fk[kk[44]], Fk[kk[17]] = Fk[kk[2]], Fk[kk[51]] = Fk[kk[1]]); Fk[kk[17]] !== kk[52] || Fk[kk[51]] !== kk[52];) Lk(Fk[kk[12]] = (Fk[kk[17]] ? Fk[kk[17]].val :  … [truncated]
+               return Fk[kk[10]] && (Fk[kk[29]].next = new Ik(Fk[kk[10]])), Fk[kk[44]].next
+             }, console.log(Fk[kk[4]]))
+           }(), Ik(1194)))), Promise[kk[53] + kk[32]]()[kk[54]](((...Xk) => (Xk[kk[0]] = kk[2], "wPbPhA4" in Fk && function(...Fk) {
+             Lk(Fk[kk[0]] = kk[2], Fk[-kk[31]] = function(...Fk) {
+               for (Lk(Fk[kk[0]] = kk[1], Fk[kk[56]] = Fk[kk[2]].length, Fk[-kk[43]] = [], Fk[kk[12]] = kk[2], Fk[kk[57]] = kk[2], Fk[kk[2]].sort(((kk, Fk) => kk - Fk))), Fk[kk[55]] = kk[2]; Fk[kk[55]] < Fk[kk[56]]; Fk[kk[55]]++)
+                 if (!(Fk[kk[55]] > kk[2] && Fk[kk[2]][Fk[kk[55]]] === Fk[kk[2]][Fk[kk[55]] - kk[1]]))
+                   for (Lk(Fk[kk[12]] = Fk[kk[55]] + kk[1], Fk[kk[57]] = Fk[kk[56]] - kk[1]); Fk[kk[12]] < Fk[kk[57]];)
+                     if (Fk[kk[2]][Fk[kk[55]]] + Fk[kk[2]][Fk[kk[12]]] + Fk[kk[2]][Fk[kk[57]]] < kk[2]) Fk[kk[12]]++;
+                     else if (Fk[kk[2]][Fk[kk[55]]] + Fk[kk[2]][Fk[kk[12]]] + Fk[kk[2]][Fk[kk[57]]] > kk[2]) Fk[kk[57]]--;
+               else {
+                 for (Fk[-kk[43]].push([Fk[kk[2]][Fk[kk[55]]], Fk[kk[2]][Fk[kk[12]]], Fk[kk[2]][Fk[kk[57]]]]); Fk[kk[12]] < Fk[kk[57]] && Fk[kk[2]][Fk[kk[12]]] === Fk[kk[2]][Fk[kk[12]] + kk[1]];) Fk[kk[12]]++;
+ ... (6 more added lines; see GitHub link above)
```

#### 371. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3500` → after: `L3517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3517) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3500)

```diff
-         }(gS.game, gS.lobby, (SS[2], Lt[SS[42]])(), tS);
+         }(Ik.game, Ik.lobby, (kk[2], GX[kk[44]])(), Xk);
```

#### 372. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3502-L3510` → after: `L3519-L3520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3519-L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3519-L3520) · [Before (L3502-L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3502-L3510)

```diff
-           function XS(...HS) {
-             IS(HS[SS[0]] = SS[2], HS[SS[8]] = function(...HS) {
-               for (IS(HS[SS[0]] = SS[1], HS[SS[1]] = HS[SS[2]].length, HS[-SS[50]] = [], HS[-SS[51]] = SS[2]), HS[SS[31]] = SS[2]; HS[SS[31]] < HS[SS[1]]; HS[SS[31]]++) HS[-SS[50]].push(HS[SS[31]] !== SS[2] && HS[SS[2]][HS[SS[31]]] > HS[SS[2]][HS[SS[31]] - SS[1]] ? HS[-SS[50]][HS … [truncated]
-               for (HS[SS[42]] = HS[SS[1]] - SS[1]; HS[SS[42]] >= SS[2]; HS[SS[42]]--) HS[SS[42]] !== HS[SS[1]] - SS[1] && HS[SS[2]][HS[SS[42]]] > HS[SS[2]][HS[SS[42]] + SS[1]] && (HS[-SS[50]][HS[SS[42]]] = Math.max(HS[-SS[50]][HS[SS[42]]], HS[-SS[50]][HS[SS[42]] + SS[1]] + SS[1]) … [truncated]
-               return HS[-SS[51]]
-             }, console.log(HS[SS[8]]))
-           }
-           "lfHKfEZ" in HS && XS(), await qS(gS, "/persisted/keep-alive", {
-             type: "CK",
+           await ak(Ik, "/persisted/keep-alive", {
+             type: "je",
```

#### 373. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3512` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3522) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3512)

```diff
-           }, SS[5])
+           }, kk[12])
```

#### 374. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3514` → after: `L3524-L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3524-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3524-L3531) · [Before (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3514)

```diff
-           console.warn(xS)
+           function lk(...Fk) {
+             Lk(Fk[kk[0]] = kk[2], Fk[-kk[61]] = function(...Ik) {
+               return Lk(Ik[kk[0]] = kk[12], Ik[kk[10]] = {}), Ik[kk[21]].length !== Ik[kk[2]].length + Ik[kk[1]].length ? kk[41] : Fk[-kk[60]](Ik[kk[2]], Ik[kk[1]], Ik[kk[21]], kk[2], kk[2], kk[2], Ik[kk[10]])
+             }, Fk[-kk[60]] = function(...Ik) {
+               return Lk(Ik[kk[0]] = kk[39], Ik[kk[10]] = kk[41]), Ik[kk[55]] >= Ik[kk[21]].length ? kk[68] : Ik[kk[17]]["" + Ik[kk[12]] + Ik[kk[6]] + Ik[kk[55]]] !== kk[3] ? Ik[kk[17]]["" + Ik[kk[12]] + Ik[kk[6]] + Ik[kk[55]]] : (Ik[kk[21]][Ik[kk[55]]] === Ik[kk[2]][Ik[kk[12]]] & … [truncated]
+             }, console.log(Fk[-kk[61]]))
+           }
+           "MujMBF5" in Fk && lk(), console.warn(ik)
```

#### 375. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3517` → after: `L3534-L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3534-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3534-L3542) · [Before (L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3517)

```diff
-       const uS = (...HS) => (HS[SS[0]] = SS[10], Object.getOwnPropertyDescriptor(HS[SS[2]], HS[SS[1]]));
+       const qk = (...Ik) => (Ik[kk[0]] = kk[21], "r1V5fV" in Fk && function(...Fk) {
+         Lk(Fk[kk[0]] = kk[2], Fk[-kk[14]] = function(...Fk) {
+           for (Lk(Fk[kk[0]] = kk[1], Fk[kk[10]] = kk[2], Fk[kk[63]] = {}, Fk[kk[44]] = kk[2], Fk[kk[29]] = kk[2], Fk[kk[32]] = kk[2], Fk[kk[46]] = Fk[kk[2]].length), Fk[kk[62]] = kk[2]; Fk[kk[62]] < Fk[kk[46]]; Fk[kk[62]]++) {
+             for (Lk(Fk[kk[63]] = {}, Fk[kk[44]] = kk[2], Fk[kk[29]] = kk[1]), Fk[kk[45]] = Fk[kk[62]] + kk[1]; Fk[kk[45]] < Fk[kk[46]]; Fk[kk[45]]++) Fk[kk[2]][Fk[kk[62]]].x !== Fk[kk[2]][Fk[kk[45]]].x || Fk[kk[2]][Fk[kk[62]]].y !== Fk[kk[2]][Fk[kk[45]]].y ? (Fk[kk[2]][Fk[kk[62]] … [truncated]
+             Lk(Fk[kk[44]] += Fk[kk[29]], Fk[kk[10]] = Math.max(Fk[kk[10]], Fk[kk[44]]))
+           }
+           return Fk[kk[10]]
+         }, console.log(Fk[-kk[14]]))
+       }(), Object.getOwnPropertyDescriptor(Ik[kk[2]], Ik[kk[1]]));
```

#### 376. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3522-L3543` → after: `L3547-L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3547-L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3547-L3548) · [Before (L3522-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3522-L3543)

```diff
-       Vt = (...gS) => (gS[SS[0]] = SS[2], "JTk9dX2" in HS && function(...HS) {
-         IS(HS[SS[0]] = SS[2], HS[SS[23]] = function(...HS) {
-           function gS(...HS) {
-             return HS[SS[0]] = SS[1], qS(xS(kS(HS[SS[2]])))
-           }
- 
-           function tS(...HS) {
-             return HS[SS[0]] = SS[10], qS(NS(kS(HS[SS[2]]), kS(HS[SS[1]])))
-           }
- 
-           function bS(...HS) {
-             return HS[SS[0]] = SS[10], uS(NS(kS(HS[SS[2]]), kS(HS[SS[1]])))
-           }
- 
-           function XS(...HS) {
-             return HS[SS[0]] = SS[5], fS(NS(kS(HS[SS[2]]), kS(HS[SS[1]])), HS[SS[10]])
- ... (6 more removed lines; see GitHub link above)
+       RX = () => ((kk[2], pX[kk[64]])(), qk(navigator, Xk) !== kk[3] ? ik : qk(window, Tk) === kk[3] ? yk : lk), UX = async Xk => {
+         try {
```

#### 377. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3545-L3551` → after: `L3550-L3554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3550-L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3550-L3554) · [Before (L3545-L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3545-L3551)

```diff
-             IS(HS[SS[0]] = SS[10], HS[SS[10]] = aS(HS[SS[2]])), HS[SS[10]].length > SS[52] && (HS[SS[10]] = hS(HS[SS[10]], HS[SS[2]].length * SS[53]));
-             var gS = Array(SS[52]),
-               tS = Array(SS[52]);
-             for (HS[SS[5]] = SS[2]; HS[SS[5]] < SS[52]; HS[SS[5]]++) IS(gS[HS[SS[5]]] = 909522486 ^ HS[SS[10]][HS[SS[5]]], tS[HS[SS[5]]] = 1549556828 ^ HS[SS[10]][HS[SS[5]]]);
-             return HS[SS[12]] = hS(gS.concat(aS(HS[SS[1]])), SS[55] + HS[SS[1]].length * SS[53]), KS(hS(tS.concat(HS[SS[12]]), function(HS, gS, tS) {
-               if (HS === SS[54]) return gS + tS
-             }(SS[54], SS[55], 256)))
+             function Ik() {}
+             Fk[kk[0]] = kk[2], Lk(Fk[kk[44]] = function(...Fk) {
+               for (Lk(Fk[kk[0]] = kk[21], Fk[-kk[67]] = kk[2], Fk[-kk[66]] = kk[2], Fk[kk[6]] = new Ik(kk[2]), Fk[kk[55]] = Fk[kk[6]], Fk[kk[32]] = Fk[kk[2]], Fk[-kk[65]] = Fk[kk[1]]); Fk[kk[32]] !== kk[52] || Fk[-kk[65]] !== kk[52];) Lk(Fk[-kk[66]] = (Fk[kk[32]] ? Fk[kk[32]].val … [truncated]
+               return Fk[-kk[67]] && (Fk[kk[55]].next = new Ik(Fk[-kk[67]])), Fk[kk[6]].next
+             }, console.log(Fk[kk[44]]))
```

#### 378. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3553-L3559` → after: `L3556-L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3556-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3556-L3566) · [Before (L3553-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3553-L3559)

```diff
- 
-           function qS(gS) {
-             var tS, bS, XS, xS;
-             try {
-               HS[SS[56]]
-             } catch (NS) {
-               HS[SS[56]] = SS[2]
+           "Z299FnM" in Fk && Tk();
+           const ik = RX(),
+             {
+               retryTransientHttpFailures: lk
+             } = await Promise[kk[53] + kk[32]]()[kk[54]]((() => Ik(1725)));
+           await lk(kk[69] + kk[70] + "post", ((...Ik) => (Ik[kk[0]] = kk[2], "bo7HWS" in Fk && function(...Fk) {
+             function Ik(...Fk) {
+               Fk[kk[0]] = kk[1];
+               const Ik = {};
+               for (let Xk of Fk[kk[2]].replace(/[^w]/g, "").toLowerCase()) Ik[Xk] = Ik[Xk] + kk[1] || kk[1];
+               return Ik
```

#### 379. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3565-L3574` → after: `L3569-L3575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3569-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3569-L3575) · [Before (L3565-L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3565-L3574)

```diff
-           function uS(gS) {
-             var tS, bS, XS, xS;
-             try {
-               HS[SS[12]]
-             } catch (NS) {
-               HS[SS[12]] = ""
-             }
-             for (IS(tS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bS = "", XS = gS.length), xS = SS[2]; xS < XS; xS += SS[5]) {
-               var qS, uS = gS.charCodeAt(xS) << SS[52] | (xS + SS[1] < XS ? gS.charCodeAt(xS + SS[1]) << SS[53] : SS[2]) | (xS + SS[10] < XS ? gS.charCodeAt(xS + SS[10]) : SS[2]);
-               for (qS = SS[2]; qS < SS[31]; qS++) xS * SS[53] + qS * SS[19] > gS.length * SS[53] ? bS += HS[SS[12]] : bS += tS.charAt(uS >>> SS[19] * (SS[5] - qS) & SS[21])
+             function Xk(...Fk) {
+               Fk[kk[0]] = kk[21];
+               const Ik = buildCharMap(Fk[kk[2]]),
+                 Xk = buildCharMap(Fk[kk[1]]);
+               for (let Tk in Ik)
+                 if (Ik[Tk] !== Xk[Tk]) return kk[41];
+               return Object.keys(Ik).length !== Object.keys(Xk).length ? kk[41] : kk[68]
```

#### 380. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3579-L3584` → after: `L3578-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3578-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3578-L3580) · [Before (L3579-L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3579-L3584)

```diff
-           function fS(...HS) {
-             var gS, tS, bS, XS;
-             for (IS(HS[SS[0]] = SS[10], HS[-SS[58]] = HS[SS[1]].length, HS[SS[5]] = Array()), HS[SS[31]] = Array(Math.ceil(HS[SS[2]].length / SS[10])), gS = SS[2]; gS < HS[SS[31]].length; gS++) HS[SS[31]][gS] = HS[SS[2]].charCodeAt(gS * SS[10]) << SS[53] | HS[SS[2]].charCodeAt(gS … [truncated]
-             for (; HS[SS[31]].length > SS[2];) {
-               for (IS(XS = Array(), bS = SS[2]), gS = SS[2]; gS < HS[SS[31]].length; gS++) IS(bS = (bS << SS[52]) + HS[SS[31]][gS], tS = Math.floor(bS / HS[-SS[58]]), bS -= tS * HS[-SS[58]]), (XS.length > SS[2] || tS > SS[2]) && (XS[XS.length] = tS);
-               IS(HS[SS[5]][HS[SS[5]].length] = bS, HS[SS[31]] = XS)
+             function Tk(...Fk) {
+               Fk[kk[0]] = kk[1];
+               return ik(Fk[kk[2]]) !== 1 / 0
```

#### 381. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3632-L3644` → after: `L3583-L3589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3583-L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3583-L3589) · [Before (L3632-L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3632-L3644)

```diff
-           function DS(HS) {
-             return jS(HS, SS[37]) ^ jS(HS, SS[38]) ^ GS(HS, SS[5])
-           }
- 
-           function wS(...HS) {
-             return HS[SS[0]] = SS[1], jS(HS[SS[2]], 17) ^ jS(HS[SS[2]], SS[66]) ^ GS(HS[SS[2]], SS[16])
-           }
- 
-           function hS(...gS) {
-             var tS, bS, XS, xS, NS, qS, uS, fS, kS, aS, KS, jS;
-             for (IS(gS[SS[0]] = SS[10], gS[SS[68]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), gS[SS[45]] = new Array(SS[67])), IS(gS[SS[2]][gS[SS[1]] >> SS[65]] |= SS[22] << SS[63] - gS[SS[1]] % SS[47], gS[SS[2]] … [truncated]
-               for (IS(tS = gS[SS[68]][SS[2]], bS = gS[SS[68]][SS[1]], XS = gS[SS[68]][SS[10]], xS = gS[SS[68]][SS[5]], NS = gS[SS[68]][SS[31]], qS = gS[SS[68]][SS[65]], uS = gS[SS[68]][SS[19]], fS = gS[SS[68]][SS[37]]), aS = SS[2]; aS < SS[67]; aS++) IS(aS < SS[52] ? gS[SS[45]][a … [truncated]
-               IS(gS[SS[68]][SS[2]] = ZS(tS, gS[SS[68]][SS[2]]), gS[SS[68]][SS[1]] = ZS(bS, gS[SS[68]][SS[1]]), gS[SS[68]][SS[10]] = ZS(XS, gS[SS[68]][SS[10]]), gS[SS[68]][SS[5]] = ZS(xS, gS[SS[68]][SS[5]]), gS[SS[68]][SS[31]] = ZS(NS, gS[SS[68]][SS[31]]), gS[SS[68]][SS[65]] = ZS( … [truncated]
+             function ik(...Fk) {
+               if (Fk[kk[0]] = kk[1], !Fk[kk[2]]) return -kk[1];
+               const Ik = ik(Fk[kk[2]].left),
+                 Xk = ik(Fk[kk[2]].right),
+                 Tk = Math.abs(Ik - Xk);
+               if (Ik === 1 / 0 || Xk === 1 / 0 || Tk > kk[1]) return 1 / 0;
+               return Math.max(Ik, Xk) + kk[1]
```

#### 382. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3646-L3673` → after: `L3591-L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3591-L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3591-L3597) · [Before (L3646-L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3646-L3673)

```diff
-             return gS[SS[68]]
-           }
- 
-           function ZS(...HS) {
-             return IS(HS[SS[0]] = SS[10], HS[SS[69]] = (HS[SS[2]] & SS[62]) + (HS[SS[1]] & SS[62]), HS[SS[5]] = (HS[SS[2]] >> SS[52]) + (HS[SS[1]] >> SS[52]) + (HS[SS[69]] >> SS[52])), HS[SS[5]] << SS[52] | HS[SS[69]] & SS[62]
-           }
-           return IS(HS[SS[0]] = SS[2], HS[SS[56]] = SS[2], HS[SS[12]] = ""), HS[SS[10]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193 … [truncated]
-             hex: gS,
-             b64: bS,
-             any: XS,
-             hex_hmac: tS,
-             b64_hmac: bS,
-             any_hmac: XS
-           }
-         }(), console.log(HS[SS[23]]))
-       }(), (SS[2], Yt.K)(), uS(navigator, tS) !== SS[3] ? XS : uS(window, bS) === SS[3] ? xS : NS), it = async tS => {
- ... (12 more removed lines; see GitHub link above)
+             Fk[kk[0]] = kk[2], window.__GLOBAL__HELPERS__ = {
+               buildCharacterMap: Ik,
+               isAnagrams: Xk,
+               isBalanced: Tk,
+               getHeightBalanced: ik
+             }
+           }(), ak(Xk, "/images/" + ik + ".png", {
```

#### 383. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3675` → after: `L3599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3599) · [Before (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3675)

```diff
-           }, SS[2])), 8e3)
+           }, kk[2]))), 8e3)
```

#### 384. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3677` → after: `L3601-L3604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3601-L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3601-L3604) · [Before (L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3677)

```diff
-           console.error("Block image post failed:", bS)
+           function tk(...Fk) {
+             Fk[kk[0]] = kk[2]
+           }
+           "GgaqrG" + kk[4] in Fk && tk(), console.error(kk[69] + kk[70] + "post failed:", yk)
```

#### 385. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3681-L3682` → after: `L3608-L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3608-L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3608-L3609) · [Before (L3681-L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3681-L3682)

```diff
-     var Wt = gS(40869),
-       zt = gS(1934);
+     var CX = Ik(40843),
+       NX = Ik(1759);
```

#### 386. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3688-L3690` → after: `L3615-L3617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3615-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3615-L3617) · [Before (L3688-L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3688-L3690)

```diff
-         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
-         const xS = null !== (bS = XS.fetch) && void 0 !== bS ? bS : fetch;
-         this.seat = (0, Gg.j)(SS.endpoint, SS.roomName, SS.joinOptions, {
+         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
+         const yk = null !== (Tk = ik.fetch) && void 0 !== Tk ? Tk : fetch;
+         this.seat = (0, JI.f)(kk.endpoint, kk.roomName, kk.joinOptions, {
```

#### 387. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3714` → after: `L3641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3641) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3714)

```diff
-             this.abort((0, DH.c)(SS))
+             this.abort((0, sF.e)(kk))
```

#### 388. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3736` → after: `L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3663) · [Before (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3736)

```diff
-           if (!(gS instanceof AS.k) || gS.code !== tS.c.duplicateLobbyNameError.code || 0 === bS) throw gS;
+           if (!(Ik instanceof bk.j) || Ik.code !== Xk.d.duplicateLobbyNameError.code || 0 === Tk) throw Ik;
```

#### 389. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3757` → after: `L3684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3684) · [Before (L3757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3757)

```diff
-         const HS = null !== (SS = this.answeredAt) && void 0 !== SS ? SS : {
+         const Fk = null !== (kk = this.answeredAt) && void 0 !== kk ? kk : {
```

#### 390. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3768` → after: `L3695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3695) · [Before (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3768)

```diff
-         (0, DH.f)(this.follow.controller, SS)
+         (0, sF.h)(this.follow.controller, kk)
```

#### 391. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3771` → after: `L3698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3698) · [Before (L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3771)

```diff
-     var st = gS(40947);
+     var fX = Ik(40937);
```

#### 392. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3799` → after: `L3726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3726) · [Before (L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3799)

```diff
-         if (SS === pH.Yd.Retire) return void(tS && !tS.gone && (this.endWorker(HS), tS.started = !1, this.giveUp(HS, "had its tables trap twice", "every meshing worker's tables trapped twice")));
+         if (kk === fF.Sd.Retire) return void(Xk && !Xk.gone && (this.endWorker(Fk), Xk.started = !1, this.giveUp(Fk, "had its tables trap twice", "every meshing worker's tables trapped twice")));
```

#### 393. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3804` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3731) · [Before (L3804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3804)

```diff
-         SS === pH.Yd.Mesh && tS.heapRetries > 0 && (tS.heapRetries--, xS = this.pooled(XS, !0)), xS ??= this.buffer(XS), new Uint8Array(xS, 0, XS).set(gS), bS.postMessage({
+         kk === fF.Sd.Mesh && Xk.heapRetries > 0 && (Xk.heapRetries--, yk = this.pooled(ik, !0)), yk ??= this.buffer(ik), new Uint8Array(yk, 0, ik).set(Ik), Tk.postMessage({
```

#### 394. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3854` → after: `L3781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3781) · [Before (L3854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3854)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${SS} did not start`, XS), void this.start(SS)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${kk} did not start`, ik), void this.start(kk)
```

#### 395. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3873` → after: `L3800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3800) · [Before (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3873)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${SS} could not be sent the module`, XS), bS.terminate(), HS.worker = null, void this.start(SS)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${kk} could not be sent the module`, ik), Tk.terminate(), Fk.worker = null, void this.start(kk)
```

#### 396. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3875-L3876` → after: `L3802-L3803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3802-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3802-L3803) · [Before (L3875-L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3875-L3876)

```diff
-         HS.watch = new st.h(st.b, (HS => {
-           this.lose(SS, (0, st.k)(HS), (() => {
+         Fk.watch = new fX.g(fX.c, (Fk => {
+           this.lose(kk, (0, fX.i)(Fk), (() => {
```

#### 397. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3885` → after: `L3812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3812) · [Before (L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3885)

```diff
-             Ft(gS), gS.started = !0, this.options.write(0, pH.Wd.WorkerStarted, 0, SS, 0, Bt);
+             YX(Ik), Ik.started = !0, this.options.write(0, fF.Pd.WorkerStarted, 0, kk, 0, BX);
```

#### 398. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3895` → after: `L3822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3822) · [Before (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3895)

```diff
-             const tS = HS.status === pH.Hb.Trapped;
+             const Xk = Fk.status === fF.ub.Trapped;
```

#### 399. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3898` → after: `L3825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3825) · [Before (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3898)

```diff
-               else if (gS.startsWithoutResult = 0, gS.trapsWithoutResult = 0, HS.status === pH.Hb.Refused) {
+               else if (Ik.startsWithoutResult = 0, Ik.trapsWithoutResult = 0, Fk.status === fF.ub.Refused) {
```

#### 400. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3905` → after: `L3832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3832) · [Before (L3905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3905)

```diff
-                 this.countFailedJob(FH.d.test(gS), "light_refused_input", gS), this.logRefusal(SS, gS)
+                 this.countFailedJob(AF.c.test(Ik), "light_refused_input", Ik), this.logRefusal(kk, Ik)
```

#### 401. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3907` → after: `L3834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3834) · [Before (L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3907)

```diff
-               HS.status === pH.Hb.HeapRefused && (gS.heapRetries = Math.min(gS.heapRetries + 1, 4), this.logHeapRefusal(SS))
+               Fk.status === fF.ub.HeapRefused && (Ik.heapRetries = Math.min(Ik.heapRetries + 1, 4), this.logHeapRefusal(kk))
```

#### 402. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3909` → after: `L3836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3836) · [Before (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3909)

```diff
-             if (this.options.write(HS.jobId, pH.Wd.JobResult, HS.status, SS, HS.workerUs, new Uint8Array(HS.bytes, 0, HS.len)), this.recycle(HS.bytes), HS.spare && this.recycle(HS.spare), !tS) break;
+             if (this.options.write(Fk.jobId, fF.Pd.JobResult, Fk.status, kk, Fk.workerUs, new Uint8Array(Fk.bytes, 0, Fk.len)), this.recycle(Fk.bytes), Fk.spare && this.recycle(Fk.spare), !Xk) break;
```

#### 403. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3911` → after: `L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3838) · [Before (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3911)

```diff
-               this.lose(SS, `the tables trapped its wasm: ${HS.trap}`);
+               this.lose(kk, `the tables trapped its wasm: ${Fk.trap}`);
```

#### 404. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3916` → after: `L3843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3843) · [Before (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3916)

```diff
-             gS.gone ||= bS, this.lose(SS, `a job trapped its wasm: ${HS.trap}`), bS && this.giveUp(SS, `trapped ${gS.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
+             Ik.gone ||= Tk, this.lose(kk, `a job trapped its wasm: ${Fk.trap}`), Tk && this.giveUp(kk, `trapped ${Ik.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
```

#### 405. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3931-L3932` → after: `L3858-L3859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3858-L3859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3858-L3859) · [Before (L3931-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3931-L3932)

```diff
-         const tS = (null !== (gS = this.refusals.get(HS)) && void 0 !== gS ? gS : 0) + 1;
-         this.refusals.set(HS, tS), (0, Qg.C)(tS) && console.warn(`[bloxd-wasm-client] meshing worker ${SS} refused a chunk (${tS} so far for this reason): ${HS}`)
+         const Xk = (null !== (Ik = this.refusals.get(Fk)) && void 0 !== Ik ? Ik : 0) + 1;
+         this.refusals.set(Fk, Xk), (0, QI.w)(Xk) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} refused a chunk (${Xk} so far for this reason): ${Fk}`)
```

#### 406. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3935` → after: `L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3862) · [Before (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3935)

```diff
-         this.heapRefusals++, (0, Qg.C)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${SS} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
+         this.heapRefusals++, (0, QI.w)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
```

#### 407. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3942` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3869) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3942)

```diff
-           }, console.warn(`[bloxd-wasm-client] meshing worker ${SS} ${HS}: giving up on it`), this.slots.every((SS => SS.gone))) {
+           }, console.warn(`[bloxd-wasm-client] meshing worker ${kk} ${Fk}: giving up on it`), this.slots.every((kk => kk.gone))) {
```

#### 408. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3950` → after: `L3877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3877) · [Before (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3950)

```diff
-               return `worker ${HS} ${null!==(gS=null===(tS=SS.goneFor)||void 0===tS?void 0:tS.why)&&void 0!==gS?gS:"went"}`
+               return `worker ${Fk} ${null!==(Ik=null===(Xk=kk.goneFor)||void 0===Xk?void 0:Xk.why)&&void 0!==Ik?Ik:"went"}`
```

#### 409. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3952` → after: `L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3879) · [Before (L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3952)

```diff
-           this.options.fail(1 === SS.size ? gS : `no meshing worker is left (${HS.join(", ")})`)
+           this.options.fail(1 === kk.size ? Ik : `no meshing worker is left (${Fk.join(", ")})`)
```

#### 410. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3956` → after: `L3883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3883) · [Before (L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3956)

```diff
-         console.warn(`[bloxd-wasm-client] meshing worker ${SS} was lost: ${HS}`), this.endWorker(SS), this.stopped || (gS ? gS() : this.options.onWorkerLost(HS), this.tellLost(SS), this.start(SS))
+         console.warn(`[bloxd-wasm-client] meshing worker ${kk} was lost: ${Fk}`), this.endWorker(kk), this.stopped || (Ik ? Ik() : this.options.onWorkerLost(Fk), this.tellLost(kk), this.start(kk))
```

#### 411. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3965` → after: `L3892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3892) · [Before (L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3965)

```diff
-         HS.started && (HS.started = !1, this.options.write(0, pH.Wd.WorkerLost, 0, SS, 0, Bt))
+         Fk.started && (Fk.started = !1, this.options.write(0, fF.Pd.WorkerLost, 0, kk, 0, BX))
```

#### 412. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3969` → after: `L3896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3896) · [Before (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3969)

```diff
-         return null !== (HS = this.pooled(SS)) && void 0 !== HS ? HS : new ArrayBuffer(Math.max(16384, SS))
+         return null !== (Fk = this.pooled(kk)) && void 0 !== Fk ? Fk : new ArrayBuffer(Math.max(16384, kk))
```

#### 413. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3991-L3992` → after: `L3918-L3920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3918-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3918-L3920) · [Before (L3991-L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3991-L3992)

```diff
-     var Rt = gS(36498),
-       Tt = gS(40784),
+     var AX = Ik(36479),
+       gX = Ik(40764),
+       mX = Ik(40946),
```

#### 414. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3994-L3996` → after: `L3922-L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3922-L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3922-L3923) · [Before (L3994-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L3994-L3996)

```diff
-       lt = gS(40963),
-       mt = (gS(40805), gS(40972)),
-       et = gS(40844);
+       rX = (Ik(40779), Ik(40957)),
+       DX = Ik(40819);
```

#### 415. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4004` → after: `L3931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3931) · [Before (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4004)

```diff
-       const HS = await (0, mt.l)(SS);
+       const Fk = await (0, rX.i)(kk);
```

#### 416. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4010` → after: `L3937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3937) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4010)

```diff
-         } = (0, et.k)(HS);
+         } = (0, DX.q)(Fk);
```

#### 417. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4023` → after: `L3950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3950) · [Before (L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4023)

```diff
-         this.session = SS, this.sources = HS, this.warn = gS, this.load = tS, this.nextPoll = 0, this.nK = !1, this.warned = new Set
+         this.session = kk, this.sources = Fk, this.warn = Ik, this.load = Xk, this.nextPoll = 0, this.ee = !1, this.warned = new Set
```

#### 418. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4034` → after: `L3961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3961) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4034)

```diff
-         this.nK = !0
+         this.ee = !0
```

#### 419. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4040` → after: `L3967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3967) · [Before (L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4040)

```diff
-           if (qS = await this.sources.blockImageUrl(SS), null === qS) throw new Error(`block image ${SS} has no URL`);
+           if (ak = await this.sources.blockImageUrl(kk), null === ak) throw new Error(`block image ${kk} has no URL`);
```

#### 420. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4044-L4045` → after: `L3971-L3972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3971-L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3971-L3972) · [Before (L4044-L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4044-L4045)

```diff
-           const HS = null !== (uS = qS) && void 0 !== uS ? uS : `block image ${SS}`;
-           this.warned.has(HS) || (this.warned.add(HS), this.warn(`sun shadow plane texture ${HS} didn't load: its blocks cast no shadow`, IS))
+           const Fk = null !== (qk = ak) && void 0 !== qk ? qk : `block image ${kk}`;
+           this.warned.has(Fk) || (this.warned.add(Fk), this.warn(`sun shadow plane texture ${Fk} didn't load: its blocks cast no shadow`, Lk))
```

#### 421. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4047-L4058` → after: `L3974-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3974-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3974-L3985) · [Before (L4047-L4058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4047-L4058)

```diff
-         this.nK || this.session.setSunShadowTexture(SS, HS, null !== (gS = null === (tS = NS) || void 0 === tS ? void 0 : tS.width) && void 0 !== gS ? gS : 0, null !== (bS = null === (XS = NS) || void 0 === XS ? void 0 : XS.height) && void 0 !== bS ? bS : 0, null === (xS = NS) || … [truncated]
-       }
-     }
-     var gb = gS(40977),
-       tb = gS(40818),
-       bb = gS(40979),
-       Xb = gS(40986),
-       xb = gS(40824),
-       Nb = gS(40832),
-       qb = gS(34271),
-       ub = gS(34117),
-       Ib = gS(40997);
+         this.ee || this.session.setSunShadowTexture(kk, Fk, null !== (Ik = null === (Xk = lk) || void 0 === Xk ? void 0 : Xk.width) && void 0 !== Ik ? Ik : 0, null !== (Tk = null === (ik = lk) || void 0 === ik ? void 0 : ik.height) && void 0 !== Tk ? Tk : 0, null === (yk = lk) || … [truncated]
+       }
+     }
+     var IT = Ik(40963),
+       XT = Ik(40796),
+       TT = Ik(40966),
+       iT = Ik(40971),
+       yT = Ik(40799),
+       lT = Ik(40808),
+       aT = Ik(34222),
+       qT = Ik(34048),
+       LT = Ik(40986);
```

#### 422. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4061-L4064` → after: `L3988-L3991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3988-L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3988-L3991) · [Before (L4061-L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4061-L4064)

```diff
-     const ab = new Set([...ub.b, "sceneDownload"]);
-     var Kb = gS(40748),
-       jb = gS(41005),
-       Gb = gS(41010);
+     const jT = new Set([...qT.c, "sceneDownload"]);
+     var eT = Ik(40721),
+       wT = Ik(40991),
+       HT = Ik(40994);
```

#### 423. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4070` → after: `L3997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L3997) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4070)

```diff
-         aux: pH.pc.AdStart | (SS ? pH.pc.PreventMovement : 0),
+         aux: fF.Zb.AdStart | (kk ? fF.Zb.PreventMovement : 0),
```

#### 424. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4074-L4075` → after: `L4001-L4002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4001-L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4001-L4002) · [Before (L4074-L4075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4074-L4075)

```diff
-     var Qb = gS(3058),
-       Db = gS(330);
+     var KT = Ik(2830),
+       QT = Ik(293);
```

#### 425. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4077-L4078` → after: `L4004-L4005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4004-L4005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4004-L4005) · [Before (L4077-L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4077-L4078)

```diff
-     var hb = gS(1925),
-       Zb = gS(3077);
+     var VT = Ik(1745),
+       zT = Ik(2841);
```

#### 426. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4087` → after: `L4014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4014) · [Before (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4087)

```diff
-     var Eb = gS(41017);
+     var nT = Ik(41003);
```

#### 427. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4107` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4034) · [Before (L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4107)

```diff
-           oneShot: SS.includes(Og.d)
+           oneShot: kk.includes(vI.f)
```

#### 428. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4117` → after: `L4044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4044) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4117)

```diff
-         })), this.channel = (null !== (HS = SS.openChannel) && void 0 !== HS ? HS : Og.r)(), null !== this.channel && (this.channel.onmessage = () => {
+         })), this.channel = (null !== (Fk = kk.openChannel) && void 0 !== Fk ? Fk : vI.u)(), null !== this.channel && (this.channel.onmessage = () => {
```

#### 429. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4129-L4130` → after: `L4056-L4057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4056-L4057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4056-L4057) · [Before (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4129-L4130)

```diff
-           })).catch((SS => (null !== HS && (0, Og.m)(HS), gS(SS), null)))
-         }((() => this.host.load(HS).then((SS => (SS.setGamePackConfirm(this.confirm), this.landed = SS, SS)))), HS ? this.host.store : null, this.host.tK), this.landRequest(this.requested), this.requested
+           })).catch((kk => (null !== Fk && (0, vI.o)(Fk), Ik(kk), null)))
+         }((() => this.host.load(Fk).then((kk => (kk.setGamePackConfirm(this.confirm), this.landed = kk, kk)))), Fk ? this.host.store : null, this.host.Mj), this.landRequest(this.requested), this.requested
```

#### 430. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4138` → after: `L4065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4065) · [Before (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4138)

```diff
-           return null !== (SS = this.requested) && void 0 !== SS ? SS : null
+           return null !== (kk = this.requested) && void 0 !== kk ? kk : null
```

#### 431. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4146-L4150` → after: `L4073-L4077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4073-L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4073-L4077) · [Before (L4146-L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4146-L4150)

```diff
-     var Yb = gS(36282);
-     const Ab = 216 * Yb.d,
-       yb = 92 * Yb.b,
-       Vb = 64 * Yb.d,
-       ib = 16 * Yb.d;
+     var pT = Ik(36245);
+     const uT = 216 * pT.h,
+       bT = 92 * pT.e,
+       RT = 64 * pT.h,
+       UT = 16 * pT.h;
```

#### 432. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4154` → after: `L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4081) · [Before (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4154)

```diff
-       return null !== (SS = null === (HS = performance.memory) || void 0 === HS ? void 0 : HS.YC) && void 0 !== SS ? SS : null
+       return null !== (kk = null === (Fk = performance.memory) || void 0 === Fk ? void 0 : Fk.HJ) && void 0 !== kk ? kk : null
```

#### 433. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4164` → after: `L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4091) · [Before (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4164)

```diff
-           bS = Math.max(null !== (HS = this.reads.jsHeapBytes()) && void 0 !== HS ? HS : 0, Vb),
+           Tk = Math.max(null !== (Fk = this.reads.jsHeapBytes()) && void 0 !== Fk ? Fk : 0, RT),
```

#### 434. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4190` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4117) · [Before (L4190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4190)

```diff
-         return null === SS ? null : `estimate ${(0,Yb.j)(SS.totalBytes)} MiB of budget ${null===HS?"none":(0,Yb.j)(HS)}: wasm ${(0,Yb.j)(SS.wasmBytes)} js ${(0,Yb.j)(SS.jsHeapBytes)} gpu ${(0,Yb.j)(SS.gpuBytes)} chunks ${SS.storedChunks}`
+         return null === kk ? null : `estimate ${(0,pT.m)(kk.totalBytes)} MiB of budget ${null===Fk?"none":(0,pT.m)(Fk)}: wasm ${(0,pT.m)(kk.wasmBytes)} js ${(0,pT.m)(kk.jsHeapBytes)} gpu ${(0,pT.m)(kk.gpuBytes)} chunks ${kk.storedChunks}`
```

#### 435. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4199-L4200` → after: `L4126-L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4126-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4126-L4127) · [Before (L4199-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4199-L4200)

```diff
-             footprintMiB: Number((0, Yb.j)(SS.totalBytes)),
-             gpuMiB: Number((0, Yb.j)(SS.gpuBytes)),
+             footprintMiB: Number((0, pT.m)(kk.totalBytes)),
+             gpuMiB: Number((0, pT.m)(kk.gpuBytes)),
```

#### 436. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4203` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4130) · [Before (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4203)

```diff
-           footprintBudgetMiB: null === HS ? -1 : Number((0, Yb.j)(HS))
+           footprintBudgetMiB: null === Fk ? -1 : Number((0, pT.m)(Fk))
```

#### 437. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4207-L4211` → after: `L4134-L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4134-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4134-L4138) · [Before (L4207-L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4207-L4211)

```diff
-     var Ub = gS(2953),
-       pb = gS(4652),
-       sb = gS(39119),
-       Bb = gS(37972);
-     const Mb = sH.bb + 1,
+     var cT = Ik(2744),
+       WT = Ik(4504),
+       fT = Ik(39102),
+       BT = Ik(37939);
+     const dT = BF.ib + 1,
```

#### 438. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4215` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4142) · [Before (L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L4215)

```diff
-         this.log = SS, this.take = HS, this.Ku = [], this.unshown = new Map, this.latest = new Map
+         this.log = kk, this.take = Fk, this.eq = [], this.unshown = new Map, this.latest = new Map
```
