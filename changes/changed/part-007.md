# Changed — Bundle Modifications Report (Part 007 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `7 / 154` (**382** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/104.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/104.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9)

#### 35. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L647` → after: `L647-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L647-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L647-L668) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L647)

```diff
-   42185: (WW, iW, OW) => {
+   42194: (RR, JR, GR) => {
+     GR.d(JR, {
+       c: () => ZR,
+       g: () => uR,
+       h: () => tR
+     });
+     let yR = null;
+ 
+     function tR(RR) {
+       yR = RR
+     }
+ 
+     function uR(RR) {
+       yR === RR && (yR = null)
+     }
+ 
+ ... (6 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L653-L675` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L674-L675) · [Before (L653-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L653-L675)

```diff
-     let mW = null;
- 
-     function EW(WW) {
-       mW = WW
-     }
- 
-     function NW(WW) {
-       mW === WW && (mW = null)
-     }
- 
-     function PW() {
-       var WW;
-       null === (WW = mW) || void 0 === WW || WW()
-     }
-   },
-   5575: (WW, iW, OW) => {
- ... (7 more removed lines; see GitHub link above)
+     var yR = GR(3428),
+       tR = GR(3437);
```

#### 37. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L686` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L686) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L686)

```diff
-           EW !== iW && (iW = EW, WW(mW.k.UiCapture, mW.y.Keyboard, 0, 0, EW ? mW.y.Keyboard : 0))
+           tR !== JR && (JR = tR, RR(yR.j.UiCapture, yR.C.Keyboard, 0, 0, tR ? yR.C.Keyboard : 0))
```

#### 38. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L710)

```diff
-       cW.set(mW, (null !== (OW = cW.get(mW)) && void 0 !== OW ? OW : 0) & ~WW | iW & WW);
+       iR.set(yR, (null !== (GR = iR.get(yR)) && void 0 !== GR ? GR : 0) & ~RR | JR & RR);
```

#### 39. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L713)

```diff
-       return (0, EW.z)(WW, NW & WW)
+       return (0, tR.H)(RR, uR & RR)
```

#### 40. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L716)

```diff
-   38097: (WW, iW, OW) => {
+   38040: (RR, JR, GR) => {
```

#### 41. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L735-L736` → after: `L735-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L735-L736) · [Before (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L735-L736)

```diff
-       j: () => NW,
-       l: () => EW
+       h: () => uR,
+       k: () => tR
```

#### 42. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L739` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L739) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L739)

```diff
-   38088: (WW, iW, OW) => {
+   38034: (RR, JR, GR) => {
```

#### 43. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L743-L744` → after: `L743-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L743-L744) · [Before (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L743-L744)

```diff
-     var mW = OW(38097),
-       EW = OW(5725);
+     var yR = GR(38040),
+       tR = GR(5844);
```

#### 44. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L749` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L749) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L749)

```diff
-     for (const tW of Object.keys(EW.p))(0, mW.f)(tW) ? NW.push(tW) : (0, mW.l)(tW) && PW.push(tW), (0, mW.j)(tW) && LW.push(tW), (tW.includes(" Bed Head") || tW.includes(" Strongbed Head")) && cW.push(tW);
+     for (const VR of Object.keys(tR.q))(0, yR.f)(VR) ? uR.push(VR) : (0, yR.k)(VR) && ZR.push(VR), (0, yR.h)(VR) && qR.push(VR), (VR.includes(" Bed Head") || VR.includes(" Strongbed Head")) && iR.push(VR);
```

#### 45. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L759)

```diff
-   7453: (WW, iW, OW) => {
+   7588: (RR, JR, GR) => {
```

#### 46. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L765-L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/104.js#L767) · [Before (L765-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/104.js#L765-L767)

```diff
-       m: () => wW,
-       p: () => mW,
-       s: () => LW
+       n: () => qR
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/105.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/105.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8)

#### 1. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L4)

```diff
-   5551: (WW, iW, OW) => {
+   5685: (RR, JR, GR) => {
```

#### 2. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L6)

```diff
-       $b: () => qW,
+       Ab: () => OR,
```

#### 3. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L14-L16` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L14-L17) · [Before (L14-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L14-L16)

```diff
-       Jb: () => vW,
-       K: () => mW,
-       M: () => NW,
+       Ib: () => HR,
+       Kb: () => PR,
+       L: () => uR,
+       Mb: () => oR,
```

#### 4. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L18-L22` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L19-L20) · [Before (L18-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L18-L22)

```diff
-       Nb: () => VW,
-       Ob: () => gW,
-       Qb: () => jW,
-       R: () => FW,
-       Rb: () => HW,
+       Pb: () => LR,
+       Q: () => sR,
```

#### 5. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L25-L26` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L24) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L25-L26)

```diff
-       Ub: () => hW,
-       V: () => tW,
+       Wb: () => gR,
```

#### 6. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L30-L32` → after: `L28-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L28-L30) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L30-L32)

```diff
-       c: () => kW,
-       cb: () => cW,
-       dc: () => pW,
+       ac: () => dR,
+       b: () => UR,
+       bc: () => IR,
```

#### 7. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L34-L36` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L32-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L34-L36)

```diff
-       gb: () => bW,
-       gc: () => CW,
-       h: () => rW,
+       eb: () => CR,
+       ec: () => zR,
+       hb: () => iR,
+       hc: () => SR,
+       i: () => FR,
```

#### 8. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L38-L40` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L38) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L38-L40)

```diff
-       k: () => sW,
-       kb: () => AW,
-       kc: () => TW,
+       lb: () => aR,
```

#### 9. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L44-L47` → after: `L43-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L43-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L43-L47) · [Before (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L44-L47)

```diff
-       o: () => aW,
-       pb: () => oW,
-       q: () => lW,
-       rc: () => EW,
+       oc: () => tR,
+       p: () => QR,
+       qb: () => vR,
+       sc: () => TR,
+       t: () => rR,
```

#### 10. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L50-L52` → after: `L50-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L50-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L50-L52) · [Before (L50-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L50-L52)

```diff
-       uc: () => zW,
-       x: () => IW,
-       xb: () => uW,
+       v: () => kR,
+       w: () => MR,
+       wb: () => NR,
```

#### 11. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L582)

```diff
-   5546: (WW, iW, OW) => {
+   5676: (RR, JR, GR) => {
```

#### 12. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L584-L586` → after: `L584-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L584-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L584-L587) · [Before (L584-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L584-L586)

```diff
-       $d: () => GW,
-       A: () => bi,
-       Ac: () => mW.pb,
+       $b: () => XR,
+       Ab: () => JJ,
+       Ae: () => eR,
+       B: () => vR,
```

#### 13. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L588` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L589) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L588)

```diff
-       Be: () => AW,
+       Bd: () => uR,
```

#### 14. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L590-L592` → after: `L591-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L591-L592) · [Before (L590-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L590-L592)

```diff
-       Cd: () => mW.kc,
-       D: () => mW.o,
-       Dc: () => mW.tb,
+       Db: () => yR.T,
+       Dc: () => yR.Ab,
```

#### 15. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L594-L608` → after: `L594-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L594-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L594-L607) · [Before (L594-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L594-L608)

```diff
-       Eb: () => mW.U,
-       Ed: () => mW.lc,
-       G: () => mW.q,
-       Hb: () => EW.h,
-       Hc: () => mW.xb,
-       Ic: () => mW.Bb,
-       Id: () => mW.rc,
-       Jd: () => NW,
-       K: () => Wi,
-       Kd: () => UW,
-       Lb: () => TW,
-       Lc: () => mW.Hb,
-       Ld: () => ti,
-       M: () => mW.u,
-       Mb: () => VW,
+       Fb: () => GJ,
+       Fd: () => nR,
+       Gb: () => tJ,
+       H: () => aJ,
+       Hc: () => yR.Bb,
+       Hd: () => VJ,
+       Id: () => mR,
+       J: () => sR,
+       Jb: () => yR.U,
+       K: () => yR.p,
+       Kb: () => tR.f,
+       Kc: () => yR.Hb,
+       L: () => fR,
+       M: () => yR.t,
```

#### 16. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L614-L623` → after: `L614-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L614-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L614-L623) · [Before (L614-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L614-L623)

```diff
-       Q: () => mW.C,
-       Qb: () => uW,
-       S: () => mW.D,
-       Sc: () => xi,
-       Sd: () => RW,
-       Tc: () => Pi,
-       Ub: () => HW,
-       Uc: () => mW.Jb,
-       V: () => mW.H,
-       Wb: () => mW.ab,
+       Qc: () => ZJ,
+       R: () => yR.u,
+       Rb: () => PR,
+       Rd: () => ER,
+       T: () => FR,
+       Uc: () => yR.Ib,
+       Vb: () => OR,
+       Vc: () => yR.Kb,
+       Wc: () => yR.Mb,
+       X: () => yR.z,
```

#### 17. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L625-L628` → after: `L625-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L625-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L625-L629) · [Before (L625-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L625-L628)

```diff
-       Y: () => ZW,
-       Yc: () => mW.Nb,
-       Z: () => sW,
-       _: () => mW.K,
+       Yb: () => bR,
+       Yc: () => hR,
+       Yd: () => kR,
+       Zb: () => yR.eb,
+       _: () => yR.C,
```

#### 18. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L630-L634` → after: `L631-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L631-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L631-L633) · [Before (L630-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L630-L634)

```diff
-       _d: () => IW,
-       ab: () => mW.M,
-       ad: () => mW.Ob,
-       b: () => mi,
-       bb: () => CW,
+       ab: () => yR.E,
+       ad: () => yR.Tb,
+       ae: () => YR,
```

#### 19. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L636-L638` → after: `L635-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L635-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L635-L637) · [Before (L636-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L636-L638)

```diff
-       be: () => wi,
-       cd: () => QW,
-       db: () => Li,
+       cb: () => KR,
+       cd: () => yR.Wb,
+       dd: () => yR.Yb,
```

#### 20. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L641-L642` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L640) · [Before (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L641-L642)

```diff
-       fc: () => ci,
-       fd: () => mW.Rb,
+       ec: () => AR,
```

#### 21. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L645` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L643) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L645)

```diff
-       gd: () => mW.Ub,
+       gd: () => yR.bc,
```

#### 22. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L647-L651` → after: `L645-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L645-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L645-L649) · [Before (L647-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L647-L651)

```diff
-       h: () => bW,
-       hb: () => mW.N,
-       hc: () => li,
-       ib: () => qW,
-       j: () => Zi,
+       i: () => LR,
+       ie: () => CR,
+       jb: () => yR.H,
+       jc: () => tR.m,
+       jd: () => yR.ec,
```

#### 23. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L654-L657` → after: `L652-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L652-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L652-L656) · [Before (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L654-L657)

```diff
-       kd: () => mW.Yb,
-       lc: () => EW.n,
-       ld: () => mW.dc,
-       mb: () => ii,
+       kb: () => yR.L,
+       ke: () => oR,
+       ld: () => yR.hc,
+       mc: () => UR,
+       md: () => wR,
```

#### 24. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L659-L661` → after: `L658-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L658-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L658-L660) · [Before (L659-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L659-L661)

```diff
-       n: () => yW,
-       ne: () => vW,
-       o: () => mW.h,
+       nb: () => zR,
+       o: () => KJ,
+       ob: () => qJ,
```

#### 25. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L663-L665` → after: `L662-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L662-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L662-L664) · [Before (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L663-L665)

```diff
-       pd: () => mW.gc,
-       qb: () => zW,
-       r: () => Ai,
+       pd: () => gR,
+       q: () => pR,
+       qe: () => DR,
```

#### 26. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L667-L670` → after: `L666-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L666-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L666-L668) · [Before (L667-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L667-L670)

```diff
-       tb: () => mW.T,
-       tc: () => Ni,
-       td: () => mW.ic,
-       te: () => cW,
+       sb: () => VR,
+       sc: () => yR.qb,
+       sd: () => yR.ic,
```

#### 27. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L672-L677` → after: `L670-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L670-L676) · [Before (L672-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L672-L677)

```diff
-       v: () => PW,
-       vd: () => xW,
-       wc: () => mW.nb,
-       x: () => dW,
-       xb: () => Oi,
-       xe: () => DW,
+       vc: () => yR.tb,
+       vd: () => yR.lc,
+       ve: () => cR,
+       w: () => yR.i,
+       wb: () => yR.N,
+       y: () => eJ,
+       yb: () => dR,
```

#### 28. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L679` → after: `L678-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L678-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L678-L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L679)

```diff
-       zd: () => hW
+       zc: () => yR.wb,
+       zd: () => yR.oc
```

#### 29. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L681-L683` → after: `L681-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L681-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L681-L683) · [Before (L681-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L681-L683)

```diff
-     var mW = OW(5551),
-       EW = OW(3305);
-     const NW = Math.round(1e3 / mW.rc),
+     var yR = GR(5685),
+       tR = GR(3428);
+     const uR = Math.round(1e3 / yR.oc),
```

#### 30. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L932` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L932)

```diff
-       for (const [iW, OW] of Object.entries(mW.o))
+       for (const [JR, GR] of Object.entries(yR.p))
```

#### 31. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L934)

```diff
-       return `Unknown${WW}`
+       return `Unknown${RR}`
```

#### 32. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L939-L947` → after: `L939-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L939-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L939-L947) · [Before (L939-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L939-L947)

```diff
-         status: WW[mW.M.Status],
-         lastError: WW[mW.M.LastError],
-         lastErrorDetail: WW[mW.M.LastErrorDetail],
-         errorCount: WW[mW.M.ErrorCount],
-         frameIndex: WW[mW.M.FrameIndex],
-         tickIndex: WW[mW.M.TickIndex],
-         renderPending: WW[mW.M.RenderPending],
-         firstView: WW[mW.M.FirstView],
-         chunksCancelled: WW[mW.M.ChunksCancelled]
+         status: RR[yR.L.Status],
+         lastError: RR[yR.L.LastError],
+         lastErrorDetail: RR[yR.L.LastErrorDetail],
+         errorCount: RR[yR.L.ErrorCount],
+         frameIndex: RR[yR.L.FrameIndex],
+         tickIndex: RR[yR.L.TickIndex],
+         renderPending: RR[yR.L.RenderPending],
+         firstView: RR[yR.L.FirstView],
+         chunksCancelled: RR[yR.L.ChunksCancelled]
```

#### 33. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L951` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L951) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L951)

```diff
-   5540: (WW, iW, OW) => {
+   5671: (RR, JR, GR) => {
```

#### 34. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L953-L955` → after: `L953-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L953-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L953-L955) · [Before (L953-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L953-L955)

```diff
-       b: () => PW,
-       f: () => NW,
-       g: () => EW
+       c: () => ZR,
+       e: () => uR,
+       f: () => tR
```

#### 35. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L957` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L957) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L957)

```diff
-     var mW = OW(5546);
+     var yR = GR(5676);
```

#### 36. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L966` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L966) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L966)

```diff
-         case mW.V.Drawn:
+         case yR.ab.Drawn:
```

#### 37. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/105.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/105.js#L968)

```diff
-         case mW.V.Paced:
+         case yR.ab.Paced:
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/106.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/106.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e)

#### 1. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L4)

```diff
-   5551: (WW, iW, OW) => {
+   5685: (RR, JR, GR) => {
```

#### 2. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L6)

```diff
-       $b: () => qW,
+       Ab: () => OR,
```

#### 3. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14-L16` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L14-L17) · [Before (L14-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L14-L16)

```diff
-       Jb: () => vW,
-       K: () => mW,
-       M: () => NW,
+       Ib: () => HR,
+       Kb: () => PR,
+       L: () => uR,
+       Mb: () => oR,
```

#### 4. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L18-L22` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L19-L20) · [Before (L18-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L18-L22)

```diff
-       Nb: () => VW,
-       Ob: () => gW,
-       Qb: () => jW,
-       R: () => FW,
-       Rb: () => HW,
+       Pb: () => LR,
+       Q: () => sR,
```

#### 5. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25-L26` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L24) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L25-L26)

```diff
-       Ub: () => hW,
-       V: () => tW,
+       Wb: () => gR,
```

#### 6. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L30-L32` → after: `L28-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L28-L30) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L30-L32)

```diff
-       c: () => kW,
-       cb: () => cW,
-       dc: () => pW,
+       ac: () => dR,
+       b: () => UR,
+       bc: () => IR,
```

#### 7. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L34-L36` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L32-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L34-L36)

```diff
-       gb: () => bW,
-       gc: () => CW,
-       h: () => rW,
+       eb: () => CR,
+       ec: () => zR,
+       hb: () => iR,
+       hc: () => SR,
+       i: () => FR,
```

#### 8. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L38-L40` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L38) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L38-L40)

```diff
-       k: () => sW,
-       kb: () => AW,
-       kc: () => TW,
+       lb: () => aR,
```

#### 9. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L44-L47` → after: `L43-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L43-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L43-L47) · [Before (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L44-L47)

```diff
-       o: () => aW,
-       pb: () => oW,
-       q: () => lW,
-       rc: () => EW,
+       oc: () => tR,
+       p: () => QR,
+       qb: () => vR,
+       sc: () => TR,
+       t: () => rR,
```

#### 10. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L50-L52` → after: `L50-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L50-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/106.js#L50-L52) · [Before (L50-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/106.js#L50-L52)

```diff
-       uc: () => zW,
-       x: () => IW,
-       xb: () => uW,
+       v: () => kR,
+       w: () => MR,
+       wb: () => NR,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (965 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 1. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L4)

```diff
-   53658: (WW, iW, OW) => {
+   53499: (RR, JR, GR) => {
```

#### 2. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L12)

```diff
-       }] = await Promise.all([Promise.resolve().then((() => OW(1185))), Promise.resolve().then((() => OW(1111))), Promise.resolve().then((() => OW(2037)))]), PW = NW.latest("connectedGame").websocketUrl;
+       }] = await Promise.all([Promise.resolve().then((() => GR(1282))), Promise.resolve().then((() => GR(1201))), Promise.resolve().then((() => GR(2134)))]), ZR = uR.latest("connectedGame").websocketUrl;
```

#### 3. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L14)

```diff
-       const LW = `${mW.getHttpUrlFromWebSocketUrl(PW)}${WW}`;
+       const qR = `${yR.getHttpUrlFromWebSocketUrl(ZR)}${RR}`;
```

#### 4. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L23)

```diff
-   7532: (WW, iW, OW) => {
+   7668: (RR, JR, GR) => {
```

#### 5. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L25)

```diff
-       d: () => EW
+       e: () => tR
```

#### 6. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L27)

```diff
-     var mW = OW(1283);
+     var yR = GR(1378);
```

#### 7. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L46)

```diff
-   53655: (WW, iW, OW) => {
+   53497: (RR, JR, GR) => {
```

#### 8. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L51-L52)

```diff
-     var mW = OW(62),
-       EW = OW(1089),
+     var yR = GR(66),
+       tR = GR(1163),
```

#### 9. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L54)

```diff
-       PW = OW(1283);
+       ZR = GR(1378);
```

#### 10. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L67)

```diff
-       const [xW, lW] = (0, mW.useState)(cW), AW = null !== wW && void 0 !== wW ? wW : xW;
+       const [wR, rR] = (0, yR.useState)(iR), eR = null !== fR && void 0 !== fR ? fR : wR;
```

#### 11. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L87-L98` → after: `L87-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L87-L98) · [Before (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L87-L98)

```diff
-     var cW = OW(2037),
-       wW = OW(7473),
-       tW = OW(1532),
-       ZW = OW(38041),
-       xW = OW(1391),
-       lW = OW(5488),
-       AW = OW(38026),
-       bW = OW(38060),
-       jW = OW(1685),
-       UW = OW(5582),
-       kW = OW(7463);
-     const sW = new URL(jW.d).host;
+     var iR = GR(2134),
+       fR = GR(7608),
+       VR = GR(1590),
+       KR = GR(38002),
+       wR = GR(1468),
+       rR = GR(5637),
+       eR = GR(37992),
+       aR = GR(38016),
+       LR = GR(1746),
+       nR = GR(5707),
+       UR = GR(7599);
+     const WR = new URL(LR.c).host;
```

#### 12. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L104-L106` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L104-L106) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L104-L106)

```diff
-         const WW = /^docs\//i.test(iW) ? `${jW.d}/` : `${jW.d}/docs/`,
-           mW = iW.toLowerCase().replace(/^www\./, "").startsWith(`${sW}/`);
-         OW = new URL(mW ? `https://${iW}` : iW, WW)
+         const RR = /^docs\//i.test(JR) ? `${LR.c}/` : `${LR.c}/docs/`,
+           yR = JR.toLowerCase().replace(/^www\./, "").startsWith(`${WR}/`);
+         GR = new URL(yR ? `https://${JR}` : JR, RR)
```

#### 13. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L110)

```diff
-       if ("https:" !== OW.protocol && "http:" !== OW.protocol || OW.host !== sW && OW.host !== `www.${sW}`) return null;
+       if ("https:" !== GR.protocol && "http:" !== GR.protocol || GR.host !== WR && GR.host !== `www.${WR}`) return null;
```

#### 14. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L112)

```diff
-       return KW(mW) || null !== (0, UW.I)(mW) ? mW : (0, UW.G)(mW)
+       return CR(yR) || null !== (0, nR.t)(yR) ? yR : (0, nR.s)(yR)
```

#### 15. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L116)

```diff
-       return WW === UW.k || WW === UW.s
+       return RR === nR.i || RR === nR.m
```

#### 16. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L121)

```diff
-       return null === iW ? WW : `${jW.d}${iW}`
+       return null === JR ? RR : `${LR.c}${JR}`
```

#### 17. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L123-L124` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L123-L124) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L123-L124)

```diff
-     var YW = OW(192),
-       yW = OW(53597),
+     var MR = GR(216),
+       BR = GR(53420),
```

#### 18. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L191)

```diff
-         const OW = /\w/.test(iW[0]) && /\w/.test(null !== (cW = WW[LW - 1]) && void 0 !== cW ? cW : "") || /\w/.test(null !== (wW = iW.at(-1)) && void 0 !== wW ? wW : "") && /\w/.test(null !== (tW = WW[LW + iW.length]) && void 0 !== tW ? tW : "");
+         const GR = /\w/.test(JR[0]) && /\w/.test(null !== (iR = RR[qR - 1]) && void 0 !== iR ? iR : "") || /\w/.test(null !== (fR = JR.at(-1)) && void 0 !== fR ? fR : "") && /\w/.test(null !== (VR = RR[qR + JR.length]) && void 0 !== VR ? VR : "");
```

#### 19. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L209)

```diff
-       return null !== (iW = null === (OW = /^[ \t]*/.exec(WW)) || void 0 === OW ? void 0 : OW[0]) && void 0 !== iW ? iW : ""
+       return null !== (JR = null === (GR = /^[ \t]*/.exec(RR)) || void 0 === GR ? void 0 : GR[0]) && void 0 !== JR ? JR : ""
```

#### 20. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L228)

```diff
-         return (null !== (OW = null === (mW = WW.replace(/\\`/g, "").match(/`/g)) || void 0 === mW ? void 0 : mW.length) && void 0 !== OW ? OW : 0) % 2 === 1 && (ZW = !ZW), EW || cW && iW !== tW ? WW : function(WW, iW, OW) {
+         return (null !== (GR = null === (yR = RR.replace(/\\`/g, "").match(/`/g)) || void 0 === yR ? void 0 : yR.length) && void 0 !== GR ? GR : 0) % 2 === 1 && (KR = !KR), tR || iR && JR !== VR ? RR : function(RR, JR, GR) {
```

#### 21. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L249)

```diff
-         (null !== (PW = null === (LW = WW.replace(/\\`/g, "").match(/`/g)) || void 0 === LW ? void 0 : LW.length) && void 0 !== PW ? PW : 0) % 2 === 1 && (NW = !NW);
+         (null !== (ZR = null === (qR = RR.replace(/\\`/g, "").match(/`/g)) || void 0 === qR ? void 0 : qR.length) && void 0 !== ZR ? ZR : 0) % 2 === 1 && (uR = !uR);
```

#### 22. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L253-L254)

```diff
-         const xW = null !== (cW = EW.slice(iW + 1).find((WW => "" !== WW.trim()))) && void 0 !== cW ? cW : OW;
-         return /^(?:[([`+-]|\/(?![/*]))/.test(xW.trim()) ? WW : WW.slice(0, WW.length - WW.trimStart().length) + ZW
+         const wR = null !== (iR = tR.slice(JR + 1).find((RR => "" !== RR.trim()))) && void 0 !== iR ? iR : GR;
+         return /^(?:[([`+-]|\/(?![/*]))/.test(wR.trim()) ? RR : RR.slice(0, RR.length - RR.trimStart().length) + KR
```

#### 23. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L256)

```diff
-       return PW.trim() === WW.trim() && iW.trim() !== WW.trim() ? iW : PW
+       return ZR.trim() === RR.trim() && JR.trim() !== RR.trim() ? JR : ZR
```

#### 24. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L261)

```diff
-       return null !== (iW = WW.split("\n").find((WW => "" !== WW.trim()))) && void 0 !== iW ? iW : ""
+       return null !== (JR = RR.split("\n").find((RR => "" !== RR.trim()))) && void 0 !== JR ? JR : ""
```

#### 25. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L268)

```diff
-         OW.set(PW, (null !== (mW = OW.get(PW)) && void 0 !== mW ? mW : 0) + 1)
+         GR.set(ZR, (null !== (yR = GR.get(ZR)) && void 0 !== yR ? yR : 0) + 1)
```

#### 26. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L273)

```diff
-         const WW = null !== (NW = OW.get(PW)) && void 0 !== NW ? NW : 0;
+         const RR = null !== (uR = GR.get(ZR)) && void 0 !== uR ? uR : 0;
```

#### 27. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L326)

```diff
-       for (const NW of (null !== (EW = TW().getLeadingCommentRanges(WW, iW.getFullStart())) && void 0 !== EW ? EW : []).reverse()) {
+       for (const uR of (null !== (tR = lR().getLeadingCommentRanges(RR, JR.getFullStart())) && void 0 !== tR ? tR : []).reverse()) {
```

#### 28. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L339)

```diff
-       return (null !== (iW = null === OW || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0) > 0
+       return (null !== (JR = null === GR || void 0 === GR ? void 0 : GR.length) && void 0 !== JR ? JR : 0) > 0
```

#### 29. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L348)

```diff
-             if (TW().isFunctionDeclaration(WW)) return null !== (iW = null === (OW = WW.name) || void 0 === OW ? void 0 : OW.text) && void 0 !== iW ? iW : null;
+             if (lR().isFunctionDeclaration(RR)) return null !== (JR = null === (GR = RR.name) || void 0 === GR ? void 0 : GR.text) && void 0 !== JR ? JR : null;
```

#### 30. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L393-L394` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L393-L394) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L393-L394)

```diff
-         NW = EW.length > 0 ? EW : mW;
-       return null !== (OW = NW.find((WW => WW.topLevel))) && void 0 !== OW ? OW : NW[0]
+         uR = tR.length > 0 ? tR : yR;
+       return null !== (GR = uR.find((RR => RR.topLevel))) && void 0 !== GR ? GR : uR[0]
```

#### 31. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L398)

```diff
-       return "" === WW.trim() ? `${iW.trim()}\n` : `${WW.replace(/\s*$/,"")}\n\n${iW.trim()}\n`
+       return "" === RR.trim() ? `${JR.trim()}\n` : `${RR.replace(/\s*$/,"")}\n\n${JR.trim()}\n`
```

#### 32. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L414)

```diff
-       const NW = null !== (mW = OW.find((WW => WW.topLevel && !WW.isProperty))) && void 0 !== mW ? mW : OW.find((WW => WW.topLevel)),
+       const uR = null !== (yR = GR.find((RR => RR.topLevel && !RR.isProperty))) && void 0 !== yR ? yR : GR.find((RR => RR.topLevel)),
```

#### 33. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L417)

```diff
-       return null !== (EW = void 0 !== LW && !OW.some((WW => WW.topLevel && WW.name === PW)) ? LW : RW(WW, PW)) && void 0 !== EW ? EW : LW
+       return null !== (tR = void 0 !== qR && !GR.some((RR => RR.topLevel && RR.name === ZR)) ? qR : ER(RR, ZR)) && void 0 !== tR ? tR : qR
```

#### 34. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L441)

```diff
-       return LW && tW ? zW(WW, PW, null !== xW && void 0 !== xW ? xW : LW, cW.functions, EW) : function(WW, iW, OW, mW, EW) {
+       return qR && VR ? TR(RR, ZR, null !== wR && void 0 !== wR ? wR : qR, iR.functions, tR) : function(RR, JR, GR, yR, tR) {
```

#### 35. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L458)

```diff
-       return 0 === OW || "\n" === WW[OW - 1] ? OW : iW
+       return 0 === GR || "\n" === RR[GR - 1] ? GR : JR
```

#### 36. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L463)

```diff
-       if ("" !== WW.trim() && ("top" === mW || "start" === mW)) return `${OW.trim()}\n\n${WW.replace(/^\s+/,"")}`;
+       if ("" !== RR.trim() && ("top" === yR || "start" === yR)) return `${GR.trim()}\n\n${RR.replace(/^\s+/,"")}`;
```

#### 37. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L465)

```diff
-       return EW ? `${WW.slice(0,EW.to)}\n\n${OW.trim()}${WW.slice(EW.to)}` : GW(WW, OW)
+       return tR ? `${RR.slice(0,tR.to)}\n\n${GR.trim()}${RR.slice(tR.to)}` : YR(RR, GR)
```

#### 38. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L479)

```diff
-         iW = `${WW.slice(0,Math.max(WW.lastIndexOf(" "),60)).trimEnd()}\u2026`
+         JR = `${RR.slice(0,Math.max(RR.lastIndexOf(" "),60)).trimEnd()}\u2026`
```

#### 39. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L518)

```diff
-           NW = WW.length > 0 || !/\bplayerCommand\b/.test(cW) ? WW : [cW];
+           uR = RR.length > 0 || !/\bplayerCommand\b/.test(iR) ? RR : [iR];
```

#### 40. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L520)

```diff
-           for (const WW of iW.matchAll(Ni)) EW.add(`/${WW[1].split(/\s/)[0]}`)
+           for (const RR of JR.matchAll(uJ)) tR.add(`/${RR[1].split(/\s/)[0]}`)
```

#### 41. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L563)

```diff
-       return `When: ${WW.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
+       return `When: ${RR.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
```

#### 42. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L575-L576` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L575-L576) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L575-L576)

```diff
-         EW = new Set((null !== (iW = WW.match(Zi)) && void 0 !== iW ? iW : []).map((WW => WW.toLowerCase().replace(/s$/, "")))).size,
-         NW = (null !== (OW = WW.match(xi)) && void 0 !== OW ? OW : []).length;
+         tR = new Set((null !== (JR = RR.match(KJ)) && void 0 !== JR ? JR : []).map((RR => RR.toLowerCase().replace(/s$/, "")))).size,
+         uR = (null !== (GR = RR.match(wJ)) && void 0 !== GR ? GR : []).length;
```

#### 43. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L581-L582)

```diff
-       const iW = WW.split(/\n|\|/).map((WW => WW.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((WW => "" !== WW)).slice(0, 5).map((WW => WW.length > 90 ? `${WW.slice(0,89).trimEnd()}\u2026` : WW));
-       return iW.length >= 2 ? iW : []
+       const JR = RR.split(/\n|\|/).map((RR => RR.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((RR => "" !== RR)).slice(0, 5).map((RR => RR.length > 90 ? `${RR.slice(0,89).trimEnd()}\u2026` : RR));
+       return JR.length >= 2 ? JR : []
```

#### 44. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L584)

```diff
-     var bi = OW(5622);
+     var aJ = GR(5751);
```

#### 45. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L604)

```diff
-         EW.set(WW, [...null !== (NW = EW.get(WW)) && void 0 !== NW ? NW : [], ZW])
+         tR.set(RR, [...null !== (uR = tR.get(RR)) && void 0 !== uR ? uR : [], KR])
```

#### 46. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L613-L614` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L613-L614) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L613-L614)

```diff
-         const WW = null !== (tW = EW.get(ji(ZW))) && void 0 !== tW ? tW : [];
-         1 !== WW.length || PW.includes(WW[0]) || (wW = (0, bi.q)(wW, new RegExp(`${ZW}(?![\\w$])`, "g"), bi.k, (() => WW[0])), cW.push({
+         const RR = null !== (VR = tR.get(LJ(KR))) && void 0 !== VR ? VR : [];
+         1 !== RR.length || ZR.includes(RR[0]) || (fR = (0, aJ.s)(fR, new RegExp(`${KR}(?![\\w$])`, "g"), aJ.n, (() => RR[0])), iR.push({
```

#### 47. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L629)

```diff
-       Mi = Object.keys(si).map((WW => `"${WW}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
+       AJ = Object.keys(WJ).map((RR => `"${RR}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
```

#### 48. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L997)

```diff
-         description: `Reads a page of Bloxd's docs as Markdown. ${UW.o} lists every page with its link; then read the page, or the part of a long page, you need`,
+         description: `Reads a page of Bloxd's docs as Markdown. ${nR.l} lists every page with its link; then read the page, or the part of a long page, you need`,
```

#### 49. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1003` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1003) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1003)

```diff
-               description: `${UW.o}, or a page it links to`
+               description: `${nR.l}, or a page it links to`
```

#### 50. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1021)

```diff
-               description: `${Mi}, to list every one of them`
+               description: `${AJ}, to list every one of them`
```

#### 51. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1110)

```diff
-       if (!iW) throw new Error(`No AI Helper tool ${WW}`);
+       if (!JR) throw new Error(`No AI Helper tool ${RR}`);
```

#### 52. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1114-L1115` → after: `L1114-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1114-L1115) · [Before (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1114-L1115)

```diff
-       Hi = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       ni = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${Ji})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
+       gJ = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
+       bJ = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${pJ})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1127)

```diff
-           OW = -1 === iW ? WW : WW.slice(0, iW);
+           GR = -1 === JR ? RR : RR.slice(0, JR);
```

#### 54. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1133` → after: `L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1133) · [Before (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1133)

```diff
-           oi(OW.slice(NW, WW)) && (mW = -1 === mW ? NW : mW, EW = WW), NW = WW
+           OJ(GR.slice(uR, RR)) && (yR = -1 === yR ? uR : yR, tR = RR), uR = RR
```

#### 55. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1135-L1136` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1135-L1136) · [Before (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1135-L1136)

```diff
-         return -1 === EW ? WW : "" !== OW.slice(EW).trim() ? WW.slice(EW).trimStart() : `${WW.slice(0,mW).trimEnd()}\n${WW.slice(OW.length)}`.trim()
-       }(OW) : "" !== OW.trim() ? OW : WW
+         return -1 === tR ? RR : "" !== GR.slice(tR).trim() ? RR.slice(tR).trimStart() : `${RR.slice(0,yR).trimEnd()}\n${RR.slice(GR.length)}`.trim()
+       }(GR) : "" !== GR.trim() ? GR : RR
```

#### 56. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1145)

```diff
-       }(iW) ? iW : null
+       }(JR) ? JR : null
```

#### 57. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1159` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1159) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1159)

```diff
-             wW[null !== (PW = OW[1]) && void 0 !== PW ? PW : OW[2]] = null !== (LW = OW[3]) && void 0 !== LW ? LW : OW[4]
+             fR[null !== (ZR = GR[1]) && void 0 !== ZR ? ZR : GR[2]] = null !== (qR = GR[3]) && void 0 !== qR ? qR : GR[4]
```

#### 58. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1185` → after: `L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1185) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1185)

```diff
-       let iW = null !== WW && void 0 !== WW ? WW : {};
+       let JR = null !== RR && void 0 !== RR ? RR : {};
```

#### 59. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1193` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1193) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1193)

```diff
-       for (const [mW, EW] of Object.entries(iW)) "string" === typeof EW ? OW[mW] = vi.has(mW) && ei.test(EW) && !EW.includes("\n") ? Vi(EW) : EW : "boolean" === typeof EW || "number" === typeof EW ? OW[mW] = String(EW) : "object" !== typeof EW || null === EW || Array.isArray(EW)  … [truncated]
+       for (const [yR, tR] of Object.entries(JR)) "string" === typeof tR ? GR[yR] = DJ.has(yR) && NJ.test(tR) && !tR.includes("\n") ? cJ(tR) : tR : "boolean" === typeof tR || "number" === typeof tR ? GR[yR] = String(tR) : "object" !== typeof tR || null === tR || Array.isArray(tR)  … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1219` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1219) · [Before (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1219)

```diff
-     const Bi = new RegExp(`\\b(${Yi.map((WW=>WW.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const zJ = new RegExp(`\\b(${MJ.map((RR=>RR.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
```

#### 61. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1226)

```diff
-           return `${WW}(${JSON.stringify(OW)})`
+           return `${RR}(${JSON.stringify(GR)})`
```

#### 62. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1230-L1232` → after: `L1230-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1230-L1232) · [Before (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1230-L1232)

```diff
-         fileResult: (WW, iW, OW) => `<file path="${WW}"${OW?' open_in_editor="true"':""}>\n${iW}\n</file>`,
-         editFailure: (WW, iW) => `${WW} failed: ${iW}`,
-         lookupResult: (WW, iW, OW) => `${WW} ${iW}:\n${OW}`
+         fileResult: (RR, JR, GR) => `<file path="${RR}"${GR?' open_in_editor="true"':""}>\n${JR}\n</file>`,
+         editFailure: (RR, JR) => `${RR} failed: ${JR}`,
+         lookupResult: (RR, JR, GR) => `${RR} ${JR}:\n${GR}`
```

#### 63. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1245)

```diff
-           const PW = null !== (OW = null === (mW = WW.slice(LW).match(/^\s*<\|call\|>/)) || void 0 === mW ? void 0 : mW[0]) && void 0 !== OW ? OW : "";
+           const ZR = null !== (GR = null === (yR = RR.slice(qR).match(/^\s*<\|call\|>/)) || void 0 === yR ? void 0 : yR[0]) && void 0 !== GR ? GR : "";
```

#### 64. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1267` → after: `L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1267) · [Before (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1267)

```diff
-       const LW = null !== (iW = null !== (OW = null !== (mW = null !== (EW = PW.arguments) && void 0 !== EW ? EW : PW.params) && void 0 !== mW ? mW : PW.param) && void 0 !== OW ? OW : PW.args) && void 0 !== iW ? iW : PW.input,
+       const qR = null !== (JR = null !== (GR = null !== (yR = null !== (tR = ZR.arguments) && void 0 !== tR ? tR : ZR.params) && void 0 !== yR ? yR : ZR.param) && void 0 !== GR ? GR : ZR.args) && void 0 !== JR ? JR : ZR.input,
```

#### 65. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1273` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1273) · [Before (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1273)

```diff
-         } = PW, OW = fi(null !== LW && void 0 !== LW ? LW : iW);
+         } = ZR, GR = PJ(null !== qR && void 0 !== qR ? qR : JR);
```

#### 66. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1312` → after: `L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1312) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1312)

```diff
-       if (Array.isArray(WW)) return `[${WW.map(ri).join(", ")}]`;
+       if (Array.isArray(RR)) return `[${RR.map(kJ).join(", ")}]`;
```

#### 67. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1314)

```diff
-         return `{${Object.entries(WW).map((WW=>{let[iW,OW]=WW;return`${JSON.stringify(iW)}: ${ri(OW)}`})).join(", ")}}`
+         return `{${Object.entries(RR).map((RR=>{let[JR,GR]=RR;return`${JSON.stringify(JR)}: ${kJ(GR)}`})).join(", ")}}`
```

#### 68. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1319-L1320` → after: `L1319-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1319-L1320) · [Before (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1319-L1320)

```diff
-         formatCall: (WW, iW) => `<tool_call>\n<function=${WW}>\n${Object.entries(iW).flatMap((WW=>{let[iW,OW]=WW;return void 0===OW?[]:[`<parameter=${iW}>\n${OW}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
-         declareTools: (WW, iW, OW) => OW || 0 === iW.length ? WW : `${function(WW){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${WW.map((WW=>`\n${ri({type:"function",function:{name:WW.name,description:WW.description,parameters:WW.inputSchema}})}`)).joi … [truncated]
+         formatCall: (RR, JR) => `<tool_call>\n<function=${RR}>\n${Object.entries(JR).flatMap((RR=>{let[JR,GR]=RR;return void 0===GR?[]:[`<parameter=${JR}>\n${GR}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
+         declareTools: (RR, JR, GR) => GR || 0 === JR.length ? RR : `${function(RR){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${RR.map((RR=>`\n${kJ({type:"function",function:{name:RR.name,description:RR.description,parameters:RR.inputSchema}})}`)).joi … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1322-L1324` → after: `L1322-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1322-L1324) · [Before (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1322-L1324)

```diff
-         fileResult: (WW, iW, OW) => `<tool_response>\nview_file ${WW}${OW?" (open in the editor)":""}:\n${iW}\n</tool_response>`,
-         editFailure: (WW, iW) => `<tool_response>\nError: ${iW}\n</tool_response>`,
-         lookupResult: (WW, iW, OW) => `<tool_response>\n${WW} ${iW}:\n${OW}\n</tool_response>`
+         fileResult: (RR, JR, GR) => `<tool_response>\nview_file ${RR}${GR?" (open in the editor)":""}:\n${JR}\n</tool_response>`,
+         editFailure: (RR, JR) => `<tool_response>\nError: ${JR}\n</tool_response>`,
+         lookupResult: (RR, JR, GR) => `<tool_response>\n${RR} ${JR}:\n${GR}\n</tool_response>`
```

#### 70. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1329-L1330` → after: `L1329-L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1329-L1330) · [Before (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1329-L1330)

```diff
-         formatCall: (WW, iW) => `<tool_call name="${WW}">\n${Object.entries(iW).flatMap((WW=>{let[iW,OW]=WW;return void 0===OW?[]:[`<param name="${iW}">${Qi.has(iW)?OW:`\n${OW}\n`}</param>\n`]})).join("")}</tool_call>`,
-         declareTools: WW => WW,
+         formatCall: (RR, JR) => `<tool_call name="${RR}">\n${Object.entries(JR).flatMap((RR=>{let[JR,GR]=RR;return void 0===GR?[]:[`<param name="${JR}">${TJ.has(JR)?GR:`\n${GR}\n`}</param>\n`]})).join("")}</tool_call>`,
+         declareTools: RR => RR,
```

#### 71. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1332-L1334` → after: `L1332-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1332-L1334) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1332-L1334)

```diff
-         fileResult: (WW, iW, OW) => `<tool_result name="view_file" path="${WW}"${OW?' open_in_editor="true"':""}>\n${iW}\n</tool_result>`,
-         editFailure: (WW, iW) => `<tool_result name="${WW}" is_error="true">\n${iW}\n</tool_result>`,
-         lookupResult: (WW, iW, OW) => `<tool_result name="${WW}" about="${iW.replace(/"/g,"'")}">\n${OW}\n</tool_result>`
+         fileResult: (RR, JR, GR) => `<tool_result name="view_file" path="${RR}"${GR?' open_in_editor="true"':""}>\n${JR}\n</tool_result>`,
+         editFailure: (RR, JR) => `<tool_result name="${RR}" is_error="true">\n${JR}\n</tool_result>`,
+         lookupResult: (RR, JR, GR) => `<tool_result name="${RR}" about="${JR.replace(/"/g,"'")}">\n${GR}\n</tool_result>`
```

#### 72. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1352)

```diff
-             if (null === cW || null === tW || (null !== (OW = null === (mW = iW.at(-1)) || void 0 === mW ? void 0 : mW.index) && void 0 !== OW ? OW : -1) + (null !== (EW = null === (NW = iW.at(-1)) || void 0 === NW ? void 0 : NW.call.source.length) && void 0 !== EW ? EW : 0) > LW … [truncated]
+             if (null === iR || null === VR || (null !== (GR = null === (yR = JR.at(-1)) || void 0 === yR ? void 0 : yR.index) && void 0 !== GR ? GR : -1) + (null !== (tR = null === (uR = JR.at(-1)) || void 0 === uR ? void 0 : uR.call.source.length) && void 0 !== tR ? tR : 0) > qR … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1356)

```diff
-               lW = WW.slice(LW.index, tW + (null !== (PW = null === xW || void 0 === xW ? void 0 : xW[0].length) && void 0 !== PW ? PW : 0));
+               rR = RR.slice(qR.index, VR + (null !== (ZR = null === wR || void 0 === wR ? void 0 : wR[0].length) && void 0 !== ZR ? ZR : 0));
```

#### 74. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1469` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1469) · [Before (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1469)

```diff
-           stopsWhen: WW => `${WW} !== undefined && ${WW} !== false`,
+           stopsWhen: RR => `${RR} !== undefined && ${RR} !== false`,
```

#### 75. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1473` → after: `L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1473) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1473)

```diff
-           stopsWhen: WW => `${WW} === false || ${WW} === null`,
+           stopsWhen: RR => `${RR} === false || ${RR} === null`,
```

#### 76. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1477)

```diff
-           stopsWhen: WW => `${WW} === "preventDamage"`,
+           stopsWhen: RR => `${RR} === "preventDamage"`,
```

#### 77. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1490)

```diff
-         hasErrors: (null !== (iW = null === mW || void 0 === mW ? void 0 : mW.length) && void 0 !== iW ? iW : 0) > 0
+         hasErrors: (null !== (JR = null === yR || void 0 === yR ? void 0 : yR.length) && void 0 !== JR ? JR : 0) > 0
```

#### 78. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1500)

```diff
-         cZ: WW,
+         iK: RR,
```

#### 79. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1507` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1507) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1507)

```diff
-           cZ: OW,
+           iK: GR,
```

#### 80. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1514` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1514) · [Before (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1514)

```diff
-         cZ: OW,
+         iK: GR,
```

#### 81. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1545` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1545) · [Before (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1545)

```diff
-             for (const NW of (null !== (EW = TW().getLeadingCommentRanges(WW, OW.getFullStart())) && void 0 !== EW ? EW : []).reverse()) {
+             for (const uR of (null !== (tR = lR().getLeadingCommentRanges(RR, GR.getFullStart())) && void 0 !== tR ? tR : []).reverse()) {
```

#### 82. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1611` → after: `L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1611) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1611)

```diff
-       return /^\s*$/.test(EW) ? EW : `${null!==(OW=null===(mW=/^\s*/.exec(EW))||void 0===mW?void 0:mW[0])&&void 0!==OW?OW:""}\t`
+       return /^\s*$/.test(tR) ? tR : `${null!==(GR=null===(yR=/^\s*/.exec(tR))||void 0===yR?void 0:yR[0])&&void 0!==GR?GR:""}\t`
```

#### 83. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1620-L1621` → after: `L1620-L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1620-L1621) · [Before (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1620-L1621)

```diff
-         NW = /^[\w$"']+\s*:/.test(EW) && "" === WW.slice(uO(WW, iW.getStart(OW)), iW.getStart(OW)).trim() ? mW.replace(/^\s*/, "\t") : `\t${iW.getText(OW)},`;
-       return /,\s*(?:\/\/.*)?$/.test(NW) ? NW : NW.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
+         uR = /^[\w$"']+\s*:/.test(tR) && "" === RR.slice(bG(RR, JR.getStart(GR)), JR.getStart(GR)).trim() ? yR.replace(/^\s*/, "\t") : `\t${JR.getText(GR)},`;
+       return /,\s*(?:\/\/.*)?$/.test(uR) ? uR : uR.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
```

#### 84. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1644` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1644) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1644)

```diff
-         PW = null !== (OW = NW[NW.length - 1]) && void 0 !== OW ? OW : EW[EW.length - 1];
+         ZR = null !== (GR = uR[uR.length - 1]) && void 0 !== GR ? GR : tR[tR.length - 1];
```

#### 85. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1655)

```diff
-       return 1 === cW.length ? tW : null
+       return 1 === iR.length ? VR : null
```

#### 86. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1666` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1666) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1666)

```diff
-         cZ: wW
+         iK: fR
```

#### 87. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1675` → after: `L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1675) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1675)

```diff
-           for (let mW = iW; AW.has(OW); mW++) OW = `${WW}${mW}`;
+           for (let yR = JR; eR.has(GR); yR++) GR = `${RR}${yR}`;
```

#### 88. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1683)

```diff
-           lW.push(null === WW ? "undefined" : `...${WW}`);
+           rR.push(null === RR ? "undefined" : `...${RR}`);
```

#### 89. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1687` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1687) · [Before (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1687)

```diff
-           lW.push(null !== WW && void 0 !== WW ? WW : "undefined");
+           rR.push(null !== RR && void 0 !== RR ? RR : "undefined");
```

#### 90. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1702` → after: `L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1702) · [Before (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1702)

```diff
-             text: `(${[WW.getText(iW),...jW].join(", ")})`
+             text: `(${[RR.getText(JR),...LR].join(", ")})`
```

#### 91. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1709` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1709) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1709)

```diff
-             text: `${WW}${jW.join(", ")}`
+             text: `${RR}${LR.join(", ")}`
```

#### 92. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1713-L1714` → after: `L1713-L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1713-L1714) · [Before (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1713-L1714)

```diff
-       const kW = `${EW}(${lW.join(", ")})`,
-         sW = bW(`${gO(PW)}Result`, 2),
+       const UR = `${tR}(${rR.join(", ")})`,
+         WR = aR(`${DG(ZR)}Result`, 2),
```

#### 93. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1716)

```diff
-         KW = sO.has(mW) ? [kW] : MW ? [`const ${sW} = ${kW}`, `if (${MW.stopsWhen(sW)}) return ${sW}`] : [`const ${sW} = ${kW}`],
+         CR = nG.has(yR) ? [UR] : AR ? [`const ${WR} = ${UR}`, `if (${AR.stopsWhen(WR)}) return ${WR}`] : [`const ${WR} = ${UR}`],
```

#### 94. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1731)

```diff
-                 return TW().isIdentifier(mW) && iW.has(mW.text) && WW.expression.getText(OW).startsWith(`${mW.text} `)
+                 return lR().isIdentifier(yR) && JR.has(yR.text) && RR.expression.getText(GR).startsWith(`${yR.text} `)
```

#### 95. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1736)

```diff
-                 text: `return ${sW}`
+                 text: `return ${WR}`
```

#### 96. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1743)

```diff
-                   text: `${mW.text} !== undefined ? ${mW.text} : ${sW}`
+                   text: `${yR.text} !== undefined ? ${yR.text} : ${WR}`
```

#### 97. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1753)

```diff
-             mW = NW ? oO(WW, NW.getStart(iW)) : `${WW.slice(uO(WW,wW.getStart(iW)),wW.getStart(iW)).replace(/\S.*$/,"")}\t`,
+             yR = uR ? vG(RR, uR.getStart(JR)) : `${RR.slice(bG(RR,fR.getStart(JR)),fR.getStart(JR)).replace(/\S.*$/,"")}\t`,
```

#### 98. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1755` → after: `L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1755) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1755)

```diff
-             PW = /^\s*$/.test(EW) ? `${mW}return ${sW}\n${EW}` : `\n${mW}return ${sW}\n`;
+             ZR = /^\s*$/.test(tR) ? `${yR}return ${WR}\n${tR}` : `\n${yR}return ${WR}\n`;
```

#### 99. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1771` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1771) · [Before (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1771)

```diff
-         text: `\n${oO(WW,JW.getStart(iW))}${kW}`
+         text: `\n${vG(RR,pR.getStart(JR))}${UR}`
```

#### 100. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1775` → after: `L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1775) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1775)

```diff
-           mW = OW ? oO(WW, OW.getStart(iW)) : `${WW.slice(uO(WW,wW.getStart(iW)),wW.getStart(iW)).replace(/\S.*$/,"")}\t`,
+           yR = GR ? vG(RR, GR.getStart(JR)) : `${RR.slice(bG(RR,fR.getStart(JR)),fR.getStart(JR)).replace(/\S.*$/,"")}\t`,
```

#### 101. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1781)

```diff
-           text: `\n${KW.map((WW=>`${mW}${WW}`)).join("\n")}${OW?NW?`\n${mW}`:"":"\n"}`
+           text: `\n${CR.map((RR=>`${yR}${RR}`)).join("\n")}${GR?uR?`\n${yR}`:"":"\n"}`
```

#### 102. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1786)

```diff
-           EW = SW ? [`const ${mW} = ${tW.getText(iW)}`, `return ${mW} !== undefined ? ${mW} : ${sW}`] : [`return ${tW.getText(iW)}`];
+           tR = XR ? [`const ${yR} = ${VR.getText(JR)}`, `return ${yR} !== undefined ? ${yR} : ${WR}`] : [`return ${VR.getText(JR)}`];
```

#### 103. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1790)

```diff
-           text: `{\n${[...KW,...EW].map((WW=>`${OW}\t${WW}`)).join("\n")}\n${OW}}`
+           text: `{\n${[...CR,...tR].map((RR=>`${GR}\t${RR}`)).join("\n")}\n${GR}}`
```

#### 104. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1801)

```diff
-       return TW().isIdentifier(WW) ? iW.has(WW.text) ? WW : null : TW().isConditionalExpression(WW) ? CO(WW.whenFalse, iW) : null
+       return lR().isIdentifier(RR) ? JR.has(RR.text) ? RR : null : lR().isConditionalExpression(RR) ? IG(RR.whenFalse, JR) : null
```

#### 105. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1814)

```diff
-       return (0, bi.e)(null !== (mW = null === (EW = WW.body) || void 0 === EW ? void 0 : EW.getText(iW)) && void 0 !== mW ? mW : "", new RegExp(`${OW}\\s*\\(`), bi.k).length > 0
+       return (0, aJ.d)(null !== (yR = null === (tR = RR.body) || void 0 === tR ? void 0 : tR.getText(JR)) && void 0 !== yR ? yR : "", new RegExp(`${GR}\\s*\\(`), aJ.n).length > 0
```

#### 106. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1822)

```diff
-       } = OW, PW = null !== (mW = OW.overrides) && void 0 !== mW ? mW : new Set;
+       } = GR, ZR = null !== (yR = GR.overrides) && void 0 !== yR ? yR : new Set;
```

#### 107. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1824)

```diff
-         const WW = `${NW?`${NW}\n`:""}${iW.trim()}\n`,
+         const RR = `${uR?`${uR}\n`:""}${JR.trim()}\n`,
```

#### 108. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1838)

```diff
-             return (null !== (iW = null === OW || void 0 === OW ? void 0 : OW.properties) && void 0 !== iW ? iW : []).flatMap((WW => {
+             return (null !== (JR = null === GR || void 0 === GR ? void 0 : GR.properties) && void 0 !== JR ? JR : []).flatMap((RR => {
```

#### 109. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1897)

```diff
-                 return TW().isPropertyAssignment(WW) && void 0 !== OW ? `\t${WW.name.getText(iW)}: ${OW},` : `\t${WW.getText(iW)},`
+                 return lR().isPropertyAssignment(RR) && void 0 !== GR ? `\t${RR.name.getText(JR)}: ${GR},` : `\t${RR.getText(JR)},`
```

#### 110. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1903` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1903) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1903)

```diff
-                   text: `{\n${[...WW,...tW].join("\n")}\n}`
+                   text: `{\n${[...RR,...VR].join("\n")}\n}`
```

#### 111. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1918)

```diff
-               text: `${tW.join("\n")}\n`
+               text: `${VR.join("\n")}\n`
```

#### 112. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1932)

```diff
-               text: `${kW?",":""}\n${tW.join("\n")}\n`
+               text: `${UR?",":""}\n${VR.join("\n")}\n`
```

#### 113. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1949` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1949) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1949)

```diff
-             text: `${EW}${iW.slice(kW.from,kW.to)}\n\n`
+             text: `${tR}${JR.slice(UR.from,UR.to)}\n\n`
```

#### 114. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1960` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1960) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1960)

```diff
-           AW.push(0 === AW.length ? WW : `${EW}${WW}`), MW.push(OW)
+           eR.push(0 === eR.length ? RR : `${tR}${RR}`), AR.push(GR)
```

#### 115. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1976` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1976) · [Before (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1976)

```diff
-           const PW = `${gO(EW)}${vO(iW)}`,
+           const ZR = `${DG(tR)}${NG(JR)}`,
```

#### 116. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1984)

```diff
-           const AW = VO(tW.cZ).map(((WW, iW) => null !== WW && void 0 !== WW ? WW : `arg${iW}`));
+           const eR = oG(VR.iK).map(((RR, JR) => null !== RR && void 0 !== RR ? RR : `arg${JR}`));
```

#### 117. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1986-L1988` → after: `L1986-L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1986-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1986-L1988) · [Before (L1986-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1986-L1988)

```diff
-             const WW = `${PW}(${AW.join(", ")})`,
-               OW = `${gO(EW)}Result`;
-             KW(`function ${iW}(${AW.join(", ")}) {\n\t${sO.has(iW)?WW:`const ${OW} = ${WW}\n\treturn ${OW}`}\n}`, -1), bW.push(iW), xW.add(iW);
+             const RR = `${ZR}(${eR.join(", ")})`,
+               GR = `${DG(tR)}Result`;
+             CR(`function ${JR}(${eR.join(", ")}) {\n\t${nG.has(JR)?RR:`const ${GR} = ${RR}\n\treturn ${GR}`}\n}`, -1), aR.push(JR), wR.add(JR);
```

#### 118. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1991` → after: `L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L1991) · [Before (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L1991)

```diff
-           BO(NW.cZ, LW.file, PW) || (lW.push(...pO(WW, LW.file, NW, iW, PW, AW, EW, !0 === OW.runsLast)), jW.push(iW));
+           zG(uR.iK, qR.file, ZR) || (rR.push(...cG(RR, qR.file, uR, JR, ZR, eR, tR, !0 === GR.runsLast)), LR.push(JR));
```

#### 119. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2003)

```diff
-         SW = `${""===WW?"":`${WW}\n\n`}${NW?`${NW}\n`:""}${AW.join("")}\n`
+         XR = `${""===RR?"":`${RR}\n\n`}${uR?`${uR}\n`:""}${eR.join("")}\n`
```

#### 120. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2040` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2040) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2040)

```diff
-         EW = null !== (OW = mW.find((WW => "color" === WW.name))) && void 0 !== OW ? OW : mW[0];
+         tR = null !== (GR = yR.find((RR => "color" === RR.name))) && void 0 !== GR ? GR : yR[0];
```

#### 121. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2044)

```diff
-       return `{ ${EW.name}: ${PW} }`
+       return `{ ${tR.name}: ${ZR} }`
```

#### 122. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2056)

```diff
-         return iW.length > 7 ? `${iW.slice(0,7).join(" or ")} or ...` : iW.join(" or ")
+         return JR.length > 7 ? `${JR.slice(0,7).join(" or ")} or ...` : JR.join(" or ")
```

#### 123. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2058-L2059` → after: `L2058-L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2058-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2058-L2059) · [Before (L2058-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2058-L2059)

```diff
-       if (mW.isStringLiteral()) return `"${mW.value}"`;
-       if (mW.isNumberLiteral()) return `${mW.value}`;
+       if (yR.isStringLiteral()) return `"${yR.value}"`;
+       if (yR.isNumberLiteral()) return `${yR.value}`;
```

#### 124. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2064)

```diff
-         return `[${WW.getTypeArguments(mW).map((iW=>FO(WW,iW,OW+1))).join(", ")}]`
+         return `[${RR.getTypeArguments(yR).map((JR=>FG(RR,JR,GR+1))).join(", ")}]`
```

#### 125. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2069` → after: `L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2069) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2069)

```diff
-         return `a list of ${iW.includes(" or ")?`(${iW})`:iW}`
+         return `a list of ${JR.includes(" or ")?`(${JR})`:JR}`
```

#### 126. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2074)

```diff
-       return `{ ${EW.slice(0,10).map((WW=>`${WW.name}${WW.flags&TW().SymbolFlags.Optional?"?":""}`)).join(", ")}${EW.length>10?", ...":""} }`
+       return `{ ${tR.slice(0,10).map((RR=>`${RR.name}${RR.flags&lR().SymbolFlags.Optional?"?":""}`)).join(", ")}${tR.length>10?", ...":""} }`
```

#### 127. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2102-L2103` → after: `L2102-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2102-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2102-L2103) · [Before (L2102-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2102-L2103)

```diff
-               cW = null !== (NW = null === mW || void 0 === mW ? void 0 : mW.getParameters()) && void 0 !== NW ? NW : [],
-               wW = new Set((null !== (PW = null === mW || void 0 === mW || null === (LW = mW.getDeclaration()) || void 0 === LW ? void 0 : LW.typeParameters) && void 0 !== PW ? PW : []).map((WW => WW.name.text)));
+               iR = null !== (uR = null === yR || void 0 === yR ? void 0 : yR.getParameters()) && void 0 !== uR ? uR : [],
+               fR = new Set((null !== (ZR = null === yR || void 0 === yR || null === (qR = yR.getDeclaration()) || void 0 === qR ? void 0 : qR.typeParameters) && void 0 !== ZR ? ZR : []).map((RR => RR.name.text)));
```

#### 128. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2107)

```diff
-                 LW = PW && TW().isParameter(PW) ? PW : void 0;
+                 qR = ZR && lR().isParameter(ZR) ? ZR : void 0;
```

#### 129. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2112` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2112) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2112)

```diff
-                 OW.add(`${EW.expression.getText(WW)} can't take null as ${cW[mW].name} (value ${mW+1}): ${PW}, or it throws when that line runs.`)
+                 GR.add(`${tR.expression.getText(RR)} can't take null as ${iR[yR].name} (value ${yR+1}): ${ZR}, or it throws when that line runs.`)
```

#### 130. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2150)

```diff
-             const mW = null !== (NW = null === (PW = iW.getResolvedSignature(EW)) || void 0 === PW ? void 0 : PW.getParameters()) && void 0 !== NW ? NW : [];
+             const yR = null !== (uR = null === (ZR = JR.getResolvedSignature(tR)) || void 0 === ZR ? void 0 : ZR.getParameters()) && void 0 !== uR ? uR : [];
```

#### 131. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2153)

```diff
-               LW && Em(NW, iW.getTypeOfSymbol(LW), WW, iW) && OW.add(`${EW.expression.getText(WW)} can't take api.createEnchantmentAttributesForItem(...) as ${LW.name} (value ${PW+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
+               qR && Gy(uR, JR.getTypeOfSymbol(qR), RR, JR) && GR.add(`${tR.expression.getText(RR)} can't take api.createEnchantmentAttributesForItem(...) as ${qR.name} (value ${ZR+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
```

#### 132. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2191)

```diff
-           return TW().isPropertyAccessExpression(WW) && TW().isIdentifier(WW.expression) && "CONFIG" === WW.expression.text && null !== (iW = OW.get(WW.name.text)) && void 0 !== iW ? iW : WW.getText()
+           return lR().isPropertyAccessExpression(RR) && lR().isIdentifier(RR.expression) && "CONFIG" === RR.expression.text && null !== (JR = GR.get(RR.name.text)) && void 0 !== JR ? JR : RR.getText()
```

#### 133. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2193` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L2193) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L2193)

```diff
-         PW = WW => WW && (TW().isStringLiteral(WW) || TW().isNoSubstitutionTemplateLiteral(WW)) ? WW.text : WW && TW().isObjectLiteralExpression(WW) ? WW.properties.flatMap((WW => TW().isPropertyAssignment(WW) && (TW().isIdentifier(WW.name) || TW().isStringLiteral(WW.name)) ? [`$ … [truncated]
+         ZR = RR => RR && (lR().isStringLiteral(RR) || lR().isNoSubstitutionTemplateLiteral(RR)) ? RR.text : RR && lR().isObjectLiteralExpression(RR) ? RR.properties.flatMap((RR => lR().isPropertyAssignment(RR) && (lR().isIdentifier(RR.name) || lR().isStringLiteral(RR.name)) ? [`$ … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5098` → after: `L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5098) · [Before (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5098)

```diff
-       } = KO(`(${WW})`), mW = iW.statements[0];
+       } = WG(`(${RR})`), yR = JR.statements[0];
```

#### 135. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5136` → after: `L5136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5136) · [Before (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5136)

```diff
-       }(iW.startsWith("{") ? iW : `{${iW}}`);
+       }(JR.startsWith("{") ? JR : `{${JR}}`);
```

#### 136. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5147` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5147) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5147)

```diff
-         if (EW && NW > 0) EW[1] += `\n${iW}`;
+         if (tR && uR > 0) tR[1] += `\n${JR}`;
```

#### 137. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5154` → after: `L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5154) · [Before (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5154)

```diff
-         NW = Math.max(0, NW + (null !== (LW = null === (cW = OW.match(/[[{(]/g)) || void 0 === cW ? void 0 : cW.length) && void 0 !== LW ? LW : 0) - (null !== (wW = null === (tW = OW.match(/[\]})]/g)) || void 0 === tW ? void 0 : tW.length) && void 0 !== wW ? wW : 0))
+         uR = Math.max(0, uR + (null !== (qR = null === (iR = GR.match(/[[{(]/g)) || void 0 === iR ? void 0 : iR.length) && void 0 !== qR ? qR : 0) - (null !== (fR = null === (VR = GR.match(/[\]})]/g)) || void 0 === VR ? void 0 : VR.length) && void 0 !== fR ? fR : 0))
```

#### 138. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5168` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5168) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5168)

```diff
-         problem: `${WW.key} must be a plain value like ${WW.value}, not ${iW}`
+         problem: `${RR.key} must be a plain value like ${RR.value}, not ${JR}`
```

#### 139. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5171` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5171) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5171)

```diff
-         problem: `${WW.key} must be a number, like ${WW.value}`
+         problem: `${RR.key} must be a number, like ${RR.value}`
```

#### 140. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5174` → after: `L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5174) · [Before (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5174)

```diff
-         problem: `${WW.key} must be true or false`
+         problem: `${RR.key} must be true or false`
```

#### 141. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5179` → after: `L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5179) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5179)

```diff
-         problem: `${WW.key} must be a position [x, y, z], like ${"null"===WW.value?"[0, 10, 0]":WW.value}`
+         problem: `${RR.key} must be a position [x, y, z], like ${"null"===RR.value?"[0, 10, 0]":RR.value}`
```

#### 142. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5182` → after: `L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5182) · [Before (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5182)

```diff
-         problem: `${WW.key} must be a list in [ ], like ${WW.value}`
+         problem: `${RR.key} must be a list in [ ], like ${RR.value}`
```

#### 143. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5210` → after: `L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5210) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5210)

```diff
-               PW = NW ? ZW.get(null !== (iW = jm(NW.initializer)) && void 0 !== iW ? iW : "") : void 0;
+               ZR = uR ? KR.get(null !== (JR = ey(uR.initializer)) && void 0 !== JR ? JR : "") : void 0;
```

#### 144. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5219` → after: `L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5219) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5219)

```diff
-           const WW = null !== (lW = jm(AW)) && void 0 !== lW ? lW : "",
+           const RR = null !== (rR = ey(eR)) && void 0 !== rR ? rR : "",
```

#### 145. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5223-L5225` → after: `L5223-L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5223-L5225) · [Before (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5223-L5225)

```diff
-             const iW = EW.named ? `item: ${JSON.stringify(EW.item)}` : `item: ${JSON.stringify(EW.item)}, name: ${JSON.stringify(WW)}`;
-             wW.unshift(`"${WW}" isn't an item, so it is a ${EW.item}${EW.named?"":` named "${WW}"`}`), cW = `${cW.slice(0,EW.property.getStart()-LW)}${iW}${cW.slice(EW.property.getEnd()-LW)}`
-           } else null === iW ? tW.unshift(`"${WW}"`) : iW !== WW && (wW.unshift(`"${WW}" is "${iW}"`), cW = `${cW.slice(0,AW.getStart()-LW)}${JSON.stringify(iW)}${cW.slice(AW.getEnd()-LW)}`)
+             const JR = tR.named ? `item: ${JSON.stringify(tR.item)}` : `item: ${JSON.stringify(tR.item)}, name: ${JSON.stringify(RR)}`;
+             fR.unshift(`"${RR}" isn't an item, so it is a ${tR.item}${tR.named?"":` named "${RR}"`}`), iR = `${iR.slice(0,tR.property.getStart()-qR)}${JR}${iR.slice(tR.property.getEnd()-qR)}`
+           } else null === JR ? VR.unshift(`"${RR}"`) : JR !== RR && (fR.unshift(`"${RR}" is "${JR}"`), iR = `${iR.slice(0,eR.getStart()-qR)}${JSON.stringify(JR)}${iR.slice(eR.getEnd()-qR)}`)
```

#### 146. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5228` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5228) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5228)

```diff
-           problem: `${tW.join(", ")} ${1===tW.length?"item"===OW?"isn't an":"isn't a":"aren't"} ${OW} name${1===tW.length?"":"s"}, so ${WW.key} kept ${WW.value}`
+           problem: `${VR.join(", ")} ${1===VR.length?"item"===GR?"isn't an":"isn't a":"aren't"} ${GR} name${1===VR.length?"":"s"}, so ${RR.key} kept ${RR.value}`
```

#### 147. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5240` → after: `L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5240) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5240)

```diff
-           problem: `${WW.key} must be text in quotes, like ${WW.value}`
+           problem: `${RR.key} must be text in quotes, like ${RR.value}`
```

#### 148. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5245)

```diff
-             problem: `"${iW}" isn't ${"item"===WW.kind?"an":"a"} ${WW.kind} name, so ${WW.key} kept ${WW.value}`
+             problem: `"${JR}" isn't ${"item"===RR.kind?"an":"a"} ${RR.kind} name, so ${RR.key} kept ${RR.value}`
```

#### 149. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5249` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5249) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5249)

```diff
-             fixed: `"${iW}" is "${mW}"`
+             fixed: `"${JR}" is "${yR}"`
```

#### 150. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5279` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5279) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5279)

```diff
-       return null !== (iW = Mm.find((WW => Sm(WW.name) === OW || Sm(WW.title) === OW))) && void 0 !== iW ? iW : null
+       return null !== (JR = Uy.find((RR => Ay(RR.name) === GR || Ay(RR.title) === GR))) && void 0 !== JR ? JR : null
```

#### 151. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5284` → after: `L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5284) · [Before (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5284)

```diff
-       return null !== (iW = xm.find((iW => iW.name === WW))) && void 0 !== iW ? iW : null
+       return null !== (JR = Vy.find((JR => JR.name === RR))) && void 0 !== JR ? JR : null
```

#### 152. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5291` → after: `L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5291) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5291)

```diff
-         return 0 === WW.length ? "" : `const CONFIG = {\n${WW.map((WW=>{var OW;return`\t${WW.key}: ${null!==(OW=iW.get(WW.key))&&void 0!==OW?OW:WW.value}, // ${WW.about}`})).join("\n")}\n}`
+         return 0 === RR.length ? "" : `const CONFIG = {\n${RR.map((RR=>{var GR;return`\t${RR.key}: ${null!==(GR=JR.get(RR.key))&&void 0!==GR?GR:RR.value}, // ${RR.about}`})).join("\n")}\n}`
```

#### 153. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5293` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5293) · [Before (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5293)

```diff
-       return `${""===OW?"":`${OW}\n\n`}${WW.code.trim()}\n`
+       return `${""===GR?"":`${GR}\n\n`}${RR.code.trim()}\n`
```

#### 154. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5303` → after: `L5303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5303) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5303)

```diff
-             for (const WW of null !== (NW = EW.uses) && void 0 !== NW ? NW : []) {
+             for (const RR of null !== (uR = tR.uses) && void 0 !== uR ? uR : []) {
```

#### 155. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5316` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5316) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5316)

```diff
-         mW = new RegExp(`function ${iW.name}\\s*\\([^)]*\\)\\s*\\{`).exec(WW);
+         yR = new RegExp(`function ${JR.name}\\s*\\([^)]*\\)\\s*\\{`).exec(RR);
```

#### 156. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5390` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5390) · [Before (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5390)

```diff
-               EW.push(`${WW.name} has no setting ${LW}`);
+               tR.push(`${RR.name} has no setting ${qR}`);
```

#### 157. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5413` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5413) · [Before (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5413)

```diff
-           heading: "" === WW.trim() ? void 0 : `// ---- ${iW.title} (ready-made) ----`
+           heading: "" === RR.trim() ? void 0 : `// ---- ${JR.title} (ready-made) ----`
```

#### 158. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5430` → after: `L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5430) · [Before (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5430)

```diff
-       return `- ${WW.name}: ${WW.summary}. Settings: ${WW.settings.map((WW=>WW.key)).join(", ")}`
+       return `- ${RR.name}: ${RR.summary}. Settings: ${RR.settings.map((RR=>RR.key)).join(", ")}`
```

#### 159. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5435` → after: `L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5435) · [Before (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5435)

```diff
-       const OW = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.trim().toLowerCase()) && void 0 !== iW ? iW : "",
+       const GR = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.trim().toLowerCase()) && void 0 !== JR ? JR : "",
```

#### 160. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5439` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5439) · [Before (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5439)

```diff
-       return `${mW?`Prefabs for ${Km.get(mW)}:`:""===OW||"all"===OW?"Every prefab:":`There is no category ${WW}. Every prefab:`}\n${EW.length>0?EW.map(em).join("\n"):"(none yet)"}${NW.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${NW.map((W … [truncated]
+       return `${yR?`Prefabs for ${Wy.get(yR)}:`:""===GR||"all"===GR?"Every prefab:":`There is no category ${RR}. Every prefab:`}\n${tR.length>0?tR.map(xy).join("\n"):"(none yet)"}${uR.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${uR.map((R … [truncated]
```

#### 161. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5444-L5447` → after: `L5444-L5447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5444-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5444-L5447) · [Before (L5444-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5444-L5447)

```diff
-       const mW = [...WW.settings, ...om(WW)].map((WW => `- ${WW.key} (${WW.kind}, default ${WW.value}): ${WW.about}`)).join("\n"),
-         EW = null !== (OW = WW.changeable) && void 0 !== OW && OW.length ? `\nFunctions to replace by name for a game of their own:\n${WW.changeable.map((WW=>`- ${WW.name}: ${WW.about}`)).join("\n")}` : "",
-         NW = iW ? `\nIts code, as it goes in with the default settings:\n${Tm(WW)}` : "";
-       return `${WW.name} (${WW.title}): ${WW.summary}.\nHow it plays: ${WW.howItPlays}\nSettings:\n${mW}${EW}${WW.setup?`\nThe creator sets up: ${WW.setup}`:""}${NW}`
+       const yR = [...RR.settings, ...vy(RR)].map((RR => `- ${RR.key} (${RR.kind}, default ${RR.value}): ${RR.about}`)).join("\n"),
+         tR = null !== (GR = RR.changeable) && void 0 !== GR && GR.length ? `\nFunctions to replace by name for a game of their own:\n${RR.changeable.map((RR=>`- ${RR.name}: ${RR.about}`)).join("\n")}` : "",
+         uR = JR ? `\nIts code, as it goes in with the default settings:\n${My(RR)}` : "";
+       return `${RR.name} (${RR.title}): ${RR.summary}.\nHow it plays: ${RR.howItPlays}\nSettings:\n${yR}${tR}${RR.setup?`\nThe creator sets up: ${RR.setup}`:""}${uR}`
```

#### 162. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5455` → after: `L5455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5455) · [Before (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5455)

```diff
-         mW = ` ${WW.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
+         yR = ` ${RR.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
```

#### 163. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5457-L5458` → after: `L5457-L5458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5457-L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5457-L5458) · [Before (L5457-L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5457-L5458)

```diff
-         const iW = WW.keywords.map((WW => WW.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((WW => WW.includes(" ") ? mW.includes(` ${WW} `) : OW.has(WW))),
-           EW = Math.min(...iW.map((WW => mW.indexOf(` ${WW} `))));
+         const JR = RR.keywords.map((RR => RR.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((RR => RR.includes(" ") ? yR.includes(` ${RR} `) : GR.has(RR))),
+           tR = Math.min(...JR.map((RR => yR.indexOf(` ${RR} `))));
```

#### 164. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5494` → after: `L5494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5494) · [Before (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5494)

```diff
-               PW = WW => "string" === typeof WW ? WW : "boolean" === typeof WW ? String(WW) : Array.isArray(WW) ? WW.filter((WW => "string" === typeof WW)).join("\n") : void 0,
+               ZR = RR => "string" === typeof RR ? RR : "boolean" === typeof RR ? String(RR) : Array.isArray(RR) ? RR.filter((RR => "string" === typeof RR)).join("\n") : void 0,
```

#### 165. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5508` → after: `L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5508) · [Before (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5508)

```diff
-             return mW.startsWith("[") ? EW : WW
+             return yR.startsWith("[") ? tR : RR
```

#### 166. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5511-L5512` → after: `L5511-L5512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5511-L5512) · [Before (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5511-L5512)

```diff
-         cW = null !== (iW = null === (OW = LW.question) || void 0 === OW ? void 0 : OW.replace(/\s+/g, " ").trim()) && void 0 !== iW ? iW : "",
-         wW = (null !== (mW = LW.choices) && void 0 !== mW ? mW : "").includes("\n") ? (null !== (EW = LW.choices) && void 0 !== EW ? EW : "").split("\n") : (null !== (NW = LW.choices) && void 0 !== NW ? NW : "").split("|"),
+         iR = null !== (JR = null === (GR = qR.question) || void 0 === GR ? void 0 : GR.replace(/\s+/g, " ").trim()) && void 0 !== JR ? JR : "",
+         fR = (null !== (yR = qR.choices) && void 0 !== yR ? yR : "").includes("\n") ? (null !== (tR = qR.choices) && void 0 !== tR ? tR : "").split("\n") : (null !== (uR = qR.choices) && void 0 !== uR ? uR : "").split("|"),
```

#### 167. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5536-L5539` → after: `L5536-L5539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5536-L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5536-L5539) · [Before (L5536-L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5536-L5539)

```diff
-       am = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${Im})\s*\(|(?:${Im})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
-       rm = new RegExp(`^(?:${Im})$`),
-       zm = new RegExp(String.raw`^(${Im})(\s*\([^()\n]*\)\s*\{)`, "gm"),
-       Fm = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${Im})\b|\buse_?prefab\s*\(`, "i");
+       Ey = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${dy})\s*\(|(?:${dy})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+       Yy = new RegExp(`^(?:${dy})$`),
+       ky = new RegExp(String.raw`^(${dy})(\s*\([^()\n]*\)\s*\{)`, "gm"),
+       Qy = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${dy})\b|\buse_?prefab\s*\(`, "i");
```

#### 168. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5552` → after: `L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5552) · [Before (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5552)

```diff
-           return void 0 === iW.path ? iW : {
+           return void 0 === JR.path ? JR : {
```

#### 169. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5556` → after: `L5556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5556) · [Before (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5556)

```diff
-           return void 0 === iW.url ? iW : {
+           return void 0 === JR.url ? JR : {
```

#### 170. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5602-L5604` → after: `L5602-L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5602-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5602-L5604) · [Before (L5602-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5602-L5604)

```diff
-       const jW = Object.keys(OW).some(bW.e),
-         UW = WW => null !== WW && jW && (0, bW.e)(WW),
-         kW = WW => UW(WW) ? `${bW.j}${(0,bW.g)(WW)}` : null !== NW && void 0 !== NW ? NW : OE(WW),
+       const LR = Object.keys(GR).some(aR.i),
+         nR = RR => null !== RR && LR && (0, aR.i)(RR),
+         UR = RR => nR(RR) ? `${aR.n}${(0,aR.k)(RR)}` : null !== uR && void 0 !== uR ? uR : hy(RR),
```

#### 171. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5644-L5646` → after: `L5644-L5646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5644-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5644-L5646) · [Before (L5644-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5644-L5646)

```diff
-               return `${OW.slice(0,Math.max(OW.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
-             }(null !== iW && void 0 !== iW ? iW : ""),
-             NW = null !== (mW = uW.get(WW)) && void 0 !== mW ? mW : [];
+               return `${GR.slice(0,Math.max(GR.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
+             }(null !== JR && void 0 !== JR ? JR : ""),
+             uR = null !== (yR = OR.get(RR)) && void 0 !== yR ? yR : [];
```

#### 172. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5648` → after: `L5648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5648) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5648)

```diff
-           ("" === EW || NW.includes(EW) || uW.set(WW, [...NW, EW]), "" !== EW) && gW.set(WW, [...null !== (PW = gW.get(WW)) && void 0 !== PW ? PW : [], {
+           ("" === tR || uR.includes(tR) || OR.set(RR, [...uR, tR]), "" !== tR) && oR.set(RR, [...null !== (ZR = oR.get(RR)) && void 0 !== ZR ? ZR : [], {
```

#### 173. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5666` → after: `L5666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5666) · [Before (L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5666)

```diff
-               error: `There is no prefab called ${iW}. The prefabs are: ${Mm.map((WW=>WW.name)).join(", ")}.`
+               error: `There is no prefab called ${JR}. The prefabs are: ${Uy.map((RR=>RR.name)).join(", ")}.`
```

#### 174. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5668` → after: `L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5668) · [Before (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5668)

```diff
-           }(null !== (EW = wW[WW]) && void 0 !== EW ? EW : "", iW, OW, cW);
+           }(null !== (tR = fR[RR]) && void 0 !== tR ? tR : "", JR, GR, iR);
```

#### 175. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5674` → after: `L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5674) · [Before (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5674)

```diff
-           }), VW(WW, null !== mW && void 0 !== mW ? mW : PW.prefab.title, PW.text), fW.push({
+           }), PR(RR, null !== yR && void 0 !== yR ? yR : ZR.prefab.title, ZR.text), mR.push({
```

#### 176. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5680` → after: `L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5680) · [Before (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5680)

```diff
-             setup: null !== (NW = PW.prefab.setup) && void 0 !== NW ? NW : null
+             setup: null !== (uR = ZR.prefab.setup) && void 0 !== uR ? uR : null
```

#### 177. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5699` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5699) · [Before (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5699)

```diff
-         const WW = null !== (Li = Pi.get(bW.name)) && void 0 !== Li ? Li : 0;
+         const RR = null !== (qJ = ZJ.get(aR.name)) && void 0 !== qJ ? qJ : 0;
```

#### 178. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5709` → after: `L5709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5709) · [Before (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5709)

```diff
-               path: null !== (ci = null !== (wi = null !== (ti = bW.args.path) && void 0 !== ti ? ti : NW) && void 0 !== wi ? wi : mW) && void 0 !== ci ? ci : void 0
+               path: null !== (iJ = null !== (fJ = null !== (VJ = aR.args.path) && void 0 !== VJ ? VJ : uR) && void 0 !== fJ ? fJ : yR) && void 0 !== iJ ? iJ : void 0
```

#### 179. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5720` → after: `L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5720) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5720)

```diff
-           KW = `${iW.name}\n${JSON.stringify({...iW.args,why:void 0})}`,
+           CR = `${JR.name}\n${JSON.stringify({...JR.args,why:void 0})}`,
```

#### 180. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5740` → after: `L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5740) · [Before (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5740)

```diff
-             const WW = void 0 !== EW && "" !== EW.trim() ? kW(EW) : void 0 === NW ? null !== mW && void 0 !== mW ? mW : "index.js" : null;
+             const RR = void 0 !== tR && "" !== tR.trim() ? UR(tR) : void 0 === uR ? null !== yR && void 0 !== yR ? yR : "index.js" : null;
```

#### 181. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5744` → after: `L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5744) · [Before (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5744)

```diff
-               zW(WW, iW.args.name, null !== (Zi = iW.args.settings) && void 0 !== Zi ? Zi : "", iW.args.why)
+               TR(RR, JR.args.name, null !== (KJ = JR.args.settings) && void 0 !== KJ ? KJ : "", JR.args.why)
```

#### 182. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5751` → after: `L5751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5751) · [Before (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5751)

```diff
-             if (0 === GW.length) GW = Ai(null !== (xi = iW.args.steps) && void 0 !== xi ? xi : "")
+             if (0 === YR.length) YR = eJ(null !== (wJ = JR.args.steps) && void 0 !== wJ ? wJ : "")
```

#### 183. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5754` → after: `L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5754) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5754)

```diff
-             const WW = Ei(null !== (li = iW.args.note) && void 0 !== li ? li : "");
+             const RR = tJ(null !== (rJ = JR.args.note) && void 0 !== rJ ? rJ : "");
```

#### 184. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5769` → after: `L5769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5769) · [Before (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5769)

```diff
-               if (void 0 !== PW && ("" === PW.trim() && !Ni || qm(Qm(PW), void 0 === EW ? "" : null !== (ji = wW[kW(EW)]) && void 0 !== ji ? ji : ""))) lW(iW.name, void 0 === EW ? null : kW(EW), "placeholder");
+               if (void 0 !== ZR && ("" === ZR.trim() && !uJ || zy(Fy(ZR), void 0 === tR ? "" : null !== (LJ = fR[UR(tR)]) && void 0 !== LJ ? LJ : ""))) rR(JR.name, void 0 === tR ? null : UR(tR), "placeholder");
```

#### 185. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5771` → after: `L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5771) · [Before (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5771)

```diff
-               else if (void 0 !== EW && MW(kW(EW)) && "" !== (null !== (Ui = OW[kW(EW)]) && void 0 !== Ui ? Ui : "").trim()) lW(iW.name, kW(EW), "unread", void 0 === PW ? void 0 : {
+               else if (void 0 !== tR && AR(UR(tR)) && "" !== (null !== (nJ = GR[UR(tR)]) && void 0 !== nJ ? nJ : "").trim()) rR(JR.name, UR(tR), "unread", void 0 === ZR ? void 0 : {
```

#### 186. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5789` → after: `L5789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5789) · [Before (L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5789)

```diff
-               NW = null === WW ? "" : null !== (si = wW[WW]) && void 0 !== si ? si : "",
+               uR = null === RR ? "" : null !== (WJ = fR[RR]) && void 0 !== WJ ? WJ : "",
```

#### 187. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5796-L5797` → after: `L5796-L5797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5796-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5796-L5797) · [Before (L5796-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5796-L5797)

```diff
-               })) || void 0 === Ki ? void 0 : Ki.text) && void 0 !== Mi ? Mi : null : "replace_function" === iW.name ? IW(NW, OW, PW) : Wi(NW, OW, PW);
-             null === WW || null === ZW ? lW(iW.name, WW, lO(iW) ? "brokenCode" : "missingArgs") : qm(PW, NW) ? lW(iW.name, WW, "placeholder") : "replace_function" === iW.name && MW(WW) && aW(NW, null !== OW && void 0 !== OW ? OW : "", PW) ? (lW(iW.name, WW, "unread", {
+               })) || void 0 === CJ ? void 0 : CJ.text) && void 0 !== AJ ? AJ : null : "replace_function" === JR.name ? kR(uR, GR, ZR) : RJ(uR, GR, ZR);
+             null === RR || null === KR ? rR(JR.name, RR, KG(JR) ? "brokenCode" : "missingArgs") : zy(ZR, uR) ? rR(JR.name, RR, "placeholder") : "replace_function" === JR.name && AR(RR) && QR(uR, null !== GR && void 0 !== GR ? GR : "", ZR) ? (rR(JR.name, RR, "unread", {
```

#### 188. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5802-L5803` → after: `L5802-L5803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5802-L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5802-L5803) · [Before (L5802-L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5802-L5803)

```diff
-             const WW = !0 === (null === (Si = UW._meta) || void 0 === Si ? void 0 : Si.appliesAtOnce) ? null !== NW && void 0 !== NW ? NW : mW : void 0 === EW ? null : kW(EW),
-               OW = null === WW ? "" : null !== (Yi = wW[WW]) && void 0 !== Yi ? Yi : "",
+             const RR = !0 === (null === (XJ = nR._meta) || void 0 === XJ ? void 0 : XJ.appliesAtOnce) ? null !== uR && void 0 !== uR ? uR : yR : void 0 === tR ? null : UR(tR),
+               GR = null === RR ? "" : null !== (MJ = fR[RR]) && void 0 !== MJ ? MJ : "",
```

#### 189. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5807-L5809` → after: `L5807-L5809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5807-L5809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5807-L5809) · [Before (L5807-L5809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5807-L5809)

```diff
-               AW = null !== cW && void 0 !== cW ? cW : xW,
-               bW = null !== xW ? Vi(null !== ZW && void 0 !== ZW ? ZW : "") : null !== ZW && void 0 !== ZW ? ZW : "",
-               jW = null === AW || void 0 === LW ? bW : dW(OW.slice(AW.from, AW.to), oW(OW, AW, null !== xW ? Vi(LW) : LW, bW), eW(OW.slice(AW.to)));
+               eR = null !== iR && void 0 !== iR ? iR : wR,
+               aR = null !== wR ? cJ(null !== KR && void 0 !== KR ? KR : "") : null !== KR && void 0 !== KR ? KR : "",
+               LR = null === eR || void 0 === qR ? aR : NR(GR.slice(eR.from, eR.to), xR(GR, eR, null !== wR ? cJ(qR) : qR, aR), DR(GR.slice(eR.to)));
```

#### 190. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5816-L5817` → after: `L5816-L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5816-L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5816-L5817) · [Before (L5816-L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5816-L5817)

```diff
-               const mW = sW(WW) ? FW(OW, AW.from, AW.to, null !== LW && void 0 !== LW ? LW : "", bW) : null;
-               wW[WW] = null !== mW && void 0 !== mW ? mW : OW.slice(0, AW.from) + jW + OW.slice(AW.to), tW.add(WW), VW(WW, iW.args.why, jW)
+               const yR = WR(RR) ? sR(GR, eR.from, eR.to, null !== qR && void 0 !== qR ? qR : "", aR) : null;
+               fR[RR] = null !== yR && void 0 !== yR ? yR : GR.slice(0, eR.from) + LR + GR.slice(eR.to), VR.add(RR), PR(RR, JR.args.why, LR)
```

#### 191. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5827-L5828` → after: `L5827-L5828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5827-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5827-L5828) · [Before (L5827-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5827-L5828)

```diff
-           EW = null !== (Ji = null !== NW && void 0 !== NW ? NW : mW) && void 0 !== Ji ? Ji : "index.js",
-           PW = null !== (Hi = wW[EW]) && void 0 !== Hi ? Hi : "";
+           tR = null !== (pJ = null !== uR && void 0 !== uR ? uR : yR) && void 0 !== pJ ? pJ : "index.js",
+           ZR = null !== (gJ = fR[tR]) && void 0 !== gJ ? gJ : "";
```

#### 192. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5843` → after: `L5843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5843) · [Before (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5843)

```diff
-           wW[bW] = tm(wm(WW ? wW[bW] : wW[bW].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (ui = OW[bW]) && void 0 !== ui ? ui : "");
+           fR[aR] = iy(qy(RR ? fR[aR] : fR[aR].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (vJ = GR[aR]) && void 0 !== vJ ? vJ : "");
```

#### 193. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5848` → after: `L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5848) · [Before (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5848)

```diff
-         const WW = ki(EE(mE(wW[bW])), sW(bW) ? EW : [], null !== (ni = OW[bW]) && void 0 !== ni ? ni : "");
+         const RR = UJ(Jt(Rt(fR[aR])), WR(aR) ? tR : [], null !== (bJ = GR[aR]) && void 0 !== bJ ? bJ : "");
```

#### 194. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5852-L5854` → after: `L5852-L5854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5852-L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5852-L5854) · [Before (L5852-L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5852-L5854)

```diff
-         const WW = bW.problems.length > 0 ? ` Kept as it was: ${bW.problems.join("; ")}.` : "",
-           iW = bW.fixed.length > 0 ? ` Names changed to real ones: ${bW.fixed.join(", ")}.` : "";
-         AW += `\n\nThis uses the ready-made ${bW.title}.${iW}${WW}${bW.setup?` ${bW.setup}`:""}`
+         const RR = aR.problems.length > 0 ? ` Kept as it was: ${aR.problems.join("; ")}.` : "",
+           JR = aR.fixed.length > 0 ? ` Names changed to real ones: ${aR.fixed.join(", ")}.` : "";
+         eR += `\n\nThis uses the ready-made ${aR.title}.${JR}${RR}${aR.setup?` ${aR.setup}`:""}`
```

#### 195. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5860` → after: `L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5860) · [Before (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5860)

```diff
-         of HW) AW += `\n\nI renamed \`${bW}\` to \`${nW}\`, the name World Code calls.`;
+         of bR) eR += `\n\nI renamed \`${aR}\` to \`${vR}\`, the name World Code calls.`;
```

#### 196. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5864` → after: `L5864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5864) · [Before (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5864)

```diff
-         const WW = null !== (ei = OW[bW]) && void 0 !== ei ? ei : "";
+         const RR = null !== (NJ = GR[aR]) && void 0 !== NJ ? NJ : "";
```

#### 197. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5959` → after: `L5959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5959) · [Before (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5959)

```diff
-       const iW = null === WW.path ? WW.tool : `${WW.tool} ${WW.path}`;
+       const JR = null === RR.path ? RR.tool : `${RR.tool} ${RR.path}`;
```

#### 198. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5961-L5966` → after: `L5961-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5961-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5961-L5966) · [Before (L5961-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5961-L5966)

```diff
-       if ("prefab" === WW.reason) return `${iW}: ${null!==(OW=WW.detail)&&void 0!==OW?OW:"the prefab couldn't go in."} Nothing changed.`;
-       if ("missingArgs" === WW.reason) return `${iW}: the call was missing an argument it needs, so nothing changed.`;
-       if ("placeholder" === WW.reason) return "write_file" === WW.tool ? `${iW}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${iW}: the code had a line standing in for code left out ("// ... exi … [truncated]
-       if ("unread" === WW.reason) return `${iW}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==WW.path&&(0,bW.e)(WW.path)?"view_world_code":"view_file"} shows.`;
-       if ("brokenCode" === WW.reason) return `${iW}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
-       return `${iW}: search matched nothing in the file, so nothing changed. ${WW.closest?`The closest lines (${WW.closest.line}-${WW.closest.lastLine}) are:\n${WW.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${WW.functions.length>0?`, or use replace … [truncated]
+       if ("prefab" === RR.reason) return `${JR}: ${null!==(GR=RR.detail)&&void 0!==GR?GR:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === RR.reason) return `${JR}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === RR.reason) return "write_file" === RR.tool ? `${JR}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${JR}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === RR.reason) return `${JR}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==RR.path&&(0,aR.i)(RR.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === RR.reason) return `${JR}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${JR}: search matched nothing in the file, so nothing changed. ${RR.closest?`The closest lines (${RR.closest.line}-${RR.closest.lastLine}) are:\n${RR.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${RR.functions.length>0?`, or use replace … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5983` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5983) · [Before (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5983)

```diff
-       kE = WW => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
+       Lt = RR => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5985` → after: `L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5985) · [Before (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5985)

```diff
-       ME = WW => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
+       Ut = RR => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
```

#### 201. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5995` → after: `L5995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L5995) · [Before (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L5995)

```diff
-     const YE = `You looked at World Code: its files are below, their paths starting ${bW.j}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${b … [truncated]
+     const Ct = `You looked at World Code: its files are below, their paths starting ${aR.n}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${a … [truncated]
```

#### 202. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6009-L6010` → after: `L6009-L6010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6009-L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6009-L6010) · [Before (L6009-L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6009-L6010)

```diff
-       const kW = iW ? bW.d : jW,
-         sW = iW ? `${bW.j}index.js` : kW,
+       const UR = JR ? aR.e : LR,
+         WR = JR ? `${aR.n}index.js` : UR,
```

#### 203. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6014-L6029` → after: `L6014-L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6014-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6014-L6029) · [Before (L6014-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6014-L6029)

```diff
-         YW = KW("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${MW("edit … [truncated]
-         yW = KW("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
-         TW = KW("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
-         JW = KW("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${MW("edit_fil … [truncated]
-         hW = iW ? `2. Then give the whole new code with a write_file call, exactly like this:\n${MW("write_file",{path:kW,why:"what the change does",content:KE.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${MW("write_fi … [truncated]
-         HW = iW ? "" : ` If there is no code yet, write it in ${kW}.`,
-         nW = MW("switch_to_world_code", {}),
-         uW = iW ? cW ? `\n${YE}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
-         oW = xW && KW("use_prefab") && ZW.length >= 2,
-         dW = oW ? ZW.slice(0, 3).map((WW => WW.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
-         eW = oW ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
-         vW = KW("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
-         gW = KW("plan") ? `\n${"deepseek"===OW?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
-         DW = null !== (EW = ZW[0]) && void 0 !== EW ? EW : Ym("parkour"),
-         VW = (null !== (NW = null === DW || void 0 === DW ? void 0 : DW.settings) && void 0 !== NW ? NW : []).slice(0, 2).map((WW => `${WW.key}: ${WW.value}`)).join("\n");
-       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
+         MR = CR("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${AR("edit … [truncated]
+         BR = CR("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
+         lR = CR("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
+         pR = CR("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${AR("edit_fil … [truncated]
+         gR = JR ? `2. Then give the whole new code with a write_file call, exactly like this:\n${AR("write_file",{path:UR,why:"what the change does",content:Wt.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${AR("write_fi … [truncated]
+         bR = JR ? "" : ` If there is no code yet, write it in ${UR}.`,
+         vR = AR("switch_to_world_code", {}),
+         OR = JR ? iR ? `\n${Ct}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
+         xR = wR && CR("use_prefab") && KR.length >= 2,
+         NR = xR ? KR.slice(0, 3).map((RR => RR.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
+         DR = xR ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
+         HR = CR("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
+         oR = CR("plan") ? `\n${"deepseek"===GR?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
+         cR = null !== (tR = KR[0]) && void 0 !== tR ? tR : Cy("parkour"),
+         PR = (null !== (uR = null === cR || void 0 === cR ? void 0 : cR.settings) && void 0 !== uR ? uR : []).slice(0, 2).map((RR => `${RR.key}: ${RR.value}`)).join("\n");
+       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
```

#### 204. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6031` → after: `L6031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6031) · [Before (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6031)

```diff
-         mW ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
+         yR ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
```

#### 205. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6034` → after: `L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6034) · [Before (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6034)

```diff
-         NW.join("\n")
+         uR.join("\n")
```

#### 206. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6036` → after: `L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6036) · [Before (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6036)

```diff
-       `}(WW,MW,wW)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(RR,AR,fR)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 207. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6039-L6040` → after: `L6039-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6039-L6040) · [Before (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6039-L6040)

```diff
-     function TE(WW, iW, OW) {
-       return Object.keys(WW).filter((WW => !OW || !(0, bW.e)(WW))).sort(((WW, OW) => (OW === iW ? 1 : 0) - (WW === iW ? 1 : 0) || WW.localeCompare(OW)))
+     function Mt(RR, JR, GR) {
+       return Object.keys(RR).filter((RR => !GR || !(0, aR.i)(RR))).sort(((RR, GR) => (GR === JR ? 1 : 0) - (RR === JR ? 1 : 0) || RR.localeCompare(GR)))
```

#### 208. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6043-L6046` → after: `L6043-L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6043-L6046) · [Before (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6043-L6046)

```diff
-     function JE(WW, iW, OW) {
-       var mW;
-       const EW = TE(WW, iW, OW);
-       return null !== iW && EW.includes(iW) ? iW : null !== (mW = EW[0]) && void 0 !== mW ? mW : null
+     function Bt(RR, JR, GR) {
+       var yR;
+       const tR = Mt(RR, JR, GR);
+       return null !== JR && tR.includes(JR) ? JR : null !== (yR = tR[0]) && void 0 !== yR ? yR : null
```

#### 209. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6049-L6050` → after: `L6049-L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6049-L6050) · [Before (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6049-L6050)

```diff
-     function hE(WW) {
-       return WW.includes("index.ts") ? "index.ts" : "index.js"
+     function lt(RR) {
+       return RR.includes("index.ts") ? "index.ts" : "index.js"
```

#### 210. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6053-L6055` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6053-L6055) · [Before (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6053-L6055)

```diff
-     function HE(WW) {
-       const iW = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${hE(WW)}`;
-       return `Only ${iW} runs by itself: another file runs when ${iW} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${iW}.\n`
+     function pt(RR) {
+       const JR = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${lt(RR)}`;
+       return `Only ${JR} runs by itself: another file runs when ${JR} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${JR}.\n`
```

#### 211. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6058-L6059` → after: `L6058-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6058-L6059) · [Before (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6058-L6059)

```diff
-     function nE(WW, iW) {
-       var OW;
+     function gt(RR, JR) {
+       var GR;
```

#### 212. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6061-L6066` → after: `L6061-L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6061-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6061-L6066) · [Before (L6061-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6061-L6066)

```diff
-         files: mW,
-         activePath: EW
-       } = WW, NW = !0 === WW.codeBlock, PW = TE(mW, EW, NW);
-       if (0 === PW.length || PW.every((WW => "" === mW[WW].trim()))) return NW ? "There is no code yet: the code block is empty." : PW.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const LW = null !== (OW = JE(mW, EW, NW)) && void 0 !== OW ? OW : PW[0];
-       return `${PW.length>1?`Their files:\n${PW.map((WW=>{const iW=""===(OW=mW[WW])?0:OW.replace(/\n$/,"").split("\n").length;var OW;return`- ${WW}: ${1===iW?"1 line":`${iW} lines`}${WW===LW?" (open in the editor, its code below)":""}`})).join("\n")}\n${NW?"":HE(PW)}\n`:""}${func … [truncated]
+         files: yR,
+         activePath: tR
+       } = RR, uR = !0 === RR.codeBlock, ZR = Mt(yR, tR, uR);
+       if (0 === ZR.length || ZR.every((RR => "" === yR[RR].trim()))) return uR ? "There is no code yet: the code block is empty." : ZR.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const qR = null !== (GR = Bt(yR, tR, uR)) && void 0 !== GR ? GR : ZR[0];
+       return `${ZR.length>1?`Their files:\n${ZR.map((RR=>{const JR=""===(GR=yR[RR])?0:GR.replace(/\n$/,"").split("\n").length;var GR;return`- ${RR}: ${1===JR?"1 line":`${JR} lines`}${RR===qR?" (open in the editor, its code below)":""}`})).join("\n")}\n${uR?"":pt(ZR)}\n`:""}${func … [truncated]
```

#### 213. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6069-L6070` → after: `L6069-L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6069-L6070) · [Before (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6069-L6070)

```diff
-     function uE(WW) {
-       var iW, OW, mW, EW, NW, PW;
+     function bt(RR) {
+       var JR, GR, yR, tR, uR, ZR;
```

#### 214. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6072-L6087` → after: `L6072-L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6072-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6072-L6087) · [Before (L6072-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6072-L6087)

```diff
-         codeBlock: !0 === WW.codeBlock,
-         hasCode: "" !== (null !== (iW = WW.files[null !== (OW = WW.activePath) && void 0 !== OW ? OW : ""]) && void 0 !== iW ? iW : "").trim(),
-         hasBigFile: Object.values(WW.files).some((WW => WW.length > 6e3)),
-         wantsExport: cE(WW.request),
-         canAsk: !0 === WW.canAsk,
-         canRemember: !0 === (null === (mW = WW.about) || void 0 === mW ? void 0 : mW.canRemember),
-         isBigRequest: li(WW.request),
-         canLookUp: !0 === WW.canLookUp,
-         hasOtherFiles: Object.keys(WW.files).length > 1,
-         hasErrors: WW.errors.length > 0,
-         canChangeWorldCode: !0 === WW.canChangeWorldCode,
-         hasWorldCodeFiles: Object.keys(WW.files).some(bW.e),
-         addsToEntryFile: !0 === WW.addsToEntryFile,
-         offersPrefabs: (EW = WW.request, NW = WW.files, PW = oE(WW), "never" !== PW.offer && ("always" === PW.offer || Vm(EW, 1).length > 0 || li(EW) || !jE(NW) && bE.test(EW))),
-         listsPrefabs: oE(WW).categories,
-         looksUpDocs: !0 === WW.looksUpDocs
+         codeBlock: !0 === RR.codeBlock,
+         hasCode: "" !== (null !== (JR = RR.files[null !== (GR = RR.activePath) && void 0 !== GR ? GR : ""]) && void 0 !== JR ? JR : "").trim(),
+         hasBigFile: Object.values(RR.files).some((RR => RR.length > 6e3)),
+         wantsExport: ut(RR.request),
+         canAsk: !0 === RR.canAsk,
+         canRemember: !0 === (null === (yR = RR.about) || void 0 === yR ? void 0 : yR.canRemember),
+         isBigRequest: rJ(RR.request),
+         canLookUp: !0 === RR.canLookUp,
+         hasOtherFiles: Object.keys(RR.files).length > 1,
+         hasErrors: RR.errors.length > 0,
+         canChangeWorldCode: !0 === RR.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(RR.files).some(aR.i),
+         addsToEntryFile: !0 === RR.addsToEntryFile,
+         offersPrefabs: (tR = RR.request, uR = RR.files, ZR = vt(RR), "never" !== ZR.offer && ("always" === ZR.offer || Hy(tR, 1).length > 0 || rJ(tR) || !rt(uR) && wt.test(tR))),
+         listsPrefabs: vt(RR).categories,
+         looksUpDocs: !0 === RR.looksUpDocs
```

#### 215. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6091-L6093` → after: `L6091-L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6091-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6091-L6093) · [Before (L6091-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6091-L6093)

```diff
-     function oE(WW) {
-       var iW;
-       return null !== (iW = WW.prefabs) && void 0 !== iW ? iW : AE
+     function vt(RR) {
+       var JR;
+       return null !== (JR = RR.prefabs) && void 0 !== JR ? JR : Kt
```

#### 216. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6096-L6104` → after: `L6096-L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6096-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6096-L6104) · [Before (L6096-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6096-L6104)

```diff
-     function dE(WW, iW) {
-       return "deepseek" === iW ? function(WW) {
-         const iW = wE[WW ? "codeBlock" : "worldCode"];
-         return Yi.filter((WW => iW.has(WW.name)))
-       }(!0 === WW.codeBlock) : function(WW) {
-         const iW = (WW.hasCode || WW.hasBigFile) && !WW.codeBlock || !0 === WW.hasWorldCodeFiles || !0 === WW.addsToEntryFile,
-           OW = !0 === WW.canLookUp,
-           mW = WW.codeBlock && !0 === WW.canChangeWorldCode && !0 !== WW.hasWorldCodeFiles && OW,
-           EW = {
+     function Ot(RR, JR) {
+       return "deepseek" === JR ? function(RR) {
+         const JR = Zt[RR ? "codeBlock" : "worldCode"];
+         return MJ.filter((RR => JR.has(RR.name)))
+       }(!0 === RR.codeBlock) : function(RR) {
+         const JR = (RR.hasCode || RR.hasBigFile) && !RR.codeBlock || !0 === RR.hasWorldCodeFiles || !0 === RR.addsToEntryFile,
+           GR = !0 === RR.canLookUp,
+           yR = RR.codeBlock && !0 === RR.canChangeWorldCode && !0 !== RR.hasWorldCodeFiles && GR,
+           tR = {
```

#### 217. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6106-L6107` → after: `L6106-L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6106-L6107) · [Before (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6106-L6107)

```diff
-             edit_file: WW.hasBigFile,
-             replace_function: iW,
+             edit_file: RR.hasBigFile,
+             replace_function: JR,
```

#### 218. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6109-L6126` → after: `L6109-L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6109-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6109-L6126) · [Before (L6109-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6109-L6126)

```diff
-             add_world_code: WW.codeBlock && !0 !== WW.hasWorldCodeFiles,
-             edit_code_in_place: WW.hasCode,
-             export_game: WW.wantsExport,
-             switch_to_world_code: WW.codeBlock,
-             ask_creator: WW.canAsk,
-             remember: !0 === WW.canRemember && !WW.codeBlock,
-             plan: !0 === WW.isBigRequest && WW.canAsk && !WW.codeBlock,
-             view_file: OW && !0 === WW.hasOtherFiles && !WW.codeBlock,
-             view_world_code: mW,
-             view_chunk: OW,
-             view_game_state: OW,
-             get_docs: OW,
-             fetch_url: OW && !0 === WW.looksUpDocs,
-             find_names: OW,
-             view_errors: OW && !0 === WW.hasErrors,
-             use_prefab: !0 === WW.offersPrefabs && !WW.codeBlock,
- ... (2 more removed lines; see GitHub link above)
+             add_world_code: RR.codeBlock && !0 !== RR.hasWorldCodeFiles,
+             edit_code_in_place: RR.hasCode,
+             export_game: RR.wantsExport,
+             switch_to_world_code: RR.codeBlock,
+             ask_creator: RR.canAsk,
+             remember: !0 === RR.canRemember && !RR.codeBlock,
+             plan: !0 === RR.isBigRequest && RR.canAsk && !RR.codeBlock,
+             view_file: GR && !0 === RR.hasOtherFiles && !RR.codeBlock,
+             view_world_code: yR,
+             view_chunk: GR,
+             view_game_state: GR,
+             get_docs: GR,
+             fetch_url: GR && !0 === RR.looksUpDocs,
+             find_names: GR,
+             view_errors: GR && !0 === RR.hasErrors,
+             use_prefab: !0 === RR.offersPrefabs && !RR.codeBlock,
+ ... (2 more added lines; see GitHub link above)
```

#### 219. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6128-L6131` → after: `L6128-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6128-L6131) · [Before (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6128-L6131)

```diff
-         let NW = Yi.filter((WW => EW[WW.name]));
-         for (const PW of ["remember", "plan"]) NW.filter((WW => !yi(WW.name))).length > 7 && (NW = NW.filter((WW => WW.name !== PW)));
-         return NW
-       }(uE(WW))
+         let uR = MJ.filter((RR => tR[RR.name]));
+         for (const ZR of ["remember", "plan"]) uR.filter((RR => !BJ(RR.name))).length > 7 && (uR = uR.filter((RR => RR.name !== ZR)));
+         return uR
+       }(bt(RR))
```

#### 220. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6134-L6141` → after: `L6134-L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6134-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6134-L6141) · [Before (L6134-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6134-L6141)

```diff
-     function eE(WW, iW) {
-       var OW, mW;
-       const EW = uE(WW),
-         NW = !0 === EW.canLookUp,
-         PW = (null !== (OW = null === (mW = WW.lookups) || void 0 === mW ? void 0 : mW.length) && void 0 !== OW ? OW : 0) > 0,
-         LW = !0 === EW.hasWorldCodeFiles,
-         cW = [EW.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", EW.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", NW ? "" : PW ? "You have looked things up as many times as you can: answer n … [truncated]
-       return cW.length > 0 ? `\n\nFor this request: ${cW.join(" ")}` : ""
+     function xt(RR, JR) {
+       var GR, yR;
+       const tR = bt(RR),
+         uR = !0 === tR.canLookUp,
+         ZR = (null !== (GR = null === (yR = RR.lookups) || void 0 === yR ? void 0 : yR.length) && void 0 !== GR ? GR : 0) > 0,
+         qR = !0 === tR.hasWorldCodeFiles,
+         iR = [tR.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", tR.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", uR ? "" : ZR ? "You have looked things up as many times as you can: answer n … [truncated]
+       return iR.length > 0 ? `\n\nFor this request: ${iR.join(" ")}` : ""
```

#### 221. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6144-L6146` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6144-L6146) · [Before (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6144-L6146)

```diff
-     function vE(WW, iW) {
-       var OW, mW, EW, NW, PW, LW;
-       let cW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UE,
+     function Nt(RR, JR) {
+       var GR, yR, tR, uR, ZR, qR;
+       let iR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et,
```

#### 222. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6148-L6149` → after: `L6148-L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6148-L6149) · [Before (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6148-L6149)

```diff
-           docsInTurn: wW = !1,
-           Yj: tW = !1
+           docsInTurn: fR = !1,
+           lL: VR = !1
```

#### 223. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6151-L6183` → after: `L6151-L6183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6151-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6151-L6183) · [Before (L6151-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6151-L6183)

```diff
-       const ZW = "deepseek" === cW.format,
-         xW = Object.values(iW.files).join("\n"),
-         lW = iW.history.slice(-2).map((WW => WW.text)).join("\n"),
-         AW = `${iW.request}\n${lW}\n${iW.errors.join("\n")}`,
-         bW = !0 === iW.looksUpDocs,
-         jW = bW && !0 === iW.canLookUp ? [] : WW.find(AW, xW, 12),
-         UW = WW.matchItemAndBlockNames(AW, 12),
-         kW = !0 === iW.codeBlock,
-         sW = kW ? "myId" : "playerId",
-         MW = dE(iW, cW.format),
-         KW = MW.some((WW => "use_prefab" === WW.name)),
-         SW = !KW || ZW && !0 !== uE(iW).offersPrefabs ? [] : function(WW, iW, OW) {
-           if ("never" === OW.offer || "none" === OW.list) return [];
-           if ("all" === OW.list) return [...Mm];
-           const mW = Vm(WW, 4);
-           if (jE(iW) || !bE.test(WW) && !li(WW)) return mW;
- ... (17 more removed lines; see GitHub link above)
+       const KR = "deepseek" === iR.format,
+         wR = Object.values(JR.files).join("\n"),
+         rR = JR.history.slice(-2).map((RR => RR.text)).join("\n"),
+         eR = `${JR.request}\n${rR}\n${JR.errors.join("\n")}`,
+         aR = !0 === JR.looksUpDocs,
+         LR = aR && !0 === JR.canLookUp ? [] : RR.find(eR, wR, 12),
+         nR = RR.matchItemAndBlockNames(eR, 12),
+         UR = !0 === JR.codeBlock,
+         WR = UR ? "myId" : "playerId",
+         AR = Ot(JR, iR.format),
+         CR = AR.some((RR => "use_prefab" === RR.name)),
+         XR = !CR || KR && !0 !== bt(JR).offersPrefabs ? [] : function(RR, JR, GR) {
+           if ("never" === GR.offer || "none" === GR.list) return [];
+           if ("all" === GR.list) return [...Uy];
+           const yR = Hy(RR, 4);
+           if (rt(JR) || !wt.test(RR) && !rJ(RR)) return yR;
+ ... (17 more added lines; see GitHub link above)
```

#### 224. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6185` → after: `L6185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6185) · [Before (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6185)

```diff
-           content: ZE([kW ? ME(bW) : kE(bW), ...bW ? [] : [kW ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${WW.index("callback")}` : `## Callbacks (all of them)\n${WW.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: it([UR ? Ut(aR) : Lt(aR), ...aR ? [] : [UR ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${RR.index("callback")}` : `## Callbacks (all of them)\n${RR.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 225. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6192-L6197` → after: `L6192-L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6192-L6197) · [Before (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6192-L6197)

```diff
-             hasWorldCodeFiles: !0 === uE(iW).hasWorldCodeFiles,
-             hasLookedUp: (null !== (OW = null === (mW = iW.lookups) || void 0 === mW ? void 0 : mW.length) && void 0 !== OW ? OW : 0) > 0,
-             movesToWorldCode: !0 === iW.canChangeWorldCode,
-             listedPrefabs: SW,
-             guidesToPrefabs: !0 === oE(iW).guide
-           })].filter((WW => "" !== WW)).join("\n\n"), MW, cW.format, cW.nativeTools)
+             hasWorldCodeFiles: !0 === bt(JR).hasWorldCodeFiles,
+             hasLookedUp: (null !== (GR = null === (yR = JR.lookups) || void 0 === yR ? void 0 : yR.length) && void 0 !== GR ? GR : 0) > 0,
+             movesToWorldCode: !0 === JR.canChangeWorldCode,
+             listedPrefabs: XR,
+             guidesToPrefabs: !0 === vt(JR).guide
+           })].filter((RR => "" !== RR)).join("\n\n"), AR, iR.format, iR.nativeTools)
```

#### 226. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6199-L6202` → after: `L6199-L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6199-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6199-L6202) · [Before (L6199-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6199-L6202)

```diff
-       if (!ZW)
-         for (const DW of iW.history) JW.push({
-           role: DW.role,
-           content: DW.text
+       if (!KR)
+         for (const cR of JR.history) pR.push({
+           role: cR.role,
+           content: cR.text
```

#### 227. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6204-L6212` → after: `L6204-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6204-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6204-L6212) · [Before (L6204-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6204-L6212)

```diff
-       const hW = ZW && !tW && iW.history.length > 0 ? `Earlier in this chat:\n${iW.history.map((WW=>`${"user"===WW.role?"They asked":"You answered"}: ${WW.text}`)).join("\n")}\n\n` : "",
-         HW = null !== (EW = iW.about) && void 0 !== EW && EW.notes.length ? `AI notes (notes they kept):\n${iW.about.notes.map((WW=>`- ${WW}`)).join("\n")}\n\n` : "",
-         nW = null !== (NW = iW.about) && void 0 !== NW && NW.outline ? `Outline of their code:\n${iW.about.outline}\n\n` : "",
-         uW = iW.errors.length > 0 ? `\n\nErrors their world showed recently:\n${iW.errors.slice(-5).join("\n")}` : "",
-         oW = null === (PW = iW.failedEdits) || void 0 === PW || !PW.length || ZW && tW ? "" : `\n\nWhat happened to your last answer's changes:\n${function(WW,iW){return WW.map((WW=>OO[iW].editFailure(WW.tool,lE(WW)))).join("\n\n")}(iW.failedEdits,cW.format)}`,
-         dW = [...wW ? TW : [], ...ZW ? [YW, yW] : []].filter((WW => "" !== WW)).map((WW => `${WW}\n\n`)).join(""),
-         eW = null === (LW = iW.lookups) || void 0 === LW || !LW.length || ZW && tW ? "" : `\n\nWhat you looked up for this request:\n${vW=iW.lookups,gW=cW.format,vW.map((WW=>OO[gW].lookupResult(WW.tool,WW.about,WW.text))).join("\n\n")}`;
-       var vW, gW;
-       return JW.push({
+       const gR = KR && !VR && JR.history.length > 0 ? `Earlier in this chat:\n${JR.history.map((RR=>`${"user"===RR.role?"They asked":"You answered"}: ${RR.text}`)).join("\n")}\n\n` : "",
+         bR = null !== (tR = JR.about) && void 0 !== tR && tR.notes.length ? `AI notes (notes they kept):\n${JR.about.notes.map((RR=>`- ${RR}`)).join("\n")}\n\n` : "",
+         vR = null !== (uR = JR.about) && void 0 !== uR && uR.outline ? `Outline of their code:\n${JR.about.outline}\n\n` : "",
+         OR = JR.errors.length > 0 ? `\n\nErrors their world showed recently:\n${JR.errors.slice(-5).join("\n")}` : "",
+         xR = null === (ZR = JR.failedEdits) || void 0 === ZR || !ZR.length || KR && VR ? "" : `\n\nWhat happened to your last answer's changes:\n${function(RR,JR){return RR.map((RR=>RG[JR].editFailure(RR.tool,Vt(RR)))).join("\n\n")}(JR.failedEdits,iR.format)}`,
+         NR = [...fR ? lR : [], ...KR ? [MR, BR] : []].filter((RR => "" !== RR)).map((RR => `${RR}\n\n`)).join(""),
+         DR = null === (qR = JR.lookups) || void 0 === qR || !qR.length || KR && VR ? "" : `\n\nWhat you looked up for this request:\n${HR=JR.lookups,oR=iR.format,HR.map((RR=>RG[oR].lookupResult(RR.tool,RR.about,RR.text))).join("\n\n")}`;
+       var HR, oR;
+       return pR.push({
```

#### 228. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6215` → after: `L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6215) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6215)

```diff
-       }), JW
+       }), pR
```

#### 229. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6217` → after: `L6217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6217) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6217)

```diff
-     var gE = OW(40976);
+     var Dt = GR(40978);
```

#### 230. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6219-L6220` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6219-L6220) · [Before (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6219-L6220)

```diff
-     function DE(WW) {
-       var iW, OW, mW, EW, NW, PW;
+     function Ht(RR) {
+       var JR, GR, yR, tR, uR, ZR;
```

#### 231. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6222-L6224` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6222-L6224) · [Before (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6222-L6224)

```diff
-         args: LW
-       } = WW;
-       switch (WW.name) {
+         args: qR
+       } = RR;
+       switch (RR.name) {
```

#### 232. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6226` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6226) · [Before (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6226)

```diff
-           return null !== (iW = LW.path) && void 0 !== iW ? iW : "a file";
+           return null !== (JR = qR.path) && void 0 !== JR ? JR : "a file";
```

#### 233. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6230` → after: `L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6230) · [Before (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6230)

```diff
-           return LW.position ? `the blocks near ${null!==(OW=null===(mW=(0,gE.e)(LW.position))||void 0===mW?void 0:mW.map(Math.floor).join(", "))&&void 0!==OW?OW:LW.position}` : "the blocks around you";
+           return qR.position ? `the blocks near ${null!==(GR=null===(yR=(0,Dt.f)(qR.position))||void 0===yR?void 0:yR.map(Math.floor).join(", "))&&void 0!==GR?GR:qR.position}` : "the blocks around you";
```

#### 234. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6234` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6234) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6234)

```diff
-           return LW.name ? `the docs for ${LW.name}` : `the list of ${pE(null!==(EW=LW.list)&&void 0!==EW?EW:VE)}`;
+           return qR.name ? `the docs for ${qR.name}` : `the list of ${ct(null!==(tR=qR.list)&&void 0!==tR?tR:ot)}`;
```

#### 235. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6236-L6240` → after: `L6236-L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6236-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6236-L6240) · [Before (L6236-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6236-L6240)

```diff
-           return function(WW) {
-             const iW = void 0 === WW ? null : MW(WW);
-             if (null === iW) return null !== WW && void 0 !== WW ? WW : "a docs page";
-             return KW(iW) ? "the list of docs pages" : `the docs page ${function(WW){const iW=(0,UW.I)(WW);return null===iW?WW:`${iW.name}${null===iW.part?"":`/${iW.part}`}`}(iW)}`
-           }(LW.url);
+           return function(RR) {
+             const JR = void 0 === RR ? null : AR(RR);
+             if (null === JR) return null !== RR && void 0 !== RR ? RR : "a docs page";
+             return CR(JR) ? "the list of docs pages" : `the docs page ${function(RR){const JR=(0,nR.t)(RR);return null===JR?RR:`${JR.name}${null===JR.part?"":`/${JR.part}`}`}(JR)}`
+           }(qR.url);
```

#### 236. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6242` → after: `L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6242) · [Before (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6242)

```diff
-           return `names for "${null!==(NW=LW.words)&&void 0!==NW?NW:""}"`;
+           return `names for "${null!==(uR=qR.words)&&void 0!==uR?uR:""}"`;
```

#### 237. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6246` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6246) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6246)

```diff
-           return LW.category ? `the ready-made ${LW.category} games` : "the ready-made games";
+           return qR.category ? `the ready-made ${qR.category} games` : "the ready-made games";
```

#### 238. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6248` → after: `L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6248) · [Before (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6248)

```diff
-           return `the ready-made ${null!==(PW=LW.name)&&void 0!==PW?PW:"game"}`
+           return `the ready-made ${null!==(ZR=qR.name)&&void 0!==ZR?ZR:"game"}`
```

#### 239. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6251` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6251) · [Before (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6251)

```diff
-     const VE = "functions";
+     const ot = "functions";
```

#### 240. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6253-L6254` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6253-L6254) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6253-L6254)

```diff
-     function pE(WW) {
-       return WW.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+     function ct(RR) {
+       return RR.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
```

#### 241. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6257-L6258` → after: `L6257-L6258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6257-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6257-L6258) · [Before (L6257-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6257-L6258)

```diff
-     function fE(WW) {
-       return "get_docs" === WW.name || "fetch_url" === WW.name
+     function Pt(RR) {
+       return "get_docs" === RR.name || "fetch_url" === RR.name
```

#### 242. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6260-L6263` → after: `L6260-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6260-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6260-L6263) · [Before (L6260-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6260-L6263)

```diff
-     async function CE(WW, iW) {
-       var OW;
-       const mW = DE(WW),
-         EW = iW => ({
+     async function It(RR, JR) {
+       var GR;
+       const yR = Ht(RR),
+         tR = JR => ({
```

#### 243. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6265-L6267` → after: `L6265-L6267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6265-L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6265-L6267) · [Before (L6265-L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6265-L6267)

```diff
-             tool: WW.name,
-             about: mW,
-             text: iW
+             tool: RR.name,
+             about: yR,
+             text: JR
```

#### 244. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6270` → after: `L6270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6270) · [Before (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6270)

```diff
-       switch (WW.name) {
+       switch (RR.name) {
```

#### 245. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6272` → after: `L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6272) · [Before (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6272)

```diff
-           return EW((LW = WW.args.path, cW = iW.files, void 0 === LW ? "No path was given: give the path of a file from the list." : Object.hasOwn(cW, LW) ? "" === cW[LW] ? `${LW} is empty.` : cW[LW] : `There is no file called ${LW}. Their files are: ${Object.keys(cW).join(", ")} … [truncated]
+           return tR((qR = RR.args.path, iR = JR.files, void 0 === qR ? "No path was given: give the path of a file from the list." : Object.hasOwn(iR, qR) ? "" === iR[qR] ? `${qR} is empty.` : iR[qR] : `There is no file called ${qR}. Their files are: ${Object.keys(iR).join(", ")} … [truncated]
```

#### 246. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6274-L6279` → after: `L6274-L6279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6274-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6274-L6279) · [Before (L6274-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6274-L6279)

```diff
-           const WW = iW.readWorldCode ? await iW.readWorldCode() : null;
-           if (null === WW) return EW("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const OW = Object.keys(WW).sort(),
-             mW = Object.fromEntries(OW.map((iW => [`${bW.j}${iW}`, WW[iW]]))),
-             NW = OW.map((iW => `${bW.j}${iW}:\n${""===WW[iW]?"(empty)":WW[iW]}`)).join("\n\n"),
-             PW = OW.length > 1 ? `\n\n${HE(OW,bW.j)}` : "";
+           const RR = JR.readWorldCode ? await JR.readWorldCode() : null;
+           if (null === RR) return tR("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const GR = Object.keys(RR).sort(),
+             yR = Object.fromEntries(GR.map((JR => [`${aR.n}${JR}`, RR[JR]]))),
+             uR = GR.map((JR => `${aR.n}${JR}:\n${""===RR[JR]?"(empty)":RR[JR]}`)).join("\n\n"),
+             ZR = GR.length > 1 ? `\n\n${pt(GR,aR.n)}` : "";
```

#### 247. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6281-L6282` → after: `L6281-L6282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6281-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6281-L6282) · [Before (L6281-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6281-L6282)

```diff
-             ...EW("" === NW ? `World Code has no code yet: ${bW.j}index.js is empty.` : `${NW}${PW}`),
-             worldCodeFiles: mW
+             ...tR("" === uR ? `World Code has no code yet: ${aR.n}index.js is empty.` : `${uR}${ZR}`),
+             worldCodeFiles: yR
```

#### 248. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6286` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6286) · [Before (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6286)

```diff
-           return EW(await iW.viewChunk((0, gE.e)(WW.args.position)));
+           return tR(await JR.viewChunk((0, Dt.f)(RR.args.position)));
```

#### 249. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6288` → after: `L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6288) · [Before (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6288)

```diff
-           return EW(await iW.viewGameState());
+           return tR(await JR.viewGameState());
```

#### 250. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6290-L6293` → after: `L6290-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6290-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6290-L6293) · [Before (L6290-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6290-L6293)

```diff
-           return EW(function(WW, iW, OW) {
-             if (void 0 === WW) {
-               const WW = (0, YW.c)(si, pE(null !== iW && void 0 !== iW ? iW : VE));
-               return void 0 === WW ? `There is no list called ${iW}: ask for ${Mi}.` : OW.index(WW)
+           return tR(function(RR, JR, GR) {
+             if (void 0 === RR) {
+               const RR = (0, MR.b)(WJ, ct(null !== JR && void 0 !== JR ? JR : ot));
+               return void 0 === RR ? `There is no list called ${JR}: ask for ${AJ}.` : GR.index(RR)
```

#### 251. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6295-L6299` → after: `L6295-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6295-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6295-L6299) · [Before (L6295-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6295-L6299)

```diff
-             const mW = OW.section(WW);
-             if (mW) return mW.text;
-             const EW = OW.find(WW, "", 3).map((WW => WW.name)).join(", ");
-             return `Nothing is called ${WW}.${""===EW?"":` The closest names are: ${EW}.`}`
-           }(WW.args.name, WW.args.list, iW.docs));
+             const yR = GR.section(RR);
+             if (yR) return yR.text;
+             const tR = GR.find(RR, "", 3).map((RR => RR.name)).join(", ");
+             return `Nothing is called ${RR}.${""===tR?"":` The closest names are: ${tR}.`}`
+           }(RR.args.name, RR.args.list, JR.docs));
```

#### 252. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6301` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6301) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6301)

```diff
-           return EW(await iW.fetchDocsPage(null !== (OW = WW.args.url) && void 0 !== OW ? OW : ""));
+           return tR(await JR.fetchDocsPage(null !== (GR = RR.args.url) && void 0 !== GR ? GR : ""));
```

#### 253. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6303-L6305` → after: `L6303-L6305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6303-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6303-L6305) · [Before (L6303-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6303-L6305)

```diff
-           var NW, PW;
-           const OW = iW.docs.searchNames(null !== (NW = WW.args.words) && void 0 !== NW ? NW : "", 20);
-           return EW(OW.length > 0 ? OW.join(", ") : `No block, item or mob name has any of the words "${null!==(PW=WW.args.words)&&void 0!==PW?PW:""}".`)
+           var uR, ZR;
+           const GR = JR.docs.searchNames(null !== (uR = RR.args.words) && void 0 !== uR ? uR : "", 20);
+           return tR(GR.length > 0 ? GR.join(", ") : `No block, item or mob name has any of the words "${null!==(ZR=RR.args.words)&&void 0!==ZR?ZR:""}".`)
```

#### 254. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6308)

```diff
-           return EW(iW.errors.length > 0 ? iW.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return tR(JR.errors.length > 0 ? JR.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 255. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6310` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6310) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6310)

```diff
-           return EW(gm(WW.args.category));
+           return tR(Ny(RR.args.category));
```

#### 256. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6312-L6315` → after: `L6312-L6315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6312-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6312-L6315) · [Before (L6312-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6312-L6315)

```diff
-           return EW(function(WW, iW) {
-             const OW = void 0 === WW ? null : Ym(WW);
-             return OW ? Dm(OW, iW) : `There is no prefab called ${null!==WW&&void 0!==WW?WW:"that"}.\n${gm()}`
-           }(WW.args.name, !0 === iW.showPrefabCode))
+           return tR(function(RR, JR) {
+             const GR = void 0 === RR ? null : Cy(RR);
+             return GR ? Dy(GR, JR) : `There is no prefab called ${null!==RR&&void 0!==RR?RR:"that"}.\n${Ny()}`
+           }(RR.args.name, !0 === JR.showPrefabCode))
```

#### 257. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6317` → after: `L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6317) · [Before (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6317)

```diff
-       var LW, cW
+       var qR, iR
```

#### 258. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6319` → after: `L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6319) · [Before (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6319)

```diff
-     const XE = [
+     const mt = [
```

#### 259. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6345-L6402` → after: `L6345-L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6345-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6345-L6402) · [Before (L6345-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6345-L6402)

```diff
-     function BE(WW) {
-       let iW = WW;
-       for (const [OW, mW] of XE) iW = iW.replace(OW, (WW => WW.length > 1 && WW[0] !== WW[0].toLowerCase() && WW.slice(1) === WW.slice(1).toLowerCase() ? mW[0].toUpperCase() + mW.slice(1) : mW));
-       return iW
-     }
-     const qE = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       RE = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       GE = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       IE = 12e3,
-       aE = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function rE(WW) {
-       var iW, OW, mW;
-       const EW = null === (iW = /Safety:\s*(\w+)/.exec(WW)) || void 0 === iW ? void 0 : iW[1],
-         NW = null !== (OW = null === (mW = /Categories:\s*(.+)/.exec(WW)) || void 0 === mW ? void 0 : mW[1]) && void 0 !== OW ? OW : "";
-       return /PII/.test(NW) ? "personalInfo" : "Safe" === EW ? "ok" : "unsafe"
- ... (42 more removed lines; see GitHub link above)
+     function zt(RR) {
+       let JR = RR;
+       for (const [GR, yR] of mt) JR = JR.replace(GR, (RR => RR.length > 1 && RR[0] !== RR[0].toLowerCase() && RR.slice(1) === RR.slice(1).toLowerCase() ? yR[0].toUpperCase() + yR.slice(1) : yR));
+       return JR
+     }
+     const St = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       jt = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       dt = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       Et = 12e3,
+       Yt = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function kt(RR) {
+       var JR, GR, yR;
+       const tR = null === (JR = /Safety:\s*(\w+)/.exec(RR)) || void 0 === JR ? void 0 : JR[1],
+         uR = null !== (GR = null === (yR = /Categories:\s*(.+)/.exec(RR)) || void 0 === yR ? void 0 : yR[1]) && void 0 !== GR ? GR : "";
+       return /PII/.test(uR) ? "personalInfo" : "Safe" === tR ? "ok" : "unsafe"
+ ... (42 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6404-L6407` → after: `L6404-L6407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6404-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6404-L6407) · [Before (L6404-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6404-L6407)

```diff
-           if ("\n" === iW) break;
-           if (OW) OW = "]" !== iW;
-           else if ("[" === iW) OW = !0;
-           else if ("/" === iW) return mW + 1
+           if ("\n" === JR) break;
+           if (GR) GR = "]" !== JR;
+           else if ("[" === JR) GR = !0;
+           else if ("/" === JR) return yR + 1
```

#### 261. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6410-L6431` → after: `L6410-L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6410-L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6410-L6431) · [Before (L6410-L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6410-L6431)

```diff
-       return iW + 1
-     }
- 
-     function mN(WW, iW, OW, mW) {
-       let EW = iW,
-         NW = 0;
-       for (; EW < WW.length;) {
-         const iW = WW[EW],
-           PW = WW[EW + 1];
-         if ("/" === iW && "/" === PW) {
-           const iW = WW.indexOf("\n", EW);
-           mW.push(WW.slice(EW + 2, -1 === iW ? WW.length : iW)), EW = -1 === iW ? WW.length : iW
-         } else if ("/" === iW && "*" === PW) {
-           const iW = WW.indexOf("*/", EW + 2);
-           mW.push(WW.slice(EW + 2, -1 === iW ? WW.length : iW)), EW = -1 === iW ? WW.length : iW + 2
-         } else if ("/" === iW && iN(WW, EW)) EW = ON(WW, EW);
- ... (6 more removed lines; see GitHub link above)
+       return JR + 1
+     }
+ 
+     function Ju(RR, JR, GR, yR) {
+       let tR = JR,
+         uR = 0;
+       for (; tR < RR.length;) {
+         const JR = RR[tR],
+           ZR = RR[tR + 1];
+         if ("/" === JR && "/" === ZR) {
+           const JR = RR.indexOf("\n", tR);
+           yR.push(RR.slice(tR + 2, -1 === JR ? RR.length : JR)), tR = -1 === JR ? RR.length : JR
+         } else if ("/" === JR && "*" === ZR) {
+           const JR = RR.indexOf("*/", tR + 2);
+           yR.push(RR.slice(tR + 2, -1 === JR ? RR.length : JR)), tR = -1 === JR ? RR.length : JR + 2
+         } else if ("/" === JR && ht(RR, tR)) tR = Ru(RR, tR);
+ ... (6 more added lines; see GitHub link above)
```

#### 262. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6433-L6436` → after: `L6433-L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6433-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6433-L6436) · [Before (L6433-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6433-L6436)

```diff
-           if (OW && "{" === iW) NW++;
-           else if (OW && "}" === iW) {
-             if (0 === NW) return EW + 1;
-             NW--
+           if (GR && "{" === JR) uR++;
+           else if (GR && "}" === JR) {
+             if (0 === uR) return tR + 1;
+             uR--
```

#### 263. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6438` → after: `L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6438) · [Before (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6438)

```diff
-           EW++
+           tR++
```

#### 264. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6441` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6441) · [Before (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6441)

```diff
-       return EW
+       return tR
```

#### 265. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6443-L6447` → after: `L6443-L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6443-L6447) · [Before (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6443-L6447)

```diff
-     const EN = 4e5;
-     var NN = OW(53658);
-     let PN = [],
-       LN = 0,
-       cN = null;
+     const Gu = 4e5;
+     var yu = GR(53499);
+     let tu = [],
+       uu = 0,
+       Zu = null;
```

#### 266. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6449-L6450` → after: `L6449-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6449-L6450) · [Before (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6449-L6450)

```diff
-     function wN(WW) {
-       return Math.ceil(WW.length / 4)
+     function qu(RR) {
+       return Math.ceil(RR.length / 4)
```

#### 267. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6453-L6454` → after: `L6453-L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6453-L6454) · [Before (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6453-L6454)

```diff
-     function tN(WW) {
-       return "number" === typeof WW && Number.isInteger(WW) && WW >= 0
+     function iu(RR) {
+       return "number" === typeof RR && Number.isInteger(RR) && RR >= 0
```

#### 268. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6457-L6460` → after: `L6457-L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6457-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6457-L6460) · [Before (L6457-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6457-L6460)

```diff
-     function ZN(WW, iW, OW) {
-       var mW;
-       let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(WW) {
+     function fu(RR, JR, GR) {
+       var yR;
+       let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(RR) {
```

#### 269. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6462-L6465` → after: `L6462-L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6462-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6462-L6465) · [Before (L6462-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6462-L6465)

```diff
-         if (PN.push(WW), PN.length >= 40) return void lN();
-         xN()
-       }(null !== (mW = function(WW) {
-         if (null === WW || "object" !== typeof WW) return null;
+         if (tu.push(RR), tu.length >= 40) return void Ku();
+         Vu()
+       }(null !== (yR = function(RR) {
+         if (null === RR || "object" !== typeof RR) return null;
```

#### 270. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6467-L6472` → after: `L6467-L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6467-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6467-L6472) · [Before (L6467-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6467-L6472)

```diff
-           prompt_tokens: iW,
-           completion_tokens: OW,
-           prompt_tokens_details: mW
-         } = WW;
-         if (!tN(iW) || !tN(OW)) return null;
-         const EW = null !== mW && "object" === typeof mW ? mW.cached_tokens : void 0;
+           prompt_tokens: JR,
+           completion_tokens: GR,
+           prompt_tokens_details: yR
+         } = RR;
+         if (!iu(JR) || !iu(GR)) return null;
+         const tR = null !== yR && "object" === typeof yR ? yR.cached_tokens : void 0;
```

#### 271. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6474-L6476` → after: `L6474-L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6474-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6474-L6476) · [Before (L6474-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6474-L6476)

```diff
-           sent: iW,
-           cached: tN(EW) ? EW : 0,
-           received: OW
+           sent: JR,
+           cached: iu(tR) ? tR : 0,
+           received: GR
```

#### 272. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6478-L6479` → after: `L6478-L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6478-L6479) · [Before (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6478-L6479)

```diff
-       }(WW)) && void 0 !== mW ? mW : {
-         sent: wN(JSON.stringify(iW)),
+       }(RR)) && void 0 !== yR ? yR : {
+         sent: qu(JSON.stringify(JR)),
```

#### 273. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6481` → after: `L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6481) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6481)

```diff
-         received: wN(OW) + EW
+         received: qu(GR) + tR
```

#### 274. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6485-L6487` → after: `L6485-L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6485-L6487) · [Before (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6485-L6487)

```diff
-     function xN() {
-       cN ??= setTimeout((() => {
-         lN()
+     function Vu() {
+       Zu ??= setTimeout((() => {
+         Ku()
```

#### 275. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6490-L6494` → after: `L6490-L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6490-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6490-L6494) · [Before (L6490-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6490-L6494)

```diff
-     async function lN() {
-       null !== cN && (clearTimeout(cN), cN = null);
-       const WW = PN.slice(0, 40);
-       PN = PN.slice(40), PN.length > 0 && (cN = setTimeout((() => {
-         lN()
+     async function Ku() {
+       null !== Zu && (clearTimeout(Zu), Zu = null);
+       const RR = tu.slice(0, 40);
+       tu = tu.slice(40), tu.length > 0 && (Zu = setTimeout((() => {
+         Ku()
```

#### 276. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6496-L6500` → after: `L6496-L6500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6496-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6496-L6500) · [Before (L6496-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6496-L6500)

```diff
-       const iW = LN;
-       if (LN = 0, 0 !== WW.length || 0 !== iW) try {
-         await (0, NN.postToGameServer)("/ai-helper/usage", {
-           calls: WW,
-           pastes: iW
+       const JR = uu;
+       if (uu = 0, 0 !== RR.length || 0 !== JR) try {
+         await (0, yu.postToGameServer)("/ai-helper/usage", {
+           calls: RR,
+           pastes: JR
```

#### 277. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6504-L6505` → after: `L6504-L6505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6504-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6504-L6505) · [Before (L6504-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6504-L6505)

```diff
-     const AN = 6e4;
-     const bN = new class {
+     const wu = 6e4;
+     const ru = new class {
```

#### 278. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6509-L6511` → after: `L6509-L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6509-L6511) · [Before (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6509-L6511)

```diff
-       record(WW) {
-         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(WW, [...this.recent(WW, iW), iW])
+       record(RR) {
+         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(RR, [...this.recent(RR, JR), JR])
```

#### 279. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6513-L6517` → after: `L6513-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6513-L6517) · [Before (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6513-L6517)

```diff
-       markFull(WW) {
-         var iW;
-         let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(WW, Math.max(null !== (iW = this.fullUntil.get(WW)) && void 0 !== iW ? iW : 0, OW + Math.max(mW, AN)))
+       markFull(RR) {
+         var JR;
+         let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(RR, Math.max(null !== (JR = this.fullUntil.get(RR)) && void 0 !== JR ? JR : 0, GR + Math.max(yR, wu)))
```

#### 280. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6519-L6521` → after: `L6519-L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6519-L6521) · [Before (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6519-L6521)

```diff
-       callsInLastMinute(WW) {
-         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(WW, iW).length
+       callsInLastMinute(RR) {
+         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(RR, JR).length
```

#### 281. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6523-L6528` → after: `L6523-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6523-L6528) · [Before (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6523-L6528)

```diff
-       freeAt(WW) {
-         var iW;
-         let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const mW = this.recent(WW, OW),
-           EW = mW.length < 2 ? OW : mW[mW.length - 2] + AN;
-         return Math.max(EW, null !== (iW = this.fullUntil.get(WW)) && void 0 !== iW ? iW : 0, OW)
+       freeAt(RR) {
+         var JR;
+         let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const yR = this.recent(RR, GR),
+           tR = yR.length < 2 ? GR : yR[yR.length - 2] + wu;
+         return Math.max(tR, null !== (JR = this.fullUntil.get(RR)) && void 0 !== JR ? JR : 0, GR)
```

#### 282. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6530-L6532` → after: `L6530-L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6530-L6532) · [Before (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6530-L6532)

```diff
-       firstFreeAt(WW) {
-         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...WW.map((WW => this.freeAt(WW, iW))))
+       firstFreeAt(RR) {
+         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...RR.map((RR => this.freeAt(RR, JR))))
```

#### 283. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6537-L6539` → after: `L6537-L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6537-L6539) · [Before (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6537-L6539)

```diff
-       recent(WW, iW) {
-         var OW;
-         return (null !== (OW = this.calls.get(WW)) && void 0 !== OW ? OW : []).filter((WW => iW - WW < AN))
+       recent(RR, JR) {
+         var GR;
+         return (null !== (GR = this.calls.get(RR)) && void 0 !== GR ? GR : []).filter((RR => JR - RR < wu))
```

#### 284. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6543-L6544` → after: `L6543-L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6543-L6544) · [Before (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6543-L6544)

```diff
-     function jN(WW) {
-       return WW > 36e5
+     function eu(RR) {
+       return RR > 36e5
```

#### 285. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6547-L6550` → after: `L6547-L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6547-L6550) · [Before (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6547-L6550)

```diff
-     function UN(WW, iW) {
-       var OW;
-       const mW = null === (OW = WW.headers.get(iW)) || void 0 === OW ? void 0 : OW.trim();
-       return void 0 !== mW && /^\d+$/.test(mW) ? Number(mW) : null
+     function au(RR, JR) {
+       var GR;
+       const yR = null === (GR = RR.headers.get(JR)) || void 0 === GR ? void 0 : GR.trim();
+       return void 0 !== yR && /^\d+$/.test(yR) ? Number(yR) : null
```

#### 286. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6553-L6556` → after: `L6553-L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6553-L6556) · [Before (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6553-L6556)

```diff
-     function kN(WW) {
-       var iW;
-       const OW = null !== (iW = UN(WW, "retry-after")) && void 0 !== iW ? iW : UN(WW, "ratelimit-reset");
-       return null === OW ? null : 1e3 * OW
+     function Lu(RR) {
+       var JR;
+       const GR = null !== (JR = au(RR, "retry-after")) && void 0 !== JR ? JR : au(RR, "ratelimit-reset");
+       return null === GR ? null : 1e3 * GR
```

#### 287. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6559-L6562` → after: `L6559-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6559-L6562) · [Before (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6559-L6562)

```diff
-     function sN(WW, iW) {
-       var OW;
-       const mW = null !== (OW = kN(iW)) && void 0 !== OW ? OW : 0;
-       (429 === iW.status || jN(mW) && 0 === UN(iW, "ratelimit-remaining")) && bN.markFull(WW, Date.now(), mW)
+     function nu(RR, JR) {
+       var GR;
+       const yR = null !== (GR = Lu(JR)) && void 0 !== GR ? GR : 0;
+       (429 === JR.status || eu(yR) && 0 === au(JR, "ratelimit-remaining")) && ru.markFull(RR, Date.now(), yR)
```

#### 288. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6565-L6568` → after: `L6565-L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6565-L6568) · [Before (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6565-L6568)

```diff
-     function MN(WW) {
-       const iW = Date.now(),
-         OW = bN.freeAt(WW, iW) - iW;
-       return OW <= 0 ? null : jN(OW) ? "unavailable" : "busy"
+     function Uu(RR) {
+       const JR = Date.now(),
+         GR = ru.freeAt(RR, JR) - JR;
+       return GR <= 0 ? null : eu(GR) ? "unavailable" : "busy"
```

#### 289. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6571-L6572` → after: `L6571-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6571-L6572) · [Before (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6571-L6572)

```diff
-     function KN(WW, iW) {
-       return `${function(WW){var iW;if("string"===typeof WW)return WW;if(429!==WW.status)return`http-${WW.status}`;if(jN(null!==(iW=kN(WW))&&void 0!==iW?iW:0))return"yearly-limit";const OW=UN(WW,"retry-after");return null===OW?"busy":`busy-ra${OW}`}(iW)}__${WW.replace(/[^A-Za-z0- … [truncated]
+     function Wu(RR, JR) {
+       return `${function(RR){var JR;if("string"===typeof RR)return RR;if(429!==RR.status)return`http-${RR.status}`;if(eu(null!==(JR=Lu(RR))&&void 0!==JR?JR:0))return"yearly-limit";const GR=au(RR,"retry-after");return null===GR?"busy":`busy-ra${GR}`}(JR)}__${RR.replace(/[^A-Za-z0- … [truncated]
```

#### 290. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6574-L6576` → after: `L6574-L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6574-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6574-L6576) · [Before (L6574-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6574-L6576)

```diff
-     const SN = new class {
-         constructor(WW) {
-           this.loadReporter = WW, this.reportedCodes = new Set
+     const Au = new class {
+         constructor(RR) {
+           this.loadReporter = RR, this.reportedCodes = new Set
```

#### 291. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6578-L6580` → after: `L6578-L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6578-L6580) · [Before (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6578-L6580)

```diff
-         wZ(WW, iW) {
-           const OW = KN(WW, iW);
-           "undefined" === typeof window || this.reportedCodes.has(OW) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(OW), this.loadReporter().then((iW => {
+         fK(RR, JR) {
+           const GR = Wu(RR, JR);
+           "undefined" === typeof window || this.reportedCodes.has(GR) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(GR), this.loadReporter().then((JR => {
```

#### 292. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6582-L6586` → after: `L6582-L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6582-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6582-L6586) · [Before (L6582-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6582-L6586)

```diff
-               reportCappedWasmFailure: mW
-             } = iW;
-             mW("ai_helper_failed", `World Code AI: ${WW} failed`, OW)
-           })).catch((WW => {
-             console.error("World Code AI: couldn't report a failure", WW)
+               reportCappedWasmFailure: yR
+             } = JR;
+             yR("ai_helper_failed", `World Code AI: ${RR} failed`, GR)
+           })).catch((RR => {
+             console.error("World Code AI: couldn't report a failure", RR)
```

#### 293. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6589-L6601` → after: `L6589-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6589-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6589-L6601) · [Before (L6589-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6589-L6601)

```diff
-       }((() => OW.e(218).then((() => OW(35078))))),
-       YN = /\n{3,}/,
-       yN = /<tool_call\b|<function=/;
- 
-     function TN(WW) {
-       const iW = WW.trimStart(),
-         OW = YN.exec(iW),
-         mW = yN.exec(iW);
-       if (null === OW || null !== mW && mW.index < OW.index) return null;
-       const EW = iW.slice(OW.index + OW[0].length);
-       return "" === EW.trim() ? null : EW
-     }
-     const JN = [{
+       }((() => GR.e(218).then((() => GR(34980))))),
+       Cu = /\n{3,}/,
+       Xu = /<tool_call\b|<function=/;
+ 
+     function Mu(RR) {
+       const JR = RR.trimStart(),
+         GR = Cu.exec(JR),
+         yR = Xu.exec(JR);
+       if (null === GR || null !== yR && yR.index < GR.index) return null;
+       const tR = JR.slice(GR.index + GR[0].length);
+       return "" === tR.trim() ? null : tR
+     }
+     const Bu = [{
```

#### 294. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6620` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6620) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6620)

```diff
-     const hN = {
+     const lu = {
```

#### 295. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6627-L6628` → after: `L6627-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6627-L6628) · [Before (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6627-L6628)

```diff
-     function HN(WW) {
-       return [...JN, hN].find((iW => iW.name === WW))
+     function pu(RR) {
+       return [...Bu, lu].find((JR => JR.name === RR))
```

#### 296. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6631-L6633` → after: `L6631-L6633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6631-L6633) · [Before (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6631-L6633)

```diff
-     function nN(WW) {
-       var iW, OW;
-       return null !== (iW = null === (OW = HN(WW)) || void 0 === OW ? void 0 : OW.callFormat) && void 0 !== iW ? iW : "simple"
+     function gu(RR) {
+       var JR, GR;
+       return null !== (JR = null === (GR = pu(RR)) || void 0 === GR ? void 0 : GR.callFormat) && void 0 !== JR ? JR : "simple"
```

#### 297. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6636-L6637` → after: `L6636-L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6636-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6636-L6637) · [Before (L6636-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6636-L6637)

```diff
-     function uN(WW) {
-       var iW;
+     function bu(RR) {
+       var JR;
```

#### 298. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6639-L6640` → after: `L6639-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6639-L6640) · [Before (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6639-L6640)

```diff
-         format: null !== (iW = WW.callFormat) && void 0 !== iW ? iW : "simple",
-         nativeTools: !0 === WW.nativeTools
+         format: null !== (JR = RR.callFormat) && void 0 !== JR ? JR : "simple",
+         nativeTools: !0 === RR.nativeTools
```

#### 299. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6644-L6645` → after: `L6644-L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6644-L6645) · [Before (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6644-L6645)

```diff
-     function oN(WW, iW) {
-       return "function" === typeof WW ? WW(iW) : WW
+     function vu(RR, JR) {
+       return "function" === typeof RR ? RR(JR) : RR
```

#### 300. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6647-L6653` → after: `L6647-L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6647-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6647-L6653) · [Before (L6647-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6647-L6653)

```diff
-     const dN = "TOO_COMPLEX",
-       eN = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${dN} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       vN = 24e4,
-       gN = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class DN extends Error {
-       constructor(WW) {
-         super(`World Code AI ${WW}`), this.reason = WW
+     const Ou = "TOO_COMPLEX",
+       xu = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${Ou} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       Nu = 24e4,
+       Du = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class Hu extends Error {
+       constructor(RR) {
+         super(`World Code AI ${RR}`), this.reason = RR
```

#### 301. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6657-L6659` → after: `L6657-L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6657-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6657-L6659) · [Before (L6657-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6657-L6659)

```diff
-     function VN(WW, iW) {
-       var OW, mW, EW, NW, PW;
-       const LW = WW[null !== (OW = iW.index) && void 0 !== OW ? OW : 0] ??= {
+     function ou(RR, JR) {
+       var GR, yR, tR, uR, ZR;
+       const qR = RR[null !== (GR = JR.index) && void 0 !== GR ? GR : 0] ??= {
```

#### 302. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6663)

```diff
-       LW.name += null !== (mW = null === (EW = iW.function) || void 0 === EW ? void 0 : EW.name) && void 0 !== mW ? mW : "", LW.args += null !== (NW = null === (PW = iW.function) || void 0 === PW ? void 0 : PW.arguments) && void 0 !== NW ? NW : ""
+       qR.name += null !== (yR = null === (tR = JR.function) || void 0 === tR ? void 0 : tR.name) && void 0 !== yR ? yR : "", qR.args += null !== (uR = null === (ZR = JR.function) || void 0 === ZR ? void 0 : ZR.arguments) && void 0 !== uR ? uR : ""
```

#### 303. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6666-L6667` → after: `L6666-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6666-L6667) · [Before (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6666-L6667)

```diff
-     function pN(WW) {
-       return "mcp" === WW ? "simple" : WW
+     function cu(RR) {
+       return "mcp" === RR ? "simple" : RR
```

#### 304. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6670-L6672` → after: `L6670-L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6670-L6672) · [Before (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6670-L6672)

```diff
-     function fN(WW, iW, OW, mW) {
-       let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return CN(WW, iW, OW, pN(mW), EW).answer
+     function Pu(RR, JR, GR, yR) {
+       let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return Iu(RR, JR, GR, cu(yR), tR).answer
```

#### 305. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6675-L6678` → after: `L6675-L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6675-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6675-L6678) · [Before (L6675-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6675-L6678)

```diff
-     function CN(WW, iW, OW, mW, EW) {
-       const NW = OW.flatMap((WW => {
-         const iW = AO(WW.name, WW.args);
-         return null === iW ? [] : [tE(NO(mW), iW.name, iW.args)]
+     function Iu(RR, JR, GR, yR, tR) {
+       const uR = GR.flatMap((RR => {
+         const JR = wG(RR.name, RR.args);
+         return null === JR ? [] : [qt(yG(yR), JR.name, JR.args)]
```

#### 306. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6680-L6687` → after: `L6680-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6680-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6680-L6687) · [Before (L6680-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6680-L6687)

```diff
-       let PW = !1;
-       return 0 !== NW.length || 0 !== jO(WW, mW).length || WW.includes("```") || (NW.push(...EW ? [] : function(WW, iW) {
-         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const mW = new Map;
-         for (const LW of bO(WW, iW)) {
-           const WW = Object.values(LW.args).some((WW => void 0 !== WW && OW.includes(WW.trim())));
-           var EW, NW, PW;
-           "export_game" === LW.name || "switch_to_world_code" === LW.name || yi(LW.name) || WW || mW.set(`${LW.name} ${null!==(EW=LW.args.path)&&void 0!==EW?EW:""} ${null!==(NW=LW.args.search)&&void 0!==NW?NW:""} ${null!==(PW=LW.args.name)&&void 0!==PW?PW:""}`, LW.source)
+       let ZR = !1;
+       return 0 !== uR.length || 0 !== eG(RR, yR).length || RR.includes("```") || (uR.push(...tR ? [] : function(RR, JR) {
+         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const yR = new Map;
+         for (const qR of rG(RR, JR)) {
+           const RR = Object.values(qR.args).some((RR => void 0 !== RR && GR.includes(RR.trim())));
+           var tR, uR, ZR;
+           "export_game" === qR.name || "switch_to_world_code" === qR.name || BJ(qR.name) || RR || yR.set(`${qR.name} ${null!==(tR=qR.args.path)&&void 0!==tR?tR:""} ${null!==(uR=qR.args.search)&&void 0!==uR?uR:""} ${null!==(ZR=qR.args.name)&&void 0!==ZR?ZR:""}`, qR.source)
```

#### 307. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6689-L6692` → after: `L6689-L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6689-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6689-L6692) · [Before (L6689-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6689-L6692)

```diff
-         return [...new Set(mW.values())]
-       }(iW, mW, SE)), PW = NW.length > 0), {
-         answer: [WW, ...NW].join("\n\n").trim(),
-         hasCallsFromReasoning: PW
+         return [...new Set(yR.values())]
+       }(JR, yR, At)), ZR = uR.length > 0), {
+         answer: [RR, ...uR].join("\n\n").trim(),
+         hasCallsFromReasoning: ZR
```

#### 308. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6695-L6698` → after: `L6695-L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6695-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6695-L6698) · [Before (L6695-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6695-L6698)

```diff
-     async function XN(WW, iW) {
-       const OW = WW.getReader(),
-         mW = new TextDecoder;
-       let EW = "";
+     async function mu(RR, JR) {
+       const GR = RR.getReader(),
+         yR = new TextDecoder;
+       let tR = "";
```

#### 309. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6701-L6705` → after: `L6701-L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6701-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6701-L6705) · [Before (L6701-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6701-L6705)

```diff
-           done: WW,
-           value: NW
-         } = await OW.read();
-         if (WW) break;
-         EW += mW.decode(NW, {
+           done: RR,
+           value: uR
+         } = await GR.read();
+         if (RR) break;
+         tR += yR.decode(uR, {
```

#### 310. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6708-L6714` → after: `L6708-L6714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6708-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6708-L6714) · [Before (L6708-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6708-L6714)

```diff
-         let PW = EW.indexOf("\n");
-         for (; - 1 !== PW;) {
-           const WW = EW.slice(0, PW).trim();
-           if (EW = EW.slice(PW + 1), PW = EW.indexOf("\n"), !WW.startsWith("data:")) continue;
-           const OW = WW.slice(5).trim();
-           if ("[DONE]" === OW) return;
-           let mW;
+         let ZR = tR.indexOf("\n");
+         for (; - 1 !== ZR;) {
+           const RR = tR.slice(0, ZR).trim();
+           if (tR = tR.slice(ZR + 1), ZR = tR.indexOf("\n"), !RR.startsWith("data:")) continue;
+           const GR = RR.slice(5).trim();
+           if ("[DONE]" === GR) return;
+           let yR;
```

#### 311. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6716` → after: `L6716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6716) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6716)

```diff
-             mW = JSON.parse(OW)
+             yR = JSON.parse(GR)
```

#### 312. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6720` → after: `L6720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6720) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6720)

```diff
-           iW(mW)
+           JR(yR)
```

#### 313. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6725-L6726` → after: `L6725-L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6725-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6725-L6726) · [Before (L6725-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6725-L6726)

```diff
-     function BN(WW) {
-       return WW.map((WW => ({
+     function zu(RR) {
+       return RR.map((RR => ({
```

#### 314. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6729-L6731` → after: `L6729-L6731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6729-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6729-L6731) · [Before (L6729-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6729-L6731)

```diff
-           name: WW.name,
-           description: WW.description,
-           parameters: WW.inputSchema
+           name: RR.name,
+           description: RR.description,
+           parameters: RR.inputSchema
```

#### 315. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6736-L6737` → after: `L6736-L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6736-L6737) · [Before (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6736-L6737)

```diff
-     function qN(WW) {
-       return "object" === typeof WW
+     function Su(RR) {
+       return "object" === typeof RR
```

#### 316. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6739-L6744` → after: `L6739-L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6739-L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6739-L6744) · [Before (L6739-L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6739-L6744)

```diff
-     async function RN(WW, iW, OW, mW) {
-       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const NW = MN(WW.name);
-       if (null !== NW) return NW;
-       bN.record(WW.name);
-       const PW = await fetch(qE, {
+     async function ju(RR, JR, GR, yR) {
+       let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const uR = Uu(RR.name);
+       if (null !== uR) return uR;
+       ru.record(RR.name);
+       const ZR = await fetch(St, {
```

#### 317. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6750-L6751` → after: `L6750-L6751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6750-L6751) · [Before (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6750-L6751)

```diff
-           model: WW.name,
-           messages: iW,
+           model: RR.name,
+           messages: JR,
```

#### 318. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6753-L6754` → after: `L6753-L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6753-L6754) · [Before (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6753-L6754)

```diff
-           temperature: WW.temperature,
-           reasoning_effort: WW.reasoningEffort,
+           temperature: RR.temperature,
+           reasoning_effort: RR.reasoningEffort,
```

#### 319. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6759-L6760` → after: `L6759-L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6759-L6760) · [Before (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6759-L6760)

```diff
-           ...WW.nativeTools && EW.length > 0 ? {
-             tools: BN(EW)
+           ...RR.nativeTools && tR.length > 0 ? {
+             tools: zu(tR)
```

#### 320. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6765` → after: `L6765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6765) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6765)

```diff
-         signal: OW
+         signal: GR
```

#### 321. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6767-L6775` → after: `L6767-L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6767-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6767-L6775) · [Before (L6767-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6767-L6775)

```diff
-       if (sN(WW.name, PW), 429 === PW.status) return SN.wZ(WW.name, PW), "unavailable" === MN(WW.name) ? "unavailable" : "busy";
-       if (!PW.ok || !PW.body) return console.warn(`World Code AI: ${WW.name} answered ${PW.status}`), SN.wZ(WW.name, PW.ok ? "empty" : PW), PW.ok ? "failed" : 429 === (LW = PW.status) ? "busy" : 400 === LW || 413 === LW ? "tooLarge" : 401 === LW || 403 === LW ? "turnedAway" : "fa … [truncated]
-       var LW;
-       let cW = "",
-         wW = "";
-       const tW = [];
-       let ZW = !1,
-         xW = !1,
-         lW = null;
+       if (nu(RR.name, ZR), 429 === ZR.status) return Au.fK(RR.name, ZR), "unavailable" === Uu(RR.name) ? "unavailable" : "busy";
+       if (!ZR.ok || !ZR.body) return console.warn(`World Code AI: ${RR.name} answered ${ZR.status}`), Au.fK(RR.name, ZR.ok ? "empty" : ZR), ZR.ok ? "failed" : 429 === (qR = ZR.status) ? "busy" : 400 === qR || 413 === qR ? "tooLarge" : 401 === qR || 403 === qR ? "turnedAway" : "fa … [truncated]
+       var qR;
+       let iR = "",
+         fR = "";
+       const VR = [];
+       let KR = !1,
+         wR = !1,
+         rR = null;
```

#### 322. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6777-L6783` → after: `L6777-L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6777-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6777-L6783) · [Before (L6777-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6777-L6783)

```diff
-         await async function(WW, iW, OW) {
-           await XN(WW, (WW => {
-             var mW;
-             const EW = WW,
-               NW = null === (mW = EW.choices) || void 0 === mW ? void 0 : mW[0];
-             var PW, LW;
-             NW && iW(null !== (PW = NW.delta) && void 0 !== PW ? PW : {}, null !== (LW = NW.finish_reason) && void 0 !== LW ? LW : null), EW.usage && (null === OW || void 0 === OW || OW(EW.usage))
+         await async function(RR, JR, GR) {
+           await mu(RR, (RR => {
+             var yR;
+             const tR = RR,
+               uR = null === (yR = tR.choices) || void 0 === yR ? void 0 : yR[0];
+             var ZR, qR;
+             uR && JR(null !== (ZR = uR.delta) && void 0 !== ZR ? ZR : {}, null !== (qR = uR.finish_reason) && void 0 !== qR ? qR : null), tR.usage && (null === GR || void 0 === GR || GR(tR.usage))
```

#### 323. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6785-L6790` → after: `L6785-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/107.js#L6785-L6790) · [Before (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/107.js#L6785-L6790)

```diff
-         }(PW.body, ((iW, OW) => {
-           var EW, NW, PW, LW;
-           ZW ||= "length" === OW, wW += null !== (EW = null !== (NW = iW.reasoning) && void 0 !== NW ? NW : iW.reasoning_content) && void 0 !== EW ? EW : "", cW += null !== (PW = iW.content) && void 0 !== PW ? PW : "";
-           for (const WW of null !== (lW = iW.tool_calls) && void 0 !== lW ? lW : []) {
-             var lW;
-             xW ||= "" !== wW && "" === cW.trim(), VN(tW, WW)
+         }(ZR.body, ((JR, GR) => {
+           var tR, uR, ZR, qR;
+           KR ||= "length" === GR, fR += null !== (tR = null !== (uR = JR.reasoning) && void 0 !== uR ? uR : JR.reasoning_content) && void 0 !== tR ? tR : "", iR += null !== (ZR = JR.content) && void 0 !== ZR ? ZR : "";
+           for (const RR of null !== (rR = JR.tool_calls) && void 0 !== rR ? rR : []) {
+             var rR;
+             wR ||= "" !== fR && "" === iR.trim(), ou(VR, RR)
```
