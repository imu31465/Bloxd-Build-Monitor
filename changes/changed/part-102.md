# Changed — Bundle Modifications Report (Part 102 / 138)

- **Updated at**: `2026-11-25T13:06 JST`
- **Part**: `102 / 138` (**408** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 101](part-101.md) · [Part 103 →](part-103.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (igzsf.a0b73a5f → dz8ef.98c5e741 · continued)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3935 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 2256. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20292` → after: `L20292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20292) · [Before (L20292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20292)

```diff
-           const [Vt, Ht, Xt, Qt] = [tt[jt], tt[jt + 1], tt[jt + 2], tt[jt + 3]], lt = this.api.getBlockId(Vt, Ht, Xt), Et = `${Vt},${Ht},${Xt}`, ft = Pe(this.blockIds[Qt], lt);
+           const [ju, fu, Cu, bu] = [uu[qu], uu[qu + 1], uu[qu + 2], uu[qu + 3]], cu = this.api.getBlockId(ju, fu, Cu), Nu = `${ju},${fu},${Cu}`, Ou = vE(this.blockIds[bu], cu);
```

#### 2257. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20325` → after: `L20325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20325) · [Before (L20325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20325)

```diff
-         this.outline.show(null !== (tt = this.aimed) && void 0 !== tt ? tt : this.nextCell.il(this.lastFilled))
+         this.outline.show(null !== (uu = this.aimed) && void 0 !== uu ? uu : this.nextCell.Hc(this.lastFilled))
```

#### 2258. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20331` → after: `L20331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20331) · [Before (L20331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20331)

```diff
-         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Vt ? null : Vt.position), this.outline.show(null !== (et = this.aimed) && void 0 !== et ? et : this.nextCell.get())
+         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === ju ? null : ju.position), this.outline.show(null !== (Eu = this.aimed) && void 0 !== Eu ? Eu : this.nextCell.get())
```

#### 2259. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20352` → after: `L20352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20352) · [Before (L20352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20352)

```diff
-           const dt = tt.bVt(et),
+           const lu = uu.yEu(Eu),
```

#### 2260. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20390` → after: `L20390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20390) · [Before (L20390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20390)

```diff
-         this.sent || dt.b.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
+         this.sent || lu.d.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
```

#### 2261. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20393-L20394` → after: `L20393-L20394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20393-L20394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20393-L20394) · [Before (L20393-L20394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20393-L20394)

```diff
-     var jO = Vt(4339),
-       HO = Vt(39365);
+     var qs = ju(4427),
+       fs = ju(39461);
```

#### 2262. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20401-L20403` → after: `L20401-L20403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20401-L20403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20401-L20403) · [Before (L20401-L20403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20401-L20403)

```diff
-         uQ: 48,
-         minLifeTime: .3 / HO.d,
-         maxLifeTime: .55 / HO.d,
+         Mb: 48,
+         minLifeTime: .3 / fs.e,
+         maxLifeTime: .55 / fs.e,
```

#### 2263. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20409` → after: `L20409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20409) · [Before (L20409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20409)

```diff
-         gravity: [0, -14 * HO.d * HO.d, 0],
+         gravity: [0, -14 * fs.e * fs.e, 0],
```

#### 2264. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20419` → after: `L20419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20419) · [Before (L20419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20419)

```diff
-         blendMode: jO.f.Standard
+         blendMode: qs.e.Standard
```

#### 2265. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20425-L20427` → after: `L20425-L20427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20425-L20427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20425-L20427) · [Before (L20425-L20427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20425-L20427)

```diff
-       uQ: 96,
-       minLifeTime: .5 / HO.d,
-       maxLifeTime: .9 / HO.d,
+       Mb: 96,
+       minLifeTime: .5 / fs.e,
+       maxLifeTime: .9 / fs.e,
```

#### 2266. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20433` → after: `L20433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20433) · [Before (L20433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20433)

```diff
-       gravity: [0, 2 * HO.d * HO.d, 0],
+       gravity: [0, 2 * fs.e * fs.e, 0],
```

#### 2267. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20442` → after: `L20442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20442) · [Before (L20442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20442)

```diff
-       blendMode: jO.f.OneOne
+       blendMode: qs.e.OneOne
```

#### 2268. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20451` → after: `L20451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20451) · [Before (L20451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20451)

```diff
-             const tt = `${qt},${Dt},${mt}`;
+             const uu = `${Uu},${Zu},${Xu}`;
```

#### 2269. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20493` → after: `L20493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20493) · [Before (L20493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20493)

```diff
-       const Vt = (0, jt.h)(jV, et.getView()),
+       const ju = (0, qu.g)(lj, Eu.getView()),
```

#### 2270. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20496` → after: `L20496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20496) · [Before (L20496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20496)

```diff
-         } = (0, Xt.H)(),
+         } = (0, Cu.A)(),
```

#### 2271. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20499` → after: `L20499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20499) · [Before (L20499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20499)

```diff
-         } = (0, dt.k)(["isTouchScreen"]),
+         } = (0, lu.l)(["isTouchScreen"]),
```

#### 2272. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20503` → after: `L20503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20503) · [Before (L20503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20503)

```diff
-       if ((0, Mt.c)((tt => Qt && !tt.repeat && !(0, bt.isTypingInInput)() && !(0, Et.q)() && !qt), (tt => {
+       if ((0, gu.e)((uu => bu && !uu.repeat && !(0, Mu.isTypingInInput)() && !(0, Nu.s)() && !Uu), (uu => {
```

#### 2273. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20507` → after: `L20507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20507) · [Before (L20507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20507)

```diff
-             return Ht.r[EO].includes(tt) ? et.rotate : null
+             return fu.z[Ns].includes(uu) ? Eu.rotate : null
```

#### 2274. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20512` → after: `L20512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20512) · [Before (L20512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20512)

```diff
-       return Vt.blocked ? yt = "plotsGame:placementOffPlot" : Vt.toClear > 0 ? yt = "plotsGame:placementClear" : "placeSpot" !== mt.hint && "placeBuild" !== mt.hint || (yt = null), (0, Lt.jsx)(ft.g, {
+       return ju.blocked ? hu = "plotsGame:placementOffPlot" : ju.toClear > 0 ? hu = "plotsGame:placementClear" : "placeSpot" !== Xu.hint && "placeBuild" !== Xu.hint || (hu = null), (0, Vu.jsx)(Ou.h, {
```

#### 2275. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20532` → after: `L20532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20532) · [Before (L20532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20532)

```diff
-             }), (0, Lt.jsxs)(hV.G, {
+             }), (0, Vu.jsxs)(Jj.R, {
```

#### 2276. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20542` → after: `L20542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20542) · [Before (L20542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20542)

```diff
-               children: (0, Lt.jsxs)(hV.m, {
+               children: (0, Vu.jsxs)(Jj.p, {
```

#### 2277. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20556` → after: `L20556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20556) · [Before (L20556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20556)

```diff
-       return (0, Lt.jsx)(Nt.d, {
+       return (0, Vu.jsx)(Du.b, {
```

#### 2278. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20563-L20566` → after: `L20563-L20566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20563-L20566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20563-L20566) · [Before (L20563-L20566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20563-L20566)

```diff
-     var MO = Vt(2435),
-       bO = Vt(36941),
-       JO = Vt(2063),
-       CO = Vt(1354);
+     var Ms = ju(2479),
+       es = ju(37075),
+       Gs = ju(2027),
+       ps = ju(1314);
```

#### 2279. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20577` → after: `L20577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20577) · [Before (L20577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20577)

```diff
-       const Vt = (0, jt.h)(ee, et.getPlot()),
+       const ju = (0, qu.g)(uE, Eu.getPlot()),
```

#### 2280. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20579` → after: `L20579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20579) · [Before (L20579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20579)

```diff
-         mt = (0, bO.j)(Ot);
+         Xu = (0, es.l)(su);
```

#### 2281. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20586` → after: `L20586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20586) · [Before (L20586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20586)

```diff
-         children: (0, Lt.jsx)(hO, {
+         children: (0, Vu.jsx)(as, {
```

#### 2282. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20593` → after: `L20593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20593) · [Before (L20593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20593)

```diff
-         }, `${dt},${Ht}`)
+         }, `${lu},${fu}`)
```

#### 2283. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20597` → after: `L20597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20597) · [Before (L20597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20597)

```diff
-     function hO(tt) {
+     function as(uu) {
```

#### 2284. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20609` → after: `L20609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20609) · [Before (L20609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20609)

```diff
-       } = (0, Xt.H)(), Qt = (0, JO.h)("hiddenPlayerNames"), Et = (0, JO.h)("players"), ft = null === mt ? null : null !== (et = null === (Vt = Et.byId[mt]) || void 0 === Vt ? void 0 : Vt.cosmetics) && void 0 !== et ? et : null, yt = Ht("plotsGame:plotBannerCoords", {
+       } = (0, Cu.A)(), bu = (0, Gs.f)("hiddenPlayerNames"), Nu = (0, Gs.f)("players"), Ou = null === Xu ? null : null !== (Eu = null === (ju = Nu.byId[Xu]) || void 0 === ju ? void 0 : ju.cosmetics) && void 0 !== Eu ? Eu : null, hu = fu("plotsGame:plotBannerCoords", {
```

#### 2285. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20624` → after: `L20624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20624) · [Before (L20624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20624)

```diff
-           children: [null !== ft && (0, Lt.jsx)(MO.c, {
+           children: [null !== Ou && (0, Vu.jsx)(Ms.d, {
```

#### 2286. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20626` → after: `L20626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20626) · [Before (L20626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20626)

```diff
-           }), null === ft && (0, Lt.jsx)(wt.b, {
+           }), null === Ou && (0, Vu.jsx)(Yu.e, {
```

#### 2287. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20634` → after: `L20634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20634) · [Before (L20634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20634)

```diff
-               name: (0, CO.f)(Dt, Qt)
+               name: (0, ps.e)(Zu, bu)
```

#### 2288. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20662` → after: `L20662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20662) · [Before (L20662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20662)

```diff
-           Ht = new DO(tt, qt, jt, et), Xt = new XV(tt, qt), Qt = new Zt(tt, Xt), lt = new KV(tt, qt, Ht.nextCell), Et = new dO(tt), ft.push((0, mt.q)((0, Dt.createElement)(JV, {
+           fu = new Zs(uu, Uu, qu, Eu), Cu = new fj(uu, Uu), bu = new Ku(uu, Cu), cu = new wj(uu, Uu, fu.nextCell), Nu = new ls(uu), Ou.push((0, Xu.o)((0, Zu.createElement)(ej, {
```

#### 2289. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20683-L20684` → after: `L20683-L20684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20683-L20684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20683-L20684) · [Before (L20683-L20684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20683-L20684)

```diff
-         BQ: () => {
-           Et.BQ(), Ht.BQ(), Xt.BQ(), Qt.BQ()
+         Tb: () => {
+           Nu.Tb(), fu.Tb(), Cu.Tb(), bu.Tb()
```

#### 2290. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20705-L20706` → after: `L20705-L20706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20705-L20706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20705-L20706) · [Before (L20705-L20706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20705-L20706)

```diff
-             Ht.Qf(tt), Xt.Qf(tt)
-           } else "plotsJournal" === tt ? Qt.Qf(et) : "plotsJournalOpen" === tt ? Qt.openFromServer(et) : "plotsPreviewEnd" === tt ? Xt.endFromServer() : "plotsGuide" === tt ? dt.receiveGuide(et) : "plotsGuideDone" === tt && dt.receiveGuideDone()
+             fu.NO(uu), Cu.NO(uu)
+           } else "plotsJournal" === uu ? bu.NO(Eu) : "plotsJournalOpen" === uu ? bu.openFromServer(Eu) : "plotsPreviewEnd" === uu ? Cu.endFromServer() : "plotsGuide" === uu ? lu.receiveGuide(Eu) : "plotsGuideDone" === uu && lu.receiveGuideDone()
```

#### 2291. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20711` → after: `L20711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20711) · [Before (L20711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20711)

```diff
-   39755: (tt, et, Vt) => {
+   39828: (uu, Eu, ju) => {
```

#### 2292. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20727` → after: `L20727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20727) · [Before (L20727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20727)

```diff
-   39763: (tt, et, Vt) => {
+   39830: (uu, Eu, ju) => {
```

#### 2293. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20745` → after: `L20745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20745) · [Before (L20745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20745)

```diff
-   39766: (tt, et, Vt) => {
+   39839: (uu, Eu, ju) => {
```

#### 2294. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20749` → after: `L20749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20749) · [Before (L20749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20749)

```diff
-     var Ot = Vt(34406);
+     var su = ju(34571);
```

#### 2295. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20753-L20755` → after: `L20753-L20755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20753-L20755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20753-L20755) · [Before (L20753-L20755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20753-L20755)

```diff
-       if ("parenthetical-seconds" === et) return ` (${tt}s)`;
-       const Ot = `${Math.floor(tt/60)}:${(tt%60).toString().padStart(2,"0")}`;
-       return Vt ? `${Vt}${Ot}` : Ot
+       if ("parenthetical-seconds" === Eu) return ` (${uu}s)`;
+       const su = `${Math.floor(uu/60)}:${(uu%60).toString().padStart(2,"0")}`;
+       return ju ? `${ju}${su}` : su
```

#### 2296. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20763` → after: `L20763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20763) · [Before (L20763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20763)

```diff
-       dt.content = [...null !== (mt = qt.baseNametag.content) && void 0 !== mt ? mt : [], {
+       lu.content = [...null !== (Xu = Uu.baseNametag.content) && void 0 !== Xu ? Xu : [], {
```

#### 2297. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20768` → after: `L20768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20768) · [Before (L20768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20768)

```diff
-         str: `: ${(0,Ot.d)(Dt)}`
+         str: `: ${(0,su.b)(Zu)}`
```

#### 2298. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20783` → after: `L20783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20783) · [Before (L20783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20783)

```diff
-         BQ: tt => {
+         Tb: uu => {
```

#### 2299. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20798` → after: `L20798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20798) · [Before (L20798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20798)

```diff
-             if ("content" === qt.location) Qt.content = [...null !== (Vt = qt.baseNametag.content) && void 0 !== Vt ? Vt : [], Xt];
+             if ("content" === Uu.location) bu.content = [...null !== (ju = Uu.baseNametag.content) && void 0 !== ju ? ju : [], Cu];
```

#### 2300. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20849` → after: `L20849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20849) · [Before (L20849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20849)

```diff
-   8952: (tt, et, Vt) => {
+   8947: (uu, Eu, ju) => {
```

#### 2301. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20851-L20852` → after: `L20851-L20852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20851-L20852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20851-L20852) · [Before (L20851-L20852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20851-L20852)

```diff
-       b: () => Dt,
-       d: () => qt
+       e: () => Zu,
+       g: () => Uu
```

#### 2302. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20854` → after: `L20854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20854) · [Before (L20854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20854)

```diff
-     var Ot = Vt(31);
+     var su = ju(24);
```

#### 2303. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20860` → after: `L20860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20860) · [Before (L20860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20860)

```diff
-           "Air" === dt && Ot.j.sw(qt)
+           "Air" === lu && su.h.TY(Uu)
```

#### 2304. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20865` → after: `L20865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20865) · [Before (L20865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20865)

```diff
-   38281: (tt, et, Vt) => {
+   38413: (uu, Eu, ju) => {
```

#### 2305. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20867` → after: `L20867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20867) · [Before (L20867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20867)

```diff
-       c: () => dt
+       b: () => lu
```

#### 2306. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20869-L20872` → after: `L20869-L20872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20869-L20872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20869-L20872) · [Before (L20869-L20872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20869-L20872)

```diff
-     var Ot = Vt(391),
-       qt = Vt(37172),
-       Dt = Vt(4614);
-     const mt = ["Leaf Bed", "_Leaf Bed Head", ...Ot.Nc.flatMap((tt => [`${tt} Bed`, `_${tt} Bed Head`, `${tt} Strongbed`, `_${tt} Strongbed Head`]))];
+     var su = ju(349),
+       Uu = ju(37332),
+       Zu = ju(4660);
+     const Xu = ["Leaf Bed", "_Leaf Bed Head", ...su.Lc.flatMap((uu => [`${uu} Bed`, `_${uu} Bed Head`, `${uu} Strongbed`, `_${uu} Strongbed Head`]))];
```

#### 2307. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20883` → after: `L20883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20883) · [Before (L20883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20883)

```diff
-           if ((0, qt.e)(tt.getMetaInfo(dt).rootName) && !tt.isEntityInteractable(jt) && (0, Dt.e)(null === (Ht = tt.bVt(et)) || void 0 === Ht ? void 0 : Ht.typeObj.type)) return "preventAction"
+           if ((0, Uu.d)(uu.getMetaInfo(lu).rootName) && !uu.isEntityInteractable(qu) && (0, Zu.d)(null === (fu = uu.yEu(Eu)) || void 0 === fu ? void 0 : fu.typeObj.type)) return "preventAction"
```

#### 2308. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20888` → after: `L20888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20888) · [Before (L20888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20888)

```diff
-   39365: (tt, et, Vt) => {
+   39461: (uu, Eu, ju) => {
```

#### 2309. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20890-L20891` → after: `L20890-L20891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20890-L20891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20890-L20891) · [Before (L20890-L20891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20890-L20891)

```diff
-       d: () => Ot,
-       g: () => Dt
+       e: () => su,
+       h: () => Zu
```

#### 2310. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20899` → after: `L20899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20899) · [Before (L20899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20899)

```diff
-         this.style = tt, this.uQ = et, this.half = Vt, this.particles = null, this.lastFrame = -1
+         this.style = uu, this.Mb = Eu, this.half = ju, this.particles = null, this.lastFrame = -1
```

#### 2311. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20909-L20910` → after: `L20909-L20910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20909-L20910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20909-L20910) · [Before (L20909-L20910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20909-L20910)

```diff
-             texture: tt.soft ? qt : "square_particle",
-             uQ: et,
+             texture: uu.soft ? Uu : "square_particle",
+             Mb: Eu,
```

#### 2312. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20932` → after: `L20932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20932) · [Before (L20932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20932)

```diff
-         }(this.style, this.uQ), {
+         }(this.style, this.Mb), {
```

#### 2313. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20943` → after: `L20943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20943) · [Before (L20943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20943)

```diff
-   39039: (tt, et, Vt) => {
+   39158: (uu, Eu, ju) => {
```

#### 2314. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20949` → after: `L20949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20949) · [Before (L20949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20949)

```diff
-           BQ: 0
+           Tb: 0
```

#### 2315. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20951-L20952` → after: `L20951-L20952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20951-L20952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20951-L20952) · [Before (L20951-L20952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20951-L20952)

```diff
-         qJ: function(tt, et) {},
-         nS: null,
+         lG: function(uu, Eu) {},
+         jK: null,
```

#### 2316. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20954-L20955` → after: `L20954-L20955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20954-L20955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20954-L20955) · [Before (L20954-L20955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20954-L20955)

```diff
-           if (Vt[0] && 100 !== Vt[0].BQ++) return;
-           const Ot = tt.mJ.YM(tt.lL);
+           if (ju[0] && 100 !== ju[0].Tb++) return;
+           const su = uu.YG.bM(uu.FQ);
```

#### 2317. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20957` → after: `L20957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20957) · [Before (L20957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20957)

```diff
-             const et = tt.mJ.YM(qt.uZ);
+             const Eu = uu.YG.bM(Uu.HV);
```

#### 2318. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20960` → after: `L20960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20960) · [Before (L20960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20960)

```diff
-             Vt > 500 && tt.mJ.deleteEntity(qt.uZ), qt.BQ = 0
+             ju > 500 && uu.YG.deleteEntity(Uu.HV), Uu.Tb = 0
```

#### 2319. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20976` → after: `L20976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20976) · [Before (L20976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20976)

```diff
-   38997: (tt, et, Vt) => {
+   39124: (uu, Eu, ju) => {
```

#### 2320. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20981` → after: `L20981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20981) · [Before (L20981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20981)

```diff
-     var Ot = Vt(2848);
+     var su = ju(2893);
```

#### 2321. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20991` → after: `L20991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20991) · [Before (L20991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20991)

```diff
-         qJ: function(tt, et) {
+         lG: function(uu, Eu) {
```

#### 2322. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20994-L20996` → after: `L20994-L20996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20994-L20996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L20994-L20996) · [Before (L20994-L20996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L20994-L20996)

```diff
-         nS: null,
-         dJ: function(et, Vt) {
-           const Dt = (0, Ot.e)().Bf.xI,
+         jK: null,
+         hG: function(Eu, ju) {
+           const Zu = (0, su.c)().tO.oV,
```

#### 2323. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21000-L21001` → after: `L21000-L21001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21000-L21001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21000-L21001) · [Before (L21000-L21001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21000-L21001)

```diff
-             const et = tt.mJ.oet(Ot.uZ);
-             null === et.RP ? et.mesh.rotation.set(et.mesh.rotation.x, Ot.heading, et.mesh.rotation.z) : Dt.getCulledForEntity(et.RP, Ot.uZ) || Dt.setRotationEuler(et.RP, 0, Ot.heading, 0)
+             const Eu = uu.YG.GEu(su.HV);
+             null === Eu.mV ? Eu.mesh.rotation.set(Eu.mesh.rotation.x, su.heading, Eu.mesh.rotation.z) : Zu.getCulledForEntity(Eu.mV, su.HV) || Zu.setRotationEuler(Eu.mV, 0, su.heading, 0)
```

#### 2324. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21009-L21010` → after: `L21009-L21010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21009-L21010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21009-L21010) · [Before (L21009-L21010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21009-L21010)

```diff
-       const qt = tt.mJ.getState(et, "autoRotate");
-       qt && (null === (Ot = tt.mJ.oet(et)) || void 0 === Ot ? void 0 : Ot.RP) === Vt && tt.Bf.xI.setRotationEuler(Vt, 0, qt.heading, 0)
+       const Uu = uu.YG.getState(Eu, "autoRotate");
+       Uu && (null === (su = uu.YG.GEu(Eu)) || void 0 === su ? void 0 : su.mV) === ju && uu.tO.oV.setRotationEuler(ju, 0, Uu.heading, 0)
```

#### 2325. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21013` → after: `L21013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21013) · [Before (L21013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21013)

```diff
-   39042: (tt, et, Vt) => {
+   39166: (uu, Eu, ju) => {
```

#### 2326. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21017` → after: `L21017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21017) · [Before (L21017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21017)

```diff
-     var Ot = Vt(404),
+     var su = ju(366),
```

#### 2327. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21019` → after: `L21019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21019) · [Before (L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21019)

```diff
-       Dt = Vt(37699);
+       Zu = ju(37841);
```

#### 2328. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21031-L21033` → after: `L21031-L21033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21031-L21033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21031-L21033) · [Before (L21031-L21033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21031-L21033)

```diff
-         qJ: function(tt, et) {},
-         nS: function(tt) {},
-         dJ: function(et, Vt) {
+         lG: function(uu, Eu) {},
+         jK: function(uu) {},
+         hG: function(Eu, ju) {
```

#### 2329. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21037` → after: `L21037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21037) · [Before (L21037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21037)

```diff
-               Ot.onEnd(), tt.mJ.deleteEntity(Ot.uZ);
+               su.onEnd(), uu.YG.deleteEntity(su.HV);
```

#### 2330. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21041` → after: `L21041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21041) · [Before (L21041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21041)

```diff
-             const Vt = tt.mJ.YM(Ot.uZ);
+             const ju = uu.YG.bM(su.HV);
```

#### 2331. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21043-L21044` → after: `L21043-L21044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21043-L21044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21043-L21044) · [Before (L21043-L21044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21043-L21044)

```diff
-             tt.mJ.setPosition(Ot.uZ, Vt);
-             const mt = tt.mJ.oet(Ot.uZ);
+             uu.YG.setPosition(su.HV, ju);
+             const Xu = uu.YG.GEu(su.HV);
```

#### 2332. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21047` → after: `L21047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21047) · [Before (L21047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21047)

```diff
-                 [Vt, qt, dt] = tt.mJ.oB(Ot.uZ),
+                 [ju, Uu, lu] = uu.YG.nH(su.HV),
```

#### 2333. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21049` → after: `L21049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21049) · [Before (L21049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21049)

```diff
-               (0, Dt.p)(et, Vt + jt - et.position.x, qt + Ht - et.position.y, dt + Xt - et.position.z), Ot._updatedLookAt = !0
+               (0, Zu.k)(Eu, ju + qu - Eu.position.x, Uu + fu - Eu.position.y, lu + Cu - Eu.position.z), su._updatedLookAt = !0
```

#### 2334. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21056` → after: `L21056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21056) · [Before (L21056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21056)

```diff
-   39044: (tt, et, Vt) => {
+   39170: (uu, Eu, ju) => {
```

#### 2335. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21060` → after: `L21060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21060) · [Before (L21060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21060)

```diff
-     var Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt = Vt(404),
+     var su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu = ju(366),
```

#### 2336. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21062-L21065` → after: `L21062-L21065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21062-L21065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21062-L21065) · [Before (L21062-L21065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21062-L21065)

```diff
-       ft = Vt(38126),
-       wt = Vt(39049),
-       yt = Vt(37997),
-       Nt = Vt(1308);
+       Ou = ju(38263),
+       Yu = ju(39173),
+       hu = ju(38141),
+       Du = ju(1278);
```

#### 2337. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21078-L21080` → after: `L21078-L21080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21078-L21080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21078-L21080) · [Before (L21078-L21080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21078-L21080)

```diff
-         nS: function(tt, et) {},
-         dJ: function(et, Vt) {
-           for (const Ot of Vt) Ot.uZ === tt.lL && (Ot.targetRotationOffset[0] = Ot.frontFacing ? Math.PI : 0, Ot.targetRotationOffset[1] = 0, Ot.targetRotationOffset[2] = Ot.frontFacing ? Math.PI : 0, Ot.shakeTime > 0 && (Ot.targetRotationOffset[0] += .2 * Ot.shakePower * Math.co … [truncated]
+         jK: function(uu, Eu) {},
+         hG: function(Eu, ju) {
+           for (const su of ju) su.HV === uu.FQ && (su.targetRotationOffset[0] = su.frontFacing ? Math.PI : 0, su.targetRotationOffset[1] = 0, su.targetRotationOffset[2] = su.frontFacing ? Math.PI : 0, su.shakeTime > 0 && (su.targetRotationOffset[0] += .2 * su.shakePower * Math.co … [truncated]
```

#### 2338. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21084` → after: `L21084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21084) · [Before (L21084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21084)

```diff
-     const bt = [1, 78, 0, 8, "c", "i", 7, 5, "f", 4, 255, "length", 3, 42, "e", "undefined", "a", void 0, 2, 131, 63, 6, "fromCodePoint", 12, "push", "b", 91, 8191, 88, 13, 14, 21, 153, 84, "d", "h", 83, 9, 197, 225, 111, 75, 173, 71, 168, 245, 159, "g", 180, 37, 109, 134, 110, 2 … [truncated]
+     const Mu = [2, 0, 1, "h", 68, 215, "i", 83, 5, 181, "d", 8, 255, "length", 3, "a", 4, "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 217, "b", 96, 155, 91, 182, "f", 8191, 88, 13, 14, 234, 112, 9, 62, 45, 127, 128, "c", 151, "g", 46, 98, 238, 154, 36, 250, 196, 90, null, … [truncated]
```

#### 2339. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21087` → after: `L21087-L21102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21087-L21102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21087-L21102) · [Before (L21087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21087)

```diff
-       return tt[bt[11]] = bt[0], typeof mt !== bt[15] && mt ? (new mt).decode(new dt(tt[bt[2]])) : typeof jt !== bt[15] && jt ? jt.from(tt[bt[2]]).toString("utf-8") : Qt(tt[bt[2]])
+       return uu[Mu[13]] = Mu[2], typeof su[uu[Mu[1]]] === Mu[17] ? su[uu[Mu[1]]] = function(...uu) {
+         for (wu(uu[Mu[13]] = Mu[2], uu[-Mu[5]] = '=JVrPSEABIXHctNYUmdeagfsLOpDnlWFiTby~oq;9^KQCZG0h|Mkzx#:R]j`w@7"/_>54.!&v*u(1<{3),%26?+[}$8', uu[Mu[0]] = "" + (uu[Mu[1]] || ""), uu[Mu[4]] = uu[Mu[0]].length, uu[Mu[10]] = [], uu[Mu[8]] = Mu[1], uu[Mu[9]] = Mu[1], uu[Mu[7]] = -Mu … [truncated]
+           if (uu[Mu[6]] = uu[-Mu[5]].indexOf(uu[Mu[0]][uu[Mu[3]]]), uu[Mu[6]] !== -Mu[2])
+             if (uu[Mu[7]] < Mu[1]) uu[Mu[7]] = uu[Mu[6]];
+             else {
+               wu(uu[Mu[7]] += uu[Mu[6]] * Mu[28], uu[Mu[8]] |= uu[Mu[7]] << uu[Mu[9]], uu[Mu[9]] += (uu[Mu[7]] & Mu[31]) > Mu[32] ? Mu[33] : Mu[34]);
+               do {
+                 wu(uu[Mu[10]].push(uu[Mu[8]] & Mu[12]), uu[Mu[8]] >>= Mu[11], uu[Mu[9]] -= Mu[11])
+               } while (uu[Mu[9]] > Mu[21]);
+               uu[Mu[7]] = -Mu[2]
+             } return uu[Mu[7]] > -Mu[2] && uu[Mu[10]].push((uu[Mu[8]] | uu[Mu[7]] << uu[Mu[9]]) & Mu[12]), Gu(uu[Mu[10]])
+       }(Uu[uu[Mu[1]]]) : su[uu[Mu[1]]]
+     }
+ 
+     function Gu(...uu) {
+       return uu[Mu[13]] = Mu[2], typeof Xu !== Mu[17] && Xu ? (new Xu).decode(new lu(uu[Mu[1]])) : typeof qu !== Mu[17] && qu ? qu.from(uu[Mu[1]]).toString("utf-8") : bu(uu[Mu[1]])
```

#### 2340. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21095-L21096` → after: `L21110-L21111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21110-L21111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21110-L21111) · [Before (L21095-L21096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21095-L21096)

```diff
-     ut(Ot = {}, qt = ["!:NwG%yvI%o&[t_Q%.wC<w$#", '`{`A)b?!0uHW";v*0eSVVJtv=!2H]iPYOzD+u6]ZPxVXNy{yie6hssM5', "$N(o48>VbYoNI1^[NT;=)kL5", 'sI6T/F7z0x{L:b.$^N<TPenvn<oh.;Y$"&}@h]xF`!({,>;>$Q~RYwb#', "OrI=Fl8X3aY][Jx$a2wC9?QQF([!f4A$cYA>w4Mv}!TT?kA>oAlABV`1|:", 'pO0TIl,"#hc%SOj1T^l … [truncated]
-       ut(tt[bt[11]] = bt[2], tt[-bt[13]] = [function() {
+     wu(su = {}, Uu = ["0#nuE+t0o#B@7o}b^&FWB3CW$N[G{|*eTQal_GM+vaQzg~~F^_L#I,`t9m", "$k/k_v)E9jT.OUeD`_AIb@yAk]mLbO7lTs=#8*D0S", "@9;zp2mJi]^.CDELddTWa9,^8_obL&t", "KuoA??rx,]Z*;VyOgkjB", "SdzxE.(JX:%BL&jni9UT,18+LaL35DcOx=", 'R#Rk}Mz4T"VU`!vF)kV', "<`8l5,(]FY2G/YMD8x3zV+$^WdOrkN … [truncated]
+       wu(uu[Mu[13]] = Mu[1], uu[Mu[15]] = [function() {
```

#### 2341. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21104` → after: `L21119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21119) · [Before (L21104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21104)

```diff
-       }], tt[bt[0]] = bt[17], tt[bt[4]] = []);
+       }], uu[Mu[2]] = Mu[59], uu[-Mu[14]] = []);
```

#### 2342. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21106` → after: `L21121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21121) · [Before (L21106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21106)

```diff
-         ut(tt[bt[0]] = Object, tt[bt[4]][bt[24]]("".__proto__.constructor.name))
+         wu(uu[Mu[2]] = Object, uu[-Mu[14]][Mu[23]]("".__proto__.constructor.name))
```

#### 2343. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21108-L21111` → after: `L21123-L21126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21123-L21126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21123-L21126) · [Before (L21108-L21111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21108-L21111)

```diff
-       tt: for (tt[bt[12]] = bt[2]; tt[bt[12]] < tt[-bt[13]][bt[11]]; tt[bt[12]]++) try {
-         for (tt[bt[0]] = tt[-bt[13]][tt[bt[12]]](), tt[bt[14]] = bt[2]; tt[bt[14]] < tt[bt[4]][bt[11]]; tt[bt[14]]++)
-           if (typeof tt[bt[0]][tt[bt[4]][tt[bt[14]]]] === bt[15]) continue tt;
-         return tt[bt[0]]
+       uu: for (uu[Mu[10]] = Mu[1]; uu[Mu[10]] < uu[Mu[15]][Mu[13]]; uu[Mu[10]]++) try {
+         for (uu[Mu[2]] = uu[Mu[15]][uu[Mu[10]]](), uu[Mu[16]] = Mu[1]; uu[Mu[16]] < uu[-Mu[14]][Mu[13]]; uu[Mu[16]]++)
+           if (typeof uu[Mu[2]][uu[-Mu[14]][uu[Mu[16]]]] === Mu[17]) continue uu;
+         return uu[Mu[2]]
```

#### 2344. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21113-L21118` → after: `L21128-L21134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21128-L21134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21128-L21134) · [Before (L21113-L21118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21113-L21118)

```diff
-       return tt[bt[0]] || this
-     }() || {}, mt = Dt.TextDecoder, dt = Dt.Uint8Array, jt = Dt.mf, Ht = Dt.String || String, Xt = Dt.Array || Array, Qt = function(...tt) {
-       return ut(tt[bt[11]] = bt[2], tt[bt[16]] = new Xt(128), tt[bt[25]] = Ht[bt[22]] || Ht.fromCharCode, tt[bt[18]] = []),
-         function(...et) {
-           for (ut(et[bt[11]] = bt[0], et[bt[16]] = bt[17], et[bt[19]] = bt[17], et[bt[4]] = et[bt[2]][bt[11]], tt[bt[18]][bt[11]] = bt[2]), et[bt[9]] = bt[2]; et[bt[9]] < et[bt[4]];) ut(et[bt[19]] = et[bt[2]][et[bt[9]]++], et[bt[19]] <= 127 ? et[bt[16]] = et[bt[19]] : et[bt[19]]  … [truncated]
-           return tt[bt[18]].join("")
+       return uu[Mu[2]] || this
+     }() || {}, Xu = Zu.TextDecoder, lu = Zu.Uint8Array, qu = Zu.qO, fu = Zu.String || String, Cu = Zu.Array || Array, bu = function(...uu) {
+       return wu(uu[Mu[13]] = Mu[1], uu[Mu[24]] = new Cu(Mu[41]), uu[Mu[25]] = fu[Mu[20]] || fu.fromCharCode, uu[Mu[0]] = []),
+         function(Eu) {
+           var ju, su, Uu, Zu;
+           for (wu(su = void 0, Uu = Eu[Mu[13]], uu[Mu[0]][Mu[13]] = Mu[1]), Zu = Mu[1]; Zu < Uu;) wu(su = Eu[Zu++], su <= Mu[40] ? ju = su : su <= 223 ? ju = (su & Mu[67]) << Mu[19] | Eu[Zu++] & Mu[18] : su <= 239 ? ju = (su & Mu[68]) << Mu[22] | (Eu[Zu++] & Mu[18]) << Mu[19] | E … [truncated]
+           return uu[Mu[0]].join("")
```

#### 2345. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21121-L21127` → after: `L21137-L21141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21137-L21141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21137-L21141) · [Before (L21121-L21127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21121-L21127)

```diff
-       function tt(tt) {
-         return typeof Ot[tt] === bt[15] ? Ot[tt] = function(tt) {
-           var et, Vt, Ot, qt, Dt, mt, dt;
-           for (ut(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = bt[2], Dt = bt[2], mt = -bt[0]), dt = bt[2]; dt < Vt; dt++) {
-             var jt = '<uevzw$OIfsCHF96nyQD:gM1.82rXTbAhZSaNm*{,>5(_VRKq=W/`t}#Gklo@xJ;B%~)iP"7d]p+cjYL0?4|3E[!&^U'.indexOf(et[dt]);
-             if (jt !== -bt[0])
-               if (mt < bt[2]) mt = jt;
+       function uu(...uu) {
+         return uu[Mu[13]] = Mu[2], typeof su[uu[Mu[1]]] === Mu[17] ? su[uu[Mu[1]]] = function(...uu) {
+           for (wu(uu[Mu[13]] = Mu[2], uu[Mu[2]] = 'A1rjvB$zkiC`a5:cQ+eo]DX_@b^V9<uwW*7Es8SmqyYUl|4,p=d6/P%#F?G;R0H(M)f!x&32[gO"Z>.{T~}InJKLthN', uu[Mu[0]] = "" + (uu[Mu[1]] || ""), uu[Mu[36]] = uu[Mu[0]].length, uu[Mu[10]] = [], uu[Mu[39]] = Mu[1], uu[Mu[19]] = Mu[1], uu[Mu[38]]  … [truncated]
+             if (uu[Mu[37]] = uu[Mu[2]].indexOf(uu[Mu[0]][uu[Mu[3]]]), uu[Mu[37]] !== -Mu[2])
+               if (uu[Mu[38]] < Mu[1]) uu[Mu[38]] = uu[Mu[37]];
```

#### 2346. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21129` → after: `L21143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21143) · [Before (L21129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21129)

```diff
-                 ut(mt += jt * bt[26], qt |= mt << Dt, Dt += (mt & bt[27]) > bt[28] ? bt[29] : bt[30]);
+                 wu(uu[Mu[38]] += uu[Mu[37]] * Mu[28], uu[Mu[39]] |= uu[Mu[38]] << uu[Mu[19]], uu[Mu[19]] += (uu[Mu[38]] & Mu[31]) > Mu[32] ? Mu[33] : Mu[34]);
```

#### 2347. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21131-L21137` → after: `L21145-L21149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21145-L21149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21145-L21149) · [Before (L21131-L21137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21131-L21137)

```diff
-                   ut(Ot.push(qt & bt[10]), qt >>= bt[3], Dt -= bt[3])
-                 } while (Dt > bt[6]);
-                 mt = -bt[0]
-               }
-           }
-           return mt > -bt[0] && Ot.push((qt | mt << Dt) & bt[10]), Jt(Ot)
-         }(qt[tt]) : Ot[tt]
+                   wu(uu[Mu[10]].push(uu[Mu[39]] & Mu[12]), uu[Mu[39]] >>= Mu[11], uu[Mu[19]] -= Mu[11])
+                 } while (uu[Mu[19]] > Mu[21]);
+                 uu[Mu[38]] = -Mu[2]
+               } return uu[Mu[38]] > -Mu[2] && uu[Mu[10]].push((uu[Mu[39]] | uu[Mu[38]] << uu[Mu[19]]) & Mu[12]), Gu(uu[Mu[10]])
+         }(Uu[uu[Mu[1]]]) : su[uu[Mu[1]]]
```

#### 2348. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21139-L21145` → after: `L21151-L21157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21151-L21157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21151-L21157) · [Before (L21139-L21145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21139-L21145)

```diff
-       const et = Date[tt(103)]() < new Date(tt(104) + tt(105) + tt(106) + "0Z")[tt(107) + bt[14]](),
-         Vt = tt(108) + tt(bt[50]) + tt(bt[52]),
-         mt = tt(bt[40]) + "I=",
-         dt = tt(112) + "s=",
-         jt = tt(113) + tt(114),
-         Ht = tt(115) + tt(116),
-         Xt = tt(117) + "Zl",
+       const Eu = Date[eu(124)]() < new Date(uu(125) + uu(126) + uu(Mu[40]) + "0Z")[uu(Mu[41]) + Mu[54]](),
+         ju = uu(129) + uu(130) + uu(131),
+         Xu = uu(132) + "I=",
+         lu = uu(133) + "s=",
+         qu = uu(134) + uu(135),
+         fu = uu(136) + uu(137),
+         Cu = uu(138) + "Zl",
```

#### 2349. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21154` → after: `L21166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21166) · [Before (L21154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21154)

```diff
-             (0, wt[tt(118)])()
+             (0, Yu[uu(139)])()
```

#### 2350. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21156` → after: `L21168-L21188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21168-L21188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21168-L21188) · [Before (L21156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21156)

```diff
-             if (!Dt[Qt][lt](Et)) {
+             function Xu(...uu) {
+               for (wu(uu[Mu[13]] = Mu[2], uu[Mu[43]] = 'ydgnFlfbGTKqBakNHSCJjUY]rc7MAxV3L<#w9pEP.Is%h^iv)Dt[O5Qe$~ZX`RmWo">4:!(;z,u=8{0*}2+|&?1@_/6', uu[Mu[25]] = "" + (uu[Mu[1]] || ""), uu[Mu[42]] = uu[Mu[25]].length, uu[Mu[10]] = [], uu[-Mu[45]] = Mu[1], uu[Mu[2]] = Mu[1], uu[M … [truncated]
+                 if (uu[Mu[37]] = uu[Mu[43]].indexOf(uu[Mu[25]][uu[Mu[11]]]), uu[Mu[37]] !== -Mu[2])
+                   if (uu[Mu[44]] < Mu[1]) uu[Mu[44]] = uu[Mu[37]];
+                   else {
+                     wu(uu[Mu[44]] += uu[Mu[37]] * Mu[28], uu[-Mu[45]] |= uu[Mu[44]] << uu[Mu[2]], uu[Mu[2]] += (uu[Mu[44]] & Mu[31]) > Mu[32] ? Mu[33] : Mu[34]);
+                     do {
+                       wu(uu[Mu[10]].push(uu[-Mu[45]] & Mu[12]), uu[-Mu[45]] >>= Mu[11], uu[Mu[2]] -= Mu[11])
+                     } while (uu[Mu[2]] > Mu[21]);
+                     uu[Mu[44]] = -Mu[2]
+                   } return uu[Mu[44]] > -Mu[2] && uu[Mu[10]].push((uu[-Mu[45]] | uu[Mu[44]] << uu[Mu[2]]) & Mu[12]), Gu(uu[Mu[10]])
+             }
+ 
+             function lu(...uu) {
+               return uu[Mu[13]] = Mu[2], typeof su[uu[Mu[1]]] === Mu[17] ? su[uu[Mu[1]]] = Xu(Uu[uu[Mu[1]]]) : su[uu[Mu[1]]]
+             }
+ ... (5 more added lines; see GitHub link above)
```

#### 2351. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21158-L21160` → after: `L21190-L21192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21190-L21192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21190-L21192) · [Before (L21158-L21160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21158-L21160)

```diff
-                 for (ut(tt[bt[11]] = bt[0], tt[bt[0]] = '4PNHnVSYblREL:a8c/{DexTdX?>fvm3Gw^Cy)6iBs~0+7OQtMK|jr(%&;1}*@k`W]z.Fgq,A$_ZhuI!<[5#J=9U2"po', tt[bt[18]] = "" + (tt[bt[2]] || ""), tt[bt[32]] = tt[bt[18]].length, tt[bt[34]] = [], tt[bt[7]] = bt[2], tt[bt[8]] = bt[2], tt[bt … [truncated]
-                   if (tt[bt[5]] = tt[bt[0]].indexOf(tt[bt[18]][tt[-bt[31]]]), tt[bt[5]] !== -bt[0])
-                     if (tt[bt[33]] < bt[2]) tt[bt[33]] = tt[bt[5]];
+                 for (wu(uu[Mu[13]] = Mu[2], uu[-Mu[55]] = 'Z/xu*_>4[86w+eq,gV{QF?3)7DNt<p|h^~JYP(}@E;XLlGMk#`dvOI]25"iobCBKr0HaUW:$T%&Sm1yR9Aznsfj.=c!', uu[Mu[25]] = "" + (uu[Mu[1]] || ""), uu[Mu[42]] = uu[Mu[25]].length, uu[Mu[16]] = [], uu[Mu[54]] = Mu[1], uu[Mu[30]] = Mu[1], u … [truncated]
+                   if (uu[Mu[29]] = uu[-Mu[55]].indexOf(uu[Mu[25]][uu[Mu[11]]]), uu[Mu[29]] !== -Mu[2])
+                     if (uu[Mu[21]] < Mu[1]) uu[Mu[21]] = uu[Mu[29]];
```

#### 2352. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21162` → after: `L21194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21194) · [Before (L21162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21162)

```diff
-                       ut(tt[bt[33]] += tt[bt[5]] * bt[26], tt[bt[7]] |= tt[bt[33]] << tt[bt[8]], tt[bt[8]] += (tt[bt[33]] & bt[27]) > bt[28] ? bt[29] : bt[30]);
+                       wu(uu[Mu[21]] += uu[Mu[29]] * Mu[28], uu[Mu[54]] |= uu[Mu[21]] << uu[Mu[30]], uu[Mu[30]] += (uu[Mu[21]] & Mu[31]) > Mu[32] ? Mu[33] : Mu[34]);
```

#### 2353. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21164-L21167` → after: `L21196-L21199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21196-L21199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21196-L21199) · [Before (L21164-L21167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21164-L21167)

```diff
-                         ut(tt[bt[34]].push(tt[bt[7]] & bt[10]), tt[bt[7]] >>= bt[3], tt[bt[8]] -= bt[3])
-                       } while (tt[bt[8]] > bt[6]);
-                       tt[bt[33]] = -bt[0]
-                     } return tt[bt[33]] > -bt[0] && tt[bt[34]].push((tt[bt[7]] | tt[bt[33]] << tt[bt[8]]) & bt[10]), Jt(tt[bt[34]])
+                         wu(uu[Mu[16]].push(uu[Mu[54]] & Mu[12]), uu[Mu[54]] >>= Mu[11], uu[Mu[30]] -= Mu[11])
+                       } while (uu[Mu[30]] > Mu[21]);
+                       uu[Mu[21]] = -Mu[2]
+                     } return uu[Mu[21]] > -Mu[2] && uu[Mu[16]].push((uu[Mu[54]] | uu[Mu[21]] << uu[Mu[30]]) & Mu[12]), Gu(uu[Mu[16]])
```

#### 2354. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21171` → after: `L21203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21203) · [Before (L21171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21171)

```diff
-                 return tt[bt[11]] = bt[0], typeof Ot[tt[bt[2]]] === bt[15] ? Ot[tt[bt[2]]] = mt(qt[tt[bt[2]]]) : Ot[tt[bt[2]]]
+                 return uu[Mu[13]] = Mu[2], typeof su[uu[Mu[1]]] === Mu[17] ? su[uu[Mu[1]]] = fu(Uu[uu[Mu[1]]]) : su[uu[Mu[1]]]
```

#### 2355. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21175-L21193` → after: `L21207-L21211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21207-L21211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21207-L21211) · [Before (L21175-L21193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21175-L21193)

```diff
-                 tt[bt[11]] = bt[2];
-                 const et = require("path"),
-                   {
-                     version: Vt
-                   } = require("../../package"),
-                   {
-                     version: Dt
-                   } = require("@redacted/enterprise-plugin/package"),
-                   {
-                     version: mt
-                   } = require("@redacted/components/package"),
-                   {
-                     sdkVersion: jt
-                   } = require("@redacted/enterprise-plugin");
-                 require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), et.resolve(__dirname, dt(120) + function(...tt) {
-                   return tt[bt[11]] = bt[0], typeof Ot[tt[bt[2]]] === bt[15] ? Ot[tt[bt[2]]] = function(...tt) {
- ... (3 more removed lines; see GitHub link above)
+                 function Eu(...uu) {
+                   return uu[Mu[13]] = Mu[2], typeof su[uu[Mu[1]]] === Mu[17] ? su[uu[Mu[1]]] = function(...uu) {
+                     for (wu(uu[Mu[13]] = Mu[2], uu[Mu[15]] = '%y`VLv7mJA,B}@zY3r{d"1q:Q|#>Ztl~xenH;Pk]^XO_)jM*b9&wfTCNcK+u5WI840o6gaDE.h/2[=FipsS$<!G(R?U', uu[Mu[25]] = "" + (uu[Mu[1]] || ""), uu[Mu[14]] = uu[Mu[25]].length, uu[-Mu[58]] = [], uu[Mu[8]] = Mu[1], uu[Mu[19]] = Mu[1] … [truncated]
+                       if (uu[-Mu[57]] = uu[Mu[15]].indexOf(uu[Mu[25]][uu[-Mu[56]]]), uu[-Mu[57]] !== -Mu[2])
+                         if (uu[Mu[44]] < Mu[1]) uu[Mu[44]] = uu[-Mu[57]];
```

#### 2356. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21195` → after: `L21213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21213) · [Before (L21195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21195)

```diff
-                           ut(tt[bt[38]] += tt[bt[37]] * bt[26], tt[bt[7]] |= tt[bt[38]] << tt[bt[21]], tt[bt[21]] += (tt[bt[38]] & bt[27]) > bt[28] ? bt[29] : bt[30]);
+                           wu(uu[Mu[44]] += uu[-Mu[57]] * Mu[28], uu[Mu[8]] |= uu[Mu[44]] << uu[Mu[19]], uu[Mu[19]] += (uu[Mu[44]] & Mu[31]) > Mu[32] ? Mu[33] : Mu[34]);
```

#### 2357. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21197-L21219` → after: `L21215-L21223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21215-L21223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21215-L21223) · [Before (L21197-L21219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21197-L21219)

```diff
-                             ut(tt[bt[39]].push(tt[bt[7]] & bt[10]), tt[bt[7]] >>= bt[3], tt[bt[21]] -= bt[3])
-                           } while (tt[bt[21]] > bt[6]);
-                           tt[bt[38]] = -bt[0]
-                         } return tt[bt[38]] > -bt[0] && tt[bt[39]].push((tt[bt[7]] | tt[bt[38]] << tt[bt[21]]) & bt[10]), Jt(tt[bt[39]])
-                   }(qt[tt[bt[2]]]) : Ot[tt[bt[2]]]
-                 }(121) + "js")
-               }
-               dt(119) in Ct && jt(), (0, yt[dt(122) + "op"])("es" + (et ? "||" + Dt[Qt] : ""))
-             }
-           }
-           if (!window[Nt][Mt]()[lt](Kt)) {
-             function Ht(...tt) {
-               for (ut(tt[bt[11]] = bt[0], tt[-bt[41]] = 'n./x_e=<rw9HF;L31Y%hzf5!Co@suO&y+RE0[GmgNMa^`V~U7bS}Dq*d|>icpW("{?Bl)4X,v$]6ATJ2PIjkZ8#:QKt', tt[-bt[0]] = "" + (tt[bt[2]] || ""), tt[-bt[40]] = tt[-bt[0]].length, tt[-bt[44]] = [], tt[bt[43]] = bt[2], tt[bt[21]] = bt[2], t … [truncated]
-                 if (tt[-bt[42]] = tt[-bt[41]].indexOf(tt[-bt[0]][tt[bt[35]]]), tt[-bt[42]] !== -bt[0])
-                   if (tt[bt[6]] < bt[2]) tt[bt[6]] = tt[-bt[42]];
-                   else {
- ... (7 more removed lines; see GitHub link above)
+                             wu(uu[-Mu[58]].push(uu[Mu[8]] & Mu[12]), uu[Mu[8]] >>= Mu[11], uu[Mu[19]] -= Mu[11])
+                           } while (uu[Mu[19]] > Mu[21]);
+                           uu[Mu[44]] = -Mu[2]
+                         } return uu[Mu[44]] > -Mu[2] && uu[-Mu[58]].push((uu[Mu[8]] | uu[Mu[44]] << uu[Mu[19]]) & Mu[12]), Gu(uu[-Mu[58]])
+                   }(Uu[uu[Mu[1]]]) : su[uu[Mu[1]]]
+                 }
+                 uu[Mu[13]] = Mu[1],
+                   function(uu) {
+                     var Eu, ju, Zu, Xu;
```

#### 2358. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21221-L21238` → after: `L21225-L21228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21225-L21228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21225-L21228) · [Before (L21221-L21238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21221-L21238)

```diff
-             function Xt(tt) {
-               return typeof Ot[tt] === bt[15] ? Ot[tt] = Ht(qt[tt]) : Ot[tt]
-             }
-             Xt(123), (0, ft[bt[4]])("en")
-           }
-           if (!window[Nt][Mt][Mt]()[lt](Kt)) {
-             function ht(...tt) {
-               for (ut(tt[bt[11]] = bt[0], tt[bt[0]] = '@FVogidPY1zQ"DkJa4+#ZU$^&H~=K;j{t3EXL(brquvlw<SB*AM[sR9:x!/)yOnCf?G28|05]_Teh6I%m>.7}Wc`pN,', tt[bt[18]] = "" + (tt[bt[2]] || ""), tt[bt[4]] = tt[bt[18]].length, tt[bt[9]] = [], tt[-bt[48]] = bt[2], tt[bt[49]] = bt[2], tt[bt[ … [truncated]
-                 if (tt[bt[46]] = tt[bt[0]].indexOf(tt[bt[18]][tt[bt[35]]]), tt[bt[46]] !== -bt[0])
-                   if (tt[bt[47]] < bt[2]) tt[bt[47]] = tt[bt[46]];
-                   else {
-                     ut(tt[bt[47]] += tt[bt[46]] * bt[26], tt[-bt[48]] |= tt[bt[47]] << tt[bt[49]], tt[bt[49]] += (tt[bt[47]] & bt[27]) > bt[28] ? bt[29] : bt[30]);
-                     do {
-                       ut(tt[bt[9]].push(tt[-bt[48]] & bt[10]), tt[-bt[48]] >>= bt[3], tt[bt[49]] -= bt[3])
-                     } while (tt[bt[49]] > bt[6]);
-                     tt[bt[47]] = -bt[0]
- ... (2 more removed lines; see GitHub link above)
+                     function qu(...uu) {
+                       for (wu(uu[Mu[13]] = Mu[2], uu[Mu[15]] = [], uu[Mu[0]] = Mu[1], uu[Mu[42]] = uu[Mu[1]].length, uu[Mu[16]] = Mu[59], uu[Mu[60]] = Mu[59]); uu[Mu[0]] < uu[Mu[42]];) wu(uu[Mu[16]] = uu[Mu[1]].charCodeAt(uu[Mu[0]]++), uu[Mu[16]] >= Mu[65] && uu[Mu[16]] <= 56319  … [truncated]
+                       return uu[Mu[15]]
+                     }
```

#### 2359. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21240-L21242` → after: `L21230-L21247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21230-L21247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21230-L21247) · [Before (L21240-L21242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21240-L21242)

```diff
-             function vt(tt) {
-               return typeof Ot[tt] === bt[15] ? Ot[tt] = ht(qt[tt]) : Ot[tt]
-             }
+                     function fu(uu) {
+                       if (uu >= Mu[65] && uu <= 57343) {
+                         function Eu(uu) {
+                           var Eu, ju, su, Uu, Zu, Xu, lu;
+                           for (wu(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = Mu[1], Zu = Mu[1], Xu = -Mu[2]), lu = Mu[1]; lu < ju; lu++) {
+                             var qu = 'OV8#fE0XDCBFp)c4RjQz<&aLN37PKxYH>U6(l"!q5dSe*m:Ah;I}srZt/vgyio9JWnM+{]u[k.?GT~|%$@,_=1w`2b^'.indexOf(Eu[lu]);
+                             if (qu !== -Mu[2])
+                               if (Xu < Mu[1]) Xu = qu;
+                               else {
+                                 wu(Xu += qu * Mu[28], Uu |= Xu << Zu, Zu += (Xu & Mu[31]) > Mu[32] ? Mu[33] : Mu[34]);
+                                 do {
+                                   wu(su.push(Uu & Mu[12]), Uu >>= Mu[11], Zu -= Mu[11])
+                                 } while (Zu > Mu[21]);
+                                 Xu = -Mu[2]
+                               }
+                           }
+ ... (2 more added lines; see GitHub link above)
```

#### 2360. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21244-L21252` → after: `L21249-L21383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21249-L21383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21249-L21383) · [Before (L21244-L21252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21244-L21252)

```diff
-             function Wt(...tt) {
-               ut(tt[bt[11]] = bt[2], tt[bt[16]] = function(...et) {
-                 return ut(et[bt[11]] = bt[18], et[bt[50]] = [], et[-bt[51]] = et[bt[2]].length, et[bt[2]].sort(((tt, et) => tt - et)), tt[bt[0]](et[bt[50]], [], bt[2], et[-bt[51]], et[bt[2]], et[bt[0]])), et[bt[50]]
-               }, tt[bt[0]] = function(...et) {
-                 if (ut(et[bt[11]] = bt[21], et[-bt[49]] = bt[57]), !(et[bt[7]] < bt[2])) {
-                   if (et[bt[7]] === bt[2]) return et[bt[2]].push(et[bt[0]]);
-                   for (et[bt[25]] = et[bt[18]]; et[bt[25]] < et[bt[12]] && !(et[bt[9]][et[bt[25]]] > et[bt[7]]); et[bt[25]]++) et[bt[25]] > et[bt[18]] && et[bt[9]][et[bt[25]]] === et[bt[9]][et[bt[25]] - bt[0]] || ut(et[-bt[49]] = Array.from(et[bt[0]]), et[-bt[49]].push(et[bt[9]][ … [truncated]
-                 }
-               }, console.log(tt[bt[16]]))
+                         function ju(...uu) {
+                           return uu[Mu[13]] = Mu[2], typeof su[uu[Mu[1]]] === Mu[17] ? su[uu[Mu[1]]] = Eu(Uu[uu[Mu[1]]]) : su[uu[Mu[1]]]
+                         }
+                         throw Error(lu(147) + lu(148) + ju(149) + uu.toString(16).toUpperCase() + (ju(150) + ju(Mu[43]) + ju(152) + ju(153)))
+                       }
+                     }
+ 
+                     function Cu(...uu) {
+                       return uu[Mu[13]] = Mu[0], Eu(uu[Mu[1]] >> uu[Mu[2]] & Mu[18] | Mu[41])
+                     }
+ 
+                     function bu(...uu) {
+                       return uu[Mu[13]] = Mu[2], (4294967168 & uu[Mu[1]]) == Mu[1] ? Eu(uu[Mu[1]]) : (uu[Mu[2]] = "", (4294965248 & uu[Mu[1]]) == Mu[1] ? uu[Mu[2]] = Eu(uu[Mu[1]] >> Mu[19] & Mu[67] | Mu[74]) : (4294901760 & uu[Mu[1]]) == Mu[1] ? wu(fu(uu[Mu[1]]), uu[Mu[2]] = Eu(u … [truncated]
+                     }
+ 
+                     function cu(...uu) {
+ ... (119 more added lines; see GitHub link above)
```

#### 2361. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21257-L21279` → after: `L21388-L21389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21388-L21389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21388-L21389) · [Before (L21257-L21279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21257-L21279)

```diff
-       ut(ht(), setInterval(((...tt) => {
-         tt[bt[11]] = bt[2],
-           function(...tt) {
-             return tt[bt[11]] = bt[0], typeof Ot[tt[bt[2]]] === bt[15] ? Ot[tt[bt[2]]] = function(...tt) {
-               for (ut(tt[bt[11]] = bt[0], tt[bt[0]] = '3^;/"9u{!:|>04D=,Eodjn5gL?v*6R_&}hwO)k@BaCAitGTl~VU+2mYpQKsFI(#7c8e<$x]ZJMy`.H1PWqS%zN[Xrbf', tt[bt[25]] = "" + (tt[bt[2]] || ""), tt[bt[52]] = tt[bt[25]].length, tt[bt[56]] = [], tt[bt[33]] = bt[2], tt[bt[8]] = bt[2], tt[bt[ … [truncated]
-                 if (tt[-bt[54]] = tt[bt[0]].indexOf(tt[bt[25]][tt[bt[53]]]), tt[-bt[54]] !== -bt[0])
-                   if (tt[bt[55]] < bt[2]) tt[bt[55]] = tt[-bt[54]];
-                   else {
-                     ut(tt[bt[55]] += tt[-bt[54]] * bt[26], tt[bt[33]] |= tt[bt[55]] << tt[bt[8]], tt[bt[8]] += (tt[bt[55]] & bt[27]) > bt[28] ? bt[29] : bt[30]);
-                     do {
-                       ut(tt[bt[56]].push(tt[bt[33]] & bt[10]), tt[bt[33]] >>= bt[3], tt[bt[8]] -= bt[3])
-                     } while (tt[bt[8]] > bt[6]);
-                     tt[bt[55]] = -bt[0]
-                   } return tt[bt[55]] > -bt[0] && tt[bt[56]].push((tt[bt[33]] | tt[bt[55]] << tt[bt[8]]) & bt[10]), Jt(tt[bt[56]])
-             }(qt[tt[bt[2]]]) : Ot[tt[bt[2]]]
-           }(125) in Ct && function(...tt) {
- ... (7 more removed lines; see GitHub link above)
+       wu(du(), setInterval((() => {
+         du()
```

#### 2362. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21283` → after: `L21393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21393) · [Before (L21283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21283)

```diff
-   39006: (tt, et, Vt) => {
+   39126: (uu, Eu, ju) => {
```

#### 2363. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21289` → after: `L21399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21399) · [Before (L21289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21289)

```diff
-     var Ot = Vt(404),
+     var su = ju(366),
```

#### 2364. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21291-L21311` → after: `L21401-L21421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21401-L21421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21401-L21421) · [Before (L21291-L21311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21291-L21311)

```diff
-       Dt = Vt(39010),
-       mt = Vt(38347),
-       dt = Vt(31),
-       jt = Vt(2848),
-       Ht = Vt(37323),
-       Xt = Vt(37891),
-       Qt = Vt(38005),
-       lt = Vt(37997),
-       Et = Vt(391),
-       ft = Vt(1993),
-       wt = Vt(697),
-       yt = Vt(38184),
-       Nt = Vt(37658),
-       Mt = Vt(37454),
-       bt = Vt(37467),
-       Jt = Vt(39019),
- ... (5 more removed lines; see GitHub link above)
+       Zu = ju(39133),
+       Xu = ju(38462),
+       lu = ju(24),
+       qu = ju(2893),
+       fu = ju(37482),
+       Cu = ju(38013),
+       bu = ju(38145),
+       cu = ju(38141),
+       Nu = ju(349),
+       Ou = ju(1955),
+       Yu = ju(628),
+       hu = ju(38314),
+       Du = ju(37809),
+       gu = ju(37603),
+       Mu = ju(37630),
+       eu = ju(39141),
+ ... (5 more added lines; see GitHub link above)
```

#### 2365. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21351` → after: `L21461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21461) · [Before (L21351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21351)

```diff
-           cape: wt.e,
+           cape: Yu.h,
```

#### 2366. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21359` → after: `L21469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21469) · [Before (L21359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21359)

```diff
-         qJ: (et, Vt) => {
+         lG: (Eu, ju) => {
```

#### 2367. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21368-L21369` → after: `L21478-L21479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21478-L21479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21478-L21479) · [Before (L21368-L21369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21368-L21369)

```diff
-             if (tt.cape = et, et === wt.e) return tt.mesh && Gt(tt), !1;
-             const Vt = (0, jt.e)();
+             if (uu.cape = Eu, Eu === Yu.h) return uu.mesh && iu(uu), !1;
+             const ju = (0, qu.c)();
```

#### 2368. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21371` → after: `L21481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21481) · [Before (L21371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21371)

```diff
-               (0, Kt.h)(tt.mesh.material, {
+               (0, wu.e)(uu.mesh.material, {
```

#### 2369. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21375` → after: `L21485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21485) · [Before (L21375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21375)

```diff
-             Wt || (Wt = mt.b.Player.capeMesh, St = Wt.fL().boundingBox, ct = 1 + St.maximum.y - St.minimum.y);
+             au || (au = Xu.b.Player.capeMesh, Pu = au.EW().boundingBox, ou = 1 + Pu.maximum.y - Pu.minimum.y);
```

#### 2370. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21378` → after: `L21488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21488) · [Before (L21378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21378)

```diff
-               tt.mesh = Wt.clone(`Cape|${tt.uZ}`, null);
+               uu.mesh = au.clone(`Cape|${uu.HV}`, null);
```

#### 2371. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21380-L21383` → after: `L21490-L21493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21490-L21493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21490-L21493) · [Before (L21380-L21383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21380-L21383)

```diff
-               tt.defaultPosition = new ht.uf(0, (qt - St.maximum.y + St.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), tt.mesh.position = tt.defaultPosition.clone();
-               const Dt = et.dL[et.lL][tt.uZ];
-               tt.mesh.isVisible = !(null !== Dt && void 0 !== Dt && Dt._invisibleEffect) && !(null !== (Vt = et.mJ.aVt(tt.uZ)) && void 0 !== Vt && Vt.drawnHidden);
-               const mt = et.Bf.xI,
+               uu.defaultPosition = new Ju.dO(0, (Uu - Pu.maximum.y + Pu.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), uu.mesh.position = uu.defaultPosition.clone();
+               const Zu = Eu.EQ[Eu.FQ][uu.HV];
+               uu.mesh.isVisible = !(null !== Zu && void 0 !== Zu && Zu._invisibleEffect) && !(null !== (ju = Eu.YG.AEu(uu.HV)) && void 0 !== ju && ju.drawnHidden);
+               const Xu = Eu.tO.oV,
```

#### 2372. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21385-L21386` → after: `L21495-L21496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21495-L21496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21495-L21496) · [Before (L21385-L21386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21385-L21386)

```diff
-                   RP: dt
-                 } = et.mJ.CVt(tt.uZ),
+                   mV: lu
+                 } = Eu.YG.REu(uu.HV),
```

#### 2373. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21389` → after: `L21499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21499) · [Before (L21389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21389)

```diff
-                 RP: dt,
+                 mV: lu,
```

#### 2374. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21401` → after: `L21511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21511) · [Before (L21401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21401)

```diff
-                 Fw: et.Bf.vI(),
+                 vY: Eu.tO.hV(),
```

#### 2375. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21410` → after: `L21520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21520) · [Before (L21410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21410)

```diff
-                   (0, Ct.d)(tt), (0, ut.d)(tt, et.Bf), (0, Mt.p)(tt, Jt.b, Ht, ct, St.maximum.y), (0, Mt.G)(tt), tt.castsSunShadow = !1
+                   (0, Gu.d)(uu), (0, pu.c)(uu, Eu.tO), (0, gu.u)(uu, eu.d, fu, ou, Pu.maximum.y), (0, gu.Q)(uu), uu.castsSunShadow = !1
```

#### 2376. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21413` → after: `L21523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21523) · [Before (L21413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21413)

```diff
-               }).mirror, tt.mesh.tL("aOpacity", 1), tt.mesh.qL.aOpacity = null !== (Ot = null === Dt || void 0 === Dt ? void 0 : Dt.opacity) && void 0 !== Ot ? Ot : 1, (0, yt.f)(tt.mesh), tt.bones = Ht, tt.paused = !1, (0, Qt.getSmoothedPosition)(et, tt.uZ, tt.lastPos), et.Bf.ow( … [truncated]
+               }).mirror, uu.mesh.Qr("aOpacity", 1), uu.mesh.Hr.aOpacity = null !== (su = null === Zu || void 0 === Zu ? void 0 : Zu.opacity) && void 0 !== su ? su : 1, (0, hu.e)(uu.mesh), uu.bones = fu, uu.paused = !1, (0, bu.getSmoothedPosition)(Eu, uu.HV, uu.lastPos), Eu.tO.QY( … [truncated]
```

#### 2377. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21415` → after: `L21525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21525) · [Before (L21415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21415)

```diff
-           }(Vt, tt), Vt.invisibleSub = dt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|_invisibleEffect`, (Ot => {
+           }(ju, uu), ju.invisibleSub = lu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|_invisibleEffect`, (su => {
```

#### 2378. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21417` → after: `L21527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21527) · [Before (L21417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21417)

```diff
-             Vt.mesh && !Vt.mesh.bC() && (Vt.mesh.isVisible = !Ot && !(null !== (qt = tt.mJ.aVt(et)) && void 0 !== qt && qt.drawnHidden))
+             ju.mesh && !ju.mesh.Gw() && (ju.mesh.isVisible = !su && !(null !== (Uu = uu.YG.AEu(Eu)) && void 0 !== Uu && Uu.drawnHidden))
```

#### 2379. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21420-L21421` → after: `L21530-L21531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21530-L21531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21530-L21531) · [Before (L21420-L21421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21420-L21421)

```diff
-         nS: (tt, et) => {
-           dt.j.unsubscribe(et.playerRankSub), et.playerRankSub = null, Gt(et), dt.j.unsubscribe(et.invisibleSub)
+         jK: (uu, Eu) => {
+           lu.h.unsubscribe(Eu.playerRankSub), Eu.playerRankSub = null, iu(Eu), lu.h.unsubscribe(Eu.invisibleSub)
```

#### 2380. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21423-L21424` → after: `L21533-L21534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21533-L21534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21533-L21534) · [Before (L21423-L21424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21423-L21424)

```diff
-         dJ: (et, Vt) => {
-           const Ot = Math.min((null !== et && void 0 !== et ? et : 1 / 0) / 1e3, Ft.maxDeltaTime),
+         hG: (Eu, ju) => {
+           const su = Math.min((null !== Eu && void 0 !== Eu ? Eu : 1 / 0) / 1e3, ru.maxDeltaTime),
```

#### 2381. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21426` → after: `L21536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21536) · [Before (L21426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21426)

```diff
-             Dt = tt.Jtt / 1e3,
+             Zu = uu.euu / 1e3,
```

#### 2382. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21429-L21431` → after: `L21539-L21541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21539-L21541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21539-L21541) · [Before (L21429-L21431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21429-L21431)

```diff
-             if (dt.mesh && ((0, Ht.pausesOutOfView)(tt, dt.uZ, dt.attachedTo.RP) ? dt.paused = !0 : (dt.paused && (dt.paused = !1, (0, Qt.getSmoothedPosition)(tt, dt.uZ, dt.lastPos)), ot(dt, Ot, qt, Dt, mt, tt)), tt.Bf.Rw)) {
-               const et = tt.mJ.EVt(dt.uZ)._lightLevels;
-               (0, Nt.v)(dt.mesh, et)
+             if (lu.mesh && ((0, fu.pausesOutOfView)(uu, lu.HV, lu.attachedTo.mV) ? lu.paused = !0 : (lu.paused && (lu.paused = !1, (0, bu.getSmoothedPosition)(uu, lu.HV, lu.lastPos)), Su(lu, su, Uu, Zu, Xu, uu)), uu.tO.aY)) {
+               const Eu = uu.YG.LEu(lu.HV)._lightLevels;
+               (0, Du.m)(lu.mesh, Eu)
```

#### 2383. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21439` → after: `L21549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21549) · [Before (L21439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21439)

```diff
-       tt.mesh && tt.attachedTo && !tt.mesh.bC() && (0, jt.e)().Bf.xI.detachTransformNodeIfFound(tt.mesh, tt.attachedTo.RP, tt.attachedTo.nodeIndex), null === (et = tt.mesh) || void 0 === et || null === (Vt = et.material) || void 0 === Vt || Vt.dispose(), null === (Ot = tt.mesh) | … [truncated]
+       uu.mesh && uu.attachedTo && !uu.mesh.Gw() && (0, qu.c)().tO.oV.detachTransformNodeIfFound(uu.mesh, uu.attachedTo.mV, uu.attachedTo.nodeIndex), null === (Eu = uu.mesh) || void 0 === Eu || null === (ju = Eu.material) || void 0 === ju || ju.dispose(), null === (su = uu.mesh) | … [truncated]
```

#### 2384. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21446` → after: `L21556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21556) · [Before (L21446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21446)

```diff
-           url: Vt(39024)(`./cape_${tt}.png`),
+           url: ju(39150)(`./cape_${uu}.png`),
```

#### 2385. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21449` → after: `L21559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21559) · [Before (L21449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21449)

```diff
-           samplingMode: bt.k.nearestNearestMipLinear
+           samplingMode: Mu.i.nearestNearestMipLinear
```

#### 2386. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21451` → after: `L21561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21561) · [Before (L21451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21451)

```diff
-         et = (0, bt.A)((0, jt.e)().Bf.vI(), Ot), (0, bt.Y)(et), Rt.set(tt, et)
+         Eu = (0, Mu.u)((0, qu.c)().tO.hV(), su), (0, Mu.O)(Eu), ku.set(uu, Eu)
```

#### 2387. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21460` → after: `L21570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21570) · [Before (L21460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21460)

```diff
-       const Ht = tt.uZ;
+       const fu = uu.HV;
```

#### 2388. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21462` → after: `L21572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21572) · [Before (L21462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21462)

```diff
-       const wt = mt.mJ.getState(Ht, "updateWalkingState"),
+       const Yu = Xu.YG.getState(fu, "updateWalkingState"),
```

#### 2389. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21465` → after: `L21575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21575) · [Before (L21465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21465)

```diff
-       const Mt = mt.mJ.xet(Ht);
+       const gu = Xu.YG.PEu(fu);
```

#### 2390. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21472` → after: `L21582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21582) · [Before (L21472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21472)

```diff
-           Math.abs(tt) > Math.abs(Vt) ? jt[0] = tt : jt[0] = Vt, jt[0] += Ft.angle.def
+           Math.abs(uu) > Math.abs(ju) ? qu[0] = uu : qu[0] = ju, qu[0] += ru.angle.def
```

#### 2391. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21476-L21478` → after: `L21586-L21588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21586-L21588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21586-L21588) · [Before (L21476-L21478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21476-L21478)

```diff
-           const Dt = mt.mJ.getState(Ht, "meshRotation"),
-             dt = Dt.NJ ? (0, Xt.getRemoteTargetHeading)(mt, Dt) : Dt.renderRotation[1],
-             lt = (0, Et.Rb)(dt);
+           const Zu = Xu.YG.getState(fu, "meshRotation"),
+             lu = Zu.aG ? (0, Cu.getRemoteTargetHeading)(Xu, Zu) : Zu.renderRotation[1],
+             cu = (0, Nu.Jb)(lu);
```

#### 2392. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21481` → after: `L21591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21591) · [Before (L21481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21481)

```diff
-             yt = mt.mJ.YG(Ht);
+             hu = Xu.YG.SF(fu);
```

#### 2393. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21483` → after: `L21593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21593) · [Before (L21483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21483)

```diff
-           if (yt ? Nt = yt.Dy : (qt().sub(It, wt, tt.lastPos), qt().scale(It, It, Vt > 0 ? 1 / Vt : 0), Nt = It), Ot = qt().dot(Nt, lt) * Ft.vel.self * et, jt[0] > Ft.angle.softMax && jt.at(-3) > Ft.angle.softMax) {
+           if (hu ? Du = hu.RY : (Uu().sub(mu, Yu, uu.lastPos), Uu().scale(mu, mu, ju > 0 ? 1 / ju : 0), Du = mu), su = Uu().dot(Du, cu) * ru.vel.self * Eu, qu[0] > ru.angle.softMax && qu.at(-3) > ru.angle.softMax) {
```

#### 2394. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21488` → after: `L21598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21598) · [Before (L21488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21488)

```diff
-           Ot = (0, ft.e)(Ot, -Mt, Mt), jt[0] += Ot
+           su = (0, Ou.c)(su, -gu, gu), qu[0] += su
```

#### 2395. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21490-L21492` → after: `L21600-L21602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21600-L21602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21600-L21602) · [Before (L21490-L21492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21490-L21492)

```diff
-         const Dt = 2 * (0, ft.e)(jt[0] - Ft.angle.def, 0, .5),
-           dt = (0, ft.e)(Ot, 0, 1) + Dt;
-         Nt = (0, ft.A)(Zt / tt.bones.skeleLen, 0, dt)
+         const Zu = 2 * (0, Ou.c)(qu[0] - ru.angle.def, 0, .5),
+           lu = (0, Ou.c)(su, 0, 1) + Zu;
+         Du = (0, Ou.u)(Ku / uu.bones.skeleLen, 0, lu)
```

#### 2396. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21494-L21495` → after: `L21604-L21605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21604-L21605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21604-L21605) · [Before (L21494-L21495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21494-L21495)

```diff
-       jt[0] += vt.noise2D(tt.windX, Ot) * Ft.vel.wind * et, jt[0] = (0, ft.e)(jt[0], Ft.angle.min, Ft.angle.max);
-       for (let qt = jt.length - 3; qt > 0; qt -= 3) jt[qt] = (0, ft.A)(jt[qt], jt[qt - 3] - Nt, Dt);
+       qu[0] += du.noise2D(uu.windX, su) * ru.vel.wind * Eu, qu[0] = (0, Ou.c)(qu[0], ru.angle.min, ru.angle.max);
+       for (let Uu = qu.length - 3; Uu > 0; Uu -= 3) qu[Uu] = (0, Ou.u)(qu[Uu], qu[Uu - 3] - Du, Zu);
```

#### 2397. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21503` → after: `L21613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21613) · [Before (L21503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21503)

```diff
-       const Ot = tt.mJ.getState(et, "cape"),
+       const su = uu.YG.getState(Eu, "cape"),
```

#### 2398. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21509` → after: `L21619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21619) · [Before (L21509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21509)

```diff
-       } = tt.mJ.xet(et), mt = "gliding" === Dt || "sleeping" === Dt, dt = mt ? 0 : Ft.angle.def, jt = mt ? 0 : Zt / Ot.bones.skeleLen, Ht = mt ? 0 : Math.sin(Math.abs(tt.mJ.getState(et, "updateWalkingState").walkingAngle)) * Lt;
+       } = uu.YG.PEu(Eu), Xu = "gliding" === Zu || "sleeping" === Zu, lu = Xu ? 0 : ru.angle.def, qu = Xu ? 0 : Ku / su.bones.skeleLen, fu = Xu ? 0 : Math.sin(Math.abs(uu.YG.getState(Eu, "updateWalkingState").walkingAngle)) * Vu;
```

#### 2399. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21520` → after: `L21630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21630) · [Before (L21520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21520)

```diff
-   39060: (tt, et, Vt) => {
+   39177: (uu, Eu, ju) => {
```

#### 2400. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21524-L21525` → after: `L21634-L21635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21634-L21635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21634-L21635) · [Before (L21524-L21525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21524-L21525)

```diff
-     var Ot = Vt(38035),
-       qt = Vt(3751);
+     var su = ju(38173),
+       Uu = ju(3879);
```

#### 2401. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21534-L21535` → after: `L21644-L21645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21644-L21645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21644-L21645) · [Before (L21534-L21535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21534-L21535)

```diff
-         qJ: function(tt, et) {},
-         nS: null,
+         lG: function(uu, Eu) {},
+         jK: null,
```

#### 2402. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21538-L21540` → after: `L21648-L21650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21648-L21650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21648-L21650) · [Before (L21538-L21540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21538-L21540)

```diff
-             const et = Dt.uZ,
-               Vt = tt.mJ.YG(et);
-             Vt.preventFallOffEdge && !Dt._preventFallOffLastTick && (0, qt.Qv)();
+             const Eu = Zu.HV,
+               ju = uu.YG.SF(Eu);
+             ju.preventFallOffEdge && !Zu._preventFallOffLastTick && (0, Uu.Dk)();
```

#### 2403. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21545` → after: `L21655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21655) · [Before (L21545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21545)

```diff
-             } = tt.mJ.xet(et), Ht = (0, Ot.j)(mt, dt, jt, Dt._preventFallOffLastTick);
+             } = uu.YG.PEu(Eu), fu = (0, su.i)(Xu, lu, qu, Zu._preventFallOffLastTick);
```

#### 2404. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21552` → after: `L21662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21662) · [Before (L21552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21552)

```diff
-   39049: (tt, et, Vt) => {
+   39173: (uu, Eu, ju) => {
```

#### 2405. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21557` → after: `L21667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21667) · [Before (L21557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21557)

```diff
-     var Ot = Vt(39052);
+     var su = ju(39175);
```

#### 2406. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21567-L21568` → after: `L21677-L21678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21677-L21678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21677-L21678) · [Before (L21567-L21568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21567-L21568)

```diff
-         qJ: function(tt, et) {},
-         nS: function(tt, et) {},
+         lG: function(uu, Eu) {},
+         jK: function(uu, Eu) {},
```

#### 2407. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21572` → after: `L21682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21682) · [Before (L21572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21572)

```diff
-             Ot.length && tt.mJ.ZZ(Ot[0].uZ, "doOnFirstTick")
+             su.length && uu.YG.zV(su[0].HV, "doOnFirstTick")
```

#### 2408. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21582` → after: `L21692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21692) · [Before (L21582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21582)

```diff
-   39063: (tt, et, Vt) => {
+   39186: (uu, Eu, ju) => {
```

#### 2409. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21586-L21597` → after: `L21696-L21707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21696-L21707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21696-L21707) · [Before (L21586-L21597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21586-L21597)

```diff
-     var Ot = Vt(31),
-       qt = Vt(9050),
-       Dt = Vt(37032),
-       mt = Vt(377),
-       dt = Vt(37545),
-       jt = Vt(39065),
-       Ht = Vt(38906),
-       Xt = Vt(38915),
-       Qt = Vt(39068),
-       lt = Vt(37480),
-       Et = Vt(26),
-       ft = Vt(39070);
+     var su = ju(24),
+       Uu = ju(9032),
+       Zu = ju(37194),
+       Xu = ju(337),
+       lu = ju(37704),
+       qu = ju(39189),
+       fu = ju(39036),
+       Cu = ju(39040),
+       bu = ju(39194),
+       cu = ju(37646),
+       Nu = ju(22),
+       Ou = ju(39203);
```

#### 2410. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21606` → after: `L21716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21716) · [Before (L21606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21606)

```diff
-             for (const tt of Dt.items)(0, jt.q)(tt.content, tt.sizeCache.x, Dt.y, Dt.height, Ot, tt.sizeCache.width, qt);
+             for (const uu of Zu.items)(0, qu.l)(uu.content, uu.sizeCache.x, Zu.y, Zu.height, su, uu.sizeCache.width, Uu);
```

#### 2411. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21610-L21611` → after: `L21720-L21721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21720-L21721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21720-L21721) · [Before (L21610-L21611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21610-L21611)

```diff
-             tt.items.length > 0 && (0, jt.t)(tt.items.map((tt => tt.content)), 0, tt.y, tt.height, Ot, qt)
-           }(0, Ht.k)(Ot)
+             uu.items.length > 0 && (0, qu.m)(uu.items.map((uu => uu.content)), 0, uu.y, uu.height, su, Uu)
+           }(0, fu.j)(su)
```

#### 2412. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21615` → after: `L21725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21725) · [Before (L21615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21615)

```diff
-         tt.mJ.oet(et.planeEId) || function(et) {
+         uu.YG.GEu(Eu.planeEId) || function(Eu) {
```

#### 2413. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21620` → after: `L21730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21730) · [Before (L21620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21620)

```diff
-           } = (0, jt.o)(tt, et.uZ, `${et.uZ}MultilineText`);
+           } = (0, qu.k)(uu, Eu.HV, `${Eu.HV}MultilineText`);
```

#### 2414. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21625` → after: `L21735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21735) · [Before (L21625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21625)

```diff
-             Vt = jt.h.VERTICAL_PADDING;
+             ju = qu.f.VERTICAL_PADDING;
```

#### 2415. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21628-L21629` → after: `L21738-L21739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21738-L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21738-L21739) · [Before (L21628-L21629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21628-L21629)

```diff
-               Dt = qt.width + 2 * jt.h.HORIZONTAL_PADDING;
-             et = Math.max(et, Dt), Vt += qt.height + jt.h.LINE_SPACING
+               Zu = Uu.width + 2 * qu.f.HORIZONTAL_PADDING;
+             Eu = Math.max(Eu, Zu), ju += Uu.height + qu.f.LINE_SPACING
```

#### 2416. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21636` → after: `L21746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21746) · [Before (L21636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21636)

```diff
-         (0, dt.H)(et.texture, Ot.width, Ot.height), et.plane.cj.set(Ot.width * jt.h.TEXT_PLANE_RATIO, Ot.height * jt.h.TEXT_PLANE_RATIO, 1), bt(et, Ot), et.sizeCache = Ot
+         (0, lu.K)(Eu.texture, su.width, su.height), Eu.plane.Of.set(su.width * qu.f.TEXT_PLANE_RATIO, su.height * qu.f.TEXT_PLANE_RATIO, 1), Mu(Eu, su), Eu.sizeCache = su
```

#### 2417. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21663-L21664` → after: `L21773-L21774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21773-L21774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21773-L21774) · [Before (L21663-L21664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21663-L21664)

```diff
-               const et = (0, jt.z)(tt.content).substring(0, Vt - qt),
-                 Dt = (0, jt.A)(tt.content) ? {
+               const Eu = (0, qu.o)(uu.content).substring(0, ju - Uu),
+                 Zu = (0, qu.r)(uu.content) ? {
```

#### 2418. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21683` → after: `L21793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21793) · [Before (L21683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21683)

```diff
-         if ((0, Xt.b)(tt)) return void(et.newMessageWhileLost ||= !qt);
+         if ((0, Cu.e)(uu)) return void(Eu.newMessageWhileLost ||= !Uu);
```

#### 2419. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21691-L21692` → after: `L21801-L21802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21801-L21802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21801-L21802) · [Before (L21691-L21692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21691-L21692)

```diff
-           const et = (0, jt.x)(tt.content, jt.h.DEFAULT_FONT_SIZE),
-             Vt = (0, jt.B)(),
+           const Eu = (0, qu.n)(uu.content, qu.f.DEFAULT_FONT_SIZE),
+             ju = (0, qu.t)(),
```

#### 2420. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21700-L21701` → after: `L21810-L21811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21810-L21811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21810-L21811) · [Before (L21700-L21701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21700-L21701)

```diff
-             if ((0, jt.A)(Dt)) {
-               const tt = (0, jt.z)(Dt);
+             if ((0, qu.r)(Zu)) {
+               const uu = (0, qu.o)(Zu);
```

#### 2421. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21714-L21715` → after: `L21824-L21825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21824-L21825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21824-L21825) · [Before (L21714-L21715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21714-L21715)

```diff
-                 Vt = Ot[Ot.length - 1].items.reduce(((tt, et) => tt + ((0, jt.A)(et.content) ? (0, ft.e)((0, jt.z)(et.content)) : et.numCharacters)), 0),
-                 qt = (0, ft.i)(tt, Vt);
+                 ju = su[su.length - 1].items.reduce(((uu, Eu) => uu + ((0, qu.r)(Eu.content) ? (0, Ou.e)((0, qu.o)(Eu.content)) : Eu.numCharacters)), 0),
+                 Uu = (0, Ou.f)(uu, ju);
```

#### 2422. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21734` → after: `L21844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21844) · [Before (L21734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21734)

```diff
-           let qt = jt.h.VERTICAL_PADDING / 2;
+           let Uu = qu.f.VERTICAL_PADDING / 2;
```

#### 2423. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21741` → after: `L21851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21851) · [Before (L21741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21741)

```diff
-               } = (0, jt.k)(Dt.items.map((tt => tt.content)), Vt);
+               } = (0, qu.h)(Zu.items.map((uu => uu.content)), ju);
```

#### 2424. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21743` → after: `L21853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21853) · [Before (L21743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21743)

```diff
-               Dt.width = tt, Dt.height = et, Dt.y = qt, qt += et + jt.h.LINE_SPACING
+               Zu.width = uu, Zu.height = Eu, Zu.y = Uu, Uu += Eu + qu.f.LINE_SPACING
```

#### 2425. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21748` → after: `L21858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21858) · [Before (L21748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21748)

```diff
-             animateInDelay: jt.h.ANIMATE_IN_DELAY
+             animateInDelay: qu.f.ANIMATE_IN_DELAY
```

#### 2426. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21753` → after: `L21863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21863) · [Before (L21753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21753)

```diff
-             for (const tt of Vt.items)(0, jt.A)(tt.content) ? et += (0, jt.z)(tt.content).length : et += 1;
+             for (const uu of ju.items)(0, qu.r)(uu.content) ? Eu += (0, qu.o)(uu.content).length : Eu += 1;
```

#### 2427. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21756-L21757` → after: `L21866-L21867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21866-L21867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21866-L21867) · [Before (L21756-L21757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21756-L21757)

```diff
-         const Ht = (0, dt.h)(et.texture);
-         Ht.clearRect(0, 0, et.sizeCache.width, et.sizeCache.height), Ht.fillStyle = null !== (Ot = et.processedTextBox.backgroundColor) && void 0 !== Ot ? Ot : "#22283b", Ht.fillRect(0, 0, et.sizeCache.width, et.sizeCache.height), et.drawnCharCount > 0 ? Vt(et, Nt(et.processedTex … [truncated]
+         const fu = (0, lu.m)(Eu.texture);
+         fu.clearRect(0, 0, Eu.sizeCache.width, Eu.sizeCache.height), fu.fillStyle = null !== (su = Eu.processedTextBox.backgroundColor) && void 0 !== su ? su : "#22283b", fu.fillRect(0, 0, Eu.sizeCache.width, Eu.sizeCache.height), Eu.drawnCharCount > 0 ? ju(Eu, Du(Eu.processedTex … [truncated]
```

#### 2428. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21762-L21765` → after: `L21872-L21875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21872-L21875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21872-L21875) · [Before (L21762-L21765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21762-L21765)

```diff
-         const lt = tt.mJ.ZVt(et.planeEId);
-         let Et = null !== (Ot = et.yOffset) && void 0 !== Ot ? Ot : 2.1;
-         const ft = tt.mJ.YM(et.uZ),
-           wt = tt.mJ.YM(tt.lL);
+         const cu = uu.YG.Cju(Eu.planeEId);
+         let Nu = null !== (su = Eu.yOffset) && void 0 !== su ? su : 2.1;
+         const Ou = uu.YG.bM(Eu.HV),
+           Yu = uu.YG.bM(uu.FQ);
```

#### 2429. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21769` → after: `L21879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21879) · [Before (L21769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21769)

```diff
-           const et = tt.camera.zp();
+           const Eu = uu.camera.Gy();
```

#### 2430. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21775` → after: `L21885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21885) · [Before (L21775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21775)

```diff
-           Ct = null !== (qt = et.xOffset) && void 0 !== qt ? qt : .6;
+           Gu = null !== (Uu = Eu.xOffset) && void 0 !== Uu ? Uu : .6;
```

#### 2431. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21779` → after: `L21889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21889) · [Before (L21779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21779)

```diff
-           const tt = Ct + Vt.width * jt.h.TEXT_PLANE_RATIO / 2;
+           const uu = Gu + ju.width * qu.f.TEXT_PLANE_RATIO / 2;
```

#### 2432. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21782-L21784` → after: `L21892-L21894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21892-L21894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21892-L21894) · [Before (L21782-L21784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21782-L21784)

```diff
-         const ht = tt.mJ.xet(et.uZ);
-         Et += null !== (Dt = null === ht || void 0 === ht || null === (mt = ht.meshOffset) || void 0 === mt ? void 0 : mt[1]) && void 0 !== Dt ? Dt : 0, ut += null !== (dt = null === ht || void 0 === ht || null === (Ht = ht.meshOffset) || void 0 === Ht ? void 0 : Ht[0]) && void 0 … [truncated]
-         Et -= Vt.height * jt.h.TEXT_PLANE_RATIO / 2, tt.mJ.oet(et.planeEId) && (lt.offset[1] = Et, lt.offset[0] = ut, lt.offset[2] = Kt)
+         const Ju = uu.YG.PEu(Eu.HV);
+         Nu += null !== (Zu = null === Ju || void 0 === Ju || null === (Xu = Ju.meshOffset) || void 0 === Xu ? void 0 : Xu[1]) && void 0 !== Zu ? Zu : 0, pu += null !== (lu = null === Ju || void 0 === Ju || null === (fu = Ju.meshOffset) || void 0 === fu ? void 0 : fu[0]) && void 0 … [truncated]
+         Nu -= ju.height * qu.f.TEXT_PLANE_RATIO / 2, uu.YG.GEu(Eu.planeEId) && (cu.offset[1] = Nu, cu.offset[0] = pu, cu.offset[2] = wu)
```

#### 2433. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21788` → after: `L21898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21898) · [Before (L21788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21788)

```diff
-         return tt.mJ.oet(et.planeEId) ? (et.missingPlaneLogged = !1, et.plane) : (et.missingPlaneLogged || (0, Xt.b)(tt) || (et.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
+         return uu.YG.GEu(Eu.planeEId) ? (Eu.missingPlaneLogged = !1, Eu.plane) : (Eu.missingPlaneLogged || (0, Cu.e)(uu) || (Eu.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
```

#### 2434. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21792` → after: `L21902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21902) · [Before (L21792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21792)

```diff
-         const Vt = tt.mJ.getState(et.uZ, "hidingMeshManager");
+         const ju = uu.YG.getState(Eu.HV, "hidingMeshManager");
```

#### 2435. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21795-L21796` → after: `L21905-L21906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21905-L21906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21905-L21906) · [Before (L21795-L21796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21795-L21796)

```diff
-       return (0, Xt.c)(tt.Bf.vI(), (() => {
-         for (const Vt of tt.mJ.bZ(et)) {
+       return (0, Cu.g)(uu.tO.hV(), (() => {
+         for (const ju of uu.YG.xV(Eu)) {
```

#### 2436. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21826` → after: `L21936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21936) · [Before (L21826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21826)

```diff
-         qJ: function(et, Vt) {
+         lG: function(Eu, ju) {
```

#### 2437. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21828-L21829` → after: `L21938-L21939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21938-L21939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21938-L21939) · [Before (L21828-L21829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21828-L21829)

```diff
-             (0, lt.m)(tt, Vt.planeEId, et)
-           })), Vt.hideNametagSub = Ot.j.subscribe("appManagerUpdated|areNametagsHidden", (tt => {
+             (0, cu.q)(uu, ju.planeEId, Eu)
+           })), ju.hideNametagSub = su.h.subscribe("appManagerUpdated|areNametagsHidden", (uu => {
```

#### 2438. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21831` → after: `L21941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21941) · [Before (L21831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21831)

```diff
-           })), Vt._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !Et.b.get("areNametagsHidden")), Ct(Vt), Vt.textBoxSub = Ot.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|multilineTextBox`, (tt => {
+           })), ju._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !Nu.d.get("areNametagsHidden")), Gu(ju), ju.textBoxSub = su.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|multilineTextBox`, (uu => {
```

#### 2439. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21834` → after: `L21944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21944) · [Before (L21834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21834)

```diff
-           Vt.unsubscribeKeyPromptChanges = (0, qt.n)((() => {
+           ju.unsubscribeKeyPromptChanges = (0, Uu.q)((() => {
```

#### 2440. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21836-L21837` → after: `L21946-L21947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21946-L21947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21946-L21947) · [Before (L21836-L21837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21836-L21837)

```diff
-             null !== (tt = Vt.textBox) && void 0 !== tt && null !== (et = tt.content) && void 0 !== et && et.some(mt.ib) && Mt(Vt, !0)
-           })), tt.lL in tt.dL && et in tt.dL[tt.lL] && "multilineTextBox" in tt.dL[tt.lL][et] && (Vt.textBox = tt.dL[tt.lL][et].multilineTextBox), Mt(Vt)
+             null !== (uu = ju.textBox) && void 0 !== uu && null !== (Eu = uu.content) && void 0 !== Eu && Eu.some(Xu.tb) && gu(ju, !0)
+           })), uu.FQ in uu.EQ && Eu in uu.EQ[uu.FQ] && "multilineTextBox" in uu.EQ[uu.FQ][Eu] && (ju.textBox = uu.EQ[uu.FQ][Eu].multilineTextBox), gu(ju)
```

#### 2441. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21843` → after: `L21953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21953) · [Before (L21843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21843)

```diff
-             Vt && ((0, jt.C)(Vt, (0, Qt.s)(null === (Ot = qt.textBox) || void 0 === Ot ? void 0 : Ot.visibleThroughWalls, tt.OJ.canSeeNametagsThroughWalls)), Ct(qt), null !== qt.timeSinceAnimationStart && qt.textBox && (qt.timeSinceAnimationStart += et, qt.toDrawCharCount = Math. … [truncated]
+             ju && ((0, qu.x)(ju, (0, bu.v)(null === (su = Uu.textBox) || void 0 === su ? void 0 : su.visibleThroughWalls, uu.sG.canSeeNametagsThroughWalls)), Gu(Uu), null !== Uu.timeSinceAnimationStart && Uu.textBox && (Uu.timeSinceAnimationStart += Eu, Uu.toDrawCharCount = Math. … [truncated]
```

#### 2442. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21846` → after: `L21956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21956) · [Before (L21846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21846)

```diff
-         dJ: function(et, Vt) {
+         hG: function(Eu, ju) {
```

#### 2443. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21852-L21854` → after: `L21962-L21964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21962-L21964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21962-L21964) · [Before (L21852-L21854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21852-L21854)

```diff
-               const Vt = (0, jt.C)(et, (0, Qt.s)(null === (Ot = qt.textBox) || void 0 === Ot ? void 0 : Ot.visibleThroughWalls, tt.OJ.canSeeNametagsThroughWalls)),
-                 Dt = (0, Qt.v)(tt, qt.uZ, qt.planeEId, Vt);
-               (0, Qt.k)(tt, qt.planeEId), et.cj.set(qt.sizeCache.width * jt.h.TEXT_PLANE_RATIO * Dt, qt.sizeCache.height * jt.h.TEXT_PLANE_RATIO * Dt, 1)
+               const ju = (0, qu.x)(Eu, (0, bu.v)(null === (su = Uu.textBox) || void 0 === su ? void 0 : su.visibleThroughWalls, uu.sG.canSeeNametagsThroughWalls)),
+                 Zu = (0, bu.x)(uu, Uu.HV, Uu.planeEId, ju);
+               (0, bu.l)(uu, Uu.planeEId), Eu.Of.set(Uu.sizeCache.width * qu.f.TEXT_PLANE_RATIO * Zu, Uu.sizeCache.height * qu.f.TEXT_PLANE_RATIO * Zu, 1)
```

#### 2444. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21858` → after: `L21968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21968) · [Before (L21858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21858)

```diff
-         nS: function(et, Vt) {
+         jK: function(Eu, ju) {
```

#### 2445. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21860` → after: `L21970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21970) · [Before (L21860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21860)

```diff
-           tt.mJ.deleteEntity(Vt.planeEId), Ot.j.unsubscribe(Vt.textBoxSub), Ot.j.unsubscribe(Vt.hideNametagSub), null === (qt = Vt.unsubscribeKeyPromptChanges) || void 0 === qt || qt.call(Vt)
+           uu.YG.deleteEntity(ju.planeEId), su.h.unsubscribe(ju.textBoxSub), su.h.unsubscribe(ju.hideNametagSub), null === (Uu = ju.unsubscribeKeyPromptChanges) || void 0 === Uu || Uu.call(ju)
```

#### 2446. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21865` → after: `L21975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21975) · [Before (L21865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21865)

```diff
-   39079: (tt, et, Vt) => {
+   39208: (uu, Eu, ju) => {
```

#### 2447. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21869` → after: `L21979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21979) · [Before (L21869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21869)

```diff
-     var Ot = Vt(404),
+     var su = ju(366),
```

#### 2448. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21871-L21897` → after: `L21981-L22007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21981-L22007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L21981-L22007) · [Before (L21871-L21897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21871-L21897)

```diff
-       Dt = Vt(37545),
-       mt = Vt(38600),
-       dt = Vt(37663),
-       jt = Vt(39068),
-       Ht = Vt(38613),
-       Xt = Vt(31),
-       Qt = Vt(9050),
-       lt = Vt(377),
-       Et = Vt(697),
-       ft = Vt(2848),
-       wt = Vt(106),
-       yt = Vt(37002),
-       Nt = Vt(38690),
-       Mt = Vt(37032),
-       bt = Vt(36932),
-       Jt = Vt(39065),
- ... (11 more removed lines; see GitHub link above)
+       Zu = ju(37704),
+       Xu = ju(38702),
+       lu = ju(37811),
+       qu = ju(39194),
+       fu = ju(38726),
+       Cu = ju(24),
+       bu = ju(9032),
+       cu = ju(337),
+       Nu = ju(628),
+       Ou = ju(2893),
+       Yu = ju(91),
+       hu = ju(37162),
+       Du = ju(38795),
+       gu = ju(37194),
+       Mu = ju(37066),
+       eu = ju(39189),
+ ... (11 more added lines; see GitHub link above)
```

#### 2449. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21914` → after: `L22024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22024) · [Before (L21914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21914)

```diff
-         return Number.isFinite(Vt) && Vt > 0 ? Vt : et
+         return Number.isFinite(ju) && ju > 0 ? ju : Eu
```

#### 2450. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21928` → after: `L22038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22038) · [Before (L21928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21928)

```diff
-         const Ot = null !== (Vt = tt.applyTo) && void 0 !== Vt ? Vt : "both";
+         const su = null !== (ju = uu.applyTo) && void 0 !== ju ? ju : "both";
```

#### 2451. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21934` → after: `L22044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22044) · [Before (L21934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21934)

```diff
-         return "glow" === tt.style ? 3 * et : Math.ceil(et / 2) + 1
+         return "glow" === uu.style ? 3 * Eu : Math.ceil(Eu / 2) + 1
```

#### 2452. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21948` → after: `L22058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22058) · [Before (L21948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21948)

```diff
-         return Math.round(qt().pm(tt.mJ.YM(tt.lL), tt.mJ.YM(et)))
+         return Math.round(Uu().LX(uu.YG.bM(uu.FQ), uu.YG.bM(Eu)))
```

#### 2453. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21952-L21953` → after: `L22062-L22063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22062-L22063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22062-L22063) · [Before (L21952-L21953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21952-L21953)

```diff
-         const et = At(tt.uZ),
-           Vt = (0, bt.e)(et, tt._lastUpdateDist, tt._lastUpdateTime);
+         const Eu = Bu(uu.HV),
+           ju = (0, Mu.c)(Eu, uu._lastUpdateDist, uu._lastUpdateTime);
```

#### 2454. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21958-L21959` → after: `L22068-L22069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22068-L22069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22068-L22069) · [Before (L21958-L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21958-L21959)

```diff
-         const Vt = (0, ft.c)();
-         return et !== tt.lL && "Player" === Vt.getLifeformType(et) && (0, Ct.e)(Vt.getRawEntityName(et), ut.d.shown)
+         const ju = (0, Ou.b)();
+         return Eu !== uu.FQ && "Player" === ju.getLifeformType(Eu) && (0, Gu.e)(ju.getRawEntityName(Eu), pu.e.shown)
```

#### 2455. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21965-L21967` → after: `L22075-L22077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22075-L22077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22075-L22077) · [Before (L21965-L21967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21965-L21967)

```diff
-         const Vt = (0, Jt.k)(tt.content, (0, Jt.B)()),
-           qt = (0, Jt.k)(tt.subtitle, (0, Jt.B)()),
-           Dt = (0, Jt.l)(et),
+         const ju = (0, eu.h)(uu.content, (0, eu.t)()),
+           Uu = (0, eu.h)(uu.subtitle, (0, eu.t)()),
+           Zu = (0, eu.j)(Eu),
```

#### 2456. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21970` → after: `L22080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22080) · [Before (L21970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21970)

```diff
-           jt = Math.max(Jt.h.VERTICAL_PADDING, function(tt) {
+           qu = Math.max(eu.f.VERTICAL_PADDING, function(uu) {
```

#### 2457. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21972` → after: `L22082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22082) · [Before (L21972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21972)

```diff
-             return "never" === (null !== (et = null === (Vt = tt.healthbar) || void 0 === Vt ? void 0 : Vt.display) && void 0 !== et ? et : "onDamage") ? 0 : Ot(tt) + rt(tt)
+             return "never" === (null !== (Eu = null === (ju = uu.healthbar) || void 0 === ju ? void 0 : ju.display) && void 0 !== Eu ? Eu : "onDamage") ? 0 : su(uu) + Iu(uu)
```

#### 2458. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21977` → after: `L22087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22087) · [Before (L21977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21977)

```diff
-           return et ? ot(et) + Jt.h.HORIZONTAL_PADDING / 2 : 0
+           return Eu ? Su(Eu) + eu.f.HORIZONTAL_PADDING / 2 : 0
```

#### 2459. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21980` → after: `L22090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22090) · [Before (L21980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21980)

```diff
-           const tt = Math.max(Vt.width, qt.width) + Jt.h.HORIZONTAL_PADDING;
+           const uu = Math.max(ju.width, Uu.width) + eu.f.HORIZONTAL_PADDING;
```

#### 2460. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21991` → after: `L22101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22101) · [Before (L21991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L21991)

```diff
-           Ht = (0, Dt.h)(jt),
+           fu = (0, Zu.m)(qu),
```

#### 2461. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22002` → after: `L22112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22112) · [Before (L22002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22002)

```diff
-               Qt = vt.e.getTexture(dt, Wt.k.ICON).url,
+               bu = du.d.getTexture(lu, au.i.ICON).url,
```

#### 2462. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22005` → after: `L22115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22115) · [Before (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22005)

```diff
-               Vt.nameTagId === Xt && (Ht.imageSmoothingEnabled = !1, Ht.drawImage(lt, Ot, Dt, 64, 64), (0, Kt.k)(jt))
+               ju.nameTagId === Cu && (fu.imageSmoothingEnabled = !1, fu.drawImage(cu, su, Zu, 64, 64), (0, wu.j)(qu))
```

#### 2463. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22016-L22017` → after: `L22126-L22127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22126-L22127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22126-L22127) · [Before (L22016-L22017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22016-L22017)

```diff
-         const yt = (dt.width.full - dt.width.content) / 2 + Jt.h.HORIZONTAL_PADDING / 2;
-         if ((0, Jt.t)(tt.content, yt, wt, dt.height.content, jt, Qt), tt.subtitle) {
+         const hu = (lu.width.full - lu.width.content) / 2 + eu.f.HORIZONTAL_PADDING / 2;
+         if ((0, eu.m)(uu.content, hu, Yu, lu.height.content, qu, bu), uu.subtitle) {
```

#### 2464. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22019-L22020` → after: `L22129-L22130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22129-L22130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22129-L22130) · [Before (L22019-L22020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22019-L22020)

```diff
-           const et = (dt.width.full - dt.width.subtitle) / 2 + Jt.h.HORIZONTAL_PADDING / 2;
-           Ht.fillStyle = tt.subtitleBackgroundColor, Ht.fillRect(Et, wt, lt, dt.height.subtitle), (0, Jt.t)(tt.subtitle, et, wt, dt.height.subtitle, jt, Qt)
+           const Eu = (lu.width.full - lu.width.subtitle) / 2 + eu.f.HORIZONTAL_PADDING / 2;
+           fu.fillStyle = uu.subtitleBackgroundColor, fu.fillRect(Nu, Yu, cu, lu.height.subtitle), (0, eu.m)(uu.subtitle, Eu, Yu, lu.height.subtitle, qu, bu)
```

#### 2465. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22037` → after: `L22147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22147) · [Before (L22037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22037)

```diff
-             const Dt = [...qt && qt.length > 0 ? qt : et].sort(((tt, et) => tt.healthFraction - et.healthFraction)),
+             const Zu = [...Uu && Uu.length > 0 ? Uu : Eu].sort(((uu, Eu) => uu.healthFraction - Eu.healthFraction)),
```

#### 2466. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22039` → after: `L22149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22149) · [Before (L22039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22039)

```diff
-             return (null !== mt && void 0 !== mt ? mt : Dt[Dt.length - 1]).colour
+             return (null !== Xu && void 0 !== Xu ? Xu : Zu[Zu.length - 1]).colour
```

#### 2467. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22095` → after: `L22205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22205) · [Before (L22095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22095)

```diff
-         }(0, Kt.k)(jt)
+         }(0, wu.j)(qu)
```

#### 2468. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22099` → after: `L22209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22209) · [Before (L22099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22099)

```diff
-         null !== et.planeEId && (tt.mJ.deleteEntity(et.planeEId), et.planeEId = null, et._planeMesh = null, et._planeTexture = null, et._lightState = null, et._scaleX = NaN, et._scaleY = NaN, et._offsetY = NaN)
+         null !== Eu.planeEId && (uu.YG.deleteEntity(Eu.planeEId), Eu.planeEId = null, Eu._planeMesh = null, Eu._planeTexture = null, Eu._lightState = null, Eu._scaleX = NaN, Eu._scaleY = NaN, Eu._offsetY = NaN)
```

#### 2469. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22109-L22110` → after: `L22219-L22220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22219-L22220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22219-L22220) · [Before (L22109-L22110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22109-L22110)

```diff
-           } = (0, Jt.o)(tt, et.uZ, `${et.uZ}NameTag`, 1, 1, !0);
-           et.planeEId = Vt, et._planeMesh = Ot, et._planeTexture = Dt, et._lightState = mt, tt.mJ.ZVt(Vt).oVt = (Vt, Ot) => {
+           } = (0, eu.k)(uu, Eu.HV, `${Eu.HV}NameTag`, 1, 1, !0);
+           Eu.planeEId = ju, Eu._planeMesh = su, Eu._planeTexture = Zu, Eu._lightState = Xu, uu.YG.Cju(ju).hju = (ju, su) => {
```

#### 2470. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22113` → after: `L22223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22223) · [Before (L22113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22113)

```diff
-               const Ht = null !== (Vt = null === (Ot = tt.dL[tt.lL][et.uZ]) || void 0 === Ot ? void 0 : Ot.meshScaling) && void 0 !== Vt ? Vt : {},
+               const fu = null !== (ju = null === (su = uu.EQ[uu.FQ][Eu.HV]) || void 0 === su ? void 0 : su.meshScaling) && void 0 !== ju ? ju : {},
```

#### 2471. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22116-L22119` → after: `L22226-L22229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22226-L22229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22226-L22229) · [Before (L22116-L22119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22116-L22119)

```diff
-                 lt = Qe(et.uZ),
-                 Et = (0, ft.c)().YB(et.uZ);
-               let wt = (null !== (Dt = et.nameYOffset) && void 0 !== Dt ? Dt : Pt.b) * Et;
-               const yt = tt.mJ.xet(et.uZ);
+                 cu = CE(Eu.HV),
+                 Nu = (0, Ou.b)().sA(Eu.HV);
+               let Yu = (null !== (Zu = Eu.nameYOffset) && void 0 !== Zu ? Zu : vu.b) * Nu;
+               const hu = uu.YG.PEu(Eu.HV);
```

#### 2472. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22121` → after: `L22231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22231) · [Before (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22121)

```diff
-                 const tt = (0, ft.c)().getLifeformType(et.uZ);
+                 const uu = (0, Ou.b)().getLifeformType(Eu.HV);
```

#### 2473. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22123` → after: `L22233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22233) · [Before (L22123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22123)

```diff
-                 if (null !== tt) wt += (null !== (Mt = null === (bt = (0, Nt.c)(tt).poseNameRise) || void 0 === bt ? void 0 : bt[yt.pose]) && void 0 !== Mt ? Mt : 0) * Et
+                 if (null !== uu) Yu += (null !== (gu = null === (Mu = (0, Du.b)(uu).poseNameRise) || void 0 === Mu ? void 0 : Mu[hu.pose]) && void 0 !== gu ? gu : 0) * Nu
```

#### 2474. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22125-L22126` → after: `L22235-L22236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22235-L22236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22235-L22236) · [Before (L22125-L22126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22125-L22126)

```diff
-               if (wt += null !== (mt = null === yt || void 0 === yt || null === (dt = yt.meshOffset) || void 0 === dt ? void 0 : dt[1]) && void 0 !== mt ? mt : 0, lt) {
-                 const Vt = .23 * (qt().pm(tt.mJ.YM(tt.lL), tt.mJ.YM(et.uZ)) - jt.d) / jt.d;
+               if (Yu += null !== (Xu = null === hu || void 0 === hu || null === (lu = hu.meshOffset) || void 0 === lu ? void 0 : lu[1]) && void 0 !== Xu ? Xu : 0, cu) {
+                 const ju = .23 * (Uu().LX(uu.YG.bM(uu.FQ), uu.YG.bM(Eu.HV)) - qu.f) / qu.f;
```

#### 2475. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22135-L22138` → after: `L22245-L22248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22245-L22248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22245-L22248) · [Before (L22135-L22138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22135-L22138)

```diff
-         (0, Dt.H)(Ot, mt.width, mt.height), te(et, Jt.h.TEXT_PLANE_RATIO * mt.width, Jt.h.TEXT_PLANE_RATIO * mt.height), et._layoutHeight = Jt.h.TEXT_PLANE_RATIO * mt.height;
-         const dt = (0, Jt.k)(Vt.content, (0, Jt.B)()),
-           Ht = (0, Jt.k)(Vt.subtitle, (0, Jt.B)()),
-           Xt = (0, Jt.l)(et.effects);
+         (0, Zu.K)(su, Xu.width, Xu.height), Ru(Eu, eu.f.TEXT_PLANE_RATIO * Xu.width, eu.f.TEXT_PLANE_RATIO * Xu.height), Eu._layoutHeight = eu.f.TEXT_PLANE_RATIO * Xu.height;
+         const lu = (0, eu.h)(ju.content, (0, eu.t)()),
+           fu = (0, eu.h)(ju.subtitle, (0, eu.t)()),
+           Cu = (0, eu.j)(Eu.effects);
```

#### 2476. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22142-L22143` → after: `L22252-L22253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22252-L22253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22252-L22253) · [Before (L22142-L22143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22142-L22143)

```diff
-             content: dt.width + Jt.h.HORIZONTAL_PADDING,
-             subtitle: Ht.width + Jt.h.HORIZONTAL_PADDING,
+             content: lu.width + eu.f.HORIZONTAL_PADDING,
+             subtitle: fu.width + eu.f.HORIZONTAL_PADDING,
```

#### 2477. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22156` → after: `L22266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22266) · [Before (L22156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22156)

```diff
-         const Ot = Ee(tt.uZ, et),
+         const su = cE(uu.HV, Eu),
```

#### 2478. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22160-L22161` → after: `L22270-L22271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22270-L22271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22270-L22271) · [Before (L22160-L22161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22160-L22161)

```diff
-           Dt = Ot * Jt.h.TEXT_PLANE_RATIO * qt.height.full;
-         return te(tt, Ot * Jt.h.TEXT_PLANE_RATIO * qt.width.full * Vt, Dt * Vt), Dt
+           Zu = su * eu.f.TEXT_PLANE_RATIO * Uu.height.full;
+         return Ru(uu, su * eu.f.TEXT_PLANE_RATIO * Uu.width.full * ju, Zu * ju), Zu
```

#### 2479. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22165` → after: `L22275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22275) · [Before (L22165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22165)

```diff
-         tt._scaleX === et && tt._scaleY === Vt || (tt._scaleX = et, tt._scaleY = Vt, tt._planeMesh.cj.set(et, Vt, 1))
+         uu._scaleX === Eu && uu._scaleY === ju || (uu._scaleX = Eu, uu._scaleY = ju, uu._planeMesh.Of.set(Eu, ju, 1))
```

#### 2480. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22170` → after: `L22280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22280) · [Before (L22170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22170)

```diff
-         return null !== (et = tt.name) && void 0 !== et ? et : (0, ft.c)().getEntityName(tt.uZ, !wt.featureFlags.canSeeRealPlayerNames)
+         return null !== (Eu = uu.name) && void 0 !== Eu ? Eu : (0, Ou.b)().getEntityName(uu.HV, !Yu.featureFlags.canSeeRealPlayerNames)
```

#### 2481. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22179` → after: `L22289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22289) · [Before (L22179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22179)

```diff
-         if ((0, ht.b)(tt)) return;
+         if ((0, Ju.e)(uu)) return;
```

#### 2482. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22184` → after: `L22294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22294) · [Before (L22184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22184)

```diff
-           (et = et ? JSON.parse(JSON.stringify(et)) : {}).content ? et.content = (0, Jt.x)(et.content, Jt.h.DEFAULT_FONT_SIZE) : et.content = [{
+           (Eu = Eu ? JSON.parse(JSON.stringify(Eu)) : {}).content ? Eu.content = (0, eu.n)(Eu.content, eu.f.DEFAULT_FONT_SIZE) : Eu.content = [{
```

#### 2483. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22187` → after: `L22297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22297) · [Before (L22187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22187)

```diff
-           const mt = (0, ft.c)().getPlayerRanks(tt).map((tt => Et.j[tt])).filter((tt => tt.nameTag && tt.visible));
+           const Xu = (0, Ou.b)().getPlayerRanks(uu).map((uu => Nu.n[uu])).filter((uu => uu.nameTag && uu.visible));
```

#### 2484. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22189` → after: `L22299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22299) · [Before (L22189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22189)

```diff
-           const dt = Et.o[Ot];
+           const lu = Nu.s[su];
```

#### 2485. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22191` → after: `L22301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22301) · [Before (L22191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22191)

```diff
-             for (const jt of et.content)(0, Jt.A)(jt) && (jt.style ? (0, lt.Ib)(jt.style) || (jt.style.color = dt) : jt.style = {
+             for (const qu of Eu.content)(0, eu.r)(qu) && (qu.style ? (0, cu.Yb)(qu.style) || (qu.style.color = lu) : qu.style = {
```

#### 2486. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22194` → after: `L22304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22304) · [Before (L22194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22194)

```diff
-           if (Yt(tt) ? (et.content.push(Jt.d), Bt.add(tt)) : Bt.delete(tt), Qe(tt)) {
+           if (tu(uu) ? (Eu.content.push(eu.c), xu.add(uu)) : xu.delete(uu), CE(uu)) {
```

#### 2487. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22197` → after: `L22307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22307) · [Before (L22197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22197)

```diff
-               str: ` ${Vt}m`,
+               str: ` ${ju}m`,
```

#### 2488. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22203-L22204` → after: `L22313-L22314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22313-L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22313-L22314) · [Before (L22203-L22204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22203-L22204)

```diff
-           return et.subtitle && (et.subtitle = (0, Jt.x)(et.subtitle, Jt.h.DEFAULT_SUBTITLE_FONT_SIZE)), et.backgroundColor = null !== (qt = et.backgroundColor) && void 0 !== qt ? qt : "#22283b", et.subtitleBackgroundColor = null !== (Dt = et.subtitleBackgroundColor) && void 0 != … [truncated]
-         }(et.uZ, et.nameTagInfo, Vt, et.nameColour);
+           return Eu.subtitle && (Eu.subtitle = (0, eu.n)(Eu.subtitle, eu.f.DEFAULT_SUBTITLE_FONT_SIZE)), Eu.backgroundColor = null !== (Uu = Eu.backgroundColor) && void 0 !== Uu ? Uu : "#22283b", Eu.subtitleBackgroundColor = null !== (Zu = Eu.subtitleBackgroundColor) && void 0 != … [truncated]
+         }(Eu.HV, Eu.nameTagInfo, ju, Eu.nameColour);
```

#### 2489. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22207` → after: `L22317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22317) · [Before (L22207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22207)

```diff
-             const Vt = (0, Dt.h)(tt._planeTexture);
+             const ju = (0, Zu.m)(uu._planeTexture);
```

#### 2490. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22210-L22211` → after: `L22320-L22321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22320-L22321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22320-L22321) · [Before (L22210-L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22210-L22211)

```diff
-               const qt = null !== (Vt = null === (Ot = et.healthbar) || void 0 === Ot ? void 0 : Ot.display) && void 0 !== Vt ? Vt : "onDamage";
-               return "never" === qt ? null : "always" === qt ? null !== (Dt = tt.Lt) && void 0 !== Dt ? Dt : 1 : tt.healthTimeout ? tt.Lt : null;
+               const Uu = null !== (ju = null === (su = Eu.healthbar) || void 0 === su ? void 0 : su.display) && void 0 !== ju ? ju : "onDamage";
+               return "never" === Uu ? null : "always" === Uu ? null !== (Zu = uu.ru) && void 0 !== Zu ? Zu : 1 : uu.healthTimeout ? uu.ru : null;
```

#### 2491. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22215-L22217` → after: `L22325-L22327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22325-L22327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22325-L22327) · [Before (L22215-L22217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22215-L22217)

```diff
-       }(0, Ct.d)((() => {
-         for (const tt of pt) Yt(tt.uZ) !== Bt.has(tt.uZ) && De(tt)
-       })), (0, ht.c)(tt.Bf.vI(), (() => {
+       }(0, Gu.b)((() => {
+         for (const uu of Tu) tu(uu.HV) !== xu.has(uu.HV) && UE(uu)
+       })), (0, Ju.g)(uu.tO.hV(), (() => {
```

#### 2492. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22231` → after: `L22341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22341) · [Before (L22231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22231)

```diff
-         const Ot = (0, ft.c)().getLifeformType(et);
+         const su = (0, Ou.b)().getLifeformType(Eu);
```

#### 2493. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22233` → after: `L22343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22343) · [Before (L22233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22233)

```diff
-         return !!(null === (Vt = tt.mJ.ZVt(et)) || void 0 === Vt ? void 0 : Vt.nE)
+         return !!(null === (ju = uu.YG.Cju(Eu)) || void 0 === ju ? void 0 : ju.jO)
```

#### 2494. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22241` → after: `L22351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22351) · [Before (L22241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22241)

```diff
-             tt.yw("Error updating a nametag", et)
+             uu.OY("Error updating a nametag", Eu)
```

#### 2495. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22253` → after: `L22363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22363) · [Before (L22253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22253)

```diff
-         return null !== (Vt = tt.lL !== et && (null === (Ot = tt.dL[tt.lL][et]) || void 0 === Ot ? void 0 : Ot.hasPriorityNametag)) && void 0 !== Vt && Vt
+         return null !== (ju = uu.FQ !== Eu && (null === (su = uu.EQ[uu.FQ][Eu]) || void 0 === su ? void 0 : su.hasPriorityNametag)) && void 0 !== ju && ju
```

#### 2496. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22264` → after: `L22374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22374) · [Before (L22264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22264)

```diff
-         if (qt === Dt && !vt.e.getTexture(Dt, Wt.k.ICON).notFound) {
+         if (Uu === Zu && !du.d.getTexture(Zu, au.i.ICON).notFound) {
```

#### 2497. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22269` → after: `L22379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22379) · [Before (L22269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22269)

```diff
-             !mt || null !== (dt = (0, ft.c)().client) && void 0 !== dt && dt.isReplayMode() || (et = setTimeout((() => {
+             !Xu || null !== (lu = (0, Ou.b)().client) && void 0 !== lu && lu.isReplayMode() || (Eu = setTimeout((() => {
```

#### 2498. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22282` → after: `L22392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22392) · [Before (L22282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22282)

```diff
-         Qe(et) && Vt > jt.d && (Ot = jt.d);
+         CE(Eu) && ju > qu.f && (su = qu.f);
```

#### 2499. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22289` → after: `L22399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22399) · [Before (L22289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22289)

```diff
-         const Dt = tt.Bf.engine.getRenderWidth();
+         const Zu = uu.tO.engine.getRenderWidth();
```

#### 2500. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22296-L22304` → after: `L22406-L22414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22406-L22414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22406-L22414) · [Before (L22296-L22304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22296-L22304)

```diff
-         const Ot = tt.mJ.xet(et.uZ),
-           Dt = Qe(et.uZ),
-           Xt = (0, Jt.C)(et._planeMesh, tt.OJ.canSeeNametagsThroughWalls, null === Ot || void 0 === Ot ? void 0 : Ot.crouching, Dt),
-           Qt = tt.mJ.RY(et.planeEId).zB,
-           lt = tt.camera.oB(),
-           Et = qt().pm(Qt, lt),
-           ft = tt.mJ.oet(et.planeEId).offset,
-           wt = Vt ? (0, jt.v)(tt, et.uZ, et.planeEId, Xt) : 1;
-         if (Dt && Xt && Et > jt.d) {
+         const su = uu.YG.PEu(Eu.HV),
+           Zu = CE(Eu.HV),
+           Cu = (0, eu.x)(Eu._planeMesh, uu.sG.canSeeNametagsThroughWalls, null === su || void 0 === su ? void 0 : su.crouching, Zu),
+           bu = uu.YG.wT(Eu.planeEId).xH,
+           cu = uu.camera.nH(),
+           Nu = Uu().LX(bu, cu),
+           Ou = uu.YG.GEu(Eu.planeEId).offset,
+           Yu = ju ? (0, qu.x)(uu, Eu.HV, Eu.planeEId, Cu) : 1;
+         if (Zu && Cu && Nu > qu.f) {
```

#### 2501. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22307` → after: `L22417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22417) · [Before (L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22307)

```diff
-           const et = qt().scale(tt, tt, jt.d),
+           const Eu = Uu().scale(uu, uu, qu.f),
```

#### 2502. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22311` → after: `L22421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22421) · [Before (L22311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22311)

```diff
-         Vt && (0, jt.k)(tt, et.planeEId);
+         ju && (0, qu.l)(uu, Eu.planeEId);
```

#### 2503. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22314` → after: `L22424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22424) · [Before (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22314)

```diff
-         if (et._layoutHeight = Nt, tt.Bf.Rw && et._planeMesh.isEnabled() && et._planeMesh.isVisible) {
+         if (Eu._layoutHeight = Du, uu.tO.aY && Eu._planeMesh.isEnabled() && Eu._planeMesh.isVisible) {
```

#### 2504. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22316` → after: `L22426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22426) · [Before (L22316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22316)

```diff
-           const Vt = (0, mt.e)(tt, et.uZ),
+           const ju = (0, Xu.f)(uu, Eu.HV),
```

#### 2505. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22320-L22321` → after: `L22430-L22431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22430-L22431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22430-L22431) · [Before (L22320-L22321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22320-L22321)

```diff
-           const jt = St.e.clamp(Ot / qt, 0, 1),
-             Xt = St.e.lerp(null !== (bt = Dt) && void 0 !== bt ? bt : de, je, jt);
+           const qu = Pu.b.clamp(su / Uu, 0, 1),
+             Cu = Pu.b.lerp(null !== (Mu = Zu) && void 0 !== Mu ? Mu : XE, lE, qu);
```

#### 2506. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22323-L22324` → after: `L22433-L22434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22433-L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22433-L22434) · [Before (L22323-L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22323-L22324)

```diff
-           const Qt = (0, Ht.applyHeldLightTint)(tt, et.uZ, Vt, Gt);
-           Gt[0] = Math.max(Qt[0], Dt), Gt[1] = Math.max(Qt[1], Dt), Gt[2] = Math.max(Qt[2], Dt), Gt[3] = Math.max(Qt[3], Dt), (0, dt.m)(et._lightState, Gt)
+           const bu = (0, fu.applyHeldLightTint)(uu, Eu.HV, ju, iu);
+           iu[0] = Math.max(bu[0], Zu), iu[1] = Math.max(bu[1], Zu), iu[2] = Math.max(bu[2], Zu), iu[3] = Math.max(bu[3], Zu), (0, lu.j)(Eu._lightState, iu)
```

#### 2507. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22338` → after: `L22448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22448) · [Before (L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22338)

```diff
-           Lt: null,
+           ru: null,
```

#### 2508. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22370-L22371` → after: `L22480-L22481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22480-L22481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22480-L22481) · [Before (L22370-L22371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22370-L22371)

```diff
-         qJ: function(et, Vt) {
-           Vt.effects = {}, pt.add(Vt), Vt._lightId = `nt_${et}`, Vt._visibilityCombinator = new Mt.b((et => {
+         lG: function(Eu, ju) {
+           ju.effects = {}, Tu.add(ju), ju._lightId = `nt_${Eu}`, ju._visibilityCombinator = new gu.b((Eu => {
```

#### 2509. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22373-L22375` → after: `L22483-L22485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22483-L22485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22483-L22485) · [Before (L22373-L22375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22373-L22375)

```diff
-             const Ot = tt.mJ.aVt(Vt.uZ);
-             Ot ? Ot.meshEnabledCombinator.forceUpdate() : (0, Rt.m)(tt, Vt.planeEId, et)
-           })), Vt.entityMeshScalingSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|meshScaling`, (tt => {
+             const su = uu.YG.AEu(ju.HV);
+             su ? su.meshEnabledCombinator.forceUpdate() : (0, ku.q)(uu, ju.planeEId, Eu)
+           })), ju.entityMeshScalingSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|meshScaling`, (uu => {
```

#### 2510. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22377` → after: `L22487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22487) · [Before (L22377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22377)

```diff
-           })), Vt.nameTagInfoSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|nameTagInfo`, (tt => {
+           })), ju.nameTagInfoSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|nameTagInfo`, (uu => {
```

#### 2511. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22379` → after: `L22489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22489) · [Before (L22379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22379)

```diff
-           })), Vt.priorityNametagSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|hasPriorityNametag`, (tt => {
+           })), ju.priorityNametagSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|hasPriorityNametag`, (uu => {
```

#### 2512. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22381` → after: `L22491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22491) · [Before (L22381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22381)

```diff
-           })), Vt.rankUpdateSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|ranks`, (tt => {
+           })), ju.rankUpdateSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|ranks`, (uu => {
```

#### 2513. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22383` → after: `L22493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22493) · [Before (L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22383)

```diff
-           })), Vt.hideNameSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|hideNameSeed`, (tt => {
+           })), ju.hideNameSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|hideNameSeed`, (uu => {
```

#### 2514. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22385` → after: `L22495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22495) · [Before (L22385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22385)

```diff
-           })), Vt.nameChangedSub = Xt.j.subscribe(`entityNameChanged|${et}`, (() => {
+           })), ju.nameChangedSub = Cu.h.subscribe(`entityNameChanged|${Eu}`, (() => {
```

#### 2515. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22387` → after: `L22497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22497) · [Before (L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22387)

```diff
-           })), Vt.nameColourSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|nameColour`, (tt => {
+           })), ju.nameColourSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|nameColour`, (uu => {
```

#### 2516. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22389` → after: `L22499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22499) · [Before (L22389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22389)

```diff
-           })), Vt.effectInfoSub = Xt.j.subscribe("EffectUpdate", (tt => {
+           })), ju.effectInfoSub = Cu.h.subscribe("EffectUpdate", (uu => {
```

#### 2517. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22391-L22392` → after: `L22501-L22502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22501-L22502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22501-L22502) · [Before (L22391-L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22391-L22392)

```diff
-             (null === (Ot = tt.showInNametag) || void 0 === Ot || Ot) && (0, yt.c)(tt.Ft) === et && le(Vt, tt)
-           })), Vt.removeEffectSub = Xt.j.subscribe("RemoveEffect", (tt => {
+             (null === (su = uu.showInNametag) || void 0 === su || su) && (0, hu.d)(uu.Qu) === Eu && bE(ju, uu)
+           })), ju.removeEffectSub = Cu.h.subscribe("RemoveEffect", (uu => {
```

#### 2518. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22394-L22395` → after: `L22504-L22505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22504-L22505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22504-L22505) · [Before (L22394-L22395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22394-L22395)

```diff
-             (0, yt.c)(tt.Ft) === et && (clearTimeout(null === (Ot = Vt.effects[tt.name]) || void 0 === Ot ? void 0 : Ot.timeout), delete Vt.effects[tt.name], De(Vt))
-           })), Vt.leaveGameSub = Xt.j.subscribe("leaveGame", (() => {
+             (0, hu.d)(uu.Qu) === Eu && (clearTimeout(null === (su = ju.effects[uu.name]) || void 0 === su ? void 0 : su.timeout), delete ju.effects[uu.name], UE(ju))
+           })), ju.leaveGameSub = Cu.h.subscribe("leaveGame", (() => {
```

#### 2519. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22398` → after: `L22508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22508) · [Before (L22398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22398)

```diff
-           })), Vt.lifeformHurtSub = Xt.j.subscribe("lifeformHurt", (tt => {
+           })), ju.lifeformHurtSub = Cu.h.subscribe("lifeformHurt", (uu => {
```

#### 2520. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22401` → after: `L22511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22511) · [Before (L22401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22401)

```diff
-               Lt: qt
+               ru: Uu
```

#### 2521. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22403` → after: `L22513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22513) · [Before (L22403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22403)

```diff
-             (0, yt.c)(Ot) === et && (clearTimeout(Vt.healthTimeout), Vt.healthTimeout = setTimeout((() => {
+             (0, hu.d)(su) === Eu && (clearTimeout(ju.healthTimeout), ju.healthTimeout = setTimeout((() => {
```

#### 2522. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22405-L22406` → after: `L22515-L22516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22515-L22516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22515-L22516) · [Before (L22405-L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22405-L22406)

```diff
-             }), 2e3), Vt.Lt = qt, De(Vt))
-           })), Vt.lifeformHealthChangedSub = Xt.j.subscribe("lifeformHealthChanged", (Ot => {
+             }), 2e3), ju.ru = Uu, UE(ju))
+           })), ju.lifeformHealthChangedSub = Cu.h.subscribe("lifeformHealthChanged", (su => {
```

#### 2523. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22409-L22410` → after: `L22519-L22520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22519-L22520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22519-L22520) · [Before (L22409-L22410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22409-L22410)

```diff
-               Fe: Dt,
-               ke: mt
+               aE: Zu,
+               PE: Xu
```

#### 2524. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22412` → after: `L22522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22522) · [Before (L22412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22412)

```diff
-             if ((0, yt.c)(qt) !== et || null === mt) return;
+             if ((0, hu.d)(Uu) !== Eu || null === Xu) return;
```

#### 2525. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22415-L22416` → after: `L22525-L22526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22525-L22526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22525-L22526) · [Before (L22415-L22416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22415-L22416)

```diff
-             }), 2e3)), Vt.Lt = mt, tt.bloxd.client.gameRecorder.recordLifeformHealth(qt, Dt, mt), De(Vt)
-           })), Vt.hideNametagSub = Xt.j.subscribe("appManagerUpdated|areNametagsHidden", (tt => {
+             }), 2e3)), ju.ru = Xu, uu.bloxd.client.gameRecorder.recordLifeformHealth(Uu, Zu, Xu), UE(ju)
+           })), ju.hideNametagSub = Cu.h.subscribe("appManagerUpdated|areNametagsHidden", (uu => {
```

#### 2526. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22419` → after: `L22529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22529) · [Before (L22419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22419)

```diff
-           Vt.unsubscribeKeyPromptChanges = (0, Qt.n)((() => {
+           ju.unsubscribeKeyPromptChanges = (0, bu.q)((() => {
```

#### 2527. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22421-L22424` → after: `L22531-L22534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22531-L22534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22531-L22534) · [Before (L22421-L22424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22421-L22424)

```diff
-             (null !== (tt = Vt.nameTagInfo) && void 0 !== tt && null !== (et = tt.content) && void 0 !== et && et.some(lt.ib) || null !== (Ot = Vt.nameTagInfo) && void 0 !== Ot && null !== (qt = Ot.subtitle) && void 0 !== qt && qt.some(lt.ib)) && De(Vt)
-           })), Vt._visibilityCombinator.setBooleanType("nametagEnabled", !ct.b.get("areNametagsHidden"));
-           const Ot = (0, It.e)(tt);
-           Vt.Lt = Ot.getHealthFrac(et);
+             (null !== (uu = ju.nameTagInfo) && void 0 !== uu && null !== (Eu = uu.content) && void 0 !== Eu && Eu.some(cu.tb) || null !== (su = ju.nameTagInfo) && void 0 !== su && null !== (Uu = su.subtitle) && void 0 !== Uu && Uu.some(cu.tb)) && UE(ju)
+           })), ju._visibilityCombinator.setBooleanType("nametagEnabled", !ou.d.get("areNametagsHidden"));
+           const su = (0, mu.d)(uu);
+           ju.ru = su.getHealthFrac(Eu);
```

#### 2528. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22434` → after: `L22544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22544) · [Before (L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22434)

```diff
-           tt.lL in tt.dL && et in tt.dL[tt.lL] && ("nameTagInfo" in tt.dL[tt.lL][et] && (Vt.nameTagInfo = tt.dL[tt.lL][et].nameTagInfo), "nameColour" in tt.dL[tt.lL][et] && (Vt.nameColour = tt.dL[tt.lL][et].nameColour)), De(Vt)
+           uu.FQ in uu.EQ && Eu in uu.EQ[uu.FQ] && ("nameTagInfo" in uu.EQ[uu.FQ][Eu] && (ju.nameTagInfo = uu.EQ[uu.FQ][Eu].nameTagInfo), "nameColour" in uu.EQ[uu.FQ][Eu] && (ju.nameColour = uu.EQ[uu.FQ][Eu].nameColour)), UE(ju)
```

#### 2529. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22439` → after: `L22549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22549) · [Before (L22439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22439)

```diff
-             const tt = me(Vt.uZ);
+             const uu = ZE(ju.HV);
```

#### 2530. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22445` → after: `L22555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22555) · [Before (L22445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22445)

```diff
-             Qe(Vt.uZ) && it(Vt) && De(Vt)
+             CE(ju.HV) && Lu(ju) && UE(ju)
```

#### 2531. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22448` → after: `L22558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22558) · [Before (L22448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22448)

```diff
-         dJ: function(tt, et) {
+         hG: function(uu, Eu) {
```

#### 2532. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22451` → after: `L22561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22561) · [Before (L22451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22451)

```diff
-         nS: function(tt, et) {
+         jK: function(uu, Eu) {
```

#### 2533. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22453` → after: `L22563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22563) · [Before (L22453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22453)

```diff
-           gt(et), pt.delete(et), Bt.delete(et.uZ), Xt.j.unsubscribe(et.entityMeshScalingSub), Xt.j.unsubscribe(et.nameTagInfoSub), Xt.j.unsubscribe(et.priorityNametagSub), Xt.j.unsubscribe(et.rankUpdateSub), Xt.j.unsubscribe(et.hideNameSub), Xt.j.unsubscribe(et.nameChangedSub), X … [truncated]
+           nu(Eu), Tu.delete(Eu), xu.delete(Eu.HV), Cu.h.unsubscribe(Eu.entityMeshScalingSub), Cu.h.unsubscribe(Eu.nameTagInfoSub), Cu.h.unsubscribe(Eu.priorityNametagSub), Cu.h.unsubscribe(Eu.rankUpdateSub), Cu.h.unsubscribe(Eu.hideNameSub), Cu.h.unsubscribe(Eu.nameChangedSub), C … [truncated]
```

#### 2534. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22464` → after: `L22574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22574) · [Before (L22464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22464)

```diff
-   39085: (tt, et, Vt) => {
+   39216: (uu, Eu, ju) => {
```

#### 2535. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22468-L22471` → after: `L22578-L22581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22578-L22581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22578-L22581) · [Before (L22468-L22471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22468-L22471)

```diff
-     var Ot = Vt(38157),
-       qt = Vt(37875),
-       Dt = Vt(37699),
-       mt = Vt(404),
+     var su = ju(38298),
+       Uu = ju(38002),
+       Zu = ju(37841),
+       Xu = ju(366),
```

#### 2536. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22473-L22475` → after: `L22583-L22585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22583-L22585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22583-L22585) · [Before (L22473-L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22473-L22475)

```diff
-       jt = Vt(37891),
-       Ht = Vt(37531);
-     const Xt = Vt(39091).d,
+       qu = ju(38013),
+       fu = ju(37693);
+     const Cu = ju(39222).d,
```

#### 2537. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22480-L22481` → after: `L22590-L22591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22590-L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22590-L22591) · [Before (L22480-L22481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22480-L22481)

```diff
-       const et = tt.Bf.vI(),
-         Vt = (0, Ot.q)(tt.Bf, "phBox", (0, qt.c)({
+       const Eu = uu.tO.hV(),
+         ju = (0, su.o)(uu.tO, "phBox", (0, Uu.b)({
```

#### 2538. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22488` → after: `L22598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22598) · [Before (L22488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22488)

```diff
-         Fw: et,
+         vY: Eu,
```

#### 2539. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22496` → after: `L22606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22606) · [Before (L22496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22496)

```diff
-       }).mirror, Vt.visibility = .5, Vt.Av(!1);
+       }).mirror, ju.visibility = .5, ju.Wk(!1);
```

#### 2540. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22506` → after: `L22616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22616) · [Before (L22506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22506)

```diff
-         qJ: function(et, Ot) {
+         lG: function(Eu, su) {
```

#### 2541. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22508` → after: `L22618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22618) · [Before (L22508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22508)

```diff
-           Ot.instance = Vt.createInstance(`mesh overlay ${et}`), tt.Bf.ow(Ot.instance, !1, null), Ot.lastFlash = Date.now(), null === (qt = tt.mJ.aVt(et)) || void 0 === qt || qt.meshEnabledCombinator.forceUpdate()
+           su.instance = ju.createInstance(`mesh overlay ${Eu}`), uu.tO.QY(su.instance, !1, null), su.lastFlash = Date.now(), null === (Uu = uu.YG.AEu(Eu)) || void 0 === Uu || Uu.meshEnabledCombinator.forceUpdate()
```

#### 2542. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22510` → after: `L22620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22620) · [Before (L22510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22510)

```diff
-         nS: function(tt, et) {
+         jK: function(uu, Eu) {
```

#### 2543. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22513` → after: `L22623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22623) · [Before (L22513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22513)

```diff
-         dJ: function(et, Vt) {
+         hG: function(Eu, ju) {
```

#### 2544. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22516-L22517` → after: `L22626-L22627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22626-L22627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22626-L22627) · [Before (L22516-L22517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22516-L22517)

```diff
-             const et = (0, jt.getCaughtUpMeshRotation)(tt, mt.uZ).renderRotation,
-               Vt = tt.mJ.RY(mt.uZ).zB;
+             const Eu = (0, qu.getCaughtUpMeshRotation)(uu, Xu.HV).renderRotation,
+               ju = uu.YG.wT(Xu.HV).xH;
```

#### 2545. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22519` → after: `L22629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22629) · [Before (L22519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22519)

```diff
-             if (dt().set(ft, Vt[0], Vt[1] + Xt.playerHitboxHeights.head / 2, Vt[2] + .1), dt().gd(ft, ft, Vt, et[2]), dt().sq(ft, ft, Vt, et[0]), dt().tm(ft, ft, Vt, et[1]), (0, Dt.s)(mt.instance, ft[0], ft[1], ft[2]), mt.instance.rotation.set(et[0], et[1], et[2]), Ot > mt.lastFl … [truncated]
+             if (lu().set(Ou, ju[0], ju[1] + Cu.playerHitboxHeights.head / 2, ju[2] + .1), lu().gq(Ou, Ou, ju, Eu[2]), lu().nX(Ou, Ou, ju, Eu[0]), lu().sq(Ou, Ou, ju, Eu[1]), (0, Zu.o)(Xu.instance, Ou[0], Ou[1], Ou[2]), Xu.instance.rotation.set(Eu[0], Eu[1], Eu[2]), su > Xu.lastFl … [truncated]
```

#### 2546. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22526` → after: `L22636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22636) · [Before (L22526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22526)

```diff
-   39098: (tt, et, Vt) => {
+   39225: (uu, Eu, ju) => {
```

#### 2547. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22530-L22531` → after: `L22640-L22641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22640-L22641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22640-L22641) · [Before (L22530-L22531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22530-L22531)

```diff
-     var Ot = Vt(736),
-       qt = Vt(37699);
+     var su = ju(692),
+       Uu = ju(37841);
```

#### 2548. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22542` → after: `L22652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22652) · [Before (L22542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22542)

```diff
-           AV: null,
+           Vj: null,
```

#### 2549. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22546` → after: `L22656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22656) · [Before (L22546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22546)

```diff
-         qJ: function(tt, et) {
+         lG: function(uu, Eu) {
```

#### 2550. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22549` → after: `L22659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22659) · [Before (L22549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22549)

```diff
-         nS: function(tt, et) {
+         jK: function(uu, Eu) {
```

#### 2551. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22552` → after: `L22662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22662) · [Before (L22552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22552)

```diff
-         dJ: function(et, Vt) {
+         hG: function(Eu, ju) {
```

#### 2552. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22558` → after: `L22668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22668) · [Before (L22558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22558)

```diff
-             const et = null === Ot.AV ? 0 : Xt(tt, tt.mJ.RY(Ot.uZ).OOt, Ot.AV);
+             const Eu = null === su.Vj ? 0 : Cu(uu, uu.YG.wT(su.HV).Kju, su.Vj);
```

#### 2553. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22560` → after: `L22670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22670) · [Before (L22560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22560)

```diff
-               for (let Vt = 0; Vt < Dt; Vt++) Ot.meshes.push(lt(tt, Ot.uZ));
+               for (let ju = 0; ju < Zu; ju++) su.meshes.push(cu(uu, su.HV));
```

#### 2554. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22563` → after: `L22673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22673) · [Before (L22563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22563)

```diff
-               qt && Et(tt, Ot, Vt, mt[Vt], Ot.AV, dt[Vt]), Ot._shown[Vt] !== qt && (Ot._shown[Vt] = qt, Ot.meshes[Vt].Av(qt))
+               Uu && Nu(uu, su, ju, Xu[ju], su.Vj, lu[ju]), su._shown[ju] !== Uu && (su._shown[ju] = Uu, su.meshes[ju].Wk(Uu))
```

#### 2555. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22576` → after: `L22686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22686) · [Before (L22576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22576)

```diff
-       const Ot = tt.bl;
+       const su = uu.ec;
```

#### 2556. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22581` → after: `L22691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22691) · [Before (L22581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22581)

```diff
-         Qt(Dt, et, Ot, jt, Ht) || tt.sQ.HA(jt, Vt, Ht) || (mt[qt] = jt, dt[qt] = Ht, qt++)
+         bu(Zu, Eu, su, qu, fu) || uu.zb.tL(qu, ju, fu) || (Xu[Uu] = qu, lu[Uu] = fu, Uu++)
```

#### 2557. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22593-L22594` → after: `L22703-L22704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22703-L22704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22703-L22704) · [Before (L22593-L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22593-L22594)

```diff
-       const Vt = tt.Bf.qOt.createInstance(`floatingMesh_${et}_${(0,Ot.b)()}`);
-       return tt.Bf.ow(Vt), Vt.Av(!1), Vt
+       const ju = uu.tO.Vju.createInstance(`floatingMesh_${Eu}_${(0,su.e)()}`);
+       return uu.tO.QY(ju), ju.Wk(!1), ju
```

#### 2558. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22598` → after: `L22708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22708) · [Before (L22598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22598)

```diff
-       const dt = tt.bl,
+       const lu = uu.ec,
```

#### 2559. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22603` → after: `L22713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22713) · [Before (L22603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22603)

```diff
-       Qt[3 * Vt] === jt && Qt[3 * Vt + 1] === Ht && Qt[3 * Vt + 2] === Xt || (Qt[3 * Vt] = jt, Qt[3 * Vt + 1] = Ht, Qt[3 * Vt + 2] = Xt, (0, qt.s)(et.meshes[Vt], jt, Ht, Xt))
+       bu[3 * ju] === qu && bu[3 * ju + 1] === fu && bu[3 * ju + 2] === Cu || (bu[3 * ju] = qu, bu[3 * ju + 1] = fu, bu[3 * ju + 2] = Cu, (0, Uu.o)(Eu.meshes[ju], qu, fu, Cu))
```

#### 2560. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22606` → after: `L22716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22716) · [Before (L22606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22606)

```diff
-   39102: (tt, et, Vt) => {
+   39228: (uu, Eu, ju) => {
```

#### 2561. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22610-L22612` → after: `L22720-L22722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22720-L22722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22720-L22722) · [Before (L22610-L22612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22610-L22612)

```diff
-     var Ot = Vt(2043),
-       qt = Vt(3751),
-       Dt = Vt(37654);
+     var su = ju(2011),
+       Uu = ju(3879),
+       Zu = ju(37807);
```

#### 2562. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22631-L22632` → after: `L22741-L22742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22741-L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22741-L22742) · [Before (L22631-L22632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22631-L22632)

```diff
-         qJ: function(et, Vt) {
-           const jt = [Ot.b.subscribe("forcedCameraDirection", (et => {
+         lG: function(Eu, ju) {
+           const qu = [su.e.subscribe("forcedCameraDirection", (Eu => {
```

#### 2563. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22634-L22635` → after: `L22744-L22745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22744-L22745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22744-L22745) · [Before (L22634-L22635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22634-L22635)

```diff
-               if (tt.OJ.forcedCameraDirectionTransitionMs <= 0 || null === et) {
-                 if (null === et) tt.camera.jB = null, tt.camera.XB = null;
+               if (uu.sG.forcedCameraDirectionTransitionMs <= 0 || null === Eu) {
+                 if (null === Eu) uu.camera.DH = null, uu.camera.gH = null;
```

#### 2564. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22638-L22641` → after: `L22748-L22751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22748-L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22748-L22751) · [Before (L22638-L22641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22638-L22641)

```diff
-                     nX: Vt,
-                     RVt: Ot
-                   } = (0, Dt.d)(et);
-                   tt.camera.jB = Ot, tt.camera.XB = Vt
+                     nf: ju,
+                     lju: su
+                   } = (0, Zu.f)(Eu);
+                   uu.camera.DH = su, uu.camera.gH = ju
```

#### 2565. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22651-L22653` → after: `L22761-L22763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22761-L22763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22761-L22763) · [Before (L22651-L22653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22651-L22653)

```diff
-                 nX: qt,
-                 RVt: mt
-               } = (0, Dt.d)(et);
+                 nf: Uu,
+                 lju: Xu
+               } = (0, Zu.f)(Eu);
```

#### 2566. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22659` → after: `L22769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22769) · [Before (L22659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22659)

```diff
-               Vt.directionTransitionStart = dt, Vt.directionTransitionEnd = dt + tt.OJ.forcedCameraDirectionTransitionMs, tt.camera.jB = Ot.pitch, tt.camera.XB = Ot.heading
+               ju.directionTransitionStart = lu, ju.directionTransitionEnd = lu + uu.sG.forcedCameraDirectionTransitionMs, uu.camera.DH = su.pitch, uu.camera.gH = su.heading
```

#### 2567. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22661` → after: `L22771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22771) · [Before (L22661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22661)

```diff
-           })), Ot.b.subscribe("cameraRoll", (et => {
+           })), su.e.subscribe("cameraRoll", (Eu => {
```

#### 2568. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22663-L22664` → after: `L22773-L22774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22773-L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22773-L22774) · [Before (L22663-L22664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22663-L22664)

```diff
-               if (tt.OJ.cameraRollTransitionMs <= 0) return tt.camera.nf = et, Vt.rollTransitionFrom = null, Vt.rollTransitionTo = null, Vt.rollTransitionStart = null, void(Vt.rollTransitionEnd = null);
-               Vt.rollTransitionFrom = tt.camera.nf, Vt.rollTransitionTo = et;
+               if (uu.sG.cameraRollTransitionMs <= 0) return uu.camera.rc = Eu, ju.rollTransitionFrom = null, ju.rollTransitionTo = null, ju.rollTransitionStart = null, void(ju.rollTransitionEnd = null);
+               ju.rollTransitionFrom = uu.camera.rc, ju.rollTransitionTo = Eu;
```

#### 2569. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22666` → after: `L22776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22776) · [Before (L22666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22666)

```diff
-               Vt.rollTransitionStart = Ot, Vt.rollTransitionEnd = Ot + tt.OJ.cameraRollTransitionMs
+               ju.rollTransitionStart = su, ju.rollTransitionEnd = su + uu.sG.cameraRollTransitionMs
```

#### 2570. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22668` → after: `L22778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22778) · [Before (L22668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22668)

```diff
-           })), Ot.b.subscribe("forcedCameraDirectionTransitionMs", (tt => {
+           })), su.e.subscribe("forcedCameraDirectionTransitionMs", (uu => {
```

#### 2571. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22675` → after: `L22785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22785) · [Before (L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22675)

```diff
-           })), Ot.b.subscribe("cameraRollTransitionMs", (tt => {
+           })), su.e.subscribe("cameraRollTransitionMs", (uu => {
```

#### 2572. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22682` → after: `L22792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22792) · [Before (L22682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22682)

```diff
-           })), Ot.b.subscribe("cameraRotationOffset", (tt => {
+           })), su.e.subscribe("cameraRotationOffset", (uu => {
```

#### 2573. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22684` → after: `L22794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22794) · [Before (L22684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22684)

```diff
-           })), Ot.b.subscribe("cameraPositionOffset", (tt => {
+           })), su.e.subscribe("cameraPositionOffset", (uu => {
```

#### 2574. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22697-L22698` → after: `L22807-L22808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22807-L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22807-L22808) · [Before (L22697-L22698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22697-L22698)

```diff
-           }, Ht(tt.OJ.cameraRotationOffset), Xt(tt.OJ.cameraPositionOffset), (0, qt.onGameReset)((() => {
-             tt.camera.jB = null, tt.camera.XB = null, tt.camera.nf = 0, Ht(mt), Xt(dt), Vt.directionTransitionFrom = null, Vt.directionTransitionTo = null, Vt.directionTransitionStart = null, Vt.directionTransitionEnd = null, Vt.rollTransitionFrom = null, Vt.rollTransitionTo = nu … [truncated]
+           }, fu(uu.sG.cameraRotationOffset), Cu(uu.sG.cameraPositionOffset), (0, Uu.onGameReset)((() => {
+             uu.camera.DH = null, uu.camera.gH = null, uu.camera.rc = 0, fu(Xu), Cu(lu), ju.directionTransitionFrom = null, ju.directionTransitionTo = null, ju.directionTransitionStart = null, ju.directionTransitionEnd = null, ju.rollTransitionFrom = null, ju.rollTransitionTo = nu … [truncated]
```

#### 2575. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22701` → after: `L22811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22811) · [Before (L22701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22701)

```diff
-         nS: function(tt, et) {
+         jK: function(uu, Eu) {
```

#### 2576. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22704` → after: `L22814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22814) · [Before (L22704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22704)

```diff
-         dJ: function(et, Vt) {
+         hG: function(Eu, ju) {
```

#### 2577. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22713` → after: `L22823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22823) · [Before (L22713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22713)

```diff
-             Dt >= 1 ? (tt.camera.jB = Vt.pitch, tt.camera.XB = Xt(Vt.heading), Ot.directionTransitionFrom = null, Ot.directionTransitionTo = null, Ot.directionTransitionStart = null, Ot.directionTransitionEnd = null) : (tt.camera.jB = et.pitch + (Vt.pitch - et.pitch) * mt, tt.cam … [truncated]
+             Zu >= 1 ? (uu.camera.DH = ju.pitch, uu.camera.gH = Cu(ju.heading), su.directionTransitionFrom = null, su.directionTransitionTo = null, su.directionTransitionStart = null, su.directionTransitionEnd = null) : (uu.camera.DH = Eu.pitch + (ju.pitch - Eu.pitch) * Xu, uu.cam … [truncated]
```

#### 2578. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22718` → after: `L22828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22828) · [Before (L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22718)

```diff
-             et >= 1 ? (tt.camera.nf = Ot.rollTransitionTo, Ot.rollTransitionFrom = null, Ot.rollTransitionTo = null, Ot.rollTransitionStart = null, Ot.rollTransitionEnd = null) : tt.camera.nf = Ot.rollTransitionFrom + (Ot.rollTransitionTo - Ot.rollTransitionFrom) * Vt
+             Eu >= 1 ? (uu.camera.rc = su.rollTransitionTo, su.rollTransitionFrom = null, su.rollTransitionTo = null, su.rollTransitionStart = null, su.rollTransitionEnd = null) : uu.camera.rc = su.rollTransitionFrom + (su.rollTransitionTo - su.rollTransitionFrom) * ju
```

#### 2579. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22725` → after: `L22835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22835) · [Before (L22725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22725)

```diff
-       return tt < .5 ? 4 * tt * tt * tt : 1 - Math.pow(-2 * tt + 2, 3) / 2
+       return uu < .5 ? 4 * uu * uu * uu : 1 - Math.pow(-2 * uu + 2, 3) / 2
```

#### 2580. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22737` → after: `L22847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22847) · [Before (L22737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22737)

```diff
-       return qt > Math.PI ? qt -= Vt : qt < -Math.PI && (qt += Vt), tt + qt
+       return Uu > Math.PI ? Uu -= ju : Uu < -Math.PI && (Uu += ju), uu + Uu
```

#### 2581. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22744` → after: `L22854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22854) · [Before (L22744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22744)

```diff
-       }(tt) ? tt : Vt;
+       }(uu) ? uu : ju;
```

#### 2582. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22748` → after: `L22858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22858) · [Before (L22748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22748)

```diff
-   38992: (tt, et, Vt) => {
+   39119: (uu, Eu, ju) => {
```

#### 2583. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22754-L22755` → after: `L22864-L22865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22864-L22865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22864-L22865) · [Before (L22754-L22755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22754-L22755)

```diff
-     var Ot = Vt(37323),
-       qt = Vt(38316);
+     var su = ju(37482),
+       Uu = ju(38439);
```

#### 2584. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22758` → after: `L22868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22868) · [Before (L22758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22758)

```diff
-         this.RP = null, this.DOt = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.uZ = void 0
+         this.mV = null, this.rju = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.HV = void 0
```

#### 2585. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22767-L22768` → after: `L22877-L22878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22877-L22878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22877-L22878) · [Before (L22767-L22768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22767-L22768)

```diff
-         dJ: function(et, Vt) {
-           for (const qt of Vt) qt.DOt.mOt && ((0, Ot.pausesOutOfView)(tt, qt.uZ, qt.RP) ? qt._posePaused = !0 : jt(tt, qt))
+         hG: function(Eu, ju) {
+           for (const Uu of ju) Uu.rju.Qju && ((0, su.pausesOutOfView)(uu, Uu.HV, Uu.mV) ? Uu._posePaused = !0 : qu(uu, Uu))
```

#### 2586. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22774` → after: `L22884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22884) · [Before (L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22774)

```diff
-       const Vt = tt.mJ.uVt(et);
+       const ju = uu.YG.uju(Eu);
```

#### 2587. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22780` → after: `L22890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22890) · [Before (L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22780)

```diff
-       const Vt = et.uZ;
+       const ju = Eu.HV;
```

#### 2588. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22784` → after: `L22894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22894) · [Before (L22784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22784)

```diff
-       } = tt.mJ.getState(Vt, "updateWalkingState");
+       } = uu.YG.getState(ju, "updateWalkingState");
```

#### 2589. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22787` → after: `L22897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22897) · [Before (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22787)

```diff
-       const Dt = tt.mJ.getState(Vt, "animator");
+       const Zu = uu.YG.getState(ju, "animator");
```

#### 2590. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22791` → after: `L22901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22901) · [Before (L22791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22791)

```diff
-   39107: (tt, et, Vt) => {
+   39232: (uu, Eu, ju) => {
```

#### 2591. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22795-L22799` → after: `L22905-L22909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22905-L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22905-L22909) · [Before (L22795-L22799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22795-L22799)

```diff
-     var Ot = Vt(37032),
-       qt = Vt(31),
-       Dt = Vt(38406),
-       mt = Vt(37480),
-       dt = Vt(38356);
+     var su = ju(37194),
+       Uu = ju(24),
+       Zu = ju(38511),
+       Xu = ju(37646),
+       lu = ju(38465);
```

#### 2592. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22815` → after: `L22925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22925) · [Before (L22815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22815)

```diff
-         qJ: function(et, Vt) {
+         lG: function(Eu, ju) {
```

#### 2593. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22817-L22819` → after: `L22927-L22929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22927-L22929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22927-L22929) · [Before (L22817-L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22817-L22819)

```diff
-           Vt.isAlive = (0, dt.b)("_isAlive", null === (Ht = tt.dL[tt.lL]) || void 0 === Ht || null === (Xt = Ht[Vt.uZ]) || void 0 === Xt ? void 0 : Xt._isAlive), Vt._isAliveSub = qt.j.subscribe(`otherEntitySettingsClientifiedEId|${Vt.uZ}|_isAlive`, (tt => {
-             Vt.isAlive = (0, dt.b)("_isAlive", tt), (0, Dt.updateLocalPlayerHeldItem)()
-           })), Vt.addedTime = Date.now(), Vt._hasPriorityNametagSub = qt.j.subscribe(`otherEntitySettingsClientifiedEId|${Vt.uZ}|hasPriorityNametag`, (tt => {
+           ju.isAlive = (0, lu.e)("_isAlive", null === (fu = uu.EQ[uu.FQ]) || void 0 === fu || null === (Cu = fu[ju.HV]) || void 0 === Cu ? void 0 : Cu._isAlive), ju._isAliveSub = Uu.h.subscribe(`otherEntitySettingsClientifiedEId|${ju.HV}|_isAlive`, (uu => {
+             ju.isAlive = (0, lu.e)("_isAlive", uu), (0, Zu.updateLocalPlayerHeldItem)()
+           })), ju.addedTime = Date.now(), ju._hasPriorityNametagSub = Uu.h.subscribe(`otherEntitySettingsClientifiedEId|${ju.HV}|hasPriorityNametag`, (uu => {
```

#### 2594. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22823` → after: `L22933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22933) · [Before (L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22823)

```diff
-             mJ: Qt
+             YG: bu
```

#### 2595. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22827` → after: `L22937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22937) · [Before (L22827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22827)

```diff
-             (0, mt.m)(tt, et, Ot);
+             (0, Xu.q)(uu, Eu, su);
```

#### 2596. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22829` → after: `L22939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22939) · [Before (L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22829)

```diff
-               Xt = Qt.JVt(et),
+               Cu = bu.zEu(Eu),
```

#### 2597. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22835` → after: `L22945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22945) · [Before (L22835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22835)

```diff
-               if (null !== (ft = null === (wt = tt.dL[tt.lL][Vt.uZ]) || void 0 === wt ? void 0 : wt.hasPriorityNametag) && void 0 !== ft && ft)
+               if (null !== (Ou = null === (Yu = uu.EQ[uu.FQ][ju.HV]) || void 0 === Yu ? void 0 : Yu.hasPriorityNametag) && void 0 !== Ou && Ou)
```

#### 2598. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22838` → after: `L22948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22948) · [Before (L22838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22838)

```diff
-               (Et || Vt.drawnHidden) && (et = !1), (0, mt.m)(tt, lt, et)
+               (Nu || ju.drawnHidden) && (Eu = !1), (0, Xu.q)(uu, cu, Eu)
```

#### 2599. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22842-L22844` → after: `L22952-L22954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22952-L22954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22952-L22954) · [Before (L22842-L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22842-L22844)

```diff
-             yt && (yt.forceSetEnabled = !!Ht && null, yt.instance.Av(null !== (Nt = yt.forceSetEnabled) && void 0 !== Nt ? Nt : yt.isEnabled));
-             Vt.uZ !== tt.lL && (Ot ? Qt.ptt(et, "collideTerrain") || Qt.RZ(et, "collideTerrain") : Qt.ptt(et, "collideTerrain") && Qt.ZZ(et, "collideTerrain")), et === tt.lL && qt.j.sw("clientPlayerModelVisible", Ht)
-           })), Qt.getState(et, Qt.names.BE).enabledCombinator = new Ot.b
+             hu && (hu.forceSetEnabled = !!fu && null, hu.instance.Wk(null !== (Du = hu.forceSetEnabled) && void 0 !== Du ? Du : hu.isEnabled));
+             ju.HV !== uu.FQ && (su ? bu.xuu(Eu, "collideTerrain") || bu.yV(Eu, "collideTerrain") : bu.xuu(Eu, "collideTerrain") && bu.zV(Eu, "collideTerrain")), Eu === uu.FQ && Uu.h.TY("clientPlayerModelVisible", fu)
+           })), bu.getState(Eu, bu.names.nN).enabledCombinator = new su.b
```

#### 2600. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22846-L22847` → after: `L22956-L22957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22956-L22957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22956-L22957) · [Before (L22846-L22847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22846-L22847)

```diff
-         nS: function(tt, et) {
-           qt.j.unsubscribe(et._isAliveSub), qt.j.unsubscribe(et._hasPriorityNametagSub)
+         jK: function(uu, Eu) {
+           Uu.h.unsubscribe(Eu._isAliveSub), Uu.h.unsubscribe(Eu._hasPriorityNametagSub)
```

#### 2601. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22852` → after: `L22962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22962) · [Before (L22852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22852)

```diff
-   39112: (tt, et, Vt) => {
+   39241: (uu, Eu, ju) => {
```

#### 2602. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22856-L22857` → after: `L22966-L22967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22966-L22967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22966-L22967) · [Before (L22856-L22857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22856-L22857)

```diff
-     var Ot = Vt(38054),
-       qt = Vt(38285);
+     var su = ju(38197),
+       Uu = ju(38416);
```

#### 2603. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22870` → after: `L22980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22980) · [Before (L22870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22870)

```diff
-           qt.e.dropExpired(Date.now())
+           Uu.d.dropExpired(Date.now())
```

#### 2604. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22872` → after: `L22982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22982) · [Before (L22872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22872)

```diff
-         dJ: function(et, Vt) {
+         hG: function(Eu, ju) {
```

#### 2605. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22875` → after: `L22985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22985) · [Before (L22875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22875)

```diff
-             const et = tt.mJ.oet(Dt.uZ);
+             const Eu = uu.YG.GEu(Zu.HV);
```

#### 2606. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22878` → after: `L22988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22988) · [Before (L22878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22878)

```diff
-             et.mesh.cj.set(Vt, Vt, Vt), et.offset[1] = Dt.centreOffsetY + Dt.halfHeight * (Vt - Ot.l)
+             Eu.mesh.Of.set(ju, ju, ju), Eu.offset[1] = Zu.centreOffsetY + Zu.halfHeight * (ju - su.j)
```

#### 2607. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22884` → after: `L22994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22994) · [Before (L22884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22884)

```diff
-   39117: (tt, et, Vt) => {
+   39245: (uu, Eu, ju) => {
```

#### 2608. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22889-L22890` → after: `L22999-L23000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22999-L23000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L22999-L23000) · [Before (L22889-L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22889-L22890)

```diff
-     var Ot = Vt(229),
-       qt = Vt(404),
+     var su = ju(202),
+       Uu = ju(366),
```

#### 2609. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22892-L22894` → after: `L23002-L23004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23002-L23004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23002-L23004) · [Before (L22892-L22894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22892-L22894)

```diff
-       mt = Vt(37032),
-       dt = Vt(2848),
-       jt = Vt(37314);
+       Xu = ju(37194),
+       lu = ju(2893),
+       qu = ju(37472);
```

#### 2610. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22898` → after: `L23008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23008) · [Before (L22898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22898)

```diff
-       lt = Ot.e.ff,
+       cu = su.e.hO,
```

#### 2611. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22921` → after: `L23031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23031) · [Before (L22921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22921)

```diff
-         const Ot = `${tt}|${et}|${Vt}`,
+         const su = `${uu}|${Eu}|${ju}`,
```

#### 2612. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22939` → after: `L23049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23049) · [Before (L22939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22939)

```diff
-           mj: null,
+           nl: null,
```

#### 2613. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22949-L22952` → after: `L23059-L23062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23059-L23062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23059-L23062) · [Before (L22949-L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22949-L22952)

```diff
-         qJ: function(Vt, Ot) {
-           if (!Ot.addMeshComponent || !Ot.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${Ot.addMeshComponent} ${Ot.removeMeshComponent}`);
-           if (Ot._lastPos = Dt().create(), Dt().copy(Ot._lastPos, tt.mJ.YM(Vt)), null !== Ot.movingHideDist && qt.add(Ot), 0 === et.size && (Dt().set(Kt, 1 / 0, 1 / 0, 1 / 0), Dt().copy(ut, Kt)), Pt(Ot), It(Ot, Ot._competesForCap), Ot.immediatelyUpdate) {
-             ct(Ot, tt.mJ.YM(tt.lL))
+         lG: function(ju, su) {
+           if (!su.addMeshComponent || !su.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${su.addMeshComponent} ${su.removeMeshComponent}`);
+           if (su._lastPos = Zu().create(), Zu().copy(su._lastPos, uu.YG.bM(ju)), null !== su.movingHideDist && Uu.add(su), 0 === Eu.size && (Zu().set(wu, 1 / 0, 1 / 0, 1 / 0), Zu().copy(pu, wu)), vu(su), mu(su, su._competesForCap), su.immediatelyUpdate) {
+             ou(su, uu.YG.bM(uu.FQ))
```

#### 2614. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22955` → after: `L23065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23065) · [Before (L22955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22955)

```diff
-         nS: function(tt, et) {
+         jK: function(uu, Eu) {
```

#### 2615. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22959` → after: `L23069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23069) · [Before (L22959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22959)

```diff
-           const jt = tt.camera.YM(),
+           const qu = uu.camera.bM(),
```

#### 2616. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22978` → after: `L23088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23088) · [Before (L22978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22978)

```diff
-                 for (const Vt of qt) Ct[mt++] = Dt().sqrDist(et, tt.mJ.YM(Vt.uZ));
+                 for (const ju of Uu) Gu[Xu++] = Zu().sqrDist(Eu, uu.YG.bM(ju.HV));
```

#### 2617. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22983` → after: `L23093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23093) · [Before (L22983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22983)

```diff
-             const Vt = tt.mJ.YM(et.uZ);
+             const ju = uu.YG.bM(Eu.HV);
```

#### 2618. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22988` → after: `L23098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23098) · [Before (L22988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L22988)

```diff
-           if (!Wt) tt: for (const tt of Vt)
+           if (!au) uu: for (const uu of ju)
```

#### 2619. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23002-L23003` → after: `L23112-L23113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23112-L23113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23112-L23113) · [Before (L23002-L23003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23002-L23003)

```diff
-           mJ: qt
-         } = tt, Xt = et.uZ, Qt = qt.YM(Xt);
+           YG: Uu
+         } = uu, Cu = Eu.HV, bu = Uu.bM(Cu);
```

#### 2620. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23011` → after: `L23121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23121) · [Before (L23011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23011)

```diff
-           ft = Math.max(lt, null !== (Ot = et.movingHideDist) && void 0 !== Ot ? Ot : 0),
+           Ou = Math.max(cu, null !== (su = Eu.movingHideDist) && void 0 !== su ? su : 0),
```

#### 2621. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23013` → after: `L23123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23123) · [Before (L23013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23013)

```diff
-           yt = wt && (et.displayOutsideLoadedChunk || (0, dt.c)().hA(Math.floor(Qt[0]), Math.floor(Qt[1]), Math.floor(Qt[2])));
+           hu = Yu && (Eu.displayOutsideLoadedChunk || (0, lu.b)().Zx(Math.floor(bu[0]), Math.floor(bu[1]), Math.floor(bu[2])));
```

#### 2622. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23015` → after: `L23125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23125) · [Before (L23015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23015)

```diff
-         const Nt = Jt.get(et.mj),
+         const Du = eu.get(Eu.nl),
```

#### 2623. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23017` → after: `L23127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23127) · [Before (L23017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23017)

```diff
-         et.isMeshShown !== Mt && (Mt ? (qt.oet(Xt) || (et.addMeshComponent(), (0, jt.i)(tt, Xt)), et.addShadow && !qt.getState(Xt, qt.names.BE) && (qt.RZ(Xt, qt.names.BE, {
+         Eu.isMeshShown !== gu && (gu ? (Uu.GEu(Cu) || (Eu.addMeshComponent(), (0, qu.j)(uu, Cu)), Eu.addShadow && !Uu.getState(Cu, Uu.names.nN) && (Uu.yV(Cu, Uu.names.nN, {
```

#### 2624. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23019` → after: `L23129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23129) · [Before (L23019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23019)

```diff
-         }), qt.getState(Xt, qt.names.BE).enabledCombinator = new mt.b)) : (et.removeMeshComponent(), et.addShadow && qt.getState(Xt, qt.names.BE) && qt.ZZ(Xt, qt.names.BE)), et.isMeshShown = Mt)
+         }), Uu.getState(Cu, Uu.names.nN).enabledCombinator = new Xu.b)) : (Eu.removeMeshComponent(), Eu.addShadow && Uu.getState(Cu, Uu.names.nN) && Uu.zV(Cu, Uu.names.nN)), Eu.isMeshShown = gu)
```

#### 2625. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23037-L23039` → after: `L23147-L23149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23147-L23149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23147-L23149) · [Before (L23037-L23039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23037-L23039)

```diff
-         if (tt._competesForCap = et, !tt.mj) return;
-         let Vt = bt.get(tt.mj);
-         et ? (Vt || (Vt = new Set, bt.set(tt.mj, Vt)), Vt.add(tt)) : Vt && (Vt.delete(tt), 0 === Vt.size && (bt.delete(tt.mj), Jt.delete(tt.mj)))
+         if (uu._competesForCap = Eu, !uu.nl) return;
+         let ju = Mu.get(uu.nl);
+         Eu ? (ju || (ju = new Set, Mu.set(uu.nl, ju)), ju.add(uu)) : ju && (ju.delete(uu), 0 === ju.size && (Mu.delete(uu.nl), eu.delete(uu.nl)))
```

#### 2626. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23043` → after: `L23153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23153) · [Before (L23043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23043)

```diff
-         let Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.mJ.YM(Vt.uZ);
+         let su = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.YG.bM(ju.HV);
```

#### 2627. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23050` → after: `L23160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23160) · [Before (L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23050)

```diff
-         const jt = `${qt}|${Dt}|${mt}`,
+         const qu = `${Uu}|${Zu}|${Xu}`,
```

#### 2628. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23115` → after: `L23225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23225) · [Before (L23115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23115)

```diff
-       return Math.max(tt.hideDist, null !== (et = tt.movingHideDist) && void 0 !== et ? et : 0)
+       return Math.max(uu.hideDist, null !== (Eu = uu.movingHideDist) && void 0 !== Eu ? Eu : 0)
```

#### 2629. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23121` → after: `L23231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23231) · [Before (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23121)

```diff
-       return et < Vt ? Vt - et : et > Ot ? et - Ot : 0
+       return Eu < ju ? ju - Eu : Eu > su ? Eu - su : 0
```

#### 2630. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23124` → after: `L23234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23234) · [Before (L23124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23124)

```diff
-   38989: (tt, et, Vt) => {
+   39112: (uu, Eu, ju) => {
```

#### 2631. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23129-L23135` → after: `L23239-L23245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23239-L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23239-L23245) · [Before (L23129-L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23129-L23135)

```diff
-     var Ot = Vt(37584),
-       qt = Vt(37323),
-       Dt = Vt(37403),
-       mt = Vt(37398),
-       dt = Vt(37647),
-       jt = Vt(38316),
-       Ht = Vt(38327);
+     var su = ju(37749),
+       Uu = ju(37482),
+       Zu = ju(37554),
+       Xu = ju(37541),
+       lu = ju(37803),
+       qu = ju(38439),
+       fu = ju(38449);
```

#### 2632. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23142-L23143` → after: `L23252-L23253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23252-L23253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23252-L23253) · [Before (L23142-L23143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23142-L23143)

```diff
-           RP: null,
-           DOt: null,
+           mV: null,
+           rju: null,
```

#### 2633. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23159-L23160` → after: `L23269-L23270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23269-L23270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23269-L23270) · [Before (L23159-L23160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23159-L23160)

```diff
-         dJ: function(et, Vt) {
-           for (const Ot of Vt) Ot.DOt.mOt && ((0, qt.pausesOutOfView)(tt, Ot.uZ, Ot.RP) ? (Ot._posePaused = !0, lt(tt, Ot, et)) : ft(tt, Ot, et))
+         hG: function(Eu, ju) {
+           for (const su of ju) su.rju.Qju && ((0, Uu.pausesOutOfView)(uu, su.HV, su.mV) ? (su._posePaused = !0, cu(uu, su, Eu)) : Ou(uu, su, Eu))
```

#### 2634. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23166` → after: `L23276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23276) · [Before (L23166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23166)

```diff
-       const Vt = tt.mJ.CVt(et);
+       const ju = uu.YG.REu(Eu);
```

#### 2635. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23171` → after: `L23281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23281) · [Before (L23171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23171)

```diff
-       const Ot = tt.mJ.xet(et.uZ);
+       const su = uu.YG.PEu(Eu.HV);
```

#### 2636. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23174` → after: `L23284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23284) · [Before (L23174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23174)

```diff
-       (0, Ht.e)(tt, et.uZ) || "gliding" === qt || "driving" === qt || (Mt(tt, et) ? bt(tt, et, Ot) : "zombie" !== qt && Jt(tt, et, Ot, Et(tt, et), Vt))
+       (0, fu.b)(uu, Eu.HV) || "gliding" === Uu || "driving" === Uu || (gu(uu, Eu) ? Mu(uu, Eu, su) : "zombie" !== Uu && eu(uu, Eu, su, Nu(uu, Eu), ju))
```

#### 2637. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23178` → after: `L23288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23288) · [Before (L23178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23178)

```diff
-       return tt.mJ.getState(et.uZ, "animator")
+       return uu.YG.getState(Eu.HV, "animator")
```

#### 2638. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23184` → after: `L23294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23294) · [Before (L23184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23184)

```diff
-       const qt = tt.mJ.xet(et.uZ),
+       const Uu = uu.YG.PEu(Eu.HV),
```

#### 2639. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23188-L23189` → after: `L23298-L23299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23298-L23299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23298-L23299) · [Before (L23188-L23189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23188-L23189)

```diff
-         Qt = et.uZ === tt.lL ? dt.c.getPlayerFacingPitch(tt) : qt.cameraPitch,
-         lt = null === (Ot = tt.mJ.MVt(et.uZ)) || void 0 === Ot ? void 0 : Ot.LJ,
+         bu = Eu.HV === uu.FQ ? lu.d.getPlayerFacingPitch(uu) : Uu.cameraPitch,
+         cu = null === (su = uu.YG.nEu(Eu.HV)) || void 0 === su ? void 0 : su.nG,
```

#### 2640. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23191` → after: `L23301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23301) · [Before (L23191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23191)

```diff
-         yt = (0, Ht.e)(tt, et.uZ),
+         hu = (0, fu.b)(uu, Eu.HV),
```

#### 2641. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23193` → after: `L23303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23303) · [Before (L23193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23193)

```diff
-         ct = (0, jt.getRigController)(tt, et.uZ),
+         ou = (0, qu.getRigController)(uu, Eu.HV),
```

#### 2642. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23221` → after: `L23331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23331) · [Before (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23221)

```diff
-         Ht = dt ? tt.mJ.getState(et.uZ, "updateWalkingState").walkingAngle : 0;
+         fu = lu ? uu.YG.getState(Eu.HV, "updateWalkingState").walkingAngle : 0;
```

#### 2643. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23234` → after: `L23344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23344) · [Before (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23234)

```diff
-       return (0, jt.rigHasAction)(tt, et.uZ, Ot.m)
+       return (0, qu.rigHasAction)(uu, Eu.HV, su.n)
```

#### 2644. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23238` → after: `L23348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23348) · [Before (L23238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23238)

```diff
-       (!et.consumedNetworkArmSwing || Vt.armSwinging && !(0, jt.rigActionPlaying)(tt, et.uZ, Ot.m)) && (0, jt.playRigAction)(tt, et.uZ, Ot.m), et.consumedNetworkArmSwing = !0, et._queuedSwing = !1
+       (!Eu.consumedNetworkArmSwing || ju.armSwinging && !(0, qu.rigActionPlaying)(uu, Eu.HV, su.n)) && (0, qu.playRigAction)(uu, Eu.HV, su.n), Eu.consumedNetworkArmSwing = !0, Eu._queuedSwing = !1
```

#### 2645. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23243` → after: `L23353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23353) · [Before (L23243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23243)

```diff
-       const dt = tt.Jtt,
+       const lu = uu.euu,
```

#### 2646. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23246` → after: `L23356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23356) · [Before (L23246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23246)

```diff
-           eq: Ht
+           UU: fu
```

#### 2647. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23248` → after: `L23358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23358) · [Before (L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23248)

```diff
-       Vt.armSwinging || !et.consumedNetworkArmSwing ? (et.consumedNetworkArmSwing = !0, jt >= Ht ? (Dt = qt / Ht, et._queuedSwing = !1) : jt >= .65 * Ht && !et._queuedSwing && (et._queuedSwing = !0)) : et._queuedSwing && jt >= Ht && (Dt = Math.min(qt, jt - Ht) / Ht, et._queuedSwi … [truncated]
+       ju.armSwinging || !Eu.consumedNetworkArmSwing ? (Eu.consumedNetworkArmSwing = !0, qu >= fu ? (Zu = Uu / fu, Eu._queuedSwing = !1) : qu >= .65 * fu && !Eu._queuedSwing && (Eu._queuedSwing = !0)) : Eu._queuedSwing && qu >= fu && (Zu = Math.min(Uu, qu - fu) / fu, Eu._queuedSwi … [truncated]
```

#### 2648. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23262-L23263` → after: `L23372-L23373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23372-L23373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23372-L23373) · [Before (L23262-L23263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23262-L23263)

```diff
-       const Vt = tt.mJ.xet(et.uZ),
-         Ot = et.uZ === tt.lL ? dt.c.getPlayerFacingPitch(tt) : Vt.cameraPitch,
+       const ju = uu.YG.PEu(Eu.HV),
+         su = Eu.HV === uu.FQ ? lu.d.getPlayerFacingPitch(uu) : ju.cameraPitch,
```

#### 2649. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23271` → after: `L23381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23381) · [Before (L23271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23271)

```diff
-       } = tt.mJ.getState(et.uZ, "updateWalkingState"), qt = Et(tt, et);
+       } = uu.YG.getState(Eu.HV, "updateWalkingState"), Uu = Nu(uu, Eu);
```

#### 2650. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23282-L23284` → after: `L23392-L23394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23392-L23394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23392-L23394) · [Before (L23282-L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23282-L23284)

```diff
-     const St = (0, Dt.e)({
-       eq: 250,
-       Oq: {
+     const Pu = (0, Zu.d)({
+       UU: 250,
+       XU: {
```

#### 2651. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23289` → after: `L23399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23399) · [Before (L23289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23289)

```diff
-               mq: "catmull-rom-spline",
+               fU: "catmull-rom-spline",
```

#### 2652. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23295` → after: `L23405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23405) · [Before (L23295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23295)

```diff
-               mq: "catmull-rom-spline",
+               fU: "catmull-rom-spline",
```

#### 2653. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23301` → after: `L23411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23411) · [Before (L23301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23301)

```diff
-               mq: "catmull-rom-spline",
+               fU: "catmull-rom-spline",
```

#### 2654. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23307` → after: `L23417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23417) · [Before (L23307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23307)

```diff
-               mq: "catmull-rom-spline",
+               fU: "catmull-rom-spline",
```

#### 2655. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23313` → after: `L23423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23423) · [Before (L23313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23313)

```diff
-               mq: "catmull-rom-spline",
+               fU: "catmull-rom-spline",
```

#### 2656. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23321` → after: `L23431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23431) · [Before (L23321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23321)

```diff
-   39119: (tt, et, Vt) => {
+   39252: (uu, Eu, ju) => {
```

#### 2657. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23325` → after: `L23435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23435) · [Before (L23325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23325)

```diff
-     var Ot = Vt(2848);
+     var su = ju(2893);
```

#### 2658. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23337` → after: `L23447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23447) · [Before (L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23337)

```diff
-         qJ: function(tt, Vt) {
+         lG: function(uu, ju) {
```

#### 2659. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23346-L23347` → after: `L23456-L23457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23456-L23457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23456-L23457) · [Before (L23346-L23347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23346-L23347)

```diff
-         const Vt = tt.mJ.YM(et.uZ),
-           qt = (0, Ot.c)().hA(Vt[0], Vt[1], Vt[2]);
+         const ju = uu.YG.bM(Eu.HV),
+           Uu = (0, su.b)().Zx(ju[0], ju[1], ju[2]);
```

#### 2660. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23352` → after: `L23462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23462) · [Before (L23352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23352)

```diff
-   39030: (tt, et, Vt) => {
+   39153: (uu, Eu, ju) => {
```

#### 2661. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23357-L23364` → after: `L23467-L23474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23467-L23474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23467-L23474) · [Before (L23357-L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23357-L23364)

```diff
-     var Ot = Vt(37510),
-       qt = Vt(37002),
-       Dt = Vt(37331),
-       mt = Vt(38157),
-       dt = Vt(37699);
-     const jt = Dt.uf.Up(),
-       Ht = new Dt.uf(0, -.5, .5),
-       Xt = new Dt.uf(.16, .01, .1).scaleInPlace(1.4),
+     var su = ju(37671),
+       Uu = ju(37162),
+       Zu = ju(37488),
+       Xu = ju(38298),
+       lu = ju(37841);
+     const qu = Zu.dO.Up(),
+       fu = new Zu.dO(0, -.5, .5),
+       Cu = new Zu.dO(.16, .01, .1).scaleInPlace(1.4),
```

#### 2662. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23391-L23393` → after: `L23501-L23503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23501-L23503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23501-L23503) · [Before (L23391-L23393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23391-L23393)

```diff
-         qJ: function(et, Vt) {
-           if (Vt._targetEId = (0, qt.c)(Vt.lineToEId), !tt.mJ.RY(Vt.uZ)) return console.warn(`Skipping line from entity ${Vt.uZ}, which has no position`), void tt.mJ.ZZ(Vt.uZ, "lineToEntity");
-           Vt._thisPos = Dt.uf.Zero(), Vt._targetPos = Dt.uf.Zero(), Vt._forward = Dt.uf.Zero(), Vt._right = Dt.uf.Zero(), Vt._up = Dt.uf.Zero(), Vt._quat = Dt.Quaternion.Zero(), Vt._displacement = Dt.uf.Zero(), Vt._cameraOffset = Dt.uf.Zero(), Vt._initialCameraOffset = Dt.uf.Zero … [truncated]
+         lG: function(Eu, ju) {
+           if (ju._targetEId = (0, Uu.d)(ju.lineToEId), !uu.YG.wT(ju.HV)) return console.warn(`Skipping line from entity ${ju.HV}, which has no position`), void uu.YG.zV(ju.HV, "lineToEntity");
+           ju._thisPos = Zu.dO.Zero(), ju._targetPos = Zu.dO.Zero(), ju._forward = Zu.dO.Zero(), ju._right = Zu.dO.Zero(), ju._up = Zu.dO.Zero(), ju._quat = Zu.Quaternion.Zero(), ju._displacement = Zu.dO.Zero(), ju._cameraOffset = Zu.dO.Zero(), ju._initialCameraOffset = Zu.dO.Zero … [truncated]
```

#### 2663. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23404` → after: `L23514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/94.js#L23514) · [Before (L23404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/94.js#L23404)

```diff
-           }()), Vt._line.color = lt, Vt._line.Gw = !1, tt.Bf.ow(Vt._line)
+           }()), ju._line.color = cu, ju._line.VY = !1, uu.tO.QY(ju._line)
```
