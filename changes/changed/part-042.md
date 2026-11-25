# Changed — Bundle Modifications Report (Part 042 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `42 / 56` (**437** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 041](part-041.md) · [Part 043 →](part-043.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7)

#### 53. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L380` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L380) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L380)

```diff
-         this.rejectSave(new Error(GG ? wG.e.saveBusy.text : "The replay couldn't be saved"))
+         this.rejectSave(new Error(MM ? OM.c.saveBusy.text : "The replay couldn't be saved"))
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L386)

```diff
-         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(wG.e.cropBusy.text)) : this.deps.notify(wG.e.cropBusy)
+         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(OM.c.cropBusy.text)) : this.deps.notify(OM.c.cropBusy)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (121 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L1-L2)

```diff
- export const id = 62;
- export const ids = [62];
+ export const id = 73;
+ export const ids = [73];
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L4` → after: `L4-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L4-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4-L154) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4)

```diff
-   61162: (GG, bG, ZG) => {
+   63256: (MM, rM, iM) => {
+     var OM = {
+       "./Air Walk.png": 63258,
+       "./Antlers Bonus.png": 63261,
+       "./Arrow Damage Enchantment.png": 63263,
+       "./Arrow Speed Enchantment.png": 63265,
+       "./Attack Speed Enchantment.png": 63273,
+       "./Blindness.png": 63275,
+       "./Boating.png": 63280,
+       "./Bounciness.png": 63286,
+       "./Brain Rot.png": 63293,
+       "./Break Speed Enchantment.png": 63295,
+       "./Bunny Hop.png": 63301,
+       "./Critical Damage Enchantment.png": 63308,
+       "./Cross.png": 63310,
+       "./Damage Enchantment.png": 63314,
+ ... (135 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L13-L16` → after: `L163-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L163-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L163-L166) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L13-L16)

```diff
-     var wG = ZG(41435),
-       SG = ZG(1910),
-       LG = ZG(2128),
-       yG = ZG(3144);
+     var OM = iM(42157),
+       SM = iM(2050),
+       jM = iM(2257),
+       aM = iM(3580);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L19-L20` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L169-L170) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L19-L20)

```diff
-       (0, LG.t)((() => {
-         (0, SG.d)()
+       (0, jM.s)((() => {
+         (0, SM.c)()
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L25` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L175) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L25)

```diff
-       const ZG = (0, LG.p)();
+       const iM = (0, jM.o)();
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L35` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L185) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L35)

```diff
-       return `${ZG.p}${GG}${encodeURIComponent(bG)}.png`
+       return `${iM.p}${MM}${encodeURIComponent(rM)}.png`
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L40-L43` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L190-L193) · [Before (L40-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L40-L43)

```diff
-       const ZG = "static/items/8cf6154c6eda6753/";
-       return (0, wG.b)(GG) ? null !== (bG = function(GG) {
-         return UG(GG, yG.g.ITEM)
-       }(GG)) && void 0 !== bG ? bG : YG(ZG, GG) : null
+       const iM = "static/items/1a4d1f22bd315291/";
+       return (0, OM.e)(MM) ? null !== (rM = function(MM) {
+         return nM(MM, aM.f.ITEM)
+       }(MM)) && void 0 !== rM ? rM : QM(iM, MM) : null
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L48` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L198) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L48)

```diff
-         return ZG(61170)(`./${GG}.png`)
+         return iM(63256)(`./${MM}.png`)
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L55` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L205) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L55)

```diff
-       return ZG(61726)
+       return iM(63792)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L62-L63` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L212-L213) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L62-L63)

```diff
-         return UG(GG, yG.g.BLOCK)
-       }(GG)) && void 0 !== bG ? bG : YG(ZG, GG)
+         return nM(MM, aM.f.BLOCK)
+       }(MM)) && void 0 !== rM ? rM : QM(iM, MM)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L68` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L218) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L68)

```diff
-         return ZG(61731)(`./${GG}.png`)
+         return iM(63798)(`./${MM}.png`)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L74-L223` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L224) · [Before (L74-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L74-L223)

```diff
-   61170: (GG, bG, ZG) => {
-     var wG = {
-       "./Air Walk.png": 61174,
-       "./Antlers Bonus.png": 61181,
-       "./Arrow Damage Enchantment.png": 61189,
-       "./Arrow Speed Enchantment.png": 61192,
-       "./Attack Speed Enchantment.png": 61199,
-       "./Blindness.png": 61208,
-       "./Boating.png": 61216,
-       "./Bounciness.png": 61221,
-       "./Brain Rot.png": 61228,
-       "./Break Speed Enchantment.png": 61235,
-       "./Bunny Hop.png": 61241,
-       "./Critical Damage Enchantment.png": 61250,
-       "./Cross.png": 61256,
-       "./Damage Enchantment.png": 61265,
- ... (134 more removed lines; see GitHub link above)
+   63258: (MM, rM, iM) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L226` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L227) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L226)

```diff
-   61181: (GG, bG, ZG) => {
+   63261: (MM, rM, iM) => {
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L229` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L230) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L229)

```diff
-   61189: (GG, bG, ZG) => {
+   63263: (MM, rM, iM) => {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L232` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L233) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L232)

```diff
-   61192: (GG, bG, ZG) => {
+   63265: (MM, rM, iM) => {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L235` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L236) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L235)

```diff
-   61199: (GG, bG, ZG) => {
+   63273: (MM, rM, iM) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L238` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L239) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L238)

```diff
-   61208: (GG, bG, ZG) => {
+   63275: (MM, rM, iM) => {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L241` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L242) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L241)

```diff
-   61216: (GG, bG, ZG) => {
+   63280: (MM, rM, iM) => {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L244` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L245) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L244)

```diff
-   61221: (GG, bG, ZG) => {
+   63286: (MM, rM, iM) => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L247` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L248) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L247)

```diff
-   61228: (GG, bG, ZG) => {
+   63293: (MM, rM, iM) => {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L250` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L251) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L250)

```diff
-   61235: (GG, bG, ZG) => {
+   63295: (MM, rM, iM) => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L253` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L254) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L253)

```diff
-   61241: (GG, bG, ZG) => {
+   63301: (MM, rM, iM) => {
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L256` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L257) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L256)

```diff
-   61250: (GG, bG, ZG) => {
+   63308: (MM, rM, iM) => {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L259` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L260) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L259)

```diff
-   61256: (GG, bG, ZG) => {
+   63310: (MM, rM, iM) => {
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L262` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L263) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L262)

```diff
-   61265: (GG, bG, ZG) => {
+   63314: (MM, rM, iM) => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L265` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L266) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L265)

```diff
-   61269: (GG, bG, ZG) => {
+   63323: (MM, rM, iM) => {
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L268` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L269) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L268)

```diff
-   61271: (GG, bG, ZG) => {
+   63325: (MM, rM, iM) => {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L271` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L272) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L271)

```diff
-   61275: (GG, bG, ZG) => {
+   63328: (MM, rM, iM) => {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L274` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L275) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L274)

```diff
-   61284: (GG, bG, ZG) => {
+   63336: (MM, rM, iM) => {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L277` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L278) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L277)

```diff
-   61290: (GG, bG, ZG) => {
+   63341: (MM, rM, iM) => {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L280` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L281) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L280)

```diff
-   61292: (GG, bG, ZG) => {
+   63346: (MM, rM, iM) => {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L283` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L284) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L283)

```diff
-   61298: (GG, bG, ZG) => {
+   63349: (MM, rM, iM) => {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L286` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L287) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L286)

```diff
-   61306: (GG, bG, ZG) => {
+   63352: (MM, rM, iM) => {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L289` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L290) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L289)

```diff
-   61311: (GG, bG, ZG) => {
+   63361: (MM, rM, iM) => {
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L292` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L293) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L292)

```diff
-   61318: (GG, bG, ZG) => {
+   63367: (MM, rM, iM) => {
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L295` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L296) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L295)

```diff
-   61325: (GG, bG, ZG) => {
+   63370: (MM, rM, iM) => {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L298` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L299) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L298)

```diff
-   61328: (GG, bG, ZG) => {
+   63374: (MM, rM, iM) => {
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L301` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L302) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L301)

```diff
-   61336: (GG, bG, ZG) => {
+   63377: (MM, rM, iM) => {
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L304` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L305) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L304)

```diff
-   61344: (GG, bG, ZG) => {
+   63385: (MM, rM, iM) => {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L307` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L308) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L307)

```diff
-   61352: (GG, bG, ZG) => {
+   63392: (MM, rM, iM) => {
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L310` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L311) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L310)

```diff
-   61354: (GG, bG, ZG) => {
+   63398: (MM, rM, iM) => {
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L313` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L314) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L313)

```diff
-   61363: (GG, bG, ZG) => {
+   63404: (MM, rM, iM) => {
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L316` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L317) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L316)

```diff
-   61367: (GG, bG, ZG) => {
+   63406: (MM, rM, iM) => {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L319` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L320) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L319)

```diff
-   61370: (GG, bG, ZG) => {
+   63408: (MM, rM, iM) => {
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L322` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L323) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L322)

```diff
-   61378: (GG, bG, ZG) => {
+   63414: (MM, rM, iM) => {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L325` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L326) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L325)

```diff
-   61380: (GG, bG, ZG) => {
+   63422: (MM, rM, iM) => {
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L328` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L329) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L328)

```diff
-   61388: (GG, bG, ZG) => {
+   63430: (MM, rM, iM) => {
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L331` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L332) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L331)

```diff
-   61396: (GG, bG, ZG) => {
+   63438: (MM, rM, iM) => {
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L334` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L335) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L334)

```diff
-   61403: (GG, bG, ZG) => {
+   63447: (MM, rM, iM) => {
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L337` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L338) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L337)

```diff
-   61406: (GG, bG, ZG) => {
+   63449: (MM, rM, iM) => {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L340` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L341) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L340)

```diff
-   61412: (GG, bG, ZG) => {
+   63455: (MM, rM, iM) => {
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L343` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L344) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L343)

```diff
-   61414: (GG, bG, ZG) => {
+   63457: (MM, rM, iM) => {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L346` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L347) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L346)

```diff
-   61420: (GG, bG, ZG) => {
+   63463: (MM, rM, iM) => {
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L349` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L350) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L349)

```diff
-   61423: (GG, bG, ZG) => {
+   63469: (MM, rM, iM) => {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L352` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L353) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L352)

```diff
-   61432: (GG, bG, ZG) => {
+   63478: (MM, rM, iM) => {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L355` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L356) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L355)

```diff
-   61437: (GG, bG, ZG) => {
+   63483: (MM, rM, iM) => {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L358` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L359) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L358)

```diff
-   61440: (GG, bG, ZG) => {
+   63490: (MM, rM, iM) => {
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L361` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L362) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L361)

```diff
-   61444: (GG, bG, ZG) => {
+   63495: (MM, rM, iM) => {
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L364` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L365) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L364)

```diff
-   61451: (GG, bG, ZG) => {
+   63504: (MM, rM, iM) => {
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L367` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L368) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L367)

```diff
-   61454: (GG, bG, ZG) => {
+   63513: (MM, rM, iM) => {
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L370` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L371) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L370)

```diff
-   61458: (GG, bG, ZG) => {
+   63519: (MM, rM, iM) => {
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L373` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L374) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L373)

```diff
-   61465: (GG, bG, ZG) => {
+   63521: (MM, rM, iM) => {
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L376` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L377) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L376)

```diff
-   61473: (GG, bG, ZG) => {
+   63526: (MM, rM, iM) => {
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L379` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L380) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L379)

```diff
-   61476: (GG, bG, ZG) => {
+   63534: (MM, rM, iM) => {
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L382` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L383) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L382)

```diff
-   61485: (GG, bG, ZG) => {
+   63536: (MM, rM, iM) => {
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L385` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L386) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L385)

```diff
-   61488: (GG, bG, ZG) => {
+   63544: (MM, rM, iM) => {
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L388` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L389) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L388)

```diff
-   61490: (GG, bG, ZG) => {
+   63546: (MM, rM, iM) => {
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L391` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L392) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L391)

```diff
-   61498: (GG, bG, ZG) => {
+   63552: (MM, rM, iM) => {
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L394` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L395) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L394)

```diff
-   61504: (GG, bG, ZG) => {
+   63558: (MM, rM, iM) => {
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L397` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L398) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L397)

```diff
-   61510: (GG, bG, ZG) => {
+   63566: (MM, rM, iM) => {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L400` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L401) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L400)

```diff
-   61517: (GG, bG, ZG) => {
+   63570: (MM, rM, iM) => {
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L403` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L404) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L403)

```diff
-   61524: (GG, bG, ZG) => {
+   63573: (MM, rM, iM) => {
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L406` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L407) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L406)

```diff
-   61526: (GG, bG, ZG) => {
+   63578: (MM, rM, iM) => {
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L409` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L410) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L409)

```diff
-   61529: (GG, bG, ZG) => {
+   63585: (MM, rM, iM) => {
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L412` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L413) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L412)

```diff
-   61537: (GG, bG, ZG) => {
+   63589: (MM, rM, iM) => {
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L415` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L416) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L415)

```diff
-   61546: (GG, bG, ZG) => {
+   63597: (MM, rM, iM) => {
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L418` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L419) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L418)

```diff
-   61551: (GG, bG, ZG) => {
+   63600: (MM, rM, iM) => {
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L421` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L422) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L421)

```diff
-   61555: (GG, bG, ZG) => {
+   63605: (MM, rM, iM) => {
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L424` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L425) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L424)

```diff
-   61561: (GG, bG, ZG) => {
+   63609: (MM, rM, iM) => {
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L427` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L428) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L427)

```diff
-   61564: (GG, bG, ZG) => {
+   63613: (MM, rM, iM) => {
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L430` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L431) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L430)

```diff
-   61568: (GG, bG, ZG) => {
+   63622: (MM, rM, iM) => {
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L433` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L434) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L433)

```diff
-   61572: (GG, bG, ZG) => {
+   63628: (MM, rM, iM) => {
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L436` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L437) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L436)

```diff
-   61581: (GG, bG, ZG) => {
+   63633: (MM, rM, iM) => {
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L439` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L440) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L439)

```diff
-   61584: (GG, bG, ZG) => {
+   63642: (MM, rM, iM) => {
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L442` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L443) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L442)

```diff
-   61591: (GG, bG, ZG) => {
+   63651: (MM, rM, iM) => {
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L445` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L446) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L445)

```diff
-   61600: (GG, bG, ZG) => {
+   63657: (MM, rM, iM) => {
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L448` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L449) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L448)

```diff
-   61606: (GG, bG, ZG) => {
+   63664: (MM, rM, iM) => {
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L451` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L452) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L451)

```diff
-   61613: (GG, bG, ZG) => {
+   63671: (MM, rM, iM) => {
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L454` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L455) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L454)

```diff
-   61621: (GG, bG, ZG) => {
+   63677: (MM, rM, iM) => {
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L457` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L458) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L457)

```diff
-   61630: (GG, bG, ZG) => {
+   63683: (MM, rM, iM) => {
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L460` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L461) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L460)

```diff
-   61632: (GG, bG, ZG) => {
+   63688: (MM, rM, iM) => {
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L463` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L464) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L463)

```diff
-   61636: (GG, bG, ZG) => {
+   63692: (MM, rM, iM) => {
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L466` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L467) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L466)

```diff
-   61645: (GG, bG, ZG) => {
+   63700: (MM, rM, iM) => {
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L469` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L470) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L469)

```diff
-   61652: (GG, bG, ZG) => {
+   63709: (MM, rM, iM) => {
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L472` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L473) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L472)

```diff
-   61654: (GG, bG, ZG) => {
+   63715: (MM, rM, iM) => {
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L475` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L476) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L475)

```diff
-   61656: (GG, bG, ZG) => {
+   63721: (MM, rM, iM) => {
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L478` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L479) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L478)

```diff
-   61662: (GG, bG, ZG) => {
+   63728: (MM, rM, iM) => {
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L481` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L482) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L481)

```diff
-   61670: (GG, bG, ZG) => {
+   63734: (MM, rM, iM) => {
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L484` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L485) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L484)

```diff
-   61672: (GG, bG, ZG) => {
+   63738: (MM, rM, iM) => {
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L487` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L488) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L487)

```diff
-   61678: (GG, bG, ZG) => {
+   63747: (MM, rM, iM) => {
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L490` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L491) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L490)

```diff
-   61686: (GG, bG, ZG) => {
+   63755: (MM, rM, iM) => {
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L493` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L494) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L493)

```diff
-   61688: (GG, bG, ZG) => {
+   63763: (MM, rM, iM) => {
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L496` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L497) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L496)

```diff
-   61693: (GG, bG, ZG) => {
+   63771: (MM, rM, iM) => {
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L499` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L500) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L499)

```diff
-   61701: (GG, bG, ZG) => {
+   63777: (MM, rM, iM) => {
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L502` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L503) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L502)

```diff
-   61710: (GG, bG, ZG) => {
+   63784: (MM, rM, iM) => {
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L505` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L506) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L505)

```diff
-   61717: (GG, bG, ZG) => {
+   63787: (MM, rM, iM) => {
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L508` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L509) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L508)

```diff
-   61719: (GG, bG, ZG) => {
+   63789: (MM, rM, iM) => {
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L511` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L512) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L511)

```diff
-   61739: (GG, bG, ZG) => {
+   63804: (MM, rM, iM) => {
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L514` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L515) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L514)

```diff
-   61741: (GG, bG, ZG) => {
+   63810: (MM, rM, iM) => {
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L517` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L518) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L517)

```diff
-   61746: (GG, bG, ZG) => {
+   63819: (MM, rM, iM) => {
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L520` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L521) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L520)

```diff
-   61755: (GG, bG, ZG) => {
+   63827: (MM, rM, iM) => {
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L523` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L524) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L523)

```diff
-   61760: (GG, bG, ZG) => {
+   63833: (MM, rM, iM) => {
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L526` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L527) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L526)

```diff
-   61767: (GG, bG, ZG) => {
+   63840: (MM, rM, iM) => {
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L529` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L530) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L529)

```diff
-   61771: (GG, bG, ZG) => {
+   63842: (MM, rM, iM) => {
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L532` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L533) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L532)

```diff
-   61774: (GG, bG, ZG) => {
+   63849: (MM, rM, iM) => {
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L535` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L536) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L535)

```diff
-   61778: (GG, bG, ZG) => {
+   63851: (MM, rM, iM) => {
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L538` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L539) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L538)

```diff
-   61784: (GG, bG, ZG) => {
+   63859: (MM, rM, iM) => {
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L541` → after: `L542-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L542-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L542-L545) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L541)

```diff
-   61787: (GG, bG, ZG) => {
+   63868: (MM, rM, iM) => {
+     MM.exports = iM.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
+   },
+   63871: (MM, rM, iM) => {
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L544` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L548) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L544)

```diff
-   61791: (GG, bG, ZG) => {
+   63878: (MM, rM, iM) => {
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L547` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L551) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L547)

```diff
-   61797: (GG, bG, ZG) => {
+   63881: (MM, rM, iM) => {
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L550` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L554) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L550)

```diff
-   61726: (GG, bG, ZG) => {
+   63792: (MM, rM, iM) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db)

#### 1. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1-L3` → after: `L1-L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1-L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1-L3) · [Before (L1-L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1-L3)

```diff
- /*! For license information please see wp3j0a.wasmMatchmaking.5509a63b.chunk.js.LICENSE.txt */
- export const id = 63;
- export const ids = [63];
+ /*! For license information please see fo1voe.wasmMatchmaking.eb11e22c.chunk.js.LICENSE.txt */
+ export const id = 74;
+ export const ids = [74];
```

#### 2. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L5)

```diff
-   36874: (GG, bG) => {
+   37484: (MM, rM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L13)

```diff
-       return (ZG = wG[LG.toLowerCase()]) ? ZG : (ZG = SG[LG.toLowerCase()]) || (1 === LG.length ? LG.charCodeAt(0) : void 0)
+       return (iM = OM[jM.toLowerCase()]) ? iM : (iM = SM[jM.toLowerCase()]) || (1 === jM.length ? jM.charCodeAt(0) : void 0)
```

#### 4. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L102-L106` → after: `L102-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L102-L106) · [Before (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L102-L106)

```diff
-   37052: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
-     });
-     var wG = ZG(51);
+   37640: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM
+     });
+     var OM = iM(44);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L128)

```diff
-   36932: GG => {
+   37517: MM => {
```

#### 6. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L243` → after: `L243-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L243-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L243-L306) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L243)

```diff
-   8967: (GG, bG, ZG) => {
+   37538: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => HM,
+       i: () => hM,
+       m: () => mM,
+       p: () => LM
+     });
+     var OM = iM(35017),
+       SM = iM(37542),
+       jM = iM(37544),
+       aM = iM(9328),
+       PM = iM(1516),
+       nM = iM(44),
+       QM = iM(65),
+       zM = iM(1303);
+ 
+ ... (48 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L246` → after: `L309-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L309-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L309-L329) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L246)

```diff
-       g: () => SG
+       e: () => SM
+     });
+     let OM = null;
+     const SM = function(MM) {
+         const rM = {
+           cycle: MM,
+           canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
+         };
+         return OM = rM, () => {
+           OM === rM && (OM = null)
+         }
+       },
+       jM = () => {
+         var MM;
+         return null !== (MM = OM) && void 0 !== MM && MM.canCycle() ? OM.cycle : null
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L258` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L341) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L258)

```diff
-   36784: (GG, bG, ZG) => {
+   37397: (MM, rM, iM) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L261` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L344) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L261)

```diff
-       LobbyLeaderboard: () => XG.b,
+       LobbyLeaderboard: () => CM.c,
```

#### 10. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L265` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L348) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L265)

```diff
-       matchmakeForAhead: () => kG.e,
+       matchmakeForAhead: () => PM.h,
```

#### 11. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L268-L277` → after: `L351-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L351-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L351-L360) · [Before (L268-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L268-L277)

```diff
-     var wG = ZG(1202),
-       SG = ZG(140),
-       LG = ZG(17),
-       yG = ZG(36793),
-       kG = ZG(36795),
-       UG = ZG(1923),
-       YG = ZG(36833);
- 
-     function VG() {
-       return !1 !== UG.c.get("canCustomiseChar")
+     var OM = iM(1251),
+       SM = iM(143),
+       jM = iM(19),
+       aM = iM(37402),
+       PM = iM(37407),
+       nM = iM(2067),
+       QM = iM(37440);
+ 
+     function zM() {
+       return !1 !== nM.d.get("canCustomiseChar")
```

#### 12. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L280-L288` → after: `L363-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L363-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L363-L371) · [Before (L280-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L280-L288)

```diff
-     var fG = ZG(1287),
-       QG = ZG(1204),
-       KG = ZG(252),
-       hG = ZG(3559),
-       dG = ZG(8967),
-       JG = ZG(8960);
- 
-     function rG() {
-       (0, dG.c)() || (0, JG.c)().catch((GG => {
+     var mM = iM(1373),
+       HM = iM(1258),
+       hM = iM(222),
+       JM = iM(2562),
+       dM = iM(9517),
+       yM = iM(9514);
+ 
+     function lM() {
+       (0, dM.b)() || (0, yM.e)().catch((MM => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L292-L306` → after: `L375-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L375-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L375-L389) · [Before (L292-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L292-L306)

```diff
-     var zG = ZG(3423),
-       EG = ZG(1729);
-     var oG = ZG(36838),
-       XG = ZG(37374);
- 
-     function uG() {
-       return ZG.e(220).then((() => ZG(41704)))
-     }
- 
-     function iG() {
-       return ZG.e(296).then((() => ZG(41710)))
-     }
- 
-     function CG() {
-       return (0, JG.i)()
+     var EM = iM(3839),
+       UM = iM(1851);
+     var GM = iM(37442),
+       CM = iM(37944);
+ 
+     function eM() {
+       return iM.e(239).then((() => iM(43954)))
+     }
+ 
+     function bM() {
+       return iM.e(601).then((() => iM(43956)))
+     }
+ 
+     function wM() {
+       return (0, yM.h)()
```

#### 14. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L313-L319` → after: `L396-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L396-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L396-L406) · [Before (L313-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L313-L319)

```diff
-         return !0 !== (null === GG || void 0 === GG ? void 0 : GG.saveData) && !/2g$/.test(null !== (bG = null === GG || void 0 === GG ? void 0 : GG.effectiveType) && void 0 !== bG ? bG : "")
-       }(navigator.connection) && (0, hG.c)((() => {
-         (0, dG.c)() || Promise.all([ZG.e(78), ZG.e(90), ZG.e(215), ZG.e(214), ZG.e(137), ZG.e(140), ZG.e(59)]).then((() => ZG(41444))).then((async GG => {
-           (0, dG.c)() || (await GG.startLoadAheadOfJoin({
-             joinStarted: dG.c,
-             language: QG.d.get().getCurrentLanguageCode()
-           }), (0, KG.b)(rG))
+         return !0 !== (null === MM || void 0 === MM ? void 0 : MM.saveData) && !/2g$/.test(null !== (rM = null === MM || void 0 === MM ? void 0 : MM.effectiveType) && void 0 !== rM ? rM : "")
+       }(navigator.connection) && (0, JM.f)((() => {
+         (0, dM.b)() || Promise.all([iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(150), iM.e(153), iM.e(70)]).then((() => iM(42162))).then((async MM => {
+           if ((0, dM.b)()) return;
+           const rM = MM.startLoadAheadOfJoin({
+             joinStarted: dM.b,
+             language: HM.e.get().getCurrentLanguageCode()
+           });
+           (0, hM.d)((() => {
+             (0, dM.b)() || MM.probeWebgl2AheadOfJoin()
+           })), await rM, (0, hM.d)(lM)
```

#### 15. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L324` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L411) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L324)

```diff
-     const WG = LG.e.get("router");
+     const tM = jM.d.get("router");
```

#### 16. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L326` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L413) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L326)

```diff
-       if ((0, EG.b)(bG.state.location.pathname)) return void(0, JG.e)().catch((() => {}));
+       if ((0, UM.e)(rM.state.location.pathname)) return void(0, yM.f)().catch((() => {}));
```

#### 17. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L328` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L415) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L328)

```diff
-         (0, EG.b)(wG.location.pathname) && (ZG(), (0, zG.e)().then((() => {
+         (0, UM.e)(OM.location.pathname) && (iM(), (0, EM.e)().then((() => {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L332-L333` → after: `L419-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L419-L420) · [Before (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L332-L333)

```diff
-     }(WG), (0, yG.e)();
-     const mG = (0, kG.d)((async function(GG, bG) {
+     }(tM), (0, aM.b)();
+     const gM = (0, PM.e)((async function(MM, rM) {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L344` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L431) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L344)

```diff
-         VG = await (0, JG.e)()
+         zM = await (0, yM.f)()
```

#### 20. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L346` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L433) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L346)

```diff
-         return console.error("The wasm client did not load:", pG), (0, fG.q)({
+         return console.error("The wasm client did not load:", LM), (0, mM.p)({
```

#### 21. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L348` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L435) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L348)

```diff
-         }), wG.d.errorWithCode(String(pG), SG.h.CONNECT_TO_GAME_SERVER, {
+         }), OM.b.errorWithCode(String(LM), SM.n.CONNECT_TO_GAME_SERVER, {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L351` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L438) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L351)

```diff
-           RZ: bG.aborted
+           Ti: rM.aborted
```

#### 23. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L363-L368` → after: `L450-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L450-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L450-L454) · [Before (L363-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L363-L368)

```diff
-       return (0, JG.e)().catch((() => {})), mG(...arguments)
-     }
-   },
-   8960: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => QG,
+       return (0, yM.f)().catch((() => {})), gM(...arguments)
+     }
+   },
+   9514: (MM, rM, iM) => {
+     iM.d(rM, {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L370-L377` → after: `L456-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L456-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L456-L464) · [Before (L370-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L370-L377)

```diff
-       i: () => KG
-     });
-     var wG = ZG(3135),
-       SG = ZG(2290),
-       LG = ZG(2128),
-       yG = ZG(4670),
-       kG = ZG(3481),
-       UG = ZG(8967);
+       f: () => mM,
+       h: () => hM
+     });
+     var OM = iM(3563),
+       SM = iM(2414),
+       jM = iM(2257),
+       aM = iM(5022),
+       PM = iM(3902),
+       nM = iM(9517);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L381-L389` → after: `L468-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L468-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L468-L476) · [Before (L381-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L381-L389)

```diff
-       return Promise.all([ZG.e(75), ZG.e(78), ZG.e(90), ZG.e(215), ZG.e(214), ZG.e(160), ZG.e(137), ZG.e(198), ZG.e(140), ZG.e(88), ZG.e(275), ZG.e(64)]).then((() => ZG(41048)))
-     }
- 
-     function pG() {
-       Promise.all([ZG.e(73), ZG.e(76), ZG.e(75), ZG.e(74), ZG.e(90), ZG.e(87), ZG.e(273), ZG.e(191), ZG.e(228), ZG.e(252), ZG.e(275), ZG.e(47)]).then((() => ZG(41395))).catch((() => {}))
-     }
- 
-     function fG() {
-       return yG.d.cancelDownloadForJoin(), (0, kG.e)(), (0, SG.g)(), (0, UG.g)(), (0, LG.j)(), pG(), Promise.all([ZG.e(78), ZG.e(90), ZG.e(215), ZG.e(214), ZG.e(137), ZG.e(140), ZG.e(59)]).then((() => ZG(41444))).then((GG => {
+       return Promise.all([iM.e(86), iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(174), iM.e(222), iM.e(150), iM.e(153), iM.e(101), iM.e(298), iM.e(75)]).then((() => iM(41755)))
+     }
+ 
+     function LM() {
+       Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(103), iM.e(100), iM.e(296), iM.e(205), iM.e(246), iM.e(272), iM.e(298), iM.e(53)]).then((() => iM(42102))).catch((() => {}))
+     }
+ 
+     function mM() {
+       return aM.e.cancelDownloadForJoin(), (0, PM.b)(), (0, SM.c)(), (0, nM.e)(), (0, jM.j)(), LM(), Promise.all([iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(150), iM.e(153), iM.e(70)]).then((() => iM(42162))).then((MM => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L402` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L489) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L402)

```diff
-       return pG(), ZG.e(276).then((() => ZG(41447))).catch((() => {})), VG().then((() => {}))
+       return LM(), iM.e(299).then((() => iM(42165))).catch((() => {})), zM().then((() => {}))
```

#### 27. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L411` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L498) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L411)

```diff
-   36808: (GG, bG, ZG) => {
+   37416: (MM, rM, iM) => {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L414` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L501) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L414)

```diff
-       f: () => VG,
+       e: () => zM,
```

#### 29. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L416-L421` → after: `L503-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L503-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L503-L508) · [Before (L416-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L416-L421)

```diff
-       h: () => pG
-     });
-     var wG = ZG(352),
-       SG = ZG(641),
-       LG = ZG(655),
-       yG = ZG(29);
+       k: () => LM
+     });
+     var OM = iM(332),
+       SM = iM(670),
+       jM = iM(680),
+       aM = iM(30);
```

#### 30. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L431-L440` → after: `L518-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L518-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L518-L527) · [Before (L431-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L431-L440)

```diff
-       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
-       (0, LG.j)(GG, kG)
-     }
- 
-     function pG() {
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).setItem(YG, !0)
-     }
- 
-     function fG() {
-       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
+       let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k;
+       (0, jM.k)(MM, PM)
+     }
+ 
+     function LM() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).setItem(QM, !0)
+     }
+ 
+     function mM() {
+       let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k;
```

#### 31. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L445` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L532) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L445)

```diff
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yG.l;
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM.k;
```

#### 32. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L452` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L539) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L452)

```diff
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).getItem(YG)
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).getItem(QM)
```

#### 33. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L455-L459` → after: `L542-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L542-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L542-L546) · [Before (L455-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L455-L459)

```diff
-       return fG = null !== ZG && null !== VG && (0, LG.f)(bG, kG) && function(GG, bG, ZG) {
-           const SG = (0, wG.Yb)(GG),
-             LG = (0, wG.Yb)(bG),
-             yG = (0, wG.Vb)(GG),
-             kG = (0, wG.Vb)(bG);
+       return mM = null !== iM && null !== zM && (0, jM.g)(rM, PM) && function(MM, rM, iM) {
+           const SM = (0, OM.Mb)(MM),
+             jM = (0, OM.Mb)(rM),
+             aM = (0, OM.Jb)(MM),
+             PM = (0, OM.Jb)(rM);
```

#### 34. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L461` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L548) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L461)

```diff
-         }(VG, GG, pG) ? ZG : (0, SG.d)(), (0, LG.n)(bG, kG, fG), bG.setItem(UG, GG),
+         }(zM, MM, LM) ? iM : (0, SM.e)(), (0, jM.o)(rM, PM, mM), rM.setItem(nM, MM),
```

#### 35. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L463` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L550) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L463)

```diff
-           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).removeItem(YG)
+           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).removeItem(QM)
```

#### 36. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L467-L489` → after: `L554-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L554-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L554-L576) · [Before (L467-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L467-L489)

```diff
-   36801: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => oG,
-       g: () => XG
-     });
-     var wG = ZG(982),
-       SG = ZG(200),
-       LG = ZG(346),
-       yG = ZG(612),
-       kG = ZG(352),
-       UG = ZG(984),
-       YG = ZG(631),
-       VG = ZG(666),
-       pG = ZG(4537),
-       fG = ZG(80),
-       QG = ZG(116),
- ... (7 more removed lines; see GitHub link above)
+   37414: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => GM,
+       f: () => CM
+     });
+     var OM = iM(1073),
+       SM = iM(187),
+       jM = iM(327),
+       aM = iM(632),
+       PM = iM(332),
+       nM = iM(1081),
+       QM = iM(656),
+       zM = iM(694),
+       LM = iM(4906),
+       mM = iM(83),
+       HM = iM(119),
+ ... (7 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L493` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L580) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L493)

```diff
-       return [...null !== (GG = navigator.languages) && void 0 !== GG ? GG : [null !== (bG = navigator.language) && void 0 !== bG ? bG : "none"], "en-Gb"]
+       return [...null !== (MM = navigator.languages) && void 0 !== MM ? MM : [null !== (rM = navigator.language) && void 0 !== rM ? rM : "none"], "en-Gb"]
```

#### 38. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L497-L498` → after: `L584-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L584-L585) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L497-L498)

```diff
-       const iG = (0, wG.h)(bG) ? (0, wG.j)(bG) : null,
-         CG = GG.isLoggedIn() && void 0 !== (0, SG.c)(LG.l, QG.siteUsed) ? (0, zG.e)() : null,
+       const bM = (0, OM.m)(rM) ? (0, OM.p)(rM) : null,
+         wM = MM.isLoggedIn() && void 0 !== (0, SM.d)(jM.g, HM.siteUsed) ? (0, EM.h)() : null,
```

#### 39. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L504` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L591) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L504)

```diff
-             joinDiscord: !!JG.h.getItem("DiscordPressed"),
+             joinDiscord: !!yM.g.getItem("DiscordPressed"),
```

#### 40. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L516` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L603) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L516)

```diff
-             deviceType: (0, hG.d)()
+             deviceType: (0, JM.c)()
```

#### 41. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L521` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L608) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L521)

```diff
-           version: yG.e,
+           version: aM.c,
```

#### 42. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L525-L529` → after: `L612-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L612-L616) · [Before (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L525-L529)

```diff
-           visitSessionId: (0, rG.f)(),
-           clientReason: YG.s.reason,
-           budgetBasis: (0, EG.j)(),
-           ...null !== VG.o && {
-             diagClaim: VG.o.claimId
+           visitSessionId: (0, lM.e)(),
+           clientReason: QM.x.reason,
+           budgetBasis: (0, UM.f)(),
+           ...null !== zM.m && {
+             diagClaim: zM.m.claimId
```

#### 43. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L535-L536` → after: `L622-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L622-L623) · [Before (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L535-L536)

```diff
-       return null !== iG && (0, kG.Oc)(iG) ? (WG.lobbyName = (0, wG.g)(iG, (0, wG.i)(bG), ZG), {
-         roomName: `classic_${UG.e}`,
+       return null !== bM && (0, PM.Dc)(bM) ? (tM.lobbyName = (0, OM.i)(bM, (0, OM.o)(rM), iM), {
+         roomName: `classic_${nM.g}`,
```

#### 44. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L544-L549` → after: `L631-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L631-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L631-L636) · [Before (L544-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L544-L549)

```diff
-   9356: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => SG,
-       f: () => LG
-     });
-     var wG = ZG(9303);
+   9918: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => SM,
+       e: () => jM
+     });
+     var OM = iM(9863);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L551` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L638) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L551)

```diff
-       LG = Object.freeze(new wG.h(SG, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+       jM = Object.freeze(new OM.c(SM, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (1030 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 1. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1-L2)

```diff
- export const id = 64;
- export const ids = [64, 117, 118, 138];
+ export const id = 75;
+ export const ids = [75, 129, 130, 151];
```

#### 2. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L4)

```diff
-   40021: (GG, bG, ZG) => {
+   40765: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L6-L7)

```diff
-       e: () => wG,
-       i: () => SG
+       c: () => OM,
+       f: () => SM
```

#### 4. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L12)

```diff
-   4706: (GG, bG, ZG) => {
+   5062: (MM, rM, iM) => {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L14)

```diff
-       e: () => VG
+       c: () => zM
```

#### 6. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L16-L19` → after: `L16-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L16-L19) · [Before (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L16-L19)

```diff
-     var wG = ZG(17),
-       SG = ZG(19),
-       LG = ZG(1251),
-       yG = ZG(2801);
+     var OM = iM(19),
+       SM = iM(22),
+       jM = iM(1313),
+       aM = iM(3122);
```

#### 7. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L24)

```diff
-       return "visible" === document.visibilityState && "inGame" === wG.e.get("gameState") && (0, LG.A)()
+       return "visible" === document.visibilityState && "inGame" === OM.d.get("gameState") && (0, jM.B)()
```

#### 8. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L28)

```diff
-       (0, yG.n)() || function(GG, bG, ZG) {
+       (0, aM.q)() || function(MM, rM, iM) {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L35)

```diff
-           GG(`saved for the player after ${kG/1e3} s of play`), (0, yG.z)(), SG.l.xh("chat", {
+           MM(`saved for the player after ${PM/1e3} s of play`), (0, aM.F)(), SM.i.Tz("chat", {
```

#### 10. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L47)

```diff
-   34341: (GG, bG, ZG) => {
+   34896: (MM, rM, iM) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L57)

```diff
-       i: () => wG
+       f: () => OM
```

#### 12. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L60)

```diff
-   38347: (GG, bG, ZG) => {
+   38922: (MM, rM, iM) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L63-L64` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L63) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L63-L64)

```diff
-       c: () => VG,
-       f: () => EG,
+       e: () => zM,
```

#### 14. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L65-L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L66)

```diff
-       k: () => rG
+       l: () => EM,
+       n: () => lM
```

#### 15. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L68-L70` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L68-L70) · [Before (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L68-L70)

```diff
-     var wG = ZG(4706),
-       SG = ZG(34341),
-       LG = ZG(2801);
+     var OM = iM(5062),
+       SM = iM(34896),
+       jM = iM(3122);
```

#### 16. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L72)

```diff
-       kG = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "rp", "jobMs"];
+       PM = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "vL", "jobMs"];
```

#### 17. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L80)

```diff
-       return `${GG},${bG},${ZG}`
+       return `${MM},${rM},${iM}`
```

#### 18. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L88)

```diff
-         const wG = null !== (ZG = this.pending.get(GG)) && void 0 !== ZG ? ZG : [];
+         const OM = null !== (iM = this.pending.get(MM)) && void 0 !== iM ? iM : [];
```

#### 19. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L103)

```diff
-           rp: SG,
+           vL: SM,
```

#### 20. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L106)

```diff
-         for (const UG of null !== (kG = this.pending.get(GG)) && void 0 !== kG ? kG : []) {
+         for (const nM of null !== (PM = this.pending.get(MM)) && void 0 !== PM ? PM : []) {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L120)

```diff
-         for (const SG of null !== (wG = this.pending.get(GG)) && void 0 !== wG ? wG : []) {
+         for (const SM of null !== (OM = this.pending.get(MM)) && void 0 !== OM ? OM : []) {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L135)

```diff
-           rp: 0,
+           vL: 0,
```

#### 23. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L157)

```diff
-           rp: ZG.rp,
+           vL: iM.vL,
```

#### 24. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L160)

```diff
-         if (this.edits[this.nextEdit] = SG, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(SG.totalMs), this.NQ(1), SG.totalMs < 100 || ++this.outliers > 5) return;
+         if (this.edits[this.nextEdit] = SM, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(SM.totalMs), this.aL(1), SM.totalMs < 100 || ++this.outliers > 5) return;
```

#### 25. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L162)

```diff
-         (0, LG.j)("remesh", `slow edit (${GG}) shown in ${yG(SG.totalMs)} ms: slot ${yG(SG.slotMs)}, worker ${yG(SG.workerMs)} (${SG.ahead} ahead, ${SG.inFlight}/${SG.rp} in flight; job ${yG(SG.jobMs)}), apply ${yG(SG.applyMs)}`)
+         (0, jM.k)("remesh", `slow edit (${MM}) shown in ${aM(SM.totalMs)} ms: slot ${aM(SM.slotMs)}, worker ${aM(SM.workerMs)} (${SM.ahead} ahead, ${SM.inFlight}/${SM.vL} in flight; job ${aM(SM.jobMs)}), apply ${aM(SM.applyMs)}`)
```

#### 26. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L168)

```diff
-           this.gaveUp += wG.length - bG.length, this.NQ(wG.length - bG.length), bG.length > 0 ? this.pending.set(ZG, bG) : this.pending.delete(ZG)
+           this.gaveUp += OM.length - rM.length, this.aL(OM.length - rM.length), rM.length > 0 ? this.pending.set(iM, rM) : this.pending.delete(iM)
```

#### 27. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L175)

```diff
-           (0, LG.j)("remesh", `${Math.round(this.frames/bG)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,SG.i)(GG,.5))} max ${Math.round((0,SG … [truncated]
+           (0, jM.k)("remesh", `${Math.round(this.frames/rM)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,SM.f)(MM,.5))} max ${Math.round((0,SM … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L182)

```diff
-           return `${GG}: p50 ${Math.round((0,SG.i)(bG,.5))} p90 ${Math.round((0,SG.i)(bG,.9))} max ${Math.round((0,SG.i)(bG,1))}`
+           return `${MM}: p50 ${Math.round((0,SM.f)(rM,.5))} p90 ${Math.round((0,SM.f)(rM,.9))} max ${Math.round((0,SM.f)(rM,1))}`
```

#### 29. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L193)

```diff
-         this.log = GG, this.wf = bG
+         this.log = MM, this.Cm = rM
```

#### 30. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L196-L197` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L196-L197) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L196-L197)

```diff
-         const [wG, SG, LG] = this.wf.Op.hwG(GG, bG, ZG), yG = this.wf.Op.Qh.Kh(wG, SG, LG);
-         yG && yG.ph && this.log.edit(VG(wG, SG, LG), performance.now())
+         const [OM, SM, jM] = this.Cm.uL.rOM(MM, rM, iM), aM = this.Cm.uL.yJ.lJ(OM, SM, jM);
+         aM && aM.JJ && this.log.edit(zM(OM, SM, jM), performance.now())
```

#### 31. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L225)

```diff
-       return QG = GG, (0, LG.i)("remesh", (() => GG.dump())), (0, LG.c)("remeshStats", (() => {
+       return HM = MM, (0, jM.i)("remesh", (() => MM.dump())), (0, jM.b)("remeshStats", (() => {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L227-L228` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L227-L228) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L227-L228)

```diff
-       })), hG || (hG = !0, (0, wG.e)((GG => {
-         (0, LG.j)("remesh", GG)
+       })), JM || (JM = !0, (0, OM.c)((MM => {
+         (0, jM.k)("remesh", MM)
```

#### 33. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L234)

```diff
-       dG = new fG(bG, GG), GG.QE.meshProbe = dG, GG.on("beforeRender", (() => {
+       dM = new mM(rM, MM), MM.kU.meshProbe = dM, MM.on("beforeRender", (() => {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L244)

```diff
-   34368: (GG, bG, ZG) => {
+   34926: (MM, rM, iM) => {
```

#### 35. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L246)

```diff
-       b: () => wG
+       e: () => OM
```

#### 36. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L250)

```diff
-   34519: (GG, bG, ZG) => {
+   35055: (MM, rM, iM) => {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L252)

```diff
-       b: () => yG,
+       d: () => aM,
```

#### 38. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L254)

```diff
-       f: () => VG
+       i: () => zM
```

#### 39. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L256)

```diff
-     var wG = ZG(1509);
+     var OM = iM(1645);
```

#### 40. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L262)

```diff
-         yaw: yG.store.yaw + (null !== (bG = wG.d[GG].previewYaw) && void 0 !== bG ? bG : 0)
+         yaw: aM.store.yaw + (null !== (rM = OM.d[MM].previewYaw) && void 0 !== rM ? rM : 0)
```

#### 41. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L383)

```diff
-   5055: (GG, bG, ZG) => {
+   5435: (MM, rM, iM) => {
```

#### 42. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L385-L387` → after: `L385-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L385-L387) · [Before (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L385-L387)

```diff
-       e: () => wG.i,
-       f: () => SG,
-       g: () => wG.o
+       e: () => OM.g,
+       g: () => SM,
+       k: () => OM.o
```

#### 43. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L389)

```diff
-     var wG = ZG(5062);
+     var OM = iM(5442);
```

#### 44. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L395)

```diff
-   39633: (GG, bG, ZG) => {
+   40300: (MM, rM, iM) => {
```

#### 45. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L402-L406` → after: `L402-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L402-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L402-L406) · [Before (L402-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L402-L406)

```diff
-     var wG = ZG(80),
-       SG = ZG(29),
-       LG = (ZG(3444), ZG(5055), ZG(3441)),
-       yG = ZG(6661);
-     ZG(6627);
+     var OM = iM(83),
+       SM = iM(30),
+       jM = (iM(3860), iM(5435), iM(3855)),
+       aM = iM(7148);
+     iM(7120);
```

#### 46. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L416-L417` → after: `L416-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L416-L417) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L416-L417)

```diff
-           if ((0, LG.g)(wG.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), YG().then((GG => {
-             GG && SG.h.removeItem(LG.d)
+           if ((0, jM.f)(OM.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), QM().then((MM => {
+             MM && SM.g.removeItem(jM.c)
```

#### 47. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L424)

```diff
-         return (0, LG.e)(wG.featureFlags.settings.canUseShaderPacks)
+         return (0, jM.d)(OM.featureFlags.settings.canUseShaderPacks)
```

#### 48. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L445)

```diff
-         return this.compiling ??= Promise.all([ZG.e(78), ZG.e(136), ZG.e(142)]).then((() => ZG(42184))).then((GG => (GG.prefetchCompiler(), GG))), this.compiling
+         return this.compiling ??= Promise.all([iM.e(89), iM.e(149), iM.e(155)]).then((() => iM(44389))).then((MM => (MM.prefetchCompiler(), MM))), this.compiling
```

#### 49. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L459)

```diff
-       if (!(0, LG.j)(wG.featureFlags.settings.canUseShaderPacks)) return null;
+       if (!(0, jM.i)(OM.featureFlags.settings.canUseShaderPacks)) return null;
```

#### 50. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L461-L462` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L461-L462) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L461-L462)

```diff
-         const GG = await (0, yG.e)(!0);
-         return GG || SG.h.setItem(LG.d, !1), GG
+         const MM = await (0, aM.d)(!0);
+         return MM || SM.g.setItem(jM.c, !1), MM
```

#### 51. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L464)

```diff
-         return console.error("Failed to read the stored shader pack", GG), SG.h.removeItem(LG.d), null
+         return console.error("Failed to read the stored shader pack", MM), SM.g.removeItem(jM.c), null
```

#### 52. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L475)

```diff
-   39678: (GG, bG, ZG) => {
+   40342: (MM, rM, iM) => {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L477-L478` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L477-L478) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L477-L478)

```diff
-       c: () => pG,
-       d: () => fG
+       d: () => LM,
+       e: () => mM
```

#### 54. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L480-L487` → after: `L480-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L480-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L480-L487) · [Before (L480-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L480-L487)

```diff
-     var wG = ZG(140),
-       SG = ZG(171),
-       LG = ZG(1423),
-       yG = ZG(2920),
-       kG = ZG(1431),
-       UG = ZG(36808),
-       YG = ZG(647),
-       VG = ZG(39633);
+     var OM = iM(143),
+       SM = iM(170),
+       jM = iM(1562),
+       aM = iM(3258),
+       PM = iM(1573),
+       nM = iM(37416),
+       QM = iM(673),
+       zM = iM(40300);
```

#### 55. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L490)

```diff
-       (0, yG.reportClientError)("matchmake_failed", GG, wG.h[wG.h.SHADER_PACK])
+       (0, aM.reportClientError)("matchmake_failed", MM, OM.n[OM.n.SHADER_PACK])
```

#### 56. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L496)

```diff
-       wG && null !== yG && await kG.d.reportShaderPackSession(GG, {
+       OM && null !== aM && await PM.c.reportShaderPackSession(MM, {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L499)

```diff
-         game: (0, LG.g)(bG, SG.s, "other"),
+         game: (0, jM.d)(rM, SM.v, "other"),
```

#### 58. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L501)

```diff
-         visitSessionId: (0, YG.f)()
+         visitSessionId: (0, QM.e)()
```

#### 59. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L505)

```diff
-   6661: (GG, bG, ZG) => {
+   7148: (MM, rM, iM) => {
```

#### 60. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L508)

```diff
-       e: () => LG
+       d: () => jM
```

#### 61. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L510` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L510) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L510)

```diff
-     var wG = ZG(29);
+     var OM = iM(30);
```

#### 62. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L515` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L515) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L515)

```diff
-       return null !== (GG = await wG.e.getItem(SG, bG)) && void 0 !== GG ? GG : null
+       return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
```

#### 63. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L518)

```diff
-   6627: (GG, bG, ZG) => {
+   7120: (MM, rM, iM) => {
```

#### 64. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L523` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L523) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L523)

```diff
-     var wG = ZG(5062);
+     var OM = iM(5442);
```

#### 65. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L528)

```diff
-       return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
+       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
```

#### 66. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L543)

```diff
-   34425: (GG, bG, ZG) => {
+   34971: (MM, rM, iM) => {
```

#### 67. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L547)

```diff
-     var wG = ZG(1032);
+     var OM = iM(1329);
```

#### 68. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L551)

```diff
-       return null !== (GG = null === (bG = screen.orientation) || void 0 === bG ? void 0 : bG.type) && void 0 !== GG ? GG : innerWidth > innerHeight ? "landscape" : "portrait"
+       return null !== (MM = null === (rM = screen.orientation) || void 0 === rM ? void 0 : rM.type) && void 0 !== MM ? MM : innerWidth > innerHeight ? "landscape" : "portrait"
```

#### 69. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L564` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L564) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L564)

```diff
-           this.holding && (0, wG.rh)(new Error("Game view size held for 60 s"))
+           this.holding && (0, OM.CJ)(new Error("Game view size held for 60 s"))
```

#### 70. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L591)

```diff
-   39663: (GG, bG, ZG) => {
+   40331: (MM, rM, iM) => {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L593)

```diff
-       c: () => SG
+       e: () => SM
```

#### 72. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L604)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => ZG(1702))), Promise.resolve().then((() => ZG(1311)))]);
+           }] = await Promise.all([Promise.resolve().then((() => iM(1830))), Promise.resolve().then((() => iM(1429)))]);
```

#### 73. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L620)

```diff
-   41367: (GG, bG, ZG) => {
+   42067: (MM, rM, iM) => {
```

#### 74. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L622-L623` → after: `L622-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L622-L623) · [Before (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L622-L623)

```diff
-       c: () => kG,
-       g: () => UG
+       d: () => PM,
+       h: () => nM
```

#### 75. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L625)

```diff
-     var wG = ZG(1721);
+     var OM = iM(1845);
```

#### 76. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L637-L649` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L637) · [Before (L637-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L637-L649)

```diff
-       if (!GG.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
-       if (yG) return Promise.reject(new Error("A screenshot is already being taken"));
-       yG = !0;
-       const VG = function(GG, bG, ZG) {
-         const wG = Math.max(1, GG),
-           LG = Math.max(1, bG),
-           yG = Math.min(1, ZG / Math.max(wG, LG), Math.sqrt(SG / (wG * LG)));
-         return {
-           width: Math.max(1, Math.floor(wG * yG)),
-           height: Math.max(1, Math.floor(LG * yG))
-         }
-       }(bG, ZG, GG.maxTextureSize);
-       return GG.resize(VG.width, VG.height, kG * VG.width / Math.max(1, bG)), new Promise(((bG, ZG) => {
+       return MM.lL() ? aM ? Promise.reject(new Error("A screenshot is already being taken")) : (aM = !0, new Promise(((OM, zM) => {
```

#### 77. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L654` → after: `L642-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L642-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L642-L647) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L654)

```diff
-           yG = !1, null === (bG = kG) || void 0 === bG || bG(), clearTimeout(wG), GG.restoreSize()
+           aM = !1, null === (rM = HM) || void 0 === rM || rM(), clearTimeout(LM);
+           try {
+             MM.restoreSize()
+           } catch (iM) {
+             console.error("A screenshot couldn't size the canvas back", iM)
+           }
```

#### 78. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L658` → after: `L651-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L651-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L651-L666) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L658)

```diff
-         }), LG), kG = GG.onFrameDrawn((() => {
+         }), jM);
+         try {
+           const OM = function(MM, rM, iM) {
+             const OM = Math.max(1, MM),
+               jM = Math.max(1, rM),
+               aM = Math.min(1, iM / Math.max(OM, jM), Math.sqrt(SM / (OM * jM)));
+             return {
+               width: Math.max(1, Math.floor(OM * aM)),
+               height: Math.max(1, Math.floor(jM * aM))
+             }
+           }(rM, iM, MM.maxTextureSize);
+           MM.resize(OM.width, OM.height, PM * OM.width / Math.max(1, rM))
+         } catch (JM) {
+           return hM(), void zM(JM)
+         }
+         HM = MM.onFrameDrawn((() => {
```

#### 79. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L679` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L687) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L679)

```diff
-       }))
+       }))) : Promise.reject(new Error("Screenshots need a game to be running"))
```

#### 80. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L684` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L692) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L684)

```diff
-         (0, wG.b)(SG.blob, `bloxd-screenshot-${SG.width}x${SG.height}-${Date.now()}.png`)
+         (0, OM.c)(SM.blob, `bloxd-screenshot-${SM.width}x${SM.height}-${Date.now()}.png`)
```

#### 81. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L690` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L698) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L690)

```diff
-   38094: (GG, bG, ZG) => {
+   38675: (MM, rM, iM) => {
```

#### 82. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L692` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L700) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L692)

```diff
-       c: () => wG
+       e: () => OM
```

#### 83. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L701` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L709) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L701)

```diff
-   39578: (GG, bG, ZG) => {
+   40249: (MM, rM, iM) => {
```

#### 84. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L703` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L711) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L703)

```diff
-       c: () => yG
+       b: () => aM
```

#### 85. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L705-L707` → after: `L713-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L713-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L713-L715) · [Before (L705-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L705-L707)

```diff
-     var wG = ZG(333),
-       SG = ZG(116),
-       LG = ZG(29);
+     var OM = iM(313),
+       SM = iM(119),
+       jM = iM(30);
```

#### 86. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L710` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L718) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L710)

```diff
-       LG.h.setItem(wG.cc, LG.h.getItem(wG.cc) + 1), (0, SG.is99NightsCrazyGamesBundle)() && LG.h.setItem(wG._b, LG.h.getItem(wG._b) + 1)
+       jM.g.setItem(OM.Cb, jM.g.getItem(OM.Cb) + 1), (0, SM.is99NightsCrazyGamesBundle)() && jM.g.setItem(OM.Ab, jM.g.getItem(OM.Ab) + 1)
```

#### 87. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L713` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L721) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L713)

```diff
-   41031: (GG, bG, ZG) => {
+   41734: (MM, rM, iM) => {
```

#### 88. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L715` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L723) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L715)

```diff
-       d: () => kG
+       c: () => PM
```

#### 89. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L717` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L725) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L717)

```diff
-     var wG = ZG(40021);
+     var OM = iM(40765);
```

#### 90. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L876-L877` → after: `L884-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L884-L885) · [Before (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L876-L877)

```diff
-             uV: 0,
-             ZU: null,
+             Ha: 0,
+             Pz: null,
```

#### 91. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L938-L939` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L946-L947) · [Before (L938-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L938-L939)

```diff
-           worldCodeAiChunk: () => wG.e,
-           worldCodeAiGameState: () => wG.i
+           worldCodeAiChunk: () => OM.c,
+           worldCodeAiGameState: () => OM.f
```

#### 92. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L960` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L968) · [Before (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L960)

```diff
-   41365: (GG, bG, ZG) => {
+   42065: (MM, rM, iM) => {
```

#### 93. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L963` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L971) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L963)

```diff
-       d: () => LG
+       c: () => jM
```

#### 94. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L965-L966` → after: `L973-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L973-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L973-L974) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L965-L966)

```diff
-     var wG = ZG(2138),
-       SG = ZG(982);
+     var OM = iM(2263),
+       SM = iM(1073);
```

#### 95. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L969` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L977) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L969)

```diff
-       return null !== GG.gameSource && (0, wG.p)(bG, GG.gameSource)
+       return null !== MM.gameSource && (0, OM.m)(rM, MM.gameSource)
```

#### 96. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L974` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L982) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L974)

```diff
-       const ZG = (0, SG.h)(bG) ? (0, SG.j)(bG) : null;
+       const iM = (0, SM.m)(rM) ? (0, SM.p)(rM) : null;
```

#### 97. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L978` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L986) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L978)

```diff
-   41336: (GG, bG, ZG) => {
+   42041: (MM, rM, iM) => {
```

#### 98. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L980` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L988) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L980)

```diff
-       b: () => kG
+       c: () => PM
```

#### 99. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L982-L984` → after: `L990-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L990-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L990-L992) · [Before (L982-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L982-L984)

```diff
-     var wG = ZG(589),
-       SG = ZG(41340),
-       LG = ZG(41195);
+     var OM = iM(613),
+       SM = iM(42045),
+       jM = iM(41900);
```

#### 100. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L986-L992` → after: `L994-L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L994-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L994-L1000) · [Before (L986-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L986-L992)

```diff
-       const bG = await (0, SG.j)({
-         Helmet: ZG(38369),
-         Chestplate: ZG(38375),
-         Gauntlets: ZG(38392),
-         Leggings: ZG(38379),
-         Boots: ZG(38388)
-       } [wG.c[GG]]);
+       const rM = await (0, SM.g)({
+         Helmet: iM(38935),
+         Chestplate: iM(38941),
+         Gauntlets: iM(38961),
+         Leggings: iM(38950),
+         Boots: iM(38954)
+       } [OM.b[MM]]);
```

#### 101. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L994` → after: `L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1002) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L994)

```diff
-         return (0, LG.n)(bG)
+         return (0, jM.p)(rM)
```

#### 102. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1002` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1010) · [Before (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1002)

```diff
-           bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG.o;
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM.n;
```

#### 103. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1006-L1007` → after: `L1014-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1014-L1015) · [Before (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1006-L1007)

```diff
-         for (let GG = 0; GG < wG.c.length; GG++) this.part(GG).catch((bG => {
-           console.warn(`The grayscale armour ${wG.c[GG]} image didn't decode ahead of use`, bG)
+         for (let MM = 0; MM < OM.b.length; MM++) this.part(MM).catch((rM => {
+           console.warn(`The grayscale armour ${OM.b[MM]} image didn't decode ahead of use`, rM)
```

#### 104. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1029` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1037) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1029)

```diff
-           throw new SG.b("decode", `grayscale armour ${wG.c[GG]}`, {
+           throw new SM.d("decode", `grayscale armour ${OM.b[MM]}`, {
```

#### 105. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1043` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1051) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1043)

```diff
-           throw this.decoded.delete(GG), bG instanceof SG.b ? bG : new SG.b("decode", `grayscale armour ${wG.c[GG]}`, {
+           throw this.decoded.delete(MM), rM instanceof SM.d ? rM : new SM.d("decode", `grayscale armour ${OM.b[MM]}`, {
```

#### 106. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1051` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1059) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1051)

```diff
-   41333: (GG, bG, ZG) => {
+   42039: (MM, rM, iM) => {
```

#### 107. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1056-L1057` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1064-L1065) · [Before (L1056-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1056-L1057)

```diff
-       j: () => pG,
-       k: () => hG
+       i: () => LM,
+       m: () => JM
```

#### 108. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1059-L1061` → after: `L1067-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1067-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1067-L1069) · [Before (L1059-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1059-L1061)

```diff
-     var wG = ZG(41175),
-       SG = ZG(41336),
-       LG = ZG(41340);
+     var OM = iM(41884),
+       SM = iM(42041),
+       jM = iM(42045);
```

#### 109. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1092` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1100) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1092)

```diff
-         armourAtlasUrl: async () => (await ZG.e(207).then((() => ZG(34575)))).armourAtlasUrl,
+         armourAtlasUrl: async () => (await iM.e(231).then((() => iM(35131)))).armourAtlasUrl,
```

#### 110. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1098` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1106) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1098)

```diff
-         particleItemUrl: async GG => (SG ??= ZG.e(38).then((() => ZG(51483))).catch((GG => {
+         particleItemUrl: async MM => (SM ??= iM.e(43).then((() => iM(53811))).catch((MM => {
```

#### 111. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1107` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1115) · [Before (L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1107)

```diff
-         this.sources = GG, this.onFailure = bG, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.grey … [truncated]
+         this.sources = MM, this.onFailure = rM, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.grey … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1120` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1128) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1120)

```diff
-         this.glbWrittenImages.delete(GG), bG && this.setGlbImages(GG, void 0 !== ZG && ZG.length > 0 ? ZG : void 0)
+         this.glbWrittenImages.delete(MM), rM && this.setGlbImages(MM, void 0 !== iM && iM.length > 0 ? iM : void 0)
```

#### 113. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1124` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1132) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1124)

```diff
-         this.glbTakenCount.set(GG, (null !== (ZG = this.glbTakenCount.get(GG)) && void 0 !== ZG ? ZG : 0) + 1), void 0 === bG ? this.glbImages.delete(GG) : this.glbImages.set(GG, bG);
+         this.glbTakenCount.set(MM, (null !== (iM = this.glbTakenCount.get(MM)) && void 0 !== iM ? iM : 0) + 1), void 0 === rM ? this.glbImages.delete(MM) : this.glbImages.set(MM, rM);
```

#### 114. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1140` → after: `L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1148) · [Before (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1140)

```diff
-         if (this.pK) return;
+         if (this.dh) return;
```

#### 115. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1177` → after: `L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1185) · [Before (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1177)

```diff
-         this.pK = !0, this.loading.clear(), this.ready.length = 0;
+         this.dh = !0, this.loading.clear(), this.ready.length = 0;
```

#### 116. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1188` → after: `L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1196) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1188)

```diff
-           this.pK || this.loading.get(bG) !== ZG ? this.release(wG.id) : (this.loading.delete(bG), this.answered.set(wG.id, GG), this.ready.push({
+           this.dh || this.loading.get(rM) !== iM ? this.release(OM.id) : (this.loading.delete(rM), this.answered.set(OM.id, MM), this.ready.push({
```

#### 117. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1194` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1202) · [Before (L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1194)

```diff
-           if (this.pK || this.loading.get(bG) !== ZG) return;
+           if (this.dh || this.loading.get(rM) !== iM) return;
```

#### 118. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1199` → after: `L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1207) · [Before (L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1199)

```diff
-           const SG = wG instanceof LG.b && "decode" === wG.stage ? QG : KG;
+           const SM = OM instanceof jM.d && "decode" === OM.stage ? HM : hM;
```

#### 119. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1230` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1238) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1230)

```diff
-             throw new LG.b("fetch", `image kind ${GG.kind}`, {
+             throw new jM.d("fetch", `image kind ${MM.kind}`, {
```

#### 120. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1244` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1252) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1244)

```diff
-             throw new LG.b("fetch", wG, {
+             throw new jM.d("fetch", OM, {
```

#### 121. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1251` → after: `L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1259) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1251)

```diff
-         if (!wG) throw new LG.b("decode", `image ${GG.index} of file ${2147483647&GG.word}`, {
+         if (!OM) throw new jM.d("decode", `image ${MM.index} of file ${2147483647&MM.word}`, {
```

#### 122. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1264` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1272) · [Before (L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1264)

```diff
-       return `${bG}:${ZG}:${wG}`
+       return `${rM}:${iM}:${OM}`
```

#### 123. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1268` → after: `L1276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1276) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1268)

```diff
-       if (null === GG) throw new LG.b("fetch", `no URL for image ${JG(bG)}`, {
+       if (null === MM) throw new jM.d("fetch", `no URL for image ${yM(rM)}`, {
```

#### 124. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1278` → after: `L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1286) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1278)

```diff
-       return kG.setUint8(0, GG.kind), kG.setUint8(1, GG.index), kG.setUint8(2, bG), kG.setUint32(4, GG.word, !0), kG.setUint32(8, null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.id) && void 0 !== wG ? wG : 0, !0), kG.setUint16(12, Math.min(null !== (SG = null === ZG ||  … [truncated]
+       return PM.setUint8(0, MM.kind), PM.setUint8(1, MM.index), PM.setUint8(2, rM), PM.setUint32(4, MM.word, !0), PM.setUint32(8, null !== (OM = null === iM || void 0 === iM ? void 0 : iM.id) && void 0 !== OM ? OM : 0, !0), PM.setUint16(12, Math.min(null !== (SM = null === iM ||  … [truncated]
```

#### 125. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1295` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1303) · [Before (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1295)

```diff
-       const LG = null !== (bG = wG.images) && void 0 !== bG ? bG : [];
+       const jM = null !== (rM = OM.images) && void 0 !== rM ? rM : [];
```

#### 126. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1301-L1302` → after: `L1309-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1309-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1309-L1310) · [Before (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1301-L1302)

```diff
-         if (!LG || 0 !== (null !== (ZG = LG.buffer) && void 0 !== ZG ? ZG : 0) || void 0 === LG.byteLength) return null;
-         const kG = null !== (SG = LG.byteOffset) && void 0 !== SG ? SG : 0,
+         if (!jM || 0 !== (null !== (iM = jM.buffer) && void 0 !== iM ? iM : 0) || void 0 === jM.byteLength) return null;
+         const PM = null !== (SM = jM.byteOffset) && void 0 !== SM ? SM : 0,
```

#### 127. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1308` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1316) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1308)

```diff
-   41034: (GG, bG, ZG) => {
+   41739: (MM, rM, iM) => {
```

#### 128. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1311-L1312` → after: `L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1320) · [Before (L1311-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1311-L1312)

```diff
-       e: () => LG,
-       f: () => SG
+       e: () => SM
```

#### 129. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1329` → after: `L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1337) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1329)

```diff
-   36936: (GG, bG, ZG) => {
+   37524: (MM, rM, iM) => {
```

#### 130. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1333-L1334` → after: `L1341-L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1341-L1342) · [Before (L1333-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1333-L1334)

```diff
-       i: () => JG,
-       l: () => YG
+       k: () => yM,
+       m: () => QM
```

#### 131. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1336-L1341` → after: `L1344-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1344-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1344-L1349) · [Before (L1336-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1336-L1341)

```diff
-     var wG = ZG(17),
-       SG = ZG(2380),
-       LG = ZG(2388),
-       yG = ZG(2391),
-       kG = ZG(2465),
-       UG = ZG(19);
+     var OM = iM(19),
+       SM = iM(2619),
+       jM = iM(2622),
+       aM = iM(2624),
+       PM = iM(2690),
+       nM = iM(22);
```

#### 132. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1344` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1352) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1344)

```diff
-       return (!(0, yG.e)() || 0 === GG && 0 === bG) && (0, LG.y)(SG.g.Joystick, 0, GG, bG, 0)
+       return (!(0, aM.c)() || 0 === MM && 0 === rM) && (0, jM.z)(SM.l.Joystick, 0, MM, rM, 0)
```

#### 133. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1371` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1379) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1371)

```diff
-       return document.documentElement.classList.contains(kG.m)
+       return document.documentElement.classList.contains(PM.k)
```

#### 134. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1435` → after: `L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1443) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1435)

```diff
-         if (!bG) return void this.write(SG.g.TouchZone, GG, 0, 0, 0);
+         if (!rM) return void this.write(SM.l.TouchZone, MM, 0, 0, 0);
```

#### 135. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1440` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1448) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1440)

```diff
-         this.write(SG.g.TouchZone, GG, LG.x - this.canvasLeft, LG.y - this.canvasTop, hG(ZG.width, ZG.height));
+         this.write(SM.l.TouchZone, MM, jM.x - this.canvasLeft, jM.y - this.canvasTop, JM(iM.width, iM.height));
```

#### 136. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1442` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1450) · [Before (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1442)

```diff
-         this.write(SG.g.TouchZone, 256 | GG, 0, 0, yG ? hG(yG.width, yG.height) : 0)
+         this.write(SM.l.TouchZone, 256 | MM, 0, 0, aM ? JM(aM.width, aM.height) : 0)
```

#### 137. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1446` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1454) · [Before (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1446)

```diff
-           ZG = wG.e.get("worldPanelHud");
+           iM = OM.d.get("worldPanelHud");
```

#### 138. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1454-L1455` → after: `L1462-L1463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1462-L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1462-L1463) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1454-L1455)

```diff
-     }(LG.y);
-     (0, UG.p)(kG.e, (() => {
+     }(jM.z);
+     (0, nM.j)(PM.f, (() => {
```

#### 139. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1459` → after: `L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1467) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1459)

```diff
-   41088: (GG, bG, ZG) => {
+   41787: (MM, rM, iM) => {
```

#### 140. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1461-L1462` → after: `L1469-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1469-L1470) · [Before (L1461-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1461-L1462)

```diff
-       c: () => UG,
-       e: () => YG
+       b: () => nM,
+       d: () => QM
```

#### 141. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1464-L1469` → after: `L1472-L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1472-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1472-L1477) · [Before (L1464-L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1464-L1469)

```diff
-     var wG = ZG(41217),
-       SG = ZG(39461),
-       LG = ZG(36801),
-       yG = ZG(41092),
-       kG = ZG(41065);
-     const UG = wG.d.timeForPlayerToConnect - 1e4;
+     var OM = iM(41930),
+       SM = iM(40089),
+       jM = iM(37414),
+       aM = iM(41793),
+       PM = iM(41764);
+     const nM = OM.b.timeForPlayerToConnect - 1e4;
```

#### 142. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1475` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1483) · [Before (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1475)

```diff
-         throw console.error("[bloxd-wasm-client] could not get a traffic code", KG), new kG.r(KG)
+         throw console.error("[bloxd-wasm-client] could not get a traffic code", hM), new PM.w(hM)
```

#### 143. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1481` → after: `L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1489) · [Before (L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1481)

```diff
-         const bG = (0, LG.g)(GG, YG, VG, UG, (GG => {
+         const rM = (0, jM.f)(MM, QM, zM, nM, (MM => {
```

#### 144. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1486` → after: `L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1494) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1486)

```diff
-         const SG = (0, yG.E)();
+         const SM = (0, aM.G)();
```

#### 145. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1501` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1509) · [Before (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1501)

```diff
-         optionsAfterRefusal: async bG => await (0, SG.b)(GG, bG) ? pG().joinOptions : null
+         optionsAfterRefusal: async rM => await (0, SM.e)(MM, rM) ? LM().joinOptions : null
```

#### 146. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1505` → after: `L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1513) · [Before (L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1505)

```diff
-   41352: (GG, bG, ZG) => {
+   42055: (MM, rM, iM) => {
```

#### 147. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1507-L1510` → after: `L1515-L1518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1515-L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1515-L1518) · [Before (L1507-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1507-L1510)

```diff
-       b: () => VG,
-       e: () => LG,
-       i: () => pG,
-       l: () => yG
+       c: () => zM,
+       g: () => jM,
+       j: () => LM,
+       n: () => aM
```

#### 148. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1512-L1513` → after: `L1520-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1520-L1521) · [Before (L1512-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1512-L1513)

```diff
-     var wG = ZG(41333),
-       SG = ZG(41175);
+     var OM = iM(42039),
+       SM = iM(41884);
```

#### 149. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1577` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1585) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1577)

```diff
-           return null !== (ZG = null === (wG = bG()) || void 0 === wG ? void 0 : wG.armourAtlasUrl()) && void 0 !== ZG ? ZG : GG.armourAtlasUrl()
+           return null !== (iM = null === (OM = rM()) || void 0 === OM ? void 0 : OM.armourAtlasUrl()) && void 0 !== iM ? iM : MM.armourAtlasUrl()
```

#### 150. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1582` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1590) · [Before (L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1582)

```diff
-           const GG = await ZG.e(38).then((() => ZG(51483))).catch((() => null));
+           const MM = await iM.e(43).then((() => iM(53811))).catch((() => null));
```

#### 151. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1587` → after: `L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1595) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1587)

```diff
-           return null !== (GG = null === (bG = await kG()) || void 0 === bG ? void 0 : bG.blockImageName(ZG)) && void 0 !== GG ? GG : null
+           return null !== (MM = null === (rM = await PM()) || void 0 === rM ? void 0 : rM.blockImageName(iM)) && void 0 !== MM ? MM : null
```

#### 152. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1601` → after: `L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1609) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1601)

```diff
-           SG = null !== (GG = null === wG || void 0 === wG ? void 0 : wG.slice(wG.lastIndexOf("/") + 1)) && void 0 !== GG ? GG : null;
+           SM = null !== (MM = null === OM || void 0 === OM ? void 0 : OM.slice(OM.lastIndexOf("/") + 1)) && void 0 !== MM ? MM : null;
```

#### 153. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1620` → after: `L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1628) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1620)

```diff
-             return GG.index === wG.j.Item;
+             return MM.index === OM.i.Item;
```

#### 154. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1629` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1637) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1629)

```diff
-   41226: (GG, bG, ZG) => {
+   41932: (MM, rM, iM) => {
```

#### 155. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1631-L1635` → after: `L1639-L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1639-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1639-L1643) · [Before (L1631-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1631-L1635)

```diff
-       e: () => wG,
-       g: () => kG,
-       h: () => yG,
-       i: () => SG,
-       m: () => LG
+       c: () => OM,
+       f: () => PM,
+       j: () => aM,
+       k: () => SM,
+       o: () => jM
```

#### 156. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1656` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1664) · [Before (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1656)

```diff
-       Promise.resolve().then((() => ZG(86))).then((bG => {
+       Promise.resolve().then((() => iM(94))).then((rM => {
```

#### 157. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1667` → after: `L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1675) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1667)

```diff
-       null !== window.onbeforeunload ? Promise.resolve().then((() => ZG(1702))).then((bG => {
+       null !== window.onbeforeunload ? Promise.resolve().then((() => iM(1830))).then((rM => {
```

#### 158. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1682` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1690) · [Before (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1682)

```diff
-   5074: (GG, bG, ZG) => {
+   5463: (MM, rM, iM) => {
```

#### 159. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1696` → after: `L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1704) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1696)

```diff
-       c: () => wG
+       d: () => OM
```

#### 160. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1699` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1707) · [Before (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1699)

```diff
-   41299: (GG, bG, ZG) => {
+   42012: (MM, rM, iM) => {
```

#### 161. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1701-L1702` → after: `L1709-L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1709-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1709-L1710) · [Before (L1701-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1701-L1702)

```diff
-       b: () => XG,
-       d: () => EG,
+       c: () => CM,
+       f: () => UM,
```

#### 162. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1704` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1712) · [Before (L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1704)

```diff
-       i: () => KG
+       h: () => hM
```

#### 163. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1706-L1711` → after: `L1714-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1714-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1714-L1719) · [Before (L1706-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1706-L1711)

```diff
-     var wG = ZG(1786),
-       SG = ZG(1169),
-       LG = ZG(39456),
-       yG = ZG(36826),
-       kG = ZG(39478),
-       UG = ZG(41065);
+     var OM = iM(1919),
+       SM = iM(1215),
+       jM = iM(40087),
+       aM = iM(37437),
+       PM = iM(40100),
+       nM = iM(41764);
```

#### 164. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1735` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1743) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1735)

```diff
-       return `${wG?"https":"http"}://${SG}${LG}/matchmake/${bG}/${encodeURIComponent(ZG)}${yG?`?${yG}`:""}`
+       return `${OM?"https":"http"}://${SM}${jM}/matchmake/${rM}/${encodeURIComponent(iM)}${aM?`?${aM}`:""}`
```

#### 165. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1740-L1741` → after: `L1748-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1748-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1748-L1749) · [Before (L1740-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1740-L1741)

```diff
-       const wG = null !== (ZG = bG.protocol) && void 0 !== ZG ? ZG : "ws";
-       if ("ws" !== wG) throw new Error(`seat reservation asks for the ${wG} transport`);
+       const OM = null !== (iM = rM.protocol) && void 0 !== iM ? iM : "ws";
+       if ("ws" !== OM) throw new Error(`seat reservation asks for the ${OM} transport`);
```

#### 166. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1749` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1757) · [Before (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1749)

```diff
-       return `${SG?"wss":"ws"}://${bG.room.publicAddress||`${LG}${yG}`}/${bG.room.processId}/${bG.room.roomId}?${UG.toString()}`
+       return `${SM?"wss":"ws"}://${rM.room.publicAddress||`${jM}${aM}`}/${rM.room.processId}/${rM.room.roomId}?${nM.toString()}`
```

#### 167. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1754-L1757` → after: `L1762-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1762-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1762-L1765) · [Before (L1754-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1754-L1757)

```diff
-       const fG = null !== (kG = YG.sleep) && void 0 !== kG ? kG : wG.e,
-         KG = new SG.d(YG.signal),
-         hG = new yG.d((() => {
-           (0, SG.j)(KG.controller, new yG.g("seat"))
+       const mM = null !== (PM = QM.sleep) && void 0 !== PM ? PM : OM.c,
+         hM = new SM.e(QM.signal),
+         JM = new aM.e((() => {
+           (0, SM.j)(hM.controller, new aM.i("seat"))
```

#### 168. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1772` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1780) · [Before (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1772)

```diff
-             if (QG > 0) await kG(null !== (hG = pG[QG - 1]) && void 0 !== hG ? hG : 1500, yG);
+             if (HM > 0) await PM(null !== (JM = LM[HM - 1]) && void 0 !== JM ? JM : 1500, aM);
```

#### 169. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1790` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1798) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1790)

```diff
-               KG = new UG.q(`seat request answered HTTP ${bG.status}${null===ZG?" without JSON":" without a seat"}`, !1, void 0, bG.status)
+               hM = new nM.v(`seat request answered HTTP ${rM.status}${null===iM?" without JSON":" without a seat"}`, !1, void 0, rM.status)
```

#### 170. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1793` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1801) · [Before (L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1793)

```diff
-           throw null !== (LG = KG) && void 0 !== LG ? LG : new UG.q("seat request made no attempt", !1)
+           throw null !== (jM = hM) && void 0 !== jM ? jM : new nM.v("seat request made no attempt", !1)
```

#### 171. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1806` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1814) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1806)

```diff
-       return new UG.q(GG instanceof Error ? GG.message : String(GG), !0, GG)
+       return new nM.v(MM instanceof Error ? MM.message : String(MM), !0, MM)
```

#### 172. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1812` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1820) · [Before (L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1812)

```diff
-       } = ZG, yG = null !== (wG = ZG.fetch) && void 0 !== wG ? wG : fetch, kG = await yG(GG, {
+       } = iM, aM = null !== (OM = iM.fetch) && void 0 !== OM ? OM : fetch, PM = await aM(MM, {
```

#### 173. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1829` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1837) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1829)

```diff
-             answer: "object" === typeof bG && null !== bG ? bG : null,
+             answer: "object" === typeof rM && null !== rM ? rM : null,
```

#### 174. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1852` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1860) · [Before (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1852)

```diff
-       return new UG.k(GG, "number" === typeof(null === bG || void 0 === bG ? void 0 : bG.code) ? bG.code : 0, (0, kG.s)(GG).text)
+       return new nM.n(MM, "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.code) ? rM.code : 0, (0, PM.t)(MM).text)
```

#### 175. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1872` → after: `L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1880) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1872)

```diff
-         throw new zG(`the seat's reconnect was refused: ${null!==yG&&void 0!==yG?yG:`HTTP ${SG.status}`}`, GG)
+         throw new EM(`the seat's reconnect was refused: ${null!==aM&&void 0!==aM?aM:`HTTP ${SM.status}`}`, MM)
```

#### 176. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1894` → after: `L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1902) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1894)

```diff
-   40976: (GG, bG, ZG) => {
+   41682: (MM, rM, iM) => {
```

#### 177. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1898-L1900` → after: `L1905-L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1905-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1905-L1910) · [Before (L1898-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1898-L1900)

```diff
-       E: () => FG,
-       I: () => EG,
-       L: () => oG,
+       B: () => RM,
+       D: () => UM,
+       H: () => GM,
+       K: () => dM,
+       N: () => tM,
+       O: () => WM,
```

#### 178. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1902-L1912` → after: `L1912-L1922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1912-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1912-L1922) · [Before (L1902-L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1902-L1912)

```diff
-       T: () => WG,
-       W: () => aG,
-       Z: () => KG,
-       b: () => SG,
-       cb: () => rG,
-       db: () => JG,
-       e: () => cG,
-       gb: () => zG,
-       i: () => vG,
-       jb: () => XG,
-       m: () => QG,
+       S: () => DM,
+       U: () => lM,
+       X: () => yM,
+       _: () => EM,
+       ab: () => CM,
+       d: () => SM,
+       h: () => sM,
+       j: () => pM,
+       k: () => HM,
+       l: () => JM,
+       n: () => uM,
```

#### 179. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1914-L1917` → after: `L1924-L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1924-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1924-L1925) · [Before (L1914-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1914-L1917)

```diff
-       t: () => IG,
-       v: () => iG,
-       x: () => mG,
-       y: () => CG
+       s: () => gM,
+       w: () => wM
```

#### 180. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1919` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1927) · [Before (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1919)

```diff
-     var wG = ZG(2984);
+     var OM = iM(3349);
```

#### 181. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1950` → after: `L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1958) · [Before (L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1950)

```diff
-       return !ArrayBuffer.isView(GG) || GG instanceof DataView ? Array.isArray(GG) ? GG.map((GG => bG(GG))) : GG : Array.from(GG, (GG => bG(GG)))
+       return !ArrayBuffer.isView(MM) || MM instanceof DataView ? Array.isArray(MM) ? MM.map((MM => rM(MM))) : MM : Array.from(MM, (MM => rM(MM)))
```

#### 182. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1970` → after: `L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1978) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1970)

```diff
-       return null === GG || "object" !== typeof GG ? GG : [yG(GG.Uk), yG(GG.Yk)]
+       return null === MM || "object" !== typeof MM ? MM : [aM(MM.lQ), aM(MM.EQ)]
```

#### 183. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1974` → after: `L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1982) · [Before (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1974)

```diff
-       return null === GG || "object" !== typeof GG ? GG : [LG(GG.eS, YG), LG(GG.Wk, YG)]
+       return null === MM || "object" !== typeof MM ? MM : [jM(MM.ti, QM), jM(MM.oa, QM)]
```

#### 184. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1978` → after: `L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1986) · [Before (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1978)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.vV), yG(bG.aV)];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Kz), aM(rM.qz)];
```

#### 185. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1983` → after: `L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1991) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1983)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [bG.id, bG.rV];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [rM.id, rM.IQ];
```

#### 186. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1988` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L1996) · [Before (L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1988)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [bG.BS, yG(bG.bL), bG.ZL, yG(bG.LL), bG.YL, bG.VL, bG.mV, yG(bG.IV), yG(bG.FV)];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [rM.hM, aM(rM.JM), rM.dM, aM(rM.EM), rM.eM, rM.bM, rM.cn, aM(rM.MQ), aM(rM.rQ)];
```

#### 187. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1993` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2001) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1993)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [LG(bG.xy, YG), bG.Gk];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [jM(rM.SP, QM), rM.jP];
```

#### 188. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1998` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2006) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L1998)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [LG(bG.Dy, (GG => yG(GG))), yG(bG.Ny), bG.Oy];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [jM(rM.aQ, (MM => aM(MM))), aM(rM.nQ), rM.QQ];
```

#### 189. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2003` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2011) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2003)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [LG(bG.uU, YG), yG(bG.iU), bG.CU];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [jM(rM.mQ, QM), aM(rM.hQ), rM.JQ];
```

#### 190. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2008` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2016) · [Before (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2008)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.FL), yG(bG.vL)];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Ii), aM(rM.Ki)];
```

#### 191. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2013` → after: `L2021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2021) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2013)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.Ak)];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Ua)];
```

#### 192. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2022` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2030) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2022)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.hV), yG(bG.dV), yG(bG.Uk), yG(bG.Yk)];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.dQ), aM(rM.yQ), aM(rM.lQ), aM(rM.EQ)];
```

#### 193. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2035` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2043) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2035)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.hU)];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.KQ)];
```

#### 194. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2044` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2052) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2044)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.yk), yG(bG.kk)];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Ja), aM(rM.da)];
```

#### 195. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2061` → after: `L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2069) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2061)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.WU)];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.vQ)];
```

#### 196. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2066` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2074) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2066)

```diff
-       return (VG ??= (0, wG.c)().map((GG => GG.name)), VG).map((bG => {
+       return (zM ??= (0, OM.f)().map((MM => MM.name)), zM).map((rM => {
```

#### 197. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2073` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2081) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2073)

```diff
-       return null === (bG = GG) || "object" !== typeof bG ? bG : [bG.fU, bG.QU, bG.KU];
+       return null === (rM = MM) || "object" !== typeof rM ? rM : [rM.fa, rM.Ya, rM.Na];
```

#### 198. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2077` → after: `L2085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2085) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2077)

```diff
-   41359: (GG, bG, ZG) => {
+   42061: (MM, rM, iM) => {
```

#### 199. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2081-L2082` → after: `L2089-L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2089-L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2089-L2090) · [Before (L2081-L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2081-L2082)

```diff
-     var wG = ZG(41365),
-       SG = ZG(41352);
+     var OM = iM(42065),
+       SM = iM(42055);
```

#### 200. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2126` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2134) · [Before (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2126)

```diff
-     }(SG.e)
+     }(SM.g)
```

#### 201. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2128` → after: `L2136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2136) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2128)

```diff
-   5071: (GG, bG, ZG) => {
+   5456: (MM, rM, iM) => {
```

#### 202. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2130-L2131` → after: `L2138-L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2138-L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2138-L2139) · [Before (L2130-L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2130-L2131)

```diff
-       c: () => yG,
-       d: () => kG
+       e: () => aM,
+       g: () => PM
```

#### 203. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2133-L2134` → after: `L2141-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2141-L2142) · [Before (L2133-L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2133-L2134)

```diff
-     var wG = ZG(2138),
-       SG = ZG(5074);
+     var OM = iM(2263),
+       SM = iM(5463);
```

#### 204. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2139` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2147) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2139)

```diff
-         pack: GG.metaData.id === wG.e ? null : GG
+         pack: MM.metaData.id === OM.b ? null : MM
```

#### 205. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2144` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2152) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2144)

```diff
-       return !(null === LG || !(0, SG.c)(LG.pack, GG)) && (LG = null, !0)
+       return !(null === jM || !(0, SM.d)(jM.pack, MM)) && (jM = null, !0)
```

#### 206. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2147` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2155) · [Before (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2147)

```diff
-   41048: (GG, bG, ZG) => {
+   41755: (MM, rM, iM) => {
```

#### 207. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2157-L2170` → after: `L2165-L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2165-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2165-L2178) · [Before (L2157-L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2157-L2170)

```diff
-     var wG = ZG(188),
-       SG = ZG(1202),
-       LG = ZG(140),
-       yG = ZG(39487),
-       kG = ZG(1895),
-       UG = ZG(19),
-       YG = ZG(4695),
-       VG = ZG(1275),
-       pG = ZG(1682),
-       fG = ZG(1287),
-       QG = ZG(39663),
-       KG = ZG(1260),
-       hG = ZG(1781),
-       dG = ZG(2910);
+     var OM = iM(181),
+       SM = iM(1251),
+       jM = iM(143),
+       aM = iM(40118),
+       PM = iM(2039),
+       nM = iM(22),
+       QM = iM(5052),
+       zM = iM(1360),
+       LM = iM(1818),
+       mM = iM(1373),
+       HM = iM(40331),
+       hM = iM(1327),
+       JM = iM(1911),
+       dM = iM(3248);
```

#### 208. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2181` → after: `L2189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2189) · [Before (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2181)

```diff
-         hG.d.markAdmissionAwaited()
+         JM.b.markAdmissionAwaited()
```

#### 209. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2184` → after: `L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2192) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2184)

```diff
-         hG.d.markJoinAdEnded()
+         JM.b.markJoinAdEnded()
```

#### 210. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2187` → after: `L2195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2195) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2187)

```diff
-         hG.d.markAdmitted()
+         JM.b.markAdmitted()
```

#### 211. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2190-L2200` → after: `L2198-L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2198-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2198-L2208) · [Before (L2190-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2190-L2200)

```diff
-     var uG = ZG(39678),
-       iG = ZG(39578),
-       CG = ZG(36808),
-       WG = ZG(39456),
-       mG = ZG(8957),
-       IG = ZG(36826),
-       FG = ZG(41056),
-       vG = ZG(4800),
-       aG = ZG(40971),
-       cG = ZG(41031),
-       lG = ZG(40976);
+     var eM = iM(40342),
+       bM = iM(40249),
+       wM = iM(37416),
+       tM = iM(40087),
+       gM = iM(9510),
+       uM = iM(37437),
+       RM = iM(41761),
+       pM = iM(5188),
+       WM = iM(41677),
+       sM = iM(41734),
+       DM = iM(41682);
```

#### 212. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2326` → after: `L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2334) · [Before (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2326)

```diff
-         ...cG.d[GG]
+         ...sM.c[MM]
```

#### 213. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2334` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2342) · [Before (L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2334)

```diff
-       return null === (GG = null === (bG = (0, aG.f)()) || void 0 === bG ? void 0 : bG.localPlayerAlive()) || void 0 === GG || GG
+       return null === (MM = null === (rM = (0, WM.e)()) || void 0 === rM ? void 0 : rM.localPlayerAlive()) || void 0 === MM || MM
```

#### 214. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2339` → after: `L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2347) · [Before (L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2339)

```diff
-       return null !== (GG = null === (bG = (0, aG.f)()) || void 0 === bG ? void 0 : bG.localDeaths()) && void 0 !== GG ? GG : null
+       return null !== (MM = null === (rM = (0, WM.e)()) || void 0 === rM ? void 0 : rM.localDeaths()) && void 0 !== MM ? MM : null
```

#### 215. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2346` → after: `L2354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2354) · [Before (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2346)

```diff
-           return (0, vG.t)((() => {
+           return (0, pM.y)((() => {
```

#### 216. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2369` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2377) · [Before (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2369)

```diff
-             null === (GG = (0, aG.f)()) || void 0 === GG || GG.respawn()
+             null === (MM = (0, WM.e)()) || void 0 === MM || MM.respawn()
```

#### 217. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2373-L2374` → after: `L2381-L2382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2381-L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2381-L2382) · [Before (L2373-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2373-L2374)

```diff
-             null === (bG = (0, aG.f)()) || void 0 === bG || bG.send(lG.b.PlayEmote, (0, lG.I)({
-               Ak: GG
+             null === (rM = (0, WM.e)()) || void 0 === rM || rM.send(DM.d.PlayEmote, (0, DM.D)({
+               Ua: MM
```

#### 218. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2382` → after: `L2390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2390) · [Before (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2382)

```diff
-             null === (bG = (0, aG.f)()) || void 0 === bG || bG.thirdPersonFor(ZG)
+             null === (rM = (0, WM.e)()) || void 0 === rM || rM.thirdPersonFor(iM)
```

#### 219. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2386` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2394) · [Before (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2386)

```diff
-             null === (bG = (0, aG.f)()) || void 0 === bG || bG.bindCustomButtonKeys(GG)
+             null === (rM = (0, WM.e)()) || void 0 === rM || rM.bindCustomButtonKeys(MM)
```

#### 220. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2394` → after: `L2402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2402) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2394)

```diff
-             null === (bG = (0, aG.f)()) || void 0 === bG || bG.pressCustomButton(ZG, wG)
+             null === (rM = (0, WM.e)()) || void 0 === rM || rM.pressCustomButton(iM, OM)
```

#### 221. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2398-L2399` → after: `L2406-L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2406-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2406-L2407) · [Before (L2398-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2398-L2399)

```diff
-             const bG = (0, lG.W)({
-                 WU: GG
+             const rM = (0, DM.O)({
+                 vQ: MM
```

#### 222. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2402-L2403` → after: `L2410-L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2410-L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2410-L2411) · [Before (L2402-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2402-L2403)

```diff
-                 const GG = (0, aG.f)();
-                 return !(null !== GG && void 0 !== GG && GG.isSessionLive) || GG.send(lG.b.StopSleeping, bG)
+                 const MM = (0, WM.e)();
+                 return !(null !== MM && void 0 !== MM && MM.isSessionLive) || MM.send(DM.d.StopSleeping, rM)
```

#### 223. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2406` → after: `L2414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2414) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2406)

```diff
-               const GG = (0, vG.t)((() => {
+               const MM = (0, pM.y)((() => {
```

#### 224. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2413` → after: `L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2421) · [Before (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2413)

```diff
-             null === (bG = (0, aG.f)()) || void 0 === bG || bG.setCameraZoom(GG)
+             null === (rM = (0, WM.e)()) || void 0 === rM || rM.setCameraZoom(MM)
```

#### 225. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2421` → after: `L2429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2429) · [Before (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2421)

```diff
-             return null !== (GG = null === (bG = (0, aG.f)()) || void 0 === bG ? void 0 : bG.cameraZoom()) && void 0 !== GG ? GG : 0
+             return null !== (MM = null === (rM = (0, WM.e)()) || void 0 === rM ? void 0 : rM.cameraZoom()) && void 0 !== MM ? MM : 0
```

#### 226. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2425-L2433` → after: `L2433-L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2433-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2433-L2441) · [Before (L2425-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2425-L2433)

```diff
-     var nG = ZG(39478),
-       gG = ZG(41065),
-       eG = ZG(41072),
-       RG = ZG(41088),
-       TG = ZG(1213),
-       HG = ZG(86),
-       tG = ZG(4537),
-       DG = ZG(3728),
-       NG = ZG(1131);
+     var AM = iM(40100),
+       xM = iM(41764),
+       vM = iM(41767),
+       FM = iM(41787),
+       BM = iM(1265),
+       XM = iM(94),
+       IM = iM(4906),
+       KM = iM(4101),
+       qM = iM(1171);
```

#### 227. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2435` → after: `L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2443) · [Before (L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2435)

```diff
-       my: () => (0, TG.h)(),
+       tz: () => (0, BM.f)(),
```

#### 228. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2440-L2441` → after: `L2448-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2448-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2448-L2449) · [Before (L2440-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2440-L2441)

```diff
-       confirmMesh: () => (0, DG.b)(),
-       confirmMeshHitStack: () => (0, DG.e)()
+       confirmMesh: () => (0, KM.c)(),
+       confirmMeshHitStack: () => (0, KM.f)()
```

#### 229. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2443-L2452` → after: `L2451-L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2451-L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2451-L2460) · [Before (L2443-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2443-L2452)

```diff
-     var xG = ZG(41077),
-       BG = ZG(41226);
-     var Gb = ZG(17),
-       bb = ZG(1903),
-       Zb = ZG(1956),
-       wb = ZG(1583),
-       Sb = ZG(2009),
-       Lb = ZG(1151),
-       yb = ZG(1204),
-       kb = ZG(41235);
+     var VM = iM(41776),
+       cM = iM(41932);
+     var Mr = iM(19),
+       rr = iM(2045),
+       ir = iM(2093),
+       Or = iM(1722),
+       Sr = iM(2141),
+       jr = iM(1188),
+       ar = iM(1258),
+       Pr = iM(41939);
```

#### 230. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2455` → after: `L2463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2463) · [Before (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2455)

```diff
-       return yb.d.get().getCurrentLanguageCode()
+       return ar.e.get().getCurrentLanguageCode()
```

#### 231. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2461` → after: `L2469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2469) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2461)

```diff
-           translate: (GG, bG) => (0, Lb.q)(Ub(), GG, bG),
+           translate: (MM, rM) => (0, jr.t)(nr(), MM, rM),
```

#### 232. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2463-L2464` → after: `L2471-L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2471-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2471-L2472) · [Before (L2463-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2463-L2464)

```diff
-             const bG = (0, Zb.y)(GG, Gb.e.get("isTouchScreen"));
-             return null !== bG ? (0, Lb.r)(Ub(), bG.translationKey, bG.params) : (0, Zb.t)((0, Zb.x)(GG))
+             const rM = (0, ir.r)(MM, Mr.d.get("isTouchScreen"));
+             return null !== rM ? (0, jr.x)(nr(), rM.translationKey, rM.params) : (0, ir.m)((0, ir.p)(MM))
```

#### 233. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2467-L2468` → after: `L2475-L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2475-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2475-L2476) · [Before (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2467-L2468)

```diff
-           hiddenNames: bb.b.shown,
-           loadsFontRest: (0, kb.e)(Ub())
+           hiddenNames: rr.c.shown,
+           loadsFontRest: (0, Pr.d)(nr())
```

#### 234. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2474` → after: `L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2482) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2474)

```diff
-           (0, Lb.i)(GG).then((() => {
+           (0, jr.k)(MM).then((() => {
```

#### 235. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2478` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2486) · [Before (L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2478)

```diff
-         SG = () => wb.b.getSocialState().friends.map((GG => GG.name.toLowerCase())).sort().join(" ");
+         SM = () => Or.e.getSocialState().friends.map((MM => MM.name.toLowerCase())).sort().join(" ");
```

#### 236. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2481` → after: `L2489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2489) · [Before (L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2481)

```diff
-       const yG = [(0, yb.h)((() => {
+       const aM = [(0, ar.i)((() => {
```

#### 237. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2483` → after: `L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2491) · [Before (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2483)

```diff
-       })), (0, UG.p)("customBindingsChanged", bG), (0, UG.p)("appManagerUpdated|isTouchScreen", bG), (0, Sb.e)((() => {
+       })), (0, nM.j)("customBindingsChanged", rM), (0, nM.j)("appManagerUpdated|isTouchScreen", rM), (0, Sr.d)((() => {
```

#### 238. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2486` → after: `L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2494) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2486)

```diff
-       })), bb.b.subscribe(bG)];
+       })), rr.c.subscribe(rM)];
```

#### 239. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2492-L2507` → after: `L2500-L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2500-L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2500-L2515) · [Before (L2492-L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2492-L2507)

```diff
-     var Vb = ZG(612),
-       pb = ZG(982),
-       fb = ZG(1931),
-       Qb = ZG(333),
-       Kb = ZG(171),
-       hb = ZG(2868),
-       db = ZG(2872),
-       Jb = ZG(39136),
-       rb = ZG(4708),
-       zb = ZG(41248),
-       Eb = ZG(666),
-       ob = ZG(631),
-       Xb = ZG(2947),
-       ub = ZG(1923),
-       ib = ZG(3737),
-       Cb = ZG(3265);
+     var zr = iM(632),
+       Lr = iM(1073),
+       mr = iM(2074),
+       Hr = iM(313),
+       hr = iM(170),
+       Jr = iM(3185),
+       dr = iM(3188),
+       yr = iM(39771),
+       lr = iM(5069),
+       Er = iM(41961),
+       Ur = iM(694),
+       Gr = iM(656),
+       Cr = iM(3284),
+       er = iM(2067),
+       br = iM(4110),
+       wr = iM(3690);
```

#### 240. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2509-L2520` → after: `L2517-L2530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2517-L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2517-L2530) · [Before (L2509-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2509-L2520)

```diff
-     var mb = ZG(1163),
-       Ib = ZG(1169),
-       Fb = ZG(4442),
-       vb = ZG(3437),
-       ab = ZG(47),
-       cb = ZG(326),
-       lb = ZG(318),
-       jb = ZG(41263),
-       Pb = ZG(4804),
-       Mb = ZG(39165);
-     var Ab = ZG(38094),
-       sb = ZG(41271);
+     var gr = iM(1202),
+       ur = iM(1215),
+       Rr = iM(4815),
+       pr = iM(3849),
+       Wr = iM(41),
+       sr = iM(310),
+       Dr = iM(308),
+       kr = iM(41975),
+       Zr = iM(5196),
+       or = iM(39814);
+     var fr = iM(4782),
+       Yr = iM(30);
+     var Nr = iM(38675),
+       Ar = iM(41984);
```

#### 241. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2522-L2523` → after: `L2532-L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2532-L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2532-L2533) · [Before (L2522-L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2522-L2523)

```diff
-       constructor(GG, bG) {
-         this.showView = GG, this.holdForAd = bG
+       constructor(MM, rM, iM) {
+         this.showView = MM, this.holdForAd = rM, this.render = iM
```

#### 242. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2526` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2536) · [Before (L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2526)

```diff
-         (0, jb.C)()
+         (0, kr.A)()
```

#### 243. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2531` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2541) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2531)

```diff
-           value: String((0, jb.s)())
+           value: String((0, kr.q)())
```

#### 244. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2538` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2548) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2538)

```diff
-         (0, sb.h)(GG)
+         (0, Ar.o)(MM)
```

#### 245. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2547` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2560) · [Before (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2547)

```diff
-           if (null !== (0, fG.d)().websocketUrl) try {
+           if (null !== (0, mM.e)().websocketUrl) try {
```

#### 246. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2550` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2563) · [Before (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2550)

```diff
-             (0, fG.q)({
+             (0, mM.p)({
```

#### 247. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2562` → after: `L2578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2578) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2562)

```diff
-         return (0, vG.p)(GG)
+         return (0, pM.v)(MM)
```

#### 248. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2565` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2581) · [Before (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2565)

```diff
-         return (0, vG.n)(GG)
+         return (0, pM.r)(MM)
```

#### 249. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2568` → after: `L2584-L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2584-L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2584-L2587) · [Before (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2568)

```diff
-         return (0, vG.t)(GG)
+         return (0, pM.y)(MM)
+       }
+       frameWorkMs() {
+         return this.workMs()
```

#### 250. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2571` → after: `L2590-L2591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2590-L2591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2590-L2591) · [Before (L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2571)

```diff
-     var eb = ZG(41278);
+     var Br = iM(41922),
+       Xr = iM(41993);
```

#### 251. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2619-L2631` → after: `L2639-L2651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2639-L2651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2639-L2651) · [Before (L2619-L2631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2619-L2631)

```diff
-       return Hb((await ZG.e(207).then((() => ZG(34575)))).averageColors)
-     }
-     var Nb = ZG(4810),
-       Ob = ZG(4818),
-       xb = ZG(41018),
-       Bb = ZG(3209),
-       GZ = ZG(36594),
-       bZ = ZG(41119),
-       ZZ = ZG(595),
-       wZ = ZG(37413),
-       SZ = ZG(589),
-       LZ = ZG(352),
-       yZ = ZG(41112);
+       return qr((await iM.e(231).then((() => iM(35131)))).averageColors)
+     }
+     var cr = iM(5198),
+       Mi = iM(5200),
+       ri = iM(41714),
+       ii = iM(3640),
+       Oi = iM(37218),
+       Si = iM(41826),
+       ji = iM(620),
+       ai = iM(37988),
+       Pi = iM(613),
+       ni = iM(332),
+       Qi = iM(41809);
```

#### 252. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2635` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2655) · [Before (L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2635)

```diff
-       mobTypes: ZZ.o,
+       mobTypes: ji.p,
```

#### 253. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2637-L2638` → after: `L2657-L2658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2657-L2658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2657-L2658) · [Before (L2637-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2637-L2638)

```diff
-       mobAiStates: ZZ.k,
-       playerPoses: SZ.q
+       mobAiStates: ji.m,
+       playerPoses: Pi.o
```

#### 254. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2640-L2652` → after: `L2660-L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2660-L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2660-L2672) · [Before (L2640-L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2640-L2652)

```diff
-     var VZ = ZG(41100),
-       pZ = ZG(41115),
-       fZ = ZG(41143),
-       QZ = ZG(1032),
-       KZ = ZG(41284),
-       hZ = ZG(41292),
-       dZ = ZG(2968),
-       JZ = ZG(39444),
-       rZ = ZG(4842),
-       zZ = ZG(2380);
-     const EZ = zZ.t.KeysDisabled | zZ.t.LookFrozen | zZ.t.ClicksSuppressed,
-       oZ = dZ.i;
-     var XZ = (0, hZ.c)("resumingConn");
+     var Hi = iM(41798),
+       Ji = iM(41819),
+       di = iM(41858),
+       yi = iM(1329),
+       li = iM(41998),
+       Ei = iM(42006),
+       Ui = iM(3324),
+       Gi = iM(40077),
+       Ci = iM(5214),
+       ei = iM(2619);
+     const bi = ei.C.KeysDisabled | ei.C.LookFrozen | ei.C.ClicksSuppressed,
+       wi = Ui.e;
+     var ti = (0, Ei.e)("resumingConn");
```

#### 255. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2659` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2679) · [Before (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2659)

```diff
-         }), this.drops = 0, this.session = new JZ.d({
+         }), this.drops = 0, this.session = new Gi.e({
```

#### 256. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2669` → after: `L2689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2689) · [Before (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2669)

```diff
-             GG.Tm(bG), (0, rZ.j)(EZ, bG ? EZ : 0, "reconnectFreeze")
+             MM.OW(rM), (0, Ci.k)(bi, rM ? bi : 0, "reconnectFreeze")
```

#### 257. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2680` → after: `L2700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2700) · [Before (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2680)

```diff
-         return (0, KZ.b)(this, XZ)[XZ]
+         return (0, li.d)(this, ti)[ti]
```

#### 258. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2695` → after: `L2715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2715) · [Before (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2695)

```diff
-         0 !== GG && (GG === (0, KZ.b)(this, XZ)[XZ] ? ((0, KZ.b)(this, XZ)[XZ] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = GG))
+         0 !== MM && (MM === (0, li.d)(this, ti)[ti] ? ((0, li.d)(this, ti)[ti] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = MM))
```

#### 259. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2698` → after: `L2718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2718) · [Before (L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2698)

```diff
-         this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, KZ.b)(this, XZ)[XZ] = 0, this.session.onConnectionLost(GG)
+         this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, li.d)(this, ti)[ti] = 0, this.session.onConnectionLost(MM)
```

#### 260. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2704` → after: `L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2724) · [Before (L2704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2704)

```diff
-         this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, KZ.b)(this, XZ)[XZ] = 0, this.session.end()
+         this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, li.d)(this, ti)[ti] = 0, this.session.end()
```

#### 261. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2745` → after: `L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2765) · [Before (L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2745)

```diff
-         this.abortAttempt(new gG.n), ZG || this.shell.releaseSeat(GG)
+         this.abortAttempt(new xM.t), iM || this.shell.releaseSeat(MM)
```

#### 262. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2752` → after: `L2772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2772) · [Before (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2752)

```diff
-           (0, KZ.b)(this, XZ)[XZ] = GG.conn, this.session.onResuming()
+           (0, li.d)(this, ti)[ti] = MM.conn, this.session.onResuming()
```

#### 263. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2756-L2764` → after: `L2776-L2784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2776-L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2776-L2784) · [Before (L2756-L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2756-L2764)

```diff
-     var iZ = ZG(39453),
-       CZ = ZG(41299),
-       WZ = ZG(36816),
-       mZ = ZG(36810),
-       IZ = ZG(2138),
-       FZ = ZG(1873),
-       vZ = ZG(4318),
-       aZ = ZG(41122),
-       cZ = ZG(5071);
+     var ui = iM(40079),
+       Ri = iM(42012),
+       Wi = iM(37426),
+       si = iM(37422),
+       Di = iM(2263),
+       ki = iM(2e3),
+       Zi = iM(4654),
+       oi = iM(41833),
+       fi = iM(5456);
```

#### 264. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2771` → after: `L2791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2791) · [Before (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2771)

```diff
-       if (null !== ZG && "" !== ZG) return `game:${ZG}`;
+       if (null !== iM && "" !== iM) return `game:${iM}`;
```

#### 265. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2777` → after: `L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2797) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2777)

```diff
-       if (wG !== IZ.q.CUSTOM) return `${wG}@${SG}`;
+       if (OM !== Di.o.CUSTOM) return `${OM}@${SM}`;
```

#### 266. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2780-L2803` → after: `L2800-L2824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2800-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2800-L2824) · [Before (L2780-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2780-L2803)

```diff
-         for (const [GG, bG] of Object.entries(null !== yG && void 0 !== yG ? yG : {})) LG.push(`${GG}:${bG.length}`);
-       return `${wG}:${(0,FZ.v)(LG.join())}`
-     }
-     var jZ = ZG(4434),
-       PZ = ZG(3230),
-       MZ = ZG(41305),
-       AZ = ZG(636),
-       sZ = ZG(3236),
-       qZ = ZG(80),
-       nZ = ZG(4514),
-       gZ = ZG(29),
-       eZ = ZG(4336),
-       RZ = ZG(41190),
-       TZ = ZG(4458),
-       HZ = ZG(2388),
-       tZ = ZG(1579),
- ... (8 more removed lines; see GitHub link above)
+         for (const [MM, rM] of Object.entries(null !== aM && void 0 !== aM ? aM : {})) jM.push(`${MM}:${rM.length}`);
+       return `${OM}:${(0,ki.x)(jM.join())}`
+     }
+     var Ni = iM(4801),
+       Ai = iM(3657),
+       xi = iM(42017),
+       vi = iM(665),
+       Fi = iM(3666),
+       Bi = iM(83),
+       Xi = iM(3293),
+       Ii = iM(3288),
+       Ki = iM(4882),
+       qi = iM(4670),
+       Ti = iM(41895),
+       Vi = iM(4830),
+       ci = iM(2622),
+ ... (9 more added lines; see GitHub link above)
```

#### 267. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2811` → after: `L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2832) · [Before (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2811)

```diff
-           } = (0, BZ.h)(GG.target);
+           } = (0, jO.g)(MM.target);
```

#### 268. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2820` → after: `L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2841) · [Before (L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2820)

```diff
-       return "touchOnly" !== (0, OZ.d)() && "function" === typeof GG.requestPointerLock
+       return "touchOnly" !== (0, OO.c)() && "function" === typeof MM.requestPointerLock
```

#### 269. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2824` → after: `L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/wasmPlay.js#L2845) · [Before (L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/wasmPlay.js#L2824)

```diff
-       return 0 === GG.button ? GG.altKey ? bw.k["Alt+Left Click"] : bw.k.Mouse1 : 1 === GG.button ? bw.k.Mouse2 : bw.k.Mouse3
+       return 0 === MM.button ? MM.altKey ? PO.n["Alt+Left Click"] : PO.n.Mouse1 : 1 === MM.button ? PO.n.Mouse2 : PO.n.Mouse3
```
