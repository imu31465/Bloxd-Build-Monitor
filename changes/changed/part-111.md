# Changed — Bundle Modifications Report (Part 111 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `111 / 137` (**417** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 110](part-110.md) · [Part 112 →](part-112.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (962 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 128. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1565` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1469) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1565)

```diff
-           QB = zB ? `${zB.left},${zB.top},${zB.width},${zB.height}` : "";
+           TB = ZB ? `${ZB.left},${ZB.top},${ZB.width},${ZB.height}` : "";
```

#### 129. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1568` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1472) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1568)

```diff
-         this.shownKey = QB, jB.classList.toggle("Visible", null !== zB), zB && (jB.classList.toggle("Snap", nB), jB.style.width = `${zB.width}px`, jB.style.height = `${zB.height}px`, jB.style.transform = `translate(${zB.left}px, ${zB.top}px)`, nB && (jB.offsetWidth, jB.classList. … [truncated]
+         this.shownKey = TB, IB.classList.toggle("Visible", null !== ZB), ZB && (IB.classList.toggle("Snap", JB), IB.style.width = `${ZB.width}px`, IB.style.height = `${ZB.height}px`, IB.style.transform = `translate(${ZB.left}px, ${ZB.top}px)`, JB && (IB.offsetWidth, IB.classList. … [truncated]
```

#### 130. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1575` → after: `L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1479) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1575)

```diff
-         const QB = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!WB){WB=!0;const BB=document.createElement("div");BB.setAttribute("aria-hidden","true"),BB.style.cssText="po … [truncated]
+         const TB = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!uB){uB=!0;const BB=document.createElement("div");BB.setAttribute("aria-hidden","true"),BB.style.cssText="po … [truncated]
```

#### 131. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1585` → after: `L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1489) · [Before (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1585)

```diff
-         return NB <= dB || uB <= IB ? jB : {
+         return vB <= oB || kB <= GB ? IB : {
```

#### 132. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1607` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1511) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1607)

```diff
-     var wB = zB(8658);
+     var AB = ZB(8779);
```

#### 133. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1637` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1541) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1637)

```diff
-     var CB = zB(8671);
+     var xB = ZB(8792);
```

#### 134. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1741-L1742` → after: `L1645-L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1645-L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1645-L1646) · [Before (L1741-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1741-L1742)

```diff
-     var vB = zB(8685),
-       RB = zB(8680);
+     var KB = ZB(8806),
+       VB = ZB(8797);
```

#### 135. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1839` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1743) · [Before (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1839)

```diff
-         return null !== nB && void 0 !== nB ? nB : QB
+         return null !== JB && void 0 !== JB ? JB : TB
```

#### 136. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1914` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1818) · [Before (L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1914)

```diff
-       qj = BB => BB.hasAttribute("data-inven-idx") ? "slot" : BB.hasAttribute("data-recipe-key") ? "recipe" : BB.hasAttribute("data-craft-ingredient") || (0, RB.y)(BB) ? "info" : (0, wB.J)(BB) ? "textField" : "button",
+       YI = BB => BB.hasAttribute("data-inven-idx") ? "slot" : BB.hasAttribute("data-recipe-key") ? "recipe" : BB.hasAttribute("data-craft-ingredient") || (0, VB.x)(BB) ? "info" : (0, AB.T)(BB) ? "textField" : "button",
```

#### 137. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1921` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1825) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1921)

```diff
-           recipe: null !== (jB = BB && (null === (zB = oj(BB)) || void 0 === zB ? void 0 : zB.getAttribute("data-recipe-key"))) && void 0 !== jB ? jB : null
+           recipe: null !== (IB = BB && (null === (ZB = pI(BB)) || void 0 === ZB ? void 0 : ZB.getAttribute("data-recipe-key"))) && void 0 !== IB ? IB : null
```

#### 138. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1977` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1881) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1977)

```diff
-           kB = null !== (GB = NB.get(BB)) && void 0 !== GB ? GB : null, kB || (kB = {
+           yB = null !== (UB = vB.get(BB)) && void 0 !== UB ? UB : null, yB || (yB = {
```

#### 139. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1998` → after: `L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1902) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L1998)

```diff
-             scrollGroup: null !== (gB = null === yB || void 0 === yB ? void 0 : yB.group) && void 0 !== gB ? gB : null,
+             scrollGroup: null !== (dB = null === qB || void 0 === qB ? void 0 : qB.group) && void 0 !== dB ? dB : null,
```

#### 140. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2000` → after: `L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1904) · [Before (L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2000)

```diff
-             clip: null !== (tB = null === yB || void 0 === yB ? void 0 : yB.box) && void 0 !== tB ? tB : null,
+             clip: null !== (CB = null === qB || void 0 === qB ? void 0 : qB.box) && void 0 !== CB ? CB : null,
```

#### 141. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2004` → after: `L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1908) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2004)

```diff
-             scrollContainer: null !== (SB = null === yB || void 0 === yB ? void 0 : yB.container) && void 0 !== SB ? SB : null
+             scrollContainer: null !== (QB = null === qB || void 0 === qB ? void 0 : qB.container) && void 0 !== QB ? QB : null
```

#### 142. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2038` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1942) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2038)

```diff
-     var Aj = zB(8691);
+     var XI = ZB(8809);
```

#### 143. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2062` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1966) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2062)

```diff
-           IB = `${nB}|${Math.round(QB.clientX)},${Math.round(QB.clientY)}`,
+           GB = `${JB}|${Math.round(TB.clientX)},${Math.round(TB.clientY)}`,
```

#### 144. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2070` → after: `L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1974) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2070)

```diff
-         if (NB) return void("element" === dB.kind ? (0, wB.q)(dB.element, dB.element, Pj(QB)) : BB.hover(null, QB));
+         if (vB) return void("element" === oB.kind ? (0, AB.u)(oB.element, oB.element, eI(TB)) : BB.hover(null, TB));
```

#### 145. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2073` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1977) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2073)

```diff
-         "element" === pB.kind ? (0, wB.q)(pB.element, rB, Pj(QB)) : rB && (0, wB.q)(null, rB, Pj(QB))
+         "element" === hB.kind ? (0, AB.u)(hB.element, zB, eI(TB)) : zB && (0, AB.u)(null, zB, eI(TB))
```

#### 146. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2083` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L1987) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2083)

```diff
-         "element" === BB.kind && (0, wB.q)(BB.element, jB, Pj(zB))
+         "element" === BB.kind && (0, AB.u)(BB.element, IB, eI(ZB))
```

#### 147. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2102` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2006) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2102)

```diff
-         return 0 !== (0, JB.k)(BB, .2).y
+         return 0 !== (0, NB.i)(BB, .2).y
```

#### 148. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2122` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2026) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2122)

```diff
-     var xj = zB(8698);
+     var tI = ZB(8818);
```

#### 149. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2155` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2059) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2155)

```diff
-         return BB = (0, aB.h)("inventory"), !Oj.map(aB.h).includes(BB) && !(0, JB.O)(BB);
+         return BB = (0, nB.g)("inventory"), !SI.map(nB.g).includes(BB) && !(0, NB.F)(BB);
```

#### 150. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2202` → after: `L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2106) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2202)

```diff
-               for (const zB of pB.querySelectorAll(`${Sj}:first-child`)) {
+               for (const ZB of hB.querySelectorAll(`${QI}:first-child`)) {
```

#### 151. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2220` → after: `L2124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2124) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2220)

```diff
-                   kB = yB && !nB.has(yB.container) ? yB : null;
+                   yB = qB && !JB.has(qB.container) ? qB : null;
```

#### 152. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2225` → after: `L2129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2129) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2225)

```diff
-                   scrollGroup: null !== (NB = null === kB || void 0 === kB ? void 0 : kB.group) && void 0 !== NB ? NB : null,
+                   scrollGroup: null !== (vB = null === yB || void 0 === yB ? void 0 : yB.group) && void 0 !== vB ? vB : null,
```

#### 153. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2227` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2131) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2227)

```diff
-                   clip: null !== (uB = null === kB || void 0 === kB ? void 0 : kB.box) && void 0 !== uB ? uB : null,
+                   clip: null !== (kB = null === yB || void 0 === yB ? void 0 : yB.box) && void 0 !== kB ? kB : null,
```

#### 154. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2231` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2135) · [Before (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2231)

```diff
-                   scrollContainer: null !== (UB = null === kB || void 0 === kB ? void 0 : kB.container) && void 0 !== UB ? UB : null
+                   scrollContainer: null !== (cB = null === yB || void 0 === yB ? void 0 : yB.container) && void 0 !== cB ? cB : null
```

#### 155. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2279-L2280` → after: `L2183-L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2183-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2183-L2184) · [Before (L2279-L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2279-L2280)

```diff
-           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(JB.J.map((BB => [BB, (0, mB.b)(JB.N)]))), this.stickRepeat = new JB.c((0, mB.b)(JB.gb)), this.pageUpTimer = (0, mB.b)(JB. … [truncated]
-             this.endInteraction((0, vB.f)()), (0, vB.h)() || this.forgetSurface()
+           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(NB.y.map((BB => [BB, (0, gB.d)(NB.B)]))), this.stickRepeat = new NB.d((0, gB.d)(NB.$)), this.pageUpTimer = (0, gB.d)(NB.Y … [truncated]
+             this.endInteraction((0, KB.e)()), (0, KB.h)() || this.forgetSurface()
```

#### 156. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2283` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2187) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2283)

```diff
-             this.reopenSlotIdx = null !== (BB = this.focused ? Dj(this.focused).idx : null) && void 0 !== BB ? BB : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, vB.r)(), this.panelMemory.clear(), this. … [truncated]
+             this.reopenSlotIdx = null !== (BB = this.focused ? HI(this.focused).idx : null) && void 0 !== BB ? BB : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, KB.t)(), this.panelMemory.clear(), this. … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2288-L2289` → after: `L2192-L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2192-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2192-L2193) · [Before (L2288-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2288-L2289)

```diff
-           }, this.shouldBlockRealPointer = BB => BB.isTrusted && !(0, kB.q)(BB) && this.isShowing(), this.noteRealPointer = BB => {
-             BB instanceof MouseEvent && BB.isTrusted && !(0, kB.q)(BB) && (this.lastRealPointer ??= {
+           }, this.shouldBlockRealPointer = BB => BB.isTrusted && !(0, yB.t)(BB) && this.isShowing(), this.noteRealPointer = BB => {
+             BB instanceof MouseEvent && BB.isTrusted && !(0, yB.t)(BB) && (this.lastRealPointer ??= {
```

#### 158. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2295` → after: `L2199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2199) · [Before (L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2295)

```diff
-             return BB === (0, aB.h)("inventoryClose") ? !(null !== (jB = (0, vB.f)()) && void 0 !== jB && jB.isHolding()) : !(BB !== (0, aB.h)("inventory") || !Bz()) || ((0, JB.O)(BB) ? this.isNavButton(BB) : Rj.some((jB => (0, aB.h)(jB) === BB)))
+             return BB === (0, nB.g)("inventoryClose") ? !(null !== (IB = (0, KB.e)()) && void 0 !== IB && IB.isHolding()) : !(BB !== (0, nB.g)("inventory") || !BZ()) || ((0, NB.F)(BB) ? this.isNavButton(BB) : VI.some((IB => (0, nB.g)(IB) === BB)))
```

#### 159. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2300-L2302` → after: `L2204-L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2204-L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2204-L2206) · [Before (L2300-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2300-L2302)

```diff
-           const IB = (0, vB.f)();
-           if (!(0, sB.m)()) return void(this.wasShowing && (this.endInteraction(IB), this.rehoverRealPointer()));
-           this.wasShowing = !0, this.applyFocusRequest(), BB.wokeDevice && this.focusWakePointer(!(null === IB || void 0 === IB || !IB.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, rB.j)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
+           const GB = (0, KB.e)();
+           if (!(0, FB.i)()) return void(this.wasShowing && (this.endInteraction(GB), this.rehoverRealPointer()));
+           this.wasShowing = !0, this.applyFocusRequest(), BB.wokeDevice && this.focusWakePointer(!(null === GB || void 0 === GB || !GB.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, zB.i)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
```

#### 160. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2309` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2213) · [Before (L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2309)

```diff
-             JB = null !== (jB = null === (zB = UB.actionElement) || void 0 === zB ? void 0 : zB.querySelector(".DoCraftItem")) && void 0 !== jB ? jB : UB.actionElement;
+             NB = null !== (IB = null === (ZB = cB.actionElement) || void 0 === ZB ? void 0 : ZB.querySelector(".DoCraftItem")) && void 0 !== IB ? IB : cB.actionElement;
```

#### 161. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2320` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2224) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2320)

```diff
-             pressed: BB.isHeld((0, aB.h)("inventoryPrimary"))
+             pressed: BB.isHeld((0, nB.g)("inventoryPrimary"))
```

#### 162. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2336` → after: `L2240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2240) · [Before (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2336)

```diff
-             pressHints: null !== (QB = null === (nB = UB.press) || void 0 === nB ? void 0 : nB.hints) && void 0 !== QB ? QB : null,
+             pressHints: null !== (TB = null === (JB = cB.press) || void 0 === JB ? void 0 : JB.hints) && void 0 !== TB ? TB : null,
```

#### 163. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2348` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2252) · [Before (L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2348)

```diff
-           const zB = (0, sB.e)();
+           const ZB = (0, FB.c)();
```

#### 164. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2352` → after: `L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2256) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2352)

```diff
-           this.setFocus(null !== (jB = Gj(zB, QB)) && void 0 !== jB ? jB : BB ? mj(zB, QB, (BB => {
+           this.setFocus(null !== (IB = UI(ZB, TB)) && void 0 !== IB ? IB : BB ? gI(ZB, TB, (BB => {
```

#### 165. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2359` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2263) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2359)

```diff
-           })) : null, !1), "cursor" === (0, rB.j)().inventoryNavigation && (this.pointer = {
+           })) : null, !1), "cursor" === (0, zB.i)().inventoryNavigation && (this.pointer = {
```

#### 166. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2367` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2271) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2367)

```diff
-           if (!BB || "keyboardMouse" !== uB.c.get("activeInputDevice")) return;
+           if (!BB || "keyboardMouse" !== kB.d.get("activeInputDevice")) return;
```

#### 167. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2369` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2273) · [Before (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2369)

```diff
-           jB && (0, wB.q)(null, jB, BB)
+           IB && (0, AB.u)(null, IB, BB)
```

#### 168. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2374` → after: `L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2278) · [Before (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2374)

```diff
-           this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(BB), this.ring.hide(), this.releasePointer(), this.publishState(Aj.b)
+           this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(BB), this.ring.hide(), this.releasePointer(), this.publishState(XI.c)
```

#### 169. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2410` → after: `L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2314) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2410)

```diff
-               })(jB, (0, vB.f)()),
+               })(IB, (0, KB.e)()),
```

#### 170. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2413` → after: `L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2317) · [Before (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2413)

```diff
-             nB = null !== BB || void 0 !== NB, QB = null !== (dB = null !== (IB = null !== BB && void 0 !== BB ? BB : NB) && void 0 !== IB ? IB : uB && zB.get(uB)) && void 0 !== dB ? dB : Lj(jB)
+             JB = null !== BB || void 0 !== vB, TB = null !== (oB = null !== (GB = null !== BB && void 0 !== BB ? BB : vB) && void 0 !== GB ? GB : kB && ZB.get(kB)) && void 0 !== oB ? oB : WI(IB)
```

#### 171. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2428` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2332) · [Before (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2428)

```diff
-             if ("cursor" === (0, rB.j)().inventoryNavigation) {
+             if ("cursor" === (0, zB.i)().inventoryNavigation) {
```

#### 172. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2460` → after: `L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2364) · [Before (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2460)

```diff
-             QB = zB && (0, rB.j)().cursorMagnetism ? Nj(yj(zB)) : null;
+             TB = ZB && (0, zB.i)().cursorMagnetism ? vI(qI(ZB)) : null;
```

#### 173. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2463` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2367) · [Before (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2463)

```diff
-             moveDeadzone: (0, rB.j)().moveDeadzone,
+             moveDeadzone: (0, zB.i)().moveDeadzone,
```

#### 174. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2466` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2370) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2466)

```diff
-             cursorSpeedPercent: (0, rB.j)().cursorSpeed,
+             cursorSpeedPercent: (0, zB.i)().cursorSpeed,
```

#### 175. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2499` → after: `L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2403) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2499)

```diff
-             return null !== (QB = Jj(nB, jB, zB)) && void 0 !== QB ? QB : mj(BB, jB)
+             return null !== (TB = NI(JB, IB, ZB)) && void 0 !== TB ? TB : gI(BB, IB)
```

#### 176. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2504` → after: `L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2408) · [Before (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2504)

```diff
-           return !vj.some((jB => (0, aB.h)(jB) === BB)) && !(BB === (0, aB.h)("inventory") && Bz())
+           return !KI.some((IB => (0, nB.g)(IB) === BB)) && !(BB === (0, nB.g)("inventory") && BZ())
```

#### 177. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2507` → after: `L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2411) · [Before (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2507)

```diff
-           const zB = (0, rB.j)().inventoryNavigation,
+           const ZB = (0, zB.i)().inventoryNavigation,
```

#### 178. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2513` → after: `L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2417) · [Before (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2513)

```diff
-           for (const uB of JB.J) {
+           for (const kB of NB.y) {
```

#### 179. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2517` → after: `L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2421) · [Before (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2517)

```diff
-           const dB = this.stickGate.update(BB.leftStick, (0, rB.j)().moveDeadzone);
+           const oB = this.stickGate.update(BB.leftStick, (0, zB.i)().moveDeadzone);
```

#### 180. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2520` → after: `L2424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2424) · [Before (L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2520)

```diff
-             return jB && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(BB, "cursor" === zB ? QB : {
+             return IB && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(BB, "cursor" === ZB ? TB : {
```

#### 181. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2525-L2526` → after: `L2429-L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2429-L2430) · [Before (L2525-L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2525-L2526)

```diff
-           const IB = (0, JB.k)(BB.leftStick, (0, rB.j)().moveDeadzone),
-             NB = this.stickRepeat.update(dB ? (0, JB.ib)(IB) : null, jB);
+           const GB = (0, NB.i)(BB.leftStick, (0, zB.i)().moveDeadzone),
+             vB = this.stickRepeat.update(oB ? (0, NB.bb)(GB) : null, IB);
```

#### 182. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2537` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2441) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2537)

```diff
-           const BB = (0, vB.r)();
+           const BB = (0, KB.t)();
```

#### 183. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2542-L2543` → after: `L2446-L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2446-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2446-L2447) · [Before (L2542-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2542-L2543)

```diff
-           const nB = BB.wasPressed((0, aB.h)("inventoryPanelPrevious")),
-             dB = BB.wasPressed((0, aB.h)("inventoryPanelNext"));
+           const JB = BB.wasPressed((0, nB.g)("inventoryPanelPrevious")),
+             oB = BB.wasPressed((0, nB.g)("inventoryPanelNext"));
```

#### 184. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2555` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2459) · [Before (L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2555)

```diff
-           })(IB, ij), UB = null !== (jB = null === (zB = this.focusTarget) || void 0 === zB ? void 0 : zB.panel) && void 0 !== jB ? jB : null, pB = dB ? 1 : -1, 0 === uB.length ? null : uB[uj(null === UB ? -1 : uB.indexOf(UB), uB.length, pB)]);
+           })(GB, OI), cB = null !== (IB = null === (ZB = this.focusTarget) || void 0 === ZB ? void 0 : ZB.panel) && void 0 !== IB ? IB : null, hB = oB ? 1 : -1, 0 === kB.length ? null : kB[kI(null === cB ? -1 : kB.indexOf(cB), kB.length, hB)]);
```

#### 185. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2560` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2464) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2560)

```diff
-             JB = null !== (QB = sB.find((BB => BB.element === rB && BB.visible))) && void 0 !== QB ? QB : zz(sB, (0, vB.f)());
+             NB = null !== (TB = FB.find((BB => BB.element === zB && BB.visible))) && void 0 !== TB ? TB : ZZ(FB, (0, KB.e)());
```

#### 186. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2564-L2565` → after: `L2468-L2469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2468-L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2468-L2469) · [Before (L2564-L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2564-L2565)

```diff
-           const zB = (0, aB.h)("menuPageUp"),
-             QB = (0, aB.h)("menuPageDown"),
+           const ZB = (0, nB.g)("menuPageUp"),
+             TB = (0, nB.g)("menuPageDown"),
```

#### 187. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2570` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2474) · [Before (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2570)

```diff
-           if (!BB.wasPressed(dB ? QB : zB) && this.hasCategories) return;
+           if (!BB.wasPressed(oB ? TB : ZB) && this.hasCategories) return;
```

#### 188. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2576` → after: `L2480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2480) · [Before (L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2576)

```diff
-               return (0, wB.o)(QB, (0, wB.x)(QB)), !0
+               return (0, AB.q)(TB, (0, AB.H)(TB)), !0
```

#### 189. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2580` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2484) · [Before (L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2580)

```diff
-             const BB = null !== (NB = null === (uB = this.focusTarget) || void 0 === uB ? void 0 : uB.scrollGroup) && void 0 !== NB ? NB : null,
+             const BB = null !== (vB = null === (kB = this.focusTarget) || void 0 === kB ? void 0 : kB.scrollGroup) && void 0 !== vB ? vB : null,
```

#### 190. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2589` → after: `L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2493) · [Before (L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2589)

```diff
-           } = this.getTargets(), pB = this.currentTarget(), rB = pB && Xj(pB) ? pB : UB.find((BB => Xj(BB) && BB.visible));
+           } = this.getTargets(), hB = this.currentTarget(), zB = hB && rI(hB) ? hB : cB.find((BB => rI(BB) && BB.visible));
```

#### 191. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2595` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2499) · [Before (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2595)

```diff
-               IB = nB.y + ("Down" === zB ? QB : -QB);
+               GB = JB.y + ("Down" === ZB ? TB : -TB);
```

#### 192. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2607` → after: `L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2511) · [Before (L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2607)

```diff
-           this.setFocus(null !== sB && void 0 !== sB ? sB : rB)
+           this.setFocus(null !== FB && void 0 !== FB ? FB : zB)
```

#### 193. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2614` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2518) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2614)

```diff
-           } = this.getTargets(), uB = this.pointer, UB = !uB && this.focusTarget && Xj(this.focusTarget) ? this.focusTarget.scrollContainer : null, aB = uB && (null === (jB = NB.find((BB => BB.clip && kj(BB.clip, uB)))) || void 0 === jB ? void 0 : jB.scrollContainer), pB = null ! … [truncated]
+           } = this.getTargets(), kB = this.pointer, cB = !kB && this.focusTarget && rI(this.focusTarget) ? this.focusTarget.scrollContainer : null, nB = kB && (null === (IB = vB.find((BB => BB.clip && yI(BB.clip, kB)))) || void 0 === IB ? void 0 : IB.scrollContainer), hB = null ! … [truncated]
```

#### 194. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2634` → after: `L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2538) · [Before (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2634)

```diff
-           }, QB = this.focused ? oj(this.focused) : null, nB = QB ? (0, xj.b)(QB) : null;
+           }, TB = this.focused ? pI(this.focused) : null, JB = TB ? (0, tI.e)(TB) : null;
```

#### 195. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2650` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2554) · [Before (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2650)

```diff
-               const dB = (0, aB.h)(nB);
+               const oB = (0, nB.g)(JB);
```

#### 196. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2663-L2664` → after: `L2567-L2568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2567-L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2567-L2568) · [Before (L2663-L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2663-L2664)

```diff
-           const QB = BB.wasPressed((0, aB.h)("inventoryPrimary")) || BB.wasPressed((0, aB.h)("inventoryHotbarSwap"));
-           if (!QB && !BB.wasPressed((0, aB.h)("inventoryClose")) && !jB.isHolding()) return !(BB.wasPressed((0, aB.h)("inventory")) && Bz());
+           const TB = BB.wasPressed((0, nB.g)("inventoryPrimary")) || BB.wasPressed((0, nB.g)("inventoryHotbarSwap"));
+           if (!TB && !BB.wasPressed((0, nB.g)("inventoryClose")) && !IB.isHolding()) return !(BB.wasPressed((0, nB.g)("inventory")) && BZ());
```

#### 197. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2675` → after: `L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2579) · [Before (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2675)

```diff
-           } = this.getTargets(), nB = document.querySelector(Cj), dB = null !== (jB = nB && QB.get(nB)) && void 0 !== jB ? jB : zB.find((BB => "hotbar" === BB.panel));
+           } = this.getTargets(), JB = document.querySelector(xI), oB = null !== (IB = JB && TB.get(JB)) && void 0 !== IB ? IB : ZB.find((BB => "hotbar" === BB.panel));
```

#### 198. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2685` → after: `L2589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2589) · [Before (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2685)

```diff
-           const QB = (0, aB.h)("inventoryDrop");
+           const TB = (0, nB.g)("inventoryDrop");
```

#### 199. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2688` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2592) · [Before (L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2688)

```diff
-               kind: "DN"
+               kind: "sv"
```

#### 200. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2693` → after: `L2597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2597) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2693)

```diff
-             return void(BB && (this.dropFrom(BB, !1, zB), this.dropLatch.press(BB, this.focusKey(), jB, yB.c[(0, rB.j)().tapHoldTime].dropStackMs), this.afterAction()))
+             return void(BB && (this.dropFrom(BB, !1, ZB), this.dropLatch.press(BB, this.focusKey(), IB, qB.c[(0, zB.i)().tapHoldTime].dropStackMs), this.afterAction()))
```

#### 201. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2697` → after: `L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2601) · [Before (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2697)

```diff
-           dB && ((BB, jB, zB) => "DN" === BB.kind ? jB : !jB && zB(BB.idx))(dB, zB.isHolding(), zB.hasItemAt) && (this.dropFrom(dB, !0, zB), this.afterAction())
+           oB && ((BB, IB, ZB) => "sv" === BB.kind ? IB : !IB && ZB(BB.idx))(oB, ZB.isHolding(), ZB.hasItemAt) && (this.dropFrom(oB, !0, ZB), this.afterAction())
```

#### 202. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2700` → after: `L2604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2604) · [Before (L2700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2700)

```diff
-           "DN" === BB.kind ? zB.dropHeld(jB, this.slotPoint()) : zB.dropSlot(BB.idx, jB)
+           "sv" === BB.kind ? ZB.dropHeld(IB, this.slotPoint()) : ZB.dropSlot(BB.idx, IB)
```

#### 203. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2720` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2624) · [Before (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2720)

```diff
-           switch (dB && jz.has(BB) && (0, kB.x)(dB), BB) {
+           switch (oB && IZ.has(BB) && (0, yB.z)(oB), BB) {
```

#### 204. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2738` → after: `L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2642) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2738)

```diff
-               (0, wB.o)(dB, (0, wB.x)(dB));
+               (0, AB.q)(oB, (0, AB.H)(oB));
```

#### 205. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2741` → after: `L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2645) · [Before (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2741)

```diff
-               (0, wB.J)(dB) && (0, wB.H)(dB);
+               (0, AB.T)(oB) && (0, AB.R)(oB);
```

#### 206. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2772` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2676) · [Before (L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2772)

```diff
-           })(BB, this.state) || (this.state = BB, UB.n.Ly(Aj.f, BB))
+           })(BB, this.state) || (this.state = BB, cB.l.Gq(XI.g, BB))
```

#### 207. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2776-L2779` → after: `L2680-L2683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2680-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2680-L2683) · [Before (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2776-L2779)

```diff
-     var Iz = zB(8704),
-       Nz = zB(363),
-       uz = zB(1664),
-       Uz = zB(8150);
+     var GZ = ZB(8824),
+       vZ = ZB(342),
+       kZ = ZB(1711),
+       cZ = ZB(8297);
```

#### 208. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2781` → after: `L2685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2685) · [Before (L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2781)

```diff
-       pz = BB => BB instanceof HTMLElement && (0, RB.s)(BB) && !(0, RB.y)(BB),
+       hZ = BB => BB instanceof HTMLElement && (0, VB.r)(BB) && !(0, VB.x)(BB),
```

#### 209. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2785` → after: `L2689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2689) · [Before (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2785)

```diff
-         for (const nB of null !== (zB = null === (QB = BB.parentElement) || void 0 === QB ? void 0 : QB.children) && void 0 !== zB ? zB : []) {
+         for (const JB of null !== (ZB = null === (TB = BB.parentElement) || void 0 === TB ? void 0 : TB.children) && void 0 !== ZB ? ZB : []) {
```

#### 210. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2844` → after: `L2748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2748) · [Before (L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2844)

```diff
-           QB[zB] && !(nB ? dB : IB) || NB.add(zB)
+           TB[ZB] && !(JB ? oB : GB) || vB.add(ZB)
```

#### 211. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2913-L2915` → after: `L2817-L2819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2817-L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2817-L2819) · [Before (L2913-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2913-L2915)

```diff
-     var fz = zB(1718),
-       oz = zB(8711),
-       Hz = zB(8718);
+     var iZ = ZB(1752),
+       pZ = ZB(8827),
+       aZ = ZB(8835);
```

#### 212. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2917-L2919` → after: `L2821-L2823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2821-L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2821-L2823) · [Before (L2917-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2917-L2919)

```diff
-         if ("death" !== BB || "inGame" !== uB.c.get("gameState") || "off" === (0, rB.j)().quickChat || null === (0, fz.e)()) return !1;
-         const jB = (0, aB.h)("chat");
-         return jB !== (0, aB.h)("menuConfirm") && jB !== (0, aB.h)("menuBack")
+         if ("death" !== BB || "inGame" !== kB.d.get("gameState") || "off" === (0, zB.i)().quickChat || null === (0, iZ.d)()) return !1;
+         const IB = (0, nB.g)("chat");
+         return IB !== (0, nB.g)("menuConfirm") && IB !== (0, nB.g)("menuBack")
```

#### 213. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2922-L2924` → after: `L2826-L2828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2826-L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2826-L2828) · [Before (L2922-L2924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2922-L2924)

```diff
-     var Yz = zB(4383),
-       Vz = zB(8722),
-       hz = zB(8724);
+     var jZ = ZB(4469),
+       PZ = ZB(8840),
+       RZ = ZB(8843);
```

#### 214. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2927` → after: `L2831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2831) · [Before (L2927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2927)

```diff
-         for (const zB of BB.querySelectorAll("[data-pad-tabs]"))(0, RB.s)(zB) && (!jB || Number(zB.dataset.padTabs) < Number(jB.dataset.padTabs)) && (jB = zB);
+         for (const ZB of BB.querySelectorAll("[data-pad-tabs]"))(0, VB.r)(ZB) && (!IB || Number(ZB.dataset.padTabs) < Number(IB.dataset.padTabs)) && (IB = ZB);
```

#### 215. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2936` → after: `L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2840) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2936)

```diff
-               for (const QB of (0, RB.h)(jB)) {
+               for (const TB of (0, VB.i)(IB)) {
```

#### 216. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2952` → after: `L2856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2856) · [Before (L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2952)

```diff
-         })([...zB.querySelectorAll("[data-pad-tab]")].filter((BB => (0, RB.s)(BB) && !(0, RB.y)(BB))), QB);
+         })([...ZB.querySelectorAll("[data-pad-tab]")].filter((BB => (0, VB.r)(BB) && !(0, VB.x)(BB))), TB);
```

#### 217. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2954` → after: `L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2858) · [Before (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2954)

```diff
-         const IB = null !== (nB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== nB ? nB : null,
+         const GB = null !== (JB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== JB ? JB : null,
```

#### 218. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2957` → after: `L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2861) · [Before (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2957)

```diff
-         (0, wB.b)(dB), BB && (uB ? Zz(BB, jB, uB, zB) : BB.setFocus(dB, {
+         (0, AB.e)(oB), BB && (kB ? mZ(BB, IB, kB, ZB) : BB.setFocus(oB, {
```

#### 219. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2963-L2964` → after: `L2867-L2868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2867-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2867-L2868) · [Before (L2963-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2963-L2964)

```diff
-         const zB = VB(null !== (jB = fB(BB, "x")) && void 0 !== jB ? jB : BB),
-           QB = (0, RB.f)(BB).filter((BB => !(0, RB.y)(BB))),
+         const ZB = PB(null !== (IB = iB(BB, "x")) && void 0 !== IB ? IB : BB),
+           TB = (0, VB.e)(BB).filter((BB => !(0, VB.x)(BB))),
```

#### 220. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2966` → after: `L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2870) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2966)

```diff
-         return (nB.length > 0 ? nB : QB).sort(((BB, jB) => iz(BB.getBoundingClientRect(), jB.getBoundingClientRect())))
+         return (JB.length > 0 ? JB : TB).sort(((BB, IB) => OZ(BB.getBoundingClientRect(), IB.getBoundingClientRect())))
```

#### 221. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2969` → after: `L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2873) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2969)

```diff
-         const QB = [...jB.querySelectorAll("[data-pad-row]")].filter(RB.s),
+         const TB = [...IB.querySelectorAll("[data-pad-row]")].filter(VB.r),
```

#### 222. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2992` → after: `L2896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2896) · [Before (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2992)

```diff
-         const dB = null !== (QB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== QB ? QB : null,
+         const oB = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== TB ? TB : null,
```

#### 223. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2994` → after: `L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2898) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2994)

```diff
-           NB = null !== (nB = dB ? fB(dB, IB, jB) : null) && void 0 !== nB ? nB : HB(jB, IB);
+           vB = null !== (JB = oB ? iB(oB, GB, IB) : null) && void 0 !== JB ? JB : aB(IB, GB);
```

#### 224. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2996` → after: `L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2900) · [Before (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L2996)

```diff
-         const uB = dB ? (0, wB.x)(dB) : null;
+         const kB = oB ? (0, AB.H)(oB) : null;
```

#### 225. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3013` → after: `L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2917) · [Before (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3013)

```diff
-           NB = Ez((0, wB.x)(dB), IB.map((BB => BB.getBoundingClientRect()))),
+           vB = wZ((0, AB.H)(oB), GB.map((BB => BB.getBoundingClientRect()))),
```

#### 226. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3015` → after: `L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2919) · [Before (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3015)

```diff
-         return BB.setFocus(null !== uB && void 0 !== uB && uB.isConnected ? uB : null !== (QB = IB[NB]) && void 0 !== QB ? QB : null, {
+         return BB.setFocus(null !== kB && void 0 !== kB && kB.isConnected ? kB : null !== (TB = GB[vB]) && void 0 !== TB ? TB : null, {
```

#### 227. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3020-L3021` → after: `L2924-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2924-L2925) · [Before (L3020-L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3020-L3021)

```diff
-         const jB = (0, aB.h)(BB);
-         return (0, JB.O)(jB) || Uz.u.some((BB => (0, aB.h)(BB) === jB)) ? null : jB
+         const IB = (0, nB.g)(BB);
+         return (0, NB.F)(IB) || cZ.t.some((BB => (0, nB.g)(BB) === IB)) ? null : IB
```

#### 228. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3031` → after: `L2935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2935) · [Before (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3031)

```diff
-             return null !== (jB = null === (zB = Xz(BB)) || void 0 === zB ? void 0 : zB.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== jB ? jB : null
+             return null !== (IB = null === (ZB = rZ(BB)) || void 0 === ZB ? void 0 : ZB.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== IB ? IB : null
```

#### 229. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3034` → after: `L2938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2938) · [Before (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3034)

```diff
-         (0, Iz.e)(), zB === Nz.o.SETTINGS && (0, uz.g)(uB.c.get("openEverythingMenuName")) ? uB.c.set({
+         (0, GZ.c)(), ZB === vZ.q.SETTINGS && (0, kZ.h)(kB.d.get("openEverythingMenuName")) ? kB.d.set({
```

#### 230. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3036` → after: `L2940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2940) · [Before (L3036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3036)

```diff
-         }) : (0, uz.t)((0, hz.e)("padMenuShortcut"), zB, QB), BB && dB && nB && Zz(BB, jB, dB, nB.closest("[data-pad-tabs]"))
+         }) : (0, kZ.x)((0, RZ.e)("padMenuShortcut"), ZB, TB), BB && oB && JB && mZ(BB, IB, oB, JB.closest("[data-pad-tabs]"))
```

#### 231. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3040-L3041` → after: `L2944-L2945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2944-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2944-L2945) · [Before (L3040-L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3040-L3041)

```diff
-       bz = (0, mB.b)(JB.cb),
-       vz = (0, mB.b)(JB.cb),
+       DZ = (0, gB.d)(NB.Y),
+       KZ = (0, gB.d)(NB.Y),
```

#### 232. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3044-L3045` → after: `L2948-L2949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2948-L2949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2948-L2949) · [Before (L3044-L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3044-L3045)

```diff
-             const zB = (0, aB.h)("chat");
-             return Dz(jB) && BB.isHeld(zB) ? "hold" === Fz.update(BB.wasPressed(zB), BB.isHeld(zB), performance.now(), yB.c[(0, rB.j)().tapHoldTime].wheelMs) && (pB.c.consumeButton(zB), UB.n.Ly(Hz.i), !0) : (Fz.release(), !1)
+             const ZB = (0, nB.g)("chat");
+             return HZ(IB) && BB.isHeld(ZB) ? "hold" === MZ.update(BB.wasPressed(ZB), BB.isHeld(ZB), performance.now(), qB.c[(0, zB.i)().tapHoldTime].wheelMs) && (hB.c.consumeButton(ZB), cB.l.Gq(aZ.l), !0) : (MZ.release(), !1)
```

#### 233. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3052` → after: `L2956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2956) · [Before (L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3052)

```diff
-           if (jB.wasPressed((0, aB.h)(IB))) {
+           if (IB.wasPressed((0, nB.g)(GB))) {
```

#### 234. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3065` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2969) · [Before (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3065)

```diff
-           const zB = (0, aB.h)(IB);
+           const ZB = (0, nB.g)(GB);
```

#### 235. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3069-L3072` → after: `L2973-L2976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2973-L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2973-L2976) · [Before (L3069-L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3069-L3072)

```diff
-         return xz(jB, "pause") ? (dB || (0, uz.q)() && "menu" !== zB.layer.kind || Kz(BB, QB, (0, uz.q)() ? Nz.o.SETTINGS : (0, Yz.b)()), !0) : !!xz(jB, "leaderboard") && ("home" === zB.layer.kind ? (BB => {
-           const jB = [...BB.querySelectorAll("[data-pad-notifications]")].find(RB.s);
-           jB && (0, wB.b)(jB)
-         })(QB) : dB || Kz(BB, QB, Nz.o.LOBBY_LEADERBOARD, "inGame" === uB.c.get("gameState")), !0)
+         return tZ(IB, "pause") ? (oB || (0, kZ.p)() && "menu" !== ZB.layer.kind || bZ(BB, TB, (0, kZ.p)() ? vZ.q.SETTINGS : (0, jZ.d)()), !0) : !!tZ(IB, "leaderboard") && ("home" === ZB.layer.kind ? (BB => {
+           const IB = [...BB.querySelectorAll("[data-pad-notifications]")].find(VB.r);
+           IB && (0, AB.e)(IB)
+         })(TB) : oB || bZ(BB, TB, vZ.q.LOBBY_LEADERBOARD, "inGame" === kB.d.get("gameState")), !0)
```

#### 236. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3077` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2981) · [Before (L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3077)

```diff
-         if (jB.wasPressed((0, aB.h)("menuSecondary"))) {
+         if (IB.wasPressed((0, nB.g)("menuSecondary"))) {
```

#### 237. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3080` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2984) · [Before (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3080)

```diff
-           if (nB) return (0, wB.b)(nB), !0;
+           if (JB) return (0, AB.e)(JB), !0;
```

#### 238. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3083` → after: `L2987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2987) · [Before (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3083)

```diff
-             return jB && (0, RB.v)(jB, zB.root) ? (BB.setFocus(jB, {
+             return IB && (0, VB.u)(IB, ZB.root) ? (BB.setFocus(IB, {
```

#### 239. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3085` → after: `L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2989) · [Before (L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3085)

```diff
-             }), (0, wB.b)(jB)) : uB.c.set({
+             }), (0, AB.e)(IB)) : kB.d.set({
```

#### 240. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3093` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2997) · [Before (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3093)

```diff
-           if (!nB || !(0, RB.s)(nB)) return void(0, uz.t)((0, hz.e)("padMenuShortcut"), Nz.o.SOCIAL);
+           if (!JB || !(0, VB.r)(JB)) return void(0, kZ.x)((0, RZ.e)("padMenuShortcut"), vZ.q.SOCIAL);
```

#### 241. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3095` → after: `L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L2999) · [Before (L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3095)

```diff
-           const dB = null !== (zB = null === (QB = nB.querySelector("[data-pad-friends-start]")) || void 0 === QB ? void 0 : QB.getBoundingClientRect().top) && void 0 !== zB ? zB : -1 / 0,
+           const oB = null !== (ZB = null === (TB = JB.querySelector("[data-pad-friends-start]")) || void 0 === TB ? void 0 : TB.getBoundingClientRect().top) && void 0 !== ZB ? ZB : -1 / 0,
```

#### 242. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3098` → after: `L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3002) · [Before (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3098)

```diff
-             uB = NB.length > 0 ? NB : IB,
+             kB = vB.length > 0 ? vB : GB,
```

#### 243. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3107` → after: `L3011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3011) · [Before (L3107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3107)

```diff
-         const nB = (0, wB.z)(BB);
+         const JB = (0, AB.K)(BB);
```

#### 244. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3109-L3110` → after: `L3013-L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3013-L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3013-L3014) · [Before (L3109-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3109-L3110)

```diff
-         const dB = (null !== (jB = null !== (zB = null !== (QB = BB.getAttribute("aria-label")) && void 0 !== QB ? QB : BB.getAttribute("title")) && void 0 !== zB ? zB : BB.textContent) && void 0 !== jB ? jB : "").replace(/\s+/g, " ").trim();
-         return dB ? `${BB.tagName}:${dB.slice(0,100)}` : null
+         const oB = (null !== (IB = null !== (ZB = null !== (TB = BB.getAttribute("aria-label")) && void 0 !== TB ? TB : BB.getAttribute("title")) && void 0 !== ZB ? ZB : BB.textContent) && void 0 !== IB ? IB : "").replace(/\s+/g, " ").trim();
+         return oB ? `${BB.tagName}:${oB.slice(0,100)}` : null
```

#### 245. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3131` → after: `L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3035) · [Before (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3131)

```diff
-           dB = (0, wB.z)(jB),
+           oB = (0, AB.K)(IB),
```

#### 246. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3155` → after: `L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3059) · [Before (L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3155)

```diff
-         return null !== (zB = null !== (QB = IB[nB.ordinal]) && void 0 !== QB ? QB : IB[0]) && void 0 !== zB ? zB : null
+         return null !== (ZB = null !== (TB = GB[JB.ordinal]) && void 0 !== TB ? TB : GB[0]) && void 0 !== ZB ? ZB : null
```

#### 247. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3161` → after: `L3065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3065) · [Before (L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3161)

```diff
-     var zQ = zB(1306);
+     var ZT = ZB(1343);
```

#### 248. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3176` → after: `L3080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3080) · [Before (L3176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3176)

```diff
-             const zB = (null !== (QB = BB[dB]) && void 0 !== QB ? QB : 0) - (null !== (nB = jB[dB]) && void 0 !== nB ? nB : 0);
+             const ZB = (null !== (TB = BB[oB]) && void 0 !== TB ? TB : 0) - (null !== (JB = IB[oB]) && void 0 !== JB ? JB : 0);
```

#### 249. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3189` → after: `L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3093) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3189)

```diff
-         return null !== (zB = nQ(BB.root, jB.root)) && void 0 !== zB ? zB : BB.order > jB.order
+         return null !== (ZB = JT(BB.root, IB.root)) && void 0 !== ZB ? ZB : BB.order > IB.order
```

#### 250. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3198` → after: `L3102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3102) · [Before (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3198)

```diff
-           zB = "number" === typeof jB ? jB : null;
+           ZB = "number" === typeof IB ? IB : null;
```

#### 251. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3202-L3203` → after: `L3106-L3107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3106-L3107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3106-L3107) · [Before (L3202-L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3202-L3203)

```diff
-           dB = [...document.querySelectorAll("[data-pad-covers]")].filter(RB.s);
-         for (const IB of (0, zQ.g)()) {
+           oB = [...document.querySelectorAll("[data-pad-covers]")].filter(VB.r);
+         for (const GB of (0, ZT.f)()) {
```

#### 252. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3205` → after: `L3109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3109) · [Before (L3205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3205)

```diff
-             jB = !!BB && (0, RB.s)(BB) && !IQ(BB, dB);
+             IB = !!BB && (0, VB.r)(BB) && !GT(BB, oB);
```

#### 253. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3232` → after: `L3136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3136) · [Before (L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3232)

```diff
-       yQ = (0, rB.j)().menuNavigation,
+       qT = (0, zB.i)().menuNavigation,
```

#### 254. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3236-L3237` → after: `L3140-L3141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3140-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3140-L3141) · [Before (L3236-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3236-L3237)

```diff
-     UB.n.subscribe(rB.g, (() => {
-       const BB = (0, rB.j)().menuNavigation;
+     cB.l.subscribe(zB.f, (() => {
+       const BB = (0, zB.i)().menuNavigation;
```

#### 255. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3242` → after: `L3146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3146) · [Before (L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3242)

```diff
-         return null !== (BB = JQ) && void 0 !== BB ? BB : (0, rB.j)().menuNavigation
+         return null !== (BB = NT) && void 0 !== BB ? BB : (0, zB.i)().menuNavigation
```

#### 256. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3269` → after: `L3173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3173) · [Before (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3269)

```diff
-           has: (0, RB.l)(BB)
+           has: (0, VB.m)(BB)
```

#### 257. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3295-L3296` → after: `L3199-L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3199-L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3199-L3200) · [Before (L3295-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3295-L3296)

```diff
-     var HQ = zB(4666),
-       DQ = zB(5101);
+     var aT = ZB(4732),
+       HT = ZB(5186);
```

#### 258. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3298` → after: `L3202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3202) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3298)

```diff
-       YQ = `${FQ}, [data-pad-back]`,
+       jT = `${MT}, [data-pad-back]`,
```

#### 259. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3329-L3330` → after: `L3233-L3234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3233-L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3233-L3234) · [Before (L3329-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3329-L3330)

```diff
-         const zB = BB.querySelector(`${AQ}[data-pad-selected='true']`);
-         return zB && jB.includes(zB) ? zB : null
+         const ZB = BB.querySelector(`${XT}[data-pad-selected='true']`);
+         return ZB && IB.includes(ZB) ? ZB : null
```

#### 260. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3346` → after: `L3250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3250) · [Before (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3346)

```diff
-         if (NB && NB !== IB) return IB || (this.contentReturn = new WeakRef(BB)), null !== (uB = TQ(NB, zB)) && void 0 !== uB ? uB : jB;
+         if (vB && vB !== GB) return GB || (this.contentReturn = new WeakRef(BB)), null !== (kB = LT(vB, ZB)) && void 0 !== kB ? kB : IB;
```

#### 261. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3350` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3254) · [Before (L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3350)

```diff
-         return aB && UB.contains(aB) && zB.includes(aB) ? aB : null !== (dB = this.pickRegionStart(UB, fB(jB, "y", QB), zB)) && void 0 !== dB ? dB : jB
+         return nB && cB.contains(nB) && ZB.includes(nB) ? nB : null !== (oB = this.pickRegionStart(cB, iB(IB, "y", TB), ZB)) && void 0 !== oB ? oB : IB
```

#### 262. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3358` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3262) · [Before (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3358)

```diff
-         return zB.some((BB => dB.contains(BB) && !BB.closest(YQ))) || !jB.closest(YQ) ? dB : null
+         return ZB.some((BB => oB.contains(BB) && !BB.closest(jT))) || !IB.closest(jT) ? oB : null
```

#### 263. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3387` → after: `L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3291) · [Before (L3387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3387)

```diff
-         for (const dB of (0, RB.h)(BB)) {
+         for (const oB of (0, VB.i)(BB)) {
```

#### 264. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3407-L3408` → after: `L3311-L3312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3311-L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3311-L3312) · [Before (L3407-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3407-L3408)

```diff
-           if (zB) return jB === BB || jB.querySelectorAll(RB.e).length <= 1 ? zB : null;
-           if (jB !== BB && jB.querySelectorAll(RB.e).length > 1) return null
+           if (ZB) return IB === BB || IB.querySelectorAll(VB.b).length <= 1 ? ZB : null;
+           if (IB !== BB && IB.querySelectorAll(VB.b).length > 1) return null
```

#### 265. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3413` → after: `L3317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3317) · [Before (L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3413)

```diff
-         (0, wB.q)(BB, jB, zB);
+         (0, AB.u)(BB, IB, ZB);
```

#### 266. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3416` → after: `L3320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3320) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3416)

```diff
-         QB !== nB && (0, wB.q)(QB, nB, nB ? (0, wB.x)(nB) : zB, {
+         TB !== JB && (0, AB.u)(TB, JB, JB ? (0, AB.H)(JB) : ZB, {
```

#### 267. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3431` → after: `L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3335) · [Before (L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3431)

```diff
-         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new jQ, this.tabStripNav = new WQ, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
+         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new IT, this.tabStripNav = new uT, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
```

#### 268. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3439` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3343) · [Before (L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3439)

```diff
-             isActive: () => (0, sB.m)() && "focus" === qQ(),
+             isActive: () => (0, FB.i)() && "focus" === YT(),
```

#### 269. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3446` → after: `L3350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3350) · [Before (L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3446)

```diff
-             wakePressActs: BB => (0, pB.f)(BB) || BB === (0, aB.h)("menuConfirm") && (0, wB.F)((0, sB.e)())
+             wakePressActs: BB => (0, hB.f)(BB) || BB === (0, nB.g)("menuConfirm") && (0, AB.N)((0, FB.c)())
```

#### 270. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3448` → after: `L3352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3352) · [Before (L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3448)

```diff
-           jB = (0, zQ.l)((BB => {
+           IB = (0, ZT.j)((BB => {
```

#### 271. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3453-L3454` → after: `L3357-L3358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3357-L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3357-L3358) · [Before (L3453-L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3453-L3454)

```diff
-         const QB = IB.f.onFrame((BB => {
-             (0, sB.m)() || BB.timestampMs - zB < 100 || (zB = BB.timestampMs, aQ())
+         const TB = GB.h.onFrame((BB => {
+             (0, FB.i)() || BB.timestampMs - ZB < 100 || (ZB = BB.timestampMs, nT())
```

#### 272. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3457` → after: `L3361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3361) · [Before (L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3457)

```diff
-             BB.isTrusted && BB.target instanceof Element && IB.f.getActivePad() && this.noteChosenStop(BB.target)
+             BB.isTrusted && BB.target instanceof Element && GB.h.getActivePad() && this.noteChosenStop(BB.target)
```

#### 273. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3467` → after: `L3371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3371) · [Before (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3467)

```diff
-         const nB = null !== (jB = null === (zB = BB.closest(".Dropdown-root")) || void 0 === zB ? void 0 : zB.querySelector(".Dropdown-control")) && void 0 !== jB ? jB : BB,
+         const JB = null !== (IB = null === (ZB = BB.closest(".Dropdown-root")) || void 0 === ZB ? void 0 : ZB.querySelector(".Dropdown-control")) && void 0 !== IB ? IB : BB,
```

#### 274. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3474` → after: `L3378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3378) · [Before (L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3474)

```diff
-         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = dB, this.lastFocusedCentre = (0, wB.x)(dB), this.rememberFocus(dB), this.notify())
+         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = oB, this.lastFocusedCentre = (0, AB.H)(oB), this.rememberFocus(oB), this.notify())
```

#### 275. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3495` → after: `L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3399) · [Before (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3495)

```diff
-           this.stickRepeat.reset(), null !== (BB = this.focused) && void 0 !== BB && BB.isConnected && cQ(this.focused, null, (0, wB.x)(this.focused)), this.notify()
+           this.stickRepeat.reset(), null !== (BB = this.focused) && void 0 !== BB && BB.isConnected && ET(this.focused, null, (0, AB.H)(this.focused)), this.notify()
```

#### 276. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3515-L3517` → after: `L3419-L3421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3419-L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3419-L3421) · [Before (L3515-L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3515-L3517)

```diff
-           const jB = (0, wB.x)(BB);
-           this.lastFocusedCentre = jB, this.movedInLayer && this.rememberFocus(BB), cQ(nB, BB, jB), "false" === BB.getAttribute("aria-pressed") && BB.closest("[data-pad-select-on-focus]") && (0, wB.b)(BB)
-         } else nB && cQ(nB, null, (0, wB.x)(nB));
+           const IB = (0, AB.H)(BB);
+           this.lastFocusedCentre = IB, this.movedInLayer && this.rememberFocus(BB), ET(JB, BB, IB), "false" === BB.getAttribute("aria-pressed") && BB.closest("[data-pad-select-on-focus]") && (0, AB.e)(BB)
+         } else JB && ET(JB, null, (0, AB.H)(JB));
```

#### 277. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3551` → after: `L3455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3455) · [Before (L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3551)

```diff
-         return (0, RB.f)(BB).filter((BB => !(0, RB.y)(BB)))
+         return (0, VB.e)(BB).filter((BB => !(0, VB.x)(BB)))
```

#### 278. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3557` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3461) · [Before (L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3557)

```diff
-         const QB = null !== (jB = this.findOpenDropdown(zB)) && void 0 !== jB ? jB : zB,
+         const TB = null !== (IB = this.findOpenDropdown(ZB)) && void 0 !== IB ? IB : ZB,
```

#### 279. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3562` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3466) · [Before (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3562)

```diff
-           if (null !== this.layerKey && QB.root === this.layerRoot && jB && (0, RB.v)(jB, QB.root)) this.continueLayer(dB, jB), this.wasActive || this.resume(QB.root, nB);
+           if (null !== this.layerKey && TB.root === this.layerRoot && IB && (0, VB.u)(IB, TB.root)) this.continueLayer(oB, IB), this.wasActive || this.resume(TB.root, JB);
```

#### 280. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3567` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3471) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3567)

```diff
-             "popup" !== QB.layer.kind || QB !== zB || NB ? "menu" === QB.layer.kind && IB && "inGame" === uB.c.get("gameState") && !(0, Iz.i)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = nB + HQ.d) : (this.pressGuardExtends = jB, this.pressGuardUntilMs = nB + (j … [truncated]
+             "popup" !== TB.layer.kind || TB !== ZB || vB ? "menu" === TB.layer.kind && GB && "inGame" === kB.d.get("gameState") && !(0, GZ.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = JB + aT.c) : (this.pressGuardExtends = IB, this.pressGuardUntilMs = JB + (I … [truncated]
```

#### 281. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3570` → after: `L3474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3474) · [Before (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3570)

```diff
-         if (this.layerKind = QB.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), BB.wokeDevice && this.focusPointedStop(QB.root), this.validateFocus(QB, nB), nB < this.pressGuardUntilMs && this.pressGuardExtends && (BB.wasPressed((0, aB.h)("menuConfirm")) || BB … [truncated]
+         if (this.layerKind = TB.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), BB.wokeDevice && this.focusPointedStop(TB.root), this.validateFocus(TB, JB), JB < this.pressGuardUntilMs && this.pressGuardExtends && (BB.wasPressed((0, nB.g)("menuConfirm")) || BB … [truncated]
```

#### 282. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3574` → after: `L3478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3478) · [Before (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3574)

```diff
-             return jB !== LQ && (LQ = jB, GQ.lock()), GQ.update(BB, (0, rB.j)().moveDeadzone)
+             return IB !== WT && (WT = IB, UT.lock()), UT.update(BB, (0, zB.i)().moveDeadzone)
```

#### 283. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3581` → after: `L3485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3485) · [Before (L3581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3581)

```diff
-         if (!jB || !(0, RB.s)(jB)) return null;
+         if (!IB || !(0, VB.r)(IB)) return null;
```

#### 284. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3588` → after: `L3492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3492) · [Before (L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3588)

```diff
-             (0, wB.k)(jB)
+             (0, AB.n)(IB)
```

#### 285. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3598` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3502) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3598)

```diff
-         const jB = (0, sB.e)(),
+         const IB = (0, FB.c)(),
```

#### 286. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3617` → after: `L3521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3521) · [Before (L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3617)

```diff
-         this.restoredFromMemory = null !== zB, this.setFocus(null !== zB && void 0 !== zB ? zB : this.pickInitial(BB, {
+         this.restoredFromMemory = null !== ZB, this.setFocus(null !== ZB && void 0 !== ZB ? ZB : this.pickInitial(BB, {
```

#### 287. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3629` → after: `L3533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3533) · [Before (L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3629)

```diff
-         QB && RQ(QB, BB) ? this.takeOver(BB, QB, jB) : null !== (zB = this.focused) && void 0 !== zB && zB.isConnected && cQ(null, this.focused, (0, wB.x)(this.focused))
+         TB && VT(TB, BB) ? this.takeOver(BB, TB, IB) : null !== (ZB = this.focused) && void 0 !== ZB && ZB.isConnected && ET(null, this.focused, (0, AB.H)(this.focused))
```

#### 288. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3633` → after: `L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3537) · [Before (L3633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3633)

```diff
-         return null !== (jB = this.layerKey ? this.findRemembered(BB, this.layerKey) : null) && void 0 !== jB ? jB : this.pickInitial(BB, {
+         return null !== (IB = this.layerKey ? this.findRemembered(BB, this.layerKey) : null) && void 0 !== IB ? IB : this.pickInitial(BB, {
```

#### 289. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3645` → after: `L3549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3549) · [Before (L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3645)

```diff
-           point: QB ? (0, wB.x)(QB) : null !== (zB = this.lastFocusedCentre) && void 0 !== zB ? zB : this.getLayerStartPoint(nB),
+           point: TB ? (0, AB.H)(TB) : null !== (ZB = this.lastFocusedCentre) && void 0 !== ZB ? ZB : this.getLayerStartPoint(JB),
```

#### 290. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3658` → after: `L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3562) · [Before (L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3658)

```diff
-         return (0, wB.x)(null !== jB && void 0 !== jB ? jB : BB)
+         return (0, AB.H)(null !== IB && void 0 !== IB ? IB : BB)
```

#### 291. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3665` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3569) · [Before (L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3665)

```diff
-         } = jB, IB = QB instanceof HTMLElement && (0, RB.v)(QB, BB) ? QB : null;
+         } = IB, GB = TB instanceof HTMLElement && (0, VB.u)(TB, BB) ? TB : null;
```

#### 292. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3671` → after: `L3575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3575) · [Before (L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3671)

```diff
-           }) : this.focusNearest(BB, dB), void(this.focused && this.focused === jB && this.focused.isConnected && cQ(null, this.focused, (0, wB.x)(this.focused)))
+           }) : this.focusNearest(BB, oB), void(this.focused && this.focused === IB && this.focused.isConnected && ET(null, this.focused, (0, AB.H)(this.focused)))
```

#### 293. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3680` → after: `L3584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3584) · [Before (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3680)

```diff
-           aB = UB >= 0 ? UB : Ez(dB, uB);
+           nB = cB >= 0 ? cB : wZ(oB, kB);
```

#### 294. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3697` → after: `L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3601) · [Before (L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3697)

```diff
-         const QB = [...BB.querySelectorAll(eQ)].filter((QB => (null === zB || void 0 === zB || !zB.has(QB)) && (jB ? (0, RB.A)(QB, BB) : (0, RB.v)(QB, BB)))),
+         const TB = [...BB.querySelectorAll(fT)].filter((TB => (null === ZB || void 0 === ZB || !ZB.has(TB)) && (IB ? (0, VB.y)(TB, BB) : (0, VB.u)(TB, BB)))),
```

#### 295. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3702-L3703` → after: `L3606-L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3606-L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3606-L3607) · [Before (L3702-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3702-L3703)

```diff
-         const zB = [...BB.querySelectorAll(KQ)].filter(RB.s);
-         for (const QB of [...(0, RB.h)(BB), ...zB]) {
+         const ZB = [...BB.querySelectorAll(bT)].filter(VB.r);
+         for (const TB of [...(0, VB.i)(BB), ...ZB]) {
```

#### 296. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3721` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3625) · [Before (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3721)

```diff
-         const dB = BB => jB ? (0, RB.f)(BB) : this.getEnabledCandidates(BB);
+         const oB = BB => IB ? (0, VB.e)(BB) : this.getEnabledCandidates(BB);
```

#### 297. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3723` → after: `L3627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3627) · [Before (L3723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3723)

```diff
-         for (const rB of (0, RB.h)(BB))
+         for (const zB of (0, VB.i)(BB))
```

#### 298. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3726` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3630) · [Before (L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3726)

```diff
-           if (zB && performance.now() - QB < 1e4 && (0, RB.p)(BB)) return null;
+           if (ZB && performance.now() - TB < 1e4 && (0, VB.o)(BB)) return null;
```

#### 299. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3732` → after: `L3636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3636) · [Before (L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3732)

```diff
-           aB = UB.length > 0 ? UB : IB,
+           nB = cB.length > 0 ? cB : GB,
```

#### 300. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3740` → after: `L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3644) · [Before (L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3740)

```diff
-           if (nB && (0, RB.v)(nB, BB.root)) return this.pendingFocus = null, void this.setFocus(nB, {
+           if (JB && (0, VB.u)(JB, BB.root)) return this.pendingFocus = null, void this.setFocus(JB, {
```

#### 301. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3746-L3747` → after: `L3650-L3651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3650-L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3650-L3651) · [Before (L3746-L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3746-L3747)

```diff
-           dB = !!nB && (0, RB.v)(nB, BB.root);
-         if (!(!dB && nB && nB === this.lastActivated && jB - this.lastActivatedAtMs < 5e3 && BB.root.contains(nB) && (0, RB.s)(nB) && (0, RB.y)(nB))) {
+           oB = !!JB && (0, VB.u)(JB, BB.root);
+         if (!(!oB && JB && JB === this.lastActivated && IB - this.lastActivatedAtMs < 5e3 && BB.root.contains(JB) && (0, VB.r)(JB) && (0, VB.x)(JB))) {
```

#### 302. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3752` → after: `L3656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3656) · [Before (L3752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3752)

```diff
-                 QB = null !== zB && void 0 !== zB ? zB : this.restoredFromMemory ? null : this.pickDefault(BB.root);
+                 TB = null !== ZB && void 0 !== ZB ? ZB : this.restoredFromMemory ? null : this.pickDefault(BB.root);
```

#### 303. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3764-L3766` → after: `L3668-L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3668-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3668-L3670) · [Before (L3764-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3764-L3766)

```diff
-         if (BB.wasPressed((0, aB.h)("menuToggleCursor"))) return tQ(this.getHandoff()), !0;
-         if (BB.wasPressed((0, aB.h)("menuBack"))) {
-           const BB = (0, wB.k)(jB.root);
+         if (BB.wasPressed((0, nB.g)("menuToggleCursor"))) return CT(this.getHandoff()), !0;
+         if (BB.wasPressed((0, nB.g)("menuBack"))) {
+           const BB = (0, AB.n)(IB.root);
```

#### 304. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3769` → after: `L3673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3673) · [Before (L3769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3769)

```diff
-           }) : lz(this, jB.root) || ((0, wB.f)(jB.root) ? this.returnToOpener(jB.root) : this.backToStrip(jB.root) || pQ()), !0
+           }) : lZ(this, IB.root) || ((0, AB.h)(IB.root) ? this.returnToOpener(IB.root) : this.backToStrip(IB.root) || hT()), !0
```

#### 305. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3771` → after: `L3675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3675) · [Before (L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3771)

```diff
-         const zB = (0, aB.h)("menuConfirm");
+         const ZB = (0, nB.g)("menuConfirm");
```

#### 306. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3773` → after: `L3677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3677) · [Before (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3773)

```diff
-         BB.wasPressed(zB) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (QB = null === (nB = this.focused) || void 0 === nB ? void 0 : nB.getAttribute("data-pad-repeat")) && void 0 !== QB ? QB : null, this.confirmRepeated = BB.wokeDevice, this.confirm … [truncated]
+         BB.wasPressed(ZB) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (TB = null === (JB = this.focused) || void 0 === JB ? void 0 : JB.getAttribute("data-pad-repeat")) && void 0 !== TB ? TB : null, this.confirmRepeated = BB.wokeDevice, this.confirm … [truncated]
```

#### 307. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3776` → after: `L3680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3680) · [Before (L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3776)

```diff
-           if (this.confirmPressedOn = null, BB && !this.confirmRepeated && BB === this.focused && BB.isConnected && !(0, RB.y)(BB)) {
+           if (this.confirmPressedOn = null, BB && !this.confirmRepeated && BB === this.focused && BB.isConnected && !(0, VB.x)(BB)) {
```

#### 308. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3786` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3690) · [Before (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3786)

```diff
-         zB && null !== this.confirmRepeatKey && BB.isHeld(jB) && (zB === this.focused && zB.isConnected && !(0, RB.y)(zB) && zB.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? zB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
+         ZB && null !== this.confirmRepeatKey && BB.isHeld(IB) && (ZB === this.focused && ZB.isConnected && !(0, VB.x)(ZB) && ZB.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? ZB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
```

#### 309. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3790` → after: `L3694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3694) · [Before (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3790)

```diff
-         if (!(0, rB.j)().menuBackToCategories) return !1;
+         if (!(0, zB.i)().menuBackToCategories) return !1;
```

#### 310. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3800` → after: `L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3704) · [Before (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3800)

```diff
-           return null !== (zB = this.getEnabledCandidates(BB).find((BB => (0, wB.z)(BB) === jB))) && void 0 !== zB ? zB : null
+           return null !== (ZB = this.getEnabledCandidates(BB).find((BB => (0, AB.K)(BB) === IB))) && void 0 !== ZB ? ZB : null
```

#### 311. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3805-L3806` → after: `L3709-L3710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3709-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3709-L3710) · [Before (L3805-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3805-L3806)

```diff
-         if ((0, DQ.d)(BB) || (0, wB.B)(BB)) return;
-         this.lastActivatedKey = null !== (jB = (0, wB.z)(BB)) && void 0 !== jB ? jB : this.lastActivatedKey, this.lastActivated = BB, this.lastActivatedAtMs = performance.now(), this.rememberFocus(BB);
+         if ((0, HT.b)(BB) || (0, AB.L)(BB)) return;
+         this.lastActivatedKey = null !== (IB = (0, AB.K)(BB)) && void 0 !== IB ? IB : this.lastActivatedKey, this.lastActivated = BB, this.lastActivatedAtMs = performance.now(), this.rememberFocus(BB);
```

#### 312. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3810` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3714) · [Before (L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3810)

```diff
-             QB = new Set(zB.querySelectorAll(`[data-pad-initial-area], ${KQ}`)),
+             TB = new Set(ZB.querySelectorAll(`[data-pad-initial-area], ${bT}`)),
```

#### 313. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3814` → after: `L3718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3718) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3814)

```diff
-             return (0, RB.v)(BB, zB) ? null : null !== (nB = this.pickDefault(zB, {
+             return (0, VB.u)(BB, ZB) ? null : null !== (JB = this.pickDefault(ZB, {
```

#### 314. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3816-L3818` → after: `L3720-L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3720-L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3720-L3722) · [Before (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3816-L3818)

```diff
-             })) && void 0 !== nB ? nB : this.pickNewAreaStart(zB, QB)
-           }), 5e3, (() => BB.isConnected && (0, RB.y)(BB) && performance.now() - nB < 6e4))
-         }(0, wB.b)(BB), (0, wB.g)(BB)
+             })) && void 0 !== JB ? JB : this.pickNewAreaStart(ZB, TB)
+           }), 5e3, (() => BB.isConnected && (0, VB.x)(BB) && performance.now() - JB < 6e4))
+         }(0, AB.e)(BB), (0, AB.j)(BB)
```

#### 315. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3821-L3822` → after: `L3725-L3726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3725-L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3725-L3726) · [Before (L3821-L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3821-L3822)

```diff
-         const nB = Dz(jB.layer.kind) ? (0, aB.h)("chat") : null;
-         for (const NB of JB.J) {
+         const JB = HZ(IB.layer.kind) ? (0, nB.g)("chat") : null;
+         for (const vB of NB.y) {
```

#### 316. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3825` → after: `L3729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3729) · [Before (L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3825)

```diff
-         const dB = QB ? (0, JB.k)(BB.leftStick, (0, rB.j)().moveDeadzone) : {
+         const oB = TB ? (0, NB.i)(BB.leftStick, (0, zB.i)().moveDeadzone) : {
```

#### 317. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3829` → after: `L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3733) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3829)

```diff
-           IB = this.stickRepeat.update((0, JB.ib)(dB), zB);
+           GB = this.stickRepeat.update((0, NB.bb)(oB), ZB);
```

#### 318. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3850` → after: `L3754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3754) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3850)

```diff
-           uB = NB ? (0, DQ.d)(IB) : null;
+           kB = vB ? (0, HT.b)(GB) : null;
```

#### 319. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3944` → after: `L3848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3848) · [Before (L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3944)

```diff
-         (0, wB.b)(BB), this.focusWhenFound((() => "true" !== BB.dataset.padSelected ? null : jB.isConnected ? this.tabStripNav.pickContentStart(jB, this.getEnabledCandidates(zB), zB) : nB ? this.tabStripNav.pickReplacedContentStart(BB, nB, this.getEnabledCandidates(zB), zB) : nul … [truncated]
+         (0, AB.e)(BB), this.focusWhenFound((() => "true" !== BB.dataset.padSelected ? null : IB.isConnected ? this.tabStripNav.pickContentStart(IB, this.getEnabledCandidates(ZB), ZB) : JB ? this.tabStripNav.pickReplacedContentStart(BB, JB, this.getEnabledCandidates(ZB), ZB) : nul … [truncated]
```

#### 320. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3962` → after: `L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3866) · [Before (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3962)

```diff
-         const zB = (0, JB.k)(BB.rightStick, .2);
+         const ZB = (0, NB.i)(BB.rightStick, .2);
```

#### 321. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3972` → after: `L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3876) · [Before (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3972)

```diff
-           const IB = null !== (nB = fB(this.focused, dB, jB.root)) && void 0 !== nB ? nB : HB(jB.root, dB);
+           const GB = null !== (JB = iB(this.focused, oB, IB.root)) && void 0 !== JB ? JB : aB(IB.root, oB);
```

#### 322. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3980-L3981` → after: `L3884-L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3884-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3884-L3885) · [Before (L3980-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L3980-L3981)

```diff
-     var Bn = zB(8184);
-     var jn = zB(8727);
+     var BJ = ZB(8341);
+     var IJ = ZB(8849);
```

#### 323. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4052-L4055` → after: `L3956-L3959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3956-L3959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3956-L3959) · [Before (L4052-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4052-L4055)

```diff
-           return "function" === typeof(null === jB || void 0 === jB ? void 0 : jB.playEffect) ? jB : null
-         })(IB.f.getActiveGamepad()),
-         isVibrationOn: () => (0, rB.j)().vibration,
-         isPadInUse: sB.m
+           return "function" === typeof(null === IB || void 0 === IB ? void 0 : IB.playEffect) ? IB : null
+         })(GB.h.getActiveGamepad()),
+         isVibrationOn: () => (0, zB.i)().vibration,
+         isPadInUse: FB.i
```

#### 324. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4060-L4064` → after: `L3964-L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3964-L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3964-L3968) · [Before (L4060-L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4060-L4064)

```diff
-     var In = zB(8187),
-       Nn = zB(3015),
-       un = zB(125),
-       Un = zB(41),
-       an = zB(701);
+     var GJ = ZB(8345),
+       vJ = ZB(3088),
+       kJ = ZB(121),
+       cJ = ZB(36),
+       nJ = ZB(696);
```

#### 325. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4074` → after: `L3978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3978) · [Before (L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4074)

```diff
-         return null === zB || this.deps.readReportedVisitId() === zB ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(zB), this.deps.JJ(jB, this.deps.getInputType()), "reported") : "notReady"
+         return null === ZB || this.deps.readReportedVisitId() === ZB ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(ZB), this.deps.JN(IB, this.deps.getInputType()), "reported") : "notReady"
```

#### 326. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4078-L4082` → after: `L3982-L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3982-L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L3982-L3986) · [Before (L4078-L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4078-L4082)

```diff
-     var sn = zB(1381),
-       Jn = zB(1778),
-       mn = zB(690),
-       yn = zB(1471),
-       kn = zB(1284);
+     var FJ = ZB(1403),
+       NJ = ZB(1805),
+       gJ = ZB(684),
+       qJ = ZB(1507),
+       yJ = ZB(1310);
```

#### 327. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4146-L4147` → after: `L4050-L4051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4050-L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4050-L4051) · [Before (L4146-L4147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4146-L4147)

```diff
-         const QB = null !== (zB = gn[BB][jB]) && void 0 !== zB ? zB : Ln[jB];
-         return "string" === typeof QB ? QB : (0, nB.z)(kn.c.get().getCurrentLanguageCode(), QB.translationKey)
+         const TB = null !== (ZB = dJ[BB][IB]) && void 0 !== ZB ? ZB : WJ[IB];
+         return "string" === typeof TB ? TB : (0, JB.C)(yJ.h.get().getCurrentLanguageCode(), TB.translationKey)
```

#### 328. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4155-L4157` → after: `L4059-L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4059-L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4059-L4061) · [Before (L4155-L4157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4155-L4157)

```diff
-         const nB = (0, sB.F)(),
-           dB = null !== zB && void 0 !== zB ? zB : nB,
-           IB = (0, In.f)(dB, jB);
+         const JB = (0, FB.B)(),
+           oB = null !== ZB && void 0 !== ZB ? ZB : JB,
+           GB = (0, GJ.c)(oB, IB);
```

#### 329. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4163` → after: `L4067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4067) · [Before (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4163)

```diff
-             "--pad-glyph-mask": `url(${IB})`,
+             "--pad-glyph-mask": `url(${GB})`,
```

#### 330. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4168` → after: `L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4072) · [Before (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4168)

```diff
-     var Mn = zB(1952);
+     var sJ = ZB(1960);
```

#### 331. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4175` → after: `L4079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4079) · [Before (L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4175)

```diff
-       } = (0, nB.D)();
+       } = (0, JB.G)();
```

#### 332. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4187` → after: `L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4091) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4187)

```diff
-             }, ` ${jB.description}`] : [{
+             }, ` ${IB.description}`] : [{
```

#### 333. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4197` → after: `L4101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4101) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4197)

```diff
-     var qn = zB(8730);
+     var OJ = ZB(8857);
```

#### 334. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4205` → after: `L4109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4109) · [Before (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4205)

```diff
-           "--pad-drop-stack-hold": `${jB.holdMs}ms`
+           "--pad-drop-stack-hold": `${IB.holdMs}ms`
```

#### 335. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4212-L4215` → after: `L4116-L4119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4116-L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4116-L4119) · [Before (L4212-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4212-L4215)

```diff
-     var Hn = zB(8750),
-       Dn = zB(8759),
-       Fn = zB(8761),
-       Yn = zB(8747);
+     var iJ = ZB(8877),
+       pJ = ZB(8881),
+       aJ = ZB(8883),
+       HJ = ZB(8871);
```

#### 336. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4219` → after: `L4123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4123) · [Before (L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4219)

```diff
-         } = (0, uB.m)(["gameState"]), jB = (0, sB.B)(), [QB, nB] = (0, XB.useState)(!1), [dB, IB] = (0, XB.useState)(!1);
+         } = (0, kB.o)(["gameState"]), IB = (0, FB.A)(), [TB, JB] = (0, rB.useState)(!1), [oB, GB] = (0, rB.useState)(!1);
```

#### 337. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4226` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4130) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4226)

```diff
-           return (mn.E ? Promise.all([zB.e(73), zB.e(90), zB.e(273), zB.e(191), zB.e(229), zB.e(228), zB.e(89)]).then((() => zB(40637))).then((BB => BB.startWasmPadGameplay)) : Promise.all([zB.e(73), zB.e(237), zB.e(236), zB.e(98), zB.e(76), zB.e(75), zB.e(74), zB.e(187), zB.e(23 … [truncated]
+           return (gJ.B ? Promise.all([ZB.e(73), ZB.e(90), ZB.e(273), ZB.e(191), ZB.e(229), ZB.e(228), ZB.e(89)]).then((() => ZB(40591))).then((BB => BB.startWasmPadGameplay)) : Promise.all([ZB.e(73), ZB.e(237), ZB.e(236), ZB.e(98), ZB.e(76), ZB.e(75), ZB.e(74), ZB.e(187), ZB.e(23 … [truncated]
```

#### 338. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4252` → after: `L4156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4156) · [Before (L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4252)

```diff
-         } = (0, nB.D)(), jB = (0, sB.B)(), {
+         } = (0, JB.G)(), IB = (0, FB.A)(), {
```

#### 339. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4255` → after: `L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4159) · [Before (L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4255)

```diff
-         } = (0, uB.m)(["gameState", "isUiHidden"]), {
+         } = (0, kB.o)(["gameState", "isUiHidden"]), {
```

#### 340. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4257-L4258` → after: `L4161-L4162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4161-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4161-L4162) · [Before (L4257-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4257-L4258)

```diff
-         } = (0, rB.p)(), IB = (0, qn.d)(), NB = (0, qn.h)(), [UB, pB] = (0, XB.useState)(Fn.d);
-         return (0, yn.f)(Yn.p, pB), !jB || dB || QB || "inGame" !== zB || !IB && !UB ? null : (0, TB.jsxs)("div", {
+         } = (0, zB.r)(), GB = (0, OJ.l)(), vB = (0, OJ.m)(), [cB, hB] = (0, rB.useState)(aJ.e);
+         return (0, qJ.d)(HJ.o, hB), !IB || oB || TB || "inGame" !== ZB || !GB && !cB ? null : (0, LB.jsxs)("div", {
```

#### 341. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4263` → after: `L4167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4167) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4263)

```diff
-               glyph: (0, aB.h)("actionButton")
+               glyph: (0, nB.g)("actionButton")
```

#### 342. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4273` → after: `L4177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4177) · [Before (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4273)

```diff
-               glyph: (0, aB.h)("pickBlock")
+               glyph: (0, nB.g)("pickBlock")
```

#### 343. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4283` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4187) · [Before (L4283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4283)

```diff
-         } = (0, nB.D)(), jB = (0, sB.B)(), {
+         } = (0, JB.G)(), IB = (0, FB.A)(), {
```

#### 344. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4286-L4287` → after: `L4190-L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4190-L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4190-L4191) · [Before (L4286-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4286-L4287)

```diff
-         } = (0, uB.m)(["gameState", "isUiHidden"]), [dB, IB] = (0, XB.useState)(Hn.b);
-         return (0, yn.f)(Yn.n, IB), jB && !QB && "inGame" === zB && dB ? (0, TB.jsxs)("div", {
+         } = (0, kB.o)(["gameState", "isUiHidden"]), [oB, GB] = (0, rB.useState)(iJ.d);
+         return (0, qJ.d)(HJ.l, GB), IB && !TB && "inGame" === ZB && oB ? (0, LB.jsxs)("div", {
```

#### 345. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4299` → after: `L4203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4203) · [Before (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4299)

```diff
-         } = (0, nB.D)(), jB = (0, sB.B)(), {
+         } = (0, JB.G)(), IB = (0, FB.A)(), {
```

#### 346. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4302` → after: `L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4206) · [Before (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4302)

```diff
-         } = (0, uB.m)(["gameState", "isUiHidden"]), {
+         } = (0, kB.o)(["gameState", "isUiHidden"]), {
```

#### 347. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4304-L4305` → after: `L4208-L4209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4208-L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4208-L4209) · [Before (L4304-L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4304-L4305)

```diff
-         } = (0, rB.p)(), [IB, NB] = (0, XB.useState)(Dn.e);
-         return (0, yn.f)(Yn.m, NB), jB && !QB && "inGame" === zB && IB ? (0, TB.jsxs)("div", {
+         } = (0, zB.r)(), [GB, vB] = (0, rB.useState)(pJ.b);
+         return (0, qJ.d)(HJ.h, vB), IB && !TB && "inGame" === ZB && GB ? (0, LB.jsxs)("div", {
```

#### 348. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4308` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4212) · [Before (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4308)

```diff
-             glyph: (0, aB.h)("attack")
+             glyph: (0, nB.g)("attack")
```

#### 349. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4314-L4318` → after: `L4218-L4222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4218-L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4218-L4222) · [Before (L4314-L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4314-L4318)

```diff
-     var An = zB(8769),
-       Tn = zB(2006),
-       Pn = zB(2516),
-       Wn = zB(8165);
-     const en = BB => BB && !(0, An.b)(Tn.c.get("shopInfo")),
+     var rJ = ZB(8885),
+       mJ = ZB(2029),
+       XJ = ZB(2526),
+       LJ = ZB(8316);
+     const eJ = BB => BB && !(0, rJ.d)(mJ.c.get("shopInfo")),
```

#### 350. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4320-L4322` → after: `L4224-L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4224-L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4224-L4226) · [Before (L4320-L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4320-L4322)

```diff
-         const BB = "inGame" === (0, uB.m)(["gameState"]).gameState;
-         return (0, Pn.h)("shopInfo", (() => {
-           (0, Wn.k)(en(BB))
+         const BB = "inGame" === (0, kB.o)(["gameState"]).gameState;
+         return (0, XJ.c)("shopInfo", (() => {
+           (0, LJ.j)(eJ(BB))
```

#### 351. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4324` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4228) · [Before (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4324)

```diff
-           (0, Wn.k)(en(BB))
+           (0, LJ.j)(eJ(BB))
```

#### 352. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4330` → after: `L4234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4234) · [Before (L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4330)

```diff
-         } = (0, nB.D)(), {
+         } = (0, JB.G)(), {
```

#### 353. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4332-L4334` → after: `L4236-L4238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4236-L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4236-L4238) · [Before (L4332-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4332-L4334)

```diff
-         } = (0, rB.p)();
-         (0, sB.F)();
-         const zB = (0, Aj.l)();
+         } = (0, zB.r)();
+         (0, FB.B)();
+         const ZB = (0, XI.o)();
```

#### 354. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4347` → after: `L4251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4251) · [Before (L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4347)

```diff
-           const zB = (0, vB.l)((() => {
+           const ZB = (0, KB.k)((() => {
```

#### 355. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4352` → after: `L4256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4256) · [Before (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4352)

```diff
-               (0, sB.m)() && (0, CB.f)(jB) && jB.closest(tj) && (0, vB.h)() && (0, vB.o)(jB)
+               (0, FB.i)() && (0, xB.g)(IB) && IB.closest(CI) && (0, KB.h)() && (0, KB.q)(IB)
```

#### 356. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4378` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4282) · [Before (L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4378)

```diff
-                   glyph: (0, aB.h)(BB)
+                   glyph: (0, nB.g)(BB)
```

#### 357. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4380` → after: `L4284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4284) · [Before (L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4380)

```diff
-                   children: BB(`controller:${nB}`)
+                   children: BB(`controller:${JB}`)
```

#### 358. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4465` → after: `L4369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4369) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4465)

```diff
-         const zB = ((BB, jB) => [...Bd[BB], jB ? vn : bn])(BB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
+         const ZB = ((BB, IB) => [...KJ[BB], IB ? xJ : bJ])(BB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
```

#### 359. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4508` → after: `L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4412) · [Before (L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4508)

```diff
-         return 1 === QB.length ? QB : BB
+         return 1 === TB.length ? TB : BB
```

#### 360. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4510` → after: `L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4414) · [Before (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4510)

```diff
-     var sd = zB(8646);
+     var co = ZB(8764);
```

#### 361. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4535` → after: `L4439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4439) · [Before (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4535)

```diff
-       kd = ["zN", "nameTag"],
+       Fo = ["xG", "nameTag"],
```

#### 362. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4551` → after: `L4455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4455) · [Before (L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4551)

```diff
-         (0, fz.h)(BB) ? (0, fz.e)().close(): (OQ.noteChosenStop(BB), BB.blur())
+         (0, iZ.g)(BB) ? (0, iZ.d)().close(): (ST.noteChosenStop(BB), BB.blur())
```

#### 363. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4574` → after: `L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4478) · [Before (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4574)

```diff
-             (0, CB.b)(jB.target);
+             (0, xB.c)(IB.target);
```

#### 364. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4577` → after: `L4481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4481) · [Before (L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4577)

```diff
-             (0, CB.e)(jB.target, " ");
+             (0, xB.f)(IB.target, " ");
```

#### 365. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4580` → after: `L4484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4484) · [Before (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4580)

```diff
-             (0, CB.e)(jB.target, "\n");
+             (0, xB.f)(IB.target, "\n");
```

#### 366. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4583` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4487) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4583)

```diff
-             (0, CB.i)(jB.target, -1);
+             (0, xB.j)(IB.target, -1);
```

#### 367. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4586` → after: `L4490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4490) · [Before (L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4586)

```diff
-             (0, CB.i)(jB.target, 1);
+             (0, xB.j)(IB.target, 1);
```

#### 368. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4616` → after: `L4520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4520) · [Before (L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4616)

```diff
-             (0, fz.h)(jB.target) && (0, fz.e)().selectNextChannel()
+             (0, iZ.g)(IB.target) && (0, iZ.d)().selectNextChannel()
```

#### 369. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4624` → after: `L4528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4528) · [Before (L4624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4624)

```diff
-         this.host.hide(), (0, fz.h)(zB) ? (0, fz.e)().submit() : (OQ.noteChosenStop(zB), null === (BB = (jB = (0, fz.g)(zB)).submit) || void 0 === BB || BB.call(jB), document.activeElement === zB && zB.blur())
+         this.host.hide(), (0, iZ.g)(ZB) ? (0, iZ.d)().submit() : (ST.noteChosenStop(ZB), null === (BB = (IB = (0, iZ.f)(ZB)).submit) || void 0 === BB || BB.call(IB), document.activeElement === ZB && ZB.blur())
```

#### 370. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4638` → after: `L4542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4542) · [Before (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4638)

```diff
-         (0, CB.e)(jB, rd(BB, zB, QB)), this.host.setState({
+         (0, xB.f)(IB, ko(BB, ZB, TB)), this.host.setState({
```

#### 371. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4648-L4649` → after: `L4552-L4553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4552-L4553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4552-L4553) · [Before (L4648-L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4648-L4649)

```diff
-           zB && (jB.setSelectionRange(0, jB.value.length), (0, CB.e)(jB, zB))
-         } else md.claim(performance.now()) && (this.host.hide(), (0, fz.e)().sendLine(this.phraseTexts[BB]))
+           ZB && (IB.setSelectionRange(0, IB.value.length), (0, xB.f)(IB, ZB))
+         } else ho.claim(performance.now()) && (this.host.hide(), (0, iZ.d)().sendLine(this.phraseTexts[BB]))
```

#### 372. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4652` → after: `L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4556) · [Before (L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4652)

```diff
-     var Sd = zB(8665);
+     var Uo = ZB(8785);
```

#### 373. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4663` → after: `L4567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4567) · [Before (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4663)

```diff
-         this.host = BB, this.editor = jB, this.lastDirection = null, this.navRepeat = new JB.c((0, mB.b)(Md)), this.commandRepeats = new Map(Kn.filter((BB => {
+         this.host = BB, this.editor = IB, this.lastDirection = null, this.navRepeat = new NB.d((0, gB.d)(Wo)), this.commandRepeats = new Map(lJ.filter((BB => {
```

#### 374. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4672` → after: `L4576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4576) · [Before (L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4672)

```diff
-           return [jB, (0, mB.b)(Ed)]
+           return [IB, (0, gB.d)(Co)]
```

#### 375. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4686` → after: `L4590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4590) · [Before (L4686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4686)

```diff
-           const zB = (0, aB.h)(dB),
+           const ZB = (0, nB.g)(oB),
```

#### 376. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4690` → after: `L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4594) · [Before (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4690)

```diff
-         if (BB.wasPressed((0, aB.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
+         if (BB.wasPressed((0, nB.g)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
```

#### 377. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4698-L4699` → after: `L4602-L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4602-L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4602-L4603) · [Before (L4698-L4699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4698-L4699)

```diff
-         if (BB.wasPressed((0, aB.h)("keyboardClose"))) return void gd(jB);
-         const QB = (0, aB.h)("keyboardType");
+         if (BB.wasPressed((0, nB.g)("keyboardClose"))) return void qo(IB);
+         const TB = (0, nB.g)("keyboardType");
```

#### 378. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4703` → after: `L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4607) · [Before (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4703)

```diff
-         if (this.lastDirection = nB, !dB || (0, fz.h)(jB)) return;
+         if (this.lastDirection = JB, !oB || (0, iZ.g)(IB)) return;
```

#### 379. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4709` → after: `L4613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4613) · [Before (L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4709)

```diff
-         if ("Up" === BB && 0 === jB.focus.row && "chat" === jB.kind) return (0, fz.e)().stepHistory(), void this.host.setState({
+         if ("Up" === BB && 0 === IB.focus.row && "chat" === IB.kind) return (0, iZ.d)().stepHistory(), void this.host.setState({
```

#### 380. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4741` → after: `L4645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4645) · [Before (L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4741)

```diff
-         for (const jB of JB.J)
+         for (const IB of NB.y)
```

#### 381. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4743` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4647) · [Before (L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4743)

```diff
-         return (0, JB.ib)((0, JB.k)(BB.leftStick, (0, rB.j)().moveDeadzone))
+         return (0, NB.bb)((0, NB.i)(BB.leftStick, (0, zB.i)().moveDeadzone))
```

#### 382. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4759` → after: `L4663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4663) · [Before (L4759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4759)

```diff
-         jB && UB.n.Ly(Sd.b, BB.visible)
+         IB && cB.l.Gq(Uo.c, BB.visible)
```

#### 383. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4769` → after: `L4673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4673) · [Before (L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4769)

```diff
-             isActive: () => this.state.visible || (0, CB.f)(document.activeElement),
+             isActive: () => this.state.visible || (0, xB.g)(document.activeElement),
```

#### 384. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4776` → after: `L4680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4680) · [Before (L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4776)

```diff
-             wakePressActs: BB => fd.includes(BB) || !this.state.visible && BB === (0, aB.h)("keyboardType")
+             wakePressActs: BB => so.includes(BB) || !this.state.visible && BB === (0, nB.g)("keyboardType")
```

#### 385. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4780` → after: `L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4684) · [Before (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4780)

```diff
-             (0, CB.f)(jB) && (jB === this.pendingChatInput || (0, sB.m)() ? this.open(jB) : this.state.visible && jB !== this.state.target && (this.ownedField = null, this.hide()))
+             (0, xB.g)(IB) && (IB === this.pendingChatInput || (0, FB.i)() ? this.open(IB) : this.state.visible && IB !== this.state.target && (this.ownedField = null, this.hide()))
```

#### 386. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4797` → after: `L4701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4701) · [Before (L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4797)

```diff
-         const dB = UB.n.subscribe(Yn.e, (() => {
+         const oB = cB.l.subscribe(HJ.e, (() => {
```

#### 387. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4800` → after: `L4704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4704) · [Before (L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4800)

```diff
-           IB = UB.n.subscribe(Sd.f, (BB => {
+           GB = cB.l.subscribe(Uo.d, (BB => {
```

#### 388. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4804` → after: `L4708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4708) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4804)

```diff
-           BB(), document.removeEventListener("focusin", jB, !0), document.removeEventListener("focusout", zB, !0), window.removeEventListener("keydown", QB, !0), window.removeEventListener("resize", nB), UB.n.unsubscribe(dB), UB.n.unsubscribe(IB), this.clearPendingChat(), this.hi … [truncated]
+           BB(), document.removeEventListener("focusin", IB, !0), document.removeEventListener("focusout", ZB, !0), window.removeEventListener("keydown", TB, !0), window.removeEventListener("resize", JB), cB.l.unsubscribe(oB), cB.l.unsubscribe(GB), this.clearPendingChat(), this.hi … [truncated]
```

#### 389. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4808` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4712) · [Before (L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4808)

```diff
-         const BB = (0, fz.e)();
+         const BB = (0, iZ.d)();
```

#### 390. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4814` → after: `L4718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4718) · [Before (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4814)

```diff
-         (0, CB.f)(BB) ? (document.activeElement !== BB && BB.focus(), document.activeElement === BB && this.open(BB)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", BB)
+         (0, xB.g)(BB) ? (document.activeElement !== BB && BB.focus(), document.activeElement === BB && this.open(BB)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", BB)
```

#### 391. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4819` → after: `L4723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4723) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4819)

```diff
-         this.restoreInputMode(), (0, CB.l)(BB), this.savedInputMode = BB.getAttribute("inputmode"), BB.setAttribute("inputmode", "none");
+         this.restoreInputMode(), (0, xB.m)(BB), this.savedInputMode = BB.getAttribute("inputmode"), BB.setAttribute("inputmode", "none");
```

#### 392. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4824-L4825` → after: `L4728-L4729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4728-L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4728-L4729) · [Before (L4824-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4824-L4825)

```diff
-           kind: (0, fz.h)(BB) ? "chat" : null !== (jB = (0, fz.g)(BB).kind) && void 0 !== jB ? jB : null,
-           accentsFirst: (QB = kn.c.get().getCurrentLanguageCode(), jd.has(QB)),
+           kind: (0, iZ.g)(BB) ? "chat" : null !== (IB = (0, iZ.f)(BB).kind) && void 0 !== IB ? IB : null,
+           accentsFirst: (TB = yJ.h.get().getCurrentLanguageCode(), VJ.has(TB)),
```

#### 393. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4852` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4756) · [Before (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4852)

```diff
-         this.state.visible ? this.padInput.onVisibleFrame(BB) : (0, CB.f)(jB) && this.padInput.onHiddenFrame(BB, jB)
+         this.state.visible ? this.padInput.onVisibleFrame(BB) : (0, xB.g)(IB) && this.padInput.onHiddenFrame(BB, IB)
```

#### 394. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4868` → after: `L4772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4772) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4868)

```diff
-     var Dd = zB(3738);
+     var Yo = ZB(3801);
```

#### 395. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4886` → after: `L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4790) · [Before (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4886)

```diff
-         zN: "controller:keyboardTargetBookTitle"
+         xG: "controller:keyboardTargetBookTitle"
```

#### 396. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4918` → after: `L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4822) · [Before (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4918)

```diff
-         } = (0, nB.D)(), zB = (() => {
+         } = (0, JB.G)(), ZB = (() => {
```

#### 397. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4923-L4924` → after: `L4827-L4828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4827-L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4827-L4828) · [Before (L4923-L4924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4923-L4924)

```diff
-         })(), QB = (0, sB.B)(), dB = (0, XB.useRef)(null);
-         (0, rB.p)(), (0, sB.F)(), (0, XB.useEffect)((() => {
+         })(), TB = (0, FB.A)(), oB = (0, rB.useRef)(null);
+         (0, zB.r)(), (0, FB.B)(), (0, rB.useEffect)((() => {
```

#### 398. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4943` → after: `L4847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4847) · [Before (L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4943)

```diff
-           })(uB, uB.startsWith("/") ? (0, Dd.g)() : [], Jd.length),
+           })(kB, kB.startsWith("/") ? (0, Yo.f)() : [], no.length),
```

#### 399. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4947` → after: `L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4851) · [Before (L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4947)

```diff
-             return null !== (zB = UB[jB]) && void 0 !== zB ? zB : ""
+             return null !== (ZB = cB[IB]) && void 0 !== ZB ? ZB : ""
```

#### 400. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4991` → after: `L4895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4895) · [Before (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4991)

```diff
-           className: AB()(fz.p, "top" === zB.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
+           className: XB()(iZ.o, "top" === ZB.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
```

#### 401. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4996` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4900) · [Before (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L4996)

```diff
-             "--pad-keyboard-height": `${zB.maxHeightPx}px`
+             "--pad-keyboard-height": `${ZB.maxHeightPx}px`
```

#### 402. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5044` → after: `L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4948) · [Before (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5044)

```diff
-                       glyph: (0, aB.h)(IB)
+                       glyph: (0, nB.g)(GB)
```

#### 403. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5071` → after: `L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L4975) · [Before (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5071)

```diff
-         } = (0, CB.p)(jB), UB = "password" === jB.type ? "\u2022".repeat(IB.length) : IB;
+         } = (0, xB.q)(IB), cB = "password" === IB.type ? "\u2022".repeat(GB.length) : GB;
```

#### 404. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5099-L5100` → after: `L5003-L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5003-L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5003-L5004) · [Before (L5099-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5099-L5100)

```diff
-     var Pd = zB(1418),
-       Wd = zB(3536);
+     var ro = ZB(1454),
+       mo = ZB(3605);
```

#### 405. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5103` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5007) · [Before (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5103)

```diff
-         return jB.map(aB.h)
+         return IB.map(nB.g)
```

#### 406. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5117` → after: `L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5021) · [Before (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5117)

```diff
-         for (const zB of BB)(0, RB.s)(zB) && jB.push(zB.getBoundingClientRect());
+         for (const ZB of BB)(0, VB.r)(ZB) && IB.push(ZB.getBoundingClientRect());
```

#### 407. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5128` → after: `L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5032) · [Before (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5128)

```diff
-         if (((0, Wd.l)(null === jB || void 0 === jB ? void 0 : jB.layer.kind, (0, Wd.m)()) || QB) && zB.push(...Cd(document.querySelectorAll(wd.join(",")))), 0 === zB.length) return null;
+         if (((0, mo.f)(null === IB || void 0 === IB ? void 0 : IB.layer.kind, (0, mo.g)()) || TB) && ZB.push(...Ao(document.querySelectorAll(eo.join(",")))), 0 === ZB.length) return null;
```

#### 408. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5132` → after: `L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5036) · [Before (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5132)

```diff
-         } = BB.getBoundingClientRect(), IB = window.innerHeight - 8, NB = (0, Wd.s)(IB, {
+         } = BB.getBoundingClientRect(), GB = window.innerHeight - 8, vB = (0, mo.m)(GB, {
```

#### 409. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5146` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5050) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5146)

```diff
-         } = (0, nB.D)(), {
+         } = (0, JB.G)(), {
```

#### 410. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5148-L5149` → after: `L5052-L5053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5052-L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5052-L5053) · [Before (L5148-L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5148-L5149)

```diff
-         } = (0, rB.p)(), zB = (0, sB.B)(), [QB, dB] = (0, XB.useState)(!1), [IB, UB] = (0, XB.useState)([]), [mB, yB] = (0, XB.useState)(null), kB = (0, XB.useRef)(null), GB = (0, XB.useRef)(null);
-         (0, yn.f)(Sd.b, (BB => {
+         } = (0, zB.r)(), ZB = (0, FB.A)(), [TB, oB] = (0, rB.useState)(!1), [GB, cB] = (0, rB.useState)([]), [gB, qB] = (0, rB.useState)(null), yB = (0, rB.useRef)(null), UB = (0, rB.useRef)(null);
+         (0, qJ.d)(Uo.c, (BB => {
```

#### 411. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5151` → after: `L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5055) · [Before (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5151)

```diff
-         })), (0, yn.f)(Wd.p, (() => {
+         })), (0, qJ.d)(mo.j, (() => {
```

#### 412. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5163` → after: `L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5067) · [Before (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5163)

```diff
-                   zB = (0, Wd.h)();
+                   ZB = (0, mo.e)();
```

#### 413. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5165-L5166` → after: `L5069-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5069-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5069-L5070) · [Before (L5165-L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5165-L5166)

```diff
-                   const BB = (0, aB.h)(zB),
-                     jB = "emoteWheel" === zB && "wheel" === (0, rB.j)().emoteButton || !(0, JB.P)(pB.c.getLastFrame().values, BB) ? {
+                   const BB = (0, nB.g)(ZB),
+                     IB = "emoteWheel" === ZB && "wheel" === (0, zB.i)().emoteButton || !(0, NB.J)(hB.c.getLastFrame().values, BB) ? {
```

#### 414. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5174` → after: `L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5078) · [Before (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5174)

```diff
-                     glyphs: [(0, aB.A)(BB)],
+                     glyphs: [(0, nB.y)(BB)],
```

#### 415. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5182` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5086) · [Before (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5182)

```diff
-                 if (!QB || "focus" !== jB && "cursor" !== jB) return (0, Wd.e)(aB.h);
+                 if (!TB || "focus" !== IB && "cursor" !== IB) return (0, mo.b)(nB.g);
```

#### 416. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5188-L5189` → after: `L5092-L5093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5092-L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5092-L5093) · [Before (L5188-L5189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5188-L5189)

```diff
-                   IB = (0, wB.w)(QB.root),
-                   NB = IB ? !(0, RB.y)(IB) : Boolean(QB.layer.close),
+                   GB = (0, AB.E)(TB.root),
+                   vB = GB ? !(0, VB.x)(GB) : Boolean(TB.layer.close),
```

#### 417. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5213` → after: `L5117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5117) · [Before (L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5213)

```diff
-                 yB && (0, DQ.d)(yB) ? nB.push({
+                 qB && (0, HT.b)(qB) ? JB.push({
```

#### 418. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5216` → after: `L5120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5120) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5216)

```diff
-                 }) : yB && (0, wB.B)(yB) ? nB.push({
+                 }) : qB && (0, AB.L)(qB) ? JB.push({
```

#### 419. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5239-L5240` → after: `L5143-L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5143-L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5143-L5144) · [Before (L5239-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5239-L5240)

```diff
-                 const LB = uB.c.get("openEverythingMenuName");
-                 return "inGame" === uB.c.get("gameState") && "popup" !== QB.layer.kind && null !== LB && ((0, uz.g)(LB) ? nB.push(...ld("leaderboard", "controller:menusClose")) : LB !== Nz.o.LOBBY_LEADERBOARD && nB.push(...ld("leaderboard", "controller:menusLobby"))), nB.push({
+                 const WB = kB.d.get("openEverythingMenuName");
+                 return "inGame" === kB.d.get("gameState") && "popup" !== TB.layer.kind && null !== WB && ((0, kZ.h)(WB) ? JB.push(...Lo("leaderboard", "controller:menusClose")) : WB !== vZ.q.LOBBY_LEADERBOARD && JB.push(...Lo("leaderboard", "controller:menusLobby"))), JB.push({
```

#### 420. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5246` → after: `L5150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5150) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5246)

```diff
-               QB = ((BB, jB) => `${BB.map((BB=>`${BB.glyphs.join("+")}:${BB.labelKey}`)).join("|")}@${jB}`)(jB, zB);
+               TB = ((BB, IB) => `${BB.map((BB=>`${BB.glyphs.join("+")}:${BB.labelKey}`)).join("|")}@${IB}`)(IB, ZB);
```

#### 421. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5280-L5281` → after: `L5184-L5185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5184-L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5184-L5185) · [Before (L5280-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5280-L5281)

```diff
-     var Rd = zB(1786);
-     const Od = [RB.e, "label", "[data-pad-slider]"].join(","),
+     var Eo = ZB(1814);
+     const Do = [VB.b, "label", "[data-pad-slider]"].join(","),
```

#### 422. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5288` → after: `L5192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5192) · [Before (L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5288)

```diff
-           const zB = document.documentElement.classList.contains(sB.q) ? jB[jB.length - 1] : void 0;
+           const ZB = document.documentElement.classList.contains(FB.s) ? IB[IB.length - 1] : void 0;
```

#### 423. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5316` → after: `L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5220) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5316)

```diff
-           })) && FB(zB, BB, jB) ? zB : null
+           })) && MB(ZB, BB, IB) ? ZB : null
```

#### 424. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5325` → after: `L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5229) · [Before (L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5325)

```diff
-           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
+           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
```

#### 425. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5340` → after: `L5244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5244) · [Before (L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5340)

```diff
-               wakePressActs: BB => (0, pB.f)(BB) || BB === (0, aB.h)("menuConfirm") && (0, wB.F)((0, sB.e)())
+               wakePressActs: BB => (0, hB.f)(BB) || BB === (0, nB.g)("menuConfirm") && (0, AB.N)((0, FB.c)())
```

#### 426. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5342` → after: `L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5246) · [Before (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5342)

```diff
-             jB = (0, zQ.l)((BB => {
+             IB = (0, ZT.j)((BB => {
```

#### 427. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5346` → after: `L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5250) · [Before (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5346)

```diff
-             zB = UB.n.subscribe("appManagerUpdated|activeInputDevice", (BB => {
+             ZB = cB.l.subscribe("appManagerUpdated|activeInputDevice", (BB => {
```

#### 428. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5350` → after: `L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5254) · [Before (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5350)

```diff
-             BB(), jB(), UB.n.unsubscribe(zB), this.deactivate()
+             BB(), IB(), cB.l.unsubscribe(ZB), this.deactivate()
```

#### 429. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5357` → after: `L5261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5261) · [Before (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5357)

```diff
-           return this.active && !this.hidden && (0, sB.m)()
+           return this.active && !this.hidden && (0, FB.i)()
```

#### 430. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5366` → after: `L5270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5270) · [Before (L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5366)

```diff
-           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Ly()
+           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Gq()
```

#### 431. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5387` → after: `L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5291) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5387)

```diff
-           }, this.Ly())
+           }, this.Gq())
```

#### 432. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5394-L5396` → after: `L5298-L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5298-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5298-L5300) · [Before (L5394-L5396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5394-L5396)

```diff
-           const zB = BB.wokeDevice ? (0, sB.e)() : null;
-           if (zB && this.jumpTo(zB), !(0, sB.m)()) return void this.hide();
-           const QB = (0, aB.h)("menuToggleCursor");
+           const ZB = BB.wokeDevice ? (0, FB.c)() : null;
+           if (ZB && this.jumpTo(ZB), !(0, FB.i)()) return void this.hide();
+           const TB = (0, nB.g)("menuToggleCursor");
```

#### 433. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5399-L5402` → after: `L5303-L5306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5303-L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5303-L5306) · [Before (L5399-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5399-L5402)

```diff
-           const nB = (0, aB.h)("menuConfirm"),
-             dB = (0, aB.h)("menuSecondary");
-           if (BB.wasPressed((0, aB.h)("menuBack"))) return (0, wB.k)(jB.root) || (0, wB.f)(jB.root) || pQ(), void this.Ly();
-           if (Rz(null, BB, jB)) return BB.wasReleased(nB) && this.press && (this.updateHit(!1), this.updateConfirm(BB, nB)), void this.Ly();
+           const JB = (0, nB.g)("menuConfirm"),
+             oB = (0, nB.g)("menuSecondary");
+           if (BB.wasPressed((0, nB.g)("menuBack"))) return (0, AB.n)(IB.root) || (0, AB.h)(IB.root) || hT(), void this.Gq();
+           if (VZ(null, BB, IB)) return BB.wasReleased(JB) && this.press && (this.updateHit(!1), this.updateConfirm(BB, JB)), void this.Gq();
```

#### 434. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5414` → after: `L5318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5318) · [Before (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5414)

```diff
-             NB = (0, rB.j)().moveDeadzone,
+             vB = (0, zB.i)().moveDeadzone,
```

#### 435. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5416` → after: `L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5320) · [Before (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5416)

```diff
-               const zB = (0, JB.k)(BB, gB(jB));
+               const ZB = (0, NB.i)(BB, dB(IB));
```

#### 436. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5422` → after: `L5326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5326) · [Before (L5422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5422)

```diff
-             if (!uB && !MB(BB.rightStick) && !jB && !zB && !BB.wokeDevice) return void this.Ly();
+             if (!kB && !sB(BB.rightStick) && !IB && !ZB && !BB.wokeDevice) return void this.Gq();
```

#### 437. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5425` → after: `L5329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5329) · [Before (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5425)

```diff
-             }, BB.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Ly()
+             }, BB.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Gq()
```

#### 438. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5434` → after: `L5338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5338) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5434)

```diff
-             cursorSpeedPercent: (0, rB.j)().cursorSpeed,
+             cursorSpeedPercent: (0, zB.i)().cursorSpeed,
```

#### 439. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5443` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5347) · [Before (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5443)

```diff
-           (mB || yB || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(mB), this.updateConfirm(BB, nB), this.updateSecondary(BB, dB), this.updateScroll(BB, jB), this.Ly()
+           (gB || qB || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(gB), this.updateConfirm(BB, JB), this.updateSecondary(BB, oB), this.updateScroll(BB, IB), this.Gq()
```

#### 440. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5469` → after: `L5373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5373) · [Before (L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5469)

```diff
-           const QB = null !== zB && void 0 !== zB ? zB : OQ.pickInitial(jB.root, {
+           const TB = null !== ZB && void 0 !== ZB ? ZB : ST.pickInitial(IB.root, {
```

#### 441. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5474` → after: `L5378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5378) · [Before (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5474)

```diff
-           QB && (this.pendingPageStart = null, this.jumpTo((0, wB.x)(QB)))
+           TB && (this.pendingPageStart = null, this.jumpTo((0, AB.H)(TB)))
```

#### 442. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5484` → after: `L5388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5388) · [Before (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5484)

```diff
-             QB = zB && BB.order <= this.layerOrder ? zB : OQ.getLayerStartPoint(BB.root);
+             TB = ZB && BB.order <= this.layerOrder ? ZB : ST.getLayerStartPoint(BB.root);
```

#### 443. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5491` → after: `L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5395) · [Before (L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5491)

```diff
-             element: null !== (jB = this.interactive) && void 0 !== jB ? jB : this.findDraggedSliderNearby(),
+             element: null !== (IB = this.interactive) && void 0 !== IB ? IB : this.findDraggedSliderNearby(),
```

#### 444. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5506` → after: `L5410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5410) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5506)

```diff
-           const jB = JB.J.find((jB => BB.wasPressed(jB)));
+           const IB = NB.y.find((IB => BB.wasPressed(IB)));
```

#### 445. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5521` → after: `L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5425) · [Before (L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5521)

```diff
-           const zB = (0, rB.j)().cursorMagnetism && !(0, Rd.e)(BB) && !BB.closest("[data-pad-slider]"),
+           const ZB = (0, zB.i)().cursorMagnetism && !(0, Eo.d)(BB) && !BB.closest("[data-pad-slider]"),
```

#### 446. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5535` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5439) · [Before (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5535)

```diff
-             QB = zB && !(0, kB.m)(zB) && (BB => {
+             TB = ZB && !(0, yB.s)(ZB) && (BB => {
```

#### 447. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5539-L5540` → after: `L5443-L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5443-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5443-L5444) · [Before (L5539-L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5539-L5540)

```diff
-             })(zB) ? zB : null;
-           if (QB !== this.hit) return (0, wB.q)(this.hit, QB, jB), this.hit = QB, void this.setInteractive(QB ? (BB => {
+             })(ZB) ? ZB : null;
+           if (TB !== this.hit) return (0, AB.u)(this.hit, TB, IB), this.hit = TB, void this.setInteractive(TB ? (BB => {
```

#### 448. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5544-L5545` → after: `L5448-L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5448-L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5448-L5449) · [Before (L5544-L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5544-L5545)

```diff
-               const BB = null !== (zB = null === (QB = jB.parentElement) || void 0 === QB ? void 0 : QB.closest("[data-pad-focusable]")) && void 0 !== zB ? zB : jB;
-               return (0, RB.y)(BB) ? {
+               const BB = null !== (ZB = null === (TB = IB.parentElement) || void 0 === TB ? void 0 : TB.closest("[data-pad-focusable]")) && void 0 !== ZB ? ZB : IB;
+               return (0, VB.x)(BB) ? {
```

#### 449. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5562` → after: `L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5466) · [Before (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5562)

```diff
-           BB && QB && (0, wB.q)(QB, QB, jB)
+           BB && TB && (0, AB.u)(TB, TB, IB)
```

#### 450. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5572` → after: `L5476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5476) · [Before (L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5572)

```diff
-           this.hit && (0, wB.q)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
+           this.hit && (0, AB.u)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
```

#### 451. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5579` → after: `L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5483) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5579)

```diff
-           if (!BB || (0, wB.B)(BB)) return {
+           if (!BB || (0, AB.L)(BB)) return {
```

#### 452. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5582` → after: `L5486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5486) · [Before (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5582)

```diff
-           const jB = (0, DQ.d)(BB),
+           const IB = (0, HT.b)(BB),
```

#### 453. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5588` → after: `L5492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5492) · [Before (L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5588)

```diff
-           } : ((0, wB.s)(BB, this.getPoint()), {
+           } : ((0, AB.x)(BB, this.getPoint()), {
```

#### 454. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5617-L5618` → after: `L5521-L5522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5521-L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5521-L5522) · [Before (L5617-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5617-L5618)

```diff
-             const BB = null !== dB && void 0 !== dB ? dB : zB.target.isConnected ? zB.target : null;
-             BB && (0, wB.v)(BB, nB);
+             const BB = null !== oB && void 0 !== oB ? oB : ZB.target.isConnected ? ZB.target : null;
+             BB && (0, AB.B)(BB, JB);
```

#### 455. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5624` → after: `L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5528) · [Before (L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5624)

```diff
-             jB && (OQ.noteCursorActivation(jB), (0, kB.d)(jB, new MouseEvent("click", (0, wB.M)(nB, 0, 0))), (0, wB.g)(jB), (0, wB.J)(jB) && (0, wB.H)(jB))
+             IB && (ST.noteCursorActivation(IB), (0, yB.h)(IB, new MouseEvent("click", (0, AB.V)(JB, 0, 0))), (0, AB.j)(IB), (0, AB.T)(IB) && (0, AB.R)(IB))
```

#### 456. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5630` → after: `L5534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5534) · [Before (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5630)

```diff
-           this.repeatStop = QB, this.repeatKey = null !== (zB = null === QB || void 0 === QB ? void 0 : QB.getAttribute("data-pad-repeat")) && void 0 !== zB ? zB : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
+           this.repeatStop = TB, this.repeatKey = null !== (ZB = null === TB || void 0 === TB ? void 0 : TB.getAttribute("data-pad-repeat")) && void 0 !== ZB ? ZB : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
```

#### 457. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5636` → after: `L5540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5540) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5636)

```diff
-           BB.isConnected && !(0, RB.y)(BB) && BB.getAttribute("data-pad-repeat") === this.repeatKey && jB && BB.contains(jB) ? BB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, OQ.noteCursorActivation(BB), (0, kB.d … [truncated]
+           BB.isConnected && !(0, VB.x)(BB) && BB.getAttribute("data-pad-repeat") === this.repeatKey && IB && BB.contains(IB) ? BB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, ST.noteCursorActivation(BB), (0, yB.h … [truncated]
```

#### 458. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5642` → after: `L5546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5546) · [Before (L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5642)

```diff
-           "slider" === BB.kind && BB.adjuster.endDrag(), "pointer" === BB.kind && BB.target.isConnected && (0, wB.v)(BB.target, this.getPoint())
+           "slider" === BB.kind && BB.adjuster.endDrag(), "pointer" === BB.kind && BB.target.isConnected && (0, AB.B)(BB.target, this.getPoint())
```

#### 459. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5648` → after: `L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5552) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5648)

```diff
-           BB.wasPressed(jB) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !BB.isHeld(jB) && (this.secondaryArmed = !1, BB.wasReleased(jB) && this.hit && (0, wB.o)(this.hit, this.getPoint(), 2))
+           BB.wasPressed(IB) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !BB.isHeld(IB) && (this.secondaryArmed = !1, BB.wasReleased(IB) && this.hit && (0, AB.q)(this.hit, this.getPoint(), 2))
```

#### 460. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5696` → after: `L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5600) · [Before (L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5696)

```diff
-           jB = (0, sB.B)();
+           IB = (0, FB.A)();
```

#### 461. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5716` → after: `L5620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5620) · [Before (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5716)

```diff
-                 return null !== jB && void 0 !== jB && jB.isConnected ? jB : null
+                 return null !== IB && void 0 !== IB && IB.isConnected ? IB : null
```

#### 462. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5719` → after: `L5623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5623) · [Before (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5719)

```diff
-               const NB = null !== (jB = null === nB || void 0 === nB ? void 0 : nB.closest("[data-pad-reticle-box]")) && void 0 !== jB ? jB : nB;
+               const vB = null !== (IB = null === JB || void 0 === JB ? void 0 : JB.closest("[data-pad-reticle-box]")) && void 0 !== IB ? IB : JB;
```

#### 463. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5754` → after: `L5658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5658) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5754)

```diff
-         BB.style.transform = `translate3d(${jB.x}px, ${jB.y}px, 0)`, BB.classList.toggle("Visible", jB.visible), BB.classList.toggle("Pressed", jB.pressed)
+         BB.style.transform = `translate3d(${IB.x}px, ${IB.y}px, 0)`, BB.classList.toggle("Visible", IB.visible), BB.classList.toggle("Pressed", IB.pressed)
```

#### 464. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5796` → after: `L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5700) · [Before (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5796)

```diff
-             return (0, zQ.p)({
+             return (0, ZT.n)({
```

#### 465. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5807` → after: `L5711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5711) · [Before (L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5807)

```diff
-                     return null !== (zB = [...BB.querySelectorAll("button")].find((BB => !BB.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== zB ? zB : null
+                     return null !== (ZB = [...BB.querySelectorAll("button")].find((BB => !BB.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== ZB ? ZB : null
```

#### 466. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5825-L5826` → after: `L5729-L5730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5729-L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5729-L5730) · [Before (L5825-L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5825-L5826)

```diff
-           zB = IB.f.onFrame((() => {
-             const BB = (0, sB.m)() ? aQ() : null,
+           ZB = GB.h.onFrame((() => {
+             const BB = (0, FB.i)() ? nT() : null,
```

#### 467. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5839` → after: `L5743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5743) · [Before (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5839)

```diff
-           const BB = (0, kB.i)(document.body),
+           const BB = (0, yB.n)(document.body),
```

#### 468. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5849` → after: `L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5753) · [Before (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5849)

```diff
-         } = (0, rB.p)(), jB = (0, Pd.u)() && BB;
+         } = (0, zB.r)(), IB = (0, ro.x)() && BB;
```

#### 469. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5858-L5861` → after: `L5762-L5765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5762-L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5762-L5765) · [Before (L5858-L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5858-L5861)

```diff
-     var JI = zB(8776),
-       mI = zB(8798),
-       yI = zB(8792);
-     zB(8805);
+     var hG = ZB(8895),
+       zG = ZB(8920),
+       FG = ZB(8913);
+     ZB(8927);
```

#### 470. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5870` → after: `L5774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5774) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5870)

```diff
-           NB((0, yI.x)(BB, jB, IB.current))
+           vB((0, FG.F)(BB, IB, GB.current))
```

#### 471. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5872-L5874` → after: `L5776-L5778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5776-L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5776-L5778) · [Before (L5872-L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5872-L5874)

```diff
-         (0, XB.useLayoutEffect)((() => (jB(zB), (0, Wd.v)(BB, zB), UB.n.Ly(Wd.p), () => {
-           jB(!1), (0, Wd.v)(BB, !1), UB.n.Ly(Wd.p)
-         })), [zB, BB, jB]), (0, yn.f)("appManagerUpdated|activeInputDevice", (BB => {
+         (0, rB.useLayoutEffect)((() => (IB(ZB), (0, mo.s)(BB, ZB), cB.l.Gq(mo.j), () => {
+           IB(!1), (0, mo.s)(BB, !1), cB.l.Gq(mo.j)
+         })), [ZB, BB, IB]), (0, qJ.d)("appManagerUpdated|activeInputDevice", (BB => {
```

#### 472. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5876` → after: `L5780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5780) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5876)

```diff
-         })), (0, yn.f)("appManagerUpdated|gameState", (BB => {
+         })), (0, qJ.d)("appManagerUpdated|gameState", (BB => {
```

#### 473. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5880` → after: `L5784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5784) · [Before (L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5880)

```diff
-           (0, uz.m)() && uB()
+           (0, kZ.n)() && kB()
```

#### 474. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5882` → after: `L5786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5786) · [Before (L5882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5882)

```diff
-         return (0, yn.f)("appManagerUpdated|openEverythingMenuName", rB), (0, yn.f)("appManagerUpdated|openInGameMenuName", rB), {
+         return (0, qJ.d)("appManagerUpdated|openEverythingMenuName", zB), (0, qJ.d)("appManagerUpdated|openInGameMenuName", zB), {
```

#### 475. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5908-L5909` → after: `L5812-L5813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5812-L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5812-L5813) · [Before (L5908-L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5908-L5909)

```diff
-               width: 2 * yI.n + "rem",
-               height: 2 * yI.n + "rem"
+               width: 2 * FG.r + "rem",
+               height: 2 * FG.r + "rem"
```

#### 476. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5913` → after: `L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5817) · [Before (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5913)

```diff
-               viewBox: `0 0 ${yI.i} ${yI.i}`,
+               viewBox: `0 0 ${FG.o} ${FG.o}`,
```

#### 477. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5915` → after: `L5819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5819) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5915)

```diff
-                 d: (0, yI.o)(BB, zB, yI.c, yI.d, yI.f),
+                 d: (0, FG.u)(BB, ZB, FG.f, FG.j, FG.m),
```

#### 478. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5922-L5924` → after: `L5826-L5828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5826-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5826-L5828) · [Before (L5922-L5924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5922-L5924)

```diff
-                 cx: yI.c,
-                 cy: yI.c,
-                 r: yI.f
+                 cx: FG.f,
+                 cy: FG.f,
+                 r: FG.m
```

#### 479. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5927-L5929` → after: `L5831-L5833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5831-L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5831-L5833) · [Before (L5927-L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5927-L5929)

```diff
-                 cx: yI.c,
-                 cy: yI.c,
-                 r: yI.d
+                 cx: FG.f,
+                 cy: FG.f,
+                 r: FG.j
```

#### 480. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5932` → after: `L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5836) · [Before (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5932)

```diff
-                 d: (0, yI.o)(QB, zB, yI.c, yI.d, yI.f)
+                 d: (0, FG.u)(TB, ZB, FG.f, FG.j, FG.m)
```

#### 481. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5935` → after: `L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5839) · [Before (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5935)

```diff
-               const jB = (0, yI.t)(BB, zB);
+               const IB = (0, FG.z)(BB, ZB);
```

#### 482. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5941-L5942` → after: `L5845-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5845-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5845-L5846) · [Before (L5941-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5941-L5942)

```diff
-                   left: `calc(50% + ${yI.b*Math.cos(jB)}rem)`,
-                   top: `calc(50% + ${yI.b*Math.sin(jB)}rem)`
+                   left: `calc(50% + ${FG.b*Math.cos(IB)}rem)`,
+                   top: `calc(50% + ${FG.b*Math.sin(IB)}rem)`
```

#### 483. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5958-L5961` → after: `L5862-L5865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5862-L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5862-L5865) · [Before (L5958-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5958-L5961)

```diff
-         } = (0, nB.D)(), jB = kI("chat", Hz.k), zB = (0, XB.useMemo)((() => Jd.map((jB => BB(jB)))), [BB]);
-         return (0, yn.f)(Hz.i, (() => {
-           jB.open || (0, JI.h)() || (0, mI.j)() || "inGame" !== uB.c.get("gameState") || (0, uz.m)() || !(0, fz.e)() || jB.show()
-         })), (0, yn.f)(Hz.e, (BB => {
+         } = (0, JB.G)(), IB = NG("chat", aZ.n), ZB = (0, rB.useMemo)((() => no.map((IB => BB(IB)))), [BB]);
+         return (0, qJ.d)(aZ.l, (() => {
+           IB.open || (0, hG.e)() || (0, zG.p)() || "inGame" !== kB.d.get("gameState") || (0, kZ.n)() || !(0, iZ.d)() || IB.show()
+         })), (0, qJ.d)(aZ.d, (BB => {
```

#### 484. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5963` → after: `L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5867) · [Before (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5963)

```diff
-         })), (0, yn.f)(Hz.h, (() => {
+         })), (0, qJ.d)(aZ.j, (() => {
```

#### 485. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5967-L5968` → after: `L5871-L5872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5871-L5872) · [Before (L5967-L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5967-L5968)

```diff
-           null !== QB ? md.claim(performance.now()) && (jB.close(), null === (BB = (0, fz.e)()) || void 0 === BB || BB.sendLine(zB[QB])) : jB.close()
-         })), (0, yn.f)(Hz.f, jB.close), jB.open ? (0, TB.jsx)(GI, {
+           null !== TB ? ho.claim(performance.now()) && (IB.close(), null === (BB = (0, iZ.d)()) || void 0 === BB || BB.sendLine(ZB[TB])) : IB.close()
+         })), (0, qJ.d)(aZ.g, IB.close), IB.open ? (0, LB.jsx)(gG, {
```

#### 486. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5980-L5983` → after: `L5884-L5887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5884-L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5884-L5887) · [Before (L5980-L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5980-L5983)

```diff
-         } = (0, nB.D)(), jB = kI("actionButton", mI.k), [zB, QB] = (0, XB.useState)([]);
-         if ((0, yn.f)(mI.f, (BB => {
-             jB.open || (0, JI.h)() || (0, Hz.d)() || "inGame" !== uB.c.get("gameState") || (0, uz.m)() || (QB(BB), jB.show())
-           })), (0, yn.f)(mI.b, (BB => {
+         } = (0, JB.G)(), IB = NG("actionButton", zG.t), [ZB, TB] = (0, rB.useState)([]);
+         if ((0, qJ.d)(zG.i, (BB => {
+             IB.open || (0, hG.e)() || (0, aZ.c)() || "inGame" !== kB.d.get("gameState") || (0, kZ.n)() || (TB(BB), IB.show())
+           })), (0, qJ.d)(zG.c, (BB => {
```

#### 487. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5985` → after: `L5889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5889) · [Before (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5985)

```diff
-           })), (0, yn.f)(mI.e, (() => {
+           })), (0, qJ.d)(zG.g, (() => {
```

#### 488. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5988-L5989` → after: `L5892-L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5892-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5892-L5893) · [Before (L5988-L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L5988-L5989)

```diff
-             jB.close(), null !== BB && UB.n.Ly(mI.g, zB[BB])
-           })), (0, yn.f)(mI.c, jB.close), !jB.open) return null;
+             IB.close(), null !== BB && cB.l.Gq(zG.l, ZB[BB])
+           })), (0, qJ.d)(zG.e, IB.close), !IB.open) return null;
```

#### 489. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6007` → after: `L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5911) · [Before (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6007)

```diff
-     var SI = zB(106);
+     var WG = ZB(105);
```

#### 490. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6010-L6011` → after: `L5914-L5915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5914-L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5914-L5915) · [Before (L6010-L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6010-L6011)

```diff
-         const zB = (0, kB.i)(document.getElementById("root")),
-           QB = (0, sB.g)(),
+         const ZB = (0, yB.n)(document.getElementById("root")),
+           TB = (0, FB.d)(),
```

#### 491. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6013` → after: `L5917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5917) · [Before (L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6013)

```diff
-             const BB = [UB.n.subscribe(jn.c, (() => {
+             const BB = [cB.l.subscribe(IJ.d, (() => {
```

#### 492. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6015` → after: `L5919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5919) · [Before (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6015)

```diff
-               })), UB.n.subscribe("damagedByOtherPlayer", (() => {
+               })), cB.l.subscribe("damagedByOtherPlayer", (() => {
```

#### 493. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6017` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5921) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6017)

```diff
-               })), UB.n.subscribe("yourAttackHit", (BB => {
+               })), cB.l.subscribe("yourAttackHit", (BB => {
```

#### 494. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6023` → after: `L5927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5927) · [Before (L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6023)

```diff
-               jB = IB.f.onActivePadChanged((BB => {
+               IB = GB.h.onActivePadChanged((BB => {
```

#### 495. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6027` → after: `L5931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5931) · [Before (L6027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6027)

```diff
-               for (const jB of BB) UB.n.unsubscribe(jB);
+               for (const IB of BB) cB.l.unsubscribe(IB);
```

#### 496. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6033` → after: `L5937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5937) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6033)

```diff
-               getVisitId: an.h,
+               getVisitId: nJ.i,
```

#### 497. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6036` → after: `L5940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5940) · [Before (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6036)

```diff
-                 const BB = Un.k.getItem(rn);
+                 const BB = cJ.n.getItem(zJ);
```

#### 498. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6040` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5944) · [Before (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6040)

```diff
-                 Un.k.setItem(rn, BB)
+                 cJ.n.setItem(zJ, BB)
```

#### 499. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6042` → after: `L5946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5946) · [Before (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6042)

```diff
-               isPadActive: sB.m,
+               isPadActive: FB.i,
```

#### 500. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6045` → after: `L5949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5949) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6045)

```diff
-                 return null !== (BB = null === (jB = IB.f.getActivePad()) || void 0 === jB ? void 0 : jB.family) && void 0 !== BB ? BB : null
+                 return null !== (BB = null === (IB = GB.h.getActivePad()) || void 0 === IB ? void 0 : IB.family) && void 0 !== BB ? BB : null
```

#### 501. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6048-L6049` → after: `L5952-L5953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5952-L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5952-L5953) · [Before (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6048-L6049)

```diff
-               getInputType: un.c,
-               JJ: Nn.logControllerUsedToGtag
+               getInputType: kJ.e,
+               JN: vJ.logControllerUsedToGtag
```

#### 502. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6058` → after: `L5962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5962) · [Before (L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6058)

```diff
-               nB = UB.n.subscribe("appManagerUpdated|activeInputDevice", (() => {
+               JB = cB.l.subscribe("appManagerUpdated|activeInputDevice", (() => {
```

#### 503. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6061` → after: `L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5965) · [Before (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6061)

```diff
-               dB = (0, an.n)((() => {
+               oB = (0, nJ.l)((() => {
```

#### 504. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6065` → after: `L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5969) · [Before (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6065)

```diff
-               UB.n.unsubscribe(nB), dB(), null !== zB && clearTimeout(zB)
+               cB.l.unsubscribe(JB), oB(), null !== ZB && clearTimeout(ZB)
```

#### 505. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6068-L6069` → after: `L5972-L5973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5972-L5973) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6068-L6069)

```diff
-           NB = IB.f.onFrame(((BB, jB, zB) => {
-             const QB = (0, sB.o)(BB, zB);
+           vB = GB.h.onFrame(((BB, IB, ZB) => {
+             const TB = (0, FB.p)(BB, ZB);
```

#### 506. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6072-L6073` → after: `L5976-L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5976-L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5976-L5977) · [Before (L6072-L6073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6072-L6073)

```diff
-         let aB = null !== (BB = null === (jB = IB.f.getActivePad()) || void 0 === jB ? void 0 : jB.family) && void 0 !== BB ? BB : null;
-         const JB = IB.f.onActivePadChanged((BB => {
+         let nB = null !== (BB = null === (IB = GB.h.getActivePad()) || void 0 === IB ? void 0 : IB.family) && void 0 !== BB ? BB : null;
+         const NB = GB.h.onActivePadChanged((BB => {
```

#### 507. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6075-L6076` → after: `L5979-L5980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5979-L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5979-L5980) · [Before (L6075-L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6075-L6076)

```diff
-             (pB.c.reset(), (0, sB.u)(), UB.n.Ly(IB.d, BB), (null !== (jB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== jB ? jB : null) !== aB) && (aB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== zB ? zB : null, UB.n.Ly(rB. … [truncated]
-             !BB && (0, sB.m)() && (0, sB.x)(uB.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
+             (hB.c.reset(), (0, FB.w)(), cB.l.Gq(GB.e, BB), (null !== (IB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== IB ? IB : null) !== nB) && (nB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== ZB ? ZB : null, cB.l.Gq(zB. … [truncated]
+             !BB && (0, FB.i)() && (0, FB.y)(kB.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
```

#### 508. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6084` → after: `L5988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5988) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6084)

```diff
-         document.addEventListener("visibilitychange", mB), window.addEventListener("blur", yB), IB.f.start(), (0, In.k)();
+         document.addEventListener("visibilitychange", gB), window.addEventListener("blur", qB), GB.h.start(), (0, GJ.f)();
```

#### 509. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6087` → after: `L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5991) · [Before (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6087)

```diff
-           zB(), QB(), nB(), dB(), NB(), JB(), document.removeEventListener("visibilitychange", mB), window.removeEventListener("blur", yB), IB.f.stop(), null === GB || void 0 === GB || GB()
+           ZB(), TB(), JB(), oB(), vB(), NB(), document.removeEventListener("visibilitychange", gB), window.removeEventListener("blur", qB), GB.h.stop(), null === UB || void 0 === UB || UB()
```

#### 510. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6094-L6097` → after: `L5998-L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5998-L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L5998-L6001) · [Before (L6094-L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6094-L6097)

```diff
-     var iI = zB(8160),
-       qI = zB(8814);
-     const fI = new Set(In.g),
-       oI = BB => `${qI.n}${(0,rB.m)()}/${BB}`,
+     var QG = ZB(8309),
+       sG = ZB(8935);
+     const wG = new Set(GJ.e),
+       OG = BB => `${sG.p}${(0,zB.l)()}/${BB}`,
```

#### 511. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6100-L6101` → after: `L6004-L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6004-L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6004-L6005) · [Before (L6100-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6100-L6101)

```diff
-         const [jB, zB] = BB.slice(qI.n.length).split("/");
-         return (0, iI.h)(jB) && fI.has(zB) ? (0, In.f)(jB, zB) : null
+         const [IB, ZB] = BB.slice(sG.p.length).split("/");
+         return (0, QG.g)(IB) && wG.has(ZB) ? (0, GJ.c)(IB, ZB) : null
```

#### 512. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6103` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6007) · [Before (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6103)

```diff
-     var DI = zB(8821);
+     var iG = ZB(8937);
```

#### 513. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6107` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6011) · [Before (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6107)

```diff
-         } = (0, nB.D)(), jB = (0, sB.B)(), {
+         } = (0, JB.G)(), IB = (0, FB.A)(), {
```

#### 514. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6110` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6014) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6110)

```diff
-         } = (0, uB.m)(["gameState", "isUiHidden"]), {
+         } = (0, kB.o)(["gameState", "isUiHidden"]), {
```

#### 515. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6113-L6114` → after: `L6017-L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6017-L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6017-L6018) · [Before (L6113-L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6113-L6114)

```diff
-         } = (0, rB.p)(), [NB, UB] = (0, XB.useState)(DI.b);
-         return (0, yn.f)(Yn.t, UB), jB && !QB && "inGame" === zB && NB ? (0, TB.jsxs)("div", {
+         } = (0, zB.r)(), [vB, cB] = (0, rB.useState)(iG.c);
+         return (0, qJ.d)(HJ.s, cB), IB && !TB && "inGame" === ZB && vB ? (0, LB.jsxs)("div", {
```

#### 516. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6117` → after: `L6021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6021) · [Before (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6117)

```diff
-             glyph: (0, aB.h)("toggle" === IB ? "sneak" : "sneakToggle")
+             glyph: (0, nB.g)("toggle" === GB ? "sneak" : "sneakToggle")
```

#### 517. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6167` → after: `L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6071) · [Before (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6167)

```diff
-               dB.style.transform = `translate3d(${Math.round(IB)}px, ${Math.round(NB)}px, 0)`, dB.style.visibility = "visible"
+               oB.style.transform = `translate3d(${Math.round(GB)}px, ${Math.round(vB)}px, 0)`, oB.style.visibility = "visible"
```

#### 518. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6184-L6188` → after: `L6088-L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6088-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6088-L6092) · [Before (L6184-L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6184-L6188)

```diff
-     var hI = zB(1108),
-       XI = zB(8830),
-       ZI = zB(1478),
-       AI = zB(8839),
-       TI = zB(8841);
+     var MG = ZB(1102),
+       jG = ZB(8940),
+       PG = ZB(1516),
+       RG = ZB(8946),
+       rG = ZB(8951);
```

#### 519. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6210` → after: `L6114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6114) · [Before (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6210)

```diff
-         } = (0, nB.D)(), jB = (0, sB.B)(), zB = (0, XI.b)(), QB = (0, Pn.i)("_tasks"), dB = (0, Pn.i)("_availableLeaderboards");
+         } = (0, JB.G)(), IB = (0, FB.A)(), ZB = (0, jG.e)(), TB = (0, XJ.d)("_tasks"), oB = (0, XJ.d)("_availableLeaderboards");
```

#### 520. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6231` → after: `L6135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6135) · [Before (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6231)

```diff
-             } = PI[jB], nB = "leave" === jB ? ZI.G : ZI.f;
+             } = mG[IB], JB = "leave" === IB ? PG.M : PG.g;
```

#### 521. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6238-L6239` → after: `L6142-L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6142-L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6142-L6143) · [Before (L6238-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6238-L6239)

```diff
-                       return UB.n.Ly(TI.k), void uB.c.set({
-                         openEverythingMenuName: Nz.o.SHOP
+                       return cB.l.Gq(rG.k), void kB.d.set({
+                         openEverythingMenuName: vZ.q.SHOP
```

#### 522. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6242` → after: `L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6146) · [Before (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6242)

```diff
-                       return void UB.n.Ly("toggleMenu", "retentionFeatures");
+                       return void cB.l.Gq("toggleMenu", "retentionFeatures");
```

#### 523. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6244` → after: `L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6148) · [Before (L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6244)

```diff
-                       return void UB.n.Ly("toggleMenu", "inviteLink");
+                       return void cB.l.Gq("toggleMenu", "inviteLink");
```

#### 524. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6246` → after: `L6150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6150) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6246)

```diff
-                       (0, AI.c)()
+                       (0, RG.b)()
```

#### 525. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6252` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6156) · [Before (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6252)

```diff
-                 children: [(0, TB.jsx)(hI.c, {
+                 children: [(0, LB.jsx)(MG.d, {
```

#### 526. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6262-L6263` → after: `L6166-L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6166-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6166-L6167) · [Before (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6262-L6263)

```diff
-     var eI = zB(2033);
-     const lI = JB.F,
+     var LG = ZB(2066);
+     const eG = NB.w,
```

#### 527. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6268` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6172) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6268)

```diff
-         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(JB._).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
+         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(NB.S).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
```

#### 528. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6293` → after: `L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6197) · [Before (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6293)

```diff
-           continues: (0, sB.i)(BB)
+           continues: (0, FB.e)(BB)
```

#### 529. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6306-L6307` → after: `L6210-L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6210-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6210-L6211) · [Before (L6306-L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6306-L6307)

```diff
-         const nB = (0, JB.u)(BB.values, this.previousHeld),
-           dB = null === zB ? -1 : (0, JB.o)(zB),
+         const JB = (0, NB.r)(BB.values, this.previousHeld),
+           oB = null === ZB ? -1 : (0, NB.l)(ZB),
```

#### 530. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6328` → after: `L6232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6232) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6328)

```diff
-     const CI = new Set([...eI.l, ...eI.E]),
+     const AG = new Set([...LG.m, ...LG.C]),
```

#### 531. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6332` → after: `L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6236) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6332)

```diff
-       })(BB, eI.w, CI),
+       })(BB, LG.u, AG),
```

#### 532. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6340-L6341` → after: `L6244-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6244-L6245) · [Before (L6340-L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6340-L6341)

```diff
-             } = QB.onKeyDown(BB, !(0, sB.H)(BB) || (0, Bn.j)() || (0, uz.m)(), cI(BB.code));
-             zB && (BB.stopImmediatePropagation(), xI(BB) && BB.preventDefault()), nB && ((0, sB.x)("keyboardMouse"), jB())
+             } = TB.onKeyDown(BB, !(0, FB.D)(BB) || (0, BJ.i)() || (0, kZ.n)(), tG(BB.code));
+             ZB && (BB.stopImmediatePropagation(), fG(BB) && BB.preventDefault()), JB && ((0, FB.y)("keyboardMouse"), IB())
```

#### 533. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6350` → after: `L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6254) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6350)

```diff
-         const uB = IB.f.onFrame((BB => {
+         const kB = GB.h.onFrame((BB => {
```

#### 534. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6353` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6257) · [Before (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6353)

```diff
-               IB = dB ? (0, aB.h)("menuBack") : null,
+               GB = oB ? (0, nB.g)("menuBack") : null,
```

#### 535. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6359` → after: `L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6263) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6359)

```diff
-               } = QB.onPadFrame(BB, NB, IB, (0, sB.n)(BB));
+               } = TB.onPadFrame(BB, vB, GB, (0, FB.l)(BB));
```

#### 536. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6361` → after: `L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6265) · [Before (L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6361)

```diff
-               const BB = (0, rB.j)().swapSticks ? "right" : "left";
+               const BB = (0, zB.i)().swapSticks ? "right" : "left";
```

#### 537. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6366` → after: `L6270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6270) · [Before (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6366)

```diff
-           UB = (0, Bn.n)(`pressToContinue:${BB}`, (() => QB.blocksGameplay()));
+           cB = (0, BJ.k)(`pressToContinue:${BB}`, (() => TB.blocksGameplay()));
```

#### 538. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6376-L6379` → after: `L6280-L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6280-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6280-L6283) · [Before (L6376-L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6376-L6379)

```diff
-     var vI = zB(5078),
-       RI = zB(3545),
-       OI = zB(3252),
-       BN = zB(8162);
+     var xG = ZB(5143),
+       EG = ZB(3613),
+       DG = ZB(3294),
+       KG = ZB(8312);
```

#### 539. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6399` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6303) · [Before (L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6399)

```diff
-         } = (0, nB.D)();
+         } = (0, JB.G)();
```

#### 540. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6413` → after: `L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6317) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6413)

```diff
-             }), (0, TB.jsx)(OI.e, {
+             }), (0, LB.jsx)(DG.c, {
```

#### 541. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6433-L6434` → after: `L6337-L6338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6337-L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6337-L6338) · [Before (L6433-L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6433-L6434)

```diff
-         const dB = (0, rB.p)();
-         return (0, TB.jsx)(vI.f, {
+         const oB = (0, zB.r)();
+         return (0, LB.jsx)(xG.j, {
```

#### 542. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6444` → after: `L6348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6348) · [Before (L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6444)

```diff
-               [jB]: (0, BN.x)(BB, QB)
+               [IB]: (0, KG.v)(BB, TB)
```

#### 543. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6449-L6450` → after: `L6353-L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6353-L6354) · [Before (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6449-L6450)

```diff
-     var nN = zB(8850),
-       dN = zB(8859);
+     var Iv = ZB(8956),
+       Zv = ZB(8960);
```

#### 544. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6453-L6454` → after: `L6357-L6358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6357-L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/controller.js#L6357-L6358) · [Before (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/controller.js#L6453-L6454)

```diff
-         const [jB] = [...BB.controllers].sort(((BB, jB) => dN.n[BB] - dN.n[jB]));
-         return dN.j[jB]
+         const [IB] = [...BB.controllers].sort(((BB, IB) => Zv.t[BB] - Zv.t[IB]));
+         return Zv.q[IB]
```
