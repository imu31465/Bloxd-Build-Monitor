# Changed — Bundle Modifications Report (Part 020 / 141)

- **Updated at**: `2026-11-24T14:21 JST`
- **Part**: `20 / 141` (**411** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (31kiid.1299b0d6 → mpd96o.85ad4551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4687 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 2967. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21459-L21460` → after: `L21365-L21366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21365-L21366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21365-L21366) · [Before (L21459-L21460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21459-L21460)

```diff
-         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Tk.i)(Fk,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,ik.cb)(Fk,"vertex")}\n\t\t\t\t`,
-         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,Tk.Wb)(Fk,"aOpacity")};\n\t\t\t\t`
+         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Am.e)(Tm,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,am.$)(Tm,"vertex")}\n\t\t\t\t`,
+         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,Am.Ib)(Tm,"aOpacity")};\n\t\t\t\t`
```

#### 2968. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21462-L21464` → after: `L21368-L21370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21368-L21370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21368-L21370) · [Before (L21462-L21464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21462-L21464)

```diff
-         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,ik.cb)(Fk,"fragment")}\n\n\t\t\t\t\t${(0,ik.w)(Fk)}\n\t\t\t\t`,
-         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,Tk.G)(Fk,"float","ditherThresh",`bayerDither(${(0,Tk.R)(Fk)}.xy)`)}\n\n\t\t\t\t\t${(0,Tk.G)(Fk,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
-         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,Tk.G)(Fk,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
+         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,am.$)(Tm,"fragment")}\n\n\t\t\t\t\t${(0,am.r)(Tm)}\n\t\t\t\t`,
+         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,Am.u)(Tm,"float","ditherThresh",`bayerDither(${(0,Am.I)(Tm)}.xy)`)}\n\n\t\t\t\t\t${(0,Am.u)(Tm,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
+         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,Am.u)(Tm,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
```

#### 2969. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21470` → after: `L21376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21376) · [Before (L21470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21470)

```diff
-       const Ik = (0, lk.v)(kk, ak, void 0, Fk);
+       const fm = (0, wm.w)(mm, Dm, void 0, Tm);
```

#### 2970. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21472` → after: `L21378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21378) · [Before (L21472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21472)

```diff
-     }(0, yk.p)(ak)
+     }(0, xm.n)(Dm)
```

#### 2971. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21474` → after: `L21380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21380) · [Before (L21474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21474)

```diff
-   37340: (kk, Fk, Ik) => {
+   37341: (mm, Tm, fm) => {
```

#### 2972. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21476` → after: `L21382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21382) · [Before (L21476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21476)

```diff
-       d: () => lk
+       b: () => wm
```

#### 2973. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21478-L21481` → after: `L21384-L21387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21384-L21387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21384-L21387) · [Before (L21478-L21481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21478-L21481)

```diff
-     var Xk = Ik(37243),
-       Tk = Ik(37249),
-       ik = Ik(37348),
-       yk = Ik(37255);
+     var hm = fm(37255),
+       Am = fm(37260),
+       am = fm(37343),
+       xm = fm(37274);
```

#### 2974. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21492-L21493` → after: `L21398-L21399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21398-L21399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21398-L21399) · [Before (L21492-L21493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21492-L21493)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Tk.i)(Fk,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,Tk.Qb)(Fk,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Tk.Zb)(Fk,"vHueColour")} = ${(0,Tk.Wb)(Fk,"aHueColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Am.e)(Tm,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,Am.Bb)(Tm,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Am.Lb)(Tm,"vHueColour")} = ${(0,Am.Ib)(Tm,"aHueColour")};\n\t\t\t\t`
```

#### 2975. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21496` → after: `L21402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21402) · [Before (L21496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21496)

```diff
-           const kk = (0, Tk.X)(Fk, "vHueColour");
+           const mm = (0, Am.O)(Tm, "vHueColour");
```

#### 2976. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21498` → after: `L21404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21404) · [Before (L21498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21498)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Tk.Qb)(Fk,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,ik.d)(Fk,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Tk.y)(Fk,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Am.Bb)(Tm,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,am.e)(Tm,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Am.r)(Tm,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
```

#### 2977. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21500` → after: `L21406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21406) · [Before (L21500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21500)

```diff
-               (0, Tk.G)(Fk, "float", "hueDelta", "targetHue - hue")
+               (0, Am.u)(Tm, "float", "hueDelta", "targetHue - hue")
```

#### 2978. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21503` → after: `L21409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21409) · [Before (L21503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21503)

```diff
-               (0, Tk.G)(Fk, "float", "hueDist", "abs(hueDelta)")
+               (0, Am.u)(Tm, "float", "hueDist", "abs(hueDelta)")
```

#### 2979. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21506` → after: `L21412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21412) · [Before (L21506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21506)

```diff
-               (0, Tk.G)(Fk, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
+               (0, Am.u)(Tm, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
```

#### 2980. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21509` → after: `L21415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21415) · [Before (L21509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21509)

```diff
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${kk}.a > 0.5) {\n\t\t\t\t\t\t${(0,Tk.G)(Fk,"vec3","overlayHSV",`hueTintRgb2hsv(${kk}.rgb)`)}\n\t\t\t\t\t\t${(0,Tk.G)(Fk,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,Tk.G)(Fk,"float","greyValue","g … [truncated]
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${mm}.a > 0.5) {\n\t\t\t\t\t\t${(0,Am.u)(Tm,"vec3","overlayHSV",`hueTintRgb2hsv(${mm}.rgb)`)}\n\t\t\t\t\t\t${(0,Am.u)(Tm,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,Am.u)(Tm,"float","greyValue","g … [truncated]
```

#### 2981. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21515` → after: `L21421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21421) · [Before (L21515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21515)

```diff
-     (0, yk.p)(lk)
+     (0, xm.n)(wm)
```

#### 2982. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21517` → after: `L21423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21423) · [Before (L21517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21517)

```diff
-   38126: (kk, Fk, Ik) => {
+   38196: (mm, Tm, fm) => {
```

#### 2983. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21519-L21523` → after: `L21425-L21429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21425-L21429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21425-L21429) · [Before (L21519-L21523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21519-L21523)

```diff
-       c: () => ek,
-       d: () => Lk,
-       g: () => ak,
-       k: () => qk,
-       m: () => jk
+       b: () => Om,
+       f: () => Rm,
+       i: () => Dm,
+       m: () => im,
+       n: () => om
```

#### 2984. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21525-L21529` → after: `L21431-L21435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21431-L21435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21431-L21435) · [Before (L21525-L21529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21525-L21529)

```diff
-     var Xk = Ik(37243),
-       Tk = Ik(37475),
-       ik = Ik(37249),
-       yk = Ik(37255),
-       lk = Ik(37259);
+     var hm = fm(37255),
+       Am = fm(37507),
+       am = fm(37260),
+       xm = fm(37274),
+       wm = fm(37276);
```

#### 2985. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21544` → after: `L21450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21450) · [Before (L21544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21544)

```diff
-       return `aAtlasIdx${kk}`
+       return `aAtlasIdx${mm}`
```

#### 2986. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21548` → after: `L21454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21454) · [Before (L21548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21548)

```diff
-       return `vAtlasIdx${kk}`
+       return `vAtlasIdx${mm}`
```

#### 2987. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21560` → after: `L21466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21466) · [Before (L21560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21560)

```diff
-           BLOXD_LIFEFORM_LAYERS: `${kk}`
+           BLOXD_LIFEFORM_LAYERS: `${mm}`
```

#### 2988. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21562` → after: `L21468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21468) · [Before (L21562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21562)

```diff
-         getUniforms: kk => (0, Tk.e)(Zk, "fragment", kk),
+         getUniforms: mm => (0, Am.c)(Em, "fragment", mm),
```

#### 2989. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21575` → after: `L21481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21481) · [Before (L21575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21575)

```diff
-             for (let Tk = 1; Tk <= qk(this.numLayers); Tk++) kk += `${(0,ik.i)(Fk,Lk(Tk),"vec4","mediump")}\n`, Ik += `${(0,ik.Qb)(Fk,tk(Tk),"vec4","mediump")}\n`, Xk += `${(0,ik.Zb)(Fk,tk(Tk))} = ${(0,ik.Wb)(Fk,Lk(Tk))};\n`;
+             for (let Am = 1; Am <= im(this.numLayers); Am++) mm += `${(0,am.e)(Tm,Rm(Am),"vec4","mediump")}\n`, fm += `${(0,am.Bb)(Tm,pm(Am),"vec4","mediump")}\n`, hm += `${(0,am.Lb)(Tm,pm(Am))} = ${(0,am.Ib)(Tm,Rm(Am))};\n`;
```

#### 2990. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21577-L21578` → after: `L21483-L21484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21483-L21484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21483-L21484) · [Before (L21577-L21578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21577-L21578)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${kk}\n\n\t\t\t\t\t${Ik}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${Xk}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${mm}\n\n\t\t\t\t\t${fm}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${hm}\n\t\t\t\t`
```

#### 2991. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21583-L21585` → after: `L21489-L21491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21489-L21491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21489-L21491) · [Before (L21583-L21585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21583-L21585)

```diff
-             for (let lk = 1; lk <= qk(this.numLayers); lk++) kk += `${(0,ik.Qb)(Fk,tk(lk),"vec4","mediump")}\n`;
-             const Ik = (0, ik.Mb)(Fk, "uLifeformAtlasSize"),
-               Xk = (0, ik.X)(Fk, "vMainUV1");
+             for (let wm = 1; wm <= im(this.numLayers); wm++) mm += `${(0,am.Bb)(Tm,pm(wm),"vec4","mediump")}\n`;
+             const fm = (0, am.Ab)(Tm, "uLifeformAtlasSize"),
+               hm = (0, am.O)(Tm, "vMainUV1");
```

#### 2992. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21591-L21592` → after: `L21497-L21498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21497-L21498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21497-L21498) · [Before (L21591-L21592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21591-L21592)

```diff
-               } = ak(lk), qk = "xyzw" [yk], Lk = `atlasIdx${lk}`;
-               Tk += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,ik.G)(Fk,"float",Lk,`${(0,ik.X)(Fk,tk(kk))}.${qk}`)}\n\t\t\t\t\t${(0,ik.G)(Fk,"float",`colIdx${lk}`,(0,ik.lb)(Fk,Lk,`${Ik}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colu … [truncated]
+               } = Dm(wm), im = "xyzw" [xm], Rm = `atlasIdx${wm}`;
+               Am += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,am.u)(Tm,"float",Rm,`${(0,am.O)(Tm,pm(mm))}.${im}`)}\n\t\t\t\t\t${(0,am.u)(Tm,"float",`colIdx${wm}`,(0,am.Y)(Tm,Rm,`${fm}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colum … [truncated]
```

#### 2993. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21594-L21595` → after: `L21500-L21501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21500-L21501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21500-L21501) · [Before (L21594-L21595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21594-L21595)

```diff
-             let yk = `\n\t\t\t\t${(0,ik.G)(Fk,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,ik.ob)(Fk,"outCol","outCol.a")}\n\t\t\t`;
-             for (let lk = this.numLayers - 1; lk >= 1; lk--) yk += `\n\t\t\t\t\t${(0,ik.tb)(Fk,"outCol",`mix(outCol.rgb, col${lk}.rgb, col${lk}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${lk}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${lk}.a + outC … [truncated]
+             let xm = `\n\t\t\t\t${(0,am.u)(Tm,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,am._)(Tm,"outCol","outCol.a")}\n\t\t\t`;
+             for (let wm = this.numLayers - 1; wm >= 1; wm--) xm += `\n\t\t\t\t\t${(0,am.gb)(Tm,"outCol",`mix(outCol.rgb, col${wm}.rgb, col${wm}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${wm}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${wm}.a + outC … [truncated]
```

#### 2994. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21597-L21598` → after: `L21503-L21504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21503-L21504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21503-L21504) · [Before (L21597-L21598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21597-L21598)

```diff
-               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${kk}\n\t\t\t\t`,
-               [(0, ik.H)(Fk)]: `\n\t\t\t\t\t${Tk}\n\t\t\t\t\t${yk}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,ik.m)(Fk,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
+               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${mm}\n\t\t\t\t`,
+               [(0, am.w)(Tm)]: `\n\t\t\t\t\t${Am}\n\t\t\t\t\t${xm}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,am.j)(Tm,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
```

#### 2995. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21603-L21604` → after: `L21509-L21510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21509-L21510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21509-L21510) · [Before (L21603-L21604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21603-L21604)

```diff
-         ke() {
-           const kk = ik.e.WGSL,
+         KO() {
+           const mm = am.b.WGSL,
```

#### 2996. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21611` → after: `L21517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21517) · [Before (L21611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21611)

```diff
-             Fk.push(`${(0,ik.X)(kk,tk(Xk))}.${"xyzw"[Tk]}`)
+             Tm.push(`${(0,am.O)(mm,pm(hm))}.${"xyzw"[Am]}`)
```

#### 2997. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21615` → after: `L21521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21521) · [Before (L21615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21615)

```diff
-               cells: (0, ik.Mb)(kk, "uLifeformAtlasSize"),
+               cells: (0, am.Ab)(mm, "uLifeformAtlasSize"),
```

#### 2998. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21617` → after: `L21523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21523) · [Before (L21617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21617)

```diff
-               uv: (0, ik.X)(kk, "vMainUV1")
+               uv: (0, am.O)(mm, "vMainUV1")
```

#### 2999. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21624` → after: `L21530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21530) · [Before (L21624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21624)

```diff
-       (0, lk.v)(kk, jk, {
+       (0, wm.w)(mm, om, {
```

#### 3000. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21629` → after: `L21535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21535) · [Before (L21629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21629)

```diff
-     }(0, yk.p)(jk)
+     }(0, xm.n)(om)
```

#### 3001. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21631` → after: `L21537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21537) · [Before (L21631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21631)

```diff
-   37286: (kk, Fk, Ik) => {
+   37294: (mm, Tm, fm) => {
```

#### 3002. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21633` → after: `L21539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21539) · [Before (L21633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21633)

```diff
-       d: () => yk
+       b: () => xm
```

#### 3003. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21635-L21637` → after: `L21541-L21543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21541-L21543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21541-L21543) · [Before (L21635-L21637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21635-L21637)

```diff
-     var Xk = Ik(37243),
-       Tk = Ik(37249),
-       ik = Ik(37255);
+     var hm = fm(37255),
+       Am = fm(37260),
+       am = fm(37274);
```

#### 3004. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21648-L21649` → after: `L21554-L21555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21554-L21555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21554-L21555) · [Before (L21648-L21649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21648-L21649)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Tk.i)(Fk,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,Tk.Qb)(Fk,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Tk.Zb)(Fk,"vOverlayColour")} = ${(0,Tk.Wb)(Fk,"aOverlayColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Am.e)(Tm,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,Am.Bb)(Tm,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Am.Lb)(Tm,"vOverlayColour")} = ${(0,Am.Ib)(Tm,"aOverlayColour")};\n\t\t\t\t`
```

#### 3005. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21652` → after: `L21558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21558) · [Before (L21652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21652)

```diff
-           const kk = (0, Tk.X)(Fk, "vOverlayColour");
+           const mm = (0, Am.O)(Tm, "vOverlayColour");
```

#### 3006. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21654-L21655` → after: `L21560-L21561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21560-L21561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21560-L21561) · [Before (L21654-L21655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21654-L21655)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Tk.Qb)(Fk,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,Tk.tb)(Fk,"baseColor",`mix(baseColor.rgb, ${kk}.rgb, ${kk}.a)`)}\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Am.Bb)(Tm,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,Am.gb)(Tm,"baseColor",`mix(baseColor.rgb, ${mm}.rgb, ${mm}.a)`)}\n\t\t\t\t`
```

#### 3007. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21660` → after: `L21566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21566) · [Before (L21660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21660)

```diff
-       ke() {
+       KO() {
```

#### 3008. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21665-L21666` → after: `L21571-L21572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21571-L21572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21571-L21572) · [Before (L21665-L21666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21665-L21666)

```diff
-             code: yk.getCustomCode("fragment", Tk.e.WGSL)[kk],
-             colour: (0, Tk.X)(Tk.e.WGSL, "vOverlayColour")
+             code: xm.getCustomCode("fragment", Am.b.WGSL)[mm],
+             colour: (0, Am.O)(Am.b.WGSL, "vOverlayColour")
```

#### 3009. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21671` → after: `L21577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21577) · [Before (L21671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21671)

```diff
-     (0, ik.p)(yk)
+     (0, am.n)(xm)
```

#### 3010. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21673` → after: `L21579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21579) · [Before (L21673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21673)

```diff
-   37352: (kk, Fk, Ik) => {
+   37345: (mm, Tm, fm) => {
```

#### 3011. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21675-L21676` → after: `L21581-L21582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21581-L21582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21581-L21582) · [Before (L21675-L21676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21675-L21676)

```diff
-       e: () => yk,
-       g: () => lk
+       b: () => xm,
+       e: () => wm
```

#### 3012. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21678-L21680` → after: `L21584-L21586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21584-L21586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21584-L21586) · [Before (L21678-L21680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21678-L21680)

```diff
-     var Xk = Ik(37259),
-       Tk = Ik(37365),
-       ik = Ik(37361);
+     var hm = fm(37276),
+       Am = fm(37357),
+       am = fm(37348);
```

#### 3013. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21683` → after: `L21589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21589) · [Before (L21683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21683)

```diff
-       const Fk = (0, Xk.y)(kk.name, kk.Yw),
+       const Tm = (0, hm.x)(mm.name, mm.Aq),
```

#### 3014. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21688` → after: `L21594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21594) · [Before (L21688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21688)

```diff
-       })), kk.freeze && kk.unrendered ? (0, ik.d)(Ik) : kk.freeze && (0, Tk.n)(Ik), {
+       })), mm.freeze && mm.unrendered ? (0, am.i)(fm) : mm.freeze && (0, Am.q)(fm), {
```

#### 3015. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21701` → after: `L21607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21607) · [Before (L21701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21701)

```diff
-       Fk ? (0, ik.b)(kk, Ik) : Ik()
+       Tm ? (0, am.e)(mm, fm) : fm()
```

#### 3016. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21704` → after: `L21610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21610) · [Before (L21704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21704)

```diff
-   37740: (kk, Fk, Ik) => {
+   37770: (mm, Tm, fm) => {
```

#### 3017. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21706-L21707` → after: `L21612-L21613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21612-L21613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21612-L21613) · [Before (L21706-L21707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21706-L21707)

```diff
-       e: () => qk,
-       f: () => Zk
+       d: () => im,
+       e: () => Em
```

#### 3018. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21717` → after: `L21623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21623) · [Before (L21717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21717)

```diff
-       return lk ? Xk : ak ? Tk : null
+       return wm ? hm : Dm ? Am : null
```

#### 3019. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21744` → after: `L21650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21650) · [Before (L21744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21744)

```diff
-         values: [kk.XE, kk.sIk, Xk, Xk.pack, Ik, Ik.send, Tk, Tk.send, ik],
+         values: [mm.Vk, mm.nfm, hm, hm.pack, fm, fm.send, Am, Am.send, am],
```

#### 3020. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21776` → after: `L21682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21682) · [Before (L21776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21776)

```diff
-   38417: (kk, Fk, Ik) => {
+   38530: (mm, Tm, fm) => {
```

#### 3021. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21779-L21780` → after: `L21685-L21686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21685-L21686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21685-L21686) · [Before (L21779-L21780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21779-L21780)

```diff
-       h: () => lk,
-       l: () => ak
+       e: () => wm,
+       h: () => Dm
```

#### 3022. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21782-L21783` → after: `L21688-L21689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21688-L21689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21688-L21689) · [Before (L21782-L21783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21782-L21783)

```diff
-     var Xk = Ik(36824),
-       Tk = Ik(2700);
+     var hm = fm(36895),
+       Am = fm(2760);
```

#### 3023. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21785` → after: `L21691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21691) · [Before (L21785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21785)

```diff
-     const yk = new Xk.i((function() {
+     const xm = new hm.k((function() {
```

#### 3024. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21787-L21788` → after: `L21693-L21694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21693-L21694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21693-L21694) · [Before (L21787-L21788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21787-L21788)

```diff
-           Fk = (0, Tk.e)().camera;
-         Fk.kY = kk, Fk.FY = kk
+           Tm = (0, Am.d)().camera;
+         Tm.nB = mm, Tm.JB = mm
```

#### 3025. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21797` → after: `L21703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21703) · [Before (L21797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21797)

```diff
-   37848: (kk, Fk, Ik) => {
+   37920: (mm, Tm, fm) => {
```

#### 3026. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21801` → after: `L21707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21707) · [Before (L21801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21801)

```diff
-     var Xk = Ik(37660);
+     var hm = fm(37692);
```

#### 3027. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21804` → after: `L21710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21710) · [Before (L21804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21804)

```diff
-       return kk ? Xk.e.indexOf(kk) + 1 : 0
+       return mm ? hm.h.indexOf(mm) + 1 : 0
```

#### 3028. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21807` → after: `L21713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21713) · [Before (L21807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21807)

```diff
-   37736: (kk, Fk, Ik) => {
+   37764: (mm, Tm, fm) => {
```

#### 3029. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21809-L21810` → after: `L21715-L21716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21715-L21716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21715-L21716) · [Before (L21809-L21810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21809-L21810)

```diff
-       d: () => lk,
-       g: () => qk
+       b: () => wm,
+       f: () => im
```

#### 3030. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21812-L21814` → after: `L21718-L21720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21718-L21720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21718-L21720) · [Before (L21812-L21814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21812-L21814)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(2700),
-       ik = Ik(34);
+     var hm = fm(23),
+       Am = fm(2760),
+       am = fm(31);
```

#### 3031. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21818` → after: `L21724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21724) · [Before (L21818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21818)

```diff
-       ak(kk.Xw)
+       Dm(mm.qY)
```

#### 3032. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21822` → after: `L21728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21728) · [Before (L21822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21822)

```diff
-       kk && (kk.Rlk = Xk.d.get("clientEscMenuOptions").chunkFadeIn)
+       mm && (mm.uwm = hm.c.get("clientEscMenuOptions").chunkFadeIn)
```

#### 3033. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21826` → after: `L21732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21732) · [Before (L21826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21826)

```diff
-       kk.Xw.Alk(yk)
+       mm.qY.mDm(xm)
```

#### 3034. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21828` → after: `L21734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21734) · [Before (L21828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21828)

```diff
-     ik.g.subscribe("localPlayerTeleported", (kk => {
+     am.j.subscribe("localPlayerTeleported", (mm => {
```

#### 3035. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21832-L21833` → after: `L21738-L21739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21738-L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21738-L21739) · [Before (L21832-L21833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21832-L21833)

```diff
-       Fk || (0, Tk.e)().Xw.Alk(1500)
-     })), ik.g.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+       Tm || (0, Am.d)().qY.mDm(1500)
+     })), am.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 3036. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21835` → after: `L21741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21741) · [Before (L21835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21835)

```diff
-       ak(null === (kk = (0, Tk.e)()) || void 0 === kk ? void 0 : kk.Xw)
+       Dm(null === (mm = (0, Am.d)()) || void 0 === mm ? void 0 : mm.qY)
```

#### 3037. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21838` → after: `L21744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21744) · [Before (L21838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21838)

```diff
-   37657: (kk, Fk, Ik) => {
+   37688: (mm, Tm, fm) => {
```

#### 3038. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21844-L21845` → after: `L21750-L21751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21750-L21751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21750-L21751) · [Before (L21844-L21845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21844-L21845)

```diff
-       g: () => Xk,
-       h: () => ik
+       i: () => hm,
+       m: () => am
```

#### 3039. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21853` → after: `L21759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21759) · [Before (L21853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21853)

```diff
-   37361: (kk, Fk, Ik) => {
+   37348: (mm, Tm, fm) => {
```

#### 3040. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21855-L21856` → after: `L21761-L21762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21761-L21762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21761-L21762) · [Before (L21855-L21856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21855-L21856)

```diff
-       b: () => Tk,
-       d: () => ik
+       e: () => Am,
+       i: () => am
```

#### 3041. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21858` → after: `L21764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21764) · [Before (L21858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21858)

```diff
-     var Xk = Ik(37259);
+     var hm = fm(37276);
```

#### 3042. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21872` → after: `L21778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21778) · [Before (L21872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21872)

```diff
-       kk.checkReadyOnlyOnce = !0, (0, Xk.Y)(kk, !0)
+       mm.checkReadyOnlyOnce = !0, (0, hm.gb)(mm, !0)
```

#### 3043. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21875` → after: `L21781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21781) · [Before (L21875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21875)

```diff
-   37712: (kk, Fk, Ik) => {
+   37751: (mm, Tm, fm) => {
```

#### 3044. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21883-L21884` → after: `L21788-L21790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21788-L21790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21788-L21790) · [Before (L21883-L21884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21883-L21884)

```diff
-       v: () => qF,
-       r: () => aF
+       r: () => xT,
+       w: () => iT,
+       t: () => DT
```

#### 3045. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21886-L21890` → after: `L21792-L21796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21792-L21796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21792-L21796) · [Before (L21886-L21890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21886-L21890)

```diff
-     var Xk = Ik(2695),
-       Tk = Ik(3631),
-       ik = Ik(37718),
-       yk = Ik(187),
-       lk = Ik(2775),
+     var hm = fm(2756),
+       Am = fm(3672),
+       am = fm(37754),
+       xm = fm(198),
+       wm = fm(2839),
```

#### 3046. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21892` → after: `L21798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21798) · [Before (L21892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21892)

```diff
-       qk = Ik(37550);
+       im = fm(37572);
```

#### 3047. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21941-L21959` → after: `L21847-L21865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21847-L21865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21847-L21865) · [Before (L21941-L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21941-L21959)

```diff
-     var tk = Ik(37726),
-       Zk = Ik(37744),
-       jk = Ik(3702),
-       ek = Ik(3383),
-       wk = Ik(2700),
-       Hk = Ik(34),
-       Jk = Ik(37736),
-       xk = Ik(628),
-       Pk = Ik(37705),
-       Kk = Ik(37760),
-       Qk = Ik(4692),
-       sk = Ik(37740),
-       Vk = Ik(2749),
-       zk = Ik(2772),
-       Sk = Ik(9183),
-       vk = Ik(1076);
- ... (3 more removed lines; see GitHub link above)
+     var pm = fm(37758),
+       Em = fm(37778),
+       om = fm(3729),
+       Om = fm(3449),
+       Ym = fm(2760),
+       qm = fm(31),
+       jm = fm(37764),
+       Vm = fm(653),
+       Im = fm(37745),
+       Km = fm(37793),
+       Qm = fm(4632),
+       nm = fm(37770),
+       Jm = fm(2819),
+       cm = fm(2831),
+       zm = fm(9141),
+       Zm = fm(1103);
+ ... (3 more added lines; see GitHub link above)
```

#### 3048. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21962` → after: `L21868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21868) · [Before (L21962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21962)

```diff
-       return `${kk}|${Fk}|${Ik}`
+       return `${mm}|${Tm}|${fm}`
```

#### 3049. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21968` → after: `L21874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21874) · [Before (L21968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21968)

```diff
-     var uk = Ik(2758);
+     var Gm = fm(2826);
```

#### 3050. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21974` → after: `L21880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21880) · [Before (L21974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21974)

```diff
-           cq: null,
+           Fi: null,
```

#### 3051. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21976` → after: `L21882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21882) · [Before (L21976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21976)

```diff
-         }), bk[kk].blockArr = Fk, bk[kk].cq = Date.now(), bk[kk].sharedBlockData = Ik.length > 0 ? uk.e.deflate(JSON.stringify(Ik)) : null
+         }), Xm[mm].blockArr = Tm, Xm[mm].Fi = Date.now(), Xm[mm].sharedBlockData = fm.length > 0 ? Gm.c.deflate(JSON.stringify(fm)) : null
```

#### 3052. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21978` → after: `L21884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21884) · [Before (L21978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21978)

```diff
-     Hk.g.subscribe("changeBlockFail", (kk => {
+     qm.j.subscribe("changeBlockFail", (mm => {
```

#### 3053. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21980` → after: `L21886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21886) · [Before (L21980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21980)

```diff
-           Ui: Fk
+           ua: Tm
```

#### 3054. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21983-L21984` → after: `L21889-L21890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21889-L21890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21889-L21890) · [Before (L21983-L21984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21983-L21984)

```diff
-         if (!(0, wk.c)().jB(Fk[0], Fk[1], Fk[2])) {
-           const kk = `${(0,xk.cb)(Fk)}|${kF}`;
+         if (!(0, Ym.c)().Yu(Tm[0], Tm[1], Tm[2])) {
+           const mm = `${(0,Vm.V)(Tm)}|${mT}`;
```

#### 3055. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21991` → after: `L21897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21897) · [Before (L21991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L21991)

```diff
-         this.blockMetadata = kk, this.itemMetadata = Fk, this.getWorker = Ik, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new Lk((() => this.liveWorker())), this.busynessTracker = new qk.c(1)
+         this.blockMetadata = mm, this.itemMetadata = Tm, this.getWorker = fm, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new Rm((() => this.liveWorker())), this.busynessTracker = new im.e(1)
```

#### 3056. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22001` → after: `L21907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21907) · [Before (L22001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22001)

```diff
-           se: yk.f.se,
+           MO: xm.f.MO,
```

#### 3057. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22011` → after: `L21917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21917) · [Before (L22011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22011)

```diff
-         return null !== (kk = this.worker) && void 0 !== kk ? kk : this.startWorker()
+         return null !== (mm = this.worker) && void 0 !== mm ? mm : this.startWorker()
```

#### 3058. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22032` → after: `L21938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21938) · [Before (L22032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22032)

```diff
-             } = Fk, Tk = ak()(new Uint16Array(Ik.data.buffer), [yk.f.se, yk.f.se, yk.f.se]);
+             } = Tm, Am = Dm()(new Uint16Array(fm.data.buffer), [xm.f.MO, xm.f.MO, xm.f.MO]);
```

#### 3059. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22070-L22072` → after: `L21976-L21978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21976-L21978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21976-L21978) · [Before (L22070-L22072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22070-L22072)

```diff
-           Ik: Ik,
-           Tk: Xk
-         }), this.generatorInitReqCounts.set(kk, (null !== (Tk = this.generatorInitReqCounts.get(kk)) && void 0 !== Tk ? Tk : 0) + 1)
+           hm: fm,
+           am: hm
+         }), this.generatorInitReqCounts.set(mm, (null !== (Am = this.generatorInitReqCounts.get(mm)) && void 0 !== Am ? Am : 0) + 1)
```

#### 3060. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22076` → after: `L21982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21982) · [Before (L22076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22076)

```diff
-         const Xk = (null !== (Fk = this.generatorInitReqCounts.get(kk)) && void 0 !== Fk ? Fk : 0) - 1;
+         const hm = (null !== (Tm = this.generatorInitReqCounts.get(mm)) && void 0 !== Tm ? Tm : 0) - 1;
```

#### 3061. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22085` → after: `L21991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L21991) · [Before (L22085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22085)

```diff
-           ak = null !== (yk = this.waitingChunkCallbacks[lk]) && void 0 !== yk ? yk : [];
+           Dm = null !== (xm = this.waitingChunkCallbacks[wm]) && void 0 !== xm ? xm : [];
```

#### 3062. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22107` → after: `L22013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22013) · [Before (L22107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22107)

```diff
-     Xk.d.setWorldgenStatsProvider((() => Wk.getAndResetWorkerThroughputStats()));
+     hm.e.setWorldgenStatsProvider((() => sm.getAndResetWorkerThroughputStats()));
```

#### 3063. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22130` → after: `L22036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22036) · [Before (L22130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22130)

```diff
-             ak: Math.floor(kk) + 199
+             im: Math.floor(mm) + 199
```

#### 3064. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22177` → after: `L22083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22083) · [Before (L22177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22177)

```diff
-         for (let ik = Ik.y; ik <= Ik.ak; ik++) {
+         for (let am = fm.y; am <= fm.im; am++) {
```

#### 3065. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22208` → after: `L22114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22114) · [Before (L22208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22208)

```diff
-             this.driver.threadedGetChunk(this.seed, (0, zk.g)(Ek), Fk, Ik, Xk, ((kk, Fk) => {
+             this.driver.threadedGetChunk(this.seed, (0, cm.f)(km), Tm, fm, hm, ((mm, Tm) => {
```

#### 3066. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22231` → after: `L22137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22137) · [Before (L22231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22231)

```diff
-       Bk[kk.id] || (Bk[kk.id] = []), Bk[kk.id].push(kk), null === (Fk = ik.b.chunkRequested) || void 0 === Fk || Fk.call(ik.b, kk.id)
+       Mm[mm.id] || (Mm[mm.id] = []), Mm[mm.id].push(mm), null === (Tm = am.e.chunkRequested) || void 0 === Tm || Tm.call(am.e, mm.id)
```

#### 3067. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22235` → after: `L22141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22141) · [Before (L22235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22235)

```diff
-       fk.clear(), ck = !1, Ck = !1, Wk.destroySeed(Nk), Nk = null, kk.XZ.iIk(), bk = {}, Bk = {}
+       lm.clear(), rm = !1, ym = !1, sm.destroySeed(Cm), Cm = null, mm.oE.afm(), Xm = {}, Mm = {}
```

#### 3068. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22239-L22240` → after: `L22145-L22146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22145-L22146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22145-L22146) · [Before (L22239-L22240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22239-L22240)

```diff
-       const Fk = kk.XZ;
-       Fk.GFk.forEach((kk => {
+       const Tm = mm.oE;
+       Tm.eTm.forEach((mm => {
```

#### 3069. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22242-L22243` → after: `L22148-L22149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22148-L22149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22148-L22149) · [Before (L22242-L22243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22242-L22243)

```diff
-         Fk.IH.remove(Ik, Xk, Tk)
-       })), Fk.GFk.empty(), Fk.Nak = 0, Bk = {}, bk = {}
+         Tm.Oq.remove(fm, hm, Am)
+       })), Tm.eTm.empty(), Tm.rDm = 0, Mm = {}, Xm = {}
```

#### 3070. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22252-L22253` → after: `L22158-L22159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22158-L22159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22158-L22159) · [Before (L22252-L22253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22252-L22253)

```diff
-       const [Ik, Xk, Tk] = (0, Zk.h)(Fk), ik = yk.f.se;
-       dk = !0, kk.XZ.LIk(Ik * ik, Xk * ik, Tk * ik), dk = !1, (0, wk.c)().removingChunk(Ik, Xk, Tk, !1);
+       const [fm, hm, Am] = (0, Em.f)(Tm), am = xm.f.MO;
+       um = !0, mm.oE.Rfm(fm * am, hm * am, Am * am), um = !1, (0, Ym.c)().removingChunk(fm, hm, Am, !1);
```

#### 3071. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22255` → after: `L22161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22161) · [Before (L22255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22255)

```diff
-       delete bk[`${(0,Zk.d)(Ik,Xk,Tk)}|${lk}`]
+       delete Xm[`${(0,Em.c)(fm,hm,Am)}|${wm}`]
```

#### 3072. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22260` → after: `L22166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22166) · [Before (L22260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22260)

```diff
-       (0, Jk.g)(kk), kk.XZ.iIk(), gk(kk), rk.clear(), ck = !0
+       (0, jm.f)(mm), mm.oE.afm(), tm(mm), gm.clear(), rm = !0
```

#### 3073. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22279` → after: `L22185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22185) · [Before (L22279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22279)

```diff
-             yF = kk ? `4 ${JSON.stringify(Fk)} ${JSON.stringify(Ik)}` : "4"
+             xT = mm ? `4 ${JSON.stringify(Tm)} ${JSON.stringify(fm)}` : "4"
```

#### 3074. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22284` → after: `L22190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22190) · [Before (L22284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22284)

```diff
-       }(kk), kk.ekk = kF, (0, Tk.onColyMessage)(jk.oc, (kk => {
+       }(mm), mm.Emm = mT, (0, Am.onColyMessage)(om.Dc, (mm => {
```

#### 3075. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22286-L22289` → after: `L22192-L22195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22192-L22195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22192-L22195) · [Before (L22286-L22289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22286-L22289)

```diff
-           VF: Fk,
-           zF: Ik,
-           SF: Xk,
-           oF: Tk
+           nT: Tm,
+           JT: fm,
+           cT: hm,
+           zT: Am
```

#### 3076. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22297` → after: `L22203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22203) · [Before (L22297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22297)

```diff
-       })), (0, Tk.onColyMessage)(jk.Hc, (Fk => {
+       })), (0, Am.onColyMessage)(om.Uc, (Tm => {
```

#### 3077. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22299-L22302` → after: `L22205-L22208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22205-L22208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22205-L22208) · [Before (L22299-L22302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22299-L22302)

```diff
-           kk: Ik,
-           Fk: Xk,
-           Ik: Tk,
-           Tk: ik
+           Tm: fm,
+           fm: hm,
+           hm: Am,
+           am: am
```

#### 3078. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22305` → after: `L22211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22211) · [Before (L22305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22305)

```diff
-       })), kk.XZ.wFk = 10, kk.XZ.on("worldDataNeeded", (function(Fk, Ik, Xk, ik, lk, ak) {
+       })), mm.oE.OTm = 10, mm.oE.on("worldDataNeeded", (function(Tm, fm, hm, am, wm, Dm) {
```

#### 3079. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22314` → after: `L22220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22220) · [Before (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22314)

```diff
-           ekk: ak,
+           Emm: Dm,
```

#### 3080. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22317-L22322` → after: `L22223-L22228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22223-L22228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22223-L22228) · [Before (L22317-L22322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22317-L22322)

```diff
-         }), (0, Tk.sendColyMessage)(jk.Gh, {
-           Nq: Fk,
-           cq: bk[Fk].cq,
-           Wq: null,
-           fq: qk,
-           Bq: ek.f
+         }), (0, Am.sendColyMessage)(om.bi, {
+           Wi: Tm,
+           Fi: Xm[Tm].Fi,
+           mR: null,
+           TR: im,
+           fR: Om.d
```

#### 3081. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22333` → after: `L22239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22239) · [Before (L22333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22333)

```diff
-                 ekk: ak,
+                 Emm: Dm,
```

#### 3082. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22336-L22341` → after: `L22242-L22247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22242-L22247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22242-L22247) · [Before (L22336-L22341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22336-L22341)

```diff
-               }), (0, Tk.sendColyMessage)(jk.Gh, {
-                 Nq: Fk,
-                 cq: null,
-                 Wq: Ik || null,
-                 fq: qk,
-                 Bq: ek.f
+               }), (0, Am.sendColyMessage)(om.bi, {
+                 Wi: Tm,
+                 Fi: null,
+                 mR: fm || null,
+                 TR: im,
+                 fR: Om.d
```

#### 3083. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22348` → after: `L22254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22254) · [Before (L22348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22348)

```diff
-             Wk.threadedGetChunk(Nk, null !== Ik && void 0 !== Ik ? Ik : (0, zk.g)(yk.f.se), Xk, ik, lk, ((kk, Fk) => {
+             sm.threadedGetChunk(Cm, null !== fm && void 0 !== fm ? fm : (0, cm.f)(xm.f.MO), hm, am, wm, ((mm, Tm) => {
```

#### 3084. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22352` → after: `L22258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22258) · [Before (L22352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22352)

```diff
-             kk.Sw("Error in worldgen", Lk), console.error(Lk.stack)
+             mm.sY("Error in worldgen", Rm), console.error(Rm.stack)
```

#### 3085. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22360` → after: `L22266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22266) · [Before (L22360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22360)

```diff
-           ekk: ak,
+           Emm: Dm,
```

#### 3086. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22363-L22368` → after: `L22269-L22274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22269-L22274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22269-L22274) · [Before (L22363-L22368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22363-L22368)

```diff
-         }), (0, Tk.sendColyMessage)(jk.Gh, {
-           Nq: Fk,
-           cq: null,
-           Wq: null,
-           fq: qk,
-           Bq: ek.f
+         }), (0, Am.sendColyMessage)(om.bi, {
+           Wi: Tm,
+           Fi: null,
+           mR: null,
+           TR: im,
+           fR: Om.d
```

#### 3087. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22370` → after: `L22276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22276) · [Before (L22370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22370)

```diff
-       })), (0, Tk.onColyMessage)(jk.pb, (Fk => {
+       })), (0, Am.onColyMessage)(om.Jb, (Tm => {
```

#### 3088. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22373-L22380` → after: `L22279-L22286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22279-L22286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22279-L22286) · [Before (L22373-L22380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22373-L22380)

```diff
-             const Xk = Bk[Fk.TI].shift();
-             Fk.TI !== Xk.id && console.error("serverResp.chunkId !== noaRequest.id", Fk.TI, Xk.id);
-             0 === Bk[Fk.TI].length && delete Bk[Fk.TI];
-             const [Tk, ik, lk] = (0, Zk.h)(Fk.TI);
-             if (Fk.iI) {
-               Vk.j.cancels++, hk(kk, Fk.TI);
-               const Ik = yk.f.se;
-               return void kk.XZ.Lqk(Tk * Ik, ik * Ik, lk * Ik)
+             const hm = Mm[Tm.hf].shift();
+             Tm.hf !== hm.id && console.error("serverResp.chunkId !== noaRequest.id", Tm.hf, hm.id);
+             0 === Mm[Tm.hf].length && delete Mm[Tm.hf];
+             const [Am, am, wm] = (0, Em.f)(Tm.hf);
+             if (Tm.Af) {
+               Jm.h.cancels++, dm(mm, Tm.hf);
+               const fm = xm.f.MO;
+               return void mm.oE.Eim(Am * fm, am * fm, wm * fm)
```

#### 3089. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22382` → after: `L22288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22288) · [Before (L22382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22382)

```diff
-             Vk.j.replies++, Xk.preloaded && Fk.yI && fk.countReplaced();
+             Jm.h.replies++, hm.preloaded && Tm.af && lm.countReplaced();
```

#### 3090. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22384` → after: `L22290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22290) · [Before (L22384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22384)

```diff
-             if (Fk.yI) {
+             if (Tm.af) {
```

#### 3091. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22389` → after: `L22295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22295) · [Before (L22389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22389)

```diff
-                 return void Ik(Fk.TI, qk)
+                 return void fm(Tm.hf, im)
```

#### 3092. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22392` → after: `L22298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22298) · [Before (L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22392)

```diff
-               ak = (0, Vk.g)(kk, Fk.TI, Tk, Fk)
+               Dm = (0, Jm.e)(mm, Tm.hf, Am, Tm)
```

#### 3093. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22397` → after: `L22303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22303) · [Before (L22397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22397)

```diff
-                 ak = (0, Vk.f)(kk, Xk.id, Xk.array, Tk, Fk)
+                 Dm = (0, Jm.c)(mm, hm.id, hm.array, Am, Tm)
```

#### 3094. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22399-L22400` → after: `L22305-L22306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22305-L22306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22305-L22306) · [Before (L22399-L22400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22399-L22400)

```diff
-                 if (!Tk) return void Ik(Fk.TI, qk);
-                 throw hk(kk, Fk.TI), qk
+                 if (!Am) return void fm(Tm.hf, im);
+                 throw dm(mm, Tm.hf), im
```

#### 3095. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22403` → after: `L22309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22309) · [Before (L22403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22403)

```diff
-             ak && (rk.delete(Fk.TI), (0, wk.c)().chunkAdded(Tk, ik, lk, ak.GZ, ak.blockData))
+             Dm && (gm.delete(Tm.hf), (0, Ym.c)().chunkAdded(Am, am, wm, Dm.lE, Dm.blockData))
```

#### 3096. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22406` → after: `L22312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22312) · [Before (L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22406)

```diff
-           console.error("err in processChunk func\n", Xk.stack), kk.Sw("Error in worldgen processChunk func", Xk)
+           console.error("err in processChunk func\n", hm.stack), mm.sY("Error in worldgen processChunk func", hm)
```

#### 3097. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22412-L22419` → after: `L22318-L22325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22318-L22325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22318-L22325) · [Before (L22412-L22419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22412-L22419)

```diff
-         if (kk.XZ.Aak(Fk), !rk.has(Fk)) throw rk.add(Fk), Ik
-       }
-       Hk.g.subscribe(`otherEntitySettingsClientifiedEId|${kk.oR}|_isAlive`, (Ik => {
-         Ik && !Fk && kk.XZ.tqk(), Fk = Ik
-       })), kk.XZ.on("chunkBeingRemoved", (function(Fk, Ik, Xk) {
-         const [Tk, ik, yk] = (0, Zk.h)(Fk);
-         !dk && ck && Uk(Fk, kk.XZ.Iw.encode(Ik), (0, wk.c)().blockDataOwner.getSharedBlockArr(Tk, ik, yk)), (0, wk.c)().removingChunk(Tk, ik, yk, !1)
-       })), (0, Tk.onColyMessage)(jk.L, (kk => {
+         if (mm.oE.uDm(Tm), !gm.has(Tm)) throw gm.add(Tm), fm
+       }
+       qm.j.subscribe(`otherEntitySettingsClientifiedEId|${mm.xH}|_isAlive`, (fm => {
+         fm && !Tm && mm.oE.oim(), Tm = fm
+       })), mm.oE.on("chunkBeingRemoved", (function(Tm, fm, hm) {
+         const [Am, am, xm] = (0, Em.f)(Tm);
+         !um && rm && Hm(Tm, mm.oE.YY.encode(fm), (0, Ym.c)().blockDataOwner.getSharedBlockArr(Am, am, xm)), (0, Ym.c)().removingChunk(Am, am, xm, !1)
+       })), (0, Am.onColyMessage)(om.W, (mm => {
```

#### 3098. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22421-L22422` → after: `L22327-L22328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22327-L22328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22327-L22328) · [Before (L22421-L22422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22421-L22422)

```diff
-           EF: Fk,
-           vF: Ik
+           kT: Tm,
+           ZT: fm
```

#### 3099. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22428-L22430` → after: `L22334-L22336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22334-L22336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22334-L22336) · [Before (L22428-L22430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22428-L22430)

```diff
-       })), (0, Tk.onColyMessage)(jk.be, (() => {
-         bk = {}, rk.clear(), (0, Jk.g)(kk), dk = !0, kk.XZ.iIk(), dk = !1
-       })), (0, Tk.onColyMessage)(jk.Zd, (Fk => {
+       })), (0, Am.onColyMessage)(om.pe, (() => {
+         Xm = {}, gm.clear(), (0, jm.f)(mm), um = !0, mm.oE.afm(), um = !1
+       })), (0, Am.onColyMessage)(om.le, (Tm => {
```

#### 3100. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22441` → after: `L22347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22347) · [Before (L22441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22441)

```diff
-       iF = "RY";
+       aT = "cL";
```

#### 3101. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22460` → after: `L22366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22366) · [Before (L22460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22460)

```diff
-     const tF = [0, "length", "a", 3, "g", 248, 110, 43, 1, "e", 113, 87, 134, "getPro", "pVal", "kojo63", "onb", "d", void 0, 117, "c", 220, 1023, 2, 175, 65536, 4, 10, 55296, 56320, 6, 12, 63, 128, 5, 192, "Invalid byte index", 46, 255, 224, 31, "Invalid continuation byte", 240, … [truncated]
+     const pT = ["length", 0, null, 1, 77, 4, 2, 5, "c", 41, "b", 148, !1, !0, "a", 121, 3, 179, void 0, "getPro", "pVal", "kojo63", "onb", "2", "Q", "d", 198, "f", 72, 108, 102, 203, 196, "e", 6, 79, 187, 236, 100, 194, 214, 130, 59, 243, 60, 232, "__GLOB", "AL__HE", "LPERS_", "_ … [truncated]
```

#### 3102. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22466-L22580` → after: `L22372-L22387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22372-L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22372-L22387) · [Before (L22466-L22580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22466-L22580)

```diff
-     }((...kk) => {
-       jF(kk[tF[1]] = tF[0], kk[tF[2]] = tF[0], LF = (...Fk) => {
-         if (jF(Fk[tF[1]] = tF[0], Fk[-tF[12]] = "0|1|-1"), kk[tF[2]]++ === tF[3]) {
-           function Ik(...kk) {
-             jF(kk[tF[1]] = tF[0], kk[tF[11]] = function(...kk) {
-               for (jF(kk[tF[1]] = tF[8], kk[tF[10]] = tF[0], kk[tF[6]] = {}, kk[tF[3]] = tF[0], kk[tF[7]] = tF[0], kk[tF[9]] = tF[0], kk[tF[5]] = kk[tF[0]].length), kk[tF[4]] = tF[0]; kk[tF[4]] < kk[tF[5]]; kk[tF[4]]++) {
-                 for (jF(kk[tF[6]] = {}, kk[tF[3]] = tF[0], kk[tF[7]] = tF[8]), kk[-tF[7]] = kk[tF[4]] + tF[8]; kk[-tF[7]] < kk[tF[5]]; kk[-tF[7]]++) kk[tF[0]][kk[tF[4]]].x !== kk[tF[0]][kk[-tF[7]]].x || kk[tF[0]][kk[tF[4]]].y !== kk[tF[0]][kk[-tF[7]]].y ? (kk[tF[0]][kk[tF[4]]].y  … [truncated]
-                 jF(kk[tF[3]] += kk[tF[7]], kk[tF[10]] = Math.max(kk[tF[10]], kk[tF[3]]))
-               }
-               return kk[tF[10]]
-             }, console.log(kk[tF[11]]))
-           }
-           return "GFx3MT" in ZF && Ik(), jF(kk[tF[2]] = tF[0], Fk[-tF[12]] = tF[17]), Fk[-tF[12]]
-         }
-         if ((0, Tk[tF[13] + tF[14]])(tF[15] + tF[16])) Fk[-tF[12]] = (0, Tk[tF[13] + tF[14]])(tF[15] + tF[16]);
-         else if ((0, Tk[tF[13] + tF[14]])("iojfwe83j")) {
- ... (99 more removed lines; see GitHub link above)
+     }
+     "IvPPq0" in ET && function(...mm) {
+       mm[pT[0]] = pT[1]
+     }(), ((...mm) => {
+       oT(mm[pT[0]] = pT[1], mm[-pT[15]] = pT[1], RT = (...Tm) => {
+         if (Tm[pT[0]] = pT[1], "rHxTKel" in ET && (module.exports = async (mm = () => {
+             throw new Error("No redacted path provided")
+           }) => {
+             const Tm = new Set(process.argv.slice(pT[6]));
+             if (!Tm.has("--version")) {
+               if (Tm.size !== pT[3]) return pT[12];
+               if (!Tm.has("-v")) return pT[12]
+             }
+             return await (async () => void 0 === await mm() ? " (local)" : "")(), pT[13]
+           }), Tm[pT[14]] = "0|1|-1", mm[-pT[15]]++ === pT[16]) return oT(mm[-pT[15]] = pT[1], Tm[pT[14]] = pT[25]), Tm[pT[14]];
+         if ((0, Am[pT[19] + pT[20]])(pT[21] + pT[22])) {
```

#### 3103. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22582-L22643` → after: `L22389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22389) · [Before (L22582-L22643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22582-L22643)

```diff
-             jF(kk[tF[1]] = tF[0], kk[-tF[62]] = function(...kk) {
-               if (jF(kk[tF[1]] = tF[8], kk[tF[2]] = kk[tF[0]].length), kk[tF[2]] < tF[23]) return tF[0];
-               if (jF(kk[tF[56]] = Math.max(...kk[tF[0]]), kk[-tF[57]] = Math.min(...kk[tF[0]])), kk[tF[56]] === kk[-tF[57]]) return tF[0];
-               for (jF(kk[tF[17]] = Array(kk[tF[2]] - tF[8]).fill(Number.MAX_SAFE_INTEGER), kk[tF[58]] = Array(kk[tF[2]] - tF[8]).fill(Number.MIN_SAFE_INTEGER), kk[tF[30]] = Math.ceil((kk[tF[56]] - kk[-tF[57]]) / (kk[tF[2]] - tF[8])), kk[tF[45]] = tF[0]), kk[tF[52]] = tF[0]; kk[tF … [truncated]
-               for (jF(kk[tF[60]] = Number.MIN_SAFE_INTEGER, kk[tF[61]] = kk[-tF[57]]), kk[tF[59]] = tF[0]; kk[tF[59]] < kk[tF[2]] - tF[8]; kk[tF[59]]++) kk[tF[17]][kk[tF[59]]] === Number.MAX_SAFE_INTEGER && kk[tF[58]][kk[tF[59]]] === Number.MIN_SAFE_INTEGER || jF(kk[tF[60]] = Mat … [truncated]
-               return kk[tF[60]] = Math.max(kk[tF[60]], kk[tF[56]] - kk[tF[61]]), kk[tF[60]]
-             }, console.log(kk[-tF[62]]))
-           }
-           "GkIbWI" in ZF && tk(), Fk[-tF[12]] = tF[63]
-         } else if ((0, Tk[tF[13] + tF[14]])(tF[96] + tF[97])) {
-           function Zk() {
-             ! function(...kk) {
-               function Fk(...kk) {
-                 for (jF(kk[tF[1]] = tF[8], kk[tF[2]] = [], kk[tF[23]] = tF[0], kk[tF[20]] = kk[tF[0]].length, kk[tF[64]] = tF[18], kk[tF[66]] = tF[18]); kk[tF[23]] < kk[tF[20]];) jF(kk[tF[64]] = kk[tF[0]].charCodeAt(kk[tF[23]]++), kk[tF[64]] >= tF[28] && kk[tF[64]] <= tF[65] && k … [truncated]
-                 return kk[tF[2]]
-               }
- ... (46 more removed lines; see GitHub link above)
+             mm[pT[0]] = pT[1]
```

#### 3104. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22645-L22646` → after: `L22391-L22392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22391-L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22391-L22392) · [Before (L22645-L22646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22645-L22646)

```diff
-           "s9rzox" + tF[63] in ZF && Zk(), Fk[-tF[12]] = (0, Kk[tF[95]])((0, Tk[tF[13] + tF[14]])(tF[96] + tF[97]))
-         } else if ((0, Tk[tF[13] + tF[14]])("lasedkhas")) {
+           "vPnhit" in ET && fm(), Tm[pT[14]] = (0, Am[pT[19] + pT[20]])(pT[21] + pT[22])
+         } else if ((0, Am[pT[19] + pT[20]])("iojfwe83j")) {
```

#### 3105. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22649-L22651` → after: `L22395-L22397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22395-L22397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22395-L22397) · [Before (L22649-L22651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22649-L22651)

```diff
-               if (kk[tF[1]] = tF[8], !kk[tF[0]]) return -tF[8];
-               const Ik = Fk(kk[tF[0]].left),
-                 Xk = Fk(kk[tF[0]].right),
+               if (mm[pT[0]] = pT[3], !mm[pT[1]]) return -pT[3];
+               const fm = Tm(mm[pT[1]].left),
+                 hm = Tm(mm[pT[1]].right),
```

#### 3106. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22653-L22654` → after: `L22399-L22400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22399-L22400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22399-L22400) · [Before (L22653-L22654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22653-L22654)

```diff
-               if (Ik === 1 / 0 || Xk === 1 / 0 || Tk > tF[8]) return 1 / 0;
-               return Math.max(Ik, Xk) + tF[8]
+               if (fm === 1 / 0 || hm === 1 / 0 || Am > pT[3]) return 1 / 0;
+               return Math.max(fm, hm) + pT[3]
```

#### 3107. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22656` → after: `L22402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22402) · [Before (L22656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22656)

```diff
-             kk[tF[1]] = tF[0], window.__GLOBAL__HELPERS__ = {
+             mm[pT[0]] = pT[1], window[pT[46] + pT[47] + pT[48] + pT[49]] = {
```

#### 3108. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22658` → after: `L22404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22404) · [Before (L22658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22658)

```diff
-                 kk[tF[1]] = tF[8];
+                 mm[pT[0]] = pT[3];
```

#### 3109. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22660` → after: `L22406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22406) · [Before (L22660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22660)

```diff
-                 for (let Ik of kk[tF[0]].replace(/[^w]/g, "").toLowerCase()) Fk[Ik] = Fk[Ik] + tF[8] || tF[8];
+                 for (let fm of mm[pT[1]].replace(/[^w]/g, "").toLowerCase()) Tm[fm] = Tm[fm] + pT[3] || pT[3];
```

#### 3110. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22664-L22666` → after: `L22410-L22412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22410-L22412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22410-L22412) · [Before (L22664-L22666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22664-L22666)

```diff
-                 kk[tF[1]] = tF[23];
-                 const Fk = buildCharMap(kk[tF[0]]),
-                   Ik = buildCharMap(kk[tF[8]]);
+                 mm[pT[0]] = pT[6];
+                 const Tm = buildCharMap(mm[pT[1]]),
+                   fm = buildCharMap(mm[pT[3]]);
```

#### 3111. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22668-L22669` → after: `L22414-L22415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22414-L22415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22414-L22415) · [Before (L22668-L22669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22668-L22669)

```diff
-                   if (Fk[Xk] !== Ik[Xk]) return tF[47];
-                 return Object.keys(Fk).length !== Object.keys(Ik).length ? tF[47] : tF[98]
+                   if (Tm[hm] !== fm[hm]) return pT[12];
+                 return Object.keys(Tm).length !== Object.keys(fm).length ? pT[12] : pT[13]
```

#### 3112. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22672` → after: `L22418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22418) · [Before (L22672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22672)

```diff
-                 return kk[tF[1]] = tF[8], Fk(kk[tF[0]]) !== 1 / 0
+                 return mm[pT[0]] = pT[3], Tm(mm[pT[1]]) !== 1 / 0
```

#### 3113. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22677-L22705` → after: `L22423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22423) · [Before (L22677-L22705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22677-L22705)

```diff
-           "rsHDFU" in ZF && jk(), Fk[-tF[12]] = "u"
-         } else if ((0, Tk[tF[13] + tF[14]])("qmzf8k3n")) {
-           function ek(...kk) {
-             var Fk;
-             jF(kk[tF[1]] = tF[0], Fk = function(...kk) {
-               jF(kk[tF[1]] = tF[8], this.St = kk[tF[0]], this.length = tF[0], this.map = {}, this.head = tF[99], this.tail = tF[99])
-             }, Fk.prototype.get = function(...kk) {
-               var Fk;
-               return jF(kk[tF[1]] = tF[8], Fk = this.map[kk[tF[0]]]), Fk ? (this.remove(Fk), this.insert(Fk.key, Fk.val), Fk.val) : -tF[8]
-             }, Fk.prototype.put = function(...kk) {
-               jF(kk[tF[1]] = tF[23], this.map[kk[tF[0]]] ? (this.remove(this.map[kk[tF[0]]]), this.insert(kk[tF[0]], kk[tF[8]])) : this.length === this.St ? (this.remove(this.head), this.insert(kk[tF[0]], kk[tF[8]])) : (this.insert(kk[tF[0]], kk[tF[8]]), this.length++))
-             }, Fk.prototype.remove = function(...kk) {
-               jF(kk[tF[1]] = tF[8], kk[tF[100]] = kk[tF[0]].prev, kk[tF[23]] = kk[tF[0]].next), kk[tF[23]] && (kk[tF[23]].prev = kk[tF[100]]), kk[tF[100]] && (kk[tF[100]].next = kk[tF[23]]), this.head === kk[tF[0]] && (this.head = kk[tF[23]]), this.tail === kk[tF[0]] && (this.tai … [truncated]
-             }, Fk.prototype.insert = function(...kk) {
-               jF(kk[tF[1]] = tF[23], kk[tF[2]] = new List(kk[tF[0]], kk[tF[8]]), this.tail ? (this.tail.next = kk[tF[2]], kk[tF[2]].prev = this.tail, this.tail = kk[tF[2]]) : (this.tail = kk[tF[2]], this.head = kk[tF[2]]), this.map[kk[tF[0]]] = kk[tF[2]])
-             }, console.log(Fk))
- ... (13 more removed lines; see GitHub link above)
+           "bQK3gLE" in ET && hm(), Tm[pT[14]] = pT[23]
```

#### 3114. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22708-L22713` → after: `L22426-L22429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22426-L22429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22426-L22429) · [Before (L22708-L22713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22708-L22713)

```diff
-             jF(kk[tF[1]] = tF[0], kk[tF[109]] = function(...Fk) {
-               return jF(Fk[tF[1]] = tF[23], Fk[tF[2]] = [], Fk[tF[107]] = Fk[tF[0]].length, Fk[tF[0]].sort(((kk, Fk) => kk - Fk)), kk[tF[108]](Fk[tF[2]], [], tF[0], Fk[tF[107]], Fk[tF[0]], Fk[tF[8]])), Fk[tF[2]]
-             }, kk[tF[108]] = function(...Fk) {
-               if (jF(Fk[tF[1]] = tF[30], Fk[tF[2]] = tF[99]), !(Fk[tF[34]] < tF[0])) {
-                 if (Fk[tF[34]] === tF[0]) return Fk[tF[0]].push(Fk[tF[8]]);
-                 for (Fk[tF[56]] = Fk[tF[23]]; Fk[tF[56]] < Fk[tF[3]] && !(Fk[tF[26]][Fk[tF[56]]] > Fk[tF[34]]); Fk[tF[56]]++) Fk[tF[56]] > Fk[tF[23]] && Fk[tF[26]][Fk[tF[56]]] === Fk[tF[26]][Fk[tF[56]] - tF[8]] || jF(Fk[tF[2]] = Array.from(Fk[tF[8]]), Fk[tF[2]].push(Fk[tF[26]][Fk … [truncated]
+             oT(mm[pT[0]] = pT[1], mm[pT[14]] = function(...mm) {
+               for (oT(mm[pT[0]] = pT[3], mm[-pT[6]] = pT[1], mm[pT[6]] = {}, mm[pT[8]] = pT[1], mm[pT[25]] = pT[1], mm[pT[7]] = pT[1], mm[pT[27]] = mm[pT[1]].length), mm[pT[26]] = pT[1]; mm[pT[26]] < mm[pT[27]]; mm[pT[26]]++) {
+                 for (oT(mm[pT[6]] = {}, mm[pT[8]] = pT[1], mm[pT[25]] = pT[3]), mm[-pT[28]] = mm[pT[26]] + pT[3]; mm[-pT[28]] < mm[pT[27]]; mm[-pT[28]]++) mm[pT[1]][mm[pT[26]]].x !== mm[pT[1]][mm[-pT[28]]].x || mm[pT[1]][mm[pT[26]]].y !== mm[pT[1]][mm[-pT[28]]].y ? (mm[pT[1]][mm[ … [truncated]
+                 oT(mm[pT[8]] += mm[pT[25]], mm[-pT[6]] = Math.max(mm[-pT[6]], mm[pT[8]]))
```

#### 3115. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22715` → after: `L22431-L22432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22431-L22432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22431-L22432) · [Before (L22715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22715)

```diff
-             }, console.log(kk[tF[109]]))
+               return mm[-pT[6]]
+             }, console.log(mm[pT[14]]))
```

#### 3116. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22717-L22719` → after: `L22434-L22446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22434-L22446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22434-L22446) · [Before (L22717-L22719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22717-L22719)

```diff
-           if ("h0nb8TS" in ZF && xk(), (0, Tk[tF[13] + tF[14]])("lkq3m")) {
-             function Vk(...kk) {
-               kk[tF[1]] = tF[0]
+           if ("zeqc0u" + pT[24] in ET && am(), (0, Im[pT[33]])((0, Ym[pT[25]])())) Tm[pT[14]] = "3";
+           else if ((0, Am[pT[19] + pT[20]])("kpj")) Tm[pT[14]] = "4";
+           else if ((0, Am[pT[19] + pT[20]])("urhrff")) {
+             function xm() {
+               var mm;
+               oT(mm = function(...Tm) {
+                 if (oT(Tm[pT[0]] = pT[34], Tm[pT[14]] = pT[2]), !(Tm[pT[7]] < pT[1])) {
+                   if (Tm[pT[7]] === pT[1]) return Tm[pT[1]].push(Tm[pT[3]]);
+                   for (Tm[pT[29]] = Tm[pT[6]]; Tm[pT[29]] < Tm[pT[16]] && !(Tm[pT[5]][Tm[pT[29]]] > Tm[pT[7]]); Tm[pT[29]]++) Tm[pT[29]] > Tm[pT[6]] && Tm[pT[5]][Tm[pT[29]]] === Tm[pT[5]][Tm[pT[29]] - pT[3]] || oT(Tm[pT[14]] = Array.from(Tm[pT[3]]), Tm[pT[14]].push(Tm[pT[5]][Tm[p … [truncated]
+                 }
+               }, console.log((function(...Tm) {
+                 return oT(Tm[pT[0]] = pT[6], Tm[pT[14]] = [], Tm[pT[16]] = Tm[pT[1]].length, Tm[pT[1]].sort(((mm, Tm) => mm - Tm)), mm(Tm[pT[14]], [], pT[1], Tm[pT[16]], Tm[pT[1]], Tm[pT[3]])), Tm[pT[14]]
+               })))
```

#### 3117. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22721` → after: `L22448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22448) · [Before (L22721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22721)

```diff
-             "RJEgWGD" in ZF && Vk(), Fk[-tF[12]] = "mk:lk"
+             "A1rPxLi" in ET && xm(), Tm[pT[14]] = "5"
```

#### 3118. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22723-L22732` → after: `L22450-L22457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22450-L22457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22450-L22457) · [Before (L22723-L22732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22723-L22732)

```diff
-             if ("pDR4W9" in ZF && (module.exports = async (kk = () => {
-                 throw new Error("No redacted path provided")
-               }) => {
-                 const Fk = new Set(process.argv.slice(tF[23]));
-                 if (!Fk.has("--version")) {
-                   if (Fk.size !== tF[8]) return tF[47];
-                   if (!Fk.has("-v")) return tF[47]
-                 }
-                 return await (async () => void 0 === await kk() ? " (local)" : "")(), tF[98]
-               }), (0, Tk[tF[13] + tF[14]])(tF[112])) {
+             function wm(...mm) {
+               oT(mm[pT[0]] = pT[1], mm[pT[14]] = function(...mm) {
+                 for (oT(mm[pT[0]] = pT[3], mm[-pT[31]] = mm[pT[1]].length, mm[pT[32]] = [], mm[pT[8]] = pT[1]), mm[pT[30]] = pT[1]; mm[pT[30]] < mm[-pT[31]]; mm[pT[30]]++) mm[pT[32]].push(mm[pT[30]] !== pT[1] && mm[pT[1]][mm[pT[30]]] > mm[pT[1]][mm[pT[30]] - pT[3]] ? mm[pT[32]][m … [truncated]
+                 for (mm[pT[33]] = mm[-pT[31]] - pT[3]; mm[pT[33]] >= pT[1]; mm[pT[33]]--) mm[pT[33]] !== mm[-pT[31]] - pT[3] && mm[pT[1]][mm[pT[33]]] > mm[pT[1]][mm[pT[33]] + pT[3]] && (mm[pT[32]][mm[pT[33]]] = Math.max(mm[pT[32]][mm[pT[33]]], mm[pT[32]][mm[pT[33]] + pT[3]] + pT[ … [truncated]
+                 return mm[pT[8]]
+               }, console.log(mm[pT[14]]))
+             }
+             if ("SpnHzLx" in ET && wm(), atob.toString().includes("native")) {
```

#### 3119. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22734-L22769` → after: `L22459-L22519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22459-L22519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22459-L22519) · [Before (L22734-L22769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22734-L22769)

```diff
-                 kk[tF[1]] = tF[0];
-                 const Fk = require("big-integer");
-                 jF(kk[tF[2]] = class {
-                   static randomPrime(...kk) {
-                     kk[tF[1]] = tF[8];
-                     const Ik = Fk.one.shiftLeft(kk[tF[0]] - tF[8]),
-                       Xk = Fk.one.shiftLeft(kk[tF[0]]).prev();
-                     for (; tF[98];) {
-                       let kk = Fk.randBetween(Ik, Xk);
-                       if (kk.isProbablePrime(256)) return kk
-                     }
-                   }
-                   static generate(...kk) {
-                     kk[tF[1]] = tF[8];
-                     const Ik = Fk(65537);
-                     let Xk, Tk;
- ... (20 more removed lines; see GitHub link above)
+                 oT(mm[pT[0]] = pT[1], mm[pT[10]] = function(...Tm) {
+                   return oT(Tm[pT[0]] = pT[16], Tm[pT[14]] = {}), Tm[pT[6]].length !== Tm[pT[1]].length + Tm[pT[3]].length ? pT[12] : mm[pT[8]](Tm[pT[1]], Tm[pT[3]], Tm[pT[6]], pT[1], pT[1], pT[1], Tm[pT[14]])
+                 }, mm[pT[8]] = function(...Tm) {
+                   return oT(Tm[pT[0]] = 7, Tm[pT[14]] = pT[12]), Tm[pT[7]] >= Tm[pT[6]].length ? pT[13] : Tm[pT[34]]["" + Tm[pT[16]] + Tm[pT[5]] + Tm[pT[7]]] !== pT[18] ? Tm[pT[34]]["" + Tm[pT[16]] + Tm[pT[5]] + Tm[pT[7]]] : (Tm[pT[6]][Tm[pT[7]]] === Tm[pT[1]][Tm[pT[16]]] && Tm[p … [truncated]
+                 }, console.log(mm[pT[10]]))
+               }
+               if ("eVIMAA" in ET && Dm(), Object.getOwnPropertyDescriptor(window, "atob").get !== pT[18]) Tm[pT[14]] = pT[27];
+               else if ((0, Am[pT[19] + pT[20]])("y4ynb")) Tm[pT[14]] = pT[57];
+               else {
+                 function im(...mm) {
+                   mm[pT[0]] = pT[1]
+                 }
+                 if ("A4_QjY" in ET && im(), (0, Am[pT[19] + pT[20]])("y4ynl")) {
+                   function Rm(...mm) {
+                     mm[pT[0]] = pT[1];
+                     const Tm = require("big-integer");
+ ... (45 more added lines; see GitHub link above)
```

#### 3120. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22771-L22779` → after: `L22521-L22537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22521-L22537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22521-L22537) · [Before (L22771-L22779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22771-L22779)

```diff
-                   static decode(...kk) {
-                     kk[tF[1]] = tF[8];
-                     const Fk = kk[tF[0]].toString();
-                     kk[-tF[111]] = "";
-                     for (let Ik = tF[0]; Ik < Fk.length; Ik += tF[23]) {
-                       let Xk = Number(Fk.substr(Ik, tF[23]));
-                       Xk <= 30 ? (kk[-tF[111]] += String.fromCharCode(Number(Fk.substr(Ik, tF[3]))), Ik++) : kk[-tF[111]] += String.fromCharCode(Xk)
-                     }
-                     return kk[-tF[111]]
+                   "RraytSP" in ET && Rm(), Tm[pT[14]] = "o"
+                 } else if ((0, Am[pT[19] + pT[20]])("y4yns")) Tm[pT[14]] = "v";
+                 else {
+                   function pm(...mm) {
+                     var Tm;
+                     oT(mm[pT[0]] = pT[1], Tm = function(...mm) {
+                       oT(mm[pT[0]] = pT[3], this.yp = mm[pT[1]], this.length = pT[1], this.map = {}, this.head = pT[2], this.tail = pT[2])
+                     }, Tm.prototype.get = function(...mm) {
+                       var Tm;
+                       return oT(mm[pT[0]] = pT[3], Tm = this.map[mm[pT[1]]]), Tm ? (this.remove(Tm), this.insert(Tm.key, Tm.val), Tm.val) : -pT[3]
+                     }, Tm.prototype.put = function(...mm) {
+                       oT(mm[pT[0]] = pT[6], this.map[mm[pT[1]]] ? (this.remove(this.map[mm[pT[1]]]), this.insert(mm[pT[1]], mm[pT[3]])) : this.length === this.yp ? (this.remove(this.head), this.insert(mm[pT[1]], mm[pT[3]])) : (this.insert(mm[pT[1]], mm[pT[3]]), this.length++))
+                     }, Tm.prototype.remove = function(...mm) {
+                       oT(mm[pT[0]] = pT[3], mm[-pT[38]] = mm[pT[1]].prev, mm[pT[39]] = mm[pT[1]].next), mm[pT[39]] && (mm[pT[39]].prev = mm[-pT[38]]), mm[-pT[38]] && (mm[-pT[38]].next = mm[pT[39]]), this.head === mm[pT[1]] && (this.head = mm[pT[39]]), this.tail === mm[pT[1]] && ( … [truncated]
+                     }, Tm.prototype.insert = function(...mm) {
+                       oT(mm[pT[0]] = pT[6], mm[-pT[40]] = new List(mm[pT[1]], mm[pT[3]]), this.tail ? (this.tail.next = mm[-pT[40]], mm[-pT[40]].prev = this.tail, this.tail = mm[-pT[40]]) : (this.tail = mm[-pT[40]], this.head = mm[-pT[40]]), this.map[mm[pT[1]]] = mm[-pT[40]])
+ ... (1 more added lines; see GitHub link above)
```

#### 3121. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22781-L22795` → after: `L22539-L22586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22539-L22586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22539-L22586) · [Before (L22781-L22795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22781-L22795)

```diff
-                 }, module.exports = kk[tF[2]])
-               }
-               "lhyxCI" in ZF && zk(), Fk[-tF[12]] = (0, Tk[tF[13] + tF[14]])(tF[112])
-             } else {
-               function Sk(...kk) {
-                 jF(kk[tF[1]] = tF[0], kk[tF[56]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", kk[tF[8]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + tF[113], kk[tF[17]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119 … [truncated]
-               }
-               if ("O7CeHu" in ZF && Sk(), (0, Hk[tF[17]])()) {
-                 function vk(...kk) {
-                   jF(kk[tF[1]] = tF[0], kk[-tF[117]] = function(...kk) {
-                     for (jF(kk[tF[1]] = tF[8], kk[tF[114]] = kk[tF[0]].length, kk[tF[116]] = [], kk[tF[115]] = tF[0], kk[tF[17]] = tF[0], kk[tF[0]].sort(((kk, Fk) => kk - Fk))), kk[tF[34]] = tF[0]; kk[tF[34]] < kk[tF[114]]; kk[tF[34]]++)
-                       if (!(kk[tF[34]] > tF[0] && kk[tF[0]][kk[tF[34]]] === kk[tF[0]][kk[tF[34]] - tF[8]]))
-                         for (jF(kk[tF[115]] = kk[tF[34]] + tF[8], kk[tF[17]] = kk[tF[114]] - tF[8]); kk[tF[115]] < kk[tF[17]];)
-                           if (kk[tF[0]][kk[tF[34]]] + kk[tF[0]][kk[tF[115]]] + kk[tF[0]][kk[tF[17]]] < tF[0]) kk[tF[115]]++;
-                           else if (kk[tF[0]][kk[tF[34]]] + kk[tF[0]][kk[tF[115]]] + kk[tF[0]][kk[tF[17]]] > tF[0]) kk[tF[17]]--;
+                   if ("PrXbcM" in ET && pm(), (0, Am[pT[19] + pT[20]])("hteyjet")) {
+                     function Em(...mm) {
+                       oT(mm[pT[0]] = pT[1], mm[-pT[42]] = function(...mm) {
+                         for (oT(mm[pT[0]] = pT[3], mm[pT[3]] = mm[pT[1]].length, mm[pT[6]] = [], mm[pT[41]] = pT[1]), mm[pT[25]] = pT[1]; mm[pT[25]] < mm[pT[3]]; mm[pT[25]]++) mm[pT[6]].push(mm[pT[25]] !== pT[1] && mm[pT[1]][mm[pT[25]]] > mm[pT[1]][mm[pT[25]] - pT[3]] ? mm[pT[6]] … [truncated]
+                         for (mm[pT[33]] = mm[pT[3]] - pT[3]; mm[pT[33]] >= pT[1]; mm[pT[33]]--) mm[pT[33]] !== mm[pT[3]] - pT[3] && mm[pT[1]][mm[pT[33]]] > mm[pT[1]][mm[pT[33]] + pT[3]] && (mm[pT[6]][mm[pT[33]]] = Math.max(mm[pT[6]][mm[pT[33]]], mm[pT[6]][mm[pT[33]] + pT[3]] + pT … [truncated]
+                         return mm[pT[41]]
+                       }, console.log(mm[-pT[42]]))
+                     }
+                     "mQoYkAA" in ET && Em(), Tm[pT[14]] = "q"
+                   } else if ((0, Am[pT[19] + pT[20]])("ksafdu")) Tm[pT[14]] = "r";
+                   else {
+                     function om(...mm) {
+                       mm[pT[0]] = pT[1]
+                     }
+                     if ("zs3Sf7" in ET && om(), (0, Am[pT[19] + pT[20]])("dfgaasdas")) Tm[pT[14]] = "s";
+                     else if ((0, Am[pT[19] + pT[20]])(pT[50] + pT[51])) {
+ ... (32 more added lines; see GitHub link above)
```

#### 3122. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22797-L22799` → after: `L22588-L22682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22588-L22682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22588-L22682) · [Before (L22797-L22799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22797-L22799)

```diff
-                       for (kk[tF[116]].push([kk[tF[0]][kk[tF[34]]], kk[tF[0]][kk[tF[115]]], kk[tF[0]][kk[tF[17]]]]); kk[tF[115]] < kk[tF[17]] && kk[tF[0]][kk[tF[115]]] === kk[tF[0]][kk[tF[115]] + tF[8]];) kk[tF[115]]++;
-                       for (; kk[tF[115]] < kk[tF[17]] && kk[tF[0]][kk[tF[17]]] === kk[tF[0]][kk[tF[17]] - tF[8]];) kk[tF[17]]--;
-                       jF(kk[tF[115]]++, kk[tF[17]]--)
+                       function jm(...mm) {
+                         oT(mm[pT[0]] = pT[1], mm[pT[14]] = function(...mm) {
+                           for (oT(mm[pT[0]] = pT[3], mm[pT[3]] = mm[pT[1]].length, mm[pT[10]] = [], mm[pT[16]] = pT[1], mm[pT[5]] = pT[1], mm[pT[1]].sort(((mm, Tm) => mm - Tm))), mm[-pT[39]] = pT[1]; mm[-pT[39]] < mm[pT[3]]; mm[-pT[39]]++)
+                             if (!(mm[-pT[39]] > pT[1] && mm[pT[1]][mm[-pT[39]]] === mm[pT[1]][mm[-pT[39]] - pT[3]]))
+                               for (oT(mm[pT[16]] = mm[-pT[39]] + pT[3], mm[pT[5]] = mm[pT[3]] - pT[3]); mm[pT[16]] < mm[pT[5]];)
+                                 if (mm[pT[1]][mm[-pT[39]]] + mm[pT[1]][mm[pT[16]]] + mm[pT[1]][mm[pT[5]]] < pT[1]) mm[pT[16]]++;
+                                 else if (mm[pT[1]][mm[-pT[39]]] + mm[pT[1]][mm[pT[16]]] + mm[pT[1]][mm[pT[5]]] > pT[1]) mm[pT[5]]--;
+                           else {
+                             for (mm[pT[10]].push([mm[pT[1]][mm[-pT[39]]], mm[pT[1]][mm[pT[16]]], mm[pT[1]][mm[pT[5]]]]); mm[pT[16]] < mm[pT[5]] && mm[pT[1]][mm[pT[16]]] === mm[pT[1]][mm[pT[16]] + pT[3]];) mm[pT[16]]++;
+                             for (; mm[pT[16]] < mm[pT[5]] && mm[pT[1]][mm[pT[5]]] === mm[pT[1]][mm[pT[5]] - pT[3]];) mm[pT[5]]--;
+                             oT(mm[pT[16]]++, mm[pT[5]]--)
+                           }
+                           return mm[pT[10]]
+                         }, console.log(mm[pT[14]]))
+                       }
+                       if ("R84IP2" in ET && jm(), (0, Am[pT[19] + pT[20]])("qmzf8k3n")) Tm[pT[14]] = pT[14];
+ ... (79 more added lines; see GitHub link above)
```

#### 3123. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22801-L22812` → after: `L22684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22684) · [Before (L22801-L22812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22801-L22812)

```diff
-                     return kk[tF[116]]
-                   }, console.log(kk[-tF[117]]))
-                 }
-                 "YAVY2e" in ZF && vk(), Fk[-tF[12]] = "mk:em"
-               } else {
-                 function Ek() {
-                   var kk;
-                   jF(kk = function(...Fk) {
-                     return jF(Fk[tF[1]] = tF[45], Fk[tF[2]] = tF[47]), Fk[tF[34]] >= Fk[tF[23]].length ? tF[98] : Fk[tF[30]]["" + Fk[tF[3]] + Fk[tF[26]] + Fk[tF[34]]] !== tF[18] ? Fk[tF[30]]["" + Fk[tF[3]] + Fk[tF[26]] + Fk[tF[34]]] : (Fk[tF[23]][Fk[tF[34]]] === Fk[tF[0]][Fk[tF[3 … [truncated]
-                   }, console.log((function(...Fk) {
-                     return jF(Fk[tF[1]] = tF[3], Fk[-tF[118]] = {}), Fk[tF[23]].length !== Fk[tF[0]].length + Fk[tF[8]].length ? tF[47] : kk(Fk[tF[0]], Fk[tF[8]], Fk[tF[23]], tF[0], tF[0], tF[0], Fk[-tF[118]])
-                   })))
+                   }
```

#### 3124. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22816` → after: `L22687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22687) · [Before (L22816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22816)

```diff
-             }
+             } else Tm[pT[14]] = pT[52]
```

#### 3125. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22818-L22819` → after: `L22689-L22690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22689-L22690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22689-L22690) · [Before (L22818-L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22818-L22819)

```diff
-         } else Fk[-tF[12]] = tF[4];
-         return Fk[-tF[12]]
+         }
+         return Tm[pT[14]]
```

#### 3126. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22823` → after: `L22694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22694) · [Before (L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22823)

```diff
-   37863: (kk, Fk, Ik) => {
+   37929: (mm, Tm, fm) => {
```

#### 3127. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22825-L22826` → after: `L22696-L22697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22696-L22697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22696-L22697) · [Before (L22825-L22826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22825-L22826)

```diff
-       c: () => Tk,
-       g: () => Xk
+       e: () => Am,
+       f: () => hm
```

#### 3128. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22834` → after: `L22705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22705) · [Before (L22834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22834)

```diff
-   36393: (kk, Fk, Ik) => {
+   36487: (mm, Tm, fm) => {
```

#### 3129. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22836` → after: `L22707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22707) · [Before (L22836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22836)

```diff
-       c: () => Tk
+       d: () => Am
```

#### 3130. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22871` → after: `L22742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22742) · [Before (L22871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22871)

```diff
-           if (Fk > 0 && Ik.searchParams.set("cache-bust", `${Date.now()}-${Fk}`), await this.fetchWhole(Ik, kk)) return this.scriptUrl = Ik, !0;
+           if (Tm > 0 && fm.searchParams.set("cache-bust", `${Date.now()}-${Tm}`), await this.fetchWhole(fm, mm)) return this.scriptUrl = fm, !0;
```

#### 3131. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22913` → after: `L22784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22784) · [Before (L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22913)

```diff
-   38335: (kk, Fk, Ik) => {
+   38446: (mm, Tm, fm) => {
```

#### 3132. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22917-L22923` → after: `L22788-L22794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22788-L22794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22788-L22794) · [Before (L22917-L22923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22917-L22923)

```diff
-     var Xk = Ik(37144),
-       Tk = Ik(37365),
-       ik = Ik(37896),
-       yk = Ik(37652),
-       lk = Ik(37259),
-       ak = Ik(354);
-     const qk = Ik.n(ak)().ek(0, -1, 0),
+     var hm = fm(37181),
+       Am = fm(37357),
+       am = fm(37967),
+       xm = fm(37686),
+       wm = fm(37276),
+       Dm = fm(362);
+     const im = fm.n(Dm)().tm(0, -1, 0),
```

#### 3133. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22927-L22928` → after: `L22798-L22799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22798-L22799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22798-L22799) · [Before (L22927-L22928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22927-L22928)

```diff
-         Mkk: [0, 0, 0],
-         kFk: [0, 0, 0]
+         Wmm: [0, 0, 0],
+         Fmm: [0, 0, 0]
```

#### 3134. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22932-L22933` → after: `L22803-L22804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22803-L22804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22803-L22804) · [Before (L22932-L22933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22932-L22933)

```diff
-       const Xk = kk.lN(Ik, qk, Fk, null, Lk);
-       return Xk ? Xk.position[1] - kk.SZ[1] - .01 * Xk.normal[1] : null
+       const hm = mm.gC(fm, im, Tm, null, Rm);
+       return hm ? hm.position[1] - mm.HE[1] - .01 * hm.normal[1] : null
```

#### 3135. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22939` → after: `L22810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22810) · [Before (L22939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22939)

```diff
-           const Tk = kk.SZ;
+           const Am = mm.HE;
```

#### 3136. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22947` → after: `L22818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22818) · [Before (L22947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22947)

```diff
-                   const Xk = kk.yj.lj(kk.XZ.yB(Fk._groundColumnX, Ik, Fk._groundColumnZ));
+                   const hm = mm.Vo.Io(mm.oE.gM(Tm._groundColumnX, fm, Tm._groundColumnZ));
```

#### 3137. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22962` → after: `L22833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22833) · [Before (L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22962)

```diff
-       const ak = kk.SZ,
+       const Dm = mm.HE,
```

#### 3138. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22965` → after: `L22836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22836) · [Before (L22965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22965)

```diff
-       return Ik._groundColumnX = qk, Ik._groundColumnZ = Lk, Ik._groundOffsetY = ak[1], Ik._groundTopChunk = kk.XZ.iqk(qk, Math.floor(Xk[1]) + ak[1], Lk), Ik._groundTopVersion = null !== (Tk = null === (ik = Ik._groundTopChunk) || void 0 === ik ? void 0 : ik.Me) && void 0 !== Tk  … [truncated]
+       return fm._groundColumnX = im, fm._groundColumnZ = Rm, fm._groundOffsetY = Dm[1], fm._groundTopChunk = mm.oE.Tim(im, Math.floor(hm[1]) + Dm[1], Rm), fm._groundTopVersion = null !== (Am = null === (am = fm._groundTopChunk) || void 0 === am ? void 0 : am.EY) && void 0 !== Am  … [truncated]
```

#### 3139. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22979` → after: `L22850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22850) · [Before (L22979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22979)

```diff
-       return null !== kk && !kk.Hs && kk.Me === Fk
+       return null !== mm && !mm.aJ && mm.EY === Tm
```

#### 3140. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22989` → after: `L22860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22860) · [Before (L22989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22989)

```diff
-       const Tk = kk.MJ.ZY(Xk.Xu);
+       const Am = mm.qI.uB(hm.lG);
```

#### 3141. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22992` → after: `L22863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22863) · [Before (L22992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22992)

```diff
-         const Ik = kk.MJ.Kkk(Fk.Xu);
+         const fm = mm.qI.Vmm(Tm.lG);
```

#### 3142. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22995` → after: `L22866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22866) · [Before (L22995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22995)

```diff
-       if (null !== yk) ik = yk.kZ.base[1], ek(Xk);
+       if (null !== xm) am = xm.RE.base[1], Om(hm);
```

#### 3143. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L22997` → after: `L22868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22868) · [Before (L22997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L22997)

```diff
-         const yk = Zk(kk, Ik, Xk, Tk.Im);
+         const xm = Em(mm, fm, hm, Am.hU);
```

#### 3144. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23003` → after: `L22874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22874) · [Before (L23003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23003)

```diff
-       const ak = .7 * Xk.size * (1 - (Tk.Mkk[1] - ik) / Ik);
+       const Dm = .7 * hm.size * (1 - (Am.Wmm[1] - am) / fm);
```

#### 3145. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23009-L23010` → after: `L22880-L22881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22880-L22881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22880-L22881) · [Before (L23009-L23010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23009-L23010)

```diff
-       const ik = null !== (Xk = null === (Tk = Fk.enabledCombinator) || void 0 === Tk ? void 0 : Tk.setBooleanType("placeToPutShadowExists", Ik)) && void 0 !== Xk ? Xk : Ik;
-       Fk._enabled !== ik && (Fk._enabled = ik, kk.Av(Fk._thinObjectId, ik))
+       const am = null !== (hm = null === (Am = Tm.enabledCombinator) || void 0 === Am ? void 0 : Am.setBooleanType("placeToPutShadowExists", fm)) && void 0 !== hm ? hm : fm;
+       Tm._enabled !== am && (Tm._enabled = am, mm.Dk(Tm._thinObjectId, am))
```

#### 3146. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23017` → after: `L22888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22888) · [Before (L23017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23017)

```diff
-       const Ik = (0, ik.m)(kk.Xw, "Fe", (0, yk.f)({
+       const fm = (0, am.l)(mm.qY, "QO", (0, xm.d)({
```

#### 3147. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23023-L23024` → after: `L22894-L22895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22894-L22895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22894-L22895) · [Before (L23023-L23024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23023-L23024)

```diff
-         const Fk = (0, lk.y)("shadow_component_mat", kk.Xw.Yw);
-         (0, lk.fb)(Fk, {
+         const Tm = (0, wm.x)("shadow_component_mat", mm.qY.Aq);
+         (0, wm.rb)(Tm, {
```

#### 3148. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23032` → after: `L22903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22903) · [Before (L23032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23032)

```diff
-         }), Ik.material = Fk.mirror, (0, Tk.n)(Ik.material)
+         }), fm.material = Tm.mirror, (0, Am.q)(fm.material)
```

#### 3149. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23034-L23036` → after: `L22905-L22907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22905-L22907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22905-L22907) · [Before (L23034-L23036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23034-L23036)

```diff
-       const ak = kk.Xw.kp;
-       return ak.newObjectType("Fe", Ik, {
-         St: 32,
+       const Dm = mm.qY.YG;
+       return Dm.newObjectType("QO", fm, {
+         yp: 32,
```

#### 3150. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23041-L23042` → after: `L22912-L22913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22912-L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22912-L22913) · [Before (L23041-L23042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23041-L23042)

```diff
-       }), Ik.rotationQuaternion.set(0, 0, 0, 1), kk.Xw.mp(Ik, !0), Ik.Xp(), {
-         name: "Fe",
+       }), fm.rotationQuaternion.set(0, 0, 0, 1), mm.qY.rG(fm, !0), fm.nG(), {
+         name: "QO",
```

#### 3151. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23066-L23067` → after: `L22937-L22938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22937-L22938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22937-L22938) · [Before (L23066-L23067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23066-L23067)

```diff
-         mJ: function(kk, Fk) {
-           Fk._thinObjectId = ak.instantiate("Fe"), ak.setEntityId(Fk._thinObjectId, kk), ak.setPickable(Fk._thinObjectId, !1)
+         pI: function(mm, Tm) {
+           Tm._thinObjectId = Dm.instantiate("QO"), Dm.setEntityId(Tm._thinObjectId, mm), Dm.setPickable(Tm._thinObjectId, !1)
```

#### 3152. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23069` → after: `L22940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22940) · [Before (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23069)

```diff
-         iG: function(kk, Fk) {
+         oN: function(mm, Tm) {
```

#### 3153. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23074` → after: `L22945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22945) · [Before (L23074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23074)

```diff
-           const yk = null === (Tk = null === (ik = kk.ke) || void 0 === ik ? void 0 : ik.showsCircleShadows()) || void 0 === Tk || Tk;
+           const xm = null === (Am = null === (am = mm.KO) || void 0 === am ? void 0 : am.showsCircleShadows()) || void 0 === Am || Am;
```

#### 3154. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23082-L23083` → after: `L22953-L22954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22953-L22954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22953-L22954) · [Before (L23082-L23083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23082-L23083)

```diff
-             const Tk = kk.MJ.eFk(Ik.Xu);
-             Ik.Xu === kk.oR || Tk && (null !== (lk = null === (qk = Tk.vIk) || void 0 === qk ? void 0 : qk.EIk) && void 0 !== lk ? lk : null === (Lk = Tk.mesh) || void 0 === Lk ? void 0 : Lk.isEnabled()) ? Pk(kk, ak, Fk, Ik) : xk(ak, Ik)
+             const Am = mm.qI.oTm(fm.lG);
+             fm.lG === mm.xH || Am && (null !== (wm = null === (im = Am.kfm) || void 0 === im ? void 0 : im.bfm) && void 0 !== wm ? wm : null === (Rm = Am.mesh) || void 0 === Rm ? void 0 : Rm.isEnabled()) ? Im(mm, Dm, Tm, fm) : Vm(Dm, fm)
```

#### 3155. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23086` → after: `L22957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22957) · [Before (L23086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23086)

```diff
-         Ix: function(Fk, Ik) {
+         JI: function(Tm, fm) {
```

#### 3156. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23090` → after: `L22961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22961) · [Before (L23090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23090)

```diff
-             const Tk = kk.MJ.ZY(Fk.Xu).Im;
+             const Am = mm.qI.uB(Tm.lG).hU;
```

#### 3157. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23097` → after: `L22968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22968) · [Before (L23097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23097)

```diff
-   37630: (kk, Fk, Ik) => {
+   37663: (mm, Tm, fm) => {
```

#### 3158. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23099-L23100` → after: `L22970-L22971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22970-L22971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22970-L22971) · [Before (L23099-L23100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23099-L23100)

```diff
-       c: () => Tk,
-       e: () => lk
+       e: () => Am,
+       h: () => wm
```

#### 3159. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23102` → after: `L22973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R22973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L22973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L22973) · [Before (L23102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23102)

```diff
-     var Xk = Ik(37144);
+     var hm = fm(37181);
```

#### 3160. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23161` → after: `L23032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23032) · [Before (L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23161)

```diff
-         return Tk.matInverseToRef(kk, Fk) ? Fk : null
+         return Am.matInverseToRef(mm, Tm) ? Tm : null
```

#### 3161. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23198` → after: `L23069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23069) · [Before (L23198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23198)

```diff
-       return Xk.Quaternion.RotationYawPitchRollToRef(kk.rotation.y, kk.rotation.x, kk.rotation.z, ik), Xk.Matrix.ComposeToRef(kk.ci, ik, kk.position, yk), yk.m
+       return hm.Quaternion.RotationYawPitchRollToRef(mm.rotation.y, mm.rotation.x, mm.rotation.z, am), hm.Matrix.ComposeToRef(mm.fi, am, mm.position, xm), xm.m
```

#### 3162. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23201` → after: `L23072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23072) · [Before (L23201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23201)

```diff
-   37818: (kk, Fk, Ik) => {
+   37875: (mm, Tm, fm) => {
```

#### 3163. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23204-L23205` → after: `L23075-L23076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23075-L23076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23075-L23076) · [Before (L23204-L23205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23204-L23205)

```diff
-       i: () => Tk,
-       m: () => yk
+       f: () => Am,
+       g: () => xm
```

#### 3164. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23217` → after: `L23088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23088) · [Before (L23217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23217)

```diff
-       if ((null === Ik || void 0 === Ik ? void 0 : Ik.frameId) === Fk) return Ik.Dt;
+       if ((null === fm || void 0 === fm ? void 0 : fm.frameId) === Tm) return fm.DE;
```

#### 3165. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23221` → after: `L23092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23092) · [Before (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23221)

```diff
-         Dt: Xk
+         DE: hm
```

#### 3166. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23225` → after: `L23096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23096) · [Before (L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23225)

```diff
-   37620: (kk, Fk, Ik) => {
+   37652: (mm, Tm, fm) => {
```

#### 3167. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23228` → after: `L23099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23099) · [Before (L23228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23228)

```diff
-         Xw: Fk
+         qY: Tm
```

#### 3168. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23230` → after: `L23101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23101) · [Before (L23230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23230)

```diff
-       return !!Fk.Tw || Fk.Lw()
+       return !!Tm.jY || Tm.cY()
```

#### 3169. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23237` → after: `L23107-L23108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23107-L23108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23107-L23108) · [Before (L23237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23237)

```diff
-       j: () => ik
+       l: () => im,
+       m: () => am
```

#### 3170. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23243-L23246` → after: `L23114-L23117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23114-L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23114-L23117) · [Before (L23243-L23246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23243-L23246)

```diff
-         k_: Fk,
-         F_: Ik
-       } = kk, Xk = kk.U1;
-       if (kk.Jw || !Fk || !Ik || !(Xk >= 0) || Xk !== Math.floor(Xk)) return !1;
+         R7: Tm,
+         J7: fm
+       } = mm, hm = mm.vF;
+       if (mm.NY || !Tm || !fm || !(hm >= 0) || hm !== Math.floor(hm)) return !1;
```

#### 3171. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23273` → after: `L23144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23144) · [Before (L23273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23273)

```diff
-       const ak = kk.XH;
+       const Dm = mm.Yq;
```

#### 3172. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23289` → after: `L23160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23160) · [Before (L23289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23289)

```diff
-       return Xk(kk) && Fk.U1 >= 0 && !ik(Fk) ? yk(Ik) : Ik
+       return hm(mm) && Tm.vF >= 0 && !am(Tm) ? xm(fm) : fm
```

#### 3173. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23297-L23299` → after: `L23168-L23170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23168-L23170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23168-L23170) · [Before (L23297-L23299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23297-L23299)

```diff
-       const Xk = kk.qZ.yj.Hw(Fk),
-         Tk = kk._texURLtoTerrainID[yk(Xk.rM[0])],
-         ik = ak(kk.qZ, Xk) ? void 0 === Tk ? null : kk.Ue(Tk) : Ik;
+       const hm = mm.IE.Vo.eY(Tm),
+         Am = mm._texURLtoTerrainID[xm(hm.lF[0])],
+         am = Dm(mm.IE, hm) ? void 0 === Am ? null : mm.TY(Am) : fm;
```

#### 3174. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23303` → after: `L23174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23174) · [Before (L23303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23303)

```diff
-   37832: (kk, Fk, Ik) => {
+   37903: (mm, Tm, fm) => {
```

#### 3175. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23309-L23313` → after: `L23180-L23184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23180-L23184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23180-L23184) · [Before (L23309-L23313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23309-L23313)

```diff
-     var Xk = Ik(37144),
-       Tk = Ik(37821),
-       ik = Ik(37259),
-       yk = Ik(37818);
-     const lk = new Xk.Ge(0, yk.e, 0),
+     var hm = fm(37181),
+       Am = fm(37880),
+       am = fm(37276),
+       xm = fm(37875);
+     const wm = new hm.WO(0, xm.e, 0),
```

#### 3176. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23336` → after: `L23207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23207) · [Before (L23336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23336)

```diff
-       } = Tk.l, ik = [Ik.call(kk, "vertex", Fk), Ik.call(kk, "fragment", Fk), Xk.call(kk, Fk)];
+       } = Am.j, am = [fm.call(mm, "vertex", Tm), fm.call(mm, "fragment", Tm), hm.call(mm, Tm)];
```

#### 3177. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23348` → after: `L23219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23219) · [Before (L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23348)

```diff
-       ak && (kk.unfreeze(), (0, ik.Y)(kk, !1)), (0, ik.P)(kk), ak && requestAnimationFrame((() => {
+       Dm && (mm.unfreeze(), (0, am.gb)(mm, !1)), (0, am.N)(mm), Dm && requestAnimationFrame((() => {
```

#### 3178. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23350` → after: `L23221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23221) · [Before (L23350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23350)

```diff
-           kk.freeze(), (0, ik.Y)(kk, !0)
+           mm.freeze(), (0, am.gb)(mm, !0)
```

#### 3179. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23355` → after: `L23226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23226) · [Before (L23355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23355)

```diff
-   37623: (kk, Fk, Ik) => {
+   37661: (mm, Tm, fm) => {
```

#### 3180. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23357` → after: `L23228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23228) · [Before (L23357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23357)

```diff
-       b: () => Tk,
+       e: () => Am,
```

#### 3181. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23371` → after: `L23242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23242) · [Before (L23371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23371)

```diff
-   37324: (kk, Fk, Ik) => {
+   37327: (mm, Tm, fm) => {
```

#### 3182. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23373-L23374` → after: `L23244-L23245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23244-L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23244-L23245) · [Before (L23373-L23374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23373-L23374)

```diff
-       d: () => Xk,
-       g: () => Tk
+       b: () => hm,
+       e: () => Am
```

#### 3183. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23402` → after: `L23273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23273) · [Before (L23402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23402)

```diff
-   37592: (kk, Fk, Ik) => {
+   37630: (mm, Tm, fm) => {
```

#### 3184. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23404-L23405` → after: `L23275-L23276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23275-L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23275-L23276) · [Before (L23404-L23405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23404-L23405)

```diff
-       c: () => qk,
-       f: () => lk,
+       e: () => im,
+       h: () => wm,
```

#### 3185. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23408-L23409` → after: `L23279-L23280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23279-L23280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23279-L23280) · [Before (L23408-L23409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23408-L23409)

```diff
-     var Xk = Ik(37586),
-       Tk = Ik(37600);
+     var hm = fm(37623),
+       Am = fm(37637);
```

#### 3186. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23414-L23415` → after: `L23285-L23286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23285-L23286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23285-L23286) · [Before (L23414-L23415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23414-L23415)

```diff
-       Ik._noaFaceGroups = null !== Fk && void 0 !== Fk ? Fk : null, Ik._noaFaceEpoch = -1, Ik._noaFaceMask = -1, Ik._noaFaceCount = -1, Ik._noaFaceMaterial = null;
-       const Xk = kk.lK;
+       fm._noaFaceGroups = null !== Tm && void 0 !== Tm ? Tm : null, fm._noaFaceEpoch = -1, fm._noaFaceMask = -1, fm._noaFaceCount = -1, fm._noaFaceMaterial = null;
+       const hm = mm.jK;
```

#### 3187. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23432` → after: `L23303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23303) · [Before (L23432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23432)

```diff
-       for (let yk = 0; yk < Xk.g; yk++) {
+       for (let xm = 0; xm < hm.f; xm++) {
```

#### 3188. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23441` → after: `L23312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23312) · [Before (L23441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23441)

```diff
-         this.se = kk, this.engine = Fk, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+         this.MO = mm, this.engine = Tm, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
```

#### 3189. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23451` → after: `L23322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23322) · [Before (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23451)

```diff
-           Lk = yk ? (0, Tk.d)(Ik, qk.getRenderWidth(), qk.getRenderHeight()) : 0;
+           Rm = xm ? (0, Am.b)(fm, im.getRenderWidth(), im.getRenderHeight()) : 0;
```

#### 3190. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23456` → after: `L23327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23327) · [Before (L23456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23456)

```diff
-         } = this, jk = this.se / 2, ek = jk * Math.sqrt(3), wk = kk.data, Hk = kk.length;
+         } = this, om = this.MO / 2, Om = om * Math.sqrt(3), Ym = mm.data, qm = mm.length;
```

#### 3191. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23463` → after: `L23334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23334) · [Before (L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23463)

```diff
-             const Ik = kk.lK,
+             const fm = mm.jK,
```

#### 3192. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23466` → after: `L23337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23337) · [Before (L23466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23466)

```diff
-             if (yk && ik && (0, Xk.t)(kk.material)) {
+             if (xm && am && (0, hm.s)(mm.material)) {
```

#### 3193. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23475` → after: `L23346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23346) · [Before (L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23475)

```diff
-               qk = (0, Tk.m)(Fk, Xk, ik, yk, (0, Tk.h)(wk, Lk))
+               im = (0, Am.k)(Tm, hm, am, xm, (0, Am.d)(Ym, Rm))
```

#### 3194. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23480` → after: `L23351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23351) · [Before (L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23480)

```diff
-                 Tk = Fk[Xk.g]; - 1 !== qk && (Tk = ak(Fk, qk, Zk), Ik = Zk[0]), kk._noaFaceCount = Tk, ik.indexStart = 6 * Ik, ik.indexCount = 6 * Tk, ik.setBoundingInfo(kk.vR())
+                 Am = Tm[hm.f]; - 1 !== im && (Am = Dm(Tm, im, Em), fm = Em[0]), mm._noaFaceCount = Am, am.indexStart = 6 * fm, am.indexCount = 6 * Am, am.setBoundingInfo(mm.DH())
```

#### 3195. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23489` → after: `L23360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23360) · [Before (L23489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23489)

```diff
-   38393: (kk, Fk, Ik) => {
+   38504: (mm, Tm, fm) => {
```

#### 3196. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23492-L23493` → after: `L23364-L23365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23364-L23365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23364-L23365) · [Before (L23492-L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23492-L23493)

```diff
-       D: () => Tk,
-       E: () => qk,
+       C: () => Pm,
+       F: () => cm,
```

#### 3197. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23495-L23497` → after: `L23367-L23369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23367-L23369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23367-L23369) · [Before (L23495-L23497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23495-L23497)

```diff
-       L: () => Qk,
-       P: () => Rk,
-       Q: () => zk,
+       J: () => Em,
+       N: () => qm,
+       O: () => Om,
```

#### 3198. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23499-L23501` → after: `L23371-L23372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23371-L23372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23371-L23372) · [Before (L23499-L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23499-L23501)

```diff
-       T: () => Zk,
-       V: () => Hk,
-       Y: () => ek,
+       U: () => ym,
+       X: () => Bm,
```

#### 3199. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23503-L23504` → after: `L23374-L23375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23374-L23375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23374-L23375) · [Before (L23503-L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23503-L23504)

```diff
-       ab: () => Ck,
-       b: () => sk,
+       bb: () => Cm,
+       c: () => nm,
```

#### 3200. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23506-L23513` → after: `L23377-L23379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23377-L23379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23377-L23379) · [Before (L23506-L23513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23506-L23513)

```diff
-       e: () => Uk,
-       gb: () => dk,
-       h: () => xk,
-       hb: () => ck,
-       ib: () => Nk,
-       j: () => Pk,
-       l: () => Kk,
-       lb: () => Wk,
+       f: () => Hm,
+       i: () => Vm,
+       k: () => Im,
```

#### 3201. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23515-L23516` → after: `L23381-L23383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23381-L23383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23381-L23383) · [Before (L23515-L23516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23515-L23516)

```diff
-       q: () => ak,
-       s: () => tk,
+       o: () => jm,
+       p: () => Dm,
+       r: () => pm,
```

#### 3202. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23518` → after: `L23385-L23389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23385-L23389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23385-L23389) · [Before (L23518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23518)

```diff
-       x: () => ik
+       u: () => am,
+       v: () => xm,
+       w: () => Am,
+       y: () => im,
+       z: () => Rm
```

#### 3203. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23520` → after: `L23391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23391) · [Before (L23520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23520)

```diff
-     var Xk = Ik(2772);
+     var hm = fm(2831);
```

#### 3204. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23542` → after: `L23413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23413) · [Before (L23542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23542)

```diff
-       return kk.Je.get((Fk / 9 | 0) - 1, (Fk / 3 | 0) % 3 - 1, Fk % 3 - 1)
+       return mm.yO.get((Tm / 9 | 0) - 1, (Tm / 3 | 0) % 3 - 1, Tm % 3 - 1)
```

#### 3205. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23600` → after: `L23471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23471) · [Before (L23600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23600)

```diff
-         if (Xk = kk.size, Xk >= Ik) throw new Error(`More than ${Ik} distinct registry values`);
+         if (hm = mm.size, hm >= fm) throw new Error(`More than ${fm} distinct registry values`);
```

#### 3206. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23607` → after: `L23478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23478) · [Before (L23607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23607)

```diff
-       return `${typeof kk}:${String(kk)}`
+       return `${typeof mm}:${String(mm)}`
```

#### 3207. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23612` → after: `L23483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23483) · [Before (L23612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23612)

```diff
-         return Math.max(kk.Lj.length, kk.yw.length, kk.wV.length, kk.HV.length, kk.Zw.length, kk.jw.length, kk.ew.length)
+         return Math.max(mm.Jo.length, mm.IY.length, mm.bJ.length, mm.eJ.length, mm.ZY.length, mm.kY.length, mm.bY.length)
```

#### 3208. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23619-L23622` → after: `L23490-L23493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23490-L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23490-L23493) · [Before (L23619-L23622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23619-L23622)

```diff
-         const Ik = kk.yw[ek],
-           wk = kk.HV[ek],
-           Hk = `${jk=kk.Zw[ek],jk?`[${Array.from(jk).join()}]`:"none"}|${Bk(kk.jw[ek])}|${Bk(kk.ew[ek])}`;
-         Zk[ek] = fk(Xk, kk.Lj[ek], 16) | fk(Tk, Ik, 16) << 4 | (Ik ? yk : 0) | (kk.wV[ek] ? lk : 0) | (wk ? ak : 0) | (wk && (wk.xV || wk.JV) ? qk : 0) | (null !== Fk && void 0 !== Fk && Fk(ek) ? Lk : 0) | fk(ik, Hk, 65536) << tk >>> 0
+         const fm = mm.IY[Om],
+           Ym = mm.eJ[Om],
+           qm = `${om=mm.ZY[Om],om?`[${Array.from(om).join()}]`:"none"}|${Mm(mm.kY[Om])}|${Mm(mm.bY[Om])}`;
+         Em[Om] = lm(hm, mm.Jo[Om], 16) | lm(Am, fm, 16) << 4 | (fm ? xm : 0) | (mm.bJ[Om] ? wm : 0) | (Ym ? Dm : 0) | (Ym && (Ym.GJ || Ym.NJ) ? im : 0) | (null !== Tm && void 0 !== Tm && Tm(Om) ? Rm : 0) | lm(am, qm, 65536) << pm >>> 0
```

#### 3209. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23636` → after: `L23507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23507) · [Before (L23636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23636)

```diff
-       } = Fk, Lk = null === (Tk = kk.qZ.Xw) || void 0 === Tk ? void 0 : Tk.Nw, tk = [];
+       } = Tm, Rm = null === (Am = mm.IE.qY) || void 0 === Am ? void 0 : Am.FY, pm = [];
```

#### 3210. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23640` → after: `L23511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23511) · [Before (L23640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23640)

```diff
-           Tk = null !== (Rk = kk.Qw.sw(yk[Fk], yk[Fk + 1], yk[Fk + 2])) && void 0 !== Rk ? Rk : null;
+           Am = null !== (Pm = mm.HY.yY(xm[Tm], xm[Tm + 1], xm[Tm + 2])) && void 0 !== Pm ? Pm : null;
```

#### 3211. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23645` → after: `L23516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23516) · [Before (L23645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23645)

```diff
-         Tk.Ww = !1, Tk.Me += yk[Fk + vk];
+         Am.mq = !1, Am.EY += xm[Tm + Zm];
```

#### 3212. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23647-L23648` → after: `L23518-L23519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23518-L23519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23518-L23519) · [Before (L23647-L23648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23647-L23648)

```diff
-         ik & Zk && (Tk.ie = !1), ik & jk && (Tk.Le = !1), ik & ek && (Tk.Qs = !0), ik & wk && (Tk.Pw = !0, Tk.zw = !0);
-         for (let kk = 0; kk < 3; kk++) Tk.xw[kk] += yk[Fk + Ok + kk];
+         am & Em && (Am.zO = !1), am & om && (Am.eO = !1), am & Om && (Am.xJ = !0), am & Ym && (Am.XY = !0, Am.rY = !0);
+         for (let mm = 0; mm < 3; mm++) Am.GY[mm] += xm[Tm + bm + mm];
```

#### 3213. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23654` → after: `L23525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23525) · [Before (L23654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23654)

```diff
-           Fk && (qk >>> Ik & 1 && (Fk.Ww = !1), ak >>> Ik & 1 && (Fk.Pw = !0, Fk.zw = !0, Fk.kw = !0))
+           Tm && (im >>> fm & 1 && (Tm.mq = !1), Dm >>> fm & 1 && (Tm.XY = !0, Tm.rY = !0, Tm.oY = !0))
```

#### 3214. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23658` → after: `L23529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23529) · [Before (L23658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23658)

```diff
-           Kk = Tk.vj;
+           Km = Am.vo;
```

#### 3215. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23660` → after: `L23531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23531) · [Before (L23660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23660)

```diff
-         ik & Hk && (Lk ? (Tk.Pw = !0, Tk.kw = !0) : Tk.Gw = !1), Tk.Pw && (Tk.kw = !0)
+         am & qm && (Rm ? (Am.XY = !0, Am.oY = !0) : Am.LY = !1), Am.XY && (Am.oY = !0)
```

#### 3216. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23662` → after: `L23533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23533) · [Before (L23662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23662)

```diff
-       const Uk = kk.qZ.bw;
+       const Hm = mm.IE.UY;
```

#### 3217. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23671-L23672` → after: `L23542-L23543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23542-L23543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23542-L23543) · [Before (L23671-L23672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23671-L23672)

```diff
-           case Jk:
-             Uk.KV(kk, ak[Xk + 1] >>> 16, Ik, Tk, ik);
+           case jm:
+             Hm.PJ(mm, Dm[hm + 1] >>> 16, fm, Am, am);
```

#### 3218. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23674-L23675` → after: `L23545-L23546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23545-L23546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23545-L23546) · [Before (L23674-L23675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23674-L23675)

```diff
-           case xk:
-             kk.Ws.add(Ik, Tk, ik);
+           case Vm:
+             mm.OJ.add(fm, Am, am);
```

#### 3219. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23677-L23678` → after: `L23548-L23549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23548-L23549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23548-L23549) · [Before (L23677-L23678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23677-L23678)

```diff
-           case Pk:
-             kk.Ws.remove(Ik, Tk, ik)
+           case Im:
+             mm.OJ.remove(fm, Am, am)
```

#### 3220. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23685-L23686` → after: `L23556-L23557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23556-L23557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23556-L23557) · [Before (L23685-L23686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23685-L23686)

```diff
-           Tk = Ik === sk ? Fk : Vk(Fk, Ik);
-         Tk && kk.Kw(Tk, !0)
+           Am = fm === nm ? Tm : Jm(Tm, fm);
+         Am && mm.PY(Am, !0)
```

#### 3221. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23690` → after: `L23561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23561) · [Before (L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23690)

```diff
-   37537: (kk, Fk, Ik) => {
+   37559: (mm, Tm, fm) => {
```

#### 3222. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23698` → after: `L23569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23569) · [Before (L23698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23698)

```diff
-       return 6 === (null === kk || void 0 === kk ? void 0 : kk.length) ? kk : Xk
+       return 6 === (null === mm || void 0 === mm ? void 0 : mm.length) ? mm : hm
```

#### 3223. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23713` → after: `L23584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23584) · [Before (L23713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23713)

```diff
-   37610: (kk, Fk, Ik) => {
+   37644: (mm, Tm, fm) => {
```

#### 3224. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23715` → after: `L23586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23586) · [Before (L23715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23715)

```diff
-       d: () => yk,
+       e: () => xm,
```

#### 3225. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23718-L23719` → after: `L23589-L23590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23589-L23590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23589-L23590) · [Before (L23718-L23719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23718-L23719)

```diff
-     var Xk = Ik(2786),
-       Tk = Ik(37603);
+     var hm = fm(2858),
+       Am = fm(37640);
```

#### 3226. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23725` → after: `L23596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23596) · [Before (L23725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23725)

```diff
-         this.occluders = kk, this.opaque = Fk, this.airStamp = Ik, this.air = Xk, this.version = 0, this.sweeps = 0, this.fullSweeps = 0, this.budgetMs = 1 / 0, this.records = new Map, this.changed = [], this.changedOverflow = !1, this.sweptVersion = -1, this.sweptPassable = new  … [truncated]
+         this.occluders = mm, this.opaque = Tm, this.airStamp = fm, this.air = hm, this.version = 0, this.sweeps = 0, this.fullSweeps = 0, this.budgetMs = 1 / 0, this.records = new Map, this.changed = [], this.changedOverflow = !1, this.sweptVersion = -1, this.sweptPassable = new  … [truncated]
```

#### 3227. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23731` → after: `L23602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23602) · [Before (L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23731)

```diff
-         const ak = (0, Xk.l)(kk, Fk, Ik),
+         const Dm = (0, hm.g)(mm, Tm, fm),
```

#### 3228. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23760` → after: `L23631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23631) · [Before (L23760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23760)

```diff
-         this.records.delete((0, Xk.l)(kk, Fk, Ik)) && this.recordChanged(kk, Fk, Ik)
+         this.records.delete((0, hm.g)(mm, Tm, fm)) && this.recordChanged(mm, Tm, fm)
```

#### 3229. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23763-L23764` → after: `L23634-L23635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23634-L23635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23634-L23635) · [Before (L23763-L23764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23763-L23764)

```diff
-         if (!Number.isFinite(kk) || !Number.isFinite(Fk) || !Number.isFinite(Ik) || Xk % Tk.c !== 0) return !1;
-         const ak = Xk / Tk.c,
+         if (!Number.isFinite(mm) || !Number.isFinite(Tm) || !Number.isFinite(fm) || hm % Am.e !== 0) return !1;
+         const Dm = hm / Am.e,
```

#### 3230. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23778` → after: `L23649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23649) · [Before (L23778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23778)

```diff
-           const kk = Tk.c,
+           const mm = Am.e,
```

#### 3231. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23796` → after: `L23667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23667) · [Before (L23796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23796)

```diff
-               if (this.opaque[ik.yB(lk, kk, Fk)]) return !1;
+               if (this.opaque[am.gM(wm, mm, Tm)]) return !1;
```

#### 3232. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23815` → after: `L23686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23686) · [Before (L23815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23815)

```diff
-         const ak = Tk.c;
+         const Dm = Am.e;
```

#### 3233. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23850` → after: `L23721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23721) · [Before (L23850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23850)

```diff
-         const ik = Tk.c,
+         const am = Am.e,
```

#### 3234. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23896` → after: `L23767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23767) · [Before (L23896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23896)

```diff
-                 this.ringRecords[vk] = this.records.get((0, Xk.l)(kk - 1 + Tk, Fk - 1 + ik, Ik - 1 + yk)), this.ringAir[3 * vk] = this.ringAir[3 * vk + 1] = this.ringAir[3 * vk + 2] = NaN, this.ringChunks[vk] = this.air ? this.air.chunkAt(kk - 1 + Tk, Fk - 1 + ik, Ik - 1 + yk) :  … [truncated]
+                 this.ringRecords[Zm] = this.records.get((0, hm.g)(mm - 1 + Am, Tm - 1 + am, fm - 1 + xm)), this.ringAir[3 * Zm] = this.ringAir[3 * Zm + 1] = this.ringAir[3 * Zm + 2] = NaN, this.ringChunks[Zm] = this.air ? this.air.chunkAt(mm - 1 + Am, Tm - 1 + am, fm - 1 + xm) :  … [truncated]
```

#### 3235. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23916` → after: `L23787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23787) · [Before (L23916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23916)

```diff
-           kk >= 0 && ik >= 0 && yk >= 0 && kk < ak && ik < qk && yk < Lk && (this.ringRecords[(kk * qk + ik) * Lk + yk] = this.records.get((0, Xk.l)(tk[jk], tk[jk + 1], tk[jk + 2])), this.around(kk - 1, ik - 1, yk - 1))
+           mm >= 0 && am >= 0 && xm >= 0 && mm < Dm && am < im && xm < Rm && (this.ringRecords[(mm * im + am) * Rm + xm] = this.records.get((0, hm.g)(pm[om], pm[om + 1], pm[om + 2])), this.around(mm - 1, am - 1, xm - 1))
```

#### 3236. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23967` → after: `L23838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23838) · [Before (L23967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23967)

```diff
-         return Tk < Fk && ik < Ik && yk < Xk ? (Tk * Ik + ik) * Xk + yk : -1
+         return Am < Tm && am < fm && xm < hm ? (Am * fm + am) * hm + xm : -1
```

#### 3237. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23989` → after: `L23860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23860) · [Before (L23989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23989)

```diff
-         const ek = Tk.c,
+         const Om = Am.e,
```

#### 3238. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23993` → after: `L23864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23864) · [Before (L23993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23993)

```diff
-           Pk = qk === tk ? Tk.b : Tk.b | Jk;
+           Im = im === pm ? Am.d : Am.d | jm;
```

#### 3239. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23997` → after: `L23868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23868) · [Before (L23997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L23997)

```diff
-             for (let Fk = 0; Fk < ek; Fk++, ik++) xk[ik] = jk ? jk[(0, Tk.n)(Lk, kk, Fk)] : Pk
+             for (let Tm = 0; Tm < Om; Tm++, am++) Vm[am] = om ? om[(0, Am.t)(Rm, mm, Tm)] : Im
```

#### 3240. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24005` → after: `L23876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23876) · [Before (L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24005)

```diff
-         const kk = Tk.c,
+         const mm = Am.e,
```

#### 3241. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24028` → after: `L23899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23899) · [Before (L24028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24028)

```diff
-         const kk = Tk.c;
+         const mm = Am.e;
```

#### 3242. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24032` → after: `L23903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23903) · [Before (L24032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24032)

```diff
-         const kk = Tk.c,
+         const mm = Am.e,
```

#### 3243. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24048-L24050` → after: `L23919-L23921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23919-L23921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23919-L23921) · [Before (L24048-L24050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24048-L24050)

```diff
-             Hk = Fk > 0 ? ik - 1 - ak : ak,
-             Qk = Ik > 0 ? yk - 1 - qk : qk,
-             sk = Xk > 0 ? lk - 1 - Lk : Lk,
+             qm = Tm > 0 ? am - 1 - Dm : Dm,
+             Qm = fm > 0 ? xm - 1 - im : im,
+             nm = hm > 0 ? wm - 1 - Rm : Rm,
```

#### 3244. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24072` → after: `L23943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23943) · [Before (L24072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24072)

```diff
-                 if (Ck + Fk + kk <= 1) Ik = Ck + Fk + kk === 0 ? tk[ik] & Jk ? Pk : 63 : Ck > 0 ? Kk(vk[ik - Ek], tk[ik - Ek], Gk, !0, Zk) : Fk > 0 ? Kk(vk[ik - Ok], tk[ik - Ok], pk, !0, Zk) : Kk(vk[ik - nk], tk[ik - nk], uk, !0, Zk);
+                 if (ym + Tm + mm <= 1) fm = ym + Tm + mm === 0 ? pm[am] & jm ? Im : 63 : ym > 0 ? Km(Zm[am - km], pm[am - km], em, !0, Em) : Tm > 0 ? Km(Zm[am - bm], pm[am - bm], Nm, !0, Em) : Km(Zm[am - Sm], pm[am - Sm], Gm, !0, Em);
```

#### 3245. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24078` → after: `L23949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23949) · [Before (L24078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24078)

```diff
-                       Ik = kk & xk || Fk & Jk ? Pk : kk & Zk[Fk * Tk.d + Gk] ? bk : 0
+                       fm = mm & Vm || Tm & jm ? Im : mm & Em[Tm * Am.h + em] ? Xm : 0
```

#### 3246. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24085` → after: `L23956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23956) · [Before (L24085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24085)

```diff
-                       Ik |= kk & xk || Fk & Jk ? Pk : kk & Zk[Fk * Tk.d + pk] ? Rk : 0
+                       fm |= mm & Vm || Tm & jm ? Im : mm & Em[Tm * Am.h + Nm] ? Pm : 0
```

#### 3247. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24092` → after: `L23963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23963) · [Before (L24092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24092)

```diff
-                       Ik |= kk & xk || Fk & Jk ? Pk : kk & Zk[Fk * Tk.d + uk] ? Uk : 0
+                       fm |= mm & Vm || Tm & jm ? Im : mm & Em[Tm * Am.h + Gm] ? Hm : 0
```

#### 3248. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24107` → after: `L23978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23978) · [Before (L24107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24107)

```diff
-         const yk = Tk.c,
+         const xm = Am.e,
```

#### 3249. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24115-L24117` → after: `L23986-L23988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23986-L23988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23986-L23988) · [Before (L24115-L24117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24115-L24117)

```diff
-           Hk = Math.min(ik, jk > 0 ? lk - 1 - Lk : Lk),
-           Jk = ek > 0 ? ak - 1 - tk : tk,
-           xk = wk > 0 ? qk - 1 - Zk : Zk,
+           qm = Math.min(am, om > 0 ? wm - 1 - Rm : Rm),
+           jm = Om > 0 ? Dm - 1 - pm : pm,
+           Vm = Ym > 0 ? im - 1 - Em : Em,
```

#### 3250. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24119` → after: `L23990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23990) · [Before (L24119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24119)

```diff
-         return Pk[0] = Math.floor((jk > 0 ? Lk + Fk : Lk - Hk) / yk), Pk[1] = Math.floor((jk > 0 ? Lk + Hk : Lk - Fk) / yk), Pk[2] = Math.floor((ek > 0 ? tk + Ik : tk - Jk) / yk), Pk[3] = Math.floor((ek > 0 ? tk + Jk : tk - Ik) / yk), Pk[4] = Math.floor((wk > 0 ? Zk + Xk : Zk - x … [truncated]
+         return Im[0] = Math.floor((om > 0 ? Rm + Tm : Rm - qm) / xm), Im[1] = Math.floor((om > 0 ? Rm + qm : Rm - Tm) / xm), Im[2] = Math.floor((Om > 0 ? pm + fm : pm - jm) / xm), Im[3] = Math.floor((Om > 0 ? pm + jm : pm - fm) / xm), Im[4] = Math.floor((Ym > 0 ? Em + hm : Em - V … [truncated]
```

#### 3251. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24127` → after: `L23998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L23998) · [Before (L24127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24127)

```diff
-         const yk = Tk.c,
+         const xm = Am.e,
```

#### 3252. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24149-L24151` → after: `L24020-L24022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24020-L24022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24020-L24022) · [Before (L24149-L24151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24149-L24151)

```diff
-                         const yk = 1 & Fk ? ek - Xk : Xk - ek,
-                           lk = 2 & Fk ? wk - Tk : Tk - wk,
-                           ak = 4 & Fk ? Hk - ik : ik - Hk;
+                         const xm = 1 & Tm ? Om - hm : hm - Om,
+                           wm = 2 & Tm ? Ym - Am : Am - Ym,
+                           Dm = 4 & Tm ? qm - am : am - qm;
```

#### 3253. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24192` → after: `L24063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24063) · [Before (L24192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24192)

```diff
-         return 0 === kk ? (this.size[1] + 2) * Fk : 1 === kk ? Fk : 1
+         return 0 === mm ? (this.size[1] + 2) * Tm : 1 === mm ? Tm : 1
```

#### 3254. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24203-L24204` → after: `L24074-L24075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24074-L24075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24074-L24075) · [Before (L24203-L24204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24203-L24204)

```diff
-       const Xk = kk + Tk.c - 1;
-       return (Ik > 0 ? Xk - Fk : Fk - kk) < 0 ? -1 : Math.max(0, Ik > 0 ? kk - Fk : Fk - Xk)
+       const hm = mm + Am.e - 1;
+       return (fm > 0 ? hm - Tm : Tm - mm) < 0 ? -1 : Math.max(0, fm > 0 ? mm - Tm : Tm - hm)
```

#### 3255. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24220` → after: `L24091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24091) · [Before (L24220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24220)

```diff
-       return 0 === kk ? 0 : kk & xk || Fk & Jk ? Pk : Xk || kk & ik[Fk * Tk.d + Ik] ? 1 << (1 ^ Ik) : 0
+       return 0 === mm ? 0 : mm & Vm || Tm & jm ? Im : hm || mm & am[Tm * Am.h + fm] ? 1 << (1 ^ fm) : 0
```

#### 3256. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24226` → after: `L24097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24097) · [Before (L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24226)

```diff
-       if (0 === sk.length && (Qk = new Uint8Array((Tk.b + 1) * Tk.d), sk = new Uint8Array(Tk.b + 1)), !sk[kk]) {
+       if (0 === nm.length && (Qm = new Uint8Array((Am.d + 1) * Am.h), nm = new Uint8Array(Am.d + 1)), !nm[mm]) {
```

#### 3257. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24228` → after: `L24099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24099) · [Before (L24228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24228)

```diff
-         for (let Fk = 0; Fk < Tk.d; Fk++) Qk[kk * Tk.d + Fk] = (0, Tk.r)(kk, Fk)
+         for (let Tm = 0; Tm < Am.h; Tm++) Qm[mm * Am.h + Tm] = (0, Am.v)(mm, Tm)
```

#### 3258. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24232` → after: `L24103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24103) · [Before (L24232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24232)

```diff
-   37603: (kk, Fk, Ik) => {
+   37640: (mm, Tm, fm) => {
```

#### 3259. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24238-L24241` → after: `L24108-L24112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24108-L24112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24108-L24112) · [Before (L24238-L24241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24238-L24241)

```diff
-       j: () => Qk,
-       k: () => Hk,
-       n: () => tk,
-       r: () => Lk
+       i: () => Em,
+       m: () => Qm,
+       q: () => qm,
+       t: () => pm,
+       v: () => Rm
```

#### 3260. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24315` → after: `L24186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24186) · [Before (L24315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24315)

```diff
-           const Tk = null === ik ? jk : ik[Xk];
+           const Am = null === am ? om : am[hm];
```

#### 3261. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24337` → after: `L24208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24208) · [Before (L24337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24337)

```diff
-       return Fk ? ak.fill(Tk) : wk(kk, Ik, Xk, ik, ak, yk) ? ak : null
+       return Tm ? Dm.fill(Am) : Ym(mm, fm, hm, am, Dm, xm) ? Dm : null
```

#### 3262. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24431` → after: `L24302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24302) · [Before (L24431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24431)

```diff
-   38388: (kk, Fk, Ik) => {
+   38497: (mm, Tm, fm) => {
```

#### 3263. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24433` → after: `L24304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24304) · [Before (L24433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24433)

```diff
-       e: () => yk
+       b: () => xm
```

#### 3264. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24435` → after: `L24306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24306) · [Before (L24435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24435)

```diff
-     var Xk = Ik(2775),
+     var hm = fm(2839),
```

#### 3265. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24437` → after: `L24308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24308) · [Before (L24437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24437)

```diff
-       ik = Ik(37749);
+       am = fm(37783);
```

#### 3266. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24443` → after: `L24314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24314) · [Before (L24443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24443)

```diff
-         return 32 === kk && Fk.isBloxdWasmReady() ? new yk(kk, Fk, Fk.getBloxdWasm().mL.hZ(), Ik) : yk.js(kk)
+         return 32 === mm && Tm.isBloxdWasmReady() ? new xm(mm, Tm, Tm.getBloxdWasm().wp.wo(), fm) : xm.js(mm)
```

#### 3267. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24446` → after: `L24317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24317) · [Before (L24446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24446)

```diff
-         this.size = kk, this.wasm = Fk, this.Mj = Xk, this.volume = void 0, this.XZ = void 0, this.eq = new Map, this.unsubscribe = [], this.volume = kk * kk * kk, this.XZ = Ik, Fk && this.unsubscribe.push(Fk.onBloxdWasmMemoryGrown((kk => {
+         this.size = mm, this.wasm = Tm, this.IO = hm, this.volume = void 0, this.oE = void 0, this.ni = new Map, this.unsubscribe = [], this.volume = mm * mm * mm, this.oE = fm, Tm && this.unsubscribe.push(Tm.onBloxdWasmMemoryGrown((mm => {
```

#### 3268. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24453` → after: `L24324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24324) · [Before (L24453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24453)

```diff
-         return this.XZ
+         return this.oE
```

#### 3269. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24455-L24456` → after: `L24326-L24327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24326-L24327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24326-L24327) · [Before (L24455-L24456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24455-L24456)

```diff
-       jqk() {
-         return this.XZ ? null : this.newArray()
+       Yim() {
+         return this.oE ? null : this.newArray()
```

#### 3270. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24459` → after: `L24330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24330) · [Before (L24459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24459)

```diff
-         if (kk && (this.eq.has(kk) || !this.XZ)) return kk;
+         if (mm && (this.ni.has(mm) || !this.oE)) return mm;
```

#### 3271. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24461` → after: `L24332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24332) · [Before (L24461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24461)

```diff
-           const Ik = Fk.pZ(!kk);
+           const fm = Tm.ME(!mm);
```

#### 3272. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24464` → after: `L24335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24335) · [Before (L24464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24464)

```diff
-             ptr: Fk.jj(Ik)
+             ptr: Tm.ko(fm)
```

#### 3273. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24467` → after: `L24338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24338) · [Before (L24467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24467)

```diff
-         if (!Fk) return null !== kk && void 0 !== kk ? kk : this.newArray();
+         if (!Tm) return null !== mm && void 0 !== mm ? mm : this.newArray();
```

#### 3274. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24471` → after: `L24342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24342) · [Before (L24471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24471)

```diff
-         return this.eq.set(Xk, Fk), Xk
+         return this.ni.set(hm, Tm), hm
```

#### 3275. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24474-L24476` → after: `L24345-L24347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24345-L24347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24345-L24347) · [Before (L24474-L24476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24474-L24476)

```diff
-         const Fk = this.eq.get(kk);
-         return Fk && this.XZ ? {
-           XZ: this.XZ,
+         const Tm = this.ni.get(mm);
+         return Tm && this.oE ? {
+           oE: this.oE,
```

#### 3276. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24481-L24482` → after: `L24352-L24353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24352-L24353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24352-L24353) · [Before (L24481-L24482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24481-L24482)

```diff
-         if (!this.XZ) return null;
-         for (const Fk of this.eq.values())
+         if (!this.oE) return null;
+         for (const Tm of this.ni.values())
```

#### 3277. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24487` → after: `L24358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24358) · [Before (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24487)

```diff
-         const Tk = this.eq.get(Xk);
+         const Am = this.ni.get(hm);
```

#### 3278. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24489` → after: `L24360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24360) · [Before (L24489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24489)

```diff
-           Xk.MZ(kk, Fk, Ik, Tk.slot)
+           hm.po(mm, Tm, fm, Am.slot)
```

#### 3279. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24493-L24495` → after: `L24364-L24366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24364-L24366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24364-L24366) · [Before (L24493-L24495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24493-L24495)

```diff
-         const Fk = this.eq.get(kk);
-         Fk && (this.eq.delete(kk), kk.data = new Uint16Array(0), this.call("freeing a chunk's slot", (kk => {
-           kk.fZ(Fk.slot)
+         const Tm = this.ni.get(mm);
+         Tm && (this.ni.delete(mm), mm.data = new Uint16Array(0), this.call("freeing a chunk's slot", (mm => {
+           mm.WE(Tm.slot)
```

#### 3280. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24499-L24501` → after: `L24370-L24372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24370-L24372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24370-L24372) · [Before (L24499-L24501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24499-L24501)

```diff
-         const Fk = this.eq.get(kk),
-           Ik = Fk && this.call("encoding a chunk", (kk => kk.NZ(Fk.slot)));
-         return null !== Ik && void 0 !== Ik ? Ik : ik.encode(kk.data)
+         const Tm = this.ni.get(mm),
+           fm = Tm && this.call("encoding a chunk", (mm => mm.UE(Tm.slot)));
+         return null !== fm && void 0 !== fm ? fm : am.encode(mm.data)
```

#### 3281. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24504` → after: `L24375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24375) · [Before (L24504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24504)

```diff
-         return this.eq.size
+         return this.ni.size
```

#### 3282. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24508-L24509` → after: `L24379-L24380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24379-L24380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24379-L24380) · [Before (L24508-L24509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24508-L24509)

```diff
-         const Ik = null !== (kk = null === (Fk = this.XZ) || void 0 === Fk ? void 0 : Fk.BZ()) && void 0 !== kk ? kk : 0;
-         if (Ik !== this.eq.size) throw new Error(`The chunk store holds ${Ik} slots for ${this.eq.size} arrays`)
+         const fm = null !== (mm = null === (Tm = this.oE) || void 0 === Tm ? void 0 : Tm.FE()) && void 0 !== mm ? mm : 0;
+         if (fm !== this.ni.size) throw new Error(`The chunk store holds ${fm} slots for ${this.ni.size} arrays`)
```

#### 3283. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24515` → after: `L24386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24386) · [Before (L24515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24515)

```diff
-         if (!this.XZ) return null;
+         if (!this.oE) return null;
```

#### 3284. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24517` → after: `L24388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24388) · [Before (L24517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24517)

```diff
-           return Fk(this.XZ)
+           return Tm(this.oE)
```

#### 3285. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24521` → after: `L24392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24392) · [Before (L24521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24521)

```diff
-           return this.Mj(new Error(`The wasm chunk store failed ${kk} (${Fk}), so chunks are plain arrays from now on`)), null
+           return this.IO(new Error(`The wasm chunk store failed ${mm} (${Tm}), so chunks are plain arrays from now on`)), null
```

#### 3286. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24527` → after: `L24398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24398) · [Before (L24527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24527)

```diff
-           }] of this.eq) Fk.data = new Uint16Array(kk, Ik, this.volume)
+           }] of this.ni) Tm.data = new Uint16Array(mm, fm, this.volume)
```

#### 3287. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24530-L24531` → after: `L24401-L24402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24401-L24402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24401-L24402) · [Before (L24530-L24531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24530-L24531)

```diff
-         if (!this.XZ) return;
-         this.XZ = null;
+         if (!this.oE) return;
+         this.oE = null;
```

#### 3288. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24535-L24536` → after: `L24406-L24407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24406-L24407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24406-L24407) · [Before (L24535-L24536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24535-L24536)

```diff
-           }] of this.eq) Fk.data = new Uint16Array(kk, Ik, this.volume).slice();
-         this.eq.clear();
+           }] of this.ni) Tm.data = new Uint16Array(mm, fm, this.volume).slice();
+         this.ni.clear();
```

#### 3289. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24541` → after: `L24412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24412) · [Before (L24541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24541)

```diff
-   37612: (kk, Fk, Ik) => {
+   37649: (mm, Tm, fm) => {
```

#### 3290. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24546` → after: `L24417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24417) · [Before (L24546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24546)

```diff
-       d: () => Xk
+       e: () => hm
```

#### 3291. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24549` → after: `L24420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24420) · [Before (L24549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24549)

```diff
-   38349: (kk, Fk, Ik) => {
+   38461: (mm, Tm, fm) => {
```

#### 3292. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24555-L24558` → after: `L24426-L24429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24426-L24429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24426-L24429) · [Before (L24555-L24558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24555-L24558)

```diff
-     var Xk = Ik(37455),
-       Tk = Ik(2795),
-       ik = Ik(37463),
-       yk = Ik(2788);
+     var hm = fm(37470),
+       Am = fm(2870),
+       am = fm(37492),
+       xm = fm(2862);
```

#### 3293. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24564` → after: `L24435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24435) · [Before (L24564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24564)

```diff
-         levels: (0, Tk.B)(),
+         levels: (0, Am.r)(),
```

#### 3294. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24582-L24584` → after: `L24453-L24455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24453-L24455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24453-L24455) · [Before (L24582-L24584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24582-L24584)

```diff
-       Fk.frame = (0, ik.r)();
-       const Tk = (0, yk.i)();
-       Fk.version === Tk && Fk.x === Ik[0] && Fk.y === Ik[1] && Fk.z === Ik[2] || (Fk.levels.set((0, Xk.e)(kk, Ik)), Fk.x = Ik[0], Fk.y = Ik[1], Fk.z = Ik[2], Fk.version = Tk)
+       Tm.frame = (0, am.n)();
+       const Am = (0, xm.k)();
+       Tm.version === Am && Tm.x === fm[0] && Tm.y === fm[1] && Tm.z === fm[2] || (Tm.levels.set((0, hm.i)(mm, fm)), Tm.x = fm[0], Tm.y = fm[1], Tm.z = fm[2], Tm.version = Am)
```

#### 3295. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24589` → after: `L24460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24460) · [Before (L24589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24589)

```diff
-       return Ik.frame !== (0, ik.r)() && tk(kk, Ik, kk.MJ.OJ(Fk)), Ik.levels
+       return fm.frame !== (0, am.n)() && pm(mm, fm, mm.qI.rV(Tm)), fm.levels
```

#### 3296. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24594` → after: `L24465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24465) · [Before (L24594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24594)

```diff
-       if (Ik.frame !== (0, ik.r)()) {
+       if (fm.frame !== (0, am.n)()) {
```

#### 3297. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24596-L24597` → after: `L24467-L24468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24467-L24468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24467-L24468) · [Before (L24596-L24597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24596-L24597)

```diff
-         const Tk = kk.MJ.OJ(Fk),
-           ik = null === (Xk = kk.MJ.eFk(Fk)) || void 0 === Xk ? void 0 : Xk.offset;
+         const Am = mm.qI.rV(Tm),
+           am = null === (hm = mm.qI.oTm(Tm)) || void 0 === hm ? void 0 : hm.offset;
```

#### 3298. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24607` → after: `L24478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24478) · [Before (L24607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24607)

```diff
-   37455: (kk, Fk, Ik) => {
+   37470: (mm, Tm, fm) => {
```

#### 3299. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24611` → after: `L24481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24481) · [Before (L24611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24611)

```diff
-       e: () => Sk,
+       g: () => km,
```

#### 3300. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24614` → after: `L24484-L24485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24484-L24485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24484-L24485) · [Before (L24614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24614)

```diff
-       o: () => nk
+       p: () => im,
+       q: () => Sm
```

#### 3301. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24616` → after: `L24487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24487) · [Before (L24616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24616)

```diff
-     var Xk = Ik(354),
+     var hm = fm(362),
```

#### 3302. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24618-L24621` → after: `L24489-L24492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24489-L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24489-L24492) · [Before (L24618-L24621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24618-L24621)

```diff
-       ik = Ik(2795),
-       yk = Ik(37144),
-       lk = Ik(37253);
-     const ak = (0, ik.B)().fill(1);
+       am = fm(2870),
+       xm = fm(37181),
+       wm = fm(37267);
+     const Dm = (0, am.r)().fill(1);
```

#### 3303. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24626-L24633` → after: `L24497-L24504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24497-L24504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24497-L24504) · [Before (L24626-L24633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24626-L24633)

```diff
-     const Lk = (0, ik.C)(),
-       tk = (0, ik.C)(),
-       Zk = (0, ik.C)(),
-       jk = (0, ik.C)(),
-       ek = (0, ik.C)(),
-       wk = (0, ik.C)(),
-       Hk = (0, ik.C)(),
-       Jk = (0, ik.C)(),
+     const Rm = (0, am.v)(),
+       pm = (0, am.v)(),
+       Em = (0, am.v)(),
+       om = (0, am.v)(),
+       Om = (0, am.v)(),
+       Ym = (0, am.v)(),
+       qm = (0, am.v)(),
+       jm = (0, am.v)(),
```

#### 3304. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24637` → after: `L24508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24508) · [Before (L24637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24637)

```diff
-       Qk = (0, ik.B)();
+       Qm = (0, am.r)();
```

#### 3305. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24640-L24644` → after: `L24511-L24515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24511-L24515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24511-L24515) · [Before (L24640-L24644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24640-L24644)

```diff
-       const yk = kk.iqk(Fk, Ik, Xk);
-       if (!yk || !yk.ae) return Tk[0] = 0, Tk[1] = 0, Tk[2] = 0, Tk[3] = 15, Tk;
-       const lk = kk.xkk,
-         ak = kk.kqk(Fk) * lk * lk + kk.kqk(Ik) * lk + kk.kqk(Xk);
-       return (0, ik.Q)(yk.ae, yk.te, ak, Tk), Tk
+       const xm = mm.Tim(Tm, fm, hm);
+       if (!xm || !xm.bO) return Am[0] = 0, Am[1] = 0, Am[2] = 0, Am[3] = 15, Am;
+       const wm = mm.qmm,
+         Dm = mm.dDm(Tm) * wm * wm + mm.dDm(fm) * wm + mm.dDm(hm);
+       return (0, am.F)(xm.bO, xm.NO, Dm, Am), Am
```

#### 3306. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24652` → after: `L24523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24523) · [Before (L24652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24652)

```diff
-       return kk <= 0 ? Fk : Fk <= 0 ? kk : kk + (Fk - kk) * Ik
+       return mm <= 0 ? Tm : Tm <= 0 ? mm : mm + (Tm - mm) * fm
```

#### 3307. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24657` → after: `L24528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24528) · [Before (L24657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24657)

```diff
-         XZ: Ik
+         oE: fm
```

#### 3308. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24693` → after: `L24564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24564) · [Before (L24693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24693)

```diff
-         XZ: ik
+         oE: am
```

#### 3309. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24699` → after: `L24570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24570) · [Before (L24699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24699)

```diff
-             Xw: yk
+             qY: xm
```

#### 3310. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24705-L24706` → after: `L24576-L24577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24576-L24577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24576-L24577) · [Before (L24705-L24706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24705-L24706)

```diff
-           let Zk = null !== (Xk = yk.skyLightColourOverride) && void 0 !== Xk ? Xk : yk.mXk,
-             jk = null !== (ik = yk.ambientLightColourOverride) && void 0 !== ik ? ik : yk.hXk;
+           let Em = null !== (hm = xm.skyLightColourOverride) && void 0 !== hm ? hm : xm.ghm,
+             om = null !== (am = xm.ambientLightColourOverride) && void 0 !== am ? am : xm.Whm;
```

#### 3311. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24708-L24711` → after: `L24579-L24582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24579-L24582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24579-L24582) · [Before (L24708-L24711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24708-L24711)

```diff
-           const ek = Math.max(ak, qk, Lk) * lk.g;
-           ak = Math.max(ak, ek), qk = Math.max(qk, ek), Lk = Math.max(Lk, ek), ak = (0, lk.qb)(ak), qk = (0, lk.qb)(qk), Lk = (0, lk.qb)(Lk);
-           const wk = (0, lk.qb)(tk);
-           Tk().lerp(Ik, jk, Zk, wk), ak = (0, lk.t)(ak, jk[0]), qk = (0, lk.t)(qk, jk[1]), Lk = (0, lk.t)(Lk, jk[2]), Ik[0] = Math.max(ak, Ik[0]), Ik[1] = Math.max(qk, Ik[1]), Ik[2] = Math.max(Lk, Ik[2])
+           const Om = Math.max(Dm, im, Rm) * wm.e;
+           Dm = Math.max(Dm, Om), im = Math.max(im, Om), Rm = Math.max(Rm, Om), Dm = (0, wm.tb)(Dm), im = (0, wm.tb)(im), Rm = (0, wm.tb)(Rm);
+           const Ym = (0, wm.tb)(pm);
+           Am().lerp(fm, om, Em, Ym), Dm = (0, wm.n)(Dm, om[0]), im = (0, wm.n)(im, om[1]), Rm = (0, wm.n)(Rm, om[2]), fm[0] = Math.max(Dm, fm[0]), fm[1] = Math.max(im, fm[1]), fm[2] = Math.max(Rm, fm[2])
```

#### 3312. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24717` → after: `L24588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24588) · [Before (L24717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24717)

```diff
-       if (kk.Xw.Nw) {
+       if (mm.qY.FY) {
```

#### 3313. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24740-L24741` → after: `L24611-L24612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24611-L24612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24611-L24612) · [Before (L24740-L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24740-L24741)

```diff
-         yk = kk.JR.aLightLevels;
-       yk && (0, lk.U)(yk.x, yk.y, yk.z, yk.w, Fk) && yk.t5(Ik, Xk, Tk, ik)
+         xm = mm.RP.aLightLevels;
+       xm && (0, wm.U)(xm.x, xm.y, xm.z, xm.w, Tm) && xm.Z8(fm, hm, Am, am)
```

#### 3314. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24744` → after: `L24615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24615) · [Before (L24744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24744)

```diff
-   37461: (kk, Fk, Ik) => {
+   37488: (mm, Tm, fm) => {
```

#### 3315. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24748-L24749` → after: `L24620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24620) · [Before (L24748-L24749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24748-L24749)

```diff
-       h: () => yk,
-       l: () => lk
+       i: () => wm
```

#### 3316. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24751` → after: `L24622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24622) · [Before (L24751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24751)

```diff
-     var Xk = Ik(37259);
+     var hm = fm(37276);
```

#### 3317. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24768` → after: `L24639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24639) · [Before (L24768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24768)

```diff
-       for (const Fk of ik) Fk.isFrozen && (Fk.checkReadyOnlyOnce = !1, (0, Xk.Y)(Fk, !1), kk.push(Fk)), (0, Xk.P)(Fk);
+       for (const Tm of am) Tm.isFrozen && (Tm.checkReadyOnlyOnce = !1, (0, hm.gb)(Tm, !1), mm.push(Tm)), (0, hm.N)(Tm);
```

#### 3318. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24771` → after: `L24642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24642) · [Before (L24771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24771)

```diff
-           for (const Fk of kk) ik.has(Fk) && (Fk.checkReadyOnlyOnce = !0, (0, Xk.Y)(Fk, !0))
+           for (const Tm of mm) am.has(Tm) && (Tm.checkReadyOnlyOnce = !0, (0, hm.gb)(Tm, !0))
```

#### 3319. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24776` → after: `L24647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24647) · [Before (L24776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24776)

```diff
-   37253: (kk, Fk, Ik) => {
+   37267: (mm, Tm, fm) => {
```

#### 3320. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24779` → after: `L24651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24651) · [Before (L24779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24779)

```diff
-       B: () => Qk,
+       D: () => Jm,
```

#### 3321. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24781-L24783` → after: `L24653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24653) · [Before (L24781-L24783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24781-L24783)

```diff
-       F: () => Vk,
-       G: () => zk,
-       J: () => Sk,
+       I: () => zm,
```

#### 3322. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24788` → after: `L24658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24658) · [Before (L24788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24788)

```diff
-       R: () => nk,
+       S: () => Sm,
```

#### 3323. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24790-L24797` → after: `L24660-L24668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24660-L24668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24660-L24668) · [Before (L24790-L24797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24790-L24797)

```diff
-       Y: () => Ek,
-       _: () => Ok,
-       c: () => Ck,
-       cb: () => Bk,
-       db: () => Wk,
-       fb: () => ck,
-       g: () => Lk,
-       hb: () => Uk,
+       W: () => km,
+       X: () => bm,
+       bb: () => sm,
+       d: () => ym,
+       e: () => Rm,
+       eb: () => rm,
+       h: () => Pm,
+       i: () => Xm,
+       ib: () => Hm,
```

#### 3324. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24799` → after: `L24670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24670) · [Before (L24799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24799)

```diff
-       lb: () => dk,
+       mb: () => um,
```

#### 3325. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24804-L24805` → after: `L24674-L24676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24674-L24676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24674-L24676) · [Before (L24804-L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24804-L24805)

```diff
-       t: () => Zk,
-       w: () => Yk
+       tb: () => Dm,
+       u: () => nm,
+       y: () => Qm
```

#### 3326. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24807` → after: `L24678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24678) · [Before (L24807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24807)

```diff
-     var Xk = Ik(37249);
+     var hm = fm(37260);
```

#### 3327. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24810` → after: `L24681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24681) · [Before (L24810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24810)

```diff
-       return "vertex" === Fk ? (0, Xk.Zb)(kk, Ik) : (0, Xk.X)(kk, Ik)
+       return "vertex" === Tm ? (0, hm.Lb)(mm, fm) : (0, hm.O)(mm, fm)
```

#### 3328. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24814` → after: `L24685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24685) · [Before (L24814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24814)

```diff
-       if (!Number.isFinite(kk)) throw new Error(`Cannot emit ${kk} as a shader float literal`);
+       if (!Number.isFinite(mm)) throw new Error(`Cannot emit ${mm} as a shader float literal`);
```

#### 3329. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24816` → after: `L24687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24687) · [Before (L24816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24816)

```diff
-       return /[.e]/.test(Fk) ? Fk : `${Fk}.0`
+       return /[.e]/.test(Tm) ? Tm : `${Tm}.0`
```

#### 3330. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24830` → after: `L24701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24701) · [Before (L24830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24830)

```diff
-       return `{\n        ${(0,Xk.G)(kk,Fk,"base",`${Ik} / (3.0 - 2.0 * ${Ik})`)}\n        ${(0,Xk.G)(kk,Fk,"dark","1.0 - base")}\n        ${Ik} = 1.0 - dark * dark * dark;\n    }`
+       return `{\n        ${(0,hm.u)(mm,Tm,"base",`${fm} / (3.0 - 2.0 * ${fm})`)}\n        ${(0,hm.u)(mm,Tm,"dark","1.0 - base")}\n        ${fm} = 1.0 - dark * dark * dark;\n    }`
```

#### 3331. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24837` → after: `L24708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24708) · [Before (L24837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24837)

```diff
-       return `max(${Fk}, ${(0,Xk.m)(kk,"vec3",`(${Ik}) * ${Tk}`)})`
+       return `max(${Tm}, ${(0,hm.j)(mm,"vec3",`(${fm}) * ${Am}`)})`
```

#### 3332. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24845-L24846` → after: `L24716-L24717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24716-L24717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24716-L24717) · [Before (L24845-L24846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24845-L24846)

```diff
-       const Ik = (0, Xk.Mb)(kk, "uAmbientLightColour");
-       return `${Ik} + (${Fk}) * (1.0 - ${Ik})`
+       const fm = (0, hm.Ab)(mm, "uAmbientLightColour");
+       return `${fm} + (${Tm}) * (1.0 - ${fm})`
```

#### 3333. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24854` → after: `L24725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24725) · [Before (L24854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24854)

```diff
-       return Kk(kk, `heldLight = ${jk(kk,"heldLight")};\n                ${Fk} = max(${Fk}, heldLight);`)
+       return Km(mm, `heldLight = ${om(mm,"heldLight")};\n                ${Tm} = max(${Tm}, heldLight);`)
```

#### 3334. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24858` → after: `L24729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24729) · [Before (L24858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24858)

```diff
-       return Kk(kk, `${Ik} = heldLight;\n                heldLight = ${jk(kk,"heldLight")};\n                ${Fk} = max(${Fk}, heldLight);`)
+       return Km(mm, `${fm} = heldLight;\n                heldLight = ${om(mm,"heldLight")};\n                ${Tm} = max(${Tm}, heldLight);`)
```

#### 3335. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24862-L24866` → after: `L24733-L24737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24733-L24737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24733-L24737) · [Before (L24862-L24866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24862-L24866)

```diff
-       const Ik = (0, Xk.Mb)(kk, "uHeldLightColour"),
-         Tk = (0, Xk.Mb)(kk, "uHeldLightPos"),
-         yk = (0, Xk.X)(kk, "vPositionW"),
-         lk = (0, Xk.I)(kk);
-       return `{\n        ${(0,Xk.G)(kk,"float","maxComponent",`max(${Ik}.r, max(${Ik}.g, ${Ik}.b))`)}\n        if (maxComponent > 0.0) {\n            ${(0,Xk.G)(kk,"float","coneCos",`${Tk}.w`)}\n            ${(0,Xk.G)(kk,"float","rangeOverride",`${Ik}.a`)}\n\n            ${(0,Xk. … [truncated]
+       const fm = (0, hm.Ab)(mm, "uHeldLightColour"),
+         Am = (0, hm.Ab)(mm, "uHeldLightPos"),
+         xm = (0, hm.O)(mm, "vPositionW"),
+         wm = (0, hm.A)(mm);
+       return `{\n        ${(0,hm.u)(mm,"float","maxComponent",`max(${fm}.r, max(${fm}.g, ${fm}.b))`)}\n        if (maxComponent > 0.0) {\n            ${(0,hm.u)(mm,"float","coneCos",`${Am}.w`)}\n            ${(0,hm.u)(mm,"float","rangeOverride",`${fm}.a`)}\n\n            ${(0,hm. … [truncated]
```

#### 3336. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24870` → after: `L24741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24741) · [Before (L24870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24870)

```diff
-       return (0, Xk.eb)(kk) ? "!var finalDiffuse: vec3f=clamp\\(" : "!vec3 finalDiffuse=clamp\\("
+       return (0, hm.T)(mm) ? "!var finalDiffuse: vec3f=clamp\\(" : "!vec3 finalDiffuse=clamp\\("
```

#### 3337. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24874` → after: `L24745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24745) · [Before (L24874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24874)

```diff
-       return (0, Xk.eb)(kk) ? "var finalDiffuse: vec3f=clamp(" : "vec3 finalDiffuse=clamp("
+       return (0, hm.T)(mm) ? "var finalDiffuse: vec3f=clamp(" : "vec3 finalDiffuse=clamp("
```

#### 3338. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24887` → after: `L24758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24758) · [Before (L24887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24887)

```diff
-       return `\n    #ifdef BLOXD_TERRAIN_DIRECTIONAL\n    ${(0,Xk.Qb)(kk,"vTerrainLambert","float","mediump")}\n    #endif\n`
+       return `\n    #ifdef BLOXD_TERRAIN_DIRECTIONAL\n    ${(0,hm.Bb)(mm,"vTerrainLambert","float","mediump")}\n    #endif\n`
```

#### 3339. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24891-L24893` → after: `L24762-L24764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24762-L24764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24762-L24764) · [Before (L24891-L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24891-L24893)

```diff
-       const Ik = (0, Xk.Zb)(kk, "vNormalW"),
-         Tk = (0, Xk.Mb)(kk, "uDirLights");
-       return `\n    #ifdef BLOXD_TERRAIN_DIRECTIONAL\n        ${(0,Xk.Zb)(kk,"vTerrainLambert")} = ${Fk>0?Array.from({length:Fk},((kk,Fk)=>`
+       const fm = (0, hm.Lb)(mm, "vNormalW"),
+         Am = (0, hm.Ab)(mm, "uDirLights");
+       return `\n    #ifdef BLOXD_TERRAIN_DIRECTIONAL\n        ${(0,hm.Lb)(mm,"vTerrainLambert")} = ${Tm>0?Array.from({length:Tm},((mm,Tm)=>`
```

#### 3340. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24908` → after: `L24779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24779) · [Before (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24908)

```diff
-       return `\n    #ifdef BLOXD_TERRAIN_DIRECTIONAL\n    diffuseBase += ${(0,Xk.m)(kk,"vec3",(0,Xk.X)(kk,"vTerrainLambert"))};\n    #endif\n`
+       return `\n    #ifdef BLOXD_TERRAIN_DIRECTIONAL\n    diffuseBase += ${(0,hm.j)(mm,"vec3",(0,hm.O)(mm,"vTerrainLambert"))};\n    #endif\n`
```

#### 3341. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24912-L24914` → after: `L24783-L24785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24783-L24785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24783-L24785) · [Before (L24912-L24914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24912-L24914)

```diff
-       const Fk = (0, Xk.i)(kk, "aPackedLightLevels", "float", "highp"),
-         Ik = (0, Xk.Qb)(kk, "vLightLevels", "vec4", "mediump");
-       return (0, Xk.eb)(kk) ? `\n    #ifdef BLOXD_LIGHT_WORD\n    attribute aPackedLightLevels: u32;\n    #endif\n    #ifdef BLOXD_LIGHTING\n    #ifndef BLOXD_LIGHT_WORD\n    ${Fk}\n    #endif\n    ${Ik}\n    #endif\n` : `\n    #ifdef BLOXD_LIGHTING\n    ${Fk}\n    ${Ik}\n    #en … [truncated]
+       const Tm = (0, hm.e)(mm, "aPackedLightLevels", "float", "highp"),
+         fm = (0, hm.Bb)(mm, "vLightLevels", "vec4", "mediump");
+       return (0, hm.T)(mm) ? `\n    #ifdef BLOXD_LIGHT_WORD\n    attribute aPackedLightLevels: u32;\n    #endif\n    #ifdef BLOXD_LIGHTING\n    #ifndef BLOXD_LIGHT_WORD\n    ${Tm}\n    #endif\n    ${fm}\n    #endif\n` : `\n    #ifdef BLOXD_LIGHTING\n    ${Tm}\n    ${fm}\n    #end … [truncated]
```

#### 3342. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24920-L24921` → after: `L24791-L24792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24791-L24792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24791-L24792) · [Before (L24920-L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24920-L24921)

```diff
-             const Tk = 1 === Ik ? Fk : `floor(${Fk} / ${ik(Ik)})`;
-             return `${(0,Xk.lb)(kk,Tk,"16.0")} / 15.0`
+             const Am = 1 === fm ? Tm : `floor(${Tm} / ${am(fm)})`;
+             return `${(0,hm.Y)(mm,Am,"16.0")} / 15.0`
```

#### 3343. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24923` → after: `L24794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24794) · [Before (L24923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24923)

```diff
-           return `{\n        ${(0,Xk.G)(kk,"vec4","lightLevels",(0,Xk.m)(kk,"vec4",Ik(1),Ik(16),Ik(256),`floor(${Fk} / 4096.0) / 15.0`))}\n\n        ${(0,Xk.G)(kk,"float","maxComponent","max(lightLevels.r, max(lightLevels.g, lightLevels.b))")}\n        ${(0,Xk.G)(kk,"vec3","block … [truncated]
+           return `{\n        ${(0,hm.u)(mm,"vec4","lightLevels",(0,hm.j)(mm,"vec4",fm(1),fm(16),fm(256),`floor(${Tm} / 4096.0) / 15.0`))}\n\n        ${(0,hm.u)(mm,"float","maxComponent","max(lightLevels.r, max(lightLevels.g, lightLevels.b))")}\n        ${(0,hm.u)(mm,"vec3","block … [truncated]
```

#### 3344. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24925-L24926` → after: `L24796-L24797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24796-L24797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24796-L24797) · [Before (L24925-L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24925-L24926)

```diff
-         Ik = (0, Xk.Wb)(kk, "aPackedLightLevels");
-       return (0, Xk.eb)(kk) ? `\n    #ifdef BLOXD_LIGHTING\n    #ifdef BLOXD_LIGHT_WORD\n    ${Fk(`f32(${Ik} & 0xffffu)`)}\n    #else\n    ${Fk(Ik)}\n    #endif\n    #endif\n` : `\n    #ifdef BLOXD_LIGHTING\n    ${Fk(Ik)}\n    #endif\n`
+         fm = (0, hm.Ib)(mm, "aPackedLightLevels");
+       return (0, hm.T)(mm) ? `\n    #ifdef BLOXD_LIGHTING\n    #ifdef BLOXD_LIGHT_WORD\n    ${Tm(`f32(${fm} & 0xffffu)`)}\n    #else\n    ${Tm(fm)}\n    #endif\n    #endif\n` : `\n    #ifdef BLOXD_LIGHTING\n    ${Tm(fm)}\n    #endif\n`
```

#### 3345. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24930` → after: `L24801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24801) · [Before (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24930)

```diff
-       return `\n    #ifdef BLOXD_LIGHTING\n    ${(0,Xk.Qb)(kk,"vLightLevels","vec4","mediump")}\n    #endif\n`
+       return `\n    #ifdef BLOXD_LIGHTING\n    ${(0,hm.Bb)(mm,"vLightLevels","vec4","mediump")}\n    #endif\n`
```

#### 3346. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24934` → after: `L24805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24805) · [Before (L24934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24934)

```diff
-       return (0, Xk.ob)(kk, "color", Fk)
+       return (0, hm._)(mm, "color", Tm)
```

#### 3347. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24938` → after: `L24809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24809) · [Before (L24938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24938)

```diff
-       return `\n    #ifdef BLOXD_LIGHTING\n    {\n        ${(0,Xk.G)(kk,"vec4","lightLevels",(0,Xk.X)(kk,"vLightLevels"))}\n        ${qk(kk,"vec4","lightLevels")}\n        ${(0,Xk.G)(kk,"vec3","blockLightContrib",jk(kk,"lightLevels.rgb"))}\n        ${(0,Xk.G)(kk,"vec3","skyLightC … [truncated]
+       return `\n    #ifdef BLOXD_LIGHTING\n    {\n        ${(0,hm.u)(mm,"vec4","lightLevels",(0,hm.O)(mm,"vLightLevels"))}\n        ${im(mm,"vec4","lightLevels")}\n        ${(0,hm.u)(mm,"vec3","blockLightContrib",om(mm,"lightLevels.rgb"))}\n        ${(0,hm.u)(mm,"vec3","skyLightC … [truncated]
```

#### 3348. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24942` → after: `L24813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24813) · [Before (L24942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24942)

```diff
-       return `\n    #ifdef BLOXD_LIGHTING\n    #ifndef BLOXD_UNLIT\n    {\n        ${(0,Xk.G)(kk,"vec3","lightResult",`${(0,Xk.X)(kk,"vLightAndOpacity")}.xyz`)}\n        ${xk(kk,"lightResult")}\n        ${Gk(kk,"lightResult")}\n    }\n    #endif\n    #endif\n`
+       return `\n    #ifdef BLOXD_LIGHTING\n    #ifndef BLOXD_UNLIT\n    {\n        ${(0,hm.u)(mm,"vec3","lightResult",`${(0,hm.O)(mm,"vLightAndOpacity")}.xyz`)}\n        ${Vm(mm,"lightResult")}\n        ${em(mm,"lightResult")}\n    }\n    #endif\n    #endif\n`
```

#### 3349. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24948` → after: `L24819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24819) · [Before (L24948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24948)

```diff
-       return `\n    #ifdef BLOXD_LIGHTING\n    ${(0,Xk.G)(kk,"vec4",bk,(0,Xk.X)(kk,"vLightLevels"))}\n    ${qk(kk,"vec4",bk)}\n    ${(0,Xk.G)(kk,"vec3",Rk,(0,Xk.m)(kk,"vec3","0.0"))}\n    {\n        ${(0,Xk.G)(kk,"vec3","blockLightContrib",jk(kk,`${bk}.rgb`))}\n        ${(0,Xk.G) … [truncated]
+       return `\n    #ifdef BLOXD_LIGHTING\n    ${(0,hm.u)(mm,"vec4",Xm,(0,hm.O)(mm,"vLightLevels"))}\n    ${im(mm,"vec4",Xm)}\n    ${(0,hm.u)(mm,"vec3",Pm,(0,hm.j)(mm,"vec3","0.0"))}\n    {\n        ${(0,hm.u)(mm,"vec3","blockLightContrib",om(mm,`${Xm}.rgb`))}\n        ${(0,hm.u) … [truncated]
```

#### 3350. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24953` → after: `L24824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24824) · [Before (L24953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24953)

```diff
-       return `${(0,Xk.G)(kk,"float","maxComponent",`max(${Fk}.r, max(${Fk}.g, ${Fk}.b))`)}\n        ${(0,Xk.G)(kk,"vec4","lightLevels",(0,Xk.m)(kk,"vec4",tk(kk,`${Fk}.rgb`,"maxComponent"),`${Fk}.w`))}\n        ${qk(kk,"vec4","lightLevels")}`
+       return `${(0,hm.u)(mm,"float","maxComponent",`max(${Tm}.r, max(${Tm}.g, ${Tm}.b))`)}\n        ${(0,hm.u)(mm,"vec4","lightLevels",(0,hm.j)(mm,"vec4",pm(mm,`${Tm}.rgb`,"maxComponent"),`${Tm}.w`))}\n        ${im(mm,"vec4","lightLevels")}`
```

#### 3351. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24957` → after: `L24828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24828) · [Before (L24957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24957)

```diff
-       return `\n    #ifdef BLOXD_LIGHTING\n    {\n        ${Nk(kk,Fk)}\n        ${(0,Xk.Zb)(kk,Ck)} = lightLevels;\n    }\n    #endif\n`
+       return `\n    #ifdef BLOXD_LIGHTING\n    {\n        ${Cm(mm,Tm)}\n        ${(0,hm.Lb)(mm,ym)} = lightLevels;\n    }\n    #endif\n`
```

#### 3352. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24961` → after: `L24832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24832) · [Before (L24961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24961)

```diff
-       return `\n    #ifdef BLOXD_LIGHTING\n    #ifndef BLOXD_UNLIT\n    ${(0,Xk.G)(kk,"vec4",bk,(0,Xk.X)(kk,Ck))}\n    ${(0,Xk.G)(kk,"vec3",Rk,(0,Xk.m)(kk,"vec3","0.0"))}\n    {\n        ${(0,Xk.G)(kk,"vec3","lightResult",`${(0,Xk.X)(kk,"vLightAndOpacity")}.xyz`)}\n        ${Pk(k … [truncated]
+       return `\n    #ifdef BLOXD_LIGHTING\n    #ifndef BLOXD_UNLIT\n    ${(0,hm.u)(mm,"vec4",Xm,(0,hm.O)(mm,ym))}\n    ${(0,hm.u)(mm,"vec3",Pm,(0,hm.j)(mm,"vec3","0.0"))}\n    {\n        ${(0,hm.u)(mm,"vec3","lightResult",`${(0,hm.O)(mm,"vLightAndOpacity")}.xyz`)}\n        ${Im(m … [truncated]
```

#### 3353. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24965` → after: `L24836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24836) · [Before (L24965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24965)

```diff
-       return `\n    #ifndef V_LIGHT_AND_OPACITY\n        #define V_LIGHT_AND_OPACITY\n        ${(0,Xk.Qb)(kk,"vLightAndOpacity","vec4","mediump")}\n    #endif\n`
+       return `\n    #ifndef V_LIGHT_AND_OPACITY\n        #define V_LIGHT_AND_OPACITY\n        ${(0,hm.Bb)(mm,"vLightAndOpacity","vec4","mediump")}\n    #endif\n`
```

#### 3354. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24971` → after: `L24842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24842) · [Before (L24971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24971)

```diff
-       return `\n    #ifdef V_TINT_AND_OPACITY\n        #define BLOXD_OPACITY ${Ik}.a\n    #else\n        ${fk(kk)}\n        #define BLOXD_OPACITY ${Xk}.w\n    #endif\n`
+       return `\n    #ifdef V_TINT_AND_OPACITY\n        #define BLOXD_OPACITY ${fm}.a\n    #else\n        ${lm(mm)}\n        #define BLOXD_OPACITY ${hm}.w\n    #endif\n`
```

#### 3355. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24975` → after: `L24846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24846) · [Before (L24975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24975)

```diff
-       return `\n    #ifndef V_TINT_AND_OPACITY\n        #define V_TINT_AND_OPACITY\n        ${(0,Xk.Qb)(kk,"vTintAndOpacity","vec4","lowp")}\n    #endif\n`
+       return `\n    #ifndef V_TINT_AND_OPACITY\n        #define V_TINT_AND_OPACITY\n        ${(0,hm.Bb)(mm,"vTintAndOpacity","vec4","lowp")}\n    #endif\n`
```

#### 3356. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24979-L24980` → after: `L24850-L24851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24850-L24851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24850-L24851) · [Before (L24979-L24980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24979-L24980)

```diff
-       const Fk = `\n            ${(0,Xk.G)(kk,"vec2","pos",`floor(${(0,Xk.lb)(kk,"position","4.0")})`)}\n            if (pos.y < 0.5) {\n                     if (pos.x < 0.5) { return  1.0 / 16.0; } \n                else if (pos.x < 1.5) { return  9.0 / 16.0; } \n                … [truncated]
-       return `\n    #ifndef BAYER_DITHER_FN\n        #define BAYER_DITHER_FN\n        ${(0,Xk.y)(kk,"float","bayerDither",[{name:"position",type:"vec2"}],Fk)}\n    #endif\n`
+       const Tm = `\n            ${(0,hm.u)(mm,"vec2","pos",`floor(${(0,hm.Y)(mm,"position","4.0")})`)}\n            if (pos.y < 0.5) {\n                     if (pos.x < 0.5) { return  1.0 / 16.0; } \n                else if (pos.x < 1.5) { return  9.0 / 16.0; } \n                 … [truncated]
+       return `\n    #ifndef BAYER_DITHER_FN\n        #define BAYER_DITHER_FN\n        ${(0,hm.r)(mm,"float","bayerDither",[{name:"position",type:"vec2"}],Tm)}\n    #endif\n`
```

#### 3357. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24983` → after: `L24854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24854) · [Before (L24983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24983)

```diff
-   37463: (kk, Fk, Ik) => {
+   37492: (mm, Tm, fm) => {
```

#### 3358. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24987-L24988` → after: `L24857-L24860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24857-L24860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24857-L24860) · [Before (L24987-L24988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24987-L24988)

```diff
-       i: () => Tk,
-       m: () => jk,
+       f: () => Am,
+       g: () => om,
+       k: () => pm,
+       n: () => Em,
```

#### 3359. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24990-L24993` → after: `L24862-L24864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24862-L24864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24862-L24864) · [Before (L24990-L24993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24990-L24993)

```diff
-       r: () => Zk,
-       u: () => wk,
-       v: () => qk,
-       z: () => ak
+       s: () => im,
+       t: () => Dm,
+       w: () => jm
```

#### 3360. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24995` → after: `L24866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24866) · [Before (L24995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L24995)

```diff
-     var Xk = Ik(37468);
+     var hm = fm(37498);
```

#### 3361. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25014` → after: `L24885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24885) · [Before (L25014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25014)

```diff
-         const Fk = kk.useUbo ? kk : kk.currentEffect;
+         const Tm = mm.useUbo ? mm : mm.currentEffect;
```

#### 3362. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25041` → after: `L24912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24912) · [Before (L25041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25041)

```diff
-       for (let Ik = 0; Ik < kk.lightCount * Xk.d; Ik += Xk.d) Fk += kk.lights[Ik + Xk.j.kind] === Xk.f.directional ? 1 : 0;
+       for (let fm = 0; fm < mm.lightCount * hm.e; fm += hm.e) Tm += mm.lights[fm + hm.i.kind] === hm.h.directional ? 1 : 0;
```

#### 3363. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25049` → after: `L24920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24920) · [Before (L25049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25049)

```diff
-       } = kk, ik = Xk.j;
+       } = mm, am = hm.i;
```

#### 3364. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25051-L25052` → after: `L24922-L24923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24922-L24923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24922-L24923) · [Before (L25051-L25052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25051-L25052)

```diff
-       for (let lk = 0; lk < kk.lightCount * Xk.d && yk < 4 * Fk; lk += Xk.d) {
-         if (Tk[lk + ik.kind] !== Xk.f.directional) continue;
+       for (let wm = 0; wm < mm.lightCount * hm.e && xm < 4 * Tm; wm += hm.e) {
+         if (Am[wm + am.kind] !== hm.h.directional) continue;
```

#### 3365. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25057` → after: `L24928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24928) · [Before (L25057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25057)

```diff
-           Lk = qk > 0 ? -1 / qk : 0;
+           Rm = im > 0 ? -1 / im : 0;
```

#### 3366. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25072` → after: `L24943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24943) · [Before (L25072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25072)

```diff
-         this.Xw = kk, this.dedup = new ik
+         this.qY = mm, this.dedup = new am
```

#### 3367. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25075` → after: `L24946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24946) · [Before (L25075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25075)

```diff
-         this.Xw.Nw && this.dedup.shouldWrite(kk) && function(kk, Fk) {
+         this.qY.FY && this.dedup.shouldWrite(mm) && function(mm, Tm) {
```

#### 3368. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25078` → after: `L24949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24949) · [Before (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25078)

```diff
-         }(kk, this.Xw)
+         }(mm, this.qY)
```

#### 3369. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25085` → after: `L24956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24956) · [Before (L25085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25085)

```diff
-       return Fk || (Fk = new yk(new Float32Array(17)), ek.set(kk, Fk)), Fk.due() && (Jk(kk, Fk.values), Fk.values[16] = kk.Nw ? 1 : 0, Fk.settle()), Fk.version
+       return Tm || (Tm = new xm(new Float32Array(17)), Om.set(mm, Tm)), Tm.due() && (jm(mm, Tm.values), Tm.values[16] = mm.FY ? 1 : 0, Tm.settle()), Tm.version
```

#### 3370. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25091-L25093` → after: `L24962-L24964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24962-L24964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24962-L24964) · [Before (L25091-L25093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25091-L25093)

```diff
-       Fk[0] = kk.AXk[0], Fk[1] = kk.AXk[1], Fk[2] = kk.AXk[2], Fk[3] = kk.blk, Fk[4] = kk.gXk[0], Fk[5] = kk.gXk[1], Fk[6] = kk.gXk[2], Fk[7] = kk.plk;
-       const Tk = null !== (Ik = kk.skyLightColourOverride) && void 0 !== Ik ? Ik : kk.mXk,
-         ik = null !== (Xk = kk.ambientLightColourOverride) && void 0 !== Xk ? Xk : kk.hXk,
+       Tm[0] = mm.Uhm[0], Tm[1] = mm.Uhm[1], Tm[2] = mm.Uhm[2], Tm[3] = mm.Mwm, Tm[4] = mm.dhm[0], Tm[5] = mm.dhm[1], Tm[6] = mm.dhm[2], Tm[7] = mm.swm;
+       const Am = null !== (fm = mm.skyLightColourOverride) && void 0 !== fm ? fm : mm.ghm,
+         am = null !== (hm = mm.ambientLightColourOverride) && void 0 !== hm ? hm : mm.Whm,
```

#### 3371. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25101` → after: `L24972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24972) · [Before (L25101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25101)

```diff
-   37243: (kk, Fk, Ik) => {
+   37255: (mm, Tm, fm) => {
```

#### 3372. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25104` → after: `L24975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24975) · [Before (L25104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25104)

```diff
-         [`BLOXD_PLUGIN_${kk}`]: !0
+         [`BLOXD_PLUGIN_${mm}`]: !0
```

#### 3373. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25111` → after: `L24982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24982) · [Before (L25111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25111)

```diff
-   37475: (kk, Fk, Ik) => {
+   37507: (mm, Tm, fm) => {
```

#### 3374. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25113` → after: `L24984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24984) · [Before (L25113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25113)

```diff
-       e: () => ak
+       c: () => Dm
```

#### 3375. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25115` → after: `L24986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L24986) · [Before (L25115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25115)

```diff
-     var Xk = Ik(37249);
+     var hm = fm(37260);
```

#### 3376. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25138` → after: `L25009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L25009) · [Before (L25138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25138)

```diff
-           if (void 0 === Fk) throw new Error(`Cannot size uniform of type "${kk}" - add it to UNIFORM_COMPONENTS`);
+           if (void 0 === Tm) throw new Error(`Cannot size uniform of type "${mm}" - add it to UNIFORM_COMPONENTS`);
```

#### 3377. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25141-L25142` → after: `L25012-L25013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25012-L25013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L25012-L25013) · [Before (L25141-L25142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L25141-L25142)

```diff
-         if (kk.arraySize && Ik > 4 && 16 !== Ik) throw new Error(`Uniform "${kk.name}" cannot be an array of "${kk.type}"`);
-         const lk = (0, Xk.eb)(Fk) ? function(kk) {
+         if (mm.arraySize && fm > 4 && 16 !== fm) throw new Error(`Uniform "${mm.name}" cannot be an array of "${mm.type}"`);
+         const wm = (0, hm.T)(Tm) ? function(mm) {
```
