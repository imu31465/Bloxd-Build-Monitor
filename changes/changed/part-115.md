# Changed — Bundle Modifications Report (Part 115 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `115 / 140` (**426** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 114](part-114.md) · [Part 116 →](part-116.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/errorLogging.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/errorLogging.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50)

#### 37. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L1828)

```diff
-                     const Ik = kk.entries.reduce(((kk, Fk) => kk.value > Fk.value ? kk : Fk));
+                     const gS = SS.entries.reduce(((SS, HS) => SS.value > HS.value ? SS : HS));
```

#### 38. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L1954)

```diff
-                 } else kk.id && Xk.set(kk, `#${kk.id}`)
+                 } else SS.id && tS.set(SS, `#${SS.id}`)
```

#### 39. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2043-L2044` → after: `L2043-L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2043-L2044) · [Before (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2043-L2044)

```diff
-                         Xk = Math.max(Ik, yk ? (yk.requestStart || yk.startTime) - ak : 0),
-                         Tk = Math.min(kk.value, Math.max(Xk, yk ? yk.responseEnd - ak : 0));
+                         tS = Math.max(gS, xS ? (xS.requestStart || xS.startTime) - qS : 0),
+                         bS = Math.min(SS.value, Math.max(tS, xS ? xS.responseEnd - qS : 0));
```

#### 40. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2153)

```diff
-           const Ik = null !== (Fk = FF("com.grafana.faro.lastNavigationId", Dk)) && void 0 !== Fk ? Fk : RI;
+           const gS = null !== (HS = SH("com.grafana.faro.lastNavigationId", mS)) && void 0 !== HS ? HS : yg;
```

#### 41. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2257)

```diff
-         serviceWorkerTime: fX(Qk > 0 ? ak - Qk : 0),
+         serviceWorkerTime: st(DS > 0 ? qS - DS : 0),
```

#### 42. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2292` → after: `L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2292) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2292)

```diff
-         documentParsingTime: fX(tk ? ik - tk : null),
+         documentParsingTime: st(fS ? XS - fS : null),
```

#### 43. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2296)

```diff
-         ttfb: fX(Math.max(qk - (null !== Fk && void 0 !== Fk ? Fk : 0), 0)),
+         ttfb: st(Math.max(uS - (null !== HS && void 0 !== HS ? HS : 0), 0)),
```

#### 44. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2310)

```diff
-       return null == kk ? RI : "number" === typeof kk ? Math.round(kk > 0 ? kk : 0).toString() : kk.toString()
+       return null == SS ? yg : "number" === typeof SS ? Math.round(SS > 0 ? SS : 0).toString() : SS.toString()
```

#### 45. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2378)

```diff
-                   const lk = null !== (Xk = FF("com.grafana.faro.lastNavigationId", Dk)) && void 0 !== Xk ? Xk : RI,
+                   const NS = null !== (tS = SH("com.grafana.faro.lastNavigationId", mS)) && void 0 !== tS ? tS : yg,
```

#### 46. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2438` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2438) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2438)

```diff
-       return `data-${(kk.startsWith("data-")?kk.slice(5):kk).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
+       return `data-${(SS.startsWith("data-")?SS.slice(5):SS).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
```

#### 47. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2449)

```diff
-       return !Number.isFinite(Xk) || Xk <= 0 ? (Ik(`initialActivityTimeout must be a finite number greater than zero; using ${Fk} ms`), Fk) : Xk > 1e3 ? (Ik(`initialActivityTimeout cannot exceed ${rX} ms; clamping to the maximum`), rX) : Xk
+       return !Number.isFinite(tS) || tS <= 0 ? (gS(`initialActivityTimeout must be a finite number greater than zero; using ${HS} ms`), HS) : tS > 1e3 ? (gS(`initialActivityTimeout cannot exceed ${mt} ms; clamping to the maximum`), mt) : tS
```

#### 48. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2503)

```diff
-           const Tk = null !== (kk = rk(arguments[0])) && void 0 !== kk ? kk : "",
+           const bS = null !== (SS = lS(arguments[0])) && void 0 !== SS ? SS : "",
```

#### 49. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2505` → after: `L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2505) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2505)

```diff
-             yk = (null !== (Xk = arguments[1]) && void 0 !== Xk ? Xk : {}).method,
+             xS = (null !== (tS = arguments[1]) && void 0 !== tS ? tS : {}).method,
```

#### 50. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2636` → after: `L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2636) · [Before (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2636)

```diff
-           const ik = null !== (Fk = null === (Ik = Tk.userActionsInstrumentation) || void 0 === Ik ? void 0 : Ik.dataAttributeName) && void 0 !== Fk ? Fk : mX,
+           const XS = null !== (HS = null === (gS = bS.userActionsInstrumentation) || void 0 === gS ? void 0 : gS.dataAttributeName) && void 0 !== HS ? HS : ot,
```

#### 51. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2660` → after: `L2660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2660) · [Before (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2660)

```diff
-               return Fk.endsWith("-name") ? `${Fk.slice(0,-5)}-timeout` : `${Fk}-timeout`
+               return HS.endsWith("-name") ? `${HS.slice(0,-5)}-timeout` : `${HS}-timeout`
```

#### 52. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2709` → after: `L2709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2709) · [Before (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2709)

```diff
-           super(), this.name = Fk, this.attributes = ik, this.id = xF(), this.trigger = Xk, this.parentId = null !== Ik && void 0 !== Ik ? Ik : this.id, this.trackUserActionsExcludeItem = yk, this.importance = lk, this._pushEvent = ak, this._itemBuffer = new KT, this._transports  … [truncated]
+           super(), this.name = HS, this.attributes = XS, this.id = CH(), this.trigger = tS, this.parentId = null !== gS && void 0 !== gS ? gS : this.id, this.trackUserActionsExcludeItem = xS, this.importance = NS, this._pushEvent = qS, this._itemBuffer = new Qb, this._transports  … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2823-L2826` → after: `L2823-L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2823-L2826) · [Before (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2823-L2826)

```diff
-           inactivityMs: null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.inactivityMs) && void 0 !== Ik ? Ik : 100,
-           drainTimeoutMs: null !== (Xk = null === Fk || void 0 === Fk ? void 0 : Fk.drainTimeoutMs) && void 0 !== Xk ? Xk : 1e4,
-           isOperationStart: null !== (Tk = null === Fk || void 0 === Fk ? void 0 : Fk.isOperationStart) && void 0 !== Tk ? Tk : () => {},
-           isOperationEnd: null !== (ik = null === Fk || void 0 === Fk ? void 0 : Fk.isOperationEnd) && void 0 !== ik ? ik : () => {}
+           inactivityMs: null !== (gS = null === HS || void 0 === HS ? void 0 : HS.inactivityMs) && void 0 !== gS ? gS : 100,
+           drainTimeoutMs: null !== (tS = null === HS || void 0 === HS ? void 0 : HS.drainTimeoutMs) && void 0 !== tS ? tS : 1e4,
+           isOperationStart: null !== (bS = null === HS || void 0 === HS ? void 0 : HS.isOperationStart) && void 0 !== bS ? bS : () => {},
+           isOperationEnd: null !== (XS = null === HS || void 0 === HS ? void 0 : HS.isOperationEnd) && void 0 !== XS ? XS : () => {}
```

#### 54. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2891` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2891) · [Before (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2891)

```diff
-               const Ik = null !== Fk && void 0 !== Fk ? Fk : location.href;
+               const gS = null !== HS && void 0 !== HS ? HS : location.href;
```

#### 55. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2972` → after: `L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2972) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2972)

```diff
-     var BT = Ik(6669);
+     var Bb = gS(6892);
```

#### 56. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2996-L3000` → after: `L2996-L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L2996-L3000) · [Before (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L2996-L3000)

```diff
-             name: null !== Xk && void 0 !== Xk ? Xk : RI,
-             version: null !== Tk && void 0 !== Tk ? Tk : RI,
-             os: `${null!==ik&&void 0!==ik?ik:RI} ${null!==yk&&void 0!==yk?yk:RI}`,
-             userAgent: null !== Ik && void 0 !== Ik ? Ik : RI,
-             language: null !== lk && void 0 !== lk ? lk : RI,
+             name: null !== tS && void 0 !== tS ? tS : yg,
+             version: null !== bS && void 0 !== bS ? bS : yg,
+             os: `${null!==XS&&void 0!==XS?XS:yg} ${null!==xS&&void 0!==xS?xS:yg}`,
+             userAgent: null !== gS && void 0 !== gS ? gS : yg,
+             language: null !== NS && void 0 !== NS ? NS : yg,
```

#### 57. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3002` → after: `L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3002) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3002)

```diff
-             brands: null !== qk && void 0 !== qk ? qk : RI,
+             brands: null !== uS && void 0 !== uS ? uS : yg,
```

#### 58. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3023` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3023) · [Before (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3023)

```diff
-         id: null !== (Fk = null === (Ik = wk.config) || void 0 === Ik || null === (Ik = Ik.sessionTracking) || void 0 === Ik || null === (Xk = Ik.generateSessionId) || void 0 === Xk ? void 0 : Xk.call(Ik)) && void 0 !== Fk ? Fk : xF(),
+         id: null !== (HS = null === (gS = jS.config) || void 0 === gS || null === (gS = gS.sessionTracking) || void 0 === gS || null === (tS = gS.generateSessionId) || void 0 === tS ? void 0 : tS.call(gS)) && void 0 !== HS ? HS : CH(),
```

#### 59. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3100` → after: `L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3100) · [Before (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3100)

```diff
-         return this.unpatchedConsole[null !== (Fk = this.options.level) && void 0 !== Fk ? Fk : KI.DEBUG]("New event", Ii([kk]))
+         return this.unpatchedConsole[null !== (HS = this.options.level) && void 0 !== HS ? HS : Pg.DEBUG]("New event", gX([SS]))
```

#### 60. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3169)

```diff
-                 const tk = Math.min(null !== (yk = Lk.retryAfterMs) && void 0 !== yk ? yk : kk.options.retry.initialBackoffMs * Math.pow(kk.options.retry.backoffMultiplier, ik - 1), kk.options.retry.maxBackoffMs);
+                 const fS = Math.min(null !== (xS = IS.retryAfterMs) && void 0 !== xS ? xS : SS.options.retry.initialBackoffMs * Math.pow(SS.options.retry.backoffMultiplier, XS - 1), SS.options.retry.maxBackoffMs);
```

#### 61. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3319-L3321` → after: `L3319-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3319-L3321) · [Before (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3319-L3321)

```diff
-         super(), this.options = kk, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = XI, this.pendingCustomSends = 0, this.getNow = null !== (Fk = kk.getNow) && void 0 !== Fk ? Fk : Date.now, this.requestTimeoutMs = null !== (Ik = kk.requestTimeoutMs) && void 0 … [truncated]
-           bufferSize: null !== (Tk = kk.bufferSize) && void 0 !== Tk ? Tk : 30,
-           concurrency: null !== (ik = kk.concurrency) && void 0 !== ik ? ik : 5,
+         super(), this.options = SS, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = gg, this.pendingCustomSends = 0, this.getNow = null !== (HS = SS.getNow) && void 0 !== HS ? HS : Date.now, this.requestTimeoutMs = null !== (gS = SS.requestTimeoutMs) && void 0 … [truncated]
+           bufferSize: null !== (bS = SS.bufferSize) && void 0 !== bS ? bS : 30,
+           concurrency: null !== (XS = SS.concurrency) && void 0 !== XS ? XS : 5,
```

#### 62. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3323-L3326` → after: `L3323-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326) · [Before (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326)

```diff
-             maxAttempts: null !== (yk = null === (lk = kk.retry) || void 0 === lk ? void 0 : lk.maxAttempts) && void 0 !== yk ? yk : 3,
-             initialBackoffMs: null !== (ak = null !== (qk = null === (Lk = kk.retry) || void 0 === Lk ? void 0 : Lk.initialBackoffMs) && void 0 !== qk ? qk : kk.defaultRateLimitBackoffMs) && void 0 !== ak ? ak : 1e3,
-             maxBackoffMs: null !== (tk = null === (Zk = kk.retry) || void 0 === Zk ? void 0 : Zk.maxBackoffMs) && void 0 !== tk ? tk : 3e4,
-             backoffMultiplier: null !== (jk = null === (ek = kk.retry) || void 0 === ek ? void 0 : ek.backoffMultiplier) && void 0 !== jk ? jk : 2
+             maxAttempts: null !== (xS = null === (NS = SS.retry) || void 0 === NS ? void 0 : NS.maxAttempts) && void 0 !== xS ? xS : 3,
+             initialBackoffMs: null !== (qS = null !== (uS = null === (IS = SS.retry) || void 0 === IS ? void 0 : IS.initialBackoffMs) && void 0 !== uS ? uS : SS.defaultRateLimitBackoffMs) && void 0 !== qS ? qS : 1e3,
+             maxBackoffMs: null !== (fS = null === (kS = SS.retry) || void 0 === kS ? void 0 : kS.maxBackoffMs) && void 0 !== fS ? fS : 3e4,
+             backoffMultiplier: null !== (aS = null === (KS = SS.retry) || void 0 === KS ? void 0 : KS.backoffMultiplier) && void 0 !== aS ? aS : 2
```

#### 63. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3329` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3329) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3329)

```diff
-           getRandom: null !== (wk = kk.getRandom) && void 0 !== wk ? wk : Math.random,
+           getRandom: null !== (jS = SS.getRandom) && void 0 !== jS ? jS : Math.random,
```

#### 64. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3331` → after: `L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3331) · [Before (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3331)

```diff
-             this.logDebug(`Retrying failed request after ${kk}ms. Attempt ${Fk}.`)
+             this.logDebug(`Retrying failed request after ${SS}ms. Attempt ${HS}.`)
```

#### 65. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335)

```diff
-           size: null !== (Hk = kk.bufferSize) && void 0 !== Hk ? Hk : 30,
-           concurrency: null !== (Jk = kk.concurrency) && void 0 !== Jk ? Jk : 5
+           size: null !== (GS = SS.bufferSize) && void 0 !== GS ? GS : 30,
+           concurrency: null !== (CS = SS.concurrency) && void 0 !== CS ? CS : 5
```

#### 66. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3410` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3410) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3410)

```diff
-         return [this.options.url].concat(null !== (kk = this.config.ignoreUrls) && void 0 !== kk ? kk : [])
+         return [this.options.url].concat(null !== (SS = this.config.ignoreUrls) && void 0 !== SS ? SS : [])
```

#### 67. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3422` → after: `L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3422) · [Before (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3422)

```diff
-             lk = null !== (Xk = Fk.options.requestOptions) && void 0 !== Xk ? Xk : {},
+             NS = null !== (tS = HS.options.requestOptions) && void 0 !== tS ? tS : {},
```

#### 68. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3566` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3566) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3566)

```diff
-           return Number.isFinite(kk) ? kk : Number.POSITIVE_INFINITY
+           return Number.isFinite(SS) ? SS : Number.POSITIVE_INFINITY
```

#### 69. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3623` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3623) · [Before (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3623)

```diff
-               day: Number(null !== qk && void 0 !== qk ? qk : Lk),
+               day: Number(null !== uS && void 0 !== uS ? uS : IS),
```

#### 70. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3722` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3722) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3722)

```diff
-         kk.error(`${Ik.prefix}\n`, ...Xk)
+         SS.error(`${gS.prefix}\n`, ...tS)
```

#### 71. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3725` → after: `L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3725) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3725)

```diff
-         kk.warn(`${Ik.prefix}\n`, ...Xk)
+         SS.warn(`${gS.prefix}\n`, ...tS)
```

#### 72. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3728` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3728) · [Before (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3728)

```diff
-         kk.info(`${Ik.prefix}\n`, ...Xk)
+         SS.info(`${gS.prefix}\n`, ...tS)
```

#### 73. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3731` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3731) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3731)

```diff
-         kk.debug(`${Ik.prefix}\n`, ...Xk)
+         SS.debug(`${gS.prefix}\n`, ...tS)
```

#### 74. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3766` → after: `L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3766) · [Before (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3766)

```diff
-         dataAttributeName: DX(null !== (Ik = null === (Tk = kk.userActionsInstrumentation) || void 0 === Tk ? void 0 : Tk.dataAttributeName) && void 0 !== Ik ? Ik : mX),
+         dataAttributeName: et(null !== (gS = null === (bS = SS.userActionsInstrumentation) || void 0 === bS ? void 0 : bS.dataAttributeName) && void 0 !== gS ? gS : ot),
```

#### 75. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3785` → after: `L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3785) · [Before (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3785)

```diff
-         ignoreUrls: [...null !== (lk = kk.ignoreUrls) && void 0 !== lk ? lk : [], ...sk ? [sk] : [], /\/collect(?:\/[\w]*)?$/],
+         ignoreUrls: [...null !== (NS = SS.ignoreUrls) && void 0 !== NS ? NS : [], ...wS ? [wS] : [], /\/collect(?:\/[\w]*)?$/],
```

#### 76. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3811` → after: `L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3811) · [Before (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3811)

```diff
-       } = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.pageTracking) && void 0 !== Fk ? Fk : {}, yk = [gT, mT, Si({
+       } = null !== (HS = null === SS || void 0 === SS ? void 0 : SS.pageTracking) && void 0 !== HS ? HS : {}, xS = [Tb, ob, JX({
```

#### 77. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3814` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3814) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3814)

```diff
-       }), ...null !== (Ik = kk.metas) && void 0 !== Ik ? Ik : [], rT];
+       }), ...null !== (gS = SS.metas) && void 0 !== gS ? gS : [], mb];
```

#### 78. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3826)

```diff
-         session: tF(tF({}, null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.session) && void 0 !== Xk ? Xk : {}), {}, {
+         session: IH(IH({}, null !== (tS = null === gS || void 0 === gS ? void 0 : gS.session) && void 0 !== tS ? tS : {}), {}, {
```

#### 79. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3844` → after: `L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3844) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3844)

```diff
-       const Fk = `__faroBundleId_${kk}`,
+       const HS = `__faroBundleId_${SS}`,
```

#### 80. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3848` → after: `L3848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3848) · [Before (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3848)

```diff
-       return "string" === typeof Xk && "" !== Xk ? Xk : void 0
+       return "string" === typeof tS && "" !== tS ? tS : void 0
```

#### 81. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3855)

```diff
-           return null === Lk || void 0 === Lk ? void 0 : Lk[`__faroGitHash_${kk}`]
+           return null === IS || void 0 === IS ? void 0 : IS[`__faroGitHash_${SS}`]
```

#### 82. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3869` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3869) · [Before (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3869)

```diff
-       yk && kk.api.setSession(yk), kk.config.app && (ik.app = MF(MF({}, kk.config.app), ik.app)), kk.config.user && (ik.user = kk.config.user), kk.config.view && (ik.view = kk.config.view), kk.metas.add(ik, ...null !== (Ik = kk.config.metas) && void 0 !== Ik ? Ik : [])
+       xS && SS.api.setSession(xS), SS.config.app && (XS.app = eH(eH({}, SS.config.app), XS.app)), SS.config.user && (XS.user = SS.config.user), SS.config.view && (XS.view = SS.config.view), SS.metas.add(XS, ...null !== (gS = SS.config.metas) && void 0 !== gS ? gS : [])
```

#### 83. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3874` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3874) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3874)

```diff
-         this.signalBuffer = [], this.itemLimit = null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.itemLimit) && void 0 !== Ik ? Ik : 50, this.sendTimeout = null !== (Xk = null === Fk || void 0 === Fk ? void 0 : Fk.sendTimeout) && void 0 !== Xk ? Xk : 250, this.paused = ( … [truncated]
+         this.signalBuffer = [], this.itemLimit = null !== (gS = null === HS || void 0 === HS ? void 0 : HS.itemLimit) && void 0 !== gS ? gS : 50, this.sendTimeout = null !== (tS = null === HS || void 0 === HS ? void 0 : HS.sendTimeout) && void 0 !== tS ? tS : 250, this.paused = ( … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3928` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3928) · [Before (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3928)

```diff
-           for (const Xk of ik) Fk.debug(`Transporting item using ${Xk.name}\n`, Ik), Xk.isBatched() && Xk.send(Ik)
+           for (const tS of XS) HS.debug(`Transporting item using ${tS.name}\n`, gS), tS.isBatched() && tS.send(gS)
```

#### 85. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3939)

```diff
-             Fk.debug(`Adding "${Tk.name}" transport`), ik.some((kk => kk === Tk)) ? Fk.warn(`Transport ${Tk.name} is already added`) : (Tk.unpatchedConsole = kk, Tk.internalLogger = Fk, Tk.config = Ik, Tk.metas = Xk, ik.push(Tk))
+             HS.debug(`Adding "${bS.name}" transport`), XS.some((SS => SS === bS)) ? HS.warn(`Transport ${bS.name} is already added`) : (bS.unpatchedConsole = SS, bS.internalLogger = HS, bS.config = gS, bS.metas = tS, XS.push(bS))
```

#### 86. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3971` → after: `L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3971) · [Before (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3971)

```diff
-                   Fk.debug(`Transporting item using ${lk.name}\n`, Tk), lk.isBatched() ? (null === (yk = Ik.batching) || void 0 === yk ? void 0 : yk.enabled) || lk.send([Tk]) : lk.send(Tk)
+                   HS.debug(`Transporting item using ${NS.name}\n`, bS), NS.isBatched() ? (null === (xS = gS.batching) || void 0 === xS ? void 0 : xS.enabled) || NS.send([bS]) : NS.send(bS)
```

#### 87. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3984-L3985` → after: `L3984-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985) · [Before (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985)

```diff
-             Fk.debug(`Removing "${kk.name}" transport`);
-             const Ik = ik.indexOf(kk); - 1 !== Ik ? ik.splice(Ik, 1) : Fk.warn(`Transport "${kk.name}" is not added`)
+             HS.debug(`Removing "${SS.name}" transport`);
+             const gS = XS.indexOf(SS); - 1 !== gS ? XS.splice(gS, 1) : HS.warn(`Transport "${SS.name}" is not added`)
```

#### 88. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4010` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4010) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4010)

```diff
-       return di = null !== (Fk = kk.unpatchedConsole) && void 0 !== Fk ? Fk : di, di
+       return BX = null !== (HS = SS.unpatchedConsole) && void 0 !== HS ? HS : BX, BX
```

#### 89. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4030)

```diff
-       Ai = null !== (lk = Ik.parseStacktrace) && void 0 !== lk ? lk : Ai;
+       FX = null !== (NS = gS.parseStacktrace) && void 0 !== NS ? NS : FX;
```

#### 90. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4032)

```diff
-           Fk.debug("Changing stacktrace parser"), Ai = null !== kk && void 0 !== kk ? kk : Ai
+           HS.debug("Changing stacktrace parser"), FX = null !== SS && void 0 !== SS ? SS : FX
```

#### 91. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4061` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4061) · [Before (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4061)

```diff
-             }(Lk, null !== Hk && void 0 !== Hk ? Hk : kk)) try {
+             }(IS, null !== GS && void 0 !== GS ? GS : SS)) try {
```

#### 92. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4070)

```diff
-               }(null !== Hk && void 0 !== Hk ? Hk : kk)), null !== jk && void 0 !== jk ? jk : {})),
+               }(null !== GS && void 0 !== GS ? GS : SS)), null !== aS && void 0 !== aS ? aS : {})),
```

#### 93. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4088)

```diff
-             qk = null !== (Pk = qk) && void 0 !== Pk ? Pk : kk.stack ? null === Ai || void 0 === Ai ? void 0 : Ai(kk).frames : void 0, (null === qk || void 0 === qk ? void 0 : qk.length) && (sk.stacktrace = {
+             uS = null !== (PS = uS) && void 0 !== PS ? PS : SS.stack ? null === FX || void 0 === FX ? void 0 : FX(SS).frames : void 0, (null === uS || void 0 === uS ? void 0 : uS.length) && (wS.stacktrace = {
```

#### 94. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4232` → after: `L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4232) · [Before (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4232)

```diff
-                     domain: null !== qk && void 0 !== qk ? qk : Ik.eventDomain,
+                     domain: null !== uS && void 0 !== uS ? uS : gS.eventDomain,
```

#### 95. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4314` → after: `L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4314) · [Before (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4314)

```diff
-             const Ik = sk(kk) ? MF(MF({}, null !== (Fk = null === Tk || void 0 === Tk ? void 0 : Tk.page) && void 0 !== Fk ? Fk : tk()), {}, {
+             const gS = wS(SS) ? eH(eH({}, null !== (HS = null === bS || void 0 === bS ? void 0 : bS.page) && void 0 !== HS ? HS : fS()), {}, {
```

#### 96. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4335` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4335) · [Before (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4335)

```diff
-         const qk = null !== (lk = Ik.logArgsSerializer) && void 0 !== lk ? lk : GI;
+         const uS = null !== (NS = gS.logArgsSerializer) && void 0 !== NS ? NS : Eg;
```

#### 97. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4350` → after: `L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4350) · [Before (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4350)

```diff
-                   level: null !== Lk && void 0 !== Lk ? Lk : "log",
+                   level: null !== IS && void 0 !== IS ? IS : "log",
```

#### 98. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4469` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4469) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4469)

```diff
-                 Tk = null !== (Fk = Ik) && void 0 !== Fk ? Fk : ik;
+                 bS = null !== (HS = gS) && void 0 !== HS ? HS : XS;
```

#### 99. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4503` → after: `L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4503) · [Before (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4503)

```diff
-                 Fk.debug(`Adding "${lk.name}" instrumentation`), yk.some((kk => kk.name === lk.name)) ? Fk.warn(`Instrumentation ${lk.name} is already added`) : (lk.unpatchedConsole = kk, lk.internalLogger = Fk, lk.config = Ik, lk.metas = Xk, lk.transports = Tk, lk.api = ik, yk.p … [truncated]
+                 HS.debug(`Adding "${NS.name}" instrumentation`), xS.some((SS => SS.name === NS.name)) ? HS.warn(`Instrumentation ${NS.name} is already added`) : (NS.unpatchedConsole = SS, NS.internalLogger = HS, NS.config = gS, NS.metas = tS, NS.transports = bS, NS.api = XS, xS.p … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4514-L4516` → after: `L4514-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516) · [Before (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516)

```diff
-                 Fk.debug(`Removing "${kk.name}" instrumentation`);
-                 const Tk = yk.reduce(((Fk, Ik, Xk) => null === Fk && Ik.name === kk.name ? Xk : null), null);
-                 null !== Tk ? (null === (Ik = (Xk = yk[Tk]).destroy) || void 0 === Ik || Ik.call(Xk), yk.splice(Tk, 1)) : Fk.warn(`Instrumentation "${kk.name}" is not added`)
+                 HS.debug(`Removing "${SS.name}" instrumentation`);
+                 const bS = xS.reduce(((HS, gS, tS) => null === HS && gS.name === SS.name ? tS : null), null);
+                 null !== bS ? (null === (gS = (tS = xS[bS]).destroy) || void 0 === gS || gS.call(tS), xS.splice(bS, 1)) : HS.warn(`Instrumentation "${SS.name}" is not added`)
```

#### 101. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4536` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4536) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4536)

```diff
-   6669: function(kk, Fk, Ik) {
+   6892: function(SS, HS, gS) {
```

#### 102. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4593` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4593) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4593)

```diff
-           if (typeof kk === qk) return kk = kk.replace(/^\s\s*/, ""), typeof Fk === lk ? kk : kk.substring(0, 500)
+           if (typeof SS === uS) return SS = SS.replace(/^\s\s*/, ""), typeof HS === NS ? SS : SS.substring(0, 500)
```

#### 103. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4601` → after: `L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4601) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4601)

```diff
-                 for (Tk = 0; Tk < jk.length; Tk++) Lk = qk[++Xk], typeof(lk = jk[Tk]) === ak && lk.length > 0 ? 2 === lk.length ? typeof lk[1] == yk ? this[lk[0]] = lk[1].call(this, Lk) : this[lk[0]] = lk[1] : 3 === lk.length ? typeof lk[1] !== yk || lk[1].exec && lk[1].test ? th … [truncated]
+                 for (bS = 0; bS < aS.length; bS++) IS = uS[++tS], typeof(NS = aS[bS]) === qS && NS.length > 0 ? 2 === NS.length ? typeof NS[1] == xS ? this[NS[0]] = NS[1].call(this, IS) : this[NS[0]] = NS[1] : 3 === NS.length ? typeof NS[1] !== xS || NS[1].exec && NS[1].test ? th … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4609-L4610` → after: `L4609-L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610) · [Before (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610)

```diff
-                 if (Mk(Fk[Ik][Xk], kk)) return "?" === Ik ? ik : Ik
-             } else if (Mk(Fk[Ik], kk)) return "?" === Ik ? ik : Ik;
+                 if (eS(HS[gS][tS], SS)) return "?" === gS ? XS : gS
+             } else if (eS(HS[gS], SS)) return "?" === gS ? XS : gS;
```

#### 105. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5339` → after: `L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L5339) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L5339)

```diff
-           }, this.Oe = function() {
+           }, this.AK = function() {
```

#### 106. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5349` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/errorLogging.js#L5349) · [Before (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/errorLogging.js#L5349)

```diff
-               engine: this.Oe(),
+               engine: this.AK(),
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/fa-renderer.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/fa-renderer.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741)

#### 1. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L1)

```diff
- /*! For license information please see 31kiid.fa-renderer.ad728dea.chunk.js.LICENSE.txt */
+ /*! For license information please see fqwnlq.fa-renderer.4f51f3ec.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L5)

```diff
-   6661: (kk, Fk, Ik) => {
+   6873: (SS, HS, gS) => {
```

#### 3. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10)

```diff
-     var Xk = Ik(6656),
-       Tk = Ik(4946),
+     var tS = gS(6866),
+       bS = gS(5116),
```

#### 4. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L12)

```diff
-       yk = Ik(58);
+       xS = gS(64);
```

#### 5. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L32)

```diff
-         return "symbol" == typeof Fk ? Fk : Fk + ""
+         return "symbol" == typeof HS ? HS : HS + ""
```

#### 6. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L122)

```diff
-       var Hk = Ik(6665);
+       var GS = gS(6879);
```

#### 7. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L193)

```diff
-         return vk[kk] ? kk : null
+         return OS[SS] ? SS : null
```

#### 8. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L200)

```diff
-       return Fk = kk, (Fk -= 0) === Fk ? kk : (kk = kk.replace(/[\-_\s]+(.)?/g, (function(kk, Fk) {
+       return HS = SS, (HS -= 0) === HS ? SS : (SS = SS.replace(/[\-_\s]+(.)?/g, (function(SS, HS) {
```

#### 9. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L212)

```diff
-       return kk && "object" === jk(kk) && kk.prefix && kk.iconName && kk.icon ? kk : Xk.parse.icon ? Xk.parse.icon(kk) : null === kk ? null : kk && "object" === jk(kk) && kk.prefix && kk.iconName ? kk : Array.isArray(kk) && 2 === kk.length ? {
+       return SS && "object" === aS(SS) && SS.prefix && SS.iconName && SS.icon ? SS : tS.parse.icon ? tS.parse.icon(SS) : null === SS ? null : SS && "object" === aS(SS) && SS.prefix && SS.iconName ? SS : Array.isArray(SS) && 2 === SS.length ? {
```

#### 10. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L337)

```diff
-                 return Tk.startsWith("webkit") ? kk[(Ik = Tk, Ik.charAt(0).toUpperCase() + Ik.slice(1))] = ik : kk[Tk] = ik, kk
+                 return bS.startsWith("webkit") ? SS[(gS = bS, gS.charAt(0).toUpperCase() + gS.slice(1))] = XS : SS[bS] = XS, SS
```

#### 11. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L341)

```diff
-               0 === Fk.indexOf("aria-") || 0 === Fk.indexOf("data-") ? kk.attrs[Fk.toLowerCase()] = Xk : kk.attrs[xk(Fk)] = Xk
+               0 === HS.indexOf("aria-") || 0 === HS.indexOf("data-") ? SS.attrs[HS.toLowerCase()] = tS : SS.attrs[nS(HS)] = tS
```

#### 12. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370)

```diff
-   4953: (kk, Fk, Ik) => {
-     var Xk = Ik(4960);
+   5118: (SS, HS, gS) => {
+     var tS = gS(5120);
```

#### 13. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L413-L414` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414)

```diff
-   4946: (kk, Fk, Ik) => {
-     kk.exports = Ik(4953)()
+   5116: (SS, HS, gS) => {
+     SS.exports = gS(5118)()
```

#### 14. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L416)

```diff
-   4960: kk => {
+   5120: SS => {
```

#### 15. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L419)

```diff
-   6656: (kk, Fk, Ik) => {
+   6866: (SS, HS, gS) => {
```

#### 16. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L565)

```diff
-       return "symbol" == typeof Fk ? Fk : Fk + ""
+       return "symbol" == typeof HS ? HS : HS + ""
```

#### 17. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586)

```diff
-         Ik = void 0 === Fk ? pk : Fk,
+         gS = void 0 === HS ? LS : HS,
```

#### 18. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590)

```diff
-         ik = kk in iI.styles ? kk : null;
+         XS = SS in bg.styles ? SS : null;
```

#### 19. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631)

```diff
-             Xk ? Ik = Xk : kk && Fk.push(kk)
+             tS ? gS = tS : SS && HS.push(SS)
```

#### 20. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834)

```diff
-           Fk = void 0 === kk ? zk : kk;
+           HS = void 0 === SS ? ZS : SS;
```

#### 21. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871)

```diff
-         jk = Xk.found ? Xk : Ik,
+         aS = tS.found ? tS : gS,
```

#### 22. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056)

```diff
-       lX = BF.measurePerformance && vk && vk.mark && vk.measure ? vk : {
+       xt = sH.measurePerformance && OS && OS.mark && OS.measure ? OS : {
```

#### 23. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086)

```diff
-         Ik = void 0 === Fk ? "svg" === kk.tag ? jX : eX : Fk;
+         gS = void 0 === HS ? "svg" === SS.tag ? kt : Kt : HS;
```

#### 24. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137)

```diff
-       var Ik = "function" === typeof Fk ? Fk : tX;
+       var gS = "function" === typeof HS ? HS : It;
```

#### 25. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162)

```diff
-           Ik = void 0 === Fk ? tX : Fk,
+           gS = void 0 === HS ? It : HS,
```

#### 26. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164)

```diff
-           Tk = void 0 === Xk ? tX : Xk,
+           bS = void 0 === tS ? It : tS,
```

#### 27. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166)

```diff
-           yk = void 0 === ik ? tX : ik,
+           xS = void 0 === XS ? It : XS,
```

#### 28. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2168` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168)

```diff
-           ak = void 0 === lk ? zk : lk;
+           qS = void 0 === NS ? ZS : NS;
```

#### 29. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307)

```diff
-           Xk = void 0 === Ik ? AF : Ik,
+           tS = void 0 === gS ? FH : gS,
```

#### 30. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359)

```diff
-                 Xk = (Fk || {}).icon ? Fk : gI(Fk || {}),
+                 tS = (HS || {}).icon ? HS : Rg(HS || {}),
```

#### 31. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361)

```diff
-               return Tk && (Tk = (Tk || {}).icon ? Tk : gI(Tk || {})), kk(Xk, ak(ak({}, Ik), {}, {
+               return bS && (bS = (bS || {}).icon ? bS : Rg(bS || {})), SS(tS, qS(qS({}, gS), {}, {
```

#### 32. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378)

```diff
-               Ik = void 0 === Fk ? zk : Fk,
+               gS = void 0 === HS ? ZS : HS,
```

#### 33. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518)

```diff
-                 Xk = void 0 === Ik ? AF : Ik,
+                 tS = void 0 === gS ? FH : gS,
```

#### 34. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2821` → after: `L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821) · [Before (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821)

```diff
-           return kk.includes("(") ? kk : kk.split(",").map((function(kk) {
+           return SS.includes("(") ? SS : SS.split(",").map((function(SS) {
```

#### 35. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914)

```diff
-               Ik = void 0 === Fk ? zk : Fk;
+               gS = void 0 === HS ? ZS : HS;
```

#### 36. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280)

```diff
-   6665: kk => {
+   6879: SS => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/frameDebug.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/frameDebug.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084)

#### 1. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L4)

```diff
-   34020: (kk, Fk, Ik) => {
+   34082: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L13-L14)

```diff
-       b: () => Tk,
-       d: () => Xk
+       d: () => bS,
+       h: () => tS
```

#### 3. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L17)

```diff
-   34018: (kk, Fk, Ik) => {
+   34078: (SS, HS, gS) => {
```

#### 4. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L28-L33` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33)

```diff
-     var Xk = Ik(4799),
-       Tk = Ik(4794),
-       ik = Ik(34020),
-       yk = Ik(2744),
-       lk = Ik(1084),
-       ak = Ik(2877);
+     var tS = gS(4935),
+       bS = gS(4917),
+       XS = gS(34082),
+       xS = gS(2953),
+       NS = gS(1172),
+       qS = gS(3113);
```

#### 5. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L38)

```diff
-           this.add(Fk.startTime, Fk.duration, Fk.blockingDuration, (0, lk.m)(Fk))
+           this.add(HS.startTime, HS.duration, HS.blockingDuration, (0, NS.n)(HS))
```

#### 6. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L41)

```diff
-         }, null !== (0, ak.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, ak.d)("longtask", this.onLongTask) ? "longtask" : null
+         }, null !== (0, qS.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, qS.e)("longtask", this.onLongTask) ? "longtask" : null
```

#### 7. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L57-L61` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61) · [Before (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61)

```diff
-         const yk = "loaf" === this.kind && Ik > 0 ? ` (blocking ${Tk.toFixed(0)}, script ${ik.toFixed(0)})` : "";
-         return `${Ik} ${this.kind} ${Xk.toFixed(0)} ms${yk}`
-       }
-     }
-     var Lk = Ik(34023);
+         const xS = "loaf" === this.kind && gS > 0 ? ` (blocking ${bS.toFixed(0)}, script ${XS.toFixed(0)})` : "";
+         return `${gS} ${this.kind} ${tS.toFixed(0)} ms${xS}`
+       }
+     }
+     var IS = gS(34090);
```

#### 8. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L64)

```diff
-       return Fk < 0 || kk < Fk ? kk : kk - Fk
+       return HS < 0 || SS < HS ? SS : SS - HS
```

#### 9. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L86)

```diff
-         }, this.lastMs = 0, this.hidden = new Lk.d, this.hiddenBefore = {
+         }, this.lastMs = 0, this.hidden = new IS.e, this.hiddenBefore = {
```

#### 10. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L111-L114` → after: `L111-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114) · [Before (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114)

```diff
-             const Ik = [`chunks +${tk(kk.chunksReceived,Fk.chunksReceived)} got`, `+${tk(kk.chunksCancelled,Fk.chunksCancelled)} cancelled`];
-             kk.chunksStored >= 0 && Ik.push(`${kk.chunksStored} stored`);
-             const Xk = `jobs +${tk(kk.jobsSent,Fk.jobsSent)} sent, +${tk(kk.jobsDone,Fk.jobsDone)} done, ${kk.jobsInFlight} in flight`;
-             return `${Ik.join(", ")}; ${Xk}; workers ${kk.workersLive} live, ${kk.workersRetired} retired`
+             const gS = [`chunks +${fS(SS.chunksReceived,HS.chunksReceived)} got`, `+${fS(SS.chunksCancelled,HS.chunksCancelled)} cancelled`];
+             SS.chunksStored >= 0 && gS.push(`${SS.chunksStored} stored`);
+             const tS = `jobs +${fS(SS.jobsSent,HS.jobsSent)} sent, +${fS(SS.jobsDone,HS.jobsDone)} done, ${SS.jobsInFlight} in flight`;
+             return `${gS.join(", ")}; ${tS}; workers ${SS.workersLive} live, ${SS.workersRetired} retired`
```

#### 11. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L123)

```diff
-         if ((yk > 0 || lk > 0) && (Ik.push((0, Lk.e)({
+         if ((xS > 0 || NS > 0) && (gS.push((0, IS.f)({
```

#### 12. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L127)

```diff
-         const ak = `load ${Math.round((kk-this.lastMs)/1e3)}s: ${Ik.join("; ")}`;
+         const qS = `load ${Math.round((SS-this.lastMs)/1e3)}s: ${gS.join("; ")}`;
```

#### 13. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L144)

```diff
-         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${kk} other, longest ${this.longest} in ${(0,ik.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
+         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${SS} other, longest ${this.longest} in ${(0,XS.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
```

#### 14. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L182)

```diff
-           this.ahead = kk.headerWord(Xk.F.Pacing) & Xk.cb.AheadMask, this.frame(Fk, Ik, Tk, ik, kk.headerWord(Xk.F.RenderUs) / 1e3, kk.headerWord(Xk.F.TicksRun), yk, kk.headerWord(Xk.F.RenderPending))
+           this.ahead = SS.headerWord(tS.H.Pacing) & tS.Z.AheadMask, this.frame(HS, gS, bS, XS, SS.headerWord(tS.H.RenderUs) / 1e3, SS.headerWord(tS.H.TicksRun), xS, SS.headerWord(tS.H.RenderPending))
```

#### 15. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200)

```diff
-             const Xk = [`long frame ${(0,ik.b)(Ik.intervalMs)} ms ending at ${(0,ik.b)(Ik.endMs)} ms: main ${(0,ik.b)(Ik.mainMs)} (render ${(0,ik.b)(Ik.renderMs)}, ${Ik.ticks} ticks ${(0,ik.b)(Ik.tickMs)}), outside ${(0,ik.b)(Ik.intervalMs-Ik.mainMs)}`, `${Ik.rafs} rafs`];
-             Ik.pendingBefore >= 0 && Xk.push(`pending ${Ik.pendingBefore} -> ${Ik.pendingAfter} (max ${Ik.pendingMax})`), Xk.push(this.longTasks.describe(Ik.endMs - Ik.intervalMs, Ik.endMs)), (0, yk.g)("frame", Xk.join("; "))
+             const tS = [`long frame ${(0,XS.d)(gS.intervalMs)} ms ending at ${(0,XS.d)(gS.endMs)} ms: main ${(0,XS.d)(gS.mainMs)} (render ${(0,XS.d)(gS.renderMs)}, ${gS.ticks} ticks ${(0,XS.d)(gS.tickMs)}), outside ${(0,XS.d)(gS.intervalMs-gS.mainMs)}`, `${gS.rafs} rafs`];
+             gS.pendingBefore >= 0 && tS.push(`pending ${gS.pendingBefore} -> ${gS.pendingAfter} (max ${gS.pendingMax})`), tS.push(this.longTasks.describe(gS.endMs - gS.intervalMs, gS.endMs)), (0, xS.i)("frame", tS.join("; "))
```

#### 16. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L210)

```diff
-             null !== Fk && (0, yk.g)("frame", Fk)
+             null !== HS && (0, xS.i)("frame", HS)
```

#### 17. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L217)

```diff
-         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, yk.g)("frame", `start: ${kk} client, ${Fk}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Ik=this.longTasks.kind)&& … [truncated]
+         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, xS.i)("frame", `start: ${SS} client, ${HS}, dpr ${window.devicePixelRatio}, long tasks ${null!==(gS=this.longTasks.kind)&& … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L231)

```diff
-         this.flushTimer = setTimeout(this.flush, kk ? wk : ek)
+         this.flushTimer = setTimeout(this.flush, SS ? jS : KS)
```

#### 19. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L236` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L236) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L236)

```diff
-         (0, Tk.d)(Ik) ? (this.lastDrawnStartMs >= 0 && (qk.pendingAfter = this.lastPending, this.closeInterval(kk - this.lastDrawnStartMs, kk)), this.lastDrawnStartMs = kk, Qk(qk).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
+         (0, bS.c)(gS) ? (this.lastDrawnStartMs >= 0 && (uS.pendingAfter = this.lastPending, this.closeInterval(SS - this.lastDrawnStartMs, SS)), this.lastDrawnStartMs = SS, DS(uS).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L257)

```diff
-         if (0 === Fk.frames) return Fk.undrawn.count > 0 && (0, yk.g)("frame", `${kk}s: no frames drawn, ${Fk.undrawn.describe()}; pending max ${Ik.pendingMax}`), Fk.undrawn.count > 0;
+         if (0 === HS.frames) return HS.undrawn.count > 0 && (0, xS.i)("frame", `${SS}s: no frames drawn, ${HS.undrawn.describe()}; pending max ${gS.pendingMax}`), HS.undrawn.count > 0;
```

#### 21. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260)

```diff
-           Tk = [`${Fk.frames} frames, median ${(0,ik.b)((0,ik.d)(Xk,.5))} p95 ${(0,ik.b)((0,ik.d)(Xk,.95))} max ${(0,ik.b)(Fk.maxMs)} ms, ${Fk.slow} over 50, ${Fk.shown+Fk.dropped} over ${Jk}`, `${Ik.rafs} rafs, ${Fk.undrawn.describe()}`, `main ${(0,ik.b)(Ik.mainMs)} ms (render $ … [truncated]
-         return Ik.pendingMax >= 0 && Tk.push(`pending max ${Ik.pendingMax}`), this.ahead >= 0 && Tk.push(`${this.ahead} frames ahead`), Tk.push(`outliers ${Fk.shown} logged, ${Fk.dropped} dropped`), (0, yk.g)("frame", `${kk}s: ${Tk.join("; ")}`), !0
+           bS = [`${HS.frames} frames, median ${(0,XS.d)((0,XS.h)(tS,.5))} p95 ${(0,XS.d)((0,XS.h)(tS,.95))} max ${(0,XS.d)(HS.maxMs)} ms, ${HS.slow} over 50, ${HS.shown+HS.dropped} over ${CS}`, `${gS.rafs} rafs, ${HS.undrawn.describe()}`, `main ${(0,XS.d)(gS.mainMs)} ms (render $ … [truncated]
+         return gS.pendingMax >= 0 && bS.push(`pending max ${gS.pendingMax}`), this.ahead >= 0 && bS.push(`${this.ahead} frames ahead`), bS.push(`outliers ${HS.shown} logged, ${HS.dropped} dropped`), (0, xS.i)("frame", `${SS}s: ${bS.join("; ")}`), !0
```

#### 22. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L269)

```diff
-   34023: (kk, Fk, Ik) => {
+   34090: (SS, HS, gS) => {
```

#### 23. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L271)

```diff
-       return `hidden ${kk.changes} changes, ${Math.round(kk.hiddenMs)} ms`
+       return `hidden ${SS.changes} changes, ${Math.round(SS.hiddenMs)} ms`
```

#### 24. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L274-L275` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L274-L275) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L274-L275)

```diff
-       d: () => Tk,
-       e: () => Xk
+       e: () => bS,
+       f: () => tS
```

#### 25. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/frameDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/frameDebug.js#L282)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = kk : this.hiddenSinceMs >= 0 && (this.hiddenMs += kk - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = SS : this.hiddenSinceMs >= 0 && (this.hiddenMs += SS - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-brands.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/icons-brands.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621)

#### 1. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L4)

```diff
-   8013: (kk, Fk) => {
+   8174: (SS, HS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L13)

```diff
-     }, Fk.e = Fk.d
+     }, HS.f = HS.d
```

#### 3. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L15)

```diff
-   8017: (kk, Fk) => {
+   8181: (SS, HS) => {
```

#### 4. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L20)

```diff
-     Fk.c = {
+     HS.d = {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L24)

```diff
-     }, Fk.f = Fk.c
+     }, HS.g = HS.d
```

#### 6. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L26)

```diff
-   8025: (kk, Fk) => {
+   8183: (SS, HS) => {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L31)

```diff
-     Fk.b = {
+     HS.e = {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L35)

```diff
-     }, Fk.c = Fk.b
+     }, HS.h = HS.e
```

#### 9. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L37)

```diff
-   8029: (kk, Fk) => {
+   8188: (SS, HS) => {
```

#### 10. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L48-L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L81) · [Before (L48-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L48-L81)

```diff
-   8035: (kk, Fk) => {
-     var Ik = "instagram",
-       Xk = [],
-       Tk = "f16d",
-       ik = "M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-3 … [truncated]
-     Fk.b = {
-       prefix: "fab",
-       iconName: Ik,
-       icon: [448, 512, Xk, Tk, ik]
-     }, Fk.d = Fk.b
-   },
-   8040: (kk, Fk) => {
-     var Ik = "reddit-alien",
-       Xk = [],
-       Tk = "f281",
-       ik = "M373 138.6c-25.2 0-46.3-17.5-51.9-41-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3 12.6-9.7 28.4-15.5 45.5-15.5 41.3 0 74.7 33.4 74.7 74.7 0 29.8-17.4 55.5-42.7 67.5-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4c-25.4-11.9-43-37.7-43-67.7 0-41.3  … [truncated]
- ... (18 more removed lines; see GitHub link above)
+   8211: (SS, HS) => {
```

#### 11. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L86)

```diff
-     Fk.c = {
+     HS.e = {
```

#### 12. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L90)

```diff
-     }, Fk.g = Fk.c
+     }, HS.g = HS.e
```

#### 13. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L92)

```diff
-   8052: (kk, Fk) => {
+   8217: (SS, HS) => {
```

#### 14. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L114` → after: `L103-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L103-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L103-L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L114)

```diff
-   8062: (kk, Fk) => {
+   8222: (SS, HS) => {
+     var gS = "x-twitter",
+       tS = [],
+       bS = "e61b",
+       XS = "M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z";
+     HS.d = {
+       prefix: "fab",
+       iconName: gS,
+       icon: [448, 512, tS, bS, XS]
+     }, HS.h = HS.d
+   },
+   8231: (SS, HS) => {
```

#### 15. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L119)

```diff
-     Fk.d = {
+     HS.c = {
```

#### 16. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L123)

```diff
-     }, Fk.f = Fk.d
+     }, HS.g = HS.c
```

#### 17. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L125)

```diff
-   8008: (kk, Fk, Ik) => {
+   8171: (SS, HS, gS) => {
```

#### 18. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L129-L139` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139)

```diff
-     var Xk = Ik(8013),
-       Tk = Ik(8017),
-       ik = Ik(8025),
-       yk = Ik(8029),
-       lk = Ik(8035),
-       ak = Ik(8040),
-       qk = Ik(8042),
-       Lk = Ik(8050),
-       tk = Ik(8052),
-       Zk = Ik(8060),
-       jk = Ik(8062);
+     var tS = gS(8174),
+       bS = gS(8181),
+       XS = gS(8183),
+       xS = gS(8188),
+       NS = gS(8190),
+       qS = gS(8194),
+       uS = gS(8202),
+       IS = gS(8211),
+       fS = gS(8217),
+       kS = gS(8222),
+       aS = gS(8231);
```

#### 19. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L141-L147` → after: `L141-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L141-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L141-L147) · [Before (L141-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L141-L147)

```diff
-       apple: Xk.e,
-       chrome: Tk.f,
-       discord: ik.c,
-       "google-play": yk.h,
-       instagram: lk.d,
-       "reddit-alien": ak.e,
-       tiktok: qk.c,
+       apple: tS.f,
+       chrome: bS.g,
+       discord: XS.h,
+       "google-play": xS.g,
+       instagram: NS.g,
+       "reddit-alien": qS.g,
+       tiktok: uS.h,
```

#### 20. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-brands.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-brands.js#L150-L151)

```diff
-       "x-twitter": Zk.f,
-       youtube: jk.f
+       "x-twitter": kS.h,
+       youtube: aS.g
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-duotone.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/icons-duotone.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd)

#### 1. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-duotone.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-duotone.js#L4)

```diff
-   7997: (kk, Fk) => {
+   8164: (SS, HS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L26` → after: `L15-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L15-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-duotone.js#L15-L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-duotone.js#L26)

```diff
-   7990: (kk, Fk, Ik) => {
+   8167: (SS, HS) => {
+     var gS = "planet-ringed",
+       tS = [129680],
+       bS = "e020",
+       XS = ["M24.6 519.4c-24.7-24.7 5.1-97.7 70.1-186.3 8.7 21.9 21.1 42 36.3 59.4-8.2 12-15.6 23.6-22.1 34.5-3.8 6.5-7.3 12.6-10.3 18.3 5.7-3 11.8-6.4 18.3-10.3 10.9-6.4 22.4-13.8 34.5-22 47.6-32.6 103-78.6 158.9-134.5S412.4 167.1 445 119.5c8.2-12 15.6-23.6 22-34.5 3.8-6.5 7.3-1 … [truncated]
+     HS.b = {
+       prefix: "fad",
+       iconName: gS,
+       icon: [576, 512, tS, bS, XS]
+     }, HS.f = HS.b
+   },
+   8158: (SS, HS, gS) => {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31)

```diff
-     var Xk = Ik(7997),
-       Tk = Ik(8001);
+     var tS = gS(8164),
+       bS = gS(8167);
```

#### 4. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-duotone.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-duotone.js#L33-L34)

```diff
-       "hat-santa": Xk.c,
-       "planet-ringed": Tk.d
+       "hat-santa": tS.d,
+       "planet-ringed": bS.f
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-regular.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/icons-regular.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8)

#### 1. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L4)

```diff
-   7954: (kk, Fk) => {
+   8126: (SS, HS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L13` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L24) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L13)

```diff
-     }, Fk.e = Fk.b
+     }, HS.d = HS.b
```

#### 3. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L15-L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L26) · [Before (L15-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L15-L26)

```diff
-   7961: (kk, Fk) => {
-     var Ik = "flag",
-       Xk = [127988, 61725],
-       Tk = "f024",
-       ik = "M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-100 80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4 44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0-35.1-17 … [truncated]
-     Fk.e = {
-       prefix: "far",
-       iconName: Ik,
-       icon: [448, 512, Xk, Tk, ik]
-     }, Fk.i = Fk.e
-   },
-   7970: (kk, Fk) => {
+   8137: (SS, HS) => {
```

#### 4. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L31)

```diff
-     Fk.e = {
+     HS.d = {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L35)

```diff
-     }, Fk.h = Fk.e
+     }, HS.h = HS.d
```

#### 6. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L37-L39` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L39) · [Before (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L39)

```diff
-   7976: (kk, Fk, Ik) => {
-     var Xk = Ik(7983);
-     Fk.e = {
+   8141: (SS, HS, gS) => {
+     var tS = gS(8149);
+     HS.b = {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L43)

```diff
-     }, Fk.h = Fk.e, Xk.prefix, Xk.iconName, Xk.width, Xk.height, Xk.aliases, Xk.unicode, Xk.svgPathData, Xk.aliases
+     }, HS.c = HS.b, tS.prefix, tS.iconName, tS.width, tS.height, tS.aliases, tS.unicode, tS.svgPathData, tS.aliases
```

#### 8. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L45)

```diff
-   7983: (kk, Fk) => {
+   8149: (SS, HS) => {
```

#### 9. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L59)

```diff
-   7946: (kk, Fk, Ik) => {
+   8117: (SS, HS, gS) => {
```

#### 10. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L63-L67` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67) · [Before (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67)

```diff
-     var Xk = Ik(7954),
-       Tk = Ik(7961),
-       ik = Ik(7970),
-       yk = Ik(7976),
-       lk = Ik(7983);
+     var tS = gS(8126),
+       bS = gS(8134),
+       XS = gS(8137),
+       xS = gS(8141),
+       NS = gS(8149);
```

#### 11. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L70)

```diff
-       flag: Tk.i,
+       flag: bS.d,
```

#### 12. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-regular.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-regular.js#L72)

```diff
-       "user-friends": yk.h,
+       "user-friends": xS.c,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-solid.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/icons-solid.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6)

#### 1. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L4)

```diff
-   6673: (kk, Fk, Ik) => {
+   6901: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L8-L49` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L9) · [Before (L8-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L49)

```diff
-     var Xk = Ik(6681),
-       Tk = Ik(6695),
-       ik = Ik(6708),
-       yk = Ik(6716),
-       lk = Ik(6699),
-       ak = Ik(6724),
-       qk = Ik(6730),
-       Lk = Ik(6738),
-       tk = Ik(6744),
-       Zk = Ik(6753),
-       jk = Ik(6761),
-       ek = Ik(6768),
-       wk = Ik(6780),
-       Hk = Ik(6788),
-       Jk = Ik(6792),
-       xk = Ik(6775),
- ... (26 more removed lines; see GitHub link above)
+     var tS = gS(6910),
+       bS = gS(6922),
```

#### 3. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L51-L58` → after: `L11-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L11-L16) · [Before (L51-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L51-L58)

```diff
-       mk = Ik(6934),
-       hk = Ik(6936),
-       rk = Ik(6939),
-       Dk = Ik(6947),
-       Mk = Ik(6951),
-       kF = Ik(6960),
-       FF = Ik(6965),
-       IF = Ik(6967),
+       xS = gS(6933),
+       NS = gS(6924),
+       qS = gS(6942),
+       uS = gS(6948),
+       IS = gS(6956),
+       fS = gS(6962),
```

#### 4. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L60` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L18) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L60)

```diff
-       TF = Ik(6975),
+       aS = gS(6972),
```

#### 5. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L62-L63` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L20-L23) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L62-L63)

```diff
-       yF = Ik(6982),
-       lF = Ik(6995),
+       jS = gS(6987),
+       GS = gS(6991),
+       CS = gS(6994),
+       nS = gS(6979),
```

#### 6. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L66` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L27) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L66)

```diff
-       LF = Ik(7017),
+       wS = gS(7015),
```

#### 7. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L68-L73` → after: `L29-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L29-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L29-L35) · [Before (L68-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L68-L73)

```diff
-       ZF = Ik(7027),
-       jF = Ik(7033),
-       eF = Ik(7041),
-       wF = Ik(7049),
-       HF = Ik(7058),
-       JF = Ik(7065),
+       ZS = gS(7025),
+       JS = gS(7032),
+       OS = gS(7038),
+       dS = gS(7047),
+       cS = gS(7050),
+       vS = gS(7055),
+       ES = gS(7063),
```

#### 8. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L75` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L37-L38) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L75)

```diff
-       PF = Ik(7078),
+       YS = gS(7075),
+       AS = gS(7083),
```

#### 9. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L77-L78` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L40) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L77-L78)

```diff
-       QF = Ik(7094),
-       sF = Ik(7007),
+       VS = gS(7095),
```

#### 10. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L80` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L42) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L80)

```diff
-       zF = Ik(7105),
+       WS = gS(7107),
```

#### 11. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L82-L86` → after: `L44-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L44-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L44-L98) · [Before (L82-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L82-L86)

```diff
-       oF = Ik(7119),
-       vF = Ik(7121),
-       EF = Ik(7126),
-       OF = Ik(7133),
-       nF = Ik(7129),
+       US = gS(7112),
+       pS = gS(7116),
+       sS = gS(7120),
+       BS = gS(1135),
+       MS = gS(7128),
+       FS = gS(7137),
+       RS = gS(7145),
+       TS = gS(7155),
+       oS = gS(7159),
+       lS = gS(7163),
+       mS = gS(7167),
+       eS = gS(7170),
+       rS = gS(7172),
+       SH = gS(7174),
+       HH = gS(7183),
+       gH = gS(7192),
+ ... (39 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L88-L132` → after: `L100-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L100-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L100-L104) · [Before (L88-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L88-L132)

```diff
-       pF = Ik(7154),
-       uF = Ik(7158),
-       bF = Ik(7165),
-       RF = Ik(7174),
-       UF = Ik(7181),
-       CF = Ik(7185),
-       NF = Ik(7192),
-       cF = Ik(7196),
-       WF = Ik(7205),
-       fF = Ik(7212),
-       BF = Ik(7214),
-       dF = Ik(6929),
-       YF = Ik(7218),
-       AF = Ik(7224),
-       gF = Ik(7226),
-       mF = Ik(7233),
- ... (29 more removed lines; see GitHub link above)
+       MH = gS(7430),
+       FH = gS(7432),
+       RH = gS(7438),
+       TH = gS(7442),
+       oH = gS(7445),
```

#### 13. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L134-L145` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L106-L107) · [Before (L134-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L134-L145)

```diff
-       oI = Ik(7393),
-       vI = Ik(7399),
-       EI = Ik(7401),
-       OI = Ik(7407),
-       nI = Ik(7413),
-       GI = Ik(7423),
-       pI = Ik(7427),
-       uI = Ik(7431),
-       bI = Ik(7435),
-       RI = Ik(7443),
-       UI = Ik(7446),
-       CI = Ik(7453),
+       mH = gS(7452),
+       eH = gS(7456),
```

#### 14. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L147-L155` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L109-L112) · [Before (L147-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L147-L155)

```diff
-       cI = Ik(7141),
-       WI = Ik(7464),
-       fI = Ik(7466),
-       BI = Ik(7472),
-       dI = Ik(7029),
-       YI = Ik(7390),
-       AI = Ik(7481),
-       gI = Ik(7489),
-       mI = Ik(7491),
+       Sg = gS(7469),
+       Hg = gS(7476),
+       gg = gS(7479),
+       tg = gS(7486),
```

#### 15. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L157-L167` → after: `L114-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L114-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L114-L125) · [Before (L157-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L157-L167)

```diff
-       rI = Ik(7504),
-       DI = Ik(6690),
-       MI = Ik(7508),
-       kX = Ik(7514),
-       FX = Ik(7522),
-       IX = Ik(7526),
-       XX = Ik(7531),
-       TX = Ik(7548),
-       iX = Ik(7551),
-       yX = Ik(7554),
-       lX = Ik(7559),
+       Xg = gS(7499),
+       xg = gS(7505),
+       Ng = gS(7509),
+       qg = gS(7492),
+       ug = gS(7518),
+       Ig = gS(7523),
+       fg = gS(7530),
+       kg = gS(7534),
+       ag = gS(7538),
+       Kg = gS(7545),
+       jg = gS(7549),
+       Gg = gS(7558),
```

#### 16. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L169-L175` → after: `L127-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L127-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L127-L132) · [Before (L169-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L169-L175)

```diff
-       qX = Ik(7539),
-       LX = Ik(6987),
-       tX = Ik(7571),
-       ZX = Ik(7577),
-       jX = Ik(7586),
-       eX = Ik(7598),
-       wX = Ik(7592),
+       ng = gS(7572),
+       Pg = gS(7575),
+       Qg = gS(7582),
+       Dg = gS(7591),
+       wg = gS(7600),
+       hg = gS(7602),
```

#### 17. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L178-L205` → after: `L153-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L153-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L153-L166) · [Before (L178-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L178-L205)

```diff
-       xX = Ik(7621),
-       PX = Ik(7624),
-       KX = Ik(7631),
-       QX = Ik(7633),
-       sX = Ik(7642),
-       VX = Ik(7645),
-       zX = Ik(7648),
-       SX = Ik(7656),
-       oX = Ik(7419),
-       vX = Ik(7659),
-       EX = Ik(7667),
-       OX = Ik(7676),
-       nX = Ik(7684),
-       GX = Ik(7690),
-       pX = Ik(7698),
-       uX = Ik(7706),
- ... (12 more removed lines; see GitHub link above)
+       Fg = gS(7716),
+       Rg = gS(7723),
+       Tg = gS(7728),
+       og = gS(7733),
+       lg = gS(7739),
+       mg = gS(6917),
+       eg = gS(7742),
+       rg = gS(7749),
+       St = gS(7755),
+       Ht = gS(7758),
+       gt = gS(7763),
+       tt = gS(7769),
+       bt = gS(7776),
+       Xt = gS(7781),
```

#### 18. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L207-L209` → after: `L168-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L168-L171) · [Before (L207-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L207-L209)

```diff
-       mX = Ik(7786),
-       hX = Ik(7794),
-       rX = Ik(7802),
+       Nt = gS(7792),
+       qt = gS(7767),
+       ut = gS(7209),
+       It = gS(7799),
```

#### 19. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L211` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L173-L175) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L211)

```diff
-       MX = Ik(7813),
+       kt = gS(7806),
+       Kt = gS(7818),
+       jt = gS(7811),
```

#### 20. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L213-L223` → after: `L177-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L177-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L177-L187) · [Before (L213-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L213-L223)

```diff
-       FT = Ik(7825),
-       IT = Ik(7832),
-       XT = Ik(7838),
-       TT = Ik(7841),
-       iT = Ik(7843),
-       yT = Ik(7848),
-       lT = Ik(7856),
-       aT = Ik(7859),
-       qT = Ik(7868),
-       LT = Ik(7873),
-       tT = Ik(7877),
+       Ct = gS(7826),
+       nt = gS(7829),
+       Pt = gS(7835),
+       Qt = gS(7840),
+       Dt = gS(7846),
+       wt = gS(7852),
+       ht = gS(7861),
+       Zt = gS(7865),
+       Jt = gS(7872),
+       Ot = gS(7652),
+       dt = gS(7879),
```

#### 21. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L225-L231` → after: `L189-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L189-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L189-L231) · [Before (L225-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L225-L231)

```diff
-       jT = Ik(7893),
-       eT = Ik(7902),
-       wT = Ik(7911),
-       HT = Ik(7917),
-       JT = Ik(7924),
-       xT = Ik(7930),
-       PT = Ik(7939);
+       vt = gS(7892),
+       Et = gS(7895),
+       Lt = gS(7904),
+       Yt = gS(7906),
+       At = gS(7913),
+       yt = gS(7919),
+       Vt = gS(7926),
+       it = gS(7932),
+       Wt = gS(7941),
+       zt = gS(7283),
+       Ut = gS(7949),
+       pt = gS(7951),
+       st = gS(7954),
+       Bt = gS(7963),
+       Mt = gS(7965),
+       Ft = gS(7967),
+ ... (27 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L233-L236` → after: `L233-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L233-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L233-L236) · [Before (L233-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L233-L236)

```diff
-       add: Xk.c,
-       "angle-double-up": Tk.f,
-       "angle-down": ik.h,
-       "angle-up": yk.e,
+       add: tS.f,
+       "angle-double-up": bS.c,
+       "angle-down": XS.e,
+       "angle-up": xS.i,
```

#### 23. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L238-L242` → after: `L238-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L238-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L238-L242) · [Before (L238-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L238-L242)

```diff
-       "arrow-down-to-line": ak.g,
-       "arrow-left": qk.e,
-       "arrow-right": Lk.c,
-       "arrow-up": tk.f,
-       "arrow-up-from-line": Zk.e,
+       "arrow-down-to-line": qS.d,
+       "arrow-left": uS.d,
+       "arrow-right": IS.f,
+       "arrow-up": fS.h,
+       "arrow-up-from-line": kS.f,
```

#### 24. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L244)

```diff
-       arrows: ek.d,
+       arrows: KS.g,
```

#### 25. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L249-L251` → after: `L249-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L249-L251) · [Before (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L249-L251)

```diff
-       award: Pk.g,
-       backpack: Kk.g,
-       ban: Qk.h,
+       award: PS.f,
+       backpack: QS.h,
+       ban: DS.e,
```

#### 26. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L253-L255` → after: `L253-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L253-L255) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L253-L255)

```diff
-       bee: Vk.c,
-       bell: zk.d,
-       "block-question": Sk.g,
+       bee: hS.f,
+       bell: ZS.g,
+       "block-question": JS.h,
```

#### 27. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L257-L259` → after: `L257-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L257-L259) · [Before (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L257-L259)

```diff
-       boot: Ek.e,
-       calendar: Ok.e,
-       camera: nk.f,
+       boot: dS.f,
+       calendar: cS.c,
+       camera: vS.e,
```

#### 28. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L261-L263` → after: `L261-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L261-L263) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L261-L263)

```diff
-       "caret-left": pk.d,
-       "caret-right": uk.i,
-       "caret-up": bk.g,
+       "caret-left": LS.e,
+       "caret-right": YS.g,
+       "caret-up": AS.f,
```

#### 29. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L266)

```diff
-       "chess-knight": Ck.e,
+       "chess-knight": iS.g,
```

#### 30. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L268-L269)

```diff
-       "child-reaching": ck.i,
-       "circle-check": Wk.e,
+       "child-reaching": zS.g,
+       "circle-check": US.d,
```

#### 31. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L272-L273` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L272-L273) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L272-L273)

```diff
-       "circle-question": dk.e,
-       "circle-xmark": Yk.e,
+       "circle-question": BS.g,
+       "circle-xmark": MS.d,
```

#### 32. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L275-L276` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L275-L276) · [Before (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L275-L276)

```diff
-       cog: gk.g,
-       coins: mk.f,
+       cog: RS.f,
+       coins: TS.g,
```

#### 33. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L278-L279` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L278-L279) · [Before (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L278-L279)

```diff
-       commenting: rk.d,
-       compress: Dk.e,
+       commenting: lS.g,
+       compress: mS.d,
```

#### 34. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L281)

```diff
-       cookie: kF.f,
+       cookie: rS.g,
```

#### 35. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L283-L287` → after: `L283-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L283-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L283-L287) · [Before (L283-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L283-L287)

```diff
-       crosshairs: IF.g,
-       crown: XF.g,
-       cube: TF.h,
-       cubes: iF.i,
-       cut: yF.f,
+       crosshairs: HH.f,
+       crown: gH.i,
+       cube: tH.f,
+       cubes: bH.f,
+       cut: XH.d,
```

#### 36. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L289-L292` → after: `L289-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L289-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L289-L292) · [Before (L289-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L289-L292)

```diff
-       dizzy: aF.d,
-       "door-closed": qF.d,
-       "door-open": LF.g,
-       download: tF.h,
+       dizzy: NH.g,
+       "door-closed": qH.h,
+       "door-open": uH.h,
+       download: IH.g,
```

#### 37. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L295-L298` → after: `L295-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L295-L298) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L295-L298)

```diff
-       "ellipsis-h": eF.f,
-       exclamation: wF.g,
-       "exclamation-triangle": HF.g,
-       expand: JF.e,
+       "ellipsis-h": aH.d,
+       exclamation: KH.c,
+       "exclamation-triangle": jH.e,
+       expand: GH.d,
```

#### 38. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L300-L302` → after: `L300-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L300-L302) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L300-L302)

```diff
-       eye: PF.e,
-       "eye-slash": KF.h,
-       "face-diagonal-mouth": QF.h,
+       eye: nH.f,
+       "eye-slash": PH.e,
+       "face-diagonal-mouth": QH.f,
```

#### 39. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L306-L307` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L306-L307) · [Before (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L306-L307)

```diff
-       "face-worried": SF.f,
-       "feather-alt": oF.c,
+       "face-worried": ZH.e,
+       "feather-alt": JH.g,
```

#### 40. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L309-L310` → after: `L309-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L309-L310) · [Before (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L309-L310)

```diff
-       "file-alt": EF.e,
-       "file-clipboard": OF.c,
+       "file-alt": dH.d,
+       "file-clipboard": cH.f,
```

#### 41. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L312-L319` → after: `L312-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L312-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L312-L319) · [Before (L312-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L312-L319)

```diff
-       "file-text": GF.f,
-       film: pF.f,
-       fire: uF.g,
-       "fist-raised": bF.g,
-       flag: RF.h,
-       folder: UF.h,
-       "folder-image": CF.i,
-       "folder-open": NF.i,
+       "file-text": EH.e,
+       film: LH.e,
+       fire: YH.i,
+       "fist-raised": AH.e,
+       flag: yH.e,
+       folder: VH.f,
+       "folder-image": iH.d,
+       "folder-open": WH.e,
```

#### 42. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L321)

```diff
-       "gamepad-modern": WF.e,
+       "gamepad-modern": UH.f,
```

#### 43. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L323)

```diff
-       gavel: BF.c,
+       gavel: sH.f,
```

#### 44. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L325-L329` → after: `L325-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L325-L329) · [Before (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L325-L329)

```diff
-       gem: YF.d,
-       globe: AF.e,
-       "grid-2": gF.i,
-       hammer: mF.i,
-       "hand-back-point-up": hF.d,
+       gem: MH.g,
+       globe: FH.c,
+       "grid-2": RH.e,
+       hammer: TH.f,
+       "hand-back-point-up": oH.e,
```

#### 45. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L331-L334` → after: `L331-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L331-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L331-L334) · [Before (L331-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L331-L334)

```diff
-       "hand-holding-medical": DF.f,
-       "hand-point-left": MF.g,
-       "hand-wave": kI.h,
-       "hands-clapping": FI.c,
+       "hand-holding-medical": mH.g,
+       "hand-point-left": eH.f,
+       "hand-wave": rH.f,
+       "hands-clapping": Sg.d,
```

#### 46. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L336-L338` → after: `L336-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L336-L338) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L336-L338)

```diff
-       heart: XI.e,
-       "heart-music-camera-bolt": TI.f,
-       history: iI.f,
+       heart: gg.f,
+       "heart-music-camera-bolt": tg.c,
+       history: bg.d,
```

#### 47. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L341-L342` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L341-L342) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L341-L342)

```diff
-       "hourglass-empty": aI.f,
-       house: PT.f,
+       "hourglass-empty": Ng.e,
+       house: Pb.e,
```

#### 48. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L344-L348` → after: `L344-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L344-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L344-L348) · [Before (L344-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L344-L348)

```diff
-       image: LI.f,
-       "image-slash": tI.g,
-       "info-circle": ZI.f,
-       joystick: jI.g,
-       "layer-group": eI.f,
+       image: ug.h,
+       "image-slash": Ig.f,
+       "info-circle": fg.h,
+       joystick: kg.e,
+       "layer-group": ag.g,
```

#### 49. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L350-L351` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L350-L351) · [Before (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L350-L351)

```diff
-       lightbulb: HI.g,
-       link: JI.c,
+       lightbulb: jg.i,
+       link: Gg.d,
```

#### 50. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L353` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L353) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L353)

```diff
-       "list-squares": PI.g,
+       "list-squares": ng.f,
```

#### 51. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L357)

```diff
-       "lock-open": VI.f,
+       "lock-open": wg.d,
```

#### 52. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L359-L361` → after: `L359-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L359-L361) · [Before (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L359-L361)

```diff
-       male: SI.d,
-       "map-marker-check": oI.e,
-       "map-marker-times": vI.g,
+       male: Zg.f,
+       "map-marker-check": Jg.g,
+       "map-marker-times": Og.f,
```

#### 53. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L364-L372` → after: `L364-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L364-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L364-L372) · [Before (L364-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L364-L372)

```diff
-       "minus-square": nI.f,
-       moon: GI.g,
-       mouse: pI.f,
-       music: uI.f,
-       "music-slash": bI.h,
-       navicon: RI.d,
-       palette: UI.f,
-       pants: CI.f,
-       "party-horn": NI.f,
+       "minus-square": vg.g,
+       moon: Eg.f,
+       mouse: Lg.h,
+       music: Yg.i,
+       "music-slash": Ag.i,
+       navicon: yg.e,
+       palette: Vg.g,
+       pants: ig.d,
+       "party-horn": Wg.h,
```

#### 54. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L374-L376` → after: `L374-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L374-L376) · [Before (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L374-L376)

```diff
-       pause: WI.d,
-       pen: fI.e,
-       "pen-field": BI.f,
+       pause: Ug.g,
+       pen: pg.c,
+       "pen-field": sg.e,
```

#### 55. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L379-L383` → after: `L379-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L379-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L379-L383) · [Before (L379-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L379-L383)

```diff
-       "person-arrow-down-to-line": AI.f,
-       "person-arrow-up-from-line": gI.g,
-       "person-falling-burst": mI.c,
-       "person-military-pointing": hI.i,
-       play: rI.d,
+       "person-arrow-down-to-line": Fg.d,
+       "person-arrow-up-from-line": Rg.e,
+       "person-falling-burst": Tg.f,
+       "person-military-pointing": og.f,
+       play: lg.f,
```

#### 56. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L385-L387` → after: `L385-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L385-L387) · [Before (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L385-L387)

```diff
-       "plus-circle": MI.c,
-       "power-off": kX.e,
-       "ranking-star": FX.d,
+       "plus-circle": eg.d,
+       "power-off": rg.f,
+       "ranking-star": St.g,
```

#### 57. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L389-L390` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L389-L390) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L389-L390)

```diff
-       "redo-alt": XX.e,
-       refresh: TX.g,
+       "redo-alt": gt.g,
+       refresh: tt.e,
```

#### 58. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L392-L394` → after: `L392-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L392-L394) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L392-L394)

```diff
-       "rocket-launch": yX.g,
-       "rotate-forward": lX.g,
-       "rotate-left": aX.f,
+       "rocket-launch": Xt.f,
+       "rotate-forward": xt.e,
+       "rotate-left": Nt.e,
```

#### 59. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L397)

```diff
-       search: tX.d,
+       search: It.f,
```

#### 60. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L399-L400` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L399-L400) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L399-L400)

```diff
-       "shield-alt": jX.g,
-       "shield-blank": eX.e,
+       "shield-alt": kt.d,
+       "shield-blank": Kt.g,
```

#### 61. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L402-L404` → after: `L402-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L402-L404) · [Before (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L402-L404)

```diff
-       shirt: HX.h,
-       shoe: JX.i,
-       "shopping-cart": xX.i,
+       shirt: Gt.f,
+       shoe: Ct.e,
+       "shopping-cart": nt.h,
```

#### 62. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L407-L410` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L407-L410) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L407-L410)

```diff
-       smile: QX.f,
-       snowflake: sX.e,
-       sparkle: VX.g,
-       "square-dashed": SX.f,
+       smile: Dt.e,
+       snowflake: wt.g,
+       sparkle: ht.d,
+       "square-dashed": Jt.e,
```

#### 63. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L412)

```diff
-       star: vX.f,
+       star: dt.h,
```

#### 64. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L414-L423` → after: `L414-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L414-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L414-L423) · [Before (L414-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L414-L423)

```diff
-       store: EX.h,
-       subtract: OX.f,
-       "sun-bright": nX.f,
-       swords: GX.f,
-       sync: pX.g,
-       "t-shirt": xT.d,
-       "tachometer-alt": uX.d,
-       "tachometer-alt-fast": bX.g,
-       terminal: RX.f,
-       "trash-alt": UX.f,
+       store: ct.c,
+       subtract: vt.g,
+       "sun-bright": Et.e,
+       swords: Lt.c,
+       sync: Yt.f,
+       "t-shirt": nb.e,
+       "tachometer-alt": At.g,
+       "tachometer-alt-fast": yt.e,
+       terminal: Vt.g,
+       "trash-alt": it.i,
```

#### 65. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L426` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L426) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L426)

```diff
-       trophy: cX.f,
+       trophy: Ut.c,
```

#### 66. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L431)

```diff
-       "user-astronaut": dX.d,
+       "user-astronaut": Mt.g,
```

#### 67. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L433-L434` → after: `L433-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L433-L434) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L433-L434)

```diff
-       "user-clock": AX.e,
-       "user-friends": gX.f,
+       "user-clock": Rt.i,
+       "user-friends": Tt.d,
```

#### 68. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L437-L442` → after: `L437-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L437-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L437-L442) · [Before (L437-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L437-L442)

```diff
-       "user-minus": rX.e,
-       "user-plus": DX.d,
-       "user-slash": MX.g,
-       "user-unlock": kT.c,
-       "users-crown": FT.f,
-       "users-gear": IT.g,
+       "user-minus": mt.g,
+       "user-plus": et.f,
+       "user-slash": rt.h,
+       "user-unlock": Sb.f,
+       "users-crown": Hb.c,
+       "users-gear": gb.e,
```

#### 69. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L444)

```diff
-       "video-camera": TT.g,
+       "video-camera": bb.f,
```

#### 70. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L446)

```diff
-       "volume-down": yT.g,
+       "volume-down": xb.e,
```

#### 71. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L448)

```diff
-       "volume-medium": aT.d,
+       "volume-medium": qb.e,
```

#### 72. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L450)

```diff
-       warning: LT.g,
+       warning: Ib.e,
```

#### 73. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L453-L456` → after: `L453-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L453-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/icons-solid.js#L453-L456) · [Before (L453-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/icons-solid.js#L453-L456)

```diff
-       "wifi-strong": jT.h,
-       wrench: eT.h,
-       x: wT.g,
-       xmark: HT.h,
+       "wifi-strong": ab.g,
+       wrench: Kb.f,
+       x: jb.f,
+       xmark: Gb.e,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/itemSprites.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/itemSprites.js` (1731 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c)

#### 1. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L4)

```diff
-   51036: (kk, Fk, Ik) => {
+   51080: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L24)

```diff
-       return null !== (Fk = ak.get(kk)) && void 0 !== Fk ? Fk : ""
+       return null !== (HS = qS.get(SS)) && void 0 !== HS ? HS : ""
```

#### 3. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L29)

```diff
-       return null === Fk ? null : "" === Fk ? Ik(50860) : Ik(51038)(`./${Fk}.png`)
+       return null === HS ? null : "" === HS ? gS(50908) : gS(51085)(`./${HS}.png`)
```

#### 4. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L32)

```diff
-   51038: (kk, Fk, Ik) => {
+   51085: (SS, HS, gS) => {
```

#### 5. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L34-L477` → after: `L34-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L34-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L34-L477) · [Before (L34-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L34-L477)

```diff
-       "./67.png": 51044,
-       "./67_projectile_base.png": 51053,
-       "./67_projectile_boosted.png": 51058,
-       "./AK-47.png": 51067,
-       "./AWP.png": 51072,
-       "./Block-19.png": 51075,
-       "./DMR.png": 51081,
-       "./Deagle.png": 51089,
-       "./Double-barreled.png": 51098,
-       "./FMR.png": 51100,
-       "./GPMG.png": 51104,
-       "./M16.png": 51112,
-       "./M1911.png": 51118,
-       "./MP40.png": 51123,
-       "./Mini Izu.png": 51125,
-       "./Minigun.png": 51133,
- ... (428 more removed lines; see GitHub link above)
+       "./67.png": 51093,
+       "./67_projectile_base.png": 51100,
+       "./67_projectile_boosted.png": 51108,
+       "./AK-47.png": 51117,
+       "./AWP.png": 51123,
+       "./Block-19.png": 51125,
+       "./DMR.png": 51128,
+       "./Deagle.png": 51136,
+       "./Double-barreled.png": 51140,
+       "./FMR.png": 51148,
+       "./GPMG.png": 51157,
+       "./M16.png": 51160,
+       "./M1911.png": 51162,
+       "./MP40.png": 51168,
+       "./Mini Izu.png": 51174,
+       "./Minigun.png": 51178,
+ ... (428 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L479-L500` → after: `L479-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L479-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L479-L500) · [Before (L479-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L479-L500)

```diff
-       "./cyan_paint_bow_charging_2.png": 53503,
-       "./cyan_paint_bow_charging_3.png": 53508,
-       "./cyan_paint_bow_charging_4.png": 53516,
-       "./cyan_paintball.png": 53520,
-       "./cyan_paintball_gun.png": 53525,
-       "./cyan_popup_tower.png": 53532,
-       "./cyan_strongbed.png": 53540,
-       "./dandelion.png": 53544,
-       "./dangling_rope.png": 53548,
-       "./dangling_vine.png": 53557,
-       "./darter.png": 53564,
-       "./darter_shadow.png": 53569,
-       "./date_pudding.png": 53575,
-       "./date_pudding_option2.png": 53581,
-       "./dates.png": 53586,
-       "./dates_option2.png": 53592,
- ... (6 more removed lines; see GitHub link above)
+       "./cyan_paint_bow_charging_2.png": 53499,
+       "./cyan_paint_bow_charging_3.png": 53503,
+       "./cyan_paint_bow_charging_4.png": 53506,
+       "./cyan_paintball.png": 53514,
+       "./cyan_paintball_gun.png": 53523,
+       "./cyan_popup_tower.png": 53531,
+       "./cyan_strongbed.png": 53538,
+       "./dandelion.png": 53540,
+       "./dangling_rope.png": 53544,
+       "./dangling_vine.png": 53551,
+       "./darter.png": 53560,
+       "./darter_shadow.png": 53564,
+       "./date_pudding.png": 53568,
+       "./date_pudding_option2.png": 53573,
+       "./dates.png": 53575,
+       "./dates_option2.png": 53580,
+ ... (6 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L502-L612` → after: `L502-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L502-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L502-L612) · [Before (L502-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L502-L612)

```diff
-       "./defense_arrow.png": 53630,
-       "./defense_potion.png": 53636,
-       "./deposit_seed_coal.png": 53641,
-       "./deposit_seed_copper.png": 53646,
-       "./deposit_seed_gold.png": 53649,
-       "./deposit_seed_iron.png": 53657,
-       "./deposit_seed_stone.png": 53666,
-       "./deposit_seed_uranium.png": 53673,
-       "./deposit_seed_voltite.png": 53678,
-       "./diamond.png": 53686,
-       "./diamond_armour_2.png": 53688,
-       "./diamond_axe.png": 53691,
-       "./diamond_blade.png": 53700,
-       "./diamond_boomerang.png": 53702,
-       "./diamond_boots.png": 53711,
-       "./diamond_bow.png": 53720,
- ... (95 more removed lines; see GitHub link above)
+       "./defense_arrow.png": 53626,
+       "./defense_potion.png": 53629,
+       "./deposit_seed_coal.png": 53635,
+       "./deposit_seed_copper.png": 53640,
+       "./deposit_seed_gold.png": 53644,
+       "./deposit_seed_iron.png": 53647,
+       "./deposit_seed_stone.png": 53656,
+       "./deposit_seed_uranium.png": 53660,
+       "./deposit_seed_voltite.png": 53663,
+       "./diamond.png": 53671,
+       "./diamond_armour_2.png": 53673,
+       "./diamond_axe.png": 53678,
+       "./diamond_blade.png": 53682,
+       "./diamond_boomerang.png": 53691,
+       "./diamond_boots.png": 53699,
+       "./diamond_bow.png": 53708,
+ ... (95 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L614-L618` → after: `L614-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L614-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L614-L618) · [Before (L614-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L614-L618)

```diff
-       "./explosive_paint_red.png": 54260,
-       "./explosive_paint_seeking_black.png": 54266,
-       "./explosive_paint_seeking_blue.png": 54269,
-       "./explosive_paint_seeking_brown.png": 54271,
-       "./explosive_paint_seeking_cyan.png": 54274,
+       "./explosive_paint_red.png": 54259,
+       "./explosive_paint_seeking_black.png": 54262,
+       "./explosive_paint_seeking_blue.png": 54267,
+       "./explosive_paint_seeking_brown.png": 54272,
+       "./explosive_paint_seeking_cyan.png": 54276,
```

#### 9. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L620-L789` → after: `L620-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L620-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L620-L789) · [Before (L620-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L620-L789)

```diff
-       "./explosive_paint_seeking_green.png": 54283,
-       "./explosive_paint_seeking_light_blue.png": 54288,
-       "./explosive_paint_seeking_light_gray.png": 54296,
-       "./explosive_paint_seeking_lime.png": 54302,
-       "./explosive_paint_seeking_magenta.png": 54310,
-       "./explosive_paint_seeking_orange.png": 54319,
-       "./explosive_paint_seeking_pink.png": 54326,
-       "./explosive_paint_seeking_purple.png": 54328,
-       "./explosive_paint_seeking_red.png": 54337,
-       "./explosive_paint_seeking_white.png": 54345,
-       "./explosive_paint_seeking_yellow.png": 54351,
-       "./explosive_paint_sticky_black.png": 54360,
-       "./explosive_paint_sticky_blue.png": 54367,
-       "./explosive_paint_sticky_brown.png": 54371,
-       "./explosive_paint_sticky_cyan.png": 54374,
-       "./explosive_paint_sticky_gray.png": 54380,
- ... (154 more removed lines; see GitHub link above)
+       "./explosive_paint_seeking_green.png": 54285,
+       "./explosive_paint_seeking_light_blue.png": 54287,
+       "./explosive_paint_seeking_light_gray.png": 54291,
+       "./explosive_paint_seeking_lime.png": 54299,
+       "./explosive_paint_seeking_magenta.png": 54307,
+       "./explosive_paint_seeking_orange.png": 54310,
+       "./explosive_paint_seeking_pink.png": 54317,
+       "./explosive_paint_seeking_purple.png": 54324,
+       "./explosive_paint_seeking_red.png": 54327,
+       "./explosive_paint_seeking_white.png": 54332,
+       "./explosive_paint_seeking_yellow.png": 54334,
+       "./explosive_paint_sticky_black.png": 54337,
+       "./explosive_paint_sticky_blue.png": 54342,
+       "./explosive_paint_sticky_brown.png": 54346,
+       "./explosive_paint_sticky_cyan.png": 54348,
+       "./explosive_paint_sticky_gray.png": 54354,
+ ... (154 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L791)

```diff
-       "./golden_boots.png": 55228,
+       "./golden_boots.png": 55231,
```

#### 11. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L793-L823` → after: `L793-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L793-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L793-L823) · [Before (L793-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L793-L823)

```diff
-       "./golden_gauntlets.png": 55244,
-       "./golden_helmet.png": 55252,
-       "./golden_hoe.png": 55258,
-       "./golden_leggings.png": 55262,
-       "./golden_lucky_clover.png": 55268,
-       "./golden_mahseer.png": 55275,
-       "./golden_pickaxe.png": 55283,
-       "./golden_shovel.png": 55290,
-       "./golden_sword.png": 55293,
-       "./goldheart_engine.png": 55298,
-       "./golem_eye.png": 55306,
-       "./golem_pickaxe.png": 55315,
-       "./gorilla_spawn_orb.png": 55322,
-       "./gorilla_spawner_block_icon.png": 55325,
-       "./graphite.png": 55327,
-       "./grass_snapper.png": 55329,
- ... (15 more removed lines; see GitHub link above)
+       "./golden_gauntlets.png": 55245,
+       "./golden_helmet.png": 55247,
+       "./golden_hoe.png": 55252,
+       "./golden_leggings.png": 55256,
+       "./golden_lucky_clover.png": 55261,
+       "./golden_mahseer.png": 55269,
+       "./golden_pickaxe.png": 55273,
+       "./golden_shovel.png": 55282,
+       "./golden_sword.png": 55286,
+       "./goldheart_engine.png": 55288,
+       "./golem_eye.png": 55293,
+       "./golem_pickaxe.png": 55300,
+       "./gorilla_spawn_orb.png": 55306,
+       "./gorilla_spawner_block_icon.png": 55313,
+       "./graphite.png": 55315,
+       "./grass_snapper.png": 55324,
+ ... (15 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L825-L1035` → after: `L825-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L825-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L825-L1035) · [Before (L825-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L825-L1035)

```diff
-       "./green_kart.png": 55423,
-       "./green_paint_bow.png": 55429,
-       "./green_paint_bow_charging_2.png": 55435,
-       "./green_paint_bow_charging_3.png": 55438,
-       "./green_paint_bow_charging_4.png": 55441,
-       "./green_paintball.png": 55450,
-       "./green_paintball_gun.png": 55458,
-       "./green_popup_tower.png": 55467,
-       "./green_strongbed.png": 55476,
-       "./greenfin_loach.png": 55484,
-       "./grenade_launcher.png": 55489,
-       "./grey_directional_arrow.png": 55492,
-       "./hang_glider.png": 55501,
-       "./hang_glider_diamond.png": 55506,
-       "./hang_glider_gold.png": 55508,
-       "./hang_glider_iron.png": 55514,
- ... (195 more removed lines; see GitHub link above)
+       "./green_kart.png": 55425,
+       "./green_paint_bow.png": 55433,
+       "./green_paint_bow_charging_2.png": 55436,
+       "./green_paint_bow_charging_3.png": 55443,
+       "./green_paint_bow_charging_4.png": 55452,
+       "./green_paintball.png": 55458,
+       "./green_paintball_gun.png": 55465,
+       "./green_popup_tower.png": 55469,
+       "./green_strongbed.png": 55475,
+       "./greenfin_loach.png": 55483,
+       "./grenade_launcher.png": 55485,
+       "./grey_directional_arrow.png": 55491,
+       "./hang_glider.png": 55498,
+       "./hang_glider_diamond.png": 55501,
+       "./hang_glider_gold.png": 55506,
+       "./hang_glider_iron.png": 55509,
+ ... (195 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1037-L1038` → after: `L1037-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1037-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1037-L1038) · [Before (L1037-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1037-L1038)

```diff
-       "./magmasteel_axe.png": 56619,
-       "./magmasteel_blade.png": 56624,
+       "./magmasteel_axe.png": 56621,
+       "./magmasteel_blade.png": 56627,
```

#### 14. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1040-L1043` → after: `L1040-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1040-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1040-L1043) · [Before (L1040-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1040-L1043)

```diff
-       "./magmasteel_boots.png": 56633,
-       "./magmasteel_bow.png": 56638,
-       "./magmasteel_bow_charging_2.png": 56647,
-       "./magmasteel_bow_charging_3.png": 56652,
+       "./magmasteel_boots.png": 56635,
+       "./magmasteel_bow.png": 56644,
+       "./magmasteel_bow_charging_2.png": 56651,
+       "./magmasteel_bow_charging_3.png": 56658,
```

#### 15. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1045-L1047` → after: `L1045-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1045-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1045-L1047) · [Before (L1045-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1045-L1047)

```diff
-       "./magmasteel_chestplate.png": 56663,
-       "./magmasteel_club.png": 56667,
-       "./magmasteel_crossbow.png": 56673,
+       "./magmasteel_chestplate.png": 56667,
+       "./magmasteel_club.png": 56669,
+       "./magmasteel_crossbow.png": 56675,
```

#### 16. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1049-L1124` → after: `L1049-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1049-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1049-L1124) · [Before (L1049-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1049-L1124)

```diff
-       "./magmasteel_crossbow_charging_2.png": 56684,
-       "./magmasteel_crossbow_charging_3.png": 56686,
-       "./magmasteel_crossbow_charging_4.png": 56688,
-       "./magmasteel_dagger.png": 56691,
-       "./magmasteel_fragment.png": 56697,
-       "./magmasteel_gauntlets.png": 56705,
-       "./magmasteel_guard.png": 56712,
-       "./magmasteel_handle.png": 56721,
-       "./magmasteel_helmet.png": 56728,
-       "./magmasteel_hoe.png": 56733,
-       "./magmasteel_leggings.png": 56740,
-       "./magmasteel_mace.png": 56749,
-       "./magmasteel_pickaxe.png": 56758,
-       "./magmasteel_shovel.png": 56761,
-       "./magmasteel_spear.png": 56767,
-       "./magmasteel_sword.png": 56769,
- ... (60 more removed lines; see GitHub link above)
+       "./magmasteel_crossbow_charging_2.png": 56686,
+       "./magmasteel_crossbow_charging_3.png": 56694,
+       "./magmasteel_crossbow_charging_4.png": 56703,
+       "./magmasteel_dagger.png": 56710,
+       "./magmasteel_fragment.png": 56716,
+       "./magmasteel_gauntlets.png": 56719,
+       "./magmasteel_guard.png": 56725,
+       "./magmasteel_handle.png": 56734,
+       "./magmasteel_helmet.png": 56736,
+       "./magmasteel_hoe.png": 56738,
+       "./magmasteel_leggings.png": 56746,
+       "./magmasteel_mace.png": 56748,
+       "./magmasteel_pickaxe.png": 56755,
+       "./magmasteel_shovel.png": 56762,
+       "./magmasteel_spear.png": 56769,
+       "./magmasteel_sword.png": 56774,
+ ... (60 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1126-L1129` → after: `L1126-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1126-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1126-L1129) · [Before (L1126-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1126-L1129)

```diff
-       "./moonstone_handle.png": 57107,
-       "./moonstone_mace.png": 57111,
-       "./moonstone_orb.png": 57118,
-       "./moonstone_pickaxe.png": 57122,
+       "./moonstone_handle.png": 57106,
+       "./moonstone_mace.png": 57108,
+       "./moonstone_orb.png": 57117,
+       "./moonstone_pickaxe.png": 57125,
```

#### 18. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1132-L1161` → after: `L1132-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1132-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1132-L1161) · [Before (L1132-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1132-L1161)

```diff
-       "./moonstone_remote_explosive.png": 57132,
-       "./moonstone_spear.png": 57137,
-       "./moonstone_sword.png": 57142,
-       "./moonstone_trophy.png": 57151,
-       "./moonstone_whip.png": 57158,
-       "./mossback_arapaima.png": 57163,
-       "./motor.png": 57172,
-       "./mudbelly_tilapia.png": 57175,
-       "./mudline_perch.png": 57177,
-       "./murk_stingray.png": 57183,
-       "./murkborne_ray.png": 57185,
-       "./mushroom_soup.png": 57187,
-       "./mythic_rod.png": 57192,
-       "./name_tag.png": 57196,
-       "./needlefish.png": 57205,
-       "./net.png": 57210,
- ... (14 more removed lines; see GitHub link above)
+       "./moonstone_remote_explosive.png": 57133,
+       "./moonstone_spear.png": 57139,
+       "./moonstone_sword.png": 57147,
+       "./moonstone_trophy.png": 57155,
+       "./moonstone_whip.png": 57159,
+       "./mossback_arapaima.png": 57164,
+       "./motor.png": 57167,
+       "./mudbelly_tilapia.png": 57169,
+       "./mudline_perch.png": 57174,
+       "./murk_stingray.png": 57176,
+       "./murkborne_ray.png": 57179,
+       "./mushroom_soup.png": 57181,
+       "./mythic_rod.png": 57183,
+       "./name_tag.png": 57185,
+       "./needlefish.png": 57189,
+       "./net.png": 57197,
+ ... (14 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1163-L1172` → after: `L1163-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1163-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1163-L1172) · [Before (L1163-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1163-L1172)

```diff
-       "./noticeboard_wall.png": 57288,
-       "./noticeboard_wall_bottom.png": 57297,
-       "./noticeboard_wall_bottom_left.png": 57306,
-       "./noticeboard_wall_bottom_right.png": 57311,
-       "./noticeboard_wall_left.png": 57316,
-       "./noticeboard_wall_right.png": 57318,
-       "./noticeboard_wall_top.png": 57320,
-       "./noticeboard_wall_top_left.png": 57328,
-       "./noticeboard_wall_top_right.png": 57332,
-       "./nova_armour_2.png": 57339,
+       "./noticeboard_wall.png": 57284,
+       "./noticeboard_wall_bottom.png": 57288,
+       "./noticeboard_wall_bottom_left.png": 57294,
+       "./noticeboard_wall_bottom_right.png": 57303,
+       "./noticeboard_wall_left.png": 57312,
+       "./noticeboard_wall_right.png": 57314,
+       "./noticeboard_wall_top.png": 57323,
+       "./noticeboard_wall_top_left.png": 57332,
+       "./noticeboard_wall_top_right.png": 57335,
+       "./nova_armour_2.png": 57342,
```

#### 20. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1174-L1211` → after: `L1174-L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1174-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1174-L1211) · [Before (L1174-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1174-L1211)

```diff
-       "./nova_boots.png": 57356,
-       "./nova_chestplate.png": 57365,
-       "./nova_gauntlets.png": 57372,
-       "./nova_helmet.png": 57379,
-       "./nova_jet_armour_2.png": 57381,
-       "./nova_jetpack.png": 57389,
-       "./nova_leggings.png": 57392,
-       "./nova_matter.png": 57399,
-       "./nova_multitool.png": 57405,
-       "./nova_trophy.png": 57414,
-       "./nova_upgrade.png": 57416,
-       "./nova_wrench.png": 57422,
-       "./oak_boat.png": 57430,
-       "./oarfish.png": 57436,
-       "./oats.png": 57445,
-       "./obsidian_boat.png": 57448,
- ... (22 more removed lines; see GitHub link above)
+       "./nova_boots.png": 57352,
+       "./nova_chestplate.png": 57354,
+       "./nova_gauntlets.png": 57356,
+       "./nova_helmet.png": 57364,
+       "./nova_jet_armour_2.png": 57370,
+       "./nova_jetpack.png": 57372,
+       "./nova_leggings.png": 57377,
+       "./nova_matter.png": 57380,
+       "./nova_multitool.png": 57385,
+       "./nova_trophy.png": 57388,
+       "./nova_upgrade.png": 57397,
+       "./nova_wrench.png": 57400,
+       "./oak_boat.png": 57408,
+       "./oarfish.png": 57416,
+       "./oats.png": 57423,
+       "./obsidian_boat.png": 57431,
+ ... (22 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1213-L1758` → after: `L1213-L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1213-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1213-L1758) · [Before (L1213-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1213-L1758)

```diff
-       "./palm_fence_gate.png": 57576,
-       "./palm_item_pedestal.png": 57583,
-       "./palm_sapling.png": 57591,
-       "./palm_trapdoor.png": 57599,
-       "./parsnip_plant_stage0.png": 57603,
-       "./parsnip_plant_stage1.png": 57610,
-       "./parsnip_plant_stage2.png": 57612,
-       "./pear.png": 57620,
-       "./pear_door.png": 57623,
-       "./pear_fence.png": 57626,
-       "./pear_fence_gate.png": 57628,
-       "./pear_item_pedestal.png": 57637,
-       "./pear_sapling.png": 57645,
-       "./pear_trapdoor.png": 57652,
-       "./pearlescent_moonfish.png": 57660,
-       "./pebble.png": 57665,
- ... (530 more removed lines; see GitHub link above)
+       "./palm_fence_gate.png": 57578,
+       "./palm_item_pedestal.png": 57586,
+       "./palm_sapling.png": 57595,
+       "./palm_trapdoor.png": 57601,
+       "./parsnip_plant_stage0.png": 57610,
+       "./parsnip_plant_stage1.png": 57616,
+       "./parsnip_plant_stage2.png": 57618,
+       "./pear.png": 57623,
+       "./pear_door.png": 57626,
+       "./pear_fence.png": 57630,
+       "./pear_fence_gate.png": 57637,
+       "./pear_item_pedestal.png": 57639,
+       "./pear_sapling.png": 57643,
+       "./pear_trapdoor.png": 57649,
+       "./pearlescent_moonfish.png": 57652,
+       "./pebble.png": 57660,
+ ... (530 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1775` → after: `L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1775) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1775)

```diff
-     }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 51038
+     }, bS.resolve = XS, SS.exports = bS, bS.id = 51085
```

#### 23. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1777)

```diff
-   51044: (kk, Fk, Ik) => {
+   51093: (SS, HS, gS) => {
```

#### 24. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1780)

```diff
-   51053: (kk, Fk, Ik) => {
+   51100: (SS, HS, gS) => {
```

#### 25. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1783` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1783) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1783)

```diff
-   51058: (kk, Fk, Ik) => {
+   51108: (SS, HS, gS) => {
```

#### 26. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1786)

```diff
-   51067: (kk, Fk, Ik) => {
+   51117: (SS, HS, gS) => {
```

#### 27. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1789` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1789) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1789)

```diff
-   51072: (kk, Fk, Ik) => {
+   51123: (SS, HS, gS) => {
```

#### 28. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1792)

```diff
-   51075: (kk, Fk, Ik) => {
+   51125: (SS, HS, gS) => {
```

#### 29. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1795)

```diff
-   51081: (kk, Fk, Ik) => {
+   51128: (SS, HS, gS) => {
```

#### 30. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1798` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1798) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1798)

```diff
-   51089: (kk, Fk, Ik) => {
+   51136: (SS, HS, gS) => {
```

#### 31. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1801)

```diff
-   51098: (kk, Fk, Ik) => {
+   51140: (SS, HS, gS) => {
```

#### 32. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1804` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1804) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1804)

```diff
-   51100: (kk, Fk, Ik) => {
+   51148: (SS, HS, gS) => {
```

#### 33. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1807)

```diff
-   51104: (kk, Fk, Ik) => {
+   51157: (SS, HS, gS) => {
```

#### 34. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1810)

```diff
-   51112: (kk, Fk, Ik) => {
+   51160: (SS, HS, gS) => {
```

#### 35. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1813)

```diff
-   51118: (kk, Fk, Ik) => {
+   51162: (SS, HS, gS) => {
```

#### 36. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1816` → after: `L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1816) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1816)

```diff
-   51123: (kk, Fk, Ik) => {
+   51168: (SS, HS, gS) => {
```

#### 37. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1819` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1819) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1819)

```diff
-   51125: (kk, Fk, Ik) => {
+   51174: (SS, HS, gS) => {
```

#### 38. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1822)

```diff
-   51133: (kk, Fk, Ik) => {
+   51178: (SS, HS, gS) => {
```

#### 39. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1825` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1825) · [Before (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1825)

```diff
-   51136: (kk, Fk, Ik) => {
+   51181: (SS, HS, gS) => {
```

#### 40. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1828)

```diff
-   51141: (kk, Fk, Ik) => {
+   51185: (SS, HS, gS) => {
```

#### 41. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1831` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1831) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1831)

```diff
-   51145: (kk, Fk, Ik) => {
+   51192: (SS, HS, gS) => {
```

#### 42. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1834)

```diff
-   51154: (kk, Fk, Ik) => {
+   51198: (SS, HS, gS) => {
```

#### 43. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1837` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1837) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1837)

```diff
-   51162: (kk, Fk, Ik) => {
+   51206: (SS, HS, gS) => {
```

#### 44. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1840)

```diff
-   51164: (kk, Fk, Ik) => {
+   51212: (SS, HS, gS) => {
```

#### 45. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1843` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1843) · [Before (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1843)

```diff
-   51169: (kk, Fk, Ik) => {
+   51217: (SS, HS, gS) => {
```

#### 46. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1846` → after: `L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1846) · [Before (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1846)

```diff
-   51176: (kk, Fk, Ik) => {
+   51221: (SS, HS, gS) => {
```

#### 47. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1849` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1849) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1849)

```diff
-   51180: (kk, Fk, Ik) => {
+   51223: (SS, HS, gS) => {
```

#### 48. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1852` → after: `L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1852) · [Before (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1852)

```diff
-   51187: (kk, Fk, Ik) => {
+   51225: (SS, HS, gS) => {
```

#### 49. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1855` → after: `L1855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1855) · [Before (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1855)

```diff
-   51196: (kk, Fk, Ik) => {
+   51232: (SS, HS, gS) => {
```

#### 50. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1858` → after: `L1858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1858) · [Before (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1858)

```diff
-   51198: (kk, Fk, Ik) => {
+   51238: (SS, HS, gS) => {
```

#### 51. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1861)

```diff
-   51206: (kk, Fk, Ik) => {
+   51247: (SS, HS, gS) => {
```

#### 52. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1864)

```diff
-   51213: (kk, Fk, Ik) => {
+   51251: (SS, HS, gS) => {
```

#### 53. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1867` → after: `L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1867) · [Before (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1867)

```diff
-   51220: (kk, Fk, Ik) => {
+   51255: (SS, HS, gS) => {
```

#### 54. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1870` → after: `L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1870) · [Before (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1870)

```diff
-   51225: (kk, Fk, Ik) => {
+   51262: (SS, HS, gS) => {
```

#### 55. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1873)

```diff
-   51229: (kk, Fk, Ik) => {
+   51265: (SS, HS, gS) => {
```

#### 56. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1876` → after: `L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1876) · [Before (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1876)

```diff
-   51234: (kk, Fk, Ik) => {
+   51272: (SS, HS, gS) => {
```

#### 57. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1879)

```diff
-   51241: (kk, Fk, Ik) => {
+   51276: (SS, HS, gS) => {
```

#### 58. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1882)

```diff
-   51244: (kk, Fk, Ik) => {
+   51280: (SS, HS, gS) => {
```

#### 59. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1885` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1885) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1885)

```diff
-   51251: (kk, Fk, Ik) => {
+   51286: (SS, HS, gS) => {
```

#### 60. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1888)

```diff
-   51255: (kk, Fk, Ik) => {
+   51289: (SS, HS, gS) => {
```

#### 61. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1891` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1891) · [Before (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1891)

```diff
-   51257: (kk, Fk, Ik) => {
+   51297: (SS, HS, gS) => {
```

#### 62. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1894` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1894) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1894)

```diff
-   51263: (kk, Fk, Ik) => {
+   51301: (SS, HS, gS) => {
```

#### 63. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1897)

```diff
-   51270: (kk, Fk, Ik) => {
+   51303: (SS, HS, gS) => {
```

#### 64. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1900)

```diff
-   51277: (kk, Fk, Ik) => {
+   51312: (SS, HS, gS) => {
```

#### 65. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1903` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1903) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1903)

```diff
-   51281: (kk, Fk, Ik) => {
+   51317: (SS, HS, gS) => {
```

#### 66. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1906` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1906) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1906)

```diff
-   51285: (kk, Fk, Ik) => {
+   51326: (SS, HS, gS) => {
```

#### 67. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1909` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1909) · [Before (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1909)

```diff
-   51287: (kk, Fk, Ik) => {
+   51333: (SS, HS, gS) => {
```

#### 68. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1912)

```diff
-   51296: (kk, Fk, Ik) => {
+   51342: (SS, HS, gS) => {
```

#### 69. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1915` → after: `L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1915) · [Before (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1915)

```diff
-   51301: (kk, Fk, Ik) => {
+   51347: (SS, HS, gS) => {
```

#### 70. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1918)

```diff
-   51307: (kk, Fk, Ik) => {
+   51353: (SS, HS, gS) => {
```

#### 71. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1921)

```diff
-   51311: (kk, Fk, Ik) => {
+   51356: (SS, HS, gS) => {
```

#### 72. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1924` → after: `L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1924) · [Before (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1924)

```diff
-   51320: (kk, Fk, Ik) => {
+   51362: (SS, HS, gS) => {
```

#### 73. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1927)

```diff
-   51326: (kk, Fk, Ik) => {
+   51370: (SS, HS, gS) => {
```

#### 74. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1930` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1930) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1930)

```diff
-   51329: (kk, Fk, Ik) => {
+   51373: (SS, HS, gS) => {
```

#### 75. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1933` → after: `L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1933) · [Before (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1933)

```diff
-   51337: (kk, Fk, Ik) => {
+   51378: (SS, HS, gS) => {
```

#### 76. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1936` → after: `L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1936) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1936)

```diff
-   51342: (kk, Fk, Ik) => {
+   51387: (SS, HS, gS) => {
```

#### 77. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1939)

```diff
-   51344: (kk, Fk, Ik) => {
+   51389: (SS, HS, gS) => {
```

#### 78. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1942` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1942) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1942)

```diff
-   51349: (kk, Fk, Ik) => {
+   51398: (SS, HS, gS) => {
```

#### 79. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1945)

```diff
-   51352: (kk, Fk, Ik) => {
+   51406: (SS, HS, gS) => {
```

#### 80. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1948)

```diff
-   51359: (kk, Fk, Ik) => {
+   51412: (SS, HS, gS) => {
```

#### 81. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1951` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1951) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1951)

```diff
-   51367: (kk, Fk, Ik) => {
+   51421: (SS, HS, gS) => {
```

#### 82. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1954)

```diff
-   51369: (kk, Fk, Ik) => {
+   51430: (SS, HS, gS) => {
```

#### 83. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1957)

```diff
-   51377: (kk, Fk, Ik) => {
+   51438: (SS, HS, gS) => {
```

#### 84. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1960` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1960) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1960)

```diff
-   51380: (kk, Fk, Ik) => {
+   51442: (SS, HS, gS) => {
```

#### 85. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1963` → after: `L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1963) · [Before (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1963)

```diff
-   51385: (kk, Fk, Ik) => {
+   51451: (SS, HS, gS) => {
```

#### 86. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1966)

```diff
-   51391: (kk, Fk, Ik) => {
+   51458: (SS, HS, gS) => {
```

#### 87. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1969` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1969) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1969)

```diff
-   51394: (kk, Fk, Ik) => {
+   51464: (SS, HS, gS) => {
```

#### 88. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1972)

```diff
-   51402: (kk, Fk, Ik) => {
+   51471: (SS, HS, gS) => {
```

#### 89. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1975)

```diff
-   51406: (kk, Fk, Ik) => {
+   51480: (SS, HS, gS) => {
```

#### 90. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1978` → after: `L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1978) · [Before (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1978)

```diff
-   51412: (kk, Fk, Ik) => {
+   51484: (SS, HS, gS) => {
```

#### 91. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1981` → after: `L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1981) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1981)

```diff
-   51415: (kk, Fk, Ik) => {
+   51490: (SS, HS, gS) => {
```

#### 92. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1984)

```diff
-   51417: (kk, Fk, Ik) => {
+   51495: (SS, HS, gS) => {
```

#### 93. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1987)

```diff
-   51420: (kk, Fk, Ik) => {
+   51503: (SS, HS, gS) => {
```

#### 94. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1990)

```diff
-   51428: (kk, Fk, Ik) => {
+   51512: (SS, HS, gS) => {
```

#### 95. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1993` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1993) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1993)

```diff
-   51437: (kk, Fk, Ik) => {
+   51521: (SS, HS, gS) => {
```

#### 96. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1996)

```diff
-   51444: (kk, Fk, Ik) => {
+   51529: (SS, HS, gS) => {
```

#### 97. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L1999)

```diff
-   51446: (kk, Fk, Ik) => {
+   51538: (SS, HS, gS) => {
```

#### 98. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2002` → after: `L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2002) · [Before (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2002)

```diff
-   51449: (kk, Fk, Ik) => {
+   51542: (SS, HS, gS) => {
```

#### 99. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2005` → after: `L2005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2005) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2005)

```diff
-   51452: (kk, Fk, Ik) => {
+   51547: (SS, HS, gS) => {
```

#### 100. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2008` → after: `L2008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2008) · [Before (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2008)

```diff
-   51460: (kk, Fk, Ik) => {
+   51552: (SS, HS, gS) => {
```

#### 101. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2011)

```diff
-   51468: (kk, Fk, Ik) => {
+   51557: (SS, HS, gS) => {
```

#### 102. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2014` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2014) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2014)

```diff
-   51470: (kk, Fk, Ik) => {
+   51559: (SS, HS, gS) => {
```

#### 103. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2017)

```diff
-   51472: (kk, Fk, Ik) => {
+   51564: (SS, HS, gS) => {
```

#### 104. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2020` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2020) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2020)

```diff
-   51481: (kk, Fk, Ik) => {
+   51566: (SS, HS, gS) => {
```

#### 105. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2023` → after: `L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2023) · [Before (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2023)

```diff
-   51485: (kk, Fk, Ik) => {
+   51569: (SS, HS, gS) => {
```

#### 106. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2026` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2026) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2026)

```diff
-   51489: (kk, Fk, Ik) => {
+   51578: (SS, HS, gS) => {
```

#### 107. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2029)

```diff
-   51496: (kk, Fk, Ik) => {
+   51583: (SS, HS, gS) => {
```

#### 108. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2032` → after: `L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2032) · [Before (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2032)

```diff
-   51498: (kk, Fk, Ik) => {
+   51589: (SS, HS, gS) => {
```

#### 109. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2035)

```diff
-   51502: (kk, Fk, Ik) => {
+   51593: (SS, HS, gS) => {
```

#### 110. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2038` → after: `L2038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2038) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2038)

```diff
-   51510: (kk, Fk, Ik) => {
+   51596: (SS, HS, gS) => {
```

#### 111. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2041` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2041) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2041)

```diff
-   51513: (kk, Fk, Ik) => {
+   51601: (SS, HS, gS) => {
```

#### 112. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2044)

```diff
-   51520: (kk, Fk, Ik) => {
+   51607: (SS, HS, gS) => {
```

#### 113. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2047` → after: `L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2047) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2047)

```diff
-   51524: (kk, Fk, Ik) => {
+   51612: (SS, HS, gS) => {
```

#### 114. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2050)

```diff
-   51527: (kk, Fk, Ik) => {
+   51617: (SS, HS, gS) => {
```

#### 115. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2053` → after: `L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2053) · [Before (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2053)

```diff
-   51534: (kk, Fk, Ik) => {
+   51626: (SS, HS, gS) => {
```

#### 116. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2056)

```diff
-   51542: (kk, Fk, Ik) => {
+   51630: (SS, HS, gS) => {
```

#### 117. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2059` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2059) · [Before (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2059)

```diff
-   51550: (kk, Fk, Ik) => {
+   51633: (SS, HS, gS) => {
```

#### 118. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2062` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2062) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2062)

```diff
-   51559: (kk, Fk, Ik) => {
+   51640: (SS, HS, gS) => {
```

#### 119. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2065)

```diff
-   51561: (kk, Fk, Ik) => {
+   51648: (SS, HS, gS) => {
```

#### 120. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2068` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2068) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2068)

```diff
-   51568: (kk, Fk, Ik) => {
+   51657: (SS, HS, gS) => {
```

#### 121. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2071` → after: `L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2071) · [Before (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2071)

```diff
-   51576: (kk, Fk, Ik) => {
+   51666: (SS, HS, gS) => {
```

#### 122. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2074)

```diff
-   51580: (kk, Fk, Ik) => {
+   51669: (SS, HS, gS) => {
```

#### 123. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2077)

```diff
-   51588: (kk, Fk, Ik) => {
+   51678: (SS, HS, gS) => {
```

#### 124. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2080` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2080) · [Before (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2080)

```diff
-   51591: (kk, Fk, Ik) => {
+   51680: (SS, HS, gS) => {
```

#### 125. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2083` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2083) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2083)

```diff
-   51595: (kk, Fk, Ik) => {
+   51683: (SS, HS, gS) => {
```

#### 126. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2086)

```diff
-   51602: (kk, Fk, Ik) => {
+   51691: (SS, HS, gS) => {
```

#### 127. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2089` → after: `L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2089) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2089)

```diff
-   51607: (kk, Fk, Ik) => {
+   51694: (SS, HS, gS) => {
```

#### 128. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2092` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2092) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2092)

```diff
-   51614: (kk, Fk, Ik) => {
+   51703: (SS, HS, gS) => {
```

#### 129. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2095` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2095) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2095)

```diff
-   51617: (kk, Fk, Ik) => {
+   51709: (SS, HS, gS) => {
```

#### 130. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2098` → after: `L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2098) · [Before (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2098)

```diff
-   51625: (kk, Fk, Ik) => {
+   51717: (SS, HS, gS) => {
```

#### 131. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2101` → after: `L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2101) · [Before (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2101)

```diff
-   51630: (kk, Fk, Ik) => {
+   51722: (SS, HS, gS) => {
```

#### 132. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2104` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2104) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2104)

```diff
-   51637: (kk, Fk, Ik) => {
+   51730: (SS, HS, gS) => {
```

#### 133. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2107)

```diff
-   51644: (kk, Fk, Ik) => {
+   51739: (SS, HS, gS) => {
```

#### 134. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2110` → after: `L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2110) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2110)

```diff
-   51646: (kk, Fk, Ik) => {
+   51743: (SS, HS, gS) => {
```

#### 135. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2113)

```diff
-   51654: (kk, Fk, Ik) => {
+   51750: (SS, HS, gS) => {
```

#### 136. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2116` → after: `L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2116) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2116)

```diff
-   51656: (kk, Fk, Ik) => {
+   51754: (SS, HS, gS) => {
```

#### 137. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2119)

```diff
-   51662: (kk, Fk, Ik) => {
+   51760: (SS, HS, gS) => {
```

#### 138. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2122` → after: `L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2122) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2122)

```diff
-   51664: (kk, Fk, Ik) => {
+   51766: (SS, HS, gS) => {
```

#### 139. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2125)

```diff
-   51671: (kk, Fk, Ik) => {
+   51771: (SS, HS, gS) => {
```

#### 140. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2128` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2128) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2128)

```diff
-   51676: (kk, Fk, Ik) => {
+   51775: (SS, HS, gS) => {
```

#### 141. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2131` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2131) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2131)

```diff
-   51681: (kk, Fk, Ik) => {
+   51779: (SS, HS, gS) => {
```

#### 142. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2134)

```diff
-   51684: (kk, Fk, Ik) => {
+   51786: (SS, HS, gS) => {
```

#### 143. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2137)

```diff
-   51693: (kk, Fk, Ik) => {
+   51788: (SS, HS, gS) => {
```

#### 144. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2140` → after: `L2140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2140) · [Before (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2140)

```diff
-   51700: (kk, Fk, Ik) => {
+   51794: (SS, HS, gS) => {
```

#### 145. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2143` → after: `L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2143) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2143)

```diff
-   51709: (kk, Fk, Ik) => {
+   51803: (SS, HS, gS) => {
```

#### 146. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2146)

```diff
-   51711: (kk, Fk, Ik) => {
+   51808: (SS, HS, gS) => {
```

#### 147. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2149` → after: `L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2149) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2149)

```diff
-   51720: (kk, Fk, Ik) => {
+   51814: (SS, HS, gS) => {
```

#### 148. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2152)

```diff
-   51725: (kk, Fk, Ik) => {
+   51822: (SS, HS, gS) => {
```

#### 149. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2155` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2155) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2155)

```diff
-   51727: (kk, Fk, Ik) => {
+   51824: (SS, HS, gS) => {
```

#### 150. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2158)

```diff
-   51735: (kk, Fk, Ik) => {
+   51829: (SS, HS, gS) => {
```

#### 151. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2161` → after: `L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2161) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2161)

```diff
-   51742: (kk, Fk, Ik) => {
+   51834: (SS, HS, gS) => {
```

#### 152. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2164)

```diff
-   51744: (kk, Fk, Ik) => {
+   51837: (SS, HS, gS) => {
```

#### 153. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2167)

```diff
-   51747: (kk, Fk, Ik) => {
+   51841: (SS, HS, gS) => {
```

#### 154. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2170` → after: `L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2170) · [Before (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2170)

```diff
-   51750: (kk, Fk, Ik) => {
+   51850: (SS, HS, gS) => {
```

#### 155. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2173` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2173) · [Before (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2173)

```diff
-   51756: (kk, Fk, Ik) => {
+   51856: (SS, HS, gS) => {
```

#### 156. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2176` → after: `L2176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2176) · [Before (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2176)

```diff
-   51765: (kk, Fk, Ik) => {
+   51863: (SS, HS, gS) => {
```

#### 157. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2179` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2179) · [Before (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2179)

```diff
-   51774: (kk, Fk, Ik) => {
+   51865: (SS, HS, gS) => {
```

#### 158. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2182` → after: `L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2182) · [Before (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2182)

```diff
-   51783: (kk, Fk, Ik) => {
+   51873: (SS, HS, gS) => {
```

#### 159. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2185)

```diff
-   51785: (kk, Fk, Ik) => {
+   51881: (SS, HS, gS) => {
```

#### 160. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2188)

```diff
-   51789: (kk, Fk, Ik) => {
+   51888: (SS, HS, gS) => {
```

#### 161. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2191)

```diff
-   51797: (kk, Fk, Ik) => {
+   51894: (SS, HS, gS) => {
```

#### 162. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2194` → after: `L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2194) · [Before (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2194)

```diff
-   51799: (kk, Fk, Ik) => {
+   51902: (SS, HS, gS) => {
```

#### 163. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2197` → after: `L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2197) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2197)

```diff
-   51801: (kk, Fk, Ik) => {
+   51904: (SS, HS, gS) => {
```

#### 164. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2200)

```diff
-   51807: (kk, Fk, Ik) => {
+   51912: (SS, HS, gS) => {
```

#### 165. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2203)

```diff
-   51809: (kk, Fk, Ik) => {
+   51918: (SS, HS, gS) => {
```

#### 166. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2206` → after: `L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2206) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2206)

```diff
-   51814: (kk, Fk, Ik) => {
+   51927: (SS, HS, gS) => {
```

#### 167. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2209)

```diff
-   51820: (kk, Fk, Ik) => {
+   51931: (SS, HS, gS) => {
```

#### 168. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2212` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2212) · [Before (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2212)

```diff
-   51829: (kk, Fk, Ik) => {
+   51935: (SS, HS, gS) => {
```

#### 169. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2215` → after: `L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2215) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2215)

```diff
-   51833: (kk, Fk, Ik) => {
+   51937: (SS, HS, gS) => {
```

#### 170. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2218` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2218) · [Before (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2218)

```diff
-   51841: (kk, Fk, Ik) => {
+   51939: (SS, HS, gS) => {
```

#### 171. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2221` → after: `L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2221) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2221)

```diff
-   51849: (kk, Fk, Ik) => {
+   51943: (SS, HS, gS) => {
```

#### 172. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2224)

```diff
-   51852: (kk, Fk, Ik) => {
+   51945: (SS, HS, gS) => {
```

#### 173. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2227` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2227) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2227)

```diff
-   51861: (kk, Fk, Ik) => {
+   51954: (SS, HS, gS) => {
```

#### 174. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2230` → after: `L2230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2230) · [Before (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2230)

```diff
-   51870: (kk, Fk, Ik) => {
+   51959: (SS, HS, gS) => {
```

#### 175. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2233` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2233) · [Before (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2233)

```diff
-   51875: (kk, Fk, Ik) => {
+   51963: (SS, HS, gS) => {
```

#### 176. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2236)

```diff
-   51884: (kk, Fk, Ik) => {
+   51972: (SS, HS, gS) => {
```

#### 177. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2239)

```diff
-   51886: (kk, Fk, Ik) => {
+   51979: (SS, HS, gS) => {
```

#### 178. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2242` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2242) · [Before (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2242)

```diff
-   51893: (kk, Fk, Ik) => {
+   51985: (SS, HS, gS) => {
```

#### 179. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2245` → after: `L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2245) · [Before (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2245)

```diff
-   51900: (kk, Fk, Ik) => {
+   51990: (SS, HS, gS) => {
```

#### 180. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2248` → after: `L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2248) · [Before (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2248)

```diff
-   51902: (kk, Fk, Ik) => {
+   51993: (SS, HS, gS) => {
```

#### 181. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2251` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2251) · [Before (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2251)

```diff
-   51908: (kk, Fk, Ik) => {
+   51997: (SS, HS, gS) => {
```

#### 182. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2254` → after: `L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2254) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2254)

```diff
-   51912: (kk, Fk, Ik) => {
+   52001: (SS, HS, gS) => {
```

#### 183. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2257)

```diff
-   51919: (kk, Fk, Ik) => {
+   52010: (SS, HS, gS) => {
```

#### 184. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2260` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2260) · [Before (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2260)

```diff
-   51928: (kk, Fk, Ik) => {
+   52019: (SS, HS, gS) => {
```

#### 185. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2263)

```diff
-   51933: (kk, Fk, Ik) => {
+   52022: (SS, HS, gS) => {
```

#### 186. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2266` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/itemSprites.js#L2266) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/itemSprites.js#L2266)

```diff
-   51939: (kk, Fk, Ik) => {
+   52025: (SS, HS, gS) => {
```
