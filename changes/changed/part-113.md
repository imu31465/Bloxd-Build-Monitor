# Changed — Bundle Modifications Report (Part 113 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `113 / 154` (**407** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 112](part-112.md) · [Part 114 →](part-114.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (338 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2)

#### 197. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2869` → after: `L2869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2869) · [Before (L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2869)

```diff
-         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Qr ? null : Qr.position), this.outline.show(null !== (Sr = this.aimed) && void 0 !== Sr ? Sr : this.nextCell.get())
+         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === md ? null : md.position), this.outline.show(null !== (Od = this.aimed) && void 0 !== Od ? Od : this.nextCell.get())
```

#### 198. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2890` → after: `L2890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2890) · [Before (L2890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2890)

```diff
-           const Ir = rr.XQr(Sr),
+           const Kd = dd.NWd(Od),
```

#### 199. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2928` → after: `L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2928) · [Before (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2928)

```diff
-         this.sent || Ir.c.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
+         this.sent || Kd.e.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
```

#### 200. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2931-L2932` → after: `L2931-L2932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2931-L2932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2931-L2932) · [Before (L2931-L2932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2931-L2932)

```diff
-     var oQ = Qr(2984),
-       bQ = Qr(40721);
+     var Zm = md(2991),
+       km = md(40748);
```

#### 201. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2939` → after: `L2939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2939) · [Before (L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2939)

```diff
-         sx: 48,
+         Mt: 48,
```

#### 202. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2957` → after: `L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2957) · [Before (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2957)

```diff
-         blendMode: oQ.e.Standard
+         blendMode: Zm.g.Standard
```

#### 203. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2963` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2963) · [Before (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2963)

```diff
-       sx: 96,
+       Mt: 96,
```

#### 204. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2980` → after: `L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2980) · [Before (L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2980)

```diff
-       blendMode: oQ.e.OneOne
+       blendMode: Zm.g.OneOne
```

#### 205. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2989` → after: `L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2989) · [Before (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2989)

```diff
-             const rr = `${Wr},${ar},${jr}`;
+             const dd = `${Fd},${Rd},${Xd}`;
```

#### 206. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3031` → after: `L3031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3031) · [Before (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3031)

```diff
-       const Qr = (0, fr.g)(FS, Sr.getView()),
+       const md = (0, hd.i)(lO, Od.getView()),
```

#### 207. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3034` → after: `L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3034) · [Before (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3034)

```diff
-         } = (0, pr.E)(),
+         } = (0, Qd.G)(),
```

#### 208. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3037` → after: `L3037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3037) · [Before (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3037)

```diff
-         } = (0, Ir.n)(["isTouchScreen"]),
+         } = (0, Kd.p)(["isTouchScreen"]),
```

#### 209. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3041` → after: `L3041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3041) · [Before (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3041)

```diff
-       if ((0, nr.d)((rr => xr && !rr.repeat && !(0, er.isTypingInInput)() && !(0, Nr.l)() && !Wr), (rr => {
+       if ((0, pd.d)((dd => td && !dd.repeat && !(0, Yd.isTypingInInput)() && !(0, Nd.m)() && !Fd), (dd => {
```

#### 210. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3045` → after: `L3045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3045) · [Before (L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3045)

```diff
-             return Er.q[sQ].includes(rr) ? Sr.rotate : null
+             return vd.y[OW].includes(dd) ? Od.rotate : null
```

#### 211. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3050` → after: `L3050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3050) · [Before (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3050)

```diff
-       return Qr.blocked ? hr = "plotsGame:placementOffPlot" : Qr.toClear > 0 ? hr = "plotsGame:placementClear" : "placeSpot" !== jr.hint && "placeBuild" !== jr.hint || (hr = null), (0, gr.jsx)(tr.d, {
+       return md.blocked ? yd = "plotsGame:placementOffPlot" : md.toClear > 0 ? yd = "plotsGame:placementClear" : "placeSpot" !== Xd.hint && "placeBuild" !== Xd.hint || (yd = null), (0, Gd.jsx)(Hd.h, {
```

#### 212. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3065` → after: `L3065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3065) · [Before (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3065)

```diff
-             children: [(0, gr.jsxs)(EQ.h, {
+             children: [(0, Gd.jsxs)(om.g, {
```

#### 213. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3070` → after: `L3070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3070) · [Before (L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3070)

```diff
-             }), (0, gr.jsxs)(EQ.L, {
+             }), (0, Gd.jsxs)(om.G, {
```

#### 214. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3080` → after: `L3080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3080) · [Before (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3080)

```diff
-               children: (0, gr.jsxs)(EQ.p, {
+               children: (0, Gd.jsxs)(om.m, {
```

#### 215. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3094` → after: `L3094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3094) · [Before (L3094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3094)

```diff
-       return (0, gr.jsx)(Yr.c, {
+       return (0, Gd.jsx)(Td.b, {
```

#### 216. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3101-L3104` → after: `L3101-L3104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3101-L3104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3101-L3104) · [Before (L3101-L3104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3101-L3104)

```diff
-     var WZ = Qr(3320),
-       aZ = Qr(38214),
-       jZ = Qr(2128),
-       IZ = Qr(1317);
+     var KW = md(3307),
+       hW = md(38302),
+       vW = md(2125),
+       QW = md(1315);
```

#### 217. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3115` → after: `L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3115) · [Before (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3115)

```diff
-       const Qr = (0, fr.g)(SS, Sr.getPlot()),
+       const md = (0, hd.i)(WO, Od.getPlot()),
```

#### 218. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3117` → after: `L3117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3117) · [Before (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3117)

```diff
-         jr = (0, aZ.h)(Zr);
+         Xd = (0, hW.j)(Wd);
```

#### 219. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3131` → after: `L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3131) · [Before (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3131)

```diff
-         }, `${Ir},${Er}`)
+         }, `${Kd},${vd}`)
```

#### 220. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3147` → after: `L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3147) · [Before (L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3147)

```diff
-       } = (0, pr.E)(), xr = (0, jZ.j)("hiddenPlayerNames"), Nr = (0, jZ.j)("players"), Ur = null === jr ? null : null !== (Sr = null === (Qr = Nr.byId[jr]) || void 0 === Qr ? void 0 : Qr.cosmetics) && void 0 !== Sr ? Sr : null, tr = Er("plotsGame:plotBannerCoords", {
+       } = (0, Qd.G)(), td = (0, vW.h)("hiddenPlayerNames"), Nd = (0, vW.h)("players"), qd = null === Xd ? null : null !== (Od = null === (md = Nd.byId[Xd]) || void 0 === md ? void 0 : md.cosmetics) && void 0 !== Od ? Od : null, Hd = vd("plotsGame:plotBannerCoords", {
```

#### 221. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3162` → after: `L3162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3162) · [Before (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3162)

```diff
-           children: [null !== Ur && (0, gr.jsx)(WZ.b, {
+           children: [null !== qd && (0, Gd.jsx)(KW.e, {
```

#### 222. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3172` → after: `L3172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3172) · [Before (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3172)

```diff
-               name: (0, IZ.c)(ar, xr)
+               name: (0, QW.e)(Rd, td)
```

#### 223. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3200` → after: `L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3200) · [Before (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3200)

```diff
-           Er = new wQ(rr, Wr, fr, Sr), pr = new bS(rr, Wr), xr = new Rr(rr, pr), mr = new fQ(rr, Wr, Er.nextCell), Nr = new FQ(rr), Ur.push((0, jr.H)((0, ar.createElement)(aQ, {
+           vd = new Im(dd, Fd, hd, Od), Qd = new ZO(dd, Fd), td = new rd(dd, Qd), od = new tm(dd, Fd, vd.nextCell), Nd = new Cm(dd), qd.push((0, Xd.F)((0, Rd.createElement)(Km, {
```

#### 224. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3221-L3222` → after: `L3221-L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3221-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3221-L3222) · [Before (L3221-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3221-L3222)

```diff
-         lx: () => {
-           Nr.lx(), Er.lx(), pr.lx(), xr.lx()
+         Et: () => {
+           Nd.Et(), vd.Et(), Qd.Et(), td.Et()
```

#### 225. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3243-L3244` → after: `L3243-L3244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3243-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3243-L3244) · [Before (L3243-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3243-L3244)

```diff
-             Er.vx(rr), pr.vx(rr)
-           } else "plotsJournal" === rr ? xr.vx(Sr) : "plotsJournalOpen" === rr ? xr.openFromServer(Sr) : "plotsPreviewEnd" === rr ? pr.endFromServer() : "plotsGuide" === rr ? Ir.receiveGuide(Sr) : "plotsGuideDone" === rr && Ir.receiveGuideDone()
+             vd.Yt(dd), Qd.Yt(dd)
+           } else "plotsJournal" === dd ? td.Yt(Od) : "plotsJournalOpen" === dd ? td.openFromServer(Od) : "plotsPreviewEnd" === dd ? Qd.endFromServer() : "plotsGuide" === dd ? Kd.receiveGuide(Od) : "plotsGuideDone" === dd && Kd.receiveGuideDone()
```

#### 226. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3249` → after: `L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3249) · [Before (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3249)

```diff
-   40020: (rr, Sr, Qr) => {
+   40036: (dd, Od, md) => {
```

#### 227. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3251` → after: `L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3251) · [Before (L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3251)

```diff
-       b: () => Ir
+       c: () => Kd
```

#### 228. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3253` → after: `L3253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3253) · [Before (L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3253)

```diff
-     var Zr = Qr(40013);
+     var Wd = md(40028);
```

#### 229. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3268` → after: `L3268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3268) · [Before (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3268)

```diff
-       return (0, Zr.f)(rr, !tr), tr ? (jr.x = Ur.x, jr.y = Ur.y, jr.distSq = Nr, jr) : null
+       return (0, Wd.h)(dd, !Hd), Hd ? (Xd.x = qd.x, Xd.y = qd.y, Xd.distSq = Nd, Xd) : null
```

#### 230. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3271` → after: `L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3271) · [Before (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3271)

```diff
-   40721: (rr, Sr, Qr) => {
+   40748: (dd, Od, md) => {
```

#### 231. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3274` → after: `L3274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3274) · [Before (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3274)

```diff
-       d: () => ar
+       f: () => Rd
```

#### 232. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3282` → after: `L3282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3282) · [Before (L3282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3282)

```diff
-         this.style = rr, this.sx = Sr, this.half = Qr, this.particles = null, this.lastFrame = -1
+         this.style = dd, this.Mt = Od, this.half = md, this.particles = null, this.lastFrame = -1
```

#### 233. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3292-L3293` → after: `L3292-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3292-L3293) · [Before (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3292-L3293)

```diff
-             texture: rr.soft ? Wr : "square_particle",
-             sx: Sr,
+             texture: dd.soft ? Fd : "square_particle",
+             Mt: Od,
```

#### 234. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3315` → after: `L3315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3315) · [Before (L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3315)

```diff
-         }(this.style, this.sx), {
+         }(this.style, this.Mt), {
```

#### 235. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3328-L3330` → after: `L3328-L3330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3328-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3328-L3330) · [Before (L3328-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3328-L3330)

```diff
-       c: () => jr,
-       d: () => Ir,
-       h: () => fr
+       e: () => Xd,
+       h: () => Kd,
+       j: () => hd
```

#### 236. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3341` → after: `L3341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3341) · [Before (L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3341)

```diff
-       return Zr.set(rr, (null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : 0) + 1), ar(), () => {
+       return Wd.set(dd, (null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : 0) + 1), Rd(), () => {
```

#### 237. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3355` → after: `L3355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3355) · [Before (L3355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3355)

```diff
-   38363: (rr, Sr, Qr) => {
+   38439: (dd, Od, md) => {
```

#### 238. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3358-L3361` → after: `L3359-L3361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3359-L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3359-L3361) · [Before (L3358-L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3358-L3361)

```diff
-       F: () => Cr,
-       G: () => Mr,
-       H: () => Rr,
-       I: () => Gr,
+       C: () => rd,
+       D: () => Pd,
+       c: () => hd,
```

#### 239. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3363-L3364` → after: `L3363-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3363-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3363-L3364) · [Before (L3363-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3363-L3364)

```diff
-       i: () => lr,
-       j: () => Ir,
+       f: () => Kd,
+       h: () => Ad,
```

#### 240. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3367-L3369` → after: `L3367-L3369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3367-L3369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3367-L3369) · [Before (L3367-L3369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3367-L3369)

```diff
-       o: () => yr,
-       s: () => Hr,
-       u: () => Pr,
+       q: () => Vd,
+       r: () => ud,
+       v: () => Ud,
```

#### 241. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3372)

```diff
-     var Zr = Qr(43);
+     var Wd = md(46);
```

#### 242. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3407` → after: `L3407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3407) · [Before (L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3407)

```diff
-         const rr = Zr.j.getItem(Er);
+         const dd = Wd.k.getItem(vd);
```

#### 243. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3414` → after: `L3414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3414) · [Before (L3414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3414)

```diff
-           ..."object" === typeof rr && null !== rr ? rr : {}
+           ..."object" === typeof dd && null !== dd ? dd : {}
```

#### 244. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3425` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3425) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3425)

```diff
-       }, Zr.j.setItem(Er, mr))
+       }, Wd.k.setItem(vd, od))
```

#### 245. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3429` → after: `L3429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3429) · [Before (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3429)

```diff
-       return "docsOverview" === rr ? ar : "aiHelperOverview" === rr ? jr : Nr ? Wr[Nr] : []
+       return "docsOverview" === dd ? Rd : "aiHelperOverview" === dd ? Xd : Nd ? Fd[Nd] : []
```

#### 246. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3443` → after: `L3443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3443) · [Before (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3443)

```diff
-           return hr ? hr.name === rr : "welcome" === rr
+           return yd ? yd.name === dd : "welcome" === dd
```

#### 247. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3452` → after: `L3452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3452) · [Before (L3452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3452)

```diff
-       return null !== (Sr = yr(rr).find((Sr => vr(rr, Sr)))) && void 0 !== Sr ? Sr : null
+       return null !== (Od = wd(dd).find((Od => Ud(dd, Od)))) && void 0 !== Od ? Od : null
```

#### 248. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3504` → after: `L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3504) · [Before (L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3504)

```diff
-       const Qr = Sr ? rr : Nr === rr ? null : Nr;
+       const md = Od ? dd : Nd === dd ? null : Nd;
```

#### 249. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3518` → after: `L3518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3518) · [Before (L3518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3518)

```diff
-   40013: (rr, Sr, Qr) => {
+   40028: (dd, Od, md) => {
```

#### 250. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3521` → after: `L3521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3521) · [Before (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3521)

```diff
-       f: () => ar
+       h: () => Rd
```

#### 251. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3541` → after: `L3541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3541) · [Before (L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3541)

```diff
-       Zr.x === Sr && Zr.y === Qr || (Zr.x = Sr, Zr.y = Qr, rr.style.translate = `${Sr}vw ${Qr}vh`)
+       Wd.x === Od && Wd.y === md || (Wd.x = Od, Wd.y = md, dd.style.translate = `${Od}vw ${md}vh`)
```

#### 252. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3544` → after: `L3544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3544) · [Before (L3544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3544)

```diff
-   39920: (rr, Sr, Qr) => {
+   39958: (dd, Od, md) => {
```

#### 253. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3546-L3547` → after: `L3546-L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3546-L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3546-L3548) · [Before (L3546-L3547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3546-L3547)

```diff
-       C: () => yr,
-       D: () => Tr,
+       A: () => Jd,
+       E: () => gd,
+       F: () => Yd,
```

#### 254. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3551-L3553` → after: `L3551-L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3551-L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3551-L3552) · [Before (L3551-L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3551-L3553)

```diff
-       N: () => tr,
-       P: () => zr,
-       S: () => Wr,
+       L: () => bd,
+       O: () => Fd,
```

#### 255. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3562` → after: `L3561-L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3561-L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3561-L3562) · [Before (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3562)

```diff
-       z: () => Nr
+       x: () => Nd,
+       y: () => wd
```

#### 256. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3564` → after: `L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3564) · [Before (L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3564)

```diff
-     var Zr = Qr(5870);
+     var Wd = md(5813);
```

#### 257. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3579` → after: `L3579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3579) · [Before (L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3579)

```diff
-       return (0, Zr.k)(Sr) ? Sr === Zr.d ? "cryo" : "water" : null
+       return (0, Wd.n)(Od) ? Od === Wd.d ? "cryo" : "water" : null
```

#### 258. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3675` → after: `L3675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3675) · [Before (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3675)

```diff
-       return 1e3 * (null !== Sr && void 0 !== Sr ? Sr : 0) / rr.opMs
+       return 1e3 * (null !== Od && void 0 !== Od ? Od : 0) / dd.opMs
```

#### 259. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3687` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3687) · [Before (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3687)

```diff
-   41149: (rr, Sr, Qr) => {
+   41143: (dd, Od, md) => {
```

#### 260. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3689-L3690` → after: `L3689-L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3689-L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3689-L3690) · [Before (L3689-L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3689-L3690)

```diff
-       d: () => jr,
-       f: () => xr
+       c: () => Xd,
+       g: () => td
```

#### 261. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3692-L3694` → after: `L3692-L3694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3692-L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3692-L3694) · [Before (L3692-L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3692-L3694)

```diff
-     var Zr = Qr(5779),
-       Wr = Qr(5811),
-       ar = Qr(5830);
+     var Wd = md(5733),
+       Fd = md(5756),
+       Rd = md(5769);
```

#### 262. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3696` → after: `L3696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3696) · [Before (L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3696)

```diff
-       Ir = (0, Wr.e)([
+       Kd = (0, Fd.d)([
```

#### 263. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3699` → after: `L3699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3699) · [Before (L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3699)

```diff
-       fr = (0, Wr.e)([
+       hd = (0, Fd.d)([
```

#### 264. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3702` → after: `L3702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3702) · [Before (L3702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3702)

```diff
-       Er = (0, Wr.e)([
+       vd = (0, Fd.d)([
```

#### 265. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3705` → after: `L3705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3705) · [Before (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3705)

```diff
-       pr = [0, 1, 2, 3].map((rr => (0, Wr.e)((0, Wr.n)([
+       Qd = [0, 1, 2, 3].map((dd => (0, Fd.d)((0, Fd.n)([
```

#### 266. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3711` → after: `L3711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3711) · [Before (L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3711)

```diff
-         Bh: Sr,
+         Sy: Od,
```

#### 267. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3715-L3716` → after: `L3715-L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3715-L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3715-L3716) · [Before (L3715-L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3715-L3716)

```diff
-       } = Zr.j[rr];
-       return void 0 !== Sr ? Sr : "CentreCross" === Qr ? Ir : null !== Wr && void 0 !== Wr && Wr.startsWith("torch") ? xr.halfblockPlacement === ar.b.side ? pr[xr.rot - 1] : xr.halfblockPlacement === ar.b.top ? Er : fr : jr
+       } = Wd.i[dd];
+       return void 0 !== Od ? Od : "CentreCross" === md ? Kd : null !== Fd && void 0 !== Fd && Fd.startsWith("torch") ? td.halfblockPlacement === Rd.c.side ? Qd[td.rot - 1] : td.halfblockPlacement === Rd.c.top ? vd : hd : Xd
```

#### 268. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3719` → after: `L3719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3719) · [Before (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3719)

```diff
-   39907: (rr, Sr, Qr) => {
+   39951: (dd, Od, md) => {
```

#### 269. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3722` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3722) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3722)

```diff
-       h: () => Rr
+       f: () => rd
```

#### 270. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3724-L3725` → after: `L3724-L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3724-L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3724-L3725) · [Before (L3724-L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3724-L3725)

```diff
-     var Zr = Qr(5779),
-       Wr = Qr(5817);
+     var Wd = md(5733),
+       Fd = md(5759);
```

#### 271. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3734-L3736` → after: `L3734-L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3734-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3734-L3736) · [Before (L3734-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3734-L3736)

```diff
-     var jr = Qr(5833),
-       Ir = Qr(39717),
-       fr = Qr(5830);
+     var Xd = md(5774),
+       Kd = md(39756),
+       hd = md(5769);
```

#### 272. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3762` → after: `L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3762) · [Before (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3762)

```diff
-     var Ur = Qr(5861);
+     var qd = md(5804);
```

#### 273. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3765` → after: `L3765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3765) · [Before (L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3765)

```diff
-       return Sr < Ur.r || Sr >= Ur.r + Ur.s || Math.floor(rr / Ur.y) === Math.floor(Zr / Ur.y) && Math.floor(Qr / Ur.y) === Math.floor(Wr / Ur.y)
+       return Od < qd.p || Od >= qd.p + qd.t || Math.floor(dd / qd.y) === Math.floor(Wd / qd.y) && Math.floor(md / qd.y) === Math.floor(Fd / qd.y)
```

#### 274. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3769-L3771` → after: `L3769-L3771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3769-L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3769-L3771) · [Before (L3769-L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3769-L3771)

```diff
-       Yr = new Set(Ur.L),
-       nr = new Set([...Ur.L, "Belt Loader", "Fast Loader", zr]),
-       er = new Set(Ur.w),
+       Td = new Set(qd.N),
+       pd = new Set([...qd.N, "Belt Loader", "Fast Loader", bd]),
+       Yd = new Set(qd.x),
```

#### 275. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3783` → after: `L3783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3783) · [Before (L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3783)

```diff
-       return null !== (Sr = null === (Qr = Zr.j[rr]) || void 0 === Qr ? void 0 : Qr.meta.rootName) && void 0 !== Sr ? Sr : ""
+       return null !== (Od = null === (md = Wd.i[dd]) || void 0 === md ? void 0 : md.meta.rootName) && void 0 !== Od ? Od : ""
```

#### 276. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3787` → after: `L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3787) · [Before (L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3787)

```diff
-       return yr(rr) === Ur.g && (0, Ur.W)(Zr.j[rr].name)
+       return wd(dd) === qd.i && (0, qd.Z)(Wd.i[dd].name)
```

#### 277. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3789-L3790` → after: `L3789-L3790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3789-L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3789-L3790) · [Before (L3789-L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3789-L3790)

```diff
-     var Tr = Qr(5825),
-       vr = Qr(5843);
+     var Jd = md(5766),
+       Ud = md(5781);
```

#### 278. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3800-L3803` → after: `L3800-L3803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3800-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3800-L3803) · [Before (L3800-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3800-L3803)

```diff
-       const Wr = null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta;
-       return (null === Wr || void 0 === Wr ? void 0 : Wr.rootName) !== vr.r ? null : {
-         rot: null !== (Qr = Wr.rot) && void 0 !== Qr ? Qr : 1,
-         half: (0, vr.h)(Wr.rootName, Wr.metaStr)
+       const Fd = null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.meta;
+       return (null === Fd || void 0 === Fd ? void 0 : Fd.rootName) !== Ud.g ? null : {
+         rot: null !== (md = Fd.rot) && void 0 !== md ? md : 1,
+         half: (0, Ud.c)(Fd.rootName, Fd.metaStr)
```

#### 279. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3816-L3817` → after: `L3816-L3817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3816-L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3816-L3817) · [Before (L3816-L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3816-L3817)

```diff
-       const [Ir, fr] = (0, vr.n)(ar, jr), Er = lr(rr, Sr + Ir, Qr, Zr + fr);
-       return null !== Er && Er.rot === ar && Er.half === vr.u[jr]
+       const [Kd, hd] = (0, Ud.e)(Rd, Xd), vd = Sd(dd, Od + Kd, md, Wd + hd);
+       return null !== vd && vd.rot === Rd && vd.half === Ud.h[Xd]
```

#### 280. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3819` → after: `L3819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3819) · [Before (L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3819)

```diff
-     var Pr = Qr(39914);
+     var ud = md(39955);
```

#### 281. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3826)

```diff
-         return "Stairs" === (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.model)
+         return "Stairs" === (null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.model)
```

#### 282. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3834-L3835` → after: `L3834-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3834-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3834-L3835) · [Before (L3834-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3834-L3835)

```diff
-           Er = jr.half === fr.b.top ? "top" : "bot";
-         return (0, Zr.k)(`${Zr.j[ar].meta.rootName}|meta|rot${jr.rot}|${Er}${null===Ir?"":`|${Ir}`}`)
+           vd = Xd.half === hd.c.top ? "top" : "bot";
+         return (0, Wd.j)(`${Wd.i[Rd].meta.rootName}|meta|rot${Xd.rot}|${vd}${null===Kd?"":`|${Kd}`}`)
```

#### 283. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3841` → after: `L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3841) · [Before (L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3841)

```diff
-         } = Zr.j[rr].meta;
+         } = Wd.i[dd].meta;
```

#### 284. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3876` → after: `L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3876) · [Before (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3876)

```diff
-         this.reshapeOffsets = ar, this.rootIds = new Set(Wr.l.map((rr => (0, Zr.k)(rr))))
+         this.reshapeOffsets = Rd, this.rootIds = new Set(Fd.j.map((dd => (0, Wd.j)(dd))))
```

#### 285. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3880` → after: `L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3880) · [Before (L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3880)

```diff
-         const Qr = null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta;
+         const md = null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.meta;
```

#### 286. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3887` → after: `L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3887) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3887)

```diff
-         return Zr.j[rr].meta.rootName === Wr.u ? null : Wr.u
+         return Wd.i[dd].meta.rootName === Fd.s ? null : Fd.s
```

#### 287. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3894` → after: `L3894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3894) · [Before (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3894)

```diff
-         } = Zr.j[jr].meta;
+         } = Wd.i[Xd].meta;
```

#### 288. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3899` → after: `L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3899) · [Before (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3899)

```diff
-           const Ur = null === (fr = Zr.j[rr(Sr + xr, Qr + mr, ar + Nr)]) || void 0 === fr ? void 0 : fr.meta;
+           const qd = null === (hd = Wd.i[dd(Od + td, md + od, Rd + Nd)]) || void 0 === hd ? void 0 : hd.meta;
```

#### 289. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3901` → after: `L3901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3901) · [Before (L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3901)

```diff
-         })), (0, Zr.k)((0, Wr.h)(fr, Er, pr))
+         })), (0, Wd.j)((0, Fd.g)(hd, vd, Qd))
```

#### 290. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3903` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3903) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3903)

```diff
-     }, ...jr.d.map((rr => new Ir.b(rr))), new class {
+     }, ...Xd.c.map((dd => new Kd.e(dd))), new class {
```

#### 291. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3909` → after: `L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3909) · [Before (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3909)

```diff
-         return Yr.has(Sr) || Sr === Ur.g
+         return Td.has(Od) || Od === qd.i
```

#### 292. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3913)

```diff
-         return nr.has(Sr) || er.has(Sr) || Sr === hr || Sr === Ur.g || void 0 !== Ur.b[Sr]
+         return pd.has(Od) || Yd.has(Od) || Od === yd || Od === qd.i || void 0 !== qd.d[Od]
```

#### 293. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3919-L3922` → after: `L3919-L3922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3919-L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3919-L3922) · [Before (L3919-L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3919-L3922)

```diff
-         } = Zr.j[ar].meta;
-         return Ir === Ur.g ? jr ? ar : function(rr, Sr, Qr, Wr, ar) {
-           const [jr, Ir] = Ur.d[ar - 1];
-           for (let fr = 1; fr <= Ur.J; fr++) {
+         } = Wd.i[Rd].meta;
+         return Kd === qd.i ? Xd ? Rd : function(dd, Od, md, Fd, Rd) {
+           const [Xd, Kd] = qd.g[Rd - 1];
+           for (let hd = 1; hd <= qd.L; hd++) {
```

#### 294. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3924` → after: `L3924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3924) · [Before (L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3924)

```diff
-             if (yr(xr) === Ur.g && Zr.j[xr].meta.rot === ar && tr(Sr, Qr, Wr, Er, pr)) return (0, Zr.k)((0, Ur.ab)(ar, !Br(xr)))
+             if (wd(td) === qd.i && Wd.i[td].meta.rot === Rd && Hd(Od, md, Fd, vd, Qd)) return (0, Wd.j)((0, qd.fb)(Rd, !Ed(td)))
```

#### 295. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3926-L3928` → after: `L3926-L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3926-L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3926-L3928) · [Before (L3926-L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3926-L3928)

```diff
-           return (0, Zr.k)((0, Ur.ab)(ar, !1))
-         }(rr, Sr, Qr, Wr, fr) : (0, Zr.k)((0, Ur.P)(Ir, fr, function(rr, Sr, Qr, Wr, ar) {
-           const [jr, Ir] = Ur.d[ar - 1], fr = (ar, jr) => function(rr, Sr, Qr) {
+           return (0, Wd.j)((0, qd.fb)(Rd, !1))
+         }(dd, Od, md, Fd, hd) : (0, Wd.j)((0, qd.P)(Kd, hd, function(dd, Od, md, Fd, Rd) {
+           const [Xd, Kd] = qd.g[Rd - 1], hd = (Rd, Xd) => function(dd, Od, md) {
```

#### 296. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3930` → after: `L3930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3930) · [Before (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3930)

```diff
-             const ar = null === (Wr = Zr.j[rr]) || void 0 === Wr ? void 0 : Wr.meta;
+             const Rd = null === (Fd = Wd.i[dd]) || void 0 === Fd ? void 0 : Fd.meta;
```

#### 297. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3935` → after: `L3935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3935) · [Before (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3935)

```diff
-             const [fr, Er] = Ur.d[ar.rot - 1];
+             const [hd, vd] = qd.g[Rd.rot - 1];
```

#### 298. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3938-L3939` → after: `L3938-L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3938-L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3938-L3939) · [Before (L3938-L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3938-L3939)

```diff
-             const pr = Zr.j[rr].name;
-             return (jr === hr ? (0, Ur._)(pr, fr, Er) : jr === zr ? [(0, Ur.R)(pr, fr, Er)] : []).some((rr => {
+             const Qd = Wd.i[dd].name;
+             return (Xd === yd ? (0, qd.db)(Qd, hd, vd) : Xd === bd ? [(0, qd.T)(Qd, hd, vd)] : []).some((dd => {
```

#### 299. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3943` → after: `L3943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3943) · [Before (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3943)

```diff
-           }(rr(Sr + ar, Qr, Wr + jr), ar, jr), Er = rr(Sr - jr, Qr, Wr - Ir), pr = yr(Er) === hr && Zr.j[Er].meta.rot === ar, xr = 1 === Ur.b[yr(rr(Sr, Qr - 1, Wr))] || -1 === Ur.b[yr(rr(Sr, Qr + 1, Wr))];
+           }(dd(Od + Rd, md, Fd + Xd), Rd, Xd), vd = dd(Od - Xd, md, Fd - Kd), Qd = wd(vd) === yd && Wd.i[vd].meta.rot === Rd, td = 1 === qd.d[wd(dd(Od, md - 1, Fd))] || -1 === qd.d[wd(dd(Od, md + 1, Fd))];
```

#### 300. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3953` → after: `L3953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3953) · [Before (L3953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3953)

```diff
-         this.reshapeOffsets = Or, this.rootId = (0, Zr.k)(vr.r)
+         this.reshapeOffsets = xd, this.rootId = (0, Wd.j)(Ud.g)
```

#### 301. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3957` → after: `L3957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3957) · [Before (L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3957)

```diff
-         return (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta.rootId) === this.rootId
+         return (null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.meta.rootId) === this.rootId
```

#### 302. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3964` → after: `L3964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3964) · [Before (L3964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3964)

```diff
-         return (0, Zr.k)((fr = Ir.rot, null !== (Er = jr ? this.reshapedHalf(rr, Sr, Qr, Wr, Ir) : this.placedHalf(rr, Sr, Qr, Wr, Ir.rot)) ? (0, vr.e)(vr.r, fr, Er) : 1 === fr ? vr.r : `${vr.r}|meta|rot${fr}`));
+         return (0, Wd.j)((hd = Kd.rot, null !== (vd = Xd ? this.reshapedHalf(dd, Od, md, Fd, Kd) : this.placedHalf(dd, Od, md, Fd, Kd.rot)) ? (0, Ud.b)(Ud.g, hd, vd) : 1 === hd ? Ud.g : `${Ud.g}|meta|rot${hd}`));
```

#### 303. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3968` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3968) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3968)

```diff
-         const [ar, jr] = Tr.b[Wr];
+         const [Rd, Xd] = Jd.e[Fd];
```

#### 304. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3983-L3984` → after: `L3983-L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3983-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3983-L3984) · [Before (L3983-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3983-L3984)

```diff
-           const [jr, Ir] = (0, vr.n)(Wr.rot, ar), fr = lr(rr, Sr + jr, Qr, Zr + Ir);
-           if (null !== fr && fr.rot === Wr.rot && fr.half === vr.u[ar]) return ar
+           const [Xd, Kd] = (0, Ud.e)(Fd.rot, Rd), hd = Sd(dd, Od + Xd, md, Wd + Kd);
+           if (null !== hd && hd.rot === Fd.rot && hd.half === Ud.h[Rd]) return Rd
```

#### 305. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4000` → after: `L4000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4000) · [Before (L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4000)

```diff
-         if (Zr.handles(rr)) return null !== (Sr = null === (Qr = Zr.placedBy) || void 0 === Qr ? void 0 : Qr.call(Zr, rr)) && void 0 !== Sr ? Sr : null
+         if (Wd.handles(dd)) return null !== (Od = null === (md = Wd.placedBy) || void 0 === md ? void 0 : md.call(Wd, dd)) && void 0 !== Od ? Od : null
```

#### 306. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4005` → after: `L4005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4005) · [Before (L4005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4005)

```diff
-   39914: (rr, Sr, Qr) => {
+   39955: (dd, Od, md) => {
```

#### 307. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4008-L4009` → after: `L4008-L4009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4008-L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4008-L4009) · [Before (L4008-L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4008-L4009)

```diff
-       f: () => er,
-       h: () => nr
+       h: () => Yd,
+       l: () => pd
```

#### 308. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4011-L4018` → after: `L4011-L4018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4011-L4018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4011-L4018) · [Before (L4011-L4018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4011-L4018)

```diff
-     var Zr = Qr(5779),
-       Wr = Qr(5806),
-       ar = Qr(5870),
-       jr = Qr(39920),
-       Ir = Qr(5861);
-     const fr = (0, jr.N)("pipe"),
-       Er = (0, jr.N)("tank"),
-       pr = (0, jr.N)("port"),
+     var Wd = md(5733),
+       Fd = md(5752),
+       Rd = md(5813),
+       Xd = md(39958),
+       Kd = md(5804);
+     const hd = (0, Xd.K)("pipe"),
+       vd = (0, Xd.K)("tank"),
+       Qd = (0, Xd.K)("port"),
```

#### 309. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4022` → after: `L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4022) · [Before (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4022)

```diff
-       const Zr = new Set([ar.g, ar.d, xr, ...Sr, ...Qr, ...rr ? [jr.i] : []]);
+       const Wd = new Set([Rd.h, Rd.d, td, ...Od, ...md, ...dd ? [Xd.m] : []]);
```

#### 310. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4041` → after: `L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4041) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4041)

```diff
-       hr = Wr.f.map((rr => tr[rr])),
+       yd = Fd.c.map((dd => Hd[dd])),
```

#### 311. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4044` → after: `L4044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4044) · [Before (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4044)

```diff
-         return jr.z.findIndex((rr => {
+         return Xd.x.findIndex((dd => {
```

#### 312. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4052` → after: `L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4052) · [Before (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4052)

```diff
-       const Qr = Zr.j[rr],
+       const md = Wd.i[dd],
```

#### 313. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4056-L4060` → after: `L4056-L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4056-L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4056-L4060) · [Before (L4056-L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4056-L4060)

```diff
-       if ((0, ar.k)(Wr)) return (0, jr.K)(Qr.name) === Sr ? fr : null;
-       if (Wr === jr.i) return Er;
-       if (Wr === xr) return Qr.name.endsWith("|Water") ? pr : null;
-       const [Ur, tr] = Ir.d[(Qr.meta.rot || 1) - 1];
-       return (0, jr.N)(mr.makers.has(Wr) ? "maker" : "user", [-Ur, 0, -tr])
+       if ((0, Rd.n)(Fd)) return (0, Xd.G)(md.name) === Od ? hd : null;
+       if (Fd === Xd.m) return vd;
+       if (Fd === td) return md.name.endsWith("|Water") ? Qd : null;
+       const [qd, Hd] = Kd.g[(md.meta.rot || 1) - 1];
+       return (0, Xd.K)(od.makers.has(Fd) ? "maker" : "user", [-qd, 0, -Hd])
```

#### 314. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4073` → after: `L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4073) · [Before (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4073)

```diff
-         return null !== nr && Ir.has(null !== (xr = null === (mr = Zr.j[hr]) || void 0 === mr ? void 0 : mr.meta.rootName) && void 0 !== xr ? xr : "") && !(0, jr.P)(fr, nr, zr[pr])
+         return null !== pd && Kd.has(null !== (td = null === (od = Wd.i[yd]) || void 0 === od ? void 0 : od.meta.rootName) && void 0 !== td ? td : "") && !(0, Xd.L)(hd, pd, bd[Qd])
```

#### 315. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4078-L4079` → after: `L4078-L4079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4078-L4079) · [Before (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4078-L4079)

```diff
-       const Sr = Zr.j[rr];
-       return Sr ? (0, jr.K)(Sr.name) : null
+       const Od = Wd.i[dd];
+       return Od ? (0, Xd.G)(Od.name) : null
```

#### 316. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4089` → after: `L4089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4089) · [Before (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4089)

```diff
-               HN: rr,
+               LN: dd,
```

#### 317. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4097-L4098` → after: `L4097-L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4097-L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4097-L4098) · [Before (L4097-L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4097-L4098)

```diff
-       length: ar.h + 1
-     }, ((rr, Sr) => [(0, ar.p)(Sr), Sr])));
+       length: Rd.k + 1
+     }, ((dd, Od) => [(0, Rd.s)(Od), Od])));
```

#### 318. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4105` → after: `L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4105) · [Before (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4105)

```diff
-         const tr = null !== (Er = null === (pr = Zr.j[rr(Sr + mr, Qr + Nr, Wr + Ur)]) || void 0 === pr ? void 0 : pr.name) && void 0 !== Er ? Er : "",
+         const Hd = null !== (vd = null === (Qd = Wd.i[dd(Od + od, md + Nd, Fd + qd)]) || void 0 === Qd ? void 0 : Qd.name) && void 0 !== vd ? vd : "",
```

#### 319. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4107` → after: `L4107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4107) · [Before (L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4107)

```diff
-         return hr ? hr.HN === ar && hr.full : (null !== (xr = function(rr) {
+         return yd ? yd.LN === Rd && yd.full : (null !== (td = function(dd) {
```

#### 320. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4109-L4110` → after: `L4109-L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4109-L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4109-L4110) · [Before (L4109-L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4109-L4110)

```diff
-           return null !== (Sr = Br.get(rr)) && void 0 !== Sr ? Sr : null
-         }(tr)) && void 0 !== xr ? xr : 0) > 0
+           return null !== (Od = Ed.get(dd)) && void 0 !== Od ? Od : null
+         }(Hd)) && void 0 !== td ? td : 0) > 0
```

#### 321. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4122` → after: `L4122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4122) · [Before (L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4122)

```diff
-         return Ur.has(null !== (Sr = null === (Qr = Zr.j[rr]) || void 0 === Qr ? void 0 : Qr.meta.rootName) && void 0 !== Sr ? Sr : "")
+         return qd.has(null !== (Od = null === (md = Wd.i[dd]) || void 0 === md ? void 0 : md.meta.rootName) && void 0 !== Od ? Od : "")
```

#### 322. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4126` → after: `L4126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4126) · [Before (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4126)

```diff
-         return (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta.rootName) === ar.d ? ar.g : null
+         return (null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.meta.rootName) === Rd.d ? Rd.h : null
```

#### 323. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4130-L4131` → after: `L4130-L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4130-L4131) · [Before (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4130-L4131)

```diff
-         const Nr = null !== (pr = null === (xr = Zr.j[Ir]) || void 0 === xr ? void 0 : xr.name) && void 0 !== pr ? pr : "",
-           Ur = Er || Nr !== ar.g ? null !== (mr = (0, jr.K)(Nr)) && void 0 !== mr ? mr : "water" : function(rr, Sr, Qr, Zr) {
+         const Nd = null !== (Qd = null === (td = Wd.i[Kd]) || void 0 === td ? void 0 : td.name) && void 0 !== Qd ? Qd : "",
+           qd = vd || Nd !== Rd.h ? null !== (od = (0, Xd.G)(Nd)) && void 0 !== od ? od : "water" : function(dd, Od, md, Wd) {
```

#### 324. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4135` → after: `L4135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4135) · [Before (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4135)

```diff
-               return null !== xr && "port" !== xr.kind && (0, jr.P)(fr, xr, zr[ar])
+               return null !== td && "port" !== td.kind && (0, Xd.L)(hd, td, bd[Rd])
```

#### 325. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4144` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4144) · [Before (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4144)

```diff
-               Nr && (0, jr.P)(fr, Nr, zr[Er]) && (ar |= 1 << Er)
+               Nd && (0, Xd.L)(hd, Nd, bd[vd]) && (Rd |= 1 << vd)
```

#### 326. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4151` → after: `L4151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4151) · [Before (L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4151)

```diff
-         return (0, Zr.k)((0, ar.o)(Ur, tr, nr))
+         return (0, Wd.j)((0, Rd.o)(qd, Hd, pd))
```

#### 327. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4155` → after: `L4155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4155) · [Before (L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4155)

```diff
-   38368: (rr, Sr, Qr) => {
+   38448: (dd, Od, md) => {
```

#### 328. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4157` → after: `L4157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4157) · [Before (L4157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4157)

```diff
-       return null === rr || null === Sr ? rr === Sr : rr[0] === Sr[0] && rr[1] === Sr[1] && rr[2] === Sr[2]
+       return null === dd || null === Od ? dd === Od : dd[0] === Od[0] && dd[1] === Od[1] && dd[2] === Od[2]
```

#### 329. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4164-L4165` → after: `L4164-L4165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4164-L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4164-L4165) · [Before (L4164-L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4164-L4165)

```diff
-       e: () => Wr,
-       h: () => Zr
+       d: () => Fd,
+       f: () => Wd
```

#### 330. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4168` → after: `L4168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4168) · [Before (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4168)

```diff
-   39679: (rr, Sr, Qr) => {
+   39716: (dd, Od, md) => {
```

#### 331. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4170-L4171` → after: `L4170-L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4170-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4170-L4171) · [Before (L4170-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4170-L4171)

```diff
-       e: () => Zr,
-       i: () => ar
+       b: () => Wd,
+       f: () => Rd
```

#### 332. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4198` → after: `L4198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4198) · [Before (L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4198)

```diff
-   38397: (rr, Sr, Qr) => {
+   38474: (dd, Od, md) => {
```

#### 333. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4215` → after: `L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4215) · [Before (L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4215)

```diff
-       c: () => jr,
+       e: () => Xd,
```

#### 334. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4217-L4218` → after: `L4217-L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4217-L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4217-L4218) · [Before (L4217-L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4217-L4218)

```diff
-       h: () => ar,
-       i: () => Wr
+       j: () => Rd,
+       l: () => Fd
```

#### 335. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4221` → after: `L4221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4221) · [Before (L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4221)

```diff
-   38390: (rr, Sr, Qr) => {
+   38469: (dd, Od, md) => {
```

#### 336. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4225-L4226` → after: `L4225-L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4225-L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4225-L4226) · [Before (L4225-L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4225-L4226)

```diff
-     var Zr = Qr(38397),
-       Wr = Qr(5779);
+     var Wd = md(38474),
+       Fd = md(5733);
```

#### 337. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4231` → after: `L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4231) · [Before (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4231)

```diff
-     for (const pr of Object.keys(Wr.n))(0, Zr.f)(pr) ? ar.push(pr) : (0, Zr.i)(pr) && jr.push(pr), (0, Zr.h)(pr) && Ir.push(pr), (pr.includes(" Bed Head") || pr.includes(" Strongbed Head")) && fr.push(pr);
+     for (const Qd of Object.keys(Fd.k))(0, Wd.f)(Qd) ? Rd.push(Qd) : (0, Wd.l)(Qd) && Xd.push(Qd), (0, Wd.j)(Qd) && Kd.push(Qd), (Qd.includes(" Bed Head") || Qd.includes(" Strongbed Head")) && hd.push(Qd);
```

#### 338. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4241` → after: `L4241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4241) · [Before (L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4241)

```diff
-   40079: rr => {
+   40112: dd => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-f51da8c88e155ca83c1f2009e60354ea2996c43ac0e91343d9632e1fc652451a)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-f51da8c88e155ca83c1f2009e60354ea2996c43ac0e91343d9632e1fc652451aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-f51da8c88e155ca83c1f2009e60354ea2996c43ac0e91343d9632e1fc652451a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js#L4)

```diff
-   41221: (rr, Sr, Qr) => {
+   41228: (dd, Od, md) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (202 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L4)

```diff
-   38154: (rr, Sr, Qr) => {
+   38243: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L6-L7)

```diff
-       c: () => hr,
-       d: () => zr,
+       e: () => yd,
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L8-L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L9)

```diff
-       l: () => xr
+       i: () => od,
+       k: () => td
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L11-L18)

```diff
-     var Zr = Qr(35448),
-       Wr = Qr(3425),
-       ar = Qr(3429),
-       jr = Qr(9818),
-       Ir = Qr(1573),
-       fr = Qr(72),
-       Er = Qr(92),
-       pr = Qr(1338);
+     var Wd = md(35535),
+       Fd = md(3428),
+       Rd = md(3432),
+       Xd = md(9850),
+       Kd = md(1566),
+       hd = md(66),
+       vd = md(86),
+       Qd = md(1341);
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L22-L23)

```diff
-       return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
-         children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
+       return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
+         children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L32-L33)

```diff
-       (0, Ir.g)(Wr.e, (0, Wr.w)());
-       const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
+       (0, Kd.i)(Fd.d, (0, Fd.n)());
+       const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L36-L37)

```diff
-         Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
-       }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
+         md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
+       }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L63)

```diff
-         id: `clientGameHud-${Sr}`,
+         id: `clientGameHud-${Od}`,
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L77)

```diff
-         return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
+         return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L82)

```diff
-           Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
+           Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L90)

```diff
-   38054: (rr, Sr, Qr) => {
+   38141: (dd, Od, md) => {
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L92-L93` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L92) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L92-L93)

```diff
-       d: () => Lr,
-       f: () => Tr,
+       e: () => Bd,
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L95` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L94-L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L95)

```diff
-       k: () => yr,
+       j: () => Ud,
+       l: () => wd,
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L98)

```diff
-     var Zr = Qr(72),
+     var Wd = md(66),
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L101-L115` → after: `L101-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L101-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L101-L115) · [Before (L101-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L101-L115)

```diff
-       jr = Qr(4302),
-       Ir = Qr(360),
-       fr = Qr(3404),
-       Er = Qr(34),
-       pr = Qr(2114),
-       xr = Qr(43),
-       mr = Qr(2128),
-       Nr = Qr(26),
-       Ur = Qr(2132),
-       tr = Qr(1518),
-       hr = Qr(9937),
-       zr = Qr(2154),
-       Yr = Qr(1251),
-       nr = Qr(38056),
-       er = Qr(1338);
+       Xd = md(4308),
+       Kd = md(387),
+       hd = md(3403),
+       vd = md(32),
+       Qd = md(2116),
+       td = md(46),
+       od = md(2125),
+       Nd = md(29),
+       qd = md(2130),
+       Hd = md(1498),
+       yd = md(9965),
+       bd = md(2149),
+       Td = md(1238),
+       pd = md(38143),
+       Yd = md(1341);
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L123)

```diff
-       } = (0, Nr.n)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
+       } = (0, Nd.p)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L153-L155` → after: `L153-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L153-L155) · [Before (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L153-L155)

```diff
-       } = (0, Nr.n)(["isTouchScreen"]), Sr = (0, tr.z)();
-       (0, jr.e)();
-       const Qr = (0, fr.l)("showBasicMovementControls"),
+       } = (0, Nd.p)(["isTouchScreen"]), Od = (0, Hd.C)();
+       (0, Xd.b)();
+       const md = (0, hd.j)("showBasicMovementControls"),
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L164)

```diff
-         pr("movement" === Wr && (0, tr.j)() ? "padActions" : "done")
+         Qd("movement" === Fd && (0, Hd.m)() ? "padActions" : "done")
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L166)

```diff
-       const zr = xr.j.getItem(Ir.Ib) > 2,
+       const bd = td.k.getItem(Kd.Ib) > 2,
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L170)

```diff
-       (0, nr.h)(!zr && !hr && Yr, Tr), (0, nr.h)(!zr && !hr && Kr);
+       (0, pd.g)(!bd && !yd && Td, Jd), (0, pd.g)(!bd && !yd && gd);
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L173)

```diff
-         Xr && !hr && Er.i.Jp("controlsTutorialShown", "movement")
+         sd && !yd && vd.j.lQ("controlsTutorialShown", "movement")
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L198)

```diff
-       const rr = (0, tr.z)();
+       const dd = (0, Hd.C)();
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L204)

```diff
-         }), rr && (0, er.jsx)(Ur.c, {
+         }), dd && (0, Yd.jsx)(qd.b, {
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L209)

```diff
-             children: (0, er.jsx)(Ur.c, {
+             children: (0, Yd.jsx)(qd.b, {
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L214)

```diff
-             children: [(0, er.jsx)(Ur.c, {
+             children: [(0, Yd.jsx)(qd.b, {
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L216)

```diff
-             }), (0, er.jsx)(Ur.c, {
+             }), (0, Yd.jsx)(qd.b, {
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L218)

```diff
-             }), (0, er.jsx)(Ur.c, {
+             }), (0, Yd.jsx)(qd.b, {
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L232)

```diff
-       } = (0, Yr.E)(), Zr = (0, fr.l)("useInventory");
+       } = (0, Td.G)(), Wd = (0, hd.j)("useInventory");
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L263` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L263) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L263)

```diff
-         }), (0, er.jsx)(Ur.c, {
+         }), (0, Yd.jsx)(qd.b, {
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L275)

```diff
-       } = (0, Nr.n)(["isTouchScreen"]), Wr = (0, tr.z)(), ar = (0, zr.c)("OpenShop"), [jr, Ir] = (0, Zr.useState)(!1), Ur = `SeenShopControls|${(0,mr.f)("connectedGame",(rr=>rr.gameNameWithVariation))}`, Yr = () => (!(0, tr.j)() || null !== (0, hr.d)("OpenShop")) && !xr.j.getItem … [truncated]
+       } = (0, Nd.p)(["isTouchScreen"]), Fd = (0, Hd.C)(), Rd = (0, bd.c)("OpenShop"), [Xd, Kd] = (0, Wd.useState)(!1), qd = `SeenShopControls|${(0,od.f)("connectedGame",(dd=>dd.gameNameWithVariation))}`, Td = () => (!(0, Hd.m)() || null !== (0, yd.d)("OpenShop")) && !td.k.getItem … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L280)

```diff
-         const Sr = Er.i.subscribe("showShopTutorial", (() => {
+         const Od = vd.j.subscribe("showShopTutorial", (() => {
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L284)

```diff
-           clearTimeout(rr), Er.i.unsubscribe(Sr)
+           clearTimeout(dd), vd.j.unsubscribe(Od)
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L288)

```diff
-       return (0, fr.h)("currencyAmounts", (rr => {
+       return (0, hd.g)("currencyAmounts", (dd => {
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L291)

```diff
-           const Zr = pr.d.get("shopInfo");
+           const Wd = Qd.e.get("shopInfo");
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L316)

```diff
-   35448: (rr, Sr, Qr) => {
+   35535: (dd, Od, md) => {
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L318)

```diff
-       c: () => ar
+       b: () => Rd
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L320-L321)

```diff
-     var Zr = Qr(5301),
-       Wr = Qr(5308);
+     var Wd = md(5197),
+       Fd = md(5206);
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L332)

```diff
-       return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
+       return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L335)

```diff
-   38056: (rr, Sr, Qr) => {
+   38143: (dd, Od, md) => {
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L337-L338` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L337-L338) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L337-L338)

```diff
-       d: () => fr,
-       h: () => Ir,
+       e: () => hd,
+       g: () => Kd,
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L341)

```diff
-     var Zr = Qr(72);
+     var Wd = md(66);
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L390)

```diff
-   38214: (rr, Sr, Qr) => {
+   38302: (dd, Od, md) => {
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L398-L401` → after: `L398-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L398-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L398-L401) · [Before (L398-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L398-L401)

```diff
-     var Zr = Qr(72),
-       Wr = Qr(4302),
-       ar = Qr(3515),
-       jr = Qr(34);
+     var Wd = md(66),
+       Fd = md(4308),
+       Rd = md(3510),
+       Xd = md(32);
```

#### 44. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L407)

```diff
-       const [Sr] = (0, Wr.e)(), [Qr, ar] = (0, Zr.useState)(!1);
+       const [Od] = (0, Fd.b)(), [md, Rd] = (0, Wd.useState)(!1);
```

#### 45. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L410-L411` → after: `L410-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L410-L411) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L410-L411)

```diff
-         const Sr = document.querySelector(`.${fr}`),
-           Qr = document.querySelector(`.${Er}`),
+         const Od = document.querySelector(`.${hd}`),
+           md = document.querySelector(`.${vd}`),
```

#### 46. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L427)

```diff
-     const xr = `.InGameUi .${fr}`,
+     const td = `.InGameUi .${hd}`,
```

#### 47. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L458-L459` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L458-L459) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L458-L459)

```diff
-             hr = Math.max(null !== (ar = null === tr || void 0 === tr ? void 0 : tr.getBoundingClientRect().bottom) && void 0 !== ar ? ar : 0, ...Ur.map((rr => rr.getBoundingClientRect().bottom))),
-             zr = null !== (jr = null === Sr || void 0 === Sr || null === (Er = Sr.offsetParent) || void 0 === Er ? void 0 : Er.getBoundingClientRect().top) && void 0 !== jr ? jr : 0;
+             yd = Math.max(null !== (Rd = null === Hd || void 0 === Hd ? void 0 : Hd.getBoundingClientRect().bottom) && void 0 !== Rd ? Rd : 0, ...qd.map((dd => dd.getBoundingClientRect().bottom))),
+             bd = null !== (Xd = null === Od || void 0 === Od || null === (vd = Od.offsetParent) || void 0 === vd ? void 0 : vd.getBoundingClientRect().top) && void 0 !== Xd ? Xd : 0;
```

#### 48. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L464)

```diff
-         const Ur = (0, jr.j)(ar.g, Er);
+         const qd = (0, Xd.l)(Rd.c, vd);
```

#### 49. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L471)

```diff
-   38175: (rr, Sr, Qr) => {
+   38259: (dd, Od, md) => {
```

#### 50. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L473-L474` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L473-L474) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L473-L474)

```diff
-       c: () => jr,
-       f: () => Wr,
+       d: () => Xd,
+       g: () => Fd,
```

#### 51. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L477)

```diff
-     var Zr = Qr(72);
+     var Wd = md(66);
```

#### 52. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L488` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L488) · [Before (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L488)

```diff
-       return `${Math.floor(rr/60)}:${String(rr%60).padStart(2,"0")}`
+       return `${Math.floor(dd/60)}:${String(dd%60).padStart(2,"0")}`
```

#### 53. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L497)

```diff
-           Qr((Sr => (null === Sr || void 0 === Sr ? void 0 : Sr.endsAt) === rr && Sr.value === Zr ? Sr : {
+           md((Od => (null === Od || void 0 === Od ? void 0 : Od.endsAt) === dd && Od.value === Wd ? Od : {
```

#### 54. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L516)

```diff
-   9937: (rr, Sr, Qr) => {
+   9965: (dd, Od, md) => {
```

#### 55. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L519-L523` → after: `L519-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L519-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L519-L523) · [Before (L519-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L519-L523)

```diff
-       h: () => Er,
-       l: () => xr,
-       p: () => pr,
-       r: () => fr,
-       u: () => Nr
+       e: () => vd,
+       i: () => td,
+       m: () => Qd,
+       q: () => hd,
+       r: () => Nd
```

#### 56. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L525-L528` → after: `L525-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L525-L528) · [Before (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L525-L528)

```diff
-     var Zr = Qr(34),
-       Wr = Qr(2156),
-       ar = Qr(1541),
-       jr = Qr(1518);
+     var Wd = md(32),
+       Fd = md(2152),
+       Rd = md(1518),
+       Xd = md(1498);
```

#### 57. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L531` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L531) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L531)

```diff
-         return (0, jr.j)() && null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getGlyphForNoaAction(rr)) && void 0 !== Sr ? Sr : null
+         return (0, Xd.m)() && null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getGlyphForNoaAction(dd)) && void 0 !== Od ? Od : null
```

#### 58. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L536` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L536) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L536)

```diff
-         return null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getPadGlyphIconName(rr)) && void 0 !== Sr ? Sr : `${fr}xbox/${rr}`
+         return null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getPadGlyphIconName(dd)) && void 0 !== Od ? Od : `${hd}xbox/${dd}`
```

#### 59. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L541)

```diff
-         return pr(rr) && null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getPadGlyphIconUrl(rr)) && void 0 !== Sr ? Sr : null
+         return Qd(dd) && null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getPadGlyphIconUrl(dd)) && void 0 !== Od ? Od : null
```

#### 60. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L543)

```diff
-       mr = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", jr.e, Wr.f, Wr.d],
+       od = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Xd.b, Fd.c, Fd.b],
```

#### 61. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L545)

```diff
-         const Sr = mr.map((Sr => Zr.i.subscribe(Sr, rr)));
+         const Od = od.map((Od => Wd.j.subscribe(Od, dd)));
```

#### 62. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L547)

```diff
-           for (const rr of Sr) Zr.i.unsubscribe(rr)
+           for (const dd of Od) Wd.j.unsubscribe(dd)
```

#### 63. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L551)

```diff
-   9818: (rr, Sr, Qr) => {
+   9850: (dd, Od, md) => {
```

#### 64. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L553-L554)

```diff
-       d: () => ar,
-       f: () => Wr
+       b: () => Rd,
+       d: () => Fd
```

#### 65. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L571)

```diff
-   40092: (rr, Sr, Qr) => {
+   40123: (dd, Od, md) => {
```

#### 66. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L573)

```diff
-       c: () => jr
+       d: () => Xd
```

#### 67. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L629)

```diff
-           Qr = Math.min(Sr > rr ? Sr : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
+           md = Math.min(Od > dd ? Od : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
```

#### 68. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L642)

```diff
-   41223: (rr, Sr, Qr) => {
+   41232: (dd, Od, md) => {
```

#### 69. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L646)

```diff
-     var Zr = Qr(208);
+     var Wd = md(218);
```

#### 70. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L648-L649` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L648-L649) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L648-L649)

```diff
-     var ar = Qr(72),
-       jr = Qr(3425),
+     var Rd = md(66),
+       Xd = md(3428),
```

#### 71. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L652-L660` → after: `L652-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L652-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L652-L660) · [Before (L652-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L652-L660)

```diff
-       Er = Qr(26),
-       pr = Qr(1518),
-       xr = Qr(43),
-       mr = Qr(1251),
-       Nr = Qr(38054),
-       Ur = Qr(1573),
-       tr = Qr(34);
-     var hr = Qr(40054),
-       zr = Qr(40045);
+       vd = md(29),
+       Qd = md(1498),
+       td = md(46),
+       od = md(1238),
+       Nd = md(38141),
+       qd = md(1566),
+       Hd = md(32);
+     var yd = md(40080),
+       bd = md(40074);
```

#### 72. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L719)

```diff
-           Er >= 0 && ar - (null !== (xr = this.bannerAt[pr]) && void 0 !== xr ? xr : -1 / 0) >= 8e3 ? (this.bannerAt[pr] = ar, this.bannerSeq++, this.setBanner({
+           vd >= 0 && Rd - (null !== (td = this.bannerAt[Qd]) && void 0 !== td ? td : -1 / 0) >= 8e3 ? (this.bannerAt[Qd] = Rd, this.bannerSeq++, this.setBanner({
```

#### 73. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L732` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L732) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L732)

```diff
-         null === rr && null === this.banner || (this.banner = rr, tr.i.Jp(Kr, rr))
+         null === dd && null === this.banner || (this.banner = dd, Hd.j.lQ(gd, dd))
```

#### 74. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L771-L772` → after: `L771-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L771-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L771-L772) · [Before (L771-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L771-L772)

```diff
-         const jr = Math.max(0, Sr.awaySpeed) * ((null !== (Zr = this.averageRoundTrip) && void 0 !== Zr ? Zr : 300) / 1e3);
-         return Sr.distance + jr > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = rr, this.ownRing = !0, this.faded = !1, 500 + (null !== (Wr = this.averageRoundTrip) && void 0 !== Wr ? Wr : 0))
+         const Xd = Math.max(0, Od.awaySpeed) * ((null !== (Wd = this.averageRoundTrip) && void 0 !== Wd ? Wd : 300) / 1e3);
+         return Od.distance + Xd > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = dd, this.ownRing = !0, this.faded = !1, 500 + (null !== (Fd = this.averageRoundTrip) && void 0 !== Fd ? Fd : 0))
```

#### 75. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L795` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L795) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L795)

```diff
-         return !("predicted" !== this.state || rr - this.predictedAt < 1200 + (null !== (Sr = this.averageRoundTrip) && void 0 !== Sr ? Sr : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(rr, rr - this.predictedAt), !this.faded)
+         return !("predicted" !== this.state || dd - this.predictedAt < 1200 + (null !== (Od = this.averageRoundTrip) && void 0 !== Od ? Od : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(dd, dd - this.predictedAt), !this.faded)
```

#### 76. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L807` → after: `L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L807) · [Before (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L807)

```diff
-         }), null !== (rr = this.averageRoundTrip) && void 0 !== rr ? rr : 0);
+         }), null !== (dd = this.averageRoundTrip) && void 0 !== dd ? dd : 0);
```

#### 77. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L818` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L818) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L818)

```diff
-         this.averageRoundTrip = null === this.averageRoundTrip ? Qr : this.averageRoundTrip + .3 * (Qr - this.averageRoundTrip), this.recentRoundTrips.push({
+         this.averageRoundTrip = null === this.averageRoundTrip ? md : this.averageRoundTrip + .3 * (md - this.averageRoundTrip), this.recentRoundTrips.push({
```

#### 78. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L857)

```diff
-           this.stopRing(), this.ring = rr, this.ringFill = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".SecretSantaRingFill")) && void 0 !== Sr ? Sr : null;
+           this.stopRing(), this.ring = dd, this.ringFill = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.querySelector(".SecretSantaRingFill")) && void 0 !== Od ? Od : null;
```

#### 79. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L869)

```diff
-         this.district.reset(), this.Jp({
+         this.district.reset(), this.lQ({
```

#### 80. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L876)

```diff
-         rr !== this.view.bells && this.Jp({
+         dd !== this.view.bells && this.lQ({
```

#### 81. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L887)

```diff
-         ar !== this.view.pulse && (this.targetFreshAt = performance.now()), this.Jp({
+         Rd !== this.view.pulse && (this.targetFreshAt = performance.now()), this.lQ({
```

#### 82. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L900)

```diff
-           Ir = null !== (Sr = rr.santaStatusTreeLitInMs) && void 0 !== Sr ? Sr : null,
+           Kd = null !== (Od = dd.santaStatusTreeLitInMs) && void 0 !== Od ? Od : null,
```

#### 83. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L902)

```diff
-         this.Jp({
+         this.lQ({
```

#### 84. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L921)

```diff
-         const Qr = this.wrap.vx(performance.now(), rr, Sr);
+         const md = this.wrap.Yt(performance.now(), dd, Od);
```

#### 85. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L937` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L937) · [Before (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L937)

```diff
-         })) && void 0 !== Sr ? Sr : null
+         })) && void 0 !== Od ? Od : null
```

#### 86. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L947-L950` → after: `L947-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L947-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L947-L950) · [Before (L947-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L947-L950)

```diff
-           return rr - hr.i
-         }(rr) / Math.PI), xr = `${fr.toFixed(1)}% ${Er.toFixed(1)}% ${pr}`;
-         xr !== this.drawnArrow && (this.drawnArrow = xr, this.arrow.style.left = `${fr.toFixed(1)}%`, this.arrow.style.top = `${Er.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${pr}deg)`), this.district.update(Qr, jr, Ir, er(Qr, Sr[0], Sr[2]), this.ma … [truncated]
-         const mr = "hunting" === (null === Zr || void 0 === Zr ? void 0 : Zr.santaHintState) ? Zr : null,
+           return dd - yd.h
+         }(dd) / Math.PI), td = `${hd.toFixed(1)}% ${vd.toFixed(1)}% ${Qd}`;
+         td !== this.drawnArrow && (this.drawnArrow = td, this.arrow.style.left = `${hd.toFixed(1)}%`, this.arrow.style.top = `${vd.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${Qd}deg)`), this.district.update(md, Xd, Kd, Yd(md, Od[0], Od[2]), this.ma … [truncated]
+         const od = "hunting" === (null === Wd || void 0 === Wd ? void 0 : Wd.santaHintState) ? Wd : null,
```

#### 87. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L967)

```diff
-         this.view = rr, document.body.classList.toggle(lr, rr.shown), document.body.classList.toggle(Pr, rr.shown && 0 !== rr.naughtyEndsAt), rr.shown && (this.clearFinishEnd(), document.body.classList.add(Xr)), tr.i.Jp(Lr, rr, !0)
+         this.view = dd, document.body.classList.toggle(Sd, dd.shown), document.body.classList.toggle(ud, dd.shown && 0 !== dd.naughtyEndsAt), dd.shown && (this.clearFinishEnd(), document.body.classList.add(sd)), Hd.j.lQ(Bd, dd, !0)
```

#### 88. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L971` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L971) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L971)

```diff
-           this.endTimer = null, this.wrap.stop(), this.Jp({
+           this.endTimer = null, this.wrap.stop(), this.lQ({
```

#### 89. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1043)

```diff
-       return 0 === rr || Sr - rr > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? Sr : Math.min(rr, Sr)
+       return 0 === dd || Od - dd > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? Od : Math.min(dd, Od)
```

#### 90. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1045` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1045) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1045)

```diff
-     var Cr = Qr(1338);
+     var nd = md(1341);
```

#### 91. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1053` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1053) · [Before (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1053)

```diff
-         } = (0, Er.n)(["isTouchScreen"]), Zr = (0, pr.z)(), {
+         } = (0, vd.p)(["isTouchScreen"]), Wd = (0, Qd.C)(), {
```

#### 92. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1055)

```diff
-         } = (0, mr.E)(), jr = (0, Ur.g)(Lr, Sr.getView()).shown, Ir = (0, Nr.k)(), [tr] = (0, ar.useState)((() => {
+         } = (0, od.G)(), Xd = (0, qd.i)(Bd, Od.getView()).shown, Kd = (0, Nd.l)(), [Hd] = (0, Rd.useState)((() => {
```

#### 93. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1057)

```diff
-           return null !== (rr = xr.j.getItem(Mr)) && void 0 !== rr ? rr : 0
+           return null !== (dd = td.k.getItem(Ld)) && void 0 !== dd ? dd : 0
```

#### 94. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1068)

```diff
-           !Kr || Ir || er.current || (er.current = !0, xr.j.setItem(Mr, tr + 1))
+           !gd || Kd || Yd.current || (Yd.current = !0, td.k.setItem(Ld, Hd + 1))
```

#### 95. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1075` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1075) · [Before (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1075)

```diff
-           children: [(0, Cr.jsx)(Nr.h, {}), (0, Cr.jsx)(Nr.d, {
+           children: [(0, nd.jsx)(Nd.j, {}), (0, nd.jsx)(Nd.e, {
```

#### 96. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1078` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1078) · [Before (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1078)

```diff
-           }), (0, Cr.jsx)(Nr.d, {
+           }), (0, nd.jsx)(Nd.e, {
```

#### 97. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1081` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1081) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1081)

```diff
-           }), Zr && (0, Cr.jsx)(Nr.d, {
+           }), Wd && (0, nd.jsx)(Nd.e, {
```

#### 98. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1087-L1092` → after: `L1087-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1087-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1087-L1092) · [Before (L1087-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1087-L1092)

```diff
-     var kr = Qr(38154),
-       Ar = Qr(4645),
-       Vr = Qr(38214),
-       ir = Qr(1171),
-       wr = Qr(1448),
-       cr = Qr(38175);
+     var zd = md(38243),
+       cd = md(4627),
+       jd = md(38302),
+       Dd = md(1170),
+       ed = md(1443),
+       Id = md(38259);
```

#### 99. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1131` → after: `L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1131) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1131)

```diff
-       } = (0, mr.E)(), Zr = (0, cr.h)(Sr);
+       } = (0, od.G)(), Wd = (0, Id.h)(Od);
```

#### 100. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1174` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1174) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1174)

```diff
-         } = (0, mr.E)(), Zr = (0, Ur.g)(Kr, Sr.district.getBanner());
+         } = (0, od.G)(), Wd = (0, qd.i)(gd, Od.district.getBanner());
```

#### 101. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1176` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1176) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1176)

```diff
-           className: fr()(sr, `District-${Zr.key}`),
+           className: hd()(dO, `District-${Wd.key}`),
```

#### 102. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1183` → after: `L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1183) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1183)

```diff
-           }), Qr(`secretSantaHud:district_${Zr.key}`)]
+           }), md(`secretSantaHud:district_${Wd.key}`)]
```

#### 103. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1186-L1187` → after: `L1186-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1186-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1186-L1187) · [Before (L1186-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1186-L1187)

```diff
-     var SS = Qr(2128),
-       QS = Qr(1317);
+     var WO = md(2125),
+       FO = md(1315);
```

#### 104. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1198)

```diff
-       } = (0, mr.E)();
+       } = (0, od.G)();
```

#### 105. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1200` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1200) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1200)

```diff
-         className: fr()("SecretSantaScarf", `Scarf-${Sr}`, Qr),
+         className: hd()("SecretSantaScarf", `Scarf-${Od}`, md),
```

#### 106. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1203` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1203) · [Before (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1203)

```diff
-         }), Zr(`secretSantaHud:scarfName_${Sr}`)]
+         }), Wd(`secretSantaHud:scarfName_${Od}`)]
```

#### 107. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1220` → after: `L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1220) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1220)

```diff
-       } = (0, mr.E)();
+       } = (0, od.G)();
```

#### 108. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1222)

```diff
-         className: fr()("SecretSantaHat", `Hat-${Sr}`, Qr),
+         className: hd()("SecretSantaHat", `Hat-${Od}`, md),
```

#### 109. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1225)

```diff
-         }), " ", Zr(`secretSantaHud:hatName_${Sr}`)]
+         }), " ", Wd(`secretSantaHud:hatName_${Od}`)]
```

#### 110. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1236)

```diff
-       } = (0, mr.E)();
+       } = (0, od.G)();
```

#### 111. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1281)

```diff
-         } = (0, mr.E)(), Nr = (0, SS.j)("hiddenPlayerNames"), Ur = null !== (Sr = null === Ir || void 0 === Ir ? void 0 : Ir.santaHintState) && void 0 !== Sr ? Sr : "none", tr = null !== (Qr = null === Ir || void 0 === Ir ? void 0 : Ir.santaHintTargetName) && void 0 !== Qr ? Qr : … [truncated]
+         } = (0, od.G)(), Nd = (0, WO.h)("hiddenPlayerNames"), qd = null !== (Od = null === Kd || void 0 === Kd ? void 0 : Kd.santaHintState) && void 0 !== Od ? Od : "none", Hd = null !== (md = null === Kd || void 0 === Kd ? void 0 : Kd.santaHintTargetName) && void 0 !== md ? md : … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1283` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1283) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1283)

```diff
-           children: (0, QS.c)(tr, Nr)
+           children: (0, FO.e)(Hd, Nd)
```

#### 113. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1297-L1298` → after: `L1297-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1297-L1298) · [Before (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1297-L1298)

```diff
-         }(null !== (Zr = null === Ir || void 0 === Ir ? void 0 : Ir.santaHintContract) && void 0 !== Zr ? Zr : 0, zr && Ir.santaHintCircleR > 0 && !Yr);
-         let er, Kr = `${Ur}-${null!==tr&&void 0!==tr?tr:""}`;
+         }(null !== (Wd = null === Kd || void 0 === Kd ? void 0 : Kd.santaHintContract) && void 0 !== Wd ? Wd : 0, bd && Kd.santaHintCircleR > 0 && !Td);
+         let Yd, gd = `${qd}-${null!==Hd&&void 0!==Hd?Hd:""}`;
```

#### 114. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1310` → after: `L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1310) · [Before (L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1310)

```diff
-           Kr += `-scarf-${Ir.santaHintScarf}-${null!==(yr=Ir.santaHintHat)&&void 0!==yr?yr:""}`, er = ES(xr("secretSantaHud:lookingFor", {
+           gd += `-scarf-${Kd.santaHintScarf}-${null!==(wd=Kd.santaHintHat)&&void 0!==wd?wd:""}`, Yd = tO(td("secretSantaHud:lookingFor", {
```

#### 115. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1315` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1315) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1315)

```diff
-             hat: null !== (Br = Ir.santaHintHat) && void 0 !== Br ? Br : null
+             hat: null !== (Ed = Kd.santaHintHat) && void 0 !== Ed ? Ed : null
```

#### 116. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1319)

```diff
-           Kr += `-district-${null!==rr&&void 0!==rr?rr:"?"}`, er = ES(xr("secretSantaHud:findIn", {
+           gd += `-district-${null!==dd&&void 0!==dd?dd:"?"}`, Yd = tO(td("secretSantaHud:findIn", {
```

#### 117. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1323` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1323) · [Before (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1323)

```diff
-             className: fr()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== rr && `District-${rr}`),
+             className: hd()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== dd && `District-${dd}`),
```

#### 118. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1326)

```diff
-             }), " ", void 0 !== rr ? xr(`secretSantaHud:district_${rr}`) : "?"]
+             }), " ", void 0 !== dd ? td(`secretSantaHud:district_${dd}`) : "?"]
```

#### 119. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1339` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1339) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1339)

```diff
-           className: fr()("SecretSantaTarget", `State-${Ur}`),
+           className: hd()("SecretSantaTarget", `State-${qd}`),
```

#### 120. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1361)

```diff
-       } = (0, mr.E)(), jr = (0, cr.h)(Qr), [Ir, fr] = (0, ar.useState)(null), [Er, pr] = (0, ar.useState)(null);
+       } = (0, od.G)(), Xd = (0, Id.h)(md), [Kd, hd] = (0, Rd.useState)(null), [vd, Qd] = (0, Rd.useState)(null);
```

#### 121. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1367)

```diff
-           pr((Qr => Qr && Qr.width === rr && Qr.height === Sr ? Qr : {
+           Qd((md => md && md.width === dd && md.height === Od ? md : {
```

#### 122. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1384` → after: `L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1384) · [Before (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1384)

```diff
-             viewBox: `0 0 ${Er.width} ${Er.height}`,
+             viewBox: `0 0 ${vd.width} ${vd.height}`,
```

#### 123. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1387` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1387) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1387)

```diff
-               d: `M${Er.width/2} 2H${Er.width-2}V${Er.height-2}H2V2Z`,
+               d: `M${vd.width/2} 2H${vd.width-2}V${vd.height-2}H2V2Z`,
```

#### 124. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1436)

```diff
-       } = (0, mr.E)(), {
+       } = (0, od.G)(), {
```

#### 125. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1441` → after: `L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1441) · [Before (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1441)

```diff
-         className: fr()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${Sr}`),
+         className: hd()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${Od}`),
```

#### 126. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1458)

```diff
-       } = (0, mr.E)(), Wr = (0, cr.h)(Sr);
+       } = (0, od.G)(), Fd = (0, Id.h)(Od);
```

#### 127. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1496` → after: `L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1496) · [Before (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1496)

```diff
-       } = (0, mr.E)(), xr = null !== (Sr = null === jr || void 0 === jr ? void 0 : jr.santaHintState) && void 0 !== Sr ? Sr : "none", Nr = "hunting" === xr && jr ? jr.santaHintDistrict : -1, Ur = null !== (Qr = null === ar || void 0 === ar ? void 0 : ar.santaMarketDistricts) && v … [truncated]
+       } = (0, od.G)(), td = null !== (Od = null === Xd || void 0 === Xd ? void 0 : Xd.santaHintState) && void 0 !== Od ? Od : "none", Nd = "hunting" === td && Xd ? Xd.santaHintDistrict : -1, qd = null !== (md = null === Rd || void 0 === Rd ? void 0 : Rd.santaMarketDistricts) && v … [truncated]
```

#### 128. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1504)

```diff
-         const [jr, Ir] = nr(rr, Qr, Zr), fr = 200 * Wr / rr.santaMarketSize, Er = YS(jr), pr = Math.sqrt(Math.max(0, (fr / 2) ** 2 - (Er - jr) ** 2)), xr = YS(Ir - pr >= 9 ? Ir - pr : Ir + pr);
+         const [Xd, Kd] = pd(dd, md, Wd), hd = 200 * Fd / dd.santaMarketSize, vd = YO(Xd), Qd = Math.sqrt(Math.max(0, (hd / 2) ** 2 - (vd - Xd) ** 2)), td = YO(Kd - Qd >= 9 ? Kd - Qd : Kd + Qd);
```

#### 129. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1516` → after: `L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1516) · [Before (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1516)

```diff
-         className: fr()("SecretSantaMinimap", `State-${xr}`, {
+         className: hd()("SecretSantaMinimap", `State-${td}`, {
```

#### 130. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1527` → after: `L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1527) · [Before (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1527)

```diff
-             className: fr()("SecretSantaDistrict", `District-${rr}`, {
+             className: hd()("SecretSantaDistrict", `District-${dd}`, {
```

#### 131. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1538` → after: `L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1538) · [Before (L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1538)

```diff
-               children: pr(`secretSantaHud:district_${rr}`)
+               children: Qd(`secretSantaHud:district_${dd}`)
```

#### 132. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1561-L1564` → after: `L1561-L1564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1561-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1561-L1564) · [Before (L1561-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1561-L1564)

```diff
-               left: `${tr.left}%`,
-               top: `${tr.top}%`,
-               width: `${tr.size}%`,
-               height: `${tr.size}%`
+               left: `${Hd.left}%`,
+               top: `${Hd.top}%`,
+               width: `${Hd.size}%`,
+               height: `${Hd.size}%`
```

#### 133. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1569-L1570` → after: `L1569-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1569-L1570) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1569-L1570)

```diff
-               left: `${tr.badgeLeft}%`,
-               top: `${tr.badgeTop}%`
+               left: `${Hd.badgeLeft}%`,
+               top: `${Hd.badgeTop}%`
```

#### 134. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1575` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1575) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1575)

```diff
-           }, `badge-${tr.contract}`)]
+           }, `badge-${Hd.contract}`)]
```

#### 135. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1623` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1623) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1623)

```diff
-         className: fr()("SecretSantaFrost", `Bells-${Sr}`),
+         className: hd()("SecretSantaFrost", `Bells-${Od}`),
```

#### 136. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1637)

```diff
-       } = (0, mr.E)();
+       } = (0, od.G)();
```

#### 137. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1639` → after: `L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1639) · [Before (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1639)

```diff
-         className: fr()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${Sr}`),
+         className: hd()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${Od}`),
```

#### 138. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1653)

```diff
-       const Qr = (0, Ur.g)(Lr, Sr.getView());
+       const md = (0, qd.i)(Bd, Od.getView());
```

#### 139. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1677` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1677) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1677)

```diff
-           }), (0, Cr.jsx)(kr.d, {
+           }), (0, nd.jsx)(zd.h, {
```

#### 140. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1699` → after: `L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1699) · [Before (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1699)

```diff
-       return (0, Ar.n)(Ir, BS), (0, Cr.jsx)("div", {
+       return (0, cd.o)(Kd, JO), (0, nd.jsx)("div", {
```

#### 141. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1731)

```diff
-       const Zr = null === Qr ? "" : `${Math.ceil(Qr)}px`;
+       const Wd = null === md ? "" : `${Math.ceil(md)}px`;
```

#### 142. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1736)

```diff
-       const Sr = document.querySelector(`.${Vr.e}`),
+       const Od = document.querySelector(`.${jd.h}`),
```

#### 143. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1738` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1738) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1738)

```diff
-       for (const ar of [document.querySelector(`.${Vr.d}`), Sr]) ar && Qr.observe(ar);
+       for (const Rd of [document.querySelector(`.${jd.e}`), Od]) Rd && md.observe(Rd);
```

#### 144. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1751-L1752` → after: `L1751-L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1751-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1751-L1752) · [Before (L1751-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1751-L1752)

```diff
-       const rr = `.${Vr.e}`,
-         Sr = document.querySelectorAll(`.${Vr.d}, ${rr} .TopRightIcon:not(.TopRightTray *), ${rr} .CondensedSocialBarInner`);
+       const dd = `.${jd.h}`,
+         Od = document.querySelectorAll(`.${jd.e}, ${dd} .TopRightIcon:not(.TopRightTray *), ${dd} .CondensedSocialBarInner`);
```

#### 145. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1765` → after: `L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1765) · [Before (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1765)

```diff
-       } = (0, mr.E)(), [fr, Er] = (0, ar.useState)(null);
+       } = (0, od.G)(), [hd, vd] = (0, Rd.useState)(null);
```

#### 146. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1792)

```diff
-                     Sr.left < Qr.right + Vr.c && Sr.right > Qr.left - Vr.c && Sr.top + Ir < Qr.bottom + 4 && Sr.bottom + Ir > Qr.top && (rr = Math.max(rr, Math.ceil(Qr.bottom + 4 - Sr.top)))
+                     Od.left < md.right + jd.d && Od.right > md.left - jd.d && Od.top + Kd < md.bottom + 4 && Od.bottom + Kd > md.top && (dd = Math.max(dd, Math.ceil(md.bottom + 4 - Od.top)))
```

#### 147. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1797)

```diff
-               Ir > 0 && (rr.style.top = `${rr.getBoundingClientRect().top+Ir}px`);
+               Kd > 0 && (dd.style.top = `${dd.getBoundingClientRect().top+Kd}px`);
```

#### 148. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1799)

```diff
-               (0, ir.f)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (Qr = Math.max(Qr, Math.ceil(rr.getBoundingClientRect().top + fr)), Sr.style.setProperty("--ss-top-bar-bottom", `${Qr}px`))
+               (0, Dd.g)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (md = Math.max(md, Math.ceil(dd.getBoundingClientRect().top + hd)), Od.style.setProperty("--ss-top-bar-bottom", `${md}px`))
```

#### 149. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1878` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1878) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1878)

```diff
-         }), (0, cr.c)(Qr)]
+         }), (0, Id.d)(md)]
```

#### 150. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1889` → after: `L1889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1889) · [Before (L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1889)

```diff
-       } = (0, mr.E)(), ar = Math.min(2, Math.max(0, Sr.santaStatusHunters)), jr = Sr.santaStatusScarf, Ir = (0, Cr.jsx)(fS, {
+       } = (0, od.G)(), Rd = Math.min(2, Math.max(0, Od.santaStatusHunters)), Xd = Od.santaStatusScarf, Kd = (0, nd.jsx)(QO, {
```

#### 151. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1930` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1930) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1930)

```diff
-     var PS = Qr(2984);
+     var VO = md(2991);
```

#### 152. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L1987)

```diff
-         blendMode: PS.e.Standard
+         blendMode: VO.g.Standard
```

#### 153. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2016)

```diff
-         blendMode: PS.e.Standard
+         blendMode: VO.g.Standard
```

#### 154. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2037` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2037) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2037)

```diff
-         blendMode: PS.e.Add
+         blendMode: VO.g.Add
```

#### 155. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2062` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2062) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2062)

```diff
-         blendMode: PS.e.Add
+         blendMode: VO.g.Add
```

#### 156. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2065)

```diff
-     var wS = Qr(109);
+     var eO = md(107);
```

#### 157. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2099` → after: `L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2099) · [Before (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2099)

```diff
-       return 1 === Sr ? rr : {
+       return 1 === Od ? dd : {
```

#### 158. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2135` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2135) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2135)

```diff
-           const [Wr, ar] = null !== (Zr = Sr[Qr]) && void 0 !== Zr ? Zr : [0, rr.rate];
+           const [Fd, Rd] = null !== (Wd = Od[md]) && void 0 !== Wd ? Wd : [0, dd.rate];
```

#### 159. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2239)

```diff
-         const jr = Zr.i.hx,
+         const Xd = Wd.i.Qt,
```

#### 160. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2254-L2256` → after: `L2254-L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2254-L2256) · [Before (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2254-L2256)

```diff
-     var QQ = Qr(40447),
-       ZQ = Qr(1364),
-       WQ = Qr(40092);
+     var Fm = md(40455),
+       Rm = md(1361),
+       Xm = md(40123);
```

#### 161. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2260-L2261` → after: `L2260-L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2260-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2260-L2261) · [Before (L2260-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2260-L2261)

```diff
-           this.jx()
-         }), 5e3), this.pacer = new WQ.c({
+           this.Wt()
+         }), 5e3), this.pacer = new Xm.d({
```

#### 162. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2266` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2266) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2266)

```diff
-             this.timer = null, this.jx()
+             this.timer = null, this.Wt()
```

#### 163. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2269-L2270` → after: `L2269-L2270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2269-L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2269-L2270) · [Before (L2269-L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2269-L2270)

```diff
-           this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.jx())
-         })), this.jx()
+           this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.Wt())
+         })), this.Wt()
```

#### 164. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2273` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2273) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2273)

```diff
-         this.sent = null, this.jx()
+         this.sent = null, this.Wt()
```

#### 165. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2280` → after: `L2280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2280) · [Before (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2280)

```diff
-         const Qr = null !== (rr = null === (Sr = (0, ZQ.U)().gameRender()) || void 0 === Sr ? void 0 : Sr.canvas.width) && void 0 !== rr ? rr : 0;
+         const md = null !== (dd = null === (Od = (0, Rm.V)().gameRender()) || void 0 === Od ? void 0 : Od.canvas.width) && void 0 !== dd ? dd : 0;
```

#### 166. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2283` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2283) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2283)

```diff
-           Wr = (0, QQ.e)(Qr),
+           Fd = (0, Fm.d)(md),
```

#### 167. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2288` → after: `L2288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2288) · [Before (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2288)

```diff
-         }, this.api.sendCommand(`santaView ${Math.round(1e3*Zr)} ${Math.round(1e3*Wr)}`)) : this.heldBack = !0)
+         }, this.api.sendCommand(`santaView ${Math.round(1e3*Wd)} ${Math.round(1e3*Fd)}`)) : this.heldBack = !0)
```

#### 168. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2291)

```diff
-     var jQ = Qr(40721);
+     var hm = md(40748);
```

#### 169. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2301` → after: `L2301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2301) · [Before (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2301)

```diff
-         sx: 900,
+         Mt: 900,
```

#### 170. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2305` → after: `L2305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2305) · [Before (L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2305)

```diff
-         sx: 360,
+         Mt: 360,
```

#### 171. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2310)

```diff
-         this.api = rr, this.tier = (0, wS.isMobile)() ? UQ : NQ, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
+         this.api = dd, this.tier = (0, eO.isMobile)() ? bm : ym, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
```

#### 172. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2323` → after: `L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2323) · [Before (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2323)

```diff
-         }), ar = Math.floor(this.tier.sx / 2)), ar > 0 && (this.system.moveTo(Wr, IQ), this.system.emit(ar))
+         }), Rd = Math.floor(this.tier.Mt / 2)), Rd > 0 && (this.system.moveTo(Fd, Qm), this.system.emit(Rd))
```

#### 173. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2342)

```diff
-           sx: this.tier.sx,
+           Mt: this.tier.Mt,
```

#### 174. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2366` → after: `L2366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2366) · [Before (L2366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2366)

```diff
-           blendMode: PS.e.Standard
+           blendMode: VO.g.Standard
```

#### 175. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2370` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2370) · [Before (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2370)

```diff
-     var hQ = Qr(38124);
+     var pm = md(38218);
```

#### 176. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2384` → after: `L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2384) · [Before (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2384)

```diff
-         } = (0, mr.E)();
+         } = (0, od.G)();
```

#### 177. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2450-L2451` → after: `L2450-L2451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2450-L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2450-L2451) · [Before (L2450-L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2450-L2451)

```diff
-         const Qr = null !== (Sr = xr.j.getItem(eQ)) && void 0 !== Sr ? Sr : 0;
-         xr.j.setItem(eQ, Qr + 1), this.introUntil = rr + (Qr < 3 ? 4900 : 3e3)
+         const md = null !== (Od = td.k.getItem(am)) && void 0 !== Od ? Od : 0;
+         td.k.setItem(am, md + 1), this.introUntil = dd + (md < 3 ? 4900 : 3e3)
```

#### 178. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2460` → after: `L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2460) · [Before (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2460)

```diff
-         (null === (Sr = this.fade) || void 0 === Sr || !Sr.isConnected) && rr - this.fadeLookedAt >= 250 && (this.fadeLookedAt = rr, this.fade = document.querySelector(`[${hQ.c}]`));
+         (null === (Od = this.fade) || void 0 === Od || !Od.isConnected) && dd - this.fadeLookedAt >= 250 && (this.fadeLookedAt = dd, this.fade = document.querySelector(`[${pm.d}]`));
```

#### 179. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2463` → after: `L2463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2463) · [Before (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2463)

```diff
-         const jr = null !== (Zr = null === (Wr = ar.backgroundColor.match(/\d+/g)) || void 0 === Wr ? void 0 : Wr.slice(0, 3).map(Number)) && void 0 !== Zr ? Zr : [];
+         const Xd = null !== (Wd = null === (Fd = Rd.backgroundColor.match(/\d+/g)) || void 0 === Fd ? void 0 : Fd.slice(0, 3).map(Number)) && void 0 !== Wd ? Wd : [];
```

#### 180. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2477` → after: `L2477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2477) · [Before (L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2477)

```diff
-         } = (0, mr.E)();
+         } = (0, od.G)();
```

#### 181. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2496` → after: `L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2496) · [Before (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2496)

```diff
-       TQ = Zr.i.Uz * Zr.i.playerEyeToHeightRatio;
+       xm = Wd.i.yb * Wd.i.playerEyeToHeightRatio;
```

#### 182. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2541)

```diff
-             const Ir = ar > 0 ? (Zr * Sr[0] + Wr * Sr[2]) / ar : 0;
+             const Kd = Rd > 0 ? (Wd * Od[0] + Fd * Od[2]) / Rd : 0;
```

#### 183. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2572` → after: `L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2572) · [Before (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2572)

```diff
-           Nr = rr, document.body.classList.add(BQ), tr = new rQ(rr, Wr), hr = new tQ(rr), zr = new SQ(rr), Yr = new aQ(rr), Ur = (0, jr.H)((0, ar.createElement)(ar.Fragment, null, (0, ar.createElement)(KS, {
+           Nd = dd, document.body.classList.add(Um), Hd = new mm(dd, Fd), yd = new Tm(dd), bd = new Wm(dd), Td = new Km(dd), qd = (0, Xd.F)((0, Rd.createElement)(Rd.Fragment, null, (0, Rd.createElement)(aO, {
```

#### 184. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2594` → after: `L2594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2594) · [Before (L2594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2594)

```diff
-           const pr = null !== (Qr = Nr) && void 0 !== Qr && Qr.readDrawnPosition(Wr, Er) ? Er : null;
+           const Qd = null !== (md = Nd) && void 0 !== md && md.readDrawnPosition(Fd, vd) ? vd : null;
```

#### 185. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2625` → after: `L2625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2625) · [Before (L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2625)

```diff
-             null === (Er = zr) || void 0 === Er || Er.vx(Sr), fr.receiveFlyover(Sr.santaFlyoverWaitMs)
+             null === (vd = bd) || void 0 === vd || vd.Yt(Od), hd.receiveFlyover(Od.santaFlyoverWaitMs)
```

#### 186. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2637` → after: `L2637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2637) · [Before (L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2637)

```diff
-   40054: (rr, Sr, Qr) => {
+   40080: (dd, Od, md) => {
```

#### 187. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2640` → after: `L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2640) · [Before (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2640)

```diff
-       i: () => Wr
+       h: () => Fd
```

#### 188. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2642-L2643` → after: `L2642-L2643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2642-L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2642-L2643) · [Before (L2642-L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2642-L2643)

```diff
-     var Zr = Qr(379);
-     const Wr = (0, Zr.ub)([0, 0, -1]),
+     var Wd = md(405);
+     const Fd = (0, Wd.rb)([0, 0, -1]),
```

#### 189. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2646` → after: `L2646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2646) · [Before (L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2646)

```diff
-         bearing: (0, Zr.ub)([0, 0, 1])
+         bearing: (0, Wd.rb)([0, 0, 1])
```

#### 190. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2649` → after: `L2649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2649) · [Before (L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2649)

```diff
-         bearing: (0, Zr.ub)([-1, 0, 0])
+         bearing: (0, Wd.rb)([-1, 0, 0])
```

#### 191. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2655` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2655) · [Before (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2655)

```diff
-         bearing: (0, Zr.ub)([1, 0, 0])
+         bearing: (0, Wd.rb)([1, 0, 0])
```

#### 192. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2658` → after: `L2658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2658) · [Before (L2658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2658)

```diff
-   40045: (rr, Sr, Qr) => {
+   40074: (dd, Od, md) => {
```

#### 193. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2663` → after: `L2663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2663) · [Before (L2663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2663)

```diff
-     var Zr = Qr(40054);
+     var Wd = md(40080);
```

#### 194. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2670` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2670) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2670)

```diff
-       const [jr, Ir] = Wr(rr, Sr, ar), fr = Zr.i - Qr;
+       const [Xd, Kd] = Fd(dd, Od, Rd), hd = Wd.h - md;
```

#### 195. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2673` → after: `L2673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2673) · [Before (L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2673)

```diff
-         transform: `rotate(${fr}rad) translate(-${jr}%, -${Ir}%)`
+         transform: `rotate(${hd}rad) translate(-${Xd}%, -${Kd}%)`
```

#### 196. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2677` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2677) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2677)

```diff
-   40721: (rr, Sr, Qr) => {
+   40748: (dd, Od, md) => {
```

#### 197. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2680` → after: `L2680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2680) · [Before (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2680)

```diff
-       d: () => ar
+       f: () => Rd
```

#### 198. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2688` → after: `L2688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2688) · [Before (L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2688)

```diff
-         this.style = rr, this.sx = Sr, this.half = Qr, this.particles = null, this.lastFrame = -1
+         this.style = dd, this.Mt = Od, this.half = md, this.particles = null, this.lastFrame = -1
```

#### 199. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2698-L2699` → after: `L2698-L2699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2698-L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2698-L2699) · [Before (L2698-L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2698-L2699)

```diff
-             texture: rr.soft ? Wr : "square_particle",
-             sx: Sr,
+             texture: dd.soft ? Fd : "square_particle",
+             Mt: Od,
```

#### 200. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2721` → after: `L2721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2721) · [Before (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2721)

```diff
-         }(this.style, this.sx), {
+         }(this.style, this.Mt), {
```

#### 201. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2732` → after: `L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2732) · [Before (L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2732)

```diff
-   40447: (rr, Sr, Qr) => {
+   40455: (dd, Od, md) => {
```

#### 202. `bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js` (Changed code · before: `L2734` → after: `L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9R2734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-aed26687035feb902677ff6483fde1d46bbbbf0489659bf6488375eceae4b9b9) · [After (L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2734) · [Before (L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-secretSanta-secretSantaClient.js#L2734)

```diff
-       e: () => ar
+       d: () => Rd
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L4-L7)

```diff
-   38154: (rr, Sr, Qr) => {
-     Qr.d(Sr, {
-       c: () => hr,
-       d: () => zr,
+   38243: (dd, Od, md) => {
+     md.d(Od, {
+       e: () => yd,
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L9-L18` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L8-L18) · [Before (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L9-L18)

```diff
-       l: () => xr
-     });
-     var Zr = Qr(35448),
-       Wr = Qr(3425),
-       ar = Qr(3429),
-       jr = Qr(9818),
-       Ir = Qr(1573),
-       fr = Qr(72),
-       Er = Qr(92),
-       pr = Qr(1338);
+       i: () => od,
+       k: () => td
+     });
+     var Wd = md(35535),
+       Fd = md(3428),
+       Rd = md(3432),
+       Xd = md(9850),
+       Kd = md(1566),
+       hd = md(66),
+       vd = md(86),
+       Qd = md(1341);
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L22-L23)

```diff
-       return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
-         children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
+       return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
+         children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L32-L33)

```diff
-       (0, Ir.g)(Wr.e, (0, Wr.w)());
-       const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
+       (0, Kd.i)(Fd.d, (0, Fd.n)());
+       const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L36-L37)

```diff
-         Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
-       }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
+         md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
+       }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L63)

```diff
-         id: `clientGameHud-${Sr}`,
+         id: `clientGameHud-${Od}`,
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L77)

```diff
-         return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
+         return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L82)

```diff
-           Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
+           Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L90)

```diff
-   5731: (rr, Sr, Qr) => {
+   5691: (dd, Od, md) => {
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L96-L102` → after: `L96-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L96-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L96-L102) · [Before (L96-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L96-L102)

```diff
-       ar = Qr(1448),
-       jr = Qr(1444),
-       Ir = Qr(4759),
-       fr = Qr(139),
-       Er = Qr(4791),
-       pr = Qr(4777),
-       xr = Qr(1338);
+       Rd = md(1443),
+       Xd = md(1436),
+       Kd = md(4734),
+       hd = md(151),
+       vd = md(4776),
+       Qd = md(4767),
+       td = md(1341);
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L109-L110` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L109-L110) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L109-L110)

```diff
-         Zr = (0, Er.g)(Sr, Qr),
-         mr = (0, Ir.f)(Zr),
+         Wd = (0, vd.i)(Od, md),
+         od = (0, Kd.g)(Wd),
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L121)

```diff
-           children: (0, xr.jsx)(pr.c, {
+           children: (0, td.jsx)(Qd.e, {
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L133-L138` → after: `L133-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L133-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L133-L138) · [Before (L133-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L133-L138)

```diff
-   35448: (rr, Sr, Qr) => {
-     Qr.d(Sr, {
-       c: () => ar
-     });
-     var Zr = Qr(5301),
-       Wr = Qr(5308);
+   35535: (dd, Od, md) => {
+     md.d(Od, {
+       b: () => Rd
+     });
+     var Wd = md(5197),
+       Fd = md(5206);
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L149-L156` → after: `L149-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L149-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L149-L156) · [Before (L149-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L149-L156)

```diff
-       return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
-     }
-   },
-   5736: (rr, Sr, Qr) => {
-     Qr.d(Sr, {
-       b: () => Ir
-     });
-     var Zr = Qr(72),
+       return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
+     }
+   },
+   5693: (dd, Od, md) => {
+     md.d(Od, {
+       e: () => Kd
+     });
+     var Wd = md(66),
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L159)

```diff
-       jr = Qr(1338);
+       Xd = md(1341);
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L185-L187` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L185-L186) · [Before (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L185-L187)

```diff
-   38214: (rr, Sr, Qr) => {
-     Qr.d(Sr, {
-       c: () => Ir,
+   38302: (dd, Od, md) => {
+     md.d(Od, {
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L193-L196` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L193-L196) · [Before (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L193-L196)

```diff
-     var Zr = Qr(72),
-       Wr = Qr(4302),
-       ar = Qr(3515),
-       jr = Qr(34);
+     var Wd = md(66),
+       Fd = md(4308),
+       Rd = md(3510),
+       Xd = md(32);
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L202)

```diff
-       const [Sr] = (0, Wr.e)(), [Qr, ar] = (0, Zr.useState)(!1);
+       const [Od] = (0, Fd.b)(), [md, Rd] = (0, Wd.useState)(!1);
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L205-L206` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L205-L206) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L205-L206)

```diff
-         const Sr = document.querySelector(`.${fr}`),
-           Qr = document.querySelector(`.${Er}`),
+         const Od = document.querySelector(`.${hd}`),
+           md = document.querySelector(`.${vd}`),
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L222)

```diff
-     const xr = `.InGameUi .${fr}`,
+     const td = `.InGameUi .${hd}`,
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L253-L254)

```diff
-             hr = Math.max(null !== (ar = null === tr || void 0 === tr ? void 0 : tr.getBoundingClientRect().bottom) && void 0 !== ar ? ar : 0, ...Ur.map((rr => rr.getBoundingClientRect().bottom))),
-             zr = null !== (jr = null === Sr || void 0 === Sr || null === (Er = Sr.offsetParent) || void 0 === Er ? void 0 : Er.getBoundingClientRect().top) && void 0 !== jr ? jr : 0;
+             yd = Math.max(null !== (Rd = null === Hd || void 0 === Hd ? void 0 : Hd.getBoundingClientRect().bottom) && void 0 !== Rd ? Rd : 0, ...qd.map((dd => dd.getBoundingClientRect().bottom))),
+             bd = null !== (Xd = null === Od || void 0 === Od || null === (vd = Od.offsetParent) || void 0 === vd ? void 0 : vd.getBoundingClientRect().top) && void 0 !== Xd ? Xd : 0;
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L259)

```diff
-         const Ur = (0, jr.j)(ar.g, Er);
+         const qd = (0, Xd.l)(Rd.c, vd);
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L266-L269` → after: `L266-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L266-L269) · [Before (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L266-L269)

```diff
-   38175: (rr, Sr, Qr) => {
-     Qr.d(Sr, {
-       c: () => jr,
-       f: () => Wr,
+   38259: (dd, Od, md) => {
+     md.d(Od, {
+       d: () => Xd,
+       g: () => Fd,
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L272)

```diff
-     var Zr = Qr(72);
+     var Wd = md(66);
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L283)

```diff
-       return `${Math.floor(rr/60)}:${String(rr%60).padStart(2,"0")}`
+       return `${Math.floor(dd/60)}:${String(dd%60).padStart(2,"0")}`
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L292)

```diff
-           Qr((Sr => (null === Sr || void 0 === Sr ? void 0 : Sr.endsAt) === rr && Sr.value === Zr ? Sr : {
+           md((Od => (null === Od || void 0 === Od ? void 0 : Od.endsAt) === dd && Od.value === Wd ? Od : {
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L311-L314` → after: `L311-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L311-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L311-L314) · [Before (L311-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L311-L314)

```diff
-   9818: (rr, Sr, Qr) => {
-     Qr.d(Sr, {
-       d: () => ar,
-       f: () => Wr
+   9850: (dd, Od, md) => {
+     md.d(Od, {
+       b: () => Rd,
+       d: () => Fd
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L331-L333` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L331-L333) · [Before (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L331-L333)

```diff
-   40092: (rr, Sr, Qr) => {
-     Qr.d(Sr, {
-       c: () => jr
+   40123: (dd, Od, md) => {
+     md.d(Od, {
+       d: () => Xd
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L389)

```diff
-           Qr = Math.min(Sr > rr ? Sr : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
+           md = Math.min(Od > dd ? Od : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L402-L404` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L402-L405) · [Before (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L402-L404)

```diff
-   38075: (rr, Sr, Qr) => {
-     Qr.d(Sr, {
-       e: () => fr,
+   38172: (dd, Od, md) => {
+     md.d(Od, {
+       d: () => hd,
+       g: () => Qd,
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L406-L411` → after: `L407-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L407-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L407-L411) · [Before (L406-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L406-L411)

```diff
-       m: () => jr,
-       q: () => xr,
-       t: () => Ir
-     });
-     var Zr = Qr(34),
-       Wr = Qr(1422);
+       j: () => td,
+       l: () => Kd
+     });
+     var Wd = md(32),
+       Fd = md(1415);
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L415)

```diff
-       return (0, Wr.e)() ? null : ar
+       return (0, Fd.c)() ? null : Rd
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js` (Changed code · before: `L427-L432` → after: `L427-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-492507b55a25b444189fa4c9adb32e623899fbf94e805bd7acbc8d99d1e8fe40) · [After (L427-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L427-L432) · [Before (L427-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-shooting-shootingClient.js#L427-L432)

```diff
-       return (0, Wr.e)() ? null : Er
-     }
- 
-     function xr(rr) {
-       return Er = rr, Zr.i.Jp(fr), () => {
-         Er === rr && (Er = null, Zr.i.Jp(fr))
+       return (0, Fd.c)() ? null : vd
+     }
+ 
+     function td(dd) {
+       return vd = dd, Wd.j.lQ(hd), () => {
+         vd === dd && (vd = null, Wd.j.lQ(hd))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-5c6793528ff932ad815182c8147cd3f4fb9ac1d11848997b2c28cdf5db120774)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-5c6793528ff932ad815182c8147cd3f4fb9ac1d11848997b2c28cdf5db120774R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-5c6793528ff932ad815182c8147cd3f4fb9ac1d11848997b2c28cdf5db120774) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js#L4)

```diff
-   41236: (rr, Sr, Qr) => {
+   41250: (dd, Od, md) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L4)

```diff
-   5642: (rr, Sr, Qr) => {
+   5609: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L6-L7)

```diff
-       c: () => hr,
-       e: () => zr
+       e: () => yd,
+       f: () => bd
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L11-L17` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L11-L17) · [Before (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L11-L17)

```diff
-       ar = Qr(72),
-       jr = Qr(1251),
-       Ir = Qr(5649),
-       fr = Qr(2057),
-       Er = Qr(3404),
-       pr = Qr(5658),
-       xr = Qr(1338);
+       Rd = md(66),
+       Xd = md(1238),
+       Kd = md(5616),
+       hd = md(2060),
+       vd = md(3403),
+       Qd = md(5620),
+       td = md(1341);
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L35-L38` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L35-L38) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L35-L38)

```diff
-           "--word-delay": `${Sr.delayMs}ms`
-         },
-         children: (0, xr.jsx)(Ir.e, {
-           text: "icon" === Sr.kind ? `[[${Sr.icon}]]` : Sr.text
+           "--word-delay": `${Od.delayMs}ms`
+         },
+         children: (0, td.jsx)(Kd.c, {
+           text: "icon" === Od.kind ? `[[${Od.icon}]]` : Od.text
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L49)

```diff
-       } = (0, jr.E)(), Zr = (0, ar.useMemo)((() => (0, pr.d)((0, pr.h)(Sr).plan.pieces)), [Sr, Qr.code]);
+       } = (0, Xd.G)(), Wd = (0, Rd.useMemo)((() => (0, Qd.c)((0, Qd.e)(Od).plan.pieces)), [Od, md.code]);
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L54)

```diff
-         children: [Sr.speakerName && (0, xr.jsx)(fr.c, {
+         children: [Od.speakerName && (0, td.jsx)(hd.d, {
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L69)

```diff
-       const rr = (0, Er.l)("dialogue");
+       const dd = (0, vd.j)("dialogue");
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L82)

```diff
-   5649: (rr, Sr, Qr) => {
+   5616: (dd, Od, md) => {
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L84)

```diff
-       e: () => Ir
+       c: () => Kd
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L86-L89)

```diff
-     var Zr = Qr(72),
-       Wr = Qr(360),
-       ar = Qr(2075),
-       jr = Qr(1338);
+     var Wd = md(66),
+       Fd = md(387),
+       Rd = md(2079),
+       Xd = md(1341);
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L97-L98` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L97-L98) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L97-L98)

```diff
-       return (0, Wr.gc)(Sr).forEach(((rr, Sr) => {
-         if ("string" === typeof rr || !(0, ar.h)(rr.icon)) return void(Ir += "string" === typeof rr ? rr : rr.icon);
+       return (0, Fd.dc)(Od).forEach(((dd, Od) => {
+         if ("string" === typeof dd || !(0, Rd.f)(dd.icon)) return void(Kd += "string" === typeof dd ? dd : dd.icon);
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L107)

```diff
-               children: (0, jr.jsx)(ar.d, {
+               children: (0, Xd.jsx)(Rd.c, {
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L119)

```diff
-   5658: (rr, Sr, Qr) => {
+   5620: (dd, Od, md) => {
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L121-L122` → after: `L121-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L121-L122) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L121-L122)

```diff
-       d: () => Rr,
-       h: () => qr
+       c: () => rd,
+       e: () => Ad
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L124-L125` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L124-L125) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L124-L125)

```diff
-     var Zr = Qr(5667),
-       Wr = Qr(360);
+     var Wd = md(5623),
+       Fd = md(387);
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L136-L138` → after: `L136-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L136-L138) · [Before (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L136-L138)

```diff
-       tr = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ur}$`),
-       hr = new RegExp(`[?\uff1f]${Ur}$`),
-       zr = new RegExp(`[!\uff01]${Ur}$`),
+       Hd = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${qd}$`),
+       yd = new RegExp(`[?\uff1f]${qd}$`),
+       bd = new RegExp(`[!\uff01]${qd}$`),
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L141-L142` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L141-L142) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L141-L142)

```diff
-       er = new RegExp(`[${nr}]`),
-       Kr = new RegExp(`[${nr}]|[^${nr}]+`, "g"),
+       Yd = new RegExp(`[${pd}]`),
+       gd = new RegExp(`[${pd}]|[^${pd}]+`, "g"),
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L157)

```diff
-       const Wr = null !== (Sr = Qr.match(yr)) && void 0 !== Sr ? Sr : [];
+       const Fd = null !== (Od = md.match(wd)) && void 0 !== Od ? Od : [];
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L160)

```diff
-         const rr = null !== (ar = null === (jr = Qr.match(/\p{L}/gu)) || void 0 === jr ? void 0 : jr.length) && void 0 !== ar ? ar : 0;
+         const dd = null !== (Rd = null === (Xd = md.match(/\p{L}/gu)) || void 0 === Xd ? void 0 : Xd.length) && void 0 !== Rd ? Rd : 0;
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L179-L180` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L179-L180) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L179-L180)

```diff
-       const Nr = Sr && (0, Zr.n)(Sr),
-         Ur = null !== (Qr = null === Nr || void 0 === Nr ? void 0 : Nr.syllableMs) && void 0 !== Qr ? Qr : Zr.e,
+       const Nd = Od && (0, Wd.k)(Od),
+         qd = null !== (md = null === Nd || void 0 === Nd ? void 0 : Nd.syllableMs) && void 0 !== md ? md : Wd.d,
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L183)

```diff
-           for (const Zr of (0, Wr.gc)(rr))
+           for (const Wd of (0, Fd.dc)(dd))
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L203)

```diff
-                 for (const Wr of null !== (Qr = rr.match(Kr)) && void 0 !== Qr ? Qr : []) {
+                 for (const Fd of null !== (md = dd.match(gd)) && void 0 !== md ? md : []) {
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L230)

```diff
-         const rr = null !== (Pr = null === (Hr = Zr.at(-1)) || void 0 === Hr ? void 0 : Hr.text) && void 0 !== Pr ? Pr : "",
+         const dd = null !== (ud = null === (Vd = Wd.at(-1)) || void 0 === Vd ? void 0 : Vd.text) && void 0 !== ud ? ud : "",
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L244)

```diff
-             jr += Br(`${vr(zr.text)}|${Wr}`) * ar.variationSemitones;
+             Xd += Ed(`${Ud(bd.text)}|${Fd}`) * Rd.variationSemitones;
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L256)

```diff
-           Xr += Zr * Ur + (tr.test(zr.text) ? jr : Yr.test(zr.text) ? ar : 0)
+           sd += Wd * qd + (Hd.test(bd.text) ? Xd : Td.test(bd.text) ? Rd : 0)
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L260)

```diff
-         pieces: nr.map((rr => "space" === rr.kind ? rr : "icon" === rr.kind ? {
+         pieces: pd.map((dd => "space" === dd.kind ? dd : "icon" === dd.kind ? {
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L272-L274` → after: `L272-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L272-L274) · [Before (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L272-L274)

```diff
-     var lr = Qr(1251),
-       Xr = Qr(1304),
-       Pr = Qr(2093);
+     var Sd = md(1238),
+       sd = md(1306),
+       ud = md(2094);
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L279-L284` → after: `L279-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L279-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L279-L284) · [Before (L279-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L279-L284)

```diff
-       return (0, lr.s)(Sr, rr.translationKey, (0, lr.p)(rr.params, Pr.b.shown))
-     }
- 
-     function qr(rr) {
-       const Sr = void 0 === rr.voice ? null : (0, Zr.p)(rr.voice),
-         Qr = Sr && (0, Zr.n)(Sr);
+       return (0, Sd.u)(Od, dd.translationKey, (0, Sd.s)(dd.params, ud.c.shown))
+     }
+ 
+     function Ad(dd) {
+       const Od = void 0 === dd.voice ? null : (0, Wd.l)(dd.voice),
+         md = Od && (0, Wd.k)(Od);
```
