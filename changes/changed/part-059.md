# Changed — Bundle Modifications Report (Part 059 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `59 / 67` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 058](part-058.md) · [Part 060 →](part-060.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (955 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 12. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L63` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L106) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L63)

```diff
-             case Wz:
+             case Sv:
```

#### 13. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L65-L68` → after: `L108-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L108-L111) · [Before (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L65-L68)

```diff
-             case oz:
-               return void Pz.nb++;
-             case Oz:
-               return Pz.lockSkips++, void(0 === uz && 0 === Nz || zz.outlier(`lock skip dropped raw (${Uz(uz)}, ${Uz(Nz)}) at ${Kz(Fz)} ms`))
+             case pv:
+               return void Gv.dC++;
+             case gv:
+               return Gv.lockSkips++, void(0 === Tv && 0 === Wv || vv.outlier(`lock skip dropped raw (${Nv(Tv)}, ${Nv(Wv)}) at ${lv(hv)} ms`))
```

#### 14. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L72-L73` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L115-L116) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L72-L73)

```diff
-             Yz = `raw (${Uz(uz)}, ${Uz(Nz)}) over ${Kz(vz)} ms, limit ${Uz(Bz)}, filter v (${gz.toFixed(3)}, ${Hz.toFixed(3)}) px/ms, at ${Kz(Fz)} ms`;
-           Dz === Xz ? (Pz.Iy++, zz.outlier(`spike put right: ${Yz} -> turned (${Uz(bz)}, ${Uz(wz)})`)) : rz ? (Pz.pastLimit++, zz.outlier(`kept past limit: ${Yz}`)) : vz > 50 && (Pz.longFrames++, zz.outlier(`long frame: ${Yz}, turned in full`))
+             jv = `raw (${Nv(Tv)}, ${Nv(Wv)}) over ${lv(dv)} ms, limit ${Nv(cv)}, filter v (${Cv.toFixed(3)}, ${iv.toFixed(3)}) px/ms, at ${lv(hv)} ms`;
+           sv === ev ? (Gv.Jq++, vv.outlier(`spike put right: ${jv} -> turned (${Nv(wv)}, ${Nv(av)})`)) : mv ? (Gv.pastLimit++, vv.outlier(`kept past limit: ${jv}`)) : dv > 50 && (Gv.longFrames++, vv.outlier(`long frame: ${jv}, turned in full`))
```

#### 15. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L85` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L128) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L85)

```diff
-           Oz[0] = zz.timeStamp, Oz[1] = sz, Oz[2] = Fz, Oz[3] = Xz ? 1 : 0, this.events.push(Oz), Wz >= 200 && (tz.bigEvents++, this.eventOutlier(`big mousemove (${sz}, ${Fz}) at ${Kz(zz.timeStamp)} ms, lock ${Xz?"po":"free"}`))
+           gv[0] = vv.timeStamp, gv[1] = Pv, gv[2] = hv, gv[3] = ev ? 1 : 0, this.events.push(gv), Sv >= 200 && (zv.bigEvents++, this.eventOutlier(`big mousemove (${Pv}, ${hv}) at ${lv(vv.timeStamp)} ms, lock ${ev?"Vp":"free"}`))
```

#### 16. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L88` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L131) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L88)

```diff
-           (0, Fz.g)("look", `pointer lock ${zz?`gained (${zz.tagName.toLowerCase()})`:"lost"} at ${Kz(performance.now())} ms`)
+           (0, hv.i)("look", `pointer lock ${vv?`gained (${vv.tagName.toLowerCase()})`:"lost"} at ${lv(performance.now())} ms`)
```

#### 17. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L90` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L133) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L90)

```diff
-           (0, Fz.g)("look", `pointer lock request failed at ${Kz(performance.now())} ms`)
+           (0, hv.i)("look", `pointer lock request failed at ${lv(performance.now())} ms`)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L92` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L135) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L92)

```diff
-           (0, Fz.g)("look", `page ${document.visibilityState} at ${Kz(performance.now())} ms`)
+           (0, hv.i)("look", `page ${document.visibilityState} at ${lv(performance.now())} ms`)
```

#### 19. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L96` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L139) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L96)

```diff
-           if (this.tally = new uz, 0 === zz.events && 0 === zz.raw[0] && 0 === zz.raw[1] && 0 === zz.lockSkips && 0 === zz.Iy && 0 === zz.dropped) return;
+           if (this.tally = new Tv, 0 === vv.events && 0 === vv.raw[0] && 0 === vv.raw[1] && 0 === vv.lockSkips && 0 === vv.Jq && 0 === vv.dropped) return;
```

#### 20. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L98-L99` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L141-L142) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L98-L99)

```diff
-             sz = [`${zz.frames} frames (${zz.looked} looked, ${zz.idle} idle${"wasm"===this.client?`, ${zz.nb} carried`:""})`, `dt avg ${Kz(tz)} min ${Kz(zz.dtMin)} max ${Kz(zz.dtMax)}, ${zz.longFrames} long`, `${zz.events} mousemoves (max ${Uz(zz.eventMax)} px, ${zz.bigEvents} b … [truncated]
-           zz.dropped > 0 && sz.push(`${zz.dropped} doubled spike copies dropped`), zz.lost > 0 && sz.push(`${zz.lost} records lost`), zz.suppressed > 0 && sz.push(`${zz.suppressed} outlier lines not shown`), (0, Fz.g)("look", `1s: ${sz.join("; ")}`)
+             Pv = [`${vv.frames} frames (${vv.looked} looked, ${vv.idle} idle${"wasm"===this.client?`, ${vv.dC} carried`:""})`, `dt avg ${lv(zv)} min ${lv(vv.dtMin)} max ${lv(vv.dtMax)}, ${vv.longFrames} long`, `${vv.events} mousemoves (max ${Nv(vv.eventMax)} px, ${vv.bigEvents} b … [truncated]
+           vv.dropped > 0 && Pv.push(`${vv.dropped} doubled spike copies dropped`), vv.lost > 0 && Pv.push(`${vv.lost} records lost`), vv.suppressed > 0 && Pv.push(`${vv.suppressed} outlier lines not shown`), (0, hv.i)("look", `1s: ${Pv.join("; ")}`)
```

#### 21. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L107` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L150) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L107)

```diff
-         (0, Fz.g)("look", `start: ${zz} client, dpr ${window.devicePixelRatio}, screen ${sz.width}x${sz.height}, pointer lock ${document.pointerLockElement?"po":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
+         (0, hv.i)("look", `start: ${vv} client, dpr ${window.devicePixelRatio}, screen ${Pv.width}x${Pv.height}, pointer lock ${document.pointerLockElement?"Vp":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L114` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L157) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L114)

```diff
-         tz.outliers >= 20 ? tz.suppressed++ : (tz.outliers++, (0, Fz.g)("look", zz))
+         zv.outliers >= 20 ? zv.suppressed++ : (zv.outliers++, (0, hv.i)("look", vv))
```

#### 23. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L118` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L161) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L118)

```diff
-         tz.eventLines >= 10 ? tz.suppressed++ : (tz.eventLines++, (0, Fz.g)("look", zz))
+         zv.eventLines >= 10 ? zv.suppressed++ : (zv.eventLines++, (0, hv.i)("look", vv))
```

#### 24. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L152` → after: `L195-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L195-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L195-L379) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L152)

```diff
-   8732: (zz, tz, sz) => {
+   37465: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Nv,
+       e: () => lv,
+       h: () => mv,
+       i: () => Gv,
+       l: () => cv
+     });
+     var hv = Pv(4448),
+       Sv = Pv(8867),
+       ev = Pv(2682);
+     const gv = 20,
+       pv = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "GT", "jobMs"];
+ 
+     function dv(vv) {
+       return [...vv].sort(((vv, zv) => vv - zv))
+ ... (169 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L158` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L385) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L158)

```diff
-   8897: (zz, tz, sz) => {
+   9049: (vv, zv, Pv) => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L160-L162` → after: `L387-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L387-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L387-L389) · [Before (L160-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L160-L162)

```diff
-       b: () => Oz,
-       d: () => Wz,
-       e: () => Kz
+       e: () => gv,
+       g: () => Sv,
+       k: () => lv
```

#### 27. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L164` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L391) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L164)

```diff
-     var Fz = sz(1521);
+     var hv = Pv(1548);
```

#### 28. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L170` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L397) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L170)

```diff
-         yaw: Oz.store.yaw + (null !== (tz = Fz.d[zz].previewYaw) && void 0 !== tz ? tz : 0)
+         yaw: gv.store.yaw + (null !== (zv = hv.b[vv].previewYaw) && void 0 !== zv ? zv : 0)
```

#### 29. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L291` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L518) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L291)

```diff
-   38637: (zz, tz, sz) => {
+   38747: (vv, zv, Pv) => {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L294` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L521) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L294)

```diff
-       e: () => Nz
+       c: () => Wv
```

#### 31. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L296-L303` → after: `L523-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L523-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L523-L530) · [Before (L296-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L296-L303)

```diff
-     var Fz = sz(161),
-       Wz = sz(188),
-       Xz = sz(1457),
-       Oz = sz(2689),
-       oz = sz(1466),
-       vz = sz(35970),
-       Uz = sz(624),
-       Kz = sz(38610);
+     var hv = Pv(144),
+       Sv = Pv(172),
+       ev = Pv(1473),
+       gv = Pv(2715),
+       pv = Pv(1482),
+       dv = Pv(36010),
+       Nv = Pv(650),
+       lv = Pv(38715);
```

#### 32. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L306` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L533) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L306)

```diff
-       (0, Oz.f)("matchmake_failed", zz, Fz.k[Fz.k.SHADER_PACK])
+       (0, gv.e)("matchmake_failed", vv, hv.o[hv.o.SHADER_PACK])
```

#### 33. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L311-L312` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L538-L539) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L311-L312)

```diff
-         Oz = (0, vz.b)();
-       Fz && null !== Oz && await oz.d.reportShaderPackSession(zz, {
+         gv = (0, dv.c)();
+       hv && null !== gv && await pv.e.reportShaderPackSession(vv, {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L315` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L542) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L315)

```diff
-         game: (0, Xz.g)(tz, Wz.s, "other"),
+         game: (0, ev.e)(zv, Sv.x, "other"),
```

#### 35. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L317` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L544) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L317)

```diff
-         visitSessionId: (0, Uz.e)()
+         visitSessionId: (0, Nv.d)()
```

#### 36. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L321` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L548) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L321)

```diff
-   38455: (zz, tz, sz) => {
+   38573: (vv, zv, Pv) => {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L323` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L550) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L323)

```diff
-       d: () => oz
+       c: () => pv
```

#### 38. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L325-L327` → after: `L552-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L552-L554) · [Before (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L325-L327)

```diff
-     var Fz = sz(34),
-       Wz = sz(1269),
-       Xz = sz(3145);
+     var hv = Pv(26),
+       Sv = Pv(1272),
+       ev = Pv(3218);
```

#### 39. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L335` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L562) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L335)

```diff
-         }, this.controller = new Xz.e((tz => zz.reconnect(tz)), {
+         }, this.controller = new ev.b((zv => vv.reconnect(zv)), {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L378` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L605) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L378)

```diff
-         sz && !this.frozen ? (0, Wz.n)(Oz) : !sz && this.frozen && (0, Wz.m)(Oz), this.frozen = sz, this.setListening("connected" !== zz), Fz.o.Yg(Xz.o, sz ? "frozen" : zz)
+         Pv && !this.frozen ? (0, Sv.r)(gv) : !Pv && this.frozen && (0, Sv.q)(gv), this.frozen = Pv, this.setListening("connected" !== vv), hv.j.zC(ev.p, Pv ? "frozen" : vv)
```

#### 41. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L385` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L612) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L385)

```diff
-   38462: (zz, tz, sz) => {
+   38579: (vv, zv, Pv) => {
```

#### 42. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L387` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L614) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L387)

```diff
-       d: () => Fz
+       e: () => hv
```

#### 43. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L408` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L635) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L408)

```diff
-   8771: (zz, tz, sz) => {
+   8924: (vv, zv, Pv) => {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L410` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L637) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L410)

```diff
-       e: () => Xz
+       b: () => ev
```

#### 45. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L412` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L639) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L412)

```diff
-     var Fz = sz(1060);
+     var hv = Pv(1056);
```

#### 46. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L416` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L643) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L416)

```diff
-       return null !== (zz = null === (tz = screen.orientation) || void 0 === tz ? void 0 : tz.type) && void 0 !== zz ? zz : innerWidth > innerHeight ? "landscape" : "portrait"
+       return null !== (vv = null === (zv = screen.orientation) || void 0 === zv ? void 0 : zv.type) && void 0 !== vv ? vv : innerWidth > innerHeight ? "landscape" : "portrait"
```

#### 47. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L429` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L656) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L429)

```diff
-           this.holding && (0, Fz.SD)(new Error("Game view size held for 60 s"))
+           this.holding && (0, hv.ws)(new Error("Game view size held for 60 s"))
```

#### 48. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L456` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L683) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L456)

```diff
-   38624: (zz, tz, sz) => {
+   38733: (vv, zv, Pv) => {
```

#### 49. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L458` → after: `L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L685) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L458)

```diff
-       b: () => Wz
+       c: () => Sv
```

#### 50. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L469` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L696) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L469)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => sz(1664))), Promise.resolve().then((() => sz(1319)))]);
+           }] = await Promise.all([Promise.resolve().then((() => Pv(1692))), Promise.resolve().then((() => Pv(1336)))]);
```

#### 51. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L485` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L712) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L485)

```diff
-   38473: (zz, tz, sz) => {
+   38596: (vv, zv, Pv) => {
```

#### 52. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L487-L488` → after: `L714-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L714-L715) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L487-L488)

```diff
-       b: () => Uz,
-       f: () => Kz
+       e: () => Nv,
+       h: () => lv
```

#### 53. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L490-L495` → after: `L717-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L717-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L717-L722) · [Before (L490-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L490-L495)

```diff
-     var Fz = sz(1656),
-       Wz = sz(201),
-       Xz = sz(1636),
-       Oz = sz(1708),
-       oz = sz(1191),
-       vz = sz(1120);
+     var hv = Pv(1676),
+       Sv = Pv(185),
+       ev = Pv(1657),
+       gv = Pv(1741),
+       pv = Pv(1184),
+       dv = Pv(1114);
```

#### 54. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L500` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L727) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L500)

```diff
-         return Xz.c.supports("appCheck") && zz.isLoggedIn() && !zz.hasTriedAppAttestation()
+         return ev.d.supports("appCheck") && vv.isLoggedIn() && !vv.hasTriedAppAttestation()
```

#### 55. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L505` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L732) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L505)

```diff
-           } = await (0, Oz.c)(), {
+           } = await (0, gv.e)(), {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L507` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L734) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L507)

```diff
-           } = await (0, vz.postJsonWithMetricsCookiesAndJsonResponse)(`${oz.clientSideServerUrls.indexUrl}/index/app-attestation`, {
+           } = await (0, dv.postJsonWithMetricsCookiesAndJsonResponse)(`${pv.clientSideServerUrls.indexUrl}/index/app-attestation`, {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L527` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L754) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L527)

```diff
-   40135: (zz, tz, sz) => {
+   40339: (vv, zv, Pv) => {
```

#### 58. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L531` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L758) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L531)

```diff
-     var Fz = sz(1681);
+     var hv = Pv(1711);
```

#### 59. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L584` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L811) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L584)

```diff
-         (0, Fz.d)(Wz.blob, `bloxd-screenshot-${Wz.width}x${Wz.height}-${Date.now()}.png`)
+         (0, hv.d)(Sv.blob, `bloxd-screenshot-${Sv.width}x${Sv.height}-${Date.now()}.png`)
```

#### 60. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L590` → after: `L817-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L817-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L817-L865) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L590)

```diff
-   38469: (zz, tz, sz) => {
+   39095: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => Nv
+     });
+     var hv = Pv(1657),
+       Sv = Pv(73),
+       ev = Pv(108),
+       gv = Pv(35983),
+       pv = Pv(644),
+       dv = Pv(1684);
+ 
+     function Nv(vv) {
+       var zv, Pv, dv, Nv;
+       const Tv = (0, gv.c)();
+       return {
+         game: vv,
+ ... (33 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L595-L598` → after: `L870-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L870-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L870-L873) · [Before (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L595-L598)

```diff
-     var Fz = sz(201),
-       Wz = sz(1746),
-       Xz = sz(1750),
-       Oz = sz(8398);
+     var hv = Pv(185),
+       Sv = Pv(1773),
+       ev = Pv(1779),
+       gv = Pv(8572);
```

#### 62. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L608` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L883) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L608)

```diff
-       return (tz === Wz.code || tz === vz) && (sz === Wz.text || sz === Wz.text + Fz.j)
+       return (zv === Sv.code || zv === dv) && (Pv === Sv.text || Pv === Sv.text + hv.l)
```

#### 63. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L611` → after: `L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L886) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L611)

```diff
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wz.c;
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv.b;
```

#### 64. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L614` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L889) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L614)

```diff
-         (0, Xz.n)(tz);
+         (0, ev.p)(zv);
```

#### 65. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L627` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L902) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L627)

```diff
-       const tz = (0, Oz.d)(zz);
+       const zv = (0, gv.g)(vv);
```

#### 66. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L631` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L906) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L631)

```diff
-   8398: (zz, tz, sz) => {
+   8572: (vv, zv, Pv) => {
```

#### 67. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L637` → after: `L910-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L910-L912) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L637)

```diff
-       h: () => vz
+       h: () => pv,
+       k: () => Nv,
+       n: () => dv
```

#### 68. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L639-L640` → after: `L914-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L914-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L914-L915) · [Before (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L639-L640)

```diff
-     var Fz = sz(201),
-       Wz = sz(4278);
+     var hv = Pv(185),
+       Sv = Pv(4386);
```

#### 69. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L652` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L927) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L652)

```diff
-       return null !== (tz = Object.keys(Wz.c).find((tz => Wz.c[tz] === zz))) && void 0 !== tz ? tz : null
+       return null !== (zv = Object.keys(Sv.d).find((zv => Sv.d[zv] === vv))) && void 0 !== zv ? zv : null
```

#### 70. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L665` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L940) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L665)

```diff
-   38564: (zz, tz, sz) => {
+   38675: (vv, zv, Pv) => {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L667` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L942) · [Before (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L667)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 72. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L669-L671` → after: `L944-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L944-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L944-L946) · [Before (L669-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L669-L671)

```diff
-     var Fz = sz(308),
-       Wz = sz(133),
-       Xz = sz(44);
+     var hv = Pv(302),
+       Sv = Pv(108),
+       ev = Pv(39);
```

#### 73. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L674` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L949) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L674)

```diff
-       Xz.f.setItem(Fz.Jb, Xz.f.getItem(Fz.Jb) + 1), (0, Wz.p)() && Xz.f.setItem(Fz.Hb, Xz.f.getItem(Fz.Hb) + 1)
+       ev.h.setItem(hv.xb, ev.h.getItem(hv.xb) + 1), (0, Sv.i)() && ev.h.setItem(hv.vb, ev.h.getItem(hv.vb) + 1)
```

#### 74. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L677` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L952) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L677)

```diff
-   35962: (zz, tz, sz) => {
+   36003: (vv, zv, Pv) => {
```

#### 75. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L679-L680` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L954-L955) · [Before (L679-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L679-L680)

```diff
-       c: () => Bz,
-       d: () => Pz
+       e: () => cv,
+       i: () => Gv
```

#### 76. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L682-L696` → after: `L957-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L957-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L957-L971) · [Before (L682-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L682-L696)

```diff
-     var Fz = sz(991),
-       Wz = sz(585),
-       Xz = sz(321),
-       Oz = sz(993),
-       oz = sz(601),
-       vz = sz(644),
-       Uz = sz(4165),
-       Kz = sz(106),
-       uz = sz(133),
-       Nz = sz(1664),
-       bz = sz(119),
-       wz = sz(35970),
-       Dz = sz(44),
-       gz = sz(624),
-       Hz = sz(35972);
+     var hv = Pv(1002),
+       Sv = Pv(628),
+       ev = Pv(312),
+       gv = Pv(1006),
+       pv = Pv(635),
+       dv = Pv(668),
+       Nv = Pv(4279),
+       lv = Pv(73),
+       Tv = Pv(108),
+       Wv = Pv(1692),
+       wv = Pv(86),
+       av = Pv(36010),
+       sv = Pv(39),
+       Cv = Pv(650),
+       iv = Pv(36016);
```

#### 77. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L700` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L975) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L700)

```diff
-       return [...null !== (zz = navigator.languages) && void 0 !== zz ? zz : [null !== (tz = navigator.language) && void 0 !== tz ? tz : "none"], "en-Gb"]
+       return [...null !== (vv = navigator.languages) && void 0 !== vv ? vv : [null !== (zv = navigator.language) && void 0 !== zv ? zv : "none"], "en-gb"]
```

#### 78. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L704` → after: `L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L979) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L704)

```diff
-       const Yz = (0, Fz.n)(tz) ? (0, Fz.r)(tz) : null,
+       const jv = (0, hv.l)(zv) ? (0, hv.q)(zv) : null,
```

#### 79. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L710-L711` → after: `L985-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L985-L986) · [Before (L710-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L710-L711)

```diff
-             joinDiscord: !!Dz.f.getItem("DiscordPressed"),
-             newGo: Uz.d,
+             joinDiscord: !!sv.h.getItem("DiscordPressed"),
+             newGo: Nv.c,
```

#### 80. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L722` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L997) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L722)

```diff
-             deviceType: (0, bz.c)()
+             deviceType: (0, wv.b)()
```

#### 81. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L727-L735` → after: `L1002-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1002-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1002-L1010) · [Before (L727-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L727-L735)

```diff
-           version: Wz.e,
-           siteUsed: uz.t,
-           subsiteUsed: uz.x,
-           playSessionId: (0, wz.g)(tz),
-           visitSessionId: (0, gz.e)(),
-           clientReason: oz.j.reason,
-           budgetBasis: (0, Hz.c)(),
-           ...null !== vz.q && {
-             diagClaim: vz.q.claimId
+           version: Sv.c,
+           siteUsed: Tv.o,
+           subsiteUsed: Tv.v,
+           playSessionId: (0, av.k)(zv),
+           visitSessionId: (0, Cv.d)(),
+           clientReason: pv.m.reason,
+           budgetBasis: (0, iv.e)(),
+           ...null !== dv.s && {
+             diagClaim: dv.s.claimId
```

#### 82. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L738-L739` → after: `L1013-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1013-L1014) · [Before (L738-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L738-L739)

```diff
-       return null !== Yz && (0, Xz.zc)(Yz) ? (xz.lobbyName = (0, Fz.j)(Yz, (0, Fz.p)(tz), sz), {
-         roomName: `classic_${Oz.h}`,
+       return null !== jv && (0, ev.uc)(jv) ? (fv.lobbyName = (0, hv.k)(jv, (0, hv.m)(zv), Pv), {
+         roomName: `classic_${gv.f}`,
```

#### 83. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L747` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1022) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L747)

```diff
-   39794: (zz, tz, sz) => {
+   39973: (vv, zv, Pv) => {
```

#### 84. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L749` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1024) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L749)

```diff
-       b: () => oz
+       c: () => pv
```

#### 85. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L751` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1026) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L751)

```diff
-     var Fz = sz(38973);
+     var hv = Pv(39088);
```

#### 86. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L910-L911` → after: `L1185-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1185-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1185-L1186) · [Before (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L910-L911)

```diff
-             hK: 0,
-             Nu: null,
+             Cp: 0,
+             Vl: null,
```

#### 87. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L971-L972` → after: `L1247-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1247-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1247-L1248) · [Before (L971-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L971-L972)

```diff
-           worldCodeAiChunk: () => Fz.c,
-           worldCodeAiGameState: () => Fz.d
+           worldCodeAiChunk: () => hv.e,
+           worldCodeAiGameState: () => hv.g
```

#### 88. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L993` → after: `L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1269) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L993)

```diff
-   35972: (zz, tz, sz) => {
+   36016: (vv, zv, Pv) => {
```

#### 89. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L997` → after: `L1272-L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1272-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1272-L1273) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L997)

```diff
-       d: () => rz
+       e: () => jv,
+       h: () => mv
```

#### 90. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L999-L1004` → after: `L1275-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1275-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1275-L1280) · [Before (L999-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L999-L1004)

```diff
-     var Fz = sz(201),
-       Wz = sz(106),
-       Xz = sz(2653),
-       Oz = sz(4038),
-       oz = sz(607),
-       vz = sz(35974);
+     var hv = Pv(185),
+       Sv = Pv(73),
+       ev = Pv(2693),
+       gv = Pv(4156),
+       pv = Pv(644),
+       dv = Pv(36024);
```

#### 91. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1048` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1324) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1048)

```diff
-           basis: `memory-${sz}`,
+           basis: `memory-${Pv}`,
```

#### 92. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1055` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1331) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1055)

```diff
-           footprintBytes: gz(vz.j),
+           footprintBytes: Cv(dv.k),
```

#### 93. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1067` → after: `L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1343) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1067)

```diff
-           return Math.min(vz.e, Math.max(vz.h, tz))
+           return Math.min(dv.e, Math.max(dv.i, zv))
```

#### 94. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1069` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1345) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1069)

```diff
-         Pz = (0, vz.q)(Bz);
+         Gv = (0, dv.o)(cv);
```

#### 95. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1074-L1075` → after: `L1350-L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1350-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1350-L1351) · [Before (L1074-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1074-L1075)

```diff
-         maxHorizDistance: null !== (Wz = null === Pz || void 0 === Pz ? void 0 : Pz.horizontal) && void 0 !== Wz ? Wz : Fz.d.maxChunkHorizAddDistance,
-         maxVertDistance: null !== (Oz = null === Pz || void 0 === Pz ? void 0 : Pz.vertical) && void 0 !== Oz ? Oz : Fz.d.maxChunkVertAddDistance,
+         maxHorizDistance: null !== (Sv = null === Gv || void 0 === Gv ? void 0 : Gv.horizontal) && void 0 !== Sv ? Sv : hv.f.maxChunkHorizAddDistance,
+         maxVertDistance: null !== (gv = null === Gv || void 0 === Gv ? void 0 : Gv.vertical) && void 0 !== gv ? gv : hv.f.maxChunkVertAddDistance,
```

#### 96. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1086` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1362) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1086)

```diff
-       }, (0, Oz.f)(), (0, oz.F)("wasm").length > 0)
+       }, (0, gv.g)(), (0, pv.G)("wasm").length > 0)
```

#### 97. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1095` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1371) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1095)

```diff
-       return (null !== (zz = Bz) && void 0 !== zz ? zz : Pz()).basis
+       return (null !== (vv = cv) && void 0 !== vv ? vv : Gv()).basis
```

#### 98. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1102` → after: `L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1378) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1102)

```diff
-   40127: (zz, tz, sz) => {
+   40337: (vv, zv, Pv) => {
```

#### 99. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1104-L1105` → after: `L1380-L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1380-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1380-L1381) · [Before (L1104-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1104-L1105)

```diff
-       c: () => Oz,
-       d: () => Xz
+       b: () => gv,
+       e: () => ev
```

#### 100. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1107-L1108` → after: `L1383-L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1383-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1383-L1384) · [Before (L1107-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1107-L1108)

```diff
-     var Fz = sz(2883),
-       Wz = sz(991);
+     var hv = Pv(2944),
+       Sv = Pv(1002);
```

#### 101. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1111` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1387) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1111)

```diff
-       return null !== zz.gameSource && (0, Fz.p)(tz, zz.gameSource)
+       return null !== vv.gameSource && (0, hv.h)(zv, vv.gameSource)
```

#### 102. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1116` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1392) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1116)

```diff
-       const sz = (0, Wz.n)(tz) ? (0, Wz.r)(tz) : null;
+       const Pv = (0, Sv.l)(zv) ? (0, Sv.q)(zv) : null;
```

#### 103. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1120` → after: `L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1396) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1120)

```diff
-   40101: (zz, tz, sz) => {
+   40315: (vv, zv, Pv) => {
```

#### 104. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1122` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1398) · [Before (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1122)

```diff
-       b: () => oz
+       e: () => pv
```

#### 105. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1124-L1126` → after: `L1400-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1400-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1400-L1402) · [Before (L1124-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1124-L1126)

```diff
-     var Fz = sz(574),
-       Wz = sz(40108),
-       Xz = sz(40063);
+     var hv = Pv(609),
+       Sv = Pv(40324),
+       ev = Pv(40282);
```

#### 106. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1128-L1133` → after: `L1404-L1409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1404-L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1404-L1409) · [Before (L1128-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1128-L1133)

```diff
-       const tz = await (0, Wz.h)({
-         Helmet: sz(37379),
-         Chestplate: sz(37386),
-         Gauntlets: sz(37407),
-         Leggings: sz(37395),
-         Boots: sz(37399)
+       const zv = await (0, Sv.j)({
+         Helmet: Pv(37482),
+         Chestplate: Pv(37487),
+         Gauntlets: Pv(37511),
+         Leggings: Pv(37496),
+         Boots: Pv(37503)
```

#### 107. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1136` → after: `L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1412) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1136)

```diff
-         return (0, Xz.n)(tz)
+         return (0, ev.r)(zv)
```

#### 108. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1144` → after: `L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1420) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1144)

```diff
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz.l;
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv.m;
```

#### 109. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1149` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1425) · [Before (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1149)

```diff
-           console.warn(`The grayscale armour ${Fz.c[zz]} image didn't decode ahead of use`, tz)
+           console.warn(`The grayscale armour ${hv.c[vv]} image didn't decode ahead of use`, zv)
```

#### 110. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1171` → after: `L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1447) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1171)

```diff
-           throw new Wz.d("decode", `grayscale armour ${Fz.c[zz]}`, {
+           throw new Sv.d("decode", `grayscale armour ${hv.c[vv]}`, {
```

#### 111. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1185` → after: `L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1461) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1185)

```diff
-           throw this.decoded.delete(zz), tz instanceof Wz.d ? tz : new Wz.d("decode", `grayscale armour ${Fz.c[zz]}`, {
+           throw this.decoded.delete(vv), zv instanceof Sv.d ? zv : new Sv.d("decode", `grayscale armour ${hv.c[vv]}`, {
```

#### 112. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1193` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1469) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1193)

```diff
-   40094: (zz, tz, sz) => {
+   40309: (vv, zv, Pv) => {
```

#### 113. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1195` → after: `L1471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1471) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1195)

```diff
-       c: () => Oz,
+       d: () => gv,
```

#### 114. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1199` → after: `L1474-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1474-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1474-L1475) · [Before (L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1199)

```diff
-       m: () => Dz
+       k: () => Tv,
+       o: () => sv
```

#### 115. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1201-L1203` → after: `L1477-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1477-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1477-L1479) · [Before (L1201-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1201-L1203)

```diff
-     var Fz = sz(40052),
-       Wz = sz(40101),
-       Xz = sz(40108);
+     var hv = Pv(40256),
+       Sv = Pv(40315),
+       ev = Pv(40324);
```

#### 116. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1228` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1504) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1228)

```diff
-       const tz = (0, Fz.n)();
+       const zv = (0, hv.m)();
```

#### 117. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1234` → after: `L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1510) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1234)

```diff
-         armourAtlasUrl: async () => (await sz.e(201).then((() => sz(33845)))).armourAtlasUrl,
+         armourAtlasUrl: async () => (await Pv.e(201).then((() => Pv(33871)))).armourAtlasUrl,
```

#### 118. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1240` → after: `L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1516) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1240)

```diff
-         particleItemUrl: async zz => (Wz ??= sz.e(38).then((() => sz(50829))).catch((zz => {
+         particleItemUrl: async vv => (Sv ??= Pv.e(38).then((() => Pv(51149))).catch((vv => {
```

#### 119. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1249` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1525) · [Before (L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1249)

```diff
-         this.sources = zz, this.onFailure = tz, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.grey … [truncated]
+         this.sources = vv, this.onFailure = zv, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.grey … [truncated]
```

#### 120. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1262` → after: `L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1538) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1262)

```diff
-         this.glbWrittenImages.delete(zz), tz && this.setGlbImages(zz, void 0 !== sz && sz.length > 0 ? sz : void 0)
+         this.glbWrittenImages.delete(vv), zv && this.setGlbImages(vv, void 0 !== Pv && Pv.length > 0 ? Pv : void 0)
```

#### 121. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1266` → after: `L1542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1542) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1266)

```diff
-         this.glbTakenCount.set(zz, (null !== (sz = this.glbTakenCount.get(zz)) && void 0 !== sz ? sz : 0) + 1), void 0 === tz ? this.glbImages.delete(zz) : this.glbImages.set(zz, tz);
+         this.glbTakenCount.set(vv, (null !== (Pv = this.glbTakenCount.get(vv)) && void 0 !== Pv ? Pv : 0) + 1), void 0 === zv ? this.glbImages.delete(vv) : this.glbImages.set(vv, zv);
```

#### 122. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1282` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1558) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1282)

```diff
-         if (this.lw) return;
+         if (this.ea) return;
```

#### 123. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1319` → after: `L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1595) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1319)

```diff
-         this.lw = !0, this.loading.clear(), this.ready.length = 0;
+         this.ea = !0, this.loading.clear(), this.ready.length = 0;
```

#### 124. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1330` → after: `L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1606) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1330)

```diff
-           this.lw || this.loading.get(tz) !== sz ? this.release(Fz.id) : (this.loading.delete(tz), this.answered.set(Fz.id, zz), this.ready.push({
+           this.ea || this.loading.get(zv) !== Pv ? this.release(hv.id) : (this.loading.delete(zv), this.answered.set(hv.id, vv), this.ready.push({
```

#### 125. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1336` → after: `L1612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1612) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1336)

```diff
-           if (this.lw || this.loading.get(tz) !== sz) return;
+           if (this.ea || this.loading.get(zv) !== Pv) return;
```

#### 126. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1341` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1617) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1341)

```diff
-           const Wz = Fz instanceof Xz.d && "decode" === Fz.stage ? bz : wz;
+           const Sv = hv instanceof ev.d && "decode" === hv.stage ? wv : av;
```

#### 127. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1372` → after: `L1648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1648) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1372)

```diff
-             throw new Xz.d("fetch", `image kind ${zz.kind}`, {
+             throw new ev.d("fetch", `image kind ${vv.kind}`, {
```

#### 128. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1393` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1669) · [Before (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1393)

```diff
-         if (!Fz) throw new Xz.d("decode", `image ${zz.index} of file ${2147483647&zz.word}`, {
+         if (!hv) throw new ev.d("decode", `image ${vv.index} of file ${2147483647&vv.word}`, {
```

#### 129. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1406` → after: `L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1682) · [Before (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1406)

```diff
-       return `${tz}:${sz}:${Fz}`
+       return `${zv}:${Pv}:${hv}`
```

#### 130. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1410` → after: `L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1686) · [Before (L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1410)

```diff
-       if (null === zz) throw new Xz.d("fetch", `no URL for image ${Hz(tz)}`, {
+       if (null === vv) throw new ev.d("fetch", `no URL for image ${iv(zv)}`, {
```

#### 131. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1420` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1696) · [Before (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1420)

```diff
-       return oz.setUint8(0, zz.kind), oz.setUint8(1, zz.index), oz.setUint8(2, tz), oz.setUint32(4, zz.word, !0), oz.setUint32(8, null !== (Fz = null === sz || void 0 === sz ? void 0 : sz.id) && void 0 !== Fz ? Fz : 0, !0), oz.setUint16(12, Math.min(null !== (Wz = null === sz ||  … [truncated]
+       return pv.setUint8(0, vv.kind), pv.setUint8(1, vv.index), pv.setUint8(2, zv), pv.setUint32(4, vv.word, !0), pv.setUint32(8, null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.id) && void 0 !== hv ? hv : 0, !0), pv.setUint16(12, Math.min(null !== (Sv = null === Pv ||  … [truncated]
```

#### 132. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1437` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1713) · [Before (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1437)

```diff
-       const Xz = null !== (tz = Fz.images) && void 0 !== tz ? tz : [];
+       const ev = null !== (zv = hv.images) && void 0 !== zv ? zv : [];
```

#### 133. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1443-L1444` → after: `L1719-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1719-L1720) · [Before (L1443-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1443-L1444)

```diff
-         if (!Xz || 0 !== (null !== (sz = Xz.buffer) && void 0 !== sz ? sz : 0) || void 0 === Xz.byteLength) return null;
-         const oz = null !== (Wz = Xz.byteOffset) && void 0 !== Wz ? Wz : 0,
+         if (!ev || 0 !== (null !== (Pv = ev.buffer) && void 0 !== Pv ? Pv : 0) || void 0 === ev.byteLength) return null;
+         const pv = null !== (Sv = ev.byteOffset) && void 0 !== Sv ? Sv : 0,
```

#### 134. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1450` → after: `L1726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1726) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1450)

```diff
-   39797: (zz, tz, sz) => {
+   39975: (vv, zv, Pv) => {
```

#### 135. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1454` → after: `L1729-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1729-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1729-L1730) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1454)

```diff
-       e: () => Wz
+       f: () => ev,
+       j: () => Sv
```

#### 136. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1471` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1747) · [Before (L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1471)

```diff
-   36071: (zz, tz, sz) => {
+   36126: (vv, zv, Pv) => {
```

#### 137. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1473` → after: `L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1749) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1473)

```diff
-       c: () => Kz,
+       b: () => lv,
```

#### 138. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1475-L1476` → after: `L1751-L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1751-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1751-L1752) · [Before (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1475-L1476)

```diff
-       h: () => Hz,
-       j: () => Uz
+       g: () => iv,
+       k: () => Nv
```

#### 139. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1478-L1483` → after: `L1754-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1754-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1754-L1759) · [Before (L1478-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1478-L1483)

```diff
-     var Fz = sz(30),
-       Wz = sz(2273),
-       Xz = sz(2277),
-       Oz = sz(2280),
-       oz = sz(2321),
-       vz = sz(34);
+     var hv = Pv(22),
+       Sv = Pv(2304),
+       ev = Pv(2306),
+       gv = Pv(2312),
+       pv = Pv(2366),
+       dv = Pv(26);
```

#### 140. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1486` → after: `L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1762) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1486)

```diff
-       return (!(0, Oz.c)() || 0 === zz && 0 === tz) && (0, Xz.t)(Wz.j.Joystick, 0, zz, tz, 0)
+       return (!(0, gv.e)() || 0 === vv && 0 === zv) && (0, ev.x)(Sv.f.Joystick, 0, vv, zv, 0)
```

#### 141. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1513` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1789) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1513)

```diff
-       return document.documentElement.classList.contains(oz.i)
+       return document.documentElement.classList.contains(pv.o)
```

#### 142. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1577` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1853) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1577)

```diff
-         if (!tz) return void this.write(Wz.j.TouchZone, zz, 0, 0, 0);
+         if (!zv) return void this.write(Sv.f.TouchZone, vv, 0, 0, 0);
```

#### 143. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1582` → after: `L1858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1858) · [Before (L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1582)

```diff
-         this.write(Wz.j.TouchZone, zz, Xz.x - this.canvasLeft, Xz.y - this.canvasTop, Dz(sz.width, sz.height));
+         this.write(Sv.f.TouchZone, vv, ev.x - this.canvasLeft, ev.y - this.canvasTop, sv(Pv.width, Pv.height));
```

#### 144. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1584` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1860) · [Before (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1584)

```diff
-         this.write(Wz.j.TouchZone, 256 | zz, 0, 0, Oz ? Dz(Oz.width, Oz.height) : 0)
+         this.write(Sv.f.TouchZone, 256 | vv, 0, 0, gv ? sv(gv.width, gv.height) : 0)
```

#### 145. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1588` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1864) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1588)

```diff
-           sz = Fz.b.get("worldPanelHud");
+           Pv = hv.c.get("worldPanelHud");
```

#### 146. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1596-L1597` → after: `L1872-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1872-L1873) · [Before (L1596-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1596-L1597)

```diff
-     }(Xz.t);
-     (0, vz.q)(oz.f, (() => {
+     }(ev.x);
+     (0, dv.l)(pv.h, (() => {
```

#### 147. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1601` → after: `L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1877) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1601)

```diff
-   39979: (zz, tz, sz) => {
+   40183: (vv, zv, Pv) => {
```

#### 148. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1603-L1604` → after: `L1879-L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1879-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1879-L1880) · [Before (L1603-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1603-L1604)

```diff
-       d: () => vz,
-       f: () => Uz
+       b: () => dv,
+       c: () => Nv
```

#### 149. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1606-L1611` → after: `L1882-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1882-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1882-L1887) · [Before (L1606-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1606-L1611)

```diff
-     var Fz = sz(39985),
-       Wz = sz(38473),
-       Xz = sz(35962),
-       Oz = sz(39912),
-       oz = sz(39959);
-     const vz = Fz.d.timeForPlayerToConnect - 1e4;
+     var hv = Pv(40185),
+       Sv = Pv(38596),
+       ev = Pv(36003),
+       gv = Pv(40112),
+       pv = Pv(40161);
+     const dv = hv.c.timeForPlayerToConnect - 1e4;
```

#### 150. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1617` → after: `L1893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1893) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1617)

```diff
-         throw console.error("[bloxd-wasm-client] could not get a traffic code", wz), new oz.x(wz)
+         throw console.error("[bloxd-wasm-client] could not get a traffic code", av), new pv.u(av)
```

#### 151. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1623` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1899) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1623)

```diff
-         const tz = (0, Xz.d)(zz, Uz, Kz, vz, (zz => {
+         const zv = (0, ev.i)(vv, Nv, lv, dv, (vv => {
```

#### 152. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1628` → after: `L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1904) · [Before (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1628)

```diff
-         const Wz = (0, Oz.B)();
+         const Sv = (0, gv.A)();
```

#### 153. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1643` → after: `L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1919) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1643)

```diff
-         optionsAfterRefusal: async tz => await (0, Wz.b)(zz, tz) ? uz().joinOptions : null
+         optionsAfterRefusal: async zv => await (0, Sv.e)(vv, zv) ? Tv().joinOptions : null
```

#### 154. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1647` → after: `L1923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1923) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1647)

```diff
-   4656: (zz, tz, sz) => {
+   4786: (vv, zv, Pv) => {
```

#### 155. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1649-L1650` → after: `L1925-L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1925-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1925-L1926) · [Before (L1649-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1649-L1650)

```diff
-       d: () => oz,
-       e: () => Oz
+       e: () => pv,
+       h: () => gv
```

#### 156. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1652-L1653` → after: `L1928-L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1928-L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1928-L1929) · [Before (L1652-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1652-L1653)

```diff
-     var Fz = sz(2883),
-       Wz = sz(4665);
+     var hv = Pv(2944),
+       Sv = Pv(4788);
```

#### 157. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1658` → after: `L1934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1934) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1658)

```diff
-         pack: zz.metaData.id === Fz.e ? null : zz,
+         pack: vv.metaData.id === hv.b ? null : vv,
```

#### 158. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1665` → after: `L1941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1941) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1665)

```diff
-       null !== sz && (0, Wz.d)(sz.pack, zz) && (Xz = null, tz && sz.prompt())
+       null !== Pv && (0, Sv.e)(Pv.pack, vv) && (ev = null, zv && Pv.prompt())
```

#### 159. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1668` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1944) · [Before (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1668)

```diff
-   40116: (zz, tz, sz) => {
+   40332: (vv, zv, Pv) => {
```

#### 160. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1670` → after: `L1946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1946) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1670)

```diff
-       d: () => Kz,
+       e: () => lv,
```

#### 161. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1672-L1673` → after: `L1948-L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1948-L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1948-L1949) · [Before (L1672-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1672-L1673)

```diff
-       i: () => uz,
-       k: () => Oz
+       k: () => Tv,
+       n: () => gv
```

#### 162. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1675-L1676` → after: `L1951-L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1951-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L1951-L1952) · [Before (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1675-L1676)

```diff
-     var Fz = sz(40094),
-       Wz = sz(40052);
+     var hv = Pv(40309),
+       Sv = Pv(40256);
```

#### 163. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1740` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2016) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1740)

```diff
-           return null !== (sz = null === (Fz = tz()) || void 0 === Fz ? void 0 : Fz.armourAtlasUrl()) && void 0 !== sz ? sz : zz.armourAtlasUrl()
+           return null !== (Pv = null === (hv = zv()) || void 0 === hv ? void 0 : hv.armourAtlasUrl()) && void 0 !== Pv ? Pv : vv.armourAtlasUrl()
```

#### 164. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1745` → after: `L2021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2021) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1745)

```diff
-           const zz = await sz.e(38).then((() => sz(50829))).catch((() => null));
+           const vv = await Pv.e(38).then((() => Pv(51149))).catch((() => null));
```

#### 165. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1750` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2026) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1750)

```diff
-           return null !== (zz = null === (tz = await oz()) || void 0 === tz ? void 0 : tz.blockImageName(sz)) && void 0 !== zz ? zz : null
+           return null !== (vv = null === (zv = await pv()) || void 0 === zv ? void 0 : zv.blockImageName(Pv)) && void 0 !== vv ? vv : null
```

#### 166. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1756` → after: `L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2032) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1756)

```diff
-       return (0, Wz.n)().catch((() => null))
+       return (0, Sv.m)().catch((() => null))
```

#### 167. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1764` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2040) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1764)

```diff
-           Wz = null !== (zz = null === Fz || void 0 === Fz ? void 0 : Fz.slice(Fz.lastIndexOf("/") + 1)) && void 0 !== zz ? zz : null;
+           Sv = null !== (vv = null === hv || void 0 === hv ? void 0 : hv.slice(hv.lastIndexOf("/") + 1)) && void 0 !== vv ? vv : null;
```

#### 168. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1779` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2055) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1779)

```diff
-       const tz = [Fz.g.ArmourAtlas, Fz.g.LifeformAtlas, Fz.g.GroupAtlas, Fz.g.BlockImage, Fz.g.Particle];
+       const zv = [hv.i.ArmourAtlas, hv.i.LifeformAtlas, hv.i.GroupAtlas, hv.i.BlockImage, hv.i.Particle];
```

#### 169. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1782-L1784` → after: `L2058-L2060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2058-L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2058-L2060) · [Before (L1782-L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1782-L1784)

```diff
-           case Fz.g.Particle:
-             return zz.index === Fz.i.Item;
-           case Fz.g.LifeformAtlas:
+           case hv.i.Particle:
+             return vv.index === hv.k.Item;
+           case hv.i.LifeformAtlas:
```

#### 170. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1792` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2068) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1792)

```diff
-   39994: (zz, tz, sz) => {
+   40192: (vv, zv, Pv) => {
```

#### 171. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1794-L1795` → after: `L2070-L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2070-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2070-L2071) · [Before (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1794-L1795)

```diff
-       c: () => Fz,
-       g: () => oz,
+       e: () => hv,
+       f: () => pv,
```

#### 172. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1797-L1798` → after: `L2073-L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2073-L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2073-L2074) · [Before (L1797-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1797-L1798)

```diff
-       i: () => Wz,
-       m: () => Xz
+       j: () => Sv,
+       l: () => ev
```

#### 173. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1819` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2095) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1819)

```diff
-       Promise.resolve().then((() => sz(116))).then((tz => {
+       Promise.resolve().then((() => Pv(81))).then((zv => {
```

#### 174. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1830` → after: `L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2106) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1830)

```diff
-       null !== window.onbeforeunload ? Promise.resolve().then((() => sz(1664))).then((tz => {
+       null !== window.onbeforeunload ? Promise.resolve().then((() => Pv(1692))).then((zv => {
```

#### 175. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1845` → after: `L2121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2121) · [Before (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1845)

```diff
-   4665: (zz, tz, sz) => {
+   4788: (vv, zv, Pv) => {
```

#### 176. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1859` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2135) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1859)

```diff
-       d: () => Fz
+       e: () => hv
```

#### 177. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1862` → after: `L2138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2138) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1862)

```diff
-   40029: (zz, tz, sz) => {
+   40226: (vv, zv, Pv) => {
```

#### 178. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1864-L1867` → after: `L2140-L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2140-L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2140-L2143) · [Before (L1864-L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1864-L1867)

```diff
-       c: () => mz,
-       g: () => Yz,
-       j: () => gz,
-       n: () => Dz
+       b: () => Fv,
+       d: () => jv,
+       h: () => Cv,
+       i: () => sv
```

#### 179. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1869-L1875` → after: `L2145-L2151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2145-L2151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2145-L2151) · [Before (L1869-L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1869-L1875)

```diff
-     var Fz = sz(1746),
-       Wz = sz(1750),
-       Xz = sz(38469),
-       Oz = sz(38480),
-       oz = sz(1715),
-       vz = sz(39955),
-       Uz = sz(39959);
+     var hv = Pv(1773),
+       Sv = Pv(1779),
+       ev = Pv(38587),
+       gv = Pv(38604),
+       pv = Pv(1748),
+       dv = Pv(40156),
+       Nv = Pv(40161);
```

#### 180. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1899` → after: `L2175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2175) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1899)

```diff
-       return `${Fz?"https":"http"}://${Wz}${Xz}/matchmake/${tz}/${encodeURIComponent(sz)}${Oz?`?${Oz}`:""}`
+       return `${hv?"https":"http"}://${Sv}${ev}/matchmake/${zv}/${encodeURIComponent(Pv)}${gv?`?${gv}`:""}`
```

#### 181. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1904-L1905` → after: `L2180-L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2180-L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2180-L2181) · [Before (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1904-L1905)

```diff
-       const Fz = null !== (sz = tz.protocol) && void 0 !== sz ? sz : "ws";
-       if ("ws" !== Fz) throw new Error(`seat reservation asks for the ${Fz} transport`);
+       const hv = null !== (Pv = zv.protocol) && void 0 !== Pv ? Pv : "ws";
+       if ("ws" !== hv) throw new Error(`seat reservation asks for the ${hv} transport`);
```

#### 182. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1913` → after: `L2189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2189) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1913)

```diff
-       return `${Wz?"wss":"ws"}://${tz.room.publicAddress||`${Xz}${Oz}`}/${tz.room.processId}/${tz.room.roomId}?${vz.toString()}`
+       return `${Sv?"wss":"ws"}://${zv.room.publicAddress||`${ev}${gv}`}/${zv.room.processId}/${zv.room.roomId}?${dv.toString()}`
```

#### 183. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1918` → after: `L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2194) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1918)

```diff
-       const bz = null !== (vz = Kz.sleep) && void 0 !== vz ? vz : Fz.c,
+       const wv = null !== (dv = lv.sleep) && void 0 !== dv ? dv : hv.b,
```

#### 184. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1920-L1921` → after: `L2196-L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2196-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2196-L2197) · [Before (L1920-L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1920-L1921)

```diff
-         gz = new oz.b(Oz.c, (() => {
-           (0, Wz.j)(Dz.controller, new Oz.e)
+         Cv = new pv.e(gv.d, (() => {
+           (0, Sv.k)(sv.controller, new gv.g)
```

#### 185. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1936` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2212) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1936)

```diff
-             if (wz > 0) await oz(null !== (Dz = Nz[wz - 1]) && void 0 !== Dz ? Dz : 1500, Oz);
+             if (av > 0) await pv(null !== (sv = Wv[av - 1]) && void 0 !== sv ? sv : 1500, gv);
```

#### 186. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1938` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2214) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1938)

```diff
-             (0, Wz.n)(Oz);
+             (0, Sv.p)(gv);
```

#### 187. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1942` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2218) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1942)

```diff
-               (0, Wz.n)(Oz), bz = Hz(gz);
+               (0, Sv.p)(gv), wv = iv(Cv);
```

#### 188. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1954` → after: `L2230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2230) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1954)

```diff
-               bz = new Uz.u(`seat request answered HTTP ${tz.status}${null===sz?" without JSON":" without a seat"}`, !1)
+               wv = new Nv.q(`seat request answered HTTP ${zv.status}${null===Pv?" without JSON":" without a seat"}`, !1)
```

#### 189. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1957` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2233) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1957)

```diff
-           throw null !== (Xz = bz) && void 0 !== Xz ? Xz : new Uz.u("seat request made no attempt", !1)
+           throw null !== (ev = wv) && void 0 !== ev ? ev : new Nv.q("seat request made no attempt", !1)
```

#### 190. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1969` → after: `L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2245) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1969)

```diff
-       return new Uz.u(zz instanceof Error ? zz.message : String(zz), !0, zz)
+       return new Nv.q(vv instanceof Error ? vv.message : String(vv), !0, vv)
```

#### 191. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1975` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2251) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1975)

```diff
-       } = sz, Oz = null !== (Fz = sz.fetch) && void 0 !== Fz ? Fz : fetch, oz = await Oz(zz, {
+       } = Pv, gv = null !== (hv = Pv.fetch) && void 0 !== hv ? hv : fetch, pv = await gv(vv, {
```

#### 192. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1992` → after: `L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2268) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L1992)

```diff
-             answer: "object" === typeof tz && null !== tz ? tz : null,
+             answer: "object" === typeof zv && null !== zv ? zv : null,
```

#### 193. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2006` → after: `L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2282) · [Before (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2006)

```diff
-       return (0, Wz.n)(Xz), {
+       return (0, Sv.p)(ev), {
```

#### 194. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2015` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2291) · [Before (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2015)

```diff
-       return new Uz.m(zz, "number" === typeof(null === tz || void 0 === tz ? void 0 : tz.code) ? tz.code : 0, (0, vz.q)(zz).text)
+       return new Nv.k(vv, "number" === typeof(null === zv || void 0 === zv ? void 0 : zv.code) ? zv.code : 0, (0, dv.l)(vv).text)
```

#### 195. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2035` → after: `L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2311) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2035)

```diff
-         throw new rz(`the seat's reconnect was refused: ${null!==Oz&&void 0!==Oz?Oz:`HTTP ${Wz.status}`}`, zz)
+         throw new mv(`the seat's reconnect was refused: ${null!==gv&&void 0!==gv?gv:`HTTP ${Sv.status}`}`, vv)
```

#### 196. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2057` → after: `L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2333) · [Before (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2057)

```diff
-   39727: (zz, tz, sz) => {
+   39907: (vv, zv, Pv) => {
```

#### 197. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2060` → after: `L2336-L2339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2336-L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2336-L2339) · [Before (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2060)

```diff
-       F: () => Gz,
+       E: () => jv,
+       G: () => Cv,
+       H: () => Ov,
+       I: () => Rv,
```

#### 198. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2064-L2066` → after: `L2343-L2344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2343-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2343-L2344) · [Before (L2064-L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2064-L2066)

```diff
-       N: () => Cz,
-       R: () => cz,
-       U: () => wz,
+       P: () => iv,
+       T: () => Gv,
```

#### 199. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2074-L2076` → after: `L2349-L2353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2349-L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2349-L2353) · [Before (L2074-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2074-L2076)

```diff
-       gb: () => xz,
-       j: () => bz,
-       n: () => Dz,
+       i: () => wv,
+       k: () => sv,
+       m: () => Kv,
+       o: () => Yv,
+       q: () => Dv,
```

#### 200. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2079-L2080` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2356) · [Before (L2079-L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2079-L2080)

```diff
-       x: () => ez,
-       y: () => Iz
+       x: () => Vv
```

#### 201. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2082` → after: `L2358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2358) · [Before (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2082)

```diff
-     var Fz = sz(2724);
+     var hv = Pv(2762);
```

#### 202. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2108` → after: `L2384-L2385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2384-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2384-L2385) · [Before (L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2108)

```diff
-       UpdateNameTag: 53
+       UpdateNameTag: 53,
+       LobbyManage: 96
```

#### 203. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2112` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2389) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2112)

```diff
-       return !ArrayBuffer.isView(zz) || zz instanceof DataView ? Array.isArray(zz) ? zz.map((zz => tz(zz))) : zz : Array.from(zz, (zz => tz(zz)))
+       return !ArrayBuffer.isView(vv) || vv instanceof DataView ? Array.isArray(vv) ? vv.map((vv => zv(vv))) : vv : Array.from(vv, (vv => zv(vv)))
```

#### 204. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2132` → after: `L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2409) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2132)

```diff
-       return null === zz || "object" !== typeof zz ? zz : [Oz(zz.PO), Oz(zz.rO)]
+       return null === vv || "object" !== typeof vv ? vv : [gv(vv.ug), gv(vv.vp)]
```

#### 205. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2136` → after: `L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2413) · [Before (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2136)

```diff
-       return null === zz || "object" !== typeof zz ? zz : [Xz(zz.oO, Uz), Xz(zz.SU, Uz)]
+       return null === vv || "object" !== typeof vv ? vv : [ev(vv.PS, Nv), ev(vv.Yg, Nv)]
```

#### 206. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2140` → after: `L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2417) · [Before (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2140)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.RO), Oz(tz.pO)];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.al), gv(zv.sl)];
```

#### 207. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2145` → after: `L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2422) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2145)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [tz.id, tz.ZO];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [zv.id, zv.Nl];
```

#### 208. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2150` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2427) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2150)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [tz.Yt, Oz(tz.xt), tz.Jt, Oz(tz.Zt), tz.jt, tz.yt, tz.qO, Oz(tz.SO), Oz(tz.VO)];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [zv.ah, gv(zv.sh), zv.Ch, gv(zv.mh), zv.Yh, zv.nh, zv.Bg, gv(zv.Jg), gv(zv.Eg)];
```

#### 209. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2155` → after: `L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2432) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2155)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Xz(tz.AK, Uz), tz.yK];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [ev(zv.MN, Nv), zv.yN];
```

#### 210. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2160` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2437) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2160)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Xz(tz.ao, (zz => Oz(zz))), Oz(tz.qo), tz.Vo];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [ev(zv.Sl, (vv => gv(vv))), gv(zv.el), zv.gl];
```

#### 211. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2165` → after: `L2442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2442) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2165)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Xz(tz.GO, Uz), Oz(tz.cO), tz.jO];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [ev(zv.BN, Nv), gv(zv.JN), zv.EN];
```

#### 212. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2170` → after: `L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2447) · [Before (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2170)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.wF), Oz(tz.DF)];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.GP), gv(zv.mP)];
```

#### 213. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2175` → after: `L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2452) · [Before (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2175)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.yo)];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.Fp)];
```

#### 214. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2184` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2461) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2184)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.Uu), Oz(tz.Ku), Oz(tz.PO), Oz(tz.rO)];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.kg), gv(zv.Xg), gv(zv.ug), gv(zv.vp)];
```

#### 215. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2197` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2474) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2197)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.fO)];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.Zl)];
```

#### 216. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2206` → after: `L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2483) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2206)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.mO), Oz(tz.JO)];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.Pl), gv(zv.hl)];
```

#### 217. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2223` → after: `L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2500) · [Before (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2223)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.ko)];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.pl)];
```

#### 218. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2228` → after: `L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2505) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2228)

```diff
-       return (Kz ??= (0, Fz.c)().map((zz => zz.name)), Kz).map((tz => {
+       return (lv ??= (0, hv.d)().map((vv => vv.name)), lv).map((zv => {
```

#### 219. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2235` → after: `L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2512) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2235)

```diff
-       return null === (tz = zz) || "object" !== typeof tz ? tz : [tz.Eo, tz.zv, tz.tv];
+       return null === (zv = vv) || "object" !== typeof zv ? zv : [zv.Al, zv.Ll, zv.Hl];
```

#### 220. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2239` → after: `L2516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2516) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2239)

```diff
-   40119: (zz, tz, sz) => {
+   40334: (vv, zv, Pv) => {
```

#### 221. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2241` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2518) · [Before (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2241)

```diff
-       b: () => Xz
+       e: () => ev
```

#### 222. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2243-L2244` → after: `L2520-L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2520-L2521) · [Before (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2243-L2244)

```diff
-     var Fz = sz(40127),
-       Wz = sz(40116);
+     var hv = Pv(40337),
+       Sv = Pv(40332);
```

#### 223. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2286` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2563) · [Before (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2286)

```diff
-         void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Fz.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
+         void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, hv.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
```

#### 224. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2290` → after: `L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2567) · [Before (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2290)

```diff
-   39950: (zz, tz, sz) => {
+   40153: (vv, zv, Pv) => {
```

#### 225. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2300` → after: `L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2577) · [Before (L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2300)

```diff
-     var Fz = sz(201),
+     var hv = Pv(185),
```

#### 226. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2302-L2321` → after: `L2579-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2579-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2579-L2599) · [Before (L2302-L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2302-L2321)

```diff
-       Xz = sz(161),
-       Oz = sz(38492),
-       oz = sz(1857),
-       vz = sz(34),
-       Uz = sz(4328),
-       Kz = sz(1287),
-       uz = sz(1658),
-       Nz = sz(1293),
-       bz = sz(38624),
-       wz = sz(38637),
-       Dz = sz(38564),
-       gz = sz(35970),
-       Hz = sz(38469),
-       Bz = sz(8398),
-       Pz = sz(38480),
-       rz = sz(39808),
- ... (4 more removed lines; see GitHub link above)
+       ev = Pv(144),
+       gv = Pv(38613),
+       pv = Pv(1876),
+       dv = Pv(26),
+       Nv = Pv(4444),
+       lv = Pv(1295),
+       Tv = Pv(1684),
+       Wv = Pv(1306),
+       wv = Pv(38733),
+       av = Pv(1285),
+       sv = Pv(38747),
+       Cv = Pv(38675),
+       iv = Pv(36010),
+       cv = Pv(38587),
+       Gv = Pv(8572),
+       mv = Pv(38604),
+ ... (5 more added lines; see GitHub link above)
```

#### 227. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2422` → after: `L2700-L2701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2700-L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2700-L2701) · [Before (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2422)

```diff
-         setBlockHighlight: !0
+         setBlockHighlight: !0,
+         lobbyManage: !0
```

#### 228. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2446` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2725) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2446)

```diff
-         ...mz.b[zz]
+         ...Yv.c[vv]
```

#### 229. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2454` → after: `L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2733) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2454)

```diff
-       return null === (zz = null === (tz = (0, xz.f)()) || void 0 === tz ? void 0 : tz.localPlayerAlive()) || void 0 === zz || zz
+       return null === (vv = null === (zv = (0, Fv.h)()) || void 0 === zv ? void 0 : zv.localPlayerAlive()) || void 0 === vv || vv
```

#### 230. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2459` → after: `L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2738) · [Before (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2459)

```diff
-       return null !== (zz = null === (tz = (0, xz.f)()) || void 0 === tz ? void 0 : tz.localDeaths()) && void 0 !== zz ? zz : null
+       return null !== (vv = null === (zv = (0, Fv.h)()) || void 0 === zv ? void 0 : zv.localDeaths()) && void 0 !== vv ? vv : null
```

#### 231. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2466` → after: `L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2745) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2466)

```diff
-           return (0, Yz.y)((() => {
+           return (0, fv.q)((() => {
```

#### 232. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2489` → after: `L2768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2768) · [Before (L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2489)

```diff
-             null === (zz = (0, xz.f)()) || void 0 === zz || zz.respawn()
+             null === (vv = (0, Fv.h)()) || void 0 === vv || vv.respawn()
```

#### 233. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2493-L2494` → after: `L2772-L2773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2772-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2772-L2773) · [Before (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2493-L2494)

```diff
-             null === (tz = (0, xz.f)()) || void 0 === tz || tz.send(Jz.d.PlayEmote, (0, Jz.J)({
-               yo: zz
+             null === (zv = (0, Fv.h)()) || void 0 === zv || zv.send(nv.d.PlayEmote, (0, nv.B)({
+               Fp: vv
```

#### 234. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2502` → after: `L2781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2781) · [Before (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2502)

```diff
-             null === (tz = (0, xz.f)()) || void 0 === tz || tz.thirdPersonFor(sz)
+             null === (zv = (0, Fv.h)()) || void 0 === zv || zv.thirdPersonFor(Pv)
```

#### 235. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2506` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2785) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2506)

```diff
-             null === (tz = (0, xz.f)()) || void 0 === tz || tz.bindCustomButtonKeys(zz)
+             null === (zv = (0, Fv.h)()) || void 0 === zv || zv.bindCustomButtonKeys(vv)
```

#### 236. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2514` → after: `L2793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2793) · [Before (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2514)

```diff
-             null === (tz = (0, xz.f)()) || void 0 === tz || tz.pressCustomButton(sz, Fz)
+             null === (zv = (0, Fv.h)()) || void 0 === zv || zv.pressCustomButton(Pv, hv)
```

#### 237. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2518-L2519` → after: `L2797-L2798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2797-L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2797-L2798) · [Before (L2518-L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2518-L2519)

```diff
-             const tz = (0, Jz.R)({
-                 ko: zz
+             const zv = (0, nv.I)({
+                 pl: vv
```

#### 238. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2522` → after: `L2801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2801) · [Before (L2522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2522)

```diff
-                 const zz = (0, xz.f)();
+                 const vv = (0, Fv.h)();
```

#### 239. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2526` → after: `L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2805) · [Before (L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2526)

```diff
-               const zz = (0, Yz.y)((() => {
+               const vv = (0, fv.q)((() => {
```

#### 240. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2533` → after: `L2812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2812) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2533)

```diff
-             null === (tz = (0, xz.f)()) || void 0 === tz || tz.setCameraZoom(zz)
+             null === (zv = (0, Fv.h)()) || void 0 === zv || zv.setCameraZoom(vv)
```

#### 241. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2541` → after: `L2820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2820) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2541)

```diff
-             return null !== (zz = null === (tz = (0, xz.f)()) || void 0 === tz ? void 0 : tz.cameraZoom()) && void 0 !== zz ? zz : 0
+             return null !== (vv = null === (zv = (0, Fv.h)()) || void 0 === zv ? void 0 : zv.cameraZoom()) && void 0 !== vv ? vv : 0
```

#### 242. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2545-L2553` → after: `L2824-L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2824-L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2824-L2832) · [Before (L2545-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2545-L2553)

```diff
-     var cz = sz(39955),
-       jz = sz(39959),
-       Az = sz(39967),
-       yz = sz(39979),
-       Mz = sz(1242),
-       dz = sz(116),
-       hz = sz(4165),
-       Qz = sz(3402),
-       kz = sz(1151);
+     var xv = Pv(40156),
+       tv = Pv(40161),
+       qv = Pv(40166),
+       Iv = Pv(40183),
+       Qv = Pv(1236),
+       Zv = Pv(81),
+       Av = Pv(4279),
+       Lv = Pv(3511),
+       Hv = Pv(1156);
```

#### 243. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2555-L2556` → after: `L2834-L2835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2834-L2835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2834-L2835) · [Before (L2555-L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2555-L2556)

```diff
-       jK: () => (0, Mz.c)(),
-       inbuiltOverwritten: () => hz.e,
+       HN: () => (0, Qv.b)(),
+       inbuiltOverwritten: () => Av.f,
```

#### 244. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2559-L2560` → after: `L2838-L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2838-L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2838-L2840) · [Before (L2559-L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2559-L2560)

```diff
-       emitReplaced: () => (0, vz.e)(),
-       confirmMesh: () => (0, Qz.d)()
+       emitReplaced: () => (0, dv.b)(),
+       confirmMesh: () => (0, Lv.c)(),
+       confirmMeshHitStack: () => (0, Lv.d)()
```

#### 245. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2562-L2571` → after: `L2842-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2842-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2842-L2851) · [Before (L2562-L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2562-L2571)

```diff
-     var Lz = sz(39969),
-       lz = sz(39994);
-     var nz = sz(30),
-       az = sz(1862),
-       qz = sz(1910),
-       Sz = sz(1577),
-       Vz = sz(1960),
-       Rz = sz(1173),
-       pz = sz(1237),
-       fz = sz(39938);
+     var yv = Pv(40171),
+       Bv = Pv(40192);
+     var Jv = Pv(22),
+       Ev = Pv(1884),
+       ov = Pv(1934),
+       bv = Pv(1612),
+       rv = Pv(1978),
+       kv = Pv(1175),
+       Xv = Pv(1234),
+       uv = Pv(40134);
```

#### 246. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2574` → after: `L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2854) · [Before (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2574)

```diff
-       return pz.g.get().getCurrentLanguageCode()
+       return Xv.f.get().getCurrentLanguageCode()
```

#### 247. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2580` → after: `L2860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2860) · [Before (L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2580)

```diff
-           translate: (zz, tz) => (0, Rz.u)(Ez(), zz, tz),
+           translate: (vv, zv) => (0, kv.n)(vz(), vv, zv),
```

#### 248. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2582-L2583` → after: `L2862-L2863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2862-L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2862-L2863) · [Before (L2582-L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2582-L2583)

```diff
-             const tz = (0, qz.v)(zz, nz.b.get("isTouchScreen"));
-             return null !== tz ? (0, Rz.v)(Ez(), tz.translationKey, tz.params) : (0, qz.r)((0, qz.t)(zz))
+             const zv = (0, ov.x)(vv, Jv.c.get("isTouchScreen"));
+             return null !== zv ? (0, kv.r)(vz(), zv.translationKey, zv.params) : (0, ov.p)((0, ov.t)(vv))
```

#### 249. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2585-L2587` → after: `L2865-L2867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2865-L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2865-L2867) · [Before (L2585-L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2585-L2587)

```diff
-           isFriend: Vz.f,
-           hiddenNames: az.d.shown,
-           loadsFontRest: (0, fz.c)(Ez())
+           isFriend: rv.e,
+           hiddenNames: Ev.b.shown,
+           loadsFontRest: (0, uv.d)(vz())
```

#### 250. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2593` → after: `L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2873) · [Before (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2593)

```diff
-           (0, Rz.l)(zz).then((() => {
+           (0, kv.f)(vv).then((() => {
```

#### 251. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2600` → after: `L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2880) · [Before (L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2600)

```diff
-       const Oz = [(0, pz.h)((() => {
+       const gv = [(0, Xv.g)((() => {
```

#### 252. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2602` → after: `L2882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2882) · [Before (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2602)

```diff
-       })), (0, vz.q)("customBindingsChanged", tz), (0, vz.q)("appManagerUpdated|isTouchScreen", tz), (0, Vz.d)((() => {
+       })), (0, dv.l)("customBindingsChanged", zv), (0, dv.l)("appManagerUpdated|isTouchScreen", zv), (0, rv.b)((() => {
```

#### 253. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2605` → after: `L2885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2885) · [Before (L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2605)

```diff
-       })), az.d.subscribe(tz)];
+       })), Ev.b.subscribe(zv)];
```

#### 254. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2611-L2632` → after: `L2891-L2893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2891-L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2891-L2893) · [Before (L2611-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2611-L2632)

```diff
-     var tt = sz(585),
-       st = sz(991),
-       Ft = sz(1888),
-       Wt = sz(308),
-       Xt = sz(3376),
-       Ot = sz(35828),
-       ot = sz(3378),
-       vt = sz(38147),
-       Ut = sz(4344),
-       Kt = sz(39875),
-       ut = sz(601),
-       Nt = sz(664),
-       bt = sz(666),
-       wt = sz(1884),
-       Dt = sz(3408),
-       gt = sz(2962);
- ... (6 more removed lines; see GitHub link above)
+     var Pz = Pv(628),
+       hz = Pv(1002),
+       Sz = Pv(1908),
```

#### 255. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2634-L2637` → after: `L2895-L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2895-L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2895-L2918) · [Before (L2634-L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2634-L2637)

```diff
-       Jt = sz(290),
-       It = sz(39822),
-       Ct = sz(4427);
-     var et = sz(39998);
+       gz = Pv(3466),
+       pz = Pv(35885),
+       dz = Pv(3473),
+       Nz = Pv(38263),
+       lz = Pv(4451),
+       Tz = Pv(40065),
+       Wz = Pv(668),
+       wz = Pv(635),
+       az = Pv(680),
+       sz = Pv(686),
+       Cz = Pv(1903),
+       iz = Pv(3515),
+       cz = Pv(3033);
+     let Gz = null;
+     var mz = Pv(1184),
+       jz = Pv(1779),
+ ... (8 more added lines; see GitHub link above)
```

#### 256. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2643` → after: `L2924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2924) · [Before (L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2643)

```diff
-         (0, It.F)()
+         (0, Dz.y)()
```

#### 257. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2648` → after: `L2929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2929) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2648)

```diff
-           value: String((0, It.t)())
+           value: String((0, Dz.n)())
```

#### 258. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2655` → after: `L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2936) · [Before (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2655)

```diff
-         (0, et.g)(zz)
+         (0, Vz.k)(vv)
```

#### 259. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2664-L2665` → after: `L2945-L2946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2945-L2946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2945-L2946) · [Before (L2664-L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2664-L2665)

```diff
-           if (null !== (0, Nz.d)().websocketUrl) try {
-             (0, Yz.L)().leaveGame(zz)
+           if (null !== (0, Wv.c)().websocketUrl) try {
+             (0, fv.B)().leaveGame(vv)
```

#### 260. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2667` → after: `L2948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2948) · [Before (L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2667)

```diff
-             (0, Nz.q)({
+             (0, Wv.o)({
```

#### 261. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2679` → after: `L2960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2960) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2679)

```diff
-         return (0, Yz.t)(zz)
+         return (0, fv.m)(vv)
```

#### 262. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2682` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2963) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2682)

```diff
-         return (0, Yz.q)(zz)
+         return (0, fv.k)(vv)
```

#### 263. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2685` → after: `L2966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2966) · [Before (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2685)

```diff
-         return (0, Yz.y)(zz)
+         return (0, fv.q)(vv)
```

#### 264. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2688-L2689` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L2969) · [Before (L2688-L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2688-L2689)

```diff
-     var ct = sz(1279),
-       jt = sz(40005);
+     var tz = Pv(40201);
```

#### 265. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2737-L2748` → after: `L3017-L3028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3017-L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3017-L3028) · [Before (L2737-L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2737-L2748)

```diff
-       return Mt((await sz.e(201).then((() => sz(33845)))).averageColors)
-     }
-     var Qt = sz(4432),
-       kt = sz(4436),
-       it = sz(39773),
-       Lt = sz(35796),
-       lt = sz(39918),
-       nt = sz(577),
-       qt = sz(36449),
-       St = sz(574),
-       Vt = sz(321),
-       Rt = sz(39901);
+       return Qz((await Pv.e(201).then((() => Pv(33871)))).averageColors)
+     }
+     var Lz = Pv(4535),
+       Hz = Pv(4542),
+       Mz = Pv(39956),
+       yz = Pv(35847),
+       Bz = Pv(40114),
+       Jz = Pv(618),
+       Ez = Pv(36554),
+       oz = Pv(609),
+       bz = Pv(312),
+       rz = Pv(40087);
```

#### 266. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2752` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3032) · [Before (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2752)

```diff
-       mobTypes: nt.l,
+       mobTypes: Jz.q,
```

#### 267. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2754-L2755` → after: `L3034-L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3034-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3034-L3035) · [Before (L2754-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2754-L2755)

```diff
-       mobAiStates: nt.i,
-       playerPoses: St.r
+       mobAiStates: Jz.o,
+       playerPoses: oz.p
```

#### 268. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2757-L2765` → after: `L3037-L3045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3037-L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3037-L3045) · [Before (L2757-L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2757-L2765)

```diff
-     var zs = sz(39887),
-       ts = sz(40013),
-       ss = sz(40021),
-       Fs = sz(40026),
-       Ws = sz(3145),
-       Xs = sz(38455),
-       Os = sz(4450),
-       os = sz(2273);
-     const vs = os.x.KeysDisabled | os.x.LookFrozen | os.x.ClicksSuppressed,
+     var vP = Pv(40078),
+       zP = Pv(40209),
+       PP = Pv(40217),
+       hP = Pv(40221),
+       SP = Pv(3218),
+       eP = Pv(38573),
+       gP = Pv(4561),
+       pP = Pv(2304);
+     const dP = pP.u.KeysDisabled | pP.u.LookFrozen | pP.u.ClicksSuppressed,
```

#### 269. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2767` → after: `L3047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3047) · [Before (L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2767)

```diff
-     var Ks = (0, Fs.c)("resumingConn");
+     var lP = (0, hP.b)("resumingConn");
```

#### 270. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2774` → after: `L3054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3054) · [Before (L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2774)

```diff
-         }), this.drops = 0, this.session = new Xs.d({
+         }), this.drops = 0, this.session = new eP.c({
```

#### 271. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2784` → after: `L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3064) · [Before (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2784)

```diff
-             zz.Zm(tz), (0, Os.k)(vs, tz ? vs : 0, "reconnectFreeze")
+             vv.ZY(zv), (0, gP.g)(dP, zv ? dP : 0, "reconnectFreeze")
```

#### 272. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2795` → after: `L3075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3075) · [Before (L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2795)

```diff
-         return (0, ss.c)(this, Ks)[Ks]
+         return (0, PP.e)(this, lP)[lP]
```

#### 273. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2810` → after: `L3090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3090) · [Before (L2810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2810)

```diff
-         0 !== zz && (zz === (0, ss.c)(this, Ks)[Ks] ? ((0, ss.c)(this, Ks)[Ks] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = zz))
+         0 !== vv && (vv === (0, PP.e)(this, lP)[lP] ? ((0, PP.e)(this, lP)[lP] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = vv))
```

#### 274. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2813` → after: `L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3093) · [Before (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2813)

```diff
-         this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, ss.c)(this, Ks)[Ks] = 0, this.session.onConnectionLost(zz)
+         this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, PP.e)(this, lP)[lP] = 0, this.session.onConnectionLost(vv)
```

#### 275. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2819` → after: `L3099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3099) · [Before (L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2819)

```diff
-         this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, ss.c)(this, Ks)[Ks] = 0, this.session.end()
+         this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, PP.e)(this, lP)[lP] = 0, this.session.end()
```

#### 276. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2860` → after: `L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3140) · [Before (L2860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2860)

```diff
-         this.abortAttempt(new jz.t), sz || this.shell.releaseSeat(zz)
+         this.abortAttempt(new tv.p), Pv || this.shell.releaseSeat(vv)
```

#### 277. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2867` → after: `L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3147) · [Before (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2867)

```diff
-           (0, ss.c)(this, Ks)[Ks] = zz.conn, this.session.onResuming()
+           (0, PP.e)(this, lP)[lP] = vv.conn, this.session.onResuming()
```

#### 278. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2871` → after: `L3151-L3157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3151-L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3151-L3157) · [Before (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2871)

```diff
-     var Ns = sz(38462),
+     var WP = Pv(38579),
+       wP = Pv(40226),
+       aP = Pv(36024),
+       sP = Pv(36016),
+       CP = Pv(4786),
+       iP = Pv(4174),
+       cP = Pv(3026),
```

#### 279. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2873-L2893` → after: `L3159-L3174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3159-L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3159-L3174) · [Before (L2873-L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2873-L2893)

```diff
-       ws = sz(35974),
-       Ds = sz(35972),
-       gs = sz(4656),
-       Hs = sz(4057),
-       Bs = sz(2955),
-       Ps = sz(39847),
-       rs = sz(607),
-       Ys = sz(4142),
-       xs = sz(44),
-       ms = sz(40033),
-       Is = sz(40057),
-       Cs = sz(4086),
-       es = sz(2277),
-       Zs = sz(1571),
-       Gs = sz(1608),
-       Ts = sz(1269),
- ... (5 more removed lines; see GitHub link above)
+       mP = Pv(644),
+       jP = Pv(39095),
+       fP = Pv(4255),
+       FP = Pv(39),
+       YP = Pv(40235),
+       nP = Pv(40273),
+       OP = Pv(4198),
+       DP = Pv(2306),
+       KP = Pv(1610),
+       VP = Pv(1630),
+       UP = Pv(1272),
+       RP = Pv(86),
+       xP = Pv(2642),
+       tP = Pv(2312),
+       qP = Pv(4555);
+     const IP = new Set([Lz.Bb.KeyDown, Lz.Bb.MouseMove, Lz.Bb.MouseDown, Lz.Bb.Wheel, Lz.Bb.TouchStart, Lz.Bb.TouchMove]);
```

#### 280. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2896` → after: `L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3177) · [Before (L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2896)

```diff
-       return (zz.shiftKey ? Qt.xb.Shift : 0) | (zz.ctrlKey ? Qt.xb.Ctrl : 0) | (zz.altKey ? Qt.xb.Alt : 0) | (zz.metaKey ? Qt.xb.Meta : 0) | ("repeat" in zz && zz.repeat ? Qt.xb.Repeat : 0) | (zz.isTrusted ? 0 : Qt.xb.Untrusted)
+       return (vv.shiftKey ? Lz.Pb.Shift : 0) | (vv.ctrlKey ? Lz.Pb.Ctrl : 0) | (vv.altKey ? Lz.Pb.Alt : 0) | (vv.metaKey ? Lz.Pb.Meta : 0) | ("repeat" in vv && vv.repeat ? Lz.Pb.Repeat : 0) | (vv.isTrusted ? 0 : Lz.Pb.Untrusted)
```

#### 281. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2900` → after: `L3181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3181) · [Before (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2900)

```diff
-       return "touchOnly" !== (0, cs.c)() && "function" === typeof zz.requestPointerLock
+       return "touchOnly" !== (0, RP.b)() && "function" === typeof vv.requestPointerLock
```

#### 282. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2904` → after: `L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3185) · [Before (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2904)

```diff
-       return 0 === zz.button ? zz.altKey ? Ms.n["Alt+Left Click"] : Ms.n.Mouse1 : 1 === zz.button ? Ms.n.Mouse2 : Ms.n.Mouse3
+       return 0 === vv.button ? vv.altKey ? qP.i["Alt+Left Click"] : qP.i.Mouse1 : 1 === vv.button ? qP.i.Mouse2 : qP.i.Mouse3
```

#### 283. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2920` → after: `L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3201) · [Before (L2920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2920)

```diff
-     function as(zz) {
+     function BP(vv) {
```

#### 284. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2928` → after: `L3209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3209) · [Before (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2928)

```diff
-             (0, Gs.r)(zz) || sz(zz)
+             (0, VP.s)(vv) || Pv(vv)
```

#### 285. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2938` → after: `L3219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3219) · [Before (L2938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2938)

```diff
-         Oz = (zz, sz, Fz, Wz, Xz) => (!(0, ys.c)() || !ds.has(zz)) && (tz(zz, sz, Fz, Wz, Xz), !0),
+         gv = (vv, Pv, hv, Sv, ev) => (!(0, tP.e)() || !IP.has(vv)) && (zv(vv, Pv, hv, Sv, ev), !0),
```

#### 286. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2940` → after: `L3221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3221) · [Before (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2940)

```diff
-         vz = (0, As.d)(),
+         dv = (0, xP.b)(),
```

#### 287. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2942` → after: `L3223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3223) · [Before (L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2942)

```diff
-           zz.ctrlKey && sz.ctrlCombosAreGames() && !(0, Os.i)(zz.target) && zz.preventDefault()
+           vv.ctrlKey && Pv.ctrlCombosAreGames() && !(0, gP.e)(vv.target) && vv.preventDefault()
```

#### 288. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2945` → after: `L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3226) · [Before (L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2945)

```diff
-           sz.inspect(zz, Fz, !1), tz(Qt.qb.KeyUp, Fz, 0, 0, (0, es.p)(Wz, zz.timeStamp)), sz.keyReleased(Fz)
+           Pv.inspect(vv, hv, !1), zv(Lz.Bb.KeyUp, hv, 0, 0, (0, DP.s)(Sv, vv.timeStamp)), Pv.keyReleased(hv)
```

#### 289. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2955` → after: `L3236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3236) · [Before (L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2955)

```diff
-             for (const [tz, sz] of bz) bz.delete(tz), Nz(zz, tz, sz) || (uz.delete(tz), Kz(zz, Ms.n[tz], hs(zz)))
+             for (const [zv, Pv] of wv) wv.delete(zv), Wv(vv, zv, Pv) || (Tv.delete(zv), lv(vv, qP.i[zv], QP(vv)))
```

#### 290. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2967-L2968` → after: `L3248-L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3248-L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3248-L3249) · [Before (L2967-L2968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2967-L2968)

```diff
-           const Fz = (as(zz.clientX - gz) | as(zz.clientY - Hz) << 16) >>> 0;
-           Oz(Qt.qb.MouseMove, Qt.Ab.Point, tz, sz, Fz)
+           const hv = (BP(vv.clientX - Cv) | BP(vv.clientY - iv) << 16) >>> 0;
+           gv(Lz.Bb.MouseMove, Lz.Sb.Point, zv, Pv, hv)
```

#### 291. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2973` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3254) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2973)

```diff
-         xz && (xz = !1, sz.viewShown() && (0, It.Q)())
+         fv && (fv = !1, Pv.viewShown() && (0, Dz.K)())
```

#### 292. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2978` → after: `L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3259) · [Before (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2978)

```diff
-         "Escape" === zz.key ? (0, It.K)(!0) : zz.repeat || (0, Os.i)(zz.target) || (xz = !0, clearTimeout(mz), mz = window.setTimeout(Jz, 0))
+         "Escape" === vv.key ? (0, Dz.E)(!0) : vv.repeat || (0, gP.e)(vv.target) || (fv = !0, clearTimeout(Fv), Fv = window.setTimeout(Yv, 0))
```

#### 293. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2981` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3262) · [Before (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2981)

```diff
-         const tz = Ms.n[zz.code];
+         const zv = qP.i[vv.code];
```

#### 294. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2983-L2984` → after: `L3264-L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3264-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3264-L3265) · [Before (L2983-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2983-L2984)

```diff
-         const Fz = (0, Os.i)(zz.target);
-         Fz || !sz.prevents(tz) && !is.has(zz.code) || zz.preventDefault(), zz.repeat || sz.inspect(zz, tz, !0), Oz(Qt.qb.KeyDown, tz, 0, 0, (0, es.p)(hs(zz), zz.timeStamp)) && uz.set(zz.code, tz), Fz || sz.keyPressed(tz)
+         const hv = (0, gP.e)(vv.target);
+         hv || !Pv.prevents(zv) && !LP.has(vv.code) || vv.preventDefault(), vv.repeat || Pv.inspect(vv, zv, !0), gv(Lz.Bb.KeyDown, zv, 0, 0, (0, DP.s)(QP(vv), vv.timeStamp)) && Tv.set(vv.code, zv), hv || Pv.keyPressed(zv)
```

#### 295. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2989-L2990` → after: `L3270-L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3270-L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3270-L3271) · [Before (L2989-L2990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2989-L2990)

```diff
-         "Escape" === zz.key && (0, It.K)(!1), Uz(zz), uz.delete(zz.code), bz.delete(zz.code), Dz(zz);
-         const tz = Ms.n[zz.code];
+         "Escape" === vv.key && (0, Dz.E)(!1), Nv(vv), Tv.delete(vv.code), wv.delete(vv.code), sv(vv);
+         const zv = qP.i[vv.code];
```

#### 296. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2996` → after: `L3277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3277) · [Before (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L2996)

```diff
-         "mouse" === Pz && rz() ? Yz(zz, zz.movementX, zz.movementY) : oz() ? Oz(Qt.qb.MouseMove, Qt.Ab.Stamped, zz.movementX, zz.movementY, (0, es.p)(0, zz.timeStamp)) : Oz(Qt.qb.MouseMove, 0, zz.movementX, zz.movementY, 0)
+         "mouse" === Gv && mv() ? jv(vv, vv.movementX, vv.movementY) : pv() ? gv(Lz.Bb.MouseMove, Lz.Sb.Stamped, vv.movementX, vv.movementY, (0, DP.s)(0, vv.timeStamp)) : gv(Lz.Bb.MouseMove, 0, vv.movementX, vv.movementY, 0)
```

#### 297. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3004` → after: `L3285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3285) · [Before (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3004)

```diff
-         if ((0, ys.c)()) return;
+         if ((0, tP.e)()) return;
```

#### 298. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3007` → after: `L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3288) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3007)

```diff
-         if (!oz() && (0, It.P)() && (0, It.i)() && (Gz = !0, !Zz)) return void(Iz |= Fz);
+         if (!pv() && (0, Dz.J)() && (0, Dz.g)() && (Vv = !0, !Kv)) return void(nv |= hv);
```

#### 299. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3010` → after: `L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3291) · [Before (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3010)

```diff
-         void 0 !== Wz && (ez[zz.button] = Wz, sz.inspect(zz, Wz, !0)), rz() && Yz(zz, 0, 0), tz(Qt.qb.MouseDown, zz.button, zz.clientX, zz.clientY, (0, es.p)(hs(zz), zz.timeStamp)), Cz |= Fz, void 0 !== Wz && sz.keyPressed(Wz)
+         void 0 !== Sv && (Dv[vv.button] = Sv, Pv.inspect(vv, Sv, !0)), mv() && jv(vv, 0, 0), zv(Lz.Bb.MouseDown, vv.button, vv.clientX, vv.clientY, (0, DP.s)(QP(vv), vv.timeStamp)), Ov |= hv, void 0 !== Sv && Pv.keyPressed(Sv)
```

#### 300. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3017-L3018` → after: `L3298-L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3298-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3298-L3299) · [Before (L3017-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3017-L3018)

```diff
-         const Oz = zz.button <= 2 ? null !== (Fz = ez[zz.button]) && void 0 !== Fz ? Fz : ks(zz) : void 0;
-         void 0 !== Oz && sz.inspect(zz, Oz, !1), tz(Qt.qb.MouseUp, zz.button, zz.clientX, zz.clientY, (0, es.p)(hs(zz), zz.timeStamp)), void 0 !== Oz && sz.keyReleased(Oz)
+         const gv = vv.button <= 2 ? null !== (hv = Dv[vv.button]) && void 0 !== hv ? hv : AP(vv) : void 0;
+         void 0 !== gv && Pv.inspect(vv, gv, !1), zv(Lz.Bb.MouseUp, vv.button, vv.clientX, vv.clientY, (0, DP.s)(QP(vv), vv.timeStamp)), void 0 !== gv && Pv.keyReleased(gv)
```

#### 301. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3025` → after: `L3306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3306) · [Before (L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3025)

```diff
-         (oz() || (0, It.r)() && (0, Ts.o)()) && (zz.ctrlKey || vz && !document.fullscreenElement) && zz.preventDefault()
+         (pv() || (0, Dz.m)() && (0, UP.u)()) && (vv.ctrlKey || dv && !document.fullscreenElement) && vv.preventDefault()
```

#### 302. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3028` → after: `L3309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3309) · [Before (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3028)

```diff
-         Tz(zz), Dz(zz), Oz(Qt.qb.Wheel, zz.deltaMode, zz.deltaX, zz.deltaY, 0)
+         Uv(vv), sv(vv), gv(Lz.Bb.Wheel, vv.deltaMode, vv.deltaX, vv.deltaY, 0)
```

#### 303. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3040` → after: `L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3321) · [Before (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3040)

```diff
-       jz((0, It.r)()), Fz.push((0, It.A)(jz)), Fz.push((() => {
+       xv((0, Dz.m)()), hv.push((0, Dz.t)(xv)), hv.push((() => {
```

#### 304. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3054-L3055` → after: `L3335-L3336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3335-L3336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3335-L3336) · [Before (L3054-L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3054-L3055)

```diff
-           const Fz = (0, es.p)(hs(sz), sz.timeStamp);
-           zz !== Qt.qb.TouchStart && zz !== Qt.qb.TouchMove || ((zz, sz) => {
+           const hv = (0, DP.s)(QP(Pv), Pv.timeStamp);
+           vv !== Lz.Bb.TouchStart && vv !== Lz.Bb.TouchMove || ((vv, Pv) => {
```

#### 305. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3061` → after: `L3342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3342) · [Before (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3061)

```diff
-                 zz || (hz.delete(Wz), tz(Qt.qb.TouchCancel, Wz, 0, 0, sz))
+                 vv || (Zv.delete(Sv), zv(Lz.Bb.TouchCancel, Sv, 0, 0, Pv))
```

#### 306. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3067-L3068` → after: `L3348-L3349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3348-L3349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3348-L3349) · [Before (L3067-L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3067-L3068)

```diff
-             if (zz === Qt.qb.TouchStart && Mz(sz) && yz.add(sz.identifier), yz.has(sz.identifier)) {
-               zz !== Qt.qb.TouchEnd && zz !== Qt.qb.TouchCancel || yz.delete(sz.identifier);
+             if (vv === Lz.Bb.TouchStart && Iv(Pv) && qv.add(Pv.identifier), qv.has(Pv.identifier)) {
+               vv !== Lz.Bb.TouchEnd && vv !== Lz.Bb.TouchCancel || qv.delete(Pv.identifier);
```

#### 307. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3073` → after: `L3354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3354) · [Before (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3073)

```diff
-             zz === Qt.qb.TouchStart ? oz && hz.add(Xz) : zz !== Qt.qb.TouchMove && hz.delete(Xz)
+             vv === Lz.Bb.TouchStart ? pv && Zv.add(ev) : vv !== Lz.Bb.TouchMove && Zv.delete(ev)
```

#### 308. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3076` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3357) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3076)

```diff
-         kz = Qz(Qt.qb.TouchStart);
+         Lv = Av(Lz.Bb.TouchStart);
```

#### 309. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3078` → after: `L3359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3359) · [Before (L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3078)

```diff
-         zz.preventDefault(), (0, ys.c)() || (sz.touchStarting(), kz(zz))
+         vv.preventDefault(), (0, tP.e)() || (Pv.touchStarting(), Lv(vv))
```

#### 310. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3081` → after: `L3362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3362) · [Before (L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3081)

```diff
-       }), Wz(zz, "touchmove", Qz(Qt.qb.TouchMove), Xz), Wz(zz, "touchend", Qz(Qt.qb.TouchEnd), Xz), Wz(zz, "touchcancel", Qz(Qt.qb.TouchCancel), Xz);
+       }), Sv(vv, "touchmove", Av(Lz.Bb.TouchMove), ev), Sv(vv, "touchend", Av(Lz.Bb.TouchEnd), ev), Sv(vv, "touchcancel", Av(Lz.Bb.TouchCancel), ev);
```

#### 311. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3084` → after: `L3365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3365) · [Before (L3084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3084)

```diff
-           Oz(zz, iz(tz.pointerId), tz.clientX - gz, tz.clientY - Hz, (0, es.p)(hs(tz), tz.timeStamp))
+           gv(vv, Hv(zv.pointerId), zv.clientX - Cv, zv.clientY - iv, (0, DP.s)(QP(zv), zv.timeStamp))
```

#### 312. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3087` → after: `L3368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3368) · [Before (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3087)

```diff
-         Pz = tz.pointerType, "mouse" === tz.pointerType && tz.target !== zz && sz.viewShown() && (0, It.S)()
+         Gv = zv.pointerType, "mouse" === zv.pointerType && zv.target !== vv && Pv.viewShown() && (0, Dz.O)()
```

#### 313. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3089` → after: `L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3370) · [Before (L3089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3089)

```diff
-         "pen" === zz.pointerType && 0 === zz.button && (0, It.r)() && (0, Ts.o)() && (zz.preventDefault(), (0, ys.c)() || (Az.set(zz.pointerId, {
+         "pen" === vv.pointerType && 0 === vv.button && (0, Dz.m)() && (0, UP.u)() && (vv.preventDefault(), (0, tP.e)() || (tv.set(vv.pointerId, {
```

#### 314. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3093` → after: `L3374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3374) · [Before (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3093)

```diff
-         }), sz.touchStarting(), Lz(Qt.qb.TouchStart, zz)))
+         }), Pv.touchStarting(), Mv(Lz.Bb.TouchStart, vv)))
```

#### 315. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3097` → after: `L3378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3378) · [Before (L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3097)

```diff
-         Pz = zz.pointerType, Az.has(zz.pointerId) && Lz(Qt.qb.TouchMove, zz), "mouse" !== zz.pointerType && rz() && Yz(zz, 0, 0)
+         Gv = vv.pointerType, tv.has(vv.pointerId) && Mv(Lz.Bb.TouchMove, vv), "mouse" !== vv.pointerType && mv() && jv(vv, 0, 0)
```

#### 316. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3102` → after: `L3383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3383) · [Before (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3102)

```diff
-       Wz(window, "pointerup", lz(Qt.qb.TouchEnd), Xz), Wz(window, "pointercancel", lz(Qt.qb.TouchCancel), Xz);
+       Sv(window, "pointerup", yv(Lz.Bb.TouchEnd), ev), Sv(window, "pointercancel", yv(Lz.Bb.TouchCancel), ev);
```

#### 317. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3109` → after: `L3390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3390) · [Before (L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3109)

```diff
-           null !== zz && tz(Qt.qb.Resize, 0, zz.cssWidth, zz.cssHeight, (0, es.j)(zz.renderScale)), Bz(), sz.resized(), 0 === nz && (nz = requestAnimationFrame(az))
+           null !== vv && zv(Lz.Bb.Resize, 0, vv.cssWidth, vv.cssHeight, (0, DP.m)(vv.renderScale)), cv(), Pv.resized(), 0 === Bv && (Bv = requestAnimationFrame(Jv))
```

#### 318. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3114` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3395) · [Before (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3114)

```diff
-         zz.isTrusted && (tz(Qt.qb.Focus, 0, 0, 0, 0), sz.viewShown() && (0, It.S)())
+         vv.isTrusted && (zv(Lz.Bb.Focus, 0, 0, 0, 0), Pv.viewShown() && (0, Dz.O)())
```

#### 319. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3119` → after: `L3400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3400) · [Before (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3119)

```diff
-           (0, It.K)(!1), Iz = 0
+           (0, Dz.E)(!1), nv = 0
```

#### 320. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3127` → after: `L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3408) · [Before (L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3127)

```diff
-         Sz(), (0, It.o)();
+         ov(), (0, Dz.j)();
```

#### 321. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3133` → after: `L3414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3414) · [Before (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3133)

```diff
-           for (const [sz, Fz] of Az) tz(Qt.qb.TouchCancel, iz(sz), Fz.x, Fz.y, (0, es.p)(0, zz));
+           for (const [Pv, hv] of tv) zv(Lz.Bb.TouchCancel, Hv(Pv), hv.x, hv.y, (0, DP.s)(0, vv));
```

#### 322. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3135` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3416) · [Before (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3135)

```diff
-         })(Fz.timeStamp), tz(Qt.qb.Blur, Qt.s.KeepTouches, 0, 0, 0)), vz && Fz.isTrusted && (clearTimeout(pz), pz = window.setTimeout((() => {
+         })(hv.timeStamp), zv(Lz.Bb.Blur, Lz.q.KeepTouches, 0, 0, 0)), dv && hv.isTrusted && (clearTimeout(kv), kv = window.setTimeout((() => {
```

#### 323. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3141` → after: `L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3422) · [Before (L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3141)

```diff
-           document.activeElement instanceof HTMLIFrameElement && (0, Ts.o)() && sz.viewShown() && zz.focus({
+           document.activeElement instanceof HTMLIFrameElement && (0, UP.u)() && Pv.viewShown() && vv.focus({
```

#### 324. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3150` → after: `L3431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3431) · [Before (L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3150)

```diff
-         vz && tz.isTrusted && !document.hasFocus() && (0, Ts.o)() && sz.viewShown() && (window.focus(), zz.focus({
+         dv && zv.isTrusted && !document.hasFocus() && (0, UP.u)() && Pv.viewShown() && (window.focus(), vv.focus({
```

#### 325. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3154` → after: `L3435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3435) · [Before (L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3154)

```diff
-         document.hidden ? (tz(Qt.qb.Blur, 0, 0, 0, 0), Vz()) : document.hasFocus() && tz(Qt.qb.Focus, 0, 0, 0, 0)
+         document.hidden ? (zv(Lz.Bb.Blur, 0, 0, 0, 0), bv()) : document.hasFocus() && zv(Lz.Bb.Focus, 0, 0, 0, 0)
```

#### 326. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3157-L3158` → after: `L3438-L3439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3438-L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3438-L3439) · [Before (L3157-L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3157-L3158)

```diff
-       }), Fz.push((0, ys.g)((() => {
-         Sz(), tz(Qt.qb.Blur, Qt.s.Release, 0, 0, 0), sz.keysReleased(), wz(), Cz = 0, Vz(), tz(Qt.qb.Joystick, 0, 0, 0, 0), document.hasFocus() && tz(Qt.qb.Focus, 0, 0, 0, 0)
+       }), hv.push((0, tP.j)((() => {
+         ov(), zv(Lz.Bb.Blur, Lz.q.Release, 0, 0, 0), Pv.keysReleased(), av(), Ov = 0, bv(), zv(Lz.Bb.Joystick, 0, 0, 0, 0), document.hasFocus() && zv(Lz.Bb.Focus, 0, 0, 0, 0)
```

#### 327. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3161` → after: `L3442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3442) · [Before (L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3161)

```diff
-         Ez = () => fz && !(0, It.r)() ? Qt.Zb.Lockless : Qt.Zb.Released,
+         uv = () => Xv && !(0, Dz.m)() ? Lz.tc.Lockless : Lz.tc.Released,
```

#### 328. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3163` → after: `L3444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3444) · [Before (L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3163)

```diff
-           oz() && (Zz = !1, Gz = !1), tz(Qt.qb.PointerLock, oz() ? Qt.Zb.Locked : Ez(), 0, 0, 0), (0, It.O)(oz())
+           pv() && (Kv = !1, Vv = !1), zv(Lz.Bb.PointerLock, pv() ? Lz.tc.Locked : uv(), 0, 0, 0), (0, Dz.H)(pv())
```

#### 329. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3168` → after: `L3449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3449) · [Before (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3168)

```diff
-         Zz ||= Gz, Gz = !1, (0, It.x)()
+         Kv ||= Vv, Vv = !1, (0, Dz.q)()
```

#### 330. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3171-L3173` → after: `L3452-L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3452-L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3452-L3454) · [Before (L3171-L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3171-L3173)

```diff
-       }), fz && Fz.push((0, It.A)((() => {
-         tz(Qt.qb.PointerLock, Ez(), 0, 0, 0)
-       }))), qz(), tz(document.hasFocus() ? Qt.qb.Focus : Qt.qb.Blur, 0, 0, 0, 0), zt(), () => {
+       }), Xv && hv.push((0, Dz.t)((() => {
+         zv(Lz.Bb.PointerLock, uv(), 0, 0, 0)
+       }))), Ev(), zv(document.hasFocus() ? Lz.Bb.Focus : Lz.Bb.Blur, 0, 0, 0, 0), vz(), () => {
```

#### 331. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3177-L3179` → after: `L3458-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3458-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3458-L3460) · [Before (L3177-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3177-L3179)

```diff
-     var Ss = sz(8771),
-       Vs = sz(8757),
-       Rs = sz(1917);
+     var EP = Pv(8924),
+       oP = Pv(8914),
+       bP = Pv(1938);
```

#### 332. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3185` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3466) · [Before (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3185)

```diff
-       return `${Rs.e}${zz}`
+       return `${bP.d}${vv}`
```

#### 333. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3192` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3473) · [Before (L3192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3192)

```diff
-         const zz = "string" === typeof sz ? Ms.n[sz] : void 0;
+         const vv = "string" === typeof Pv ? qP.i[Pv] : void 0;
```

#### 334. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3200` → after: `L3481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3481) · [Before (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3200)

```diff
-         for (const [zz, tz] of Object.entries(Ms.f)) this.keys.set(zz, tz);
+         for (const [vv, zv] of Object.entries(qP.e)) this.keys.set(vv, zv);
```

#### 335. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3215` → after: `L3496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3496) · [Before (L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3215)

```diff
-             Xz = Array.isArray(Wz) ? sF(Wz) : Ms.f[sz];
+             ev = Array.isArray(Sv) ? zh(Sv) : qP.e[Pv];
```

#### 336. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3222-L3223` → after: `L3503-L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3503-L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3503-L3504) · [Before (L3222-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3222-L3223)

```diff
-           sz(Qt.qb.Binding, 0, 0, 0, Fz | Qt.o.Clear << 8);
-           for (const Xz of [...tz, ...null !== (Wz = Ms.j[zz]) && void 0 !== Wz ? Wz : []]) {
+           Pv(Lz.Bb.Binding, 0, 0, 0, hv | Lz.p.Clear << 8);
+           for (const ev of [...zv, ...null !== (Sv = qP.f[vv]) && void 0 !== Sv ? Sv : []]) {
```

#### 337. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3225` → after: `L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3506) · [Before (L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3225)

```diff
-             sz(Qt.qb.Binding, Xz, 0, 0, Fz | Qt.o.Add << 8)
+             Pv(Lz.Bb.Binding, ev, 0, 0, hv | Lz.p.Add << 8)
```

#### 338. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3232-L3233` → after: `L3513-L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3513-L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3513-L3514) · [Before (L3232-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3232-L3233)

```diff
-         for (const Fz of Ms.q)
-           for (const tz of null !== (zz = this.keys.get(Ms.b[Fz])) && void 0 !== zz ? zz : []) {
+         for (const hv of qP.l)
+           for (const zv of null !== (vv = this.keys.get(qP.b[hv])) && void 0 !== vv ? vv : []) {
```

#### 339. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3239` → after: `L3520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3520) · [Before (L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3239)

```diff
-           for (const zz of null !== (tz = this.keys.get(Fz)) && void 0 !== tz ? tz : []) {
+           for (const vv of null !== (zv = this.keys.get(hv)) && void 0 !== zv ? zv : []) {
```

#### 340. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3249` → after: `L3530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3530) · [Before (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3249)

```diff
-             for (const tz of null !== (sz = this.keys.get(zz)) && void 0 !== sz ? sz : []) {
+             for (const zv of null !== (Pv = this.keys.get(vv)) && void 0 !== Pv ? Pv : []) {
```

#### 341. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3256-L3257` → after: `L3537-L3538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3537-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3537-L3538) · [Before (L3256-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3256-L3257)

```diff
-     var WF = sz(4438),
-       XF = sz(36071);
+     var hh = Pv(4550),
+       Sh = Pv(36126);
```

#### 342. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3261` → after: `L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3542) · [Before (L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3261)

```diff
-       return "inGame" === nz.b.get("gameState") && !(0, Zs.v)()
+       return "inGame" === Jv.c.get("gameState") && !(0, KP.p)()
```

#### 343. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3269` → after: `L3550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3550) · [Before (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3269)

```diff
-         return sz ? `${zz} ${sz}` : String(zz)
+         return Pv ? `${vv} ${Pv}` : String(vv)
```

#### 344. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3275` → after: `L3556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3556) · [Before (L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3275)

```diff
-       zz === Qt.X.InputAction && Fz === Qt.mb && KF.push(tz.getUint32(sz, !0))
+       vv === Lz.$.InputAction && hv === Lz.wb && Nh.push(zv.getUint32(Pv, !0))
```

#### 345. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3277-L3279` → after: `L3558-L3560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3558-L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3558-L3560) · [Before (L3277-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3277-L3279)

```diff
-     var NF = sz(40080),
-       bF = sz(1182),
-       wF = sz(36263);
+     var Th = Pv(40295),
+       Wh = Pv(1177),
+       wh = Pv(36360);
```

#### 346. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3295` → after: `L3576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3576) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3295)

```diff
-       return (null !== (tz = null === (sz = DF[Wz]) || void 0 === sz ? void 0 : sz[Xz]) && void 0 !== tz ? tz : zz).replace(/\{\{(\w+)\}\}/g, ((zz, tz) => {
+       return (null !== (zv = null === (Pv = ah[Sv]) || void 0 === Pv ? void 0 : Pv[ev]) && void 0 !== zv ? zv : vv).replace(/\{\{(\w+)\}\}/g, ((vv, zv) => {
```

#### 347. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3297` → after: `L3578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3578) · [Before (L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3297)

```diff
-         return null !== (sz = Fz[tz]) && void 0 !== sz ? sz : zz
+         return null !== (Pv = hv[zv]) && void 0 !== Pv ? Pv : vv
```

#### 348. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3312` → after: `L3593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3593) · [Before (L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3312)

```diff
-         zz.href = wF.c, zz.target = "_blank", zz.rel = "noreferrer", zz.style.color = "#8ab4ff", zz.textContent = gF("wasmScreens:reportOnDiscord"), Fz.append(zz)
+         vv.href = wh.d, vv.target = "_blank", vv.rel = "noreferrer", vv.style.color = "#8ab4ff", vv.textContent = sh("wasmScreens:reportOnDiscord"), hv.append(vv)
```

#### 349. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3334` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3615) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3334)

```diff
-     var BF = sz(39908);
+     var ih = Pv(40108);
```

#### 350. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3337-L3340` → after: `L3618-L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3618-L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3618-L3621) · [Before (L3337-L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3337-L3340)

```diff
-     var YF = sz(3313);
-     var xF = sz(39831),
-       mF = sz(616),
-       JF = sz(17);
+     var mh = Pv(3402);
+     var jh = Pv(40021),
+       fh = Pv(646),
+       Fh = Pv(11);
```

#### 351. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3343` → after: `L3624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3624) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3343)

```diff
-       const sz = JF.ab.encode(tz);
+       const Pv = Fh.ob.encode(zv);
```

#### 352. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3345` → after: `L3626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3626) · [Before (L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3345)

```diff
-         let sz = tz >= 0 ? 2 * tz : 2 * -tz - 1;
+         let Pv = zv >= 0 ? 2 * zv : 2 * -zv - 1;
```

#### 353. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3353` → after: `L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3634) · [Before (L3353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3353)

```diff
-       const zz = ["length", 0, null, "q", "e", "resolv", "then", "postCo", "okies", 2, 1, "string", "Invalid data key provided (not type string)", "Invalid data key provided (empty string)", "Serialization error for data '", "': ", void 0, 73, "b", 6, 5, 32, 3, 4, "c", 18];
+       const vv = ["length", 1, 0, 2, "c", 8, 42, "f", "d", 227, 201, "i", 236, "b", 12, 166, 5, 7, 4, 3, "v", void 0, 174, 223, 53, 1023, 65536, "a", 10, 55296, 56320, "e", 6, 63, 128, 213, 192, 25, "Invalid byte index", 190, 255, 224, 31, "Invalid continuation byte", 240, 15, 18 … [truncated]
```

#### 354. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3356-L3360` → after: `L3637-L3650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3637-L3650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3637-L3650) · [Before (L3356-L3360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3356-L3360)

```diff
-       const Fz = (zz[1], JF[zz[3]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
-         Wz = (zz[1], JF[zz[3]])("QkFCWUxPTg=="),
-         Xz = (zz[1], JF[zz[3]])("QW5kZXNpdGU="),
-         Oz = (zz[1], JF[zz[3]])("U21vb3RoIEdyYW5pdGU="),
-         oz = (zz[1], JF[zz[3]])("RGlvcml0ZQ=="),
+       "lZzjsh" in zv && function(...zv) {
+         lv(zv[vv[0]] = vv[2], zv[vv[13]] = function(...zv) {
+           if (lv(zv[vv[0]] = vv[1], zv[vv[1]] = zv[vv[2]].length), zv[vv[1]] < vv[3]) return vv[2];
+           if (lv(zv[vv[3]] = Math.max(...zv[vv[2]]), zv[vv[4]] = Math.min(...zv[vv[2]])), zv[vv[3]] === zv[vv[4]]) return vv[2];
+           for (lv(zv[vv[8]] = Array(zv[vv[1]] - vv[1]).fill(Number.MAX_SAFE_INTEGER), zv[vv[9]] = Array(zv[vv[1]] - vv[1]).fill(Number.MIN_SAFE_INTEGER), zv[vv[7]] = Math.ceil((zv[vv[3]] - zv[vv[4]]) / (zv[vv[1]] - vv[1])), zv[-vv[6]] = vv[2]), zv[vv[5]] = vv[2]; zv[vv[5]] < zv[v … [truncated]
+           for (lv(zv[vv[11]] = Number.MIN_SAFE_INTEGER, zv[vv[12]] = zv[vv[4]]), zv[-vv[10]] = vv[2]; zv[-vv[10]] < zv[vv[1]] - vv[1]; zv[-vv[10]]++) zv[vv[8]][zv[-vv[10]]] === Number.MAX_SAFE_INTEGER && zv[vv[9]][zv[-vv[10]]] === Number.MIN_SAFE_INTEGER || lv(zv[vv[11]] = Math.m … [truncated]
+           return zv[vv[11]] = Math.max(zv[vv[11]], zv[vv[3]] - zv[vv[12]]), zv[vv[11]]
+         }, console.log(zv[vv[13]]))
+       }();
+       const hv = (0, Fh[vv[20]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
+         Sv = (0, Fh[vv[20]])("QkFCWUxPTg=="),
+         ev = (0, Fh[vv[20]])("QW5kZXNpdGU="),
+         gv = (0, Fh[vv[20]])("U21vb3RoIEdyYW5pdGU="),
+         pv = (0, Fh[vv[20]])("RGlvcml0ZQ=="),
```

#### 355. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3365-L3390` → after: `L3655-L3661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3655-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3655-L3661) · [Before (L3365-L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3365-L3390)

```diff
-             ["postJsonWithMetricsCookiesAndJsonRespons" + zz[4]]: oz
-           }] = await Promise.all([Promise[zz[5] + zz[4]]()[zz[6]]((() => sz(1191))), Promise[zz[5] + zz[4]]()[zz[6]]((() => sz(1120)))]), vz = Oz.getHttpUrlFromWebSocketUrl(tz.endpoint), Uz = tz[zz[7] + zz[8]] === zz[2] ? zz[16] : await tz[zz[7] + zz[8]]();
-           await oz("" + vz + Fz, Wz, {
-             retries: Xz
-           }, Uz)
-         };
-       CF = async (sz, Fz) => {
-         "quSIWNp" in tz && function(...tz) {
-           tz[zz[0]] = zz[1]
-         }();
-         const Wz = function(zz, tz, sz, Fz) {
-           const Wz = [];
-           IF(Wz, zz), IF(Wz, tz), IF(Wz, sz);
-           for (const Xz of Fz) Wz.push(Xz);
-           return Wz
-         }(sz.game, sz.lobby, (zz[1], mF[zz[24]])(), Fz);
- ... (10 more removed lines; see GitHub link above)
+             postJsonWithMetricsCookiesAndJsonResponse: dv
+           }] = await Promise.all([Promise[vv[48] + vv[31]]()[vv[49]](((...hv) => (hv[vv[0]] = vv[2], "DfWh3Q" in zv && function() {
+             ! function(...zv) {
+               function Pv(...zv) {
+                 for (lv(zv[vv[0]] = vv[1], zv[vv[1]] = [], zv[-vv[22]] = vv[2], zv[-vv[23]] = zv[vv[2]].length, zv[vv[24]] = vv[21], zv[vv[16]] = vv[21]); zv[-vv[22]] < zv[-vv[23]];) lv(zv[vv[24]] = zv[vv[2]].charCodeAt(zv[-vv[22]]++), zv[vv[24]] >= vv[29] && zv[vv[24]] <= 56319  … [truncated]
+                 return zv[vv[1]]
+               }
```

#### 356. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3392-L3393` → after: `L3663-L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3663-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3663-L3741) · [Before (L3392-L3393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3392-L3393)

```diff
-       function Kz() {
-         Kz = function() {}
+               function hv(Pv) {
+                 var hv, Sv, ev, gv = Pv.length;
+                 for (lv(hv = -vv[1], Sv = void 0, ev = ""); ++hv < gv;)(Sv = Pv[hv]) > 65535 && lv(Sv -= vv[26], ev += zv[vv[27]](Sv >>> vv[28] & vv[25] | vv[29]), Sv = vv[30] | Sv & vv[25]), ev += zv[vv[27]](Sv);
+                 return ev
+               }
+ 
+               function Sv(...zv) {
+                 if (zv[vv[0]] = vv[1], zv[vv[2]] >= vv[29] && zv[vv[2]] <= 57343) throw Error("Lone surrogate U+" + zv[vv[2]].toString(16).toUpperCase() + " is not a scalar valu" + vv[31])
+               }
+ 
+               function ev(...Pv) {
+                 return Pv[vv[0]] = vv[3], zv[vv[27]](Pv[vv[2]] >> Pv[vv[1]] & vv[33] | vv[34])
+               }
+ 
+               function gv(Pv) {
+                 var hv;
+ ... (63 more added lines; see GitHub link above)
```

#### 357. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3396-L3408` → after: `L3744-L3777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3744-L3777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3744-L3777) · [Before (L3396-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3396-L3408)

```diff
-         if (sz[zz[0]] = zz[1], "vPZqM2" in tz && function(...tz) {
-             tz[zz[0]] = zz[1]
-           }(), (zz[1], JF.E)(), Uz(navigator, Fz) !== zz[16]) {
-           function vz() {
-             var tz;
-             Kz(tz = function(...sz) {
-               if (Kz(sz[zz[0]] = zz[19], sz[zz[19]] = zz[2]), !(sz[zz[20]] < zz[1])) {
-                 if (sz[zz[20]] === zz[1]) return sz[zz[1]].push(sz[zz[10]]);
-                 for (sz[-zz[21]] = sz[zz[9]]; sz[-zz[21]] < sz[zz[22]] && !(sz[zz[23]][sz[-zz[21]]] > sz[zz[20]]); sz[-zz[21]]++) sz[-zz[21]] > sz[zz[9]] && sz[zz[23]][sz[-zz[21]]] === sz[zz[23]][sz[-zz[21]] - zz[10]] || Kz(sz[zz[19]] = Array.from(sz[zz[10]]), sz[zz[19]].push(sz[ … [truncated]
-               }
-             }, console.log((function(...sz) {
-               return Kz(sz[zz[0]] = zz[9], sz[zz[17]] = [], sz[zz[18]] = sz[zz[1]].length, sz[zz[1]].sort(((zz, tz) => zz - tz)), tz(sz[zz[17]], [], zz[1], sz[zz[18]], sz[zz[1]], sz[zz[10]])), sz[zz[17]]
-             })))
+         if (Pv[vv[0]] = vv[2], "FjjtTcY" in zv && function(...zv) {
+             zv[vv[0]] = vv[2];
+             const Pv = require("path"),
+               {
+                 version: hv
+               } = require("../../package"),
+               {
+                 version: Sv
+               } = require("@redacted/enterprise-plugin/package"),
+               {
+                 version: ev
+               } = require("@redacted/components/package"),
+               {
+                 sdkVersion: gv
+               } = require("@redacted/enterprise-plugin");
+             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Pv.resolve(__dirname, vv[53] + vv[54] + vv[55])
+ ... (18 more added lines; see GitHub link above)
```

#### 358. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3410` → after: `L3779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3779) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3410)

```diff
-           return "iaZGvF" in tz && vz(), Xz
+           return "UwDvrpW" in zv && dv(), gv
```

#### 359. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3412` → after: `L3781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3781) · [Before (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3412)

```diff
-         return Uz(window, Wz) === zz[16] ? Oz : oz
+         return pv
```

#### 360. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3414-L3415` → after: `L3783-L3790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3783-L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3783-L3790) · [Before (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3414-L3415)

```diff
-         "KGqjaKD" in tz && function(...tz) {
-           Kz(tz[zz[0]] = zz[1], tz[zz[25]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", tz[zz[18]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", tz[zz[24]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)] … [truncated]
+         "aKVPyc9" in zv && function(...zv) {
+           lv(zv[vv[0]] = vv[2], zv[-vv[61]] = function(...zv) {
+             if (lv(zv[vv[0]] = vv[1], zv[vv[1]] = zv[vv[2]].length), zv[vv[1]] < vv[3]) return vv[2];
+             if (lv(zv[vv[13]] = Math.max(...zv[vv[2]]), zv[vv[19]] = Math.min(...zv[vv[2]])), zv[vv[13]] === zv[vv[19]]) return vv[2];
+             for (lv(zv[vv[8]] = Array(zv[vv[1]] - vv[1]).fill(Number.MAX_SAFE_INTEGER), zv[vv[31]] = Array(zv[vv[1]] - vv[1]).fill(Number.MIN_SAFE_INTEGER), zv[vv[58]] = Math.ceil((zv[vv[13]] - zv[vv[19]]) / (zv[vv[1]] - vv[1])), zv[vv[57]] = vv[2]), zv[-vv[56]] = vv[2]; zv[-vv[5 … [truncated]
+             for (lv(zv[vv[11]] = Number.MIN_SAFE_INTEGER, zv[vv[60]] = zv[vv[19]]), zv[vv[59]] = vv[2]; zv[vv[59]] < zv[vv[1]] - vv[1]; zv[vv[59]]++) zv[vv[8]][zv[vv[59]]] === Number.MAX_SAFE_INTEGER && zv[vv[31]][zv[vv[59]]] === Number.MIN_SAFE_INTEGER || lv(zv[vv[11]] = Math.ma … [truncated]
+             return zv[vv[11]] = Math.max(zv[vv[11]], zv[vv[13]] - zv[vv[60]]), zv[vv[11]]
+           }, console.log(zv[-vv[61]]))
```

#### 361. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3421` → after: `L3796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3796) · [Before (L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3421)

```diff
-           }, zz[1])
+           }, vv[2])
```

#### 362. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3425-L3427` → after: `L3800-L3802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3800-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3800-L3802) · [Before (L3425-L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3425-L3427)

```diff
-     var GF = sz(39985),
-       TF = sz(1746);
-     const cF = 1e3 * GF.d.seatReservationSeconds - 3e3;
+     var Kh = Pv(40185),
+       Vh = Pv(1773);
+     const Uh = 1e3 * Kh.c.seatReservationSeconds - 3e3;
```

#### 363. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3432-L3434` → after: `L3807-L3809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3807-L3809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3807-L3809) · [Before (L3432-L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3432-L3434)

```diff
-         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
-         const Oz = null !== (Wz = Xz.fetch) && void 0 !== Wz ? Wz : fetch;
-         this.seat = (0, bs.j)(zz.endpoint, zz.roomName, zz.joinOptions, {
+         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
+         const gv = null !== (Sv = ev.fetch) && void 0 !== Sv ? Sv : fetch;
+         this.seat = (0, wP.h)(vv.endpoint, vv.roomName, vv.joinOptions, {
```

#### 364. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3455` → after: `L3830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3830) · [Before (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3455)

```diff
-         (0, Pt.n)(zz);
+         (0, jz.p)(vv);
```

#### 365. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3458` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3833) · [Before (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3458)

```diff
-             this.abort((0, Pt.f)(zz))
+             this.abort((0, jz.g)(vv))
```

#### 366. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3467` → after: `L3842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3842) · [Before (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3467)

```diff
-           if ((0, Pt.n)(zz), !tz) throw Wz;
+           if ((0, jz.p)(vv), !zv) throw Sv;
```

#### 367. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3472` → after: `L3847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3847) · [Before (L3472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3472)

```diff
-         if ((0, Pt.n)(zz), !(this.ageMs() > cF)) return this.use = "taken", Fz;
+         if ((0, jz.p)(vv), !(this.ageMs() > Uh)) return this.use = "taken", hv;
```

#### 368. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3480` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3855) · [Before (L3480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3480)

```diff
-           if (!(sz instanceof jz.m) || sz.code !== Fz.b.duplicateLobbyNameError.code || 0 === Wz) throw sz;
+           if (!(Pv instanceof tv.k) || Pv.code !== hv.b.duplicateLobbyNameError.code || 0 === Sv) throw Pv;
```

#### 369. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3501` → after: `L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3876) · [Before (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3501)

```diff
-         const tz = null !== (zz = this.answeredAt) && void 0 !== zz ? zz : {
+         const zv = null !== (vv = this.answeredAt) && void 0 !== vv ? vv : {
```

#### 370. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3506` → after: `L3881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3881) · [Before (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3506)

```diff
-         return Math.max(0, 1e3 * GF.d.seatReservationSeconds - sz)
+         return Math.max(0, 1e3 * Kh.c.seatReservationSeconds - Pv)
```

#### 371. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3512` → after: `L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3887) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3512)

```diff
-         (0, Pt.j)(this.follow.controller, zz)
+         (0, jz.k)(this.follow.controller, vv)
```

#### 372. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3515-L3516` → after: `L3890-L3891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3890-L3891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3890-L3891) · [Before (L3515-L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3515-L3516)

```diff
-     var AF = sz(1824),
-       yF = sz(40088);
+     var xh = Pv(1855),
+       th = Pv(40304);
```

#### 373. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3546` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3921) · [Before (L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3546)

```diff
-         if (zz === Qt.Pd.Retire) {
+         if (vv === Lz.je.Retire) {
```

#### 374. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3555` → after: `L3930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3930) · [Before (L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3555)

```diff
-         zz === Qt.Pd.Mesh && Fz.heapRetries > 0 && (Fz.heapRetries--, Uz = this.pooled(vz, !0)), Uz ??= this.buffer(vz), new Uint8Array(Uz, 0, vz).set(sz), oz.postMessage({
+         vv === Lz.je.Mesh && hv.heapRetries > 0 && (hv.heapRetries--, Nv = this.pooled(dv, !0)), Nv ??= this.buffer(dv), new Uint8Array(Nv, 0, dv).set(Pv), pv.postMessage({
```

#### 375. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3589` → after: `L3964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3964) · [Before (L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3589)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${zz} did not start`, Xz), void this.start(zz)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${vv} did not start`, ev), void this.start(vv)
```

#### 376. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3607` → after: `L3982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3982) · [Before (L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3607)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${zz} could not be sent the module`, Xz), Wz.terminate(), tz.worker = null, void this.start(zz)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${vv} could not be sent the module`, ev), Sv.terminate(), zv.worker = null, void this.start(vv)
```

#### 377. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3609-L3610` → after: `L3984-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3984-L3985) · [Before (L3609-L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3609-L3610)

```diff
-         tz.watch = new yF.h(yF.c, (tz => {
-           this.lose(zz, (0, yF.j)(tz), (() => {
+         zv.watch = new th.k(th.e, (zv => {
+           this.lose(vv, (0, th.n)(zv), (() => {
```

#### 378. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3619` → after: `L3994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L3994) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3619)

```diff
-             hF(sz), sz.started = !0, this.options.write(0, Qt.Md.WorkerStarted, 0, zz, 0, MF);
+             Qh(Pv), Pv.started = !0, this.options.write(0, Lz.ge.WorkerStarted, 0, vv, 0, qh);
```

#### 379. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3629` → after: `L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4004) · [Before (L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3629)

```diff
-             const Fz = tz.status === Qt.rb.Trapped;
+             const hv = zv.status === Lz.Db.Trapped;
```

#### 380. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3632` → after: `L4007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4007) · [Before (L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3632)

```diff
-               else if (sz.startsWithoutResult = 0, sz.trapsWithoutResult = 0, tz.status === Qt.rb.Refused) {
+               else if (Pv.startsWithoutResult = 0, Pv.trapsWithoutResult = 0, zv.status === Lz.Db.Refused) {
```

#### 381. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3639` → after: `L4014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4014) · [Before (L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3639)

```diff
-                 this.countFailedJob(Lt.e.test(sz), "light_refused_input", sz), this.logRefusal(zz, sz)
+                 this.countFailedJob(yz.b.test(Pv), "light_refused_input", Pv), this.logRefusal(vv, Pv)
```

#### 382. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3641` → after: `L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4016) · [Before (L3641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3641)

```diff
-               tz.status === Qt.rb.HeapRefused && (sz.heapRetries = Math.min(sz.heapRetries + 1, 4), this.logHeapRefusal(zz))
+               zv.status === Lz.Db.HeapRefused && (Pv.heapRetries = Math.min(Pv.heapRetries + 1, 4), this.logHeapRefusal(vv))
```

#### 383. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3643` → after: `L4018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4018) · [Before (L3643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3643)

```diff
-             if (this.options.write(tz.jobId, Qt.Md.JobResult, tz.status, zz, tz.workerUs, new Uint8Array(tz.bytes, 0, tz.len)), this.recycle(tz.bytes), tz.spare && this.recycle(tz.spare), !Fz) break;
+             if (this.options.write(zv.jobId, Lz.ge.JobResult, zv.status, vv, zv.workerUs, new Uint8Array(zv.bytes, 0, zv.len)), this.recycle(zv.bytes), zv.spare && this.recycle(zv.spare), !hv) break;
```

#### 384. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3645` → after: `L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4020) · [Before (L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3645)

```diff
-               this.lose(zz, `the tables trapped its wasm: ${tz.trap}`);
+               this.lose(vv, `the tables trapped its wasm: ${zv.trap}`);
```

#### 385. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3650` → after: `L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4025) · [Before (L3650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3650)

```diff
-             sz.gone ||= Wz, this.lose(zz, `a job trapped its wasm: ${tz.trap}`), Wz && this.giveUp(zz, `trapped ${sz.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
+             Pv.gone ||= Sv, this.lose(vv, `a job trapped its wasm: ${zv.trap}`), Sv && this.giveUp(vv, `trapped ${Pv.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
```

#### 386. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3665-L3666` → after: `L4040-L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4040-L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4040-L4041) · [Before (L3665-L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3665-L3666)

```diff
-         const Fz = (null !== (sz = this.refusals.get(tz)) && void 0 !== sz ? sz : 0) + 1;
-         this.refusals.set(tz, Fz), (0, AF.t)(Fz) && console.warn(`[bloxd-wasm-client] meshing worker ${zz} refused a chunk (${Fz} so far for this reason): ${tz}`)
+         const hv = (null !== (Pv = this.refusals.get(zv)) && void 0 !== Pv ? Pv : 0) + 1;
+         this.refusals.set(zv, hv), (0, xh.x)(hv) && console.warn(`[bloxd-wasm-client] meshing worker ${vv} refused a chunk (${hv} so far for this reason): ${zv}`)
```

#### 387. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3669` → after: `L4044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4044) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3669)

```diff
-         this.heapRefusals++, (0, AF.t)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${zz} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
+         this.heapRefusals++, (0, xh.x)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${vv} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
```

#### 388. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3676` → after: `L4051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4051) · [Before (L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3676)

```diff
-           }, console.warn(`[bloxd-wasm-client] meshing worker ${zz} ${tz}: giving up on it`), this.slots.every((zz => zz.gone))) {
+           }, console.warn(`[bloxd-wasm-client] meshing worker ${vv} ${zv}: giving up on it`), this.slots.every((vv => vv.gone))) {
```

#### 389. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3684` → after: `L4059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4059) · [Before (L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3684)

```diff
-               return `worker ${tz} ${null!==(sz=null===(Fz=zz.goneFor)||void 0===Fz?void 0:Fz.why)&&void 0!==sz?sz:"went"}`
+               return `worker ${zv} ${null!==(Pv=null===(hv=vv.goneFor)||void 0===hv?void 0:hv.why)&&void 0!==Pv?Pv:"went"}`
```

#### 390. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3686` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4061) · [Before (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3686)

```diff
-           this.options.fail(1 === zz.size ? sz : `no meshing worker is left (${tz.join(", ")})`)
+           this.options.fail(1 === vv.size ? Pv : `no meshing worker is left (${zv.join(", ")})`)
```

#### 391. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3692` → after: `L4067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4067) · [Before (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3692)

```diff
-         console.warn(`[bloxd-wasm-client] meshing worker ${zz} was lost: ${tz}`), hF(Oz), null === (Fz = Oz.worker) || void 0 === Fz || Fz.terminate(), Oz.worker = null, Oz.heapRetries = 0, null === (Wz = (Xz = this.options).onMemoryGone) || void 0 === Wz || Wz.call(Xz, zz), this … [truncated]
+         console.warn(`[bloxd-wasm-client] meshing worker ${vv} was lost: ${zv}`), Qh(gv), null === (hv = gv.worker) || void 0 === hv || hv.terminate(), gv.worker = null, gv.heapRetries = 0, null === (Sv = (ev = this.options).onMemoryGone) || void 0 === Sv || Sv.call(ev, vv), this … [truncated]
```

#### 392. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3696` → after: `L4071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4071) · [Before (L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3696)

```diff
-         return null !== (tz = this.pooled(zz)) && void 0 !== tz ? tz : new ArrayBuffer(Math.max(16384, zz))
+         return null !== (zv = this.pooled(vv)) && void 0 !== zv ? zv : new ArrayBuffer(Math.max(16384, vv))
```

#### 393. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3718-L3723` → after: `L4093-L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4093-L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4093-L4098) · [Before (L3718-L3723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3718-L3723)

```diff
-     var QF = sz(38530),
-       kF = sz(40040),
-       iF = sz(40094),
-       LF = sz(40101),
-       lF = (sz(39903), sz(40108)),
-       nF = sz(40063);
+     var Zh = Pv(38634),
+       Ah = Pv(40239),
+       Lh = Pv(40309),
+       Hh = Pv(40315),
+       Mh = (Pv(40096), Pv(40324)),
+       yh = Pv(40282);
```

#### 394. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3731` → after: `L4106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4106) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3731)

```diff
-       const tz = await (0, lF.h)(zz);
+       const zv = await (0, Mh.j)(vv);
```

#### 395. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3737` → after: `L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4112) · [Before (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3737)

```diff
-         } = (0, nF.n)(tz);
+         } = (0, yh.r)(zv);
```

#### 396. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3750` → after: `L4125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4125) · [Before (L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3750)

```diff
-         this.session = zz, this.sources = tz, this.warn = sz, this.load = Fz, this.nextPoll = 0, this.lw = !1, this.warned = new Set
+         this.session = vv, this.sources = zv, this.warn = Pv, this.load = hv, this.nextPoll = 0, this.ea = !1, this.warned = new Set
```

#### 397. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3761` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4136) · [Before (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3761)

```diff
-         this.lw = !0
+         this.ea = !0
```

#### 398. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3767` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4142) · [Before (L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3767)

```diff
-           if (vz = await this.sources.blockImageUrl(zz), null === vz) throw new Error(`block image ${zz} has no URL`);
+           if (dv = await this.sources.blockImageUrl(vv), null === dv) throw new Error(`block image ${vv} has no URL`);
```

#### 399. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3771-L3772` → after: `L4146-L4147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4146-L4147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4146-L4147) · [Before (L3771-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3771-L3772)

```diff
-           const tz = null !== (Uz = vz) && void 0 !== Uz ? Uz : `block image ${zz}`;
-           this.warned.has(tz) || (this.warned.add(tz), this.warn(`sun shadow plane texture ${tz} didn't load: its blocks cast no shadow`, Kz))
+           const zv = null !== (Nv = dv) && void 0 !== Nv ? Nv : `block image ${vv}`;
+           this.warned.has(zv) || (this.warned.add(zv), this.warn(`sun shadow plane texture ${zv} didn't load: its blocks cast no shadow`, lv))
```

#### 400. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3774-L3784` → after: `L4149-L4160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4149-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4149-L4160) · [Before (L3774-L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3774-L3784)

```diff
-         this.lw || this.session.setSunShadowTexture(zz, tz, null !== (sz = null === (Fz = oz) || void 0 === Fz ? void 0 : Fz.width) && void 0 !== sz ? sz : 0, null !== (Wz = null === (Xz = oz) || void 0 === Xz ? void 0 : Xz.height) && void 0 !== Wz ? Wz : 0, null === (Oz = oz) || … [truncated]
-       }
-     }
-     var VF = sz(40049),
-       RF = sz(40116),
-       pF = sz(40119),
-       fF = sz(40052),
-       EF = sz(40055),
-       zW = sz(8897),
-       tW = sz(8732),
-       sW = sz(40135);
+         this.ea || this.session.setSunShadowTexture(vv, zv, null !== (Pv = null === (hv = pv) || void 0 === hv ? void 0 : hv.width) && void 0 !== Pv ? Pv : 0, null !== (Sv = null === (ev = pv) || void 0 === ev ? void 0 : ev.height) && void 0 !== Sv ? Sv : 0, null === (gv = pv) || … [truncated]
+       }
+     }
+     var oh = Pv(40042),
+       bh = Pv(40250),
+       rh = Pv(40332),
+       kh = Pv(40334),
+       Xh = Pv(40256),
+       uh = Pv(40265),
+       vS = Pv(9049),
+       zS = Pv(8888),
+       PS = Pv(40339);
```

#### 401. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3788-L3789` → after: `L4164-L4165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4164-L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4164-L4165) · [Before (L3788-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3788-L3789)

```diff
-     var OW = sz(39912),
-       oW = sz(39811);
+     var gS = Pv(40112),
+       pS = Pv(39996);
```

#### 402. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3795` → after: `L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4171) · [Before (L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3795)

```diff
-         aux: Qt.Lb.AdStart | (zz ? Qt.Lb.PreventMovement : 0),
+         aux: Lz.hc.AdStart | (vv ? Lz.hc.PreventMovement : 0),
```

#### 403. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3799-L3800` → after: `L4175-L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4175-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4175-L4176) · [Before (L3799-L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3799-L3800)

```diff
-     var uW = sz(2588),
-       NW = sz(2596);
+     var TS = Pv(2629),
+       WS = Pv(2634);
```

#### 404. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3802-L3803` → after: `L4178-L4179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4178-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4178-L4179) · [Before (L3802-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3802-L3803)

```diff
-     var wW = sz(1731),
-       DW = sz(2679);
+     var aS = Pv(1758),
+       sS = Pv(2706);
```

#### 405. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3812` → after: `L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4188) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3812)

```diff
-     var YW = sz(40142);
+     var jS = Pv(40348);
```

#### 406. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3831-L3832` → after: `L4207-L4208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4207-L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4207-L4208) · [Before (L3831-L3832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3831-L3832)

```diff
-           own: zz.includes(Bs.e),
-           oneShot: zz.includes(Bs.i)
+           own: vv.includes(cP.c),
+           oneShot: vv.includes(cP.d)
```

#### 407. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3842` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4218) · [Before (L3842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3842)

```diff
-         })), this.channel = (null !== (tz = zz.openChannel) && void 0 !== tz ? tz : Bs.s)(), null !== this.channel && (this.channel.onmessage = () => {
+         })), this.channel = (null !== (zv = vv.openChannel) && void 0 !== zv ? zv : cP.r)(), null !== this.channel && (this.channel.onmessage = () => {
```

#### 408. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3854-L3855` → after: `L4230-L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4230-L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4230-L4231) · [Before (L3854-L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3854-L3855)

```diff
-           })).catch((zz => (null !== tz && (0, Bs.n)(tz), sz(zz), null)))
-         }((() => this.host.load(tz).then((zz => (zz.setGamePackConfirm(this.confirm), this.landed = zz, zz)))), tz ? this.host.store : null, this.host.Iw), this.landRequest(this.requested), this.requested
+           })).catch((vv => (null !== zv && (0, cP.m)(zv), Pv(vv), null)))
+         }((() => this.host.load(zv).then((vv => (vv.setGamePackConfirm(this.confirm), this.landed = vv, vv)))), zv ? this.host.store : null, this.host.yw), this.landRequest(this.requested), this.requested
```

#### 409. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3863` → after: `L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4239) · [Before (L3863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3863)

```diff
-           return null !== (zz = this.requested) && void 0 !== zz ? zz : null
+           return null !== (vv = this.requested) && void 0 !== vv ? vv : null
```

#### 410. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3871` → after: `L4247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4247) · [Before (L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3871)

```diff
-     var mW = sz(35800);
+     var FS = Pv(35849);
```

#### 411. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3873` → after: `L4249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4249) · [Before (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3873)

```diff
-       IW = 92 * mW.b,
+       nS = 92 * FS.c,
```

#### 412. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3879` → after: `L4255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4255) · [Before (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3879)

```diff
-       return null !== (zz = null === (tz = performance.memory) || void 0 === tz ? void 0 : tz.nH) && void 0 !== zz ? zz : null
+       return null !== (vv = null === (zv = performance.memory) || void 0 === zv ? void 0 : zv.sG) && void 0 !== vv ? vv : null
```

#### 413. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3889` → after: `L4265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4265) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3889)

```diff
-           Wz = Math.max(null !== (tz = this.reads.jsHeapBytes()) && void 0 !== tz ? tz : 0, CW),
+           Sv = Math.max(null !== (zv = this.reads.jsHeapBytes()) && void 0 !== zv ? zv : 0, OS),
```

#### 414. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3915` → after: `L4291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4291) · [Before (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3915)

```diff
-         return null === zz ? null : `estimate ${(0,mW.j)(zz.totalBytes)} MiB of budget ${null===tz?"none":(0,mW.j)(tz)}: wasm ${(0,mW.j)(zz.wasmBytes)} js ${(0,mW.j)(zz.jsHeapBytes)} gpu ${(0,mW.j)(zz.gpuBytes)} chunks ${zz.storedChunks}`
+         return null === vv ? null : `estimate ${(0,FS.g)(vv.totalBytes)} MiB of budget ${null===zv?"none":(0,FS.g)(zv)}: wasm ${(0,FS.g)(vv.wasmBytes)} js ${(0,FS.g)(vv.jsHeapBytes)} gpu ${(0,FS.g)(vv.gpuBytes)} chunks ${vv.storedChunks}`
```

#### 415. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3924-L3925` → after: `L4300-L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4300-L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4300-L4301) · [Before (L3924-L3925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3924-L3925)

```diff
-             footprintMiB: Number((0, mW.j)(zz.totalBytes)),
-             gpuMiB: Number((0, mW.j)(zz.gpuBytes)),
+             footprintMiB: Number((0, FS.g)(vv.totalBytes)),
+             gpuMiB: Number((0, FS.g)(vv.gpuBytes)),
```

#### 416. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3928` → after: `L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4304) · [Before (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3928)

```diff
-           footprintBudgetMiB: null === tz ? -1 : Number((0, mW.j)(tz))
+           footprintBudgetMiB: null === zv ? -1 : Number((0, FS.g)(zv))
```

#### 417. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3932-L3936` → after: `L4308-L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4308-L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4308-L4312) · [Before (L3932-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3932-L3936)

```diff
-     var TW = sz(2637),
-       cW = sz(4156),
-       jW = sz(38514),
-       AW = sz(37362);
-     const yW = kt.Y + 1,
+     var US = Pv(2682),
+       RS = Pv(4271),
+       xS = Pv(38626),
+       tS = Pv(37465);
+     const qS = Hz.V + 1,
```

#### 418. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3940` → after: `L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4316) · [Before (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3940)

```diff
-         this.log = zz, this.take = tz, this.po = [], this.unshown = new Map, this.latest = new Map
+         this.log = vv, this.take = zv, this.Vp = [], this.unshown = new Map, this.latest = new Map
```

#### 419. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3944-L3947` → after: `L4320-L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4320-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4320-L4323) · [Before (L3944-L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3944-L3947)

```diff
-         sz.length >= kt.V && sz[0] > 0 && (0, TW.g)("remesh", `${sz[0]} core records lost to a full log`);
-         const Fz = this.po;
-         for (let Wz = kt.V; Wz + kt.Y <= sz.length; Wz += kt.Y) {
-           for (let zz = Wz; zz < Wz + kt.Y; zz++) Fz.push(sz[zz]);
+         Pv.length >= Hz.S && Pv[0] > 0 && (0, US.i)("remesh", `${Pv[0]} core records lost to a full log`);
+         const hv = this.Vp;
+         for (let Sv = Hz.S; Sv + Hz.V <= Pv.length; Sv += Hz.V) {
+           for (let vv = Sv; vv < Sv + Hz.V; vv++) hv.push(Pv[vv]);
```

#### 420. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3957-L3958` → after: `L4333-L4334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4333-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4333-L4334) · [Before (L3957-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3957-L3958)

```diff
-         const Fz = this.po,
-           Wz = (0, AW.i)(Fz[zz + 1], Fz[zz + 2], Fz[zz + 3]),
+         const hv = this.Vp,
+           Sv = (0, tS.e)(hv[vv + 1], hv[vv + 2], hv[vv + 3]),
```

#### 421. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3960` → after: `L4336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmPlay.js#L4336) · [Before (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmPlay.js#L3960)

```diff
-           Oz = Fz[zz + kt.Y];
+           gv = hv[vv + Hz.V];
```
