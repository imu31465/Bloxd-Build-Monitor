# Changed — Bundle Modifications Report (Part 124 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `124 / 132` (**439** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 123](part-123.md) · [Part 125 →](part-125.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7)

#### 26. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L282-L283` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L282-L283) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L282-L283)

```diff
-           case Gb.Mc.Crop:
-             if (bb.code === Gb.Kc.Busy) {
+           case Wd.ed.Crop:
+             if (dd.code === Wd.bd.Busy) {
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L293-L298` → after: `L293-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L293-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L293-L298) · [Before (L293-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L293-L298)

```diff
-           case Gb.Mc.ModuleTrap:
-           case Gb.Mc.ModuleLoad:
-           case Gb.Mc.Port:
-             this.moduleEnded(bb.reason === Gb.Mc.ModuleTrap ? Bb.e.coreStopped : Bb.e.cantOpen);
-             break;
-           case Gb.Mc.NotLive:
+           case Wd.ed.ModuleTrap:
+           case Wd.ed.ModuleLoad:
+           case Wd.ed.Port:
+             this.moduleEnded(dd.reason === Wd.ed.ModuleTrap ? pd.e.coreStopped : pd.e.cantOpen);
+             break;
+           case Wd.ed.NotLive:
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L302)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${bb.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${dd.reason})`), this.seekAsked = !1, this.release("seek")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (124 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4)

```diff
-   42038: (bb, ub, hb) => {
+   42547: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L13-L16` → after: `L13-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L13-L16) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L13-L16)

```diff
-     var Bb = hb(40188),
-       Ob = hb(1824),
-       Gb = hb(2987),
-       Ub = hb(2956);
+     var pd = kd(40735),
+       Nd = kd(1942),
+       Wd = kd(3051),
+       Pd = kd(3022);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L19)

```diff
-       (0, Gb.m)((() => {
+       (0, Wd.r)((() => {
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L25)

```diff
-       const hb = (0, Gb.l)();
+       const kd = (0, Wd.n)();
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L35)

```diff
-       return `${hb.p}${bb}${encodeURIComponent(ub)}.png`
+       return `${kd.p}${dd}${encodeURIComponent(Jd)}.png`
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L41-L43` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L41-L43) · [Before (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L41-L43)

```diff
-       return (0, Bb.e)(bb) ? null !== (ub = function(bb) {
-         return Yb(bb, Ub.g.ITEM)
-       }(bb)) && void 0 !== ub ? ub : Sb(hb, bb) : null
+       return (0, pd.b)(dd) ? null !== (Jd = function(dd) {
+         return gd(dd, Pd.f.ITEM)
+       }(dd)) && void 0 !== Jd ? Jd : Cd(kd, dd) : null
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L48)

```diff
-         return hb(42045)(`./${bb}.png`)
+         return kd(42550)(`./${dd}.png`)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L55)

```diff
-       return hb(42564)
+       return kd(43071)
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L62-L63` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L62-L63) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L62-L63)

```diff
-         return Yb(bb, Ub.g.BLOCK)
-       }(bb)) && void 0 !== ub ? ub : Sb(hb, bb)
+         return gd(dd, Pd.f.BLOCK)
+       }(dd)) && void 0 !== Jd ? Jd : Cd(kd, dd)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L68)

```diff
-         return hb(42566)(`./${bb}.png`)
+         return kd(43078)(`./${dd}.png`)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L74)

```diff
-   42045: (bb, ub, hb) => {
+   42550: (dd, Jd, kd) => {
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L76-L171` → after: `L76-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L76-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L76-L171) · [Before (L76-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L76-L171)

```diff
-       "./Air Walk.png": 42053,
-       "./Antlers Bonus.png": 42061,
-       "./Arrow Damage Enchantment.png": 42066,
-       "./Arrow Speed Enchantment.png": 42070,
-       "./Attack Speed Enchantment.png": 42076,
-       "./Blindness.png": 42082,
-       "./Boating.png": 42085,
-       "./Bounciness.png": 42088,
-       "./Brain Rot.png": 42097,
-       "./Break Speed Enchantment.png": 42103,
-       "./Bunny Hop.png": 42111,
-       "./Critical Damage Enchantment.png": 42117,
-       "./Cross.png": 42126,
-       "./Damage Enchantment.png": 42128,
-       "./Damage Reduction.png": 42130,
-       "./Damage.png": 42134,
- ... (80 more removed lines; see GitHub link above)
+       "./Air Walk.png": 42553,
+       "./Antlers Bonus.png": 42562,
+       "./Arrow Damage Enchantment.png": 42566,
+       "./Arrow Speed Enchantment.png": 42571,
+       "./Attack Speed Enchantment.png": 42574,
+       "./Blindness.png": 42577,
+       "./Boating.png": 42585,
+       "./Bounciness.png": 42590,
+       "./Brain Rot.png": 42592,
+       "./Break Speed Enchantment.png": 42594,
+       "./Bunny Hop.png": 42601,
+       "./Critical Damage Enchantment.png": 42607,
+       "./Cross.png": 42616,
+       "./Damage Enchantment.png": 42624,
+       "./Damage Reduction.png": 42629,
+       "./Damage.png": 42632,
+ ... (80 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L188-L190` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L188-L190) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L188-L190)

```diff
-     }, Ob.resolve = Gb, bb.exports = Ob, Ob.id = 42045
-   },
-   42566: (bb, ub, hb) => {
+     }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 42550
+   },
+   43078: (dd, Jd, kd) => {
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L192-L204` → after: `L192-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L192-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L192-L204) · [Before (L192-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L192-L204)

```diff
-       "./arrow.png": 42569,
-       "./bubble.png": 42573,
-       "./critical_hit.png": 42575,
-       "./drift.png": 42577,
-       "./effect_5.png": 42586,
-       "./fishingFishSilhouette.png": 42592,
-       "./generic_2.png": 42599,
-       "./glint.png": 42602,
-       "./heart.png": 42605,
-       "./scary_face.png": 42610,
-       "./soul_0.png": 42619,
-       "./square_particle.png": 42625,
-       "./z-particle.png": 42634
+       "./arrow.png": 43085,
+       "./bubble.png": 43091,
+       "./critical_hit.png": 43096,
+       "./drift.png": 43098,
+       "./effect_5.png": 43101,
+       "./fishingFishSilhouette.png": 43109,
+       "./generic_2.png": 43114,
+       "./glint.png": 43120,
+       "./heart.png": 43129,
+       "./scary_face.png": 43132,
+       "./soul_0.png": 43135,
+       "./square_particle.png": 43138,
+       "./z-particle.png": 43143
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L221-L223` → after: `L221-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L221-L223) · [Before (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L221-L223)

```diff
-     }, Ob.resolve = Gb, bb.exports = Ob, Ob.id = 42566
-   },
-   42053: (bb, ub, hb) => {
+     }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 43078
+   },
+   42553: (dd, Jd, kd) => {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L226)

```diff
-   42061: (bb, ub, hb) => {
+   42562: (dd, Jd, kd) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L229)

```diff
-   42066: (bb, ub, hb) => {
+   42566: (dd, Jd, kd) => {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L232)

```diff
-   42070: (bb, ub, hb) => {
+   42571: (dd, Jd, kd) => {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L235)

```diff
-   42076: (bb, ub, hb) => {
+   42574: (dd, Jd, kd) => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L238)

```diff
-   42082: (bb, ub, hb) => {
+   42577: (dd, Jd, kd) => {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L241)

```diff
-   42085: (bb, ub, hb) => {
+   42585: (dd, Jd, kd) => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L244)

```diff
-   42088: (bb, ub, hb) => {
+   42590: (dd, Jd, kd) => {
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L247)

```diff
-   42097: (bb, ub, hb) => {
+   42592: (dd, Jd, kd) => {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L250)

```diff
-   42103: (bb, ub, hb) => {
+   42594: (dd, Jd, kd) => {
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L253)

```diff
-   42111: (bb, ub, hb) => {
+   42601: (dd, Jd, kd) => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L256)

```diff
-   42117: (bb, ub, hb) => {
+   42607: (dd, Jd, kd) => {
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L259)

```diff
-   42126: (bb, ub, hb) => {
+   42616: (dd, Jd, kd) => {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L262)

```diff
-   42128: (bb, ub, hb) => {
+   42624: (dd, Jd, kd) => {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L265)

```diff
-   42130: (bb, ub, hb) => {
+   42629: (dd, Jd, kd) => {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L268)

```diff
-   42134: (bb, ub, hb) => {
+   42632: (dd, Jd, kd) => {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L271)

```diff
-   42141: (bb, ub, hb) => {
+   42639: (dd, Jd, kd) => {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L274)

```diff
-   42149: (bb, ub, hb) => {
+   42644: (dd, Jd, kd) => {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L277)

```diff
-   42151: (bb, ub, hb) => {
+   42650: (dd, Jd, kd) => {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L280)

```diff
-   42154: (bb, ub, hb) => {
+   42658: (dd, Jd, kd) => {
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L283)

```diff
-   42156: (bb, ub, hb) => {
+   42664: (dd, Jd, kd) => {
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L286)

```diff
-   42158: (bb, ub, hb) => {
+   42672: (dd, Jd, kd) => {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L289)

```diff
-   42163: (bb, ub, hb) => {
+   42677: (dd, Jd, kd) => {
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L292)

```diff
-   42165: (bb, ub, hb) => {
+   42686: (dd, Jd, kd) => {
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L295)

```diff
-   42172: (bb, ub, hb) => {
+   42695: (dd, Jd, kd) => {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L298)

```diff
-   42177: (bb, ub, hb) => {
+   42704: (dd, Jd, kd) => {
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L301)

```diff
-   42180: (bb, ub, hb) => {
+   42709: (dd, Jd, kd) => {
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L304)

```diff
-   42186: (bb, ub, hb) => {
+   42712: (dd, Jd, kd) => {
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L307)

```diff
-   42195: (bb, ub, hb) => {
+   42719: (dd, Jd, kd) => {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L310)

```diff
-   42202: (bb, ub, hb) => {
+   42727: (dd, Jd, kd) => {
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L313` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L313) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L313)

```diff
-   42207: (bb, ub, hb) => {
+   42729: (dd, Jd, kd) => {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L316)

```diff
-   42212: (bb, ub, hb) => {
+   42738: (dd, Jd, kd) => {
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L319)

```diff
-   42217: (bb, ub, hb) => {
+   42741: (dd, Jd, kd) => {
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L322)

```diff
-   42220: (bb, ub, hb) => {
+   42748: (dd, Jd, kd) => {
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L325)

```diff
-   42229: (bb, ub, hb) => {
+   42752: (dd, Jd, kd) => {
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L328)

```diff
-   42231: (bb, ub, hb) => {
+   42757: (dd, Jd, kd) => {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L331` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L331) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L331)

```diff
-   42240: (bb, ub, hb) => {
+   42763: (dd, Jd, kd) => {
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L334)

```diff
-   42246: (bb, ub, hb) => {
+   42772: (dd, Jd, kd) => {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L337)

```diff
-   42249: (bb, ub, hb) => {
+   42775: (dd, Jd, kd) => {
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L340)

```diff
-   42258: (bb, ub, hb) => {
+   42783: (dd, Jd, kd) => {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L343)

```diff
-   42263: (bb, ub, hb) => {
+   42792: (dd, Jd, kd) => {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L346)

```diff
-   42268: (bb, ub, hb) => {
+   42799: (dd, Jd, kd) => {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L349)

```diff
-   42271: (bb, ub, hb) => {
+   42803: (dd, Jd, kd) => {
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L352)

```diff
-   42273: (bb, ub, hb) => {
+   42805: (dd, Jd, kd) => {
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L355)

```diff
-   42279: (bb, ub, hb) => {
+   42810: (dd, Jd, kd) => {
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L358)

```diff
-   42281: (bb, ub, hb) => {
+   42818: (dd, Jd, kd) => {
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L361)

```diff
-   42287: (bb, ub, hb) => {
+   42824: (dd, Jd, kd) => {
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L364)

```diff
-   42292: (bb, ub, hb) => {
+   42829: (dd, Jd, kd) => {
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L367)

```diff
-   42295: (bb, ub, hb) => {
+   42832: (dd, Jd, kd) => {
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L370)

```diff
-   42299: (bb, ub, hb) => {
+   42841: (dd, Jd, kd) => {
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L373)

```diff
-   42304: (bb, ub, hb) => {
+   42845: (dd, Jd, kd) => {
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L376)

```diff
-   42309: (bb, ub, hb) => {
+   42847: (dd, Jd, kd) => {
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L379)

```diff
-   42316: (bb, ub, hb) => {
+   42849: (dd, Jd, kd) => {
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L382` → after: `L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L382) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L382)

```diff
-   42319: (bb, ub, hb) => {
+   42851: (dd, Jd, kd) => {
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L385` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L385) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L385)

```diff
-   42325: (bb, ub, hb) => {
+   42859: (dd, Jd, kd) => {
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L388)

```diff
-   42332: (bb, ub, hb) => {
+   42866: (dd, Jd, kd) => {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L391)

```diff
-   42336: (bb, ub, hb) => {
+   42871: (dd, Jd, kd) => {
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L394)

```diff
-   42343: (bb, ub, hb) => {
+   42879: (dd, Jd, kd) => {
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L397)

```diff
-   42347: (bb, ub, hb) => {
+   42881: (dd, Jd, kd) => {
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L400)

```diff
-   42356: (bb, ub, hb) => {
+   42885: (dd, Jd, kd) => {
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L403` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L403) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L403)

```diff
-   42364: (bb, ub, hb) => {
+   42890: (dd, Jd, kd) => {
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L406)

```diff
-   42368: (bb, ub, hb) => {
+   42896: (dd, Jd, kd) => {
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L409)

```diff
-   42370: (bb, ub, hb) => {
+   42901: (dd, Jd, kd) => {
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L412)

```diff
-   42379: (bb, ub, hb) => {
+   42908: (dd, Jd, kd) => {
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L415)

```diff
-   42388: (bb, ub, hb) => {
+   42912: (dd, Jd, kd) => {
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L418)

```diff
-   42395: (bb, ub, hb) => {
+   42919: (dd, Jd, kd) => {
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L421)

```diff
-   42402: (bb, ub, hb) => {
+   42922: (dd, Jd, kd) => {
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L424)

```diff
-   42405: (bb, ub, hb) => {
+   42928: (dd, Jd, kd) => {
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L427)

```diff
-   42410: (bb, ub, hb) => {
+   42934: (dd, Jd, kd) => {
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L430)

```diff
-   42417: (bb, ub, hb) => {
+   42943: (dd, Jd, kd) => {
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L433)

```diff
-   42422: (bb, ub, hb) => {
+   42945: (dd, Jd, kd) => {
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L436)

```diff
-   42426: (bb, ub, hb) => {
+   42952: (dd, Jd, kd) => {
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L439)

```diff
-   42431: (bb, ub, hb) => {
+   42958: (dd, Jd, kd) => {
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L442)

```diff
-   42439: (bb, ub, hb) => {
+   42962: (dd, Jd, kd) => {
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L445)

```diff
-   42441: (bb, ub, hb) => {
+   42965: (dd, Jd, kd) => {
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L448)

```diff
-   42450: (bb, ub, hb) => {
+   42972: (dd, Jd, kd) => {
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L451)

```diff
-   42458: (bb, ub, hb) => {
+   42981: (dd, Jd, kd) => {
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L454)

```diff
-   42462: (bb, ub, hb) => {
+   42987: (dd, Jd, kd) => {
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L457` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L457) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L457)

```diff
-   42467: (bb, ub, hb) => {
+   42990: (dd, Jd, kd) => {
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L460` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L460) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L460)

```diff
-   42474: (bb, ub, hb) => {
+   42994: (dd, Jd, kd) => {
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L463)

```diff
-   42480: (bb, ub, hb) => {
+   43e3: (dd, Jd, kd) => {
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L466)

```diff
-   42485: (bb, ub, hb) => {
+   43007: (dd, Jd, kd) => {
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L469)

```diff
-   42489: (bb, ub, hb) => {
+   43011: (dd, Jd, kd) => {
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L472)

```diff
-   42498: (bb, ub, hb) => {
+   43015: (dd, Jd, kd) => {
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L475)

```diff
-   42501: (bb, ub, hb) => {
+   43020: (dd, Jd, kd) => {
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L478)

```diff
-   42503: (bb, ub, hb) => {
+   43023: (dd, Jd, kd) => {
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L481)

```diff
-   42511: (bb, ub, hb) => {
+   43026: (dd, Jd, kd) => {
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L484)

```diff
-   42515: (bb, ub, hb) => {
+   43028: (dd, Jd, kd) => {
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L487)

```diff
-   42520: (bb, ub, hb) => {
+   43033: (dd, Jd, kd) => {
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L490)

```diff
-   42522: (bb, ub, hb) => {
+   43036: (dd, Jd, kd) => {
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L493` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L493) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L493)

```diff
-   42524: (bb, ub, hb) => {
+   43044: (dd, Jd, kd) => {
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L496)

```diff
-   42529: (bb, ub, hb) => {
+   43046: (dd, Jd, kd) => {
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L499)

```diff
-   42538: (bb, ub, hb) => {
+   43053: (dd, Jd, kd) => {
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L502)

```diff
-   42547: (bb, ub, hb) => {
+   43056: (dd, Jd, kd) => {
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L505)

```diff
-   42556: (bb, ub, hb) => {
+   43065: (dd, Jd, kd) => {
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L508)

```diff
-   42560: (bb, ub, hb) => {
+   43069: (dd, Jd, kd) => {
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L511` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L511) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L511)

```diff
-   42569: (bb, ub, hb) => {
+   43085: (dd, Jd, kd) => {
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L514` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L514) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L514)

```diff
-   42573: (bb, ub, hb) => {
+   43091: (dd, Jd, kd) => {
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L517)

```diff
-   42575: (bb, ub, hb) => {
+   43096: (dd, Jd, kd) => {
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L520)

```diff
-   42577: (bb, ub, hb) => {
+   43098: (dd, Jd, kd) => {
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L523` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L523) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L523)

```diff
-   42586: (bb, ub, hb) => {
+   43101: (dd, Jd, kd) => {
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L526` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L526) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L526)

```diff
-   42592: (bb, ub, hb) => {
+   43109: (dd, Jd, kd) => {
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L529)

```diff
-   42599: (bb, ub, hb) => {
+   43114: (dd, Jd, kd) => {
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L532)

```diff
-   42602: (bb, ub, hb) => {
+   43120: (dd, Jd, kd) => {
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L535)

```diff
-   42605: (bb, ub, hb) => {
+   43129: (dd, Jd, kd) => {
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L538)

```diff
-   42610: (bb, ub, hb) => {
+   43132: (dd, Jd, kd) => {
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L541)

```diff
-   42619: (bb, ub, hb) => {
+   43135: (dd, Jd, kd) => {
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L544` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L544) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L544)

```diff
-   42625: (bb, ub, hb) => {
+   43138: (dd, Jd, kd) => {
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L547)

```diff
-   42634: (bb, ub, hb) => {
+   43143: (dd, Jd, kd) => {
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L550)

```diff
-   42564: (bb, ub, hb) => {
+   43071: (dd, Jd, kd) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db)

#### 1. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1)

```diff
- /*! For license information please see halsg.wasmMatchmaking.7d7fbcce.chunk.js.LICENSE.txt */
+ /*! For license information please see x17cru.wasmMatchmaking.941cd103.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L5)

```diff
-   36155: (bb, ub) => {
+   36706: (dd, Jd) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L13)

```diff
-       return (hb = Bb[Gb.toLowerCase()]) ? hb : (hb = Ob[Gb.toLowerCase()]) || (1 === Gb.length ? Gb.charCodeAt(0) : void 0)
+       return (kd = pd[Wd.toLowerCase()]) ? kd : (kd = Nd[Wd.toLowerCase()]) || (1 === Wd.length ? Wd.charCodeAt(0) : void 0)
```

#### 4. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L102)

```diff
-   36322: (bb, ub, hb) => {
+   36870: (dd, Jd, kd) => {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L104-L106` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L104-L106) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L104-L106)

```diff
-       c: () => Ub
-     });
-     var Bb = hb(49);
+       e: () => Pd
+     });
+     var pd = kd(56);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L128)

```diff
-   36198: bb => {
+   36760: dd => {
```

#### 7. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L243)

```diff
-   6394: (bb, ub, hb) => {
+   6534: (dd, Jd, kd) => {
```

#### 8. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L245)

```diff
-       d: () => Ob,
+       c: () => Nd,
```

#### 9. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L248)

```diff
-     var Bb = hb(29);
+     var pd = kd(33);
```

#### 10. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L253-L256` → after: `L253-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L253-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L253-L256) · [Before (L253-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L253-L256)

```diff
-       return null !== (bb = await Bb.f.getItem(Ob, ub)) && void 0 !== bb ? bb : null
-     }
-   },
-   8633: (bb, ub, hb) => {
+       return null !== (dd = await pd.f.getItem(Nd, Jd)) && void 0 !== dd ? dd : null
+     }
+   },
+   8835: (dd, Jd, kd) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L258-L259` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L258-L259) · [Before (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L258-L259)

```diff
-       c: () => Gb,
-       g: () => Ob
+       d: () => Wd,
+       f: () => Nd
```

#### 12. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L271)

```diff
-   36057: (bb, ub, hb) => {
+   36615: (dd, Jd, kd) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L273)

```diff
-       InGameUi: () => Kb.d,
+       InGameUi: () => Gd.b,
```

#### 14. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L280-L286` → after: `L280-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L280-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L280-L286) · [Before (L280-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L280-L286)

```diff
-     var Bb = hb(1141),
-       Ob = hb(148),
-       Gb = hb(13),
-       Ub = hb(36063),
-       Lb = hb(36069),
-       Yb = hb(1836),
-       Sb = hb(36104);
+     var pd = kd(1266),
+       Nd = kd(149),
+       Wd = kd(22),
+       Pd = kd(36618),
+       Zd = kd(36623),
+       gd = kd(1955),
+       Cd = kd(36657);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L292-L311` → after: `L292-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L292-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L292-L311) · [Before (L292-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L292-L311)

```diff
-     var wb = hb(1218),
-       Zb = hb(1144),
-       Xb = hb(651),
-       pb = hb(8633);
-     var ob = hb(8631),
-       Ab = hb(3364),
-       lb = hb(1694);
-     var Kb = hb(36116),
-       Wb = hb(36664);
- 
-     function Cb() {
-       return Promise.all([hb.e(282), hb.e(388)]).then((() => hb(40734)))
-     }
- 
-     function db() {
-       return hb.e(283).then((() => hb(40739)))
- ... (4 more removed lines; see GitHub link above)
+     var ld = kd(1348),
+       Qd = kd(1273),
+       Ld = kd(686),
+       Od = kd(8835);
+     var ed = kd(8832),
+       Rd = kd(3451),
+       Id = kd(1812);
+     var Gd = kd(36667),
+       vd = kd(37167);
+ 
+     function xd() {
+       return Promise.all([kd.e(282), kd.e(388)]).then((() => kd(41247)))
+     }
+ 
+     function qd() {
+       return kd.e(283).then((() => kd(41253)))
+ ... (4 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L314)

```diff
-         (0, Sb.c)(bb, ab)
+         (0, Cd.d)(dd, Kd)
```

#### 17. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L318-L323` → after: `L318-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L318-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L318-L323) · [Before (L318-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L318-L323)

```diff
-         return !0 !== (null === bb || void 0 === bb ? void 0 : bb.saveData) && !/2g$/.test(null !== (ub = null === bb || void 0 === bb ? void 0 : bb.effectiveType) && void 0 !== ub ? ub : "")
-       }(navigator.connection) && (0, Xb.b)((() => {
-         (0, pb.c)() || Promise.all([hb.e(75), hb.e(133), hb.e(88), hb.e(56)]).then((() => hb(40192))).then((bb => {
-           (0, pb.c)() || bb.startLoadAheadOfJoin({
-             joinStarted: pb.c,
-             language: Zb.h.get().getCurrentLanguageCode()
+         return !0 !== (null === dd || void 0 === dd ? void 0 : dd.saveData) && !/2g$/.test(null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.effectiveType) && void 0 !== Jd ? Jd : "")
+       }(navigator.connection) && (0, Ld.c)((() => {
+         (0, Od.d)() || Promise.all([kd.e(75), kd.e(133), kd.e(88), kd.e(56)]).then((() => kd(40737))).then((dd => {
+           (0, Od.d)() || dd.startLoadAheadOfJoin({
+             joinStarted: Od.d,
+             language: Qd.c.get().getCurrentLanguageCode()
```

#### 18. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L331` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L331) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L331)

```diff
-       if ((0, lb.e)(ub.state.location.pathname)) return void(0, ob.c)().catch((() => {}));
+       if ((0, Id.b)(Jd.state.location.pathname)) return void(0, ed.b)().catch((() => {}));
```

#### 19. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L333)

```diff
-         (0, lb.e)(Bb.location.pathname) && (hb(), (0, Ab.e)().then((() => {
+         (0, Id.b)(pd.location.pathname) && (kd(), (0, Rd.d)().then((() => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L337)

```diff
-     }(jb), (0, Ub.b)();
+     }(sd), (0, Pd.e)();
```

#### 21. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L348)

```diff
-         Sb = await (0, ob.c)()
+         Cd = await (0, ed.b)()
```

#### 22. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L350)

```diff
-         return console.error("The wasm client did not load:", ab), (0, wb.l)({
+         return console.error("The wasm client did not load:", Kd), (0, ld.r)({
```

#### 23. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L352)

```diff
-         }), Bb.b.errorWithCode(String(ab), Ob.k.CONNECT_TO_GAME_SERVER, {
+         }), pd.b.errorWithCode(String(Kd), Nd.n.CONNECT_TO_GAME_SERVER, {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L355)

```diff
-           Lu: ub.aborted
+           CJ: Jd.aborted
```

#### 25. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L367-L370` → after: `L367-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L367-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L367-L370) · [Before (L367-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L367-L370)

```diff
-       return (0, ob.c)().catch((() => {})), nb(...arguments)
-     }
-   },
-   8631: (bb, ub, hb) => {
+       return (0, ed.b)().catch((() => {})), ad(...arguments)
+     }
+   },
+   8832: (dd, Jd, kd) => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L372-L380` → after: `L372-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L372-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L372-L380) · [Before (L372-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L372-L380)

```diff
-       c: () => ab,
-       g: () => Hb
-     });
-     var Bb = hb(2941),
-       Ob = hb(2161),
-       Gb = hb(2987),
-       Ub = hb(4413),
-       Lb = hb(3291),
-       Yb = hb(8633);
+       b: () => Kd,
+       f: () => od
+     });
+     var pd = kd(3011),
+       Nd = kd(2245),
+       Wd = kd(3051),
+       Pd = kd(4507),
+       Zd = kd(3360),
+       gd = kd(8835);
```

#### 27. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L384)

```diff
-       return Ub.c.cancelDownloadForJoin(), (0, Lb.e)(), (0, Ob.h)(), (0, Yb.g)(), (0, Gb.i)(), Promise.all([hb.e(70), hb.e(73), hb.e(72), hb.e(71), hb.e(84), hb.e(261), hb.e(200), hb.e(218), hb.e(239), hb.e(213), hb.e(46)]).then((() => hb(40127))).catch((() => {})), Promise.all([ … [truncated]
+       return Pd.b.cancelDownloadForJoin(), (0, Zd.e)(), (0, Nd.e)(), (0, gd.f)(), (0, Wd.i)(), Promise.all([kd.e(70), kd.e(73), kd.e(72), kd.e(71), kd.e(84), kd.e(261), kd.e(200), kd.e(218), kd.e(239), kd.e(213), kd.e(46)]).then((() => kd(40663))).catch((() => {})), Promise.all([ … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L389-L390` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L389-L390) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L389-L390)

```diff
-       }), (() => {})), Sb ??= Promise.all([hb.e(72), hb.e(75), hb.e(130), hb.e(74), hb.e(133), hb.e(263), hb.e(187), hb.e(88), hb.e(87), hb.e(86), hb.e(213), hb.e(61)]).then((() => hb(40288))).then((bb => (bb.startWasmPlay(), bb.followPageUiPack((bb => {
-         Bb.b.showGamePack(bb)
+       }), (() => {})), Cd ??= Promise.all([kd.e(72), kd.e(75), kd.e(130), kd.e(74), kd.e(133), kd.e(263), kd.e(187), kd.e(88), kd.e(87), kd.e(86), kd.e(213), kd.e(61)]).then((() => kd(40851))).then((dd => (dd.startWasmPlay(), dd.followPageUiPack((dd => {
+         pd.d.showGamePack(dd)
```

#### 29. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L397)

```diff
-       return Promise.all([hb.e(72), hb.e(75), hb.e(130), hb.e(74), hb.e(133), hb.e(263), hb.e(187), hb.e(88), hb.e(87), hb.e(86), hb.e(213), hb.e(61)]).then((() => hb(40288))).then((bb => {
+       return Promise.all([kd.e(72), kd.e(75), kd.e(130), kd.e(74), kd.e(133), kd.e(263), kd.e(187), kd.e(88), kd.e(87), kd.e(86), kd.e(213), kd.e(61)]).then((() => kd(40851))).then((dd => {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L402` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L402) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L402)

```diff
-   9280: (bb, ub, hb) => {
+   9422: (dd, Jd, kd) => {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L404-L407` → after: `L404-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L404-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L404-L407) · [Before (L404-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L404-L407)

```diff
-       e: () => Ob,
-       g: () => Gb
-     });
-     var Bb = hb(9235);
+       d: () => Nd,
+       h: () => Wd
+     });
+     var pd = kd(9383);
```

#### 32. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L409)

```diff
-       Gb = Object.freeze(new Bb.d(Ob, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+       Wd = Object.freeze(new pd.f(Nd, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (967 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 1. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4)

```diff
-   39237: (bb, ub, hb) => {
+   39734: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6-L7)

```diff
-       d: () => Bb,
-       g: () => Ob
+       c: () => pd,
+       f: () => Nd
```

#### 3. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L12)

```diff
-   38722: (bb, ub, hb) => {
+   39246: (dd, Jd, kd) => {
```

#### 4. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L15-L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L15-L16)

```diff
-       i: () => ob,
-       m: () => Xb
+       h: () => Ld
```

#### 5. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L18)

```diff
-     var Bb = hb(2633);
+     var pd = kd(2704);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L25)

```diff
-         this.width = bb, this.LH = ub, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(bb * ub)
+         this.width = dd, this.oo = Jd, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(dd * Jd)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L31)

```diff
-         return this.next = (this.next + 1) % this.LH, this.size = Math.min(this.size + 1, this.LH), hb
+         return this.next = (this.next + 1) % this.oo, this.size = Math.min(this.size + 1, this.oo), kd
```

#### 8. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L35)

```diff
-           ub = (this.next - this.size + this.LH) % this.LH;
+           Jd = (this.next - this.size + this.oo) % this.oo;
```

#### 9. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L37)

```diff
-           const Bb = (ub + hb) % this.LH * this.width;
+           const pd = (Jd + kd) % this.oo * this.width;
```

#### 10. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L53) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L53)

```diff
-         this.frames = 0, this.looked = 0, this.idle = 0, this.qE = 0, this.pastLimit = 0, this.lockSkips = 0, this.mp = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+         this.frames = 0, this.looked = 0, this.idle = 0, this.lE = 0, this.pastLimit = 0, this.lockSkips = 0, this.rO = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L63)

```diff
-             case Ob:
+             case Nd:
```

#### 12. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L65-L68` → after: `L65-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L65-L68) · [Before (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L65-L68)

```diff
-             case Lb:
-               return void Kb.mp++;
-             case Ub:
-               return Kb.lockSkips++, void(0 === Hb && 0 === wb || bb.outlier(`lock skip dropped raw (${Sb(Hb)}, ${Sb(wb)}) at ${ab(Bb)} ms`))
+             case Zd:
+               return void Gd.rO++;
+             case Pd:
+               return Gd.lockSkips++, void(0 === od && 0 === ld || dd.outlier(`lock skip dropped raw (${Cd(od)}, ${Cd(ld)}) at ${Kd(pd)} ms`))
```

#### 13. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L72-L73` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L72-L73) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L72-L73)

```diff
-             Cb = `raw (${Sb(Hb)}, ${Sb(wb)}) over ${ab(Yb)} ms, limit ${Sb(lb)}, filter v (${ob.toFixed(3)}, ${Ab.toFixed(3)}) px/ms, at ${ab(Bb)} ms`;
-           pb === Gb ? (Kb.qE++, bb.outlier(`spike put right: ${Cb} -> turned (${Sb(Zb)}, ${Sb(Xb)})`)) : Wb ? (Kb.pastLimit++, bb.outlier(`kept past limit: ${Cb}`)) : Yb > 50 && (Kb.longFrames++, bb.outlier(`long frame: ${Cb}, turned in full`))
+             xd = `raw (${Cd(od)}, ${Cd(ld)}) over ${Kd(gd)} ms, limit ${Cd(Id)}, filter v (${ed.toFixed(3)}, ${Rd.toFixed(3)}) px/ms, at ${Kd(pd)} ms`;
+           Od === Wd ? (Gd.lE++, dd.outlier(`spike put right: ${xd} -> turned (${Cd(Qd)}, ${Cd(Ld)})`)) : vd ? (Gd.pastLimit++, dd.outlier(`kept past limit: ${xd}`)) : gd > 50 && (Gd.longFrames++, dd.outlier(`long frame: ${xd}, turned in full`))
```

#### 14. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L85)

```diff
-           Ub[0] = bb.timeStamp, Ub[1] = hb, Ub[2] = Bb, Ub[3] = Gb ? 1 : 0, this.events.push(Ub), Ob >= 200 && (ub.bigEvents++, this.eventOutlier(`big mousemove (${hb}, ${Bb}) at ${ab(bb.timeStamp)} ms, lock ${Gb?"MS":"free"}`))
+           Pd[0] = dd.timeStamp, Pd[1] = kd, Pd[2] = pd, Pd[3] = Wd ? 1 : 0, this.events.push(Pd), Nd >= 200 && (Jd.bigEvents++, this.eventOutlier(`big mousemove (${kd}, ${pd}) at ${Kd(dd.timeStamp)} ms, lock ${Wd?"EC":"free"}`))
```

#### 15. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L88)

```diff
-           (0, Bb.l)("look", `pointer lock ${bb?`gained (${bb.tagName.toLowerCase()})`:"lost"} at ${ab(performance.now())} ms`)
+           (0, pd.h)("look", `pointer lock ${dd?`gained (${dd.tagName.toLowerCase()})`:"lost"} at ${Kd(performance.now())} ms`)
```

#### 16. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L90)

```diff
-           (0, Bb.l)("look", `pointer lock request failed at ${ab(performance.now())} ms`)
+           (0, pd.h)("look", `pointer lock request failed at ${Kd(performance.now())} ms`)
```

#### 17. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L92)

```diff
-           (0, Bb.l)("look", `page ${document.visibilityState} at ${ab(performance.now())} ms`)
+           (0, pd.h)("look", `page ${document.visibilityState} at ${Kd(performance.now())} ms`)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L96)

```diff
-           if (this.tally = new Hb, 0 === bb.events && 0 === bb.raw[0] && 0 === bb.raw[1] && 0 === bb.lockSkips && 0 === bb.qE && 0 === bb.dropped) return;
+           if (this.tally = new od, 0 === dd.events && 0 === dd.raw[0] && 0 === dd.raw[1] && 0 === dd.lockSkips && 0 === dd.lE && 0 === dd.dropped) return;
```

#### 19. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L98-L99)

```diff
-             hb = [`${bb.frames} frames (${bb.looked} looked, ${bb.idle} idle${"wasm"===this.client?`, ${bb.mp} carried`:""})`, `dt avg ${ab(ub)} min ${ab(bb.dtMin)} max ${ab(bb.dtMax)}, ${bb.longFrames} long`, `${bb.events} mousemoves (max ${Sb(bb.eventMax)} px, ${bb.bigEvents} b … [truncated]
-           bb.dropped > 0 && hb.push(`${bb.dropped} doubled spike copies dropped`), bb.lost > 0 && hb.push(`${bb.lost} records lost`), bb.suppressed > 0 && hb.push(`${bb.suppressed} outlier lines not shown`), (0, Bb.l)("look", `1s: ${hb.join("; ")}`)
+             kd = [`${dd.frames} frames (${dd.looked} looked, ${dd.idle} idle${"wasm"===this.client?`, ${dd.rO} carried`:""})`, `dt avg ${Kd(Jd)} min ${Kd(dd.dtMin)} max ${Kd(dd.dtMax)}, ${dd.longFrames} long`, `${dd.events} mousemoves (max ${Cd(dd.eventMax)} px, ${dd.bigEvents} b … [truncated]
+           dd.dropped > 0 && kd.push(`${dd.dropped} doubled spike copies dropped`), dd.lost > 0 && kd.push(`${dd.lost} records lost`), dd.suppressed > 0 && kd.push(`${dd.suppressed} outlier lines not shown`), (0, pd.h)("look", `1s: ${kd.join("; ")}`)
```

#### 20. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L107)

```diff
-         (0, Bb.l)("look", `start: ${bb} client, dpr ${window.devicePixelRatio}, screen ${hb.width}x${hb.height}, pointer lock ${document.pointerLockElement?"MS":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
+         (0, pd.h)("look", `start: ${dd} client, dpr ${window.devicePixelRatio}, screen ${kd.width}x${kd.height}, pointer lock ${document.pointerLockElement?"EC":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L110)

```diff
-         }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Bb.i)("look", this.dump))
+         }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, pd.g)("look", this.dump))
```

#### 22. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L114)

```diff
-         ub.outliers >= 20 ? ub.suppressed++ : (ub.outliers++, (0, Bb.l)("look", bb))
+         Jd.outliers >= 20 ? Jd.suppressed++ : (Jd.outliers++, (0, pd.h)("look", dd))
```

#### 23. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L118` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L118) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L118)

```diff
-         ub.eventLines >= 10 ? ub.suppressed++ : (ub.eventLines++, (0, Bb.l)("look", bb))
+         Jd.eventLines >= 10 ? Jd.suppressed++ : (Jd.eventLines++, (0, pd.h)("look", dd))
```

#### 24. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L152)

```diff
-   8975: (bb, ub, hb) => {
+   9125: (dd, Jd, kd) => {
```

#### 25. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L154)

```diff
-       e: () => Bb
+       b: () => pd
```

#### 26. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L158)

```diff
-   9124: (bb, ub, hb) => {
+   9274: (dd, Jd, kd) => {
```

#### 27. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L162` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L161-L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L162)

```diff
-       g: () => ab
+       d: () => Nd,
+       e: () => Kd
```

#### 28. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L164)

```diff
-     var Bb = hb(1463);
+     var pd = kd(1598);
```

#### 29. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L170)

```diff
-         yaw: Ub.store.yaw + (null !== (ub = Bb.e[bb].previewYaw) && void 0 !== ub ? ub : 0)
+         yaw: Pd.store.yaw + (null !== (Jd = pd.c[dd].previewYaw) && void 0 !== Jd ? Jd : 0)
```

#### 30. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L291)

```diff
-   38868: (bb, ub, hb) => {
+   39385: (dd, Jd, kd) => {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L294)

```diff
-       g: () => wb
+       f: () => ld
```

#### 32. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L296-L303` → after: `L296-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L296-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L296-L303) · [Before (L296-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L296-L303)

```diff
-     var Bb = hb(148),
-       Ob = hb(174),
-       Gb = hb(1387),
-       Ub = hb(2736),
-       Lb = hb(1398),
-       Yb = hb(36083),
-       Sb = hb(612),
-       ab = hb(38833);
+     var pd = kd(149),
+       Nd = kd(183),
+       Wd = kd(1509),
+       Pd = kd(2812),
+       Zd = kd(1520),
+       gd = kd(36640),
+       Cd = kd(645),
+       Kd = kd(39347);
```

#### 33. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L306)

```diff
-       (0, Ub.i)("matchmake_failed", bb, Bb.k[Bb.k.SHADER_PACK])
+       (0, Pd.f)("matchmake_failed", dd, pd.n[pd.n.SHADER_PACK])
```

#### 34. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L311-L312` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L311-L312) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L311-L312)

```diff
-         Ub = (0, Yb.b)();
-       Bb && null !== Ub && await Lb.e.reportShaderPackSession(bb, {
+         Pd = (0, gd.c)();
+       pd && null !== Pd && await Zd.d.reportShaderPackSession(dd, {
```

#### 35. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L315)

```diff
-         game: (0, Gb.d)(ub, Ob.r, "other"),
+         game: (0, Wd.e)(Jd, Nd.B, "other"),
```

#### 36. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L317)

```diff
-         visitSessionId: (0, Sb.b)()
+         visitSessionId: (0, Cd.d)()
```

#### 37. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L321)

```diff
-   38672: (bb, ub, hb) => {
+   39203: (dd, Jd, kd) => {
```

#### 38. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L323)

```diff
-       e: () => Lb
+       d: () => Zd
```

#### 39. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L325-L327` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L325-L327) · [Before (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L325-L327)

```diff
-     var Bb = hb(16),
-       Ob = hb(1184),
-       Gb = hb(3256);
+     var pd = kd(29),
+       Nd = kd(1307),
+       Wd = kd(3308);
```

#### 40. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L335)

```diff
-         }, this.controller = new Gb.d((ub => bb.reconnect(ub)), {
+         }, this.controller = new Wd.b((Jd => dd.reconnect(Jd)), {
```

#### 41. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L378)

```diff
-         hb && !this.frozen ? (0, Ob.l)(Ub) : !hb && this.frozen && (0, Ob.j)(Ub), this.frozen = hb, this.setListening("connected" !== bb), Bb.i.vp(Gb.k, hb ? "frozen" : bb)
+         kd && !this.frozen ? (0, Nd.p)(Pd) : !kd && this.frozen && (0, Nd.o)(Pd), this.frozen = kd, this.setListening("connected" !== dd), pd.j.nO(Wd.i, kd ? "frozen" : dd)
```

#### 42. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L385` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L385) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L385)

```diff
-   38679: (bb, ub, hb) => {
+   39206: (dd, Jd, kd) => {
```

#### 43. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L387` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L387) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L387)

```diff
-       d: () => Bb
+       b: () => pd
```

#### 44. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L408)

```diff
-   9016: (bb, ub, hb) => {
+   9169: (dd, Jd, kd) => {
```

#### 45. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L410)

```diff
-       b: () => Gb
+       d: () => Wd
```

#### 46. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L412)

```diff
-     var Bb = hb(981);
+     var pd = kd(1078);
```

#### 47. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L416)

```diff
-       return null !== (bb = null === (ub = screen.orientation) || void 0 === ub ? void 0 : ub.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
+       return null !== (dd = null === (Jd = screen.orientation) || void 0 === Jd ? void 0 : Jd.type) && void 0 !== dd ? dd : innerWidth > innerHeight ? "landscape" : "portrait"
```

#### 48. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L429)

```diff
-           this.holding && (0, Bb.cX)(new Error("Game view size held for 60 s"))
+           this.holding && (0, pd.ZO)(new Error("Game view size held for 60 s"))
```

#### 49. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L456)

```diff
-   38856: (bb, ub, hb) => {
+   39376: (dd, Jd, kd) => {
```

#### 50. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L458)

```diff
-       b: () => Ob
+       e: () => Nd
```

#### 51. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L469)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => hb(1622))), Promise.resolve().then((() => hb(1249)))]);
+           }] = await Promise.all([Promise.resolve().then((() => kd(1753))), Promise.resolve().then((() => kd(1371)))]);
```

#### 52. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L485` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L485) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L485)

```diff
-   38692: (bb, ub, hb) => {
+   39220: (dd, Jd, kd) => {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L487)

```diff
-       d: () => Sb,
+       e: () => Cd,
```

#### 54. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L490-L495` → after: `L490-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L490-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L490-L495) · [Before (L490-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L490-L495)

```diff
-     var Bb = hb(1611),
-       Ob = hb(191),
-       Gb = hb(1593),
-       Ub = hb(1667),
-       Lb = hb(1103),
-       Yb = hb(1038);
+     var pd = kd(1743),
+       Nd = kd(193),
+       Wd = kd(1726),
+       Pd = kd(1794),
+       Zd = kd(1220),
+       gd = kd(1147);
```

#### 55. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L498)

```diff
-         return "object" === typeof bb && null !== bb && bb.code === Ob.d.VpnIp.code
+         return "object" === typeof dd && null !== dd && dd.code === Nd.e.VpnIp.code
```

#### 56. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L505)

```diff
-           } = await (0, Ub.d)(), {
+           } = await (0, Pd.b)(), {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L507)

```diff
-           } = await (0, Yb.postJsonWithMetricsCookiesAndJsonResponse)(`${Lb.clientSideServerUrls.indexUrl}/index/app-attestation`, {
+           } = await (0, gd.postJsonWithMetricsCookiesAndJsonResponse)(`${Zd.clientSideServerUrls.indexUrl}/index/app-attestation`, {
```

#### 58. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L514` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L514) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L514)

```diff
-           return ub instanceof Bb.b && "failed" === ub.code ? (console.warn("The app couldn't get an App Check token:", ub), bb.markAppAttestationTried()) : console.error("Failed to attest the app:", ub), !1
+           return Jd instanceof pd.c && "failed" === Jd.code ? (console.warn("The app couldn't get an App Check token:", Jd), dd.markAppAttestationTried()) : console.error("Failed to attest the app:", Jd), !1
```

#### 59. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L527)

```diff
-   40474: (bb, ub, hb) => {
+   41042: (dd, Jd, kd) => {
```

#### 60. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L531` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L531) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L531)

```diff
-     var Bb = hb(1636);
+     var pd = kd(1769);
```

#### 61. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L584)

```diff
-         (0, Bb.e)(Ob.blob, `bloxd-screenshot-${Ob.width}x${Ob.height}-${Date.now()}.png`)
+         (0, pd.d)(Nd.blob, `bloxd-screenshot-${Nd.width}x${Nd.height}-${Date.now()}.png`)
```

#### 62. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L590)

```diff
-   39241: (bb, ub, hb) => {
+   39743: (dd, Jd, kd) => {
```

#### 63. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L592)

```diff
-       c: () => Sb
+       e: () => Cd
```

#### 64. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L594-L599` → after: `L594-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L594-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L594-L599) · [Before (L594-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L594-L599)

```diff
-     var Bb = hb(1593),
-       Ob = hb(86),
-       Gb = hb(115),
-       Ub = hb(36051),
-       Lb = hb(604),
-       Yb = hb(1613);
+     var pd = kd(1726),
+       Nd = kd(95),
+       Wd = kd(126),
+       Pd = kd(36608),
+       Zd = kd(632),
+       gd = kd(1751);
```

#### 65. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L607-L610` → after: `L607-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L607-L610) · [Before (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L607-L610)

```diff
-         decodedAudioMiB: null === Hb ? null : (0, Lb.I)(Hb.bytes),
-         songsDecoded: null !== (ub = null === Hb || void 0 === Hb ? void 0 : Hb.songsDecoded) && void 0 !== ub ? ub : null,
-         sheetsDecoded: null !== (hb = null === Hb || void 0 === Hb ? void 0 : Hb.sheetsDecoded) && void 0 !== hb ? hb : null,
-         siteUsed: Gb.s,
+         decodedAudioMiB: null === od ? null : (0, Zd.K)(od.bytes),
+         songsDecoded: null !== (Jd = null === od || void 0 === od ? void 0 : od.songsDecoded) && void 0 !== Jd ? Jd : null,
+         sheetsDecoded: null !== (kd = null === od || void 0 === od ? void 0 : od.sheetsDecoded) && void 0 !== kd ? kd : null,
+         siteUsed: Wd.t,
```

#### 66. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L618-L619` → after: `L618-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L618-L619) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L618-L619)

```diff
-       if ((0, Yb.c)()) return 0;
-       const bb = (0, Yb.b)();
+       if ((0, gd.h)()) return 0;
+       const dd = (0, gd.e)();
```

#### 67. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L621)

```diff
-     }(0, Yb.j)(Lb.H)
+     }(0, gd.m)(Zd.G)
```

#### 68. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L623)

```diff
-   36051: (bb, ub, hb) => {
+   36608: (dd, Jd, kd) => {
```

#### 69. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L626` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L626) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L626)

```diff
-       f: () => Ob
+       e: () => Nd
```

#### 70. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L638)

```diff
-   38688: (bb, ub, hb) => {
+   39215: (dd, Jd, kd) => {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L643-L646` → after: `L643-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L643-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L643-L646) · [Before (L643-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L643-L646)

```diff
-     var Bb = hb(191),
-       Ob = hb(1709),
-       Gb = hb(1713),
-       Ub = hb(8626);
+     var pd = kd(193),
+       Nd = kd(1822),
+       Wd = kd(1827),
+       Pd = kd(8825);
```

#### 72. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L655-L656` → after: `L655-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L655-L656) · [Before (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L655-L656)

```diff
-       } = bb, Ob = Bb.d.duplicateLobbyNameError;
-       return (ub === Ob.code || ub === Yb) && (hb === Ob.text || hb === Ob.text + Bb.i)
+       } = dd, Nd = pd.e.duplicateLobbyNameError;
+       return (Jd === Nd.code || Jd === gd) && (kd === Nd.text || kd === Nd.text + pd.k)
```

#### 73. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L659)

```diff
-       let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob.b;
+       let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd.e;
```

#### 74. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L662)

```diff
-         (0, Gb.r)(ub);
+         (0, Wd.j)(Jd);
```

#### 75. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L671` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L671) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L671)

```diff
-     const Hb = new Set([Bb.d.duplicateLobbyNameError.code, Bb.d.lobbyCantBeCreated.code, Bb.d.roomDisposedEarlyError.code, Bb.d.roomDisposedLateError.code, Bb.d.serverRoomLimitReached.code]);
+     const od = new Set([pd.e.duplicateLobbyNameError.code, pd.e.lobbyCantBeCreated.code, pd.e.roomDisposedEarlyError.code, pd.e.roomDisposedLateError.code, pd.e.serverRoomLimitReached.code]);
```

#### 76. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L675` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L675) · [Before (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L675)

```diff
-       const ub = (0, Ub.e)(bb);
+       const Jd = (0, Pd.g)(dd);
```

#### 77. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L679)

```diff
-   8626: (bb, ub, hb) => {
+   8825: (dd, Jd, kd) => {
```

#### 78. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L682-L683` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L682) · [Before (L682-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L682-L683)

```diff
-       e: () => Ub,
-       h: () => Lb,
+       g: () => Pd,
```

#### 79. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L685` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L684-L685) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L685)

```diff
-       n: () => Yb
+       n: () => Cd,
+       p: () => gd
```

#### 80. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L687-L688` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L687-L688) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L687-L688)

```diff
-     var Bb = hb(191),
-       Ob = hb(4393);
+     var pd = kd(193),
+       Nd = kd(4482);
```

#### 81. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L691)

```diff
-       return Ub(bb) === Bb.d.gameOrPluginOnPlayerAuthRejected.code
+       return Pd(dd) === pd.e.gameOrPluginOnPlayerAuthRejected.code
```

#### 82. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L700)

```diff
-       return null !== (ub = Object.keys(Ob.c).find((ub => Ob.c[ub] === bb))) && void 0 !== ub ? ub : null
+       return null !== (Jd = Object.keys(Nd.d).find((Jd => Nd.d[Jd] === dd))) && void 0 !== Jd ? Jd : null
```

#### 83. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L713)

```diff
-   38786: (bb, ub, hb) => {
+   39298: (dd, Jd, kd) => {
```

#### 84. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L717-L719` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L717-L719) · [Before (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L717-L719)

```diff
-     var Bb = hb(298),
-       Ob = hb(115),
-       Gb = hb(29);
+     var pd = kd(300),
+       Nd = kd(126),
+       Wd = kd(33);
```

#### 85. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L722)

```diff
-       Gb.j.setItem(Bb.Qb, Gb.j.getItem(Bb.Qb) + 1), (0, Ob.j)() && Gb.j.setItem(Bb.Nb, Gb.j.getItem(Bb.Nb) + 1)
+       Wd.i.setItem(pd.Cb, Wd.i.getItem(pd.Cb) + 1), (0, Nd.n)() && Wd.i.setItem(pd.Bb, Wd.i.getItem(pd.Bb) + 1)
```

#### 86. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L725)

```diff
-   36074: (bb, ub, hb) => {
+   36631: (dd, Jd, kd) => {
```

#### 87. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L727-L728` → after: `L727-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L727-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L727-L728) · [Before (L727-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L727-L728)

```diff
-       c: () => lb,
-       d: () => Kb
+       d: () => Id,
+       g: () => Gd
```

#### 88. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L730-L744` → after: `L730-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L730-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L730-L744) · [Before (L730-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L730-L744)

```diff
-     var Bb = hb(934),
-       Ob = hb(595),
-       Gb = hb(314),
-       Ub = hb(937),
-       Lb = hb(599),
-       Yb = hb(625),
-       Sb = hb(4281),
-       ab = hb(86),
-       Hb = hb(115),
-       wb = hb(1622),
-       Zb = hb(101),
-       Xb = hb(36083),
-       pb = hb(29),
-       ob = hb(612),
-       Ab = hb(36091);
+     var pd = kd(1013),
+       Nd = kd(614),
+       Wd = kd(313),
+       Pd = kd(1016),
+       Zd = kd(626),
+       gd = kd(661),
+       Cd = kd(4379),
+       Kd = kd(95),
+       od = kd(126),
+       ld = kd(1753),
+       Qd = kd(108),
+       Ld = kd(36640),
+       Od = kd(33),
+       ed = kd(645),
+       Rd = kd(36645);
```

#### 89. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L748)

```diff
-       return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (ub = navigator.language) && void 0 !== ub ? ub : "none"], "EN-gb"]
+       return [...null !== (dd = navigator.languages) && void 0 !== dd ? dd : [null !== (Jd = navigator.language) && void 0 !== Jd ? Jd : "none"], "EN-gb"]
```

#### 90. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L752` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L752) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L752)

```diff
-       const Cb = (0, Bb.i)(ub) ? (0, Bb.p)(ub) : null,
+       const xd = (0, pd.i)(Jd) ? (0, pd.o)(Jd) : null,
```

#### 91. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L758-L759` → after: `L758-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L758-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L758-L759) · [Before (L758-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L758-L759)

```diff
-             joinDiscord: !!pb.j.getItem("DiscordPressed"),
-             newGo: Sb.e,
+             joinDiscord: !!Od.i.getItem("DiscordPressed"),
+             newGo: Cd.b,
```

#### 92. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L770)

```diff
-             deviceType: (0, Zb.b)()
+             deviceType: (0, Qd.e)()
```

#### 93. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L775-L776` → after: `L775-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L775-L776) · [Before (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L775-L776)

```diff
-           version: Ob.b,
-           siteUsed: Hb.s,
+           version: Nd.c,
+           siteUsed: od.t,
```

#### 94. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L778-L783` → after: `L778-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L778-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L778-L783) · [Before (L778-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L778-L783)

```diff
-           playSessionId: (0, Xb.h)(ub),
-           visitSessionId: (0, ob.b)(),
-           clientReason: Lb.f.reason,
-           budgetBasis: (0, Ab.g)(),
-           ...null !== Yb.m && {
-             diagClaim: Yb.m.claimId
+           playSessionId: (0, Ld.k)(Jd),
+           visitSessionId: (0, ed.d)(),
+           clientReason: Zd.l.reason,
+           budgetBasis: (0, Rd.h)(),
+           ...null !== gd.n && {
+             diagClaim: gd.n.claimId
```

#### 95. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L786-L787` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L786-L787) · [Before (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L786-L787)

```diff
-       return null !== Cb && (0, Gb.Ic)(Cb) ? (db.lobbyName = (0, Bb.h)(Cb, (0, Bb.l)(ub), hb), {
-         roomName: `classic_${Ub.c}`,
+       return null !== xd && (0, Wd.Kc)(xd) ? (qd.lobbyName = (0, pd.g)(xd, (0, pd.l)(Jd), kd), {
+         roomName: `classic_${Pd.d}`,
```

#### 96. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L795` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L795) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L795)

```diff
-   40114: (bb, ub, hb) => {
+   40650: (dd, Jd, kd) => {
```

#### 97. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L799` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L799) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L799)

```diff
-     var Bb = hb(39237);
+     var pd = kd(39734);
```

#### 98. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L958-L959` → after: `L958-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L958-L959) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L958-L959)

```diff
-             aS: 0,
-             fY: null,
+             LC: 0,
+             wg: null,
```

#### 99. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1020-L1021` → after: `L1020-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1020-L1021) · [Before (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1020-L1021)

```diff
-           worldCodeAiChunk: () => Bb.d,
-           worldCodeAiGameState: () => Bb.g
+           worldCodeAiChunk: () => pd.c,
+           worldCodeAiGameState: () => pd.f
```

#### 100. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1042)

```diff
-   36091: (bb, ub, hb) => {
+   36645: (dd, Jd, kd) => {
```

#### 101. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1045` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1045) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1045)

```diff
-       g: () => Cb,
+       h: () => xd,
```

#### 102. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1048-L1053` → after: `L1048-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1048-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1048-L1053) · [Before (L1048-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1048-L1053)

```diff
-     var Bb = hb(191),
-       Ob = hb(86),
-       Gb = hb(2710),
-       Ub = hb(4156),
-       Lb = hb(604),
-       Yb = hb(36095);
+     var pd = kd(193),
+       Nd = kd(95),
+       Wd = kd(2788),
+       Pd = kd(4242),
+       Zd = kd(632),
+       gd = kd(36651);
```

#### 103. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1077` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1077) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1077)

```diff
-         if ("ios" === ub) switch ((0, Gb.f)(bb)) {
+         if ("ios" === Jd) switch ((0, Wd.g)(dd)) {
```

#### 104. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1080` → after: `L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1080) · [Before (L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1080)

```diff
-               footprintBytes: ob(Yb.e), basis: "ipad-m", namesLimit: !1
+               footprintBytes: ed(gd.d), basis: "ipad-m", namesLimit: !1
```

#### 105. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1097` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1097) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1097)

```diff
-           basis: `memory-${hb}`,
+           basis: `memory-${kd}`,
```

#### 106. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1104)

```diff
-           footprintBytes: ob(Yb.k),
+           footprintBytes: ed(gd.h),
```

#### 107. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1110)

```diff
-         const bb = Math.min(Lb, ob(Yb.e));
+         const dd = Math.min(Zd, ed(gd.d));
```

#### 108. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1116)

```diff
-           return Math.min(Yb.e, Math.max(Yb.g, ub))
+           return Math.min(gd.d, Math.max(gd.e, Jd))
```

#### 109. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1118` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1118) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1118)

```diff
-         Kb = (0, Yb.m)(lb);
+         Gd = (0, gd.l)(Id);
```

#### 110. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1123-L1124` → after: `L1123-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1123-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1123-L1124) · [Before (L1123-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1123-L1124)

```diff
-         maxHorizDistance: null !== (Ob = null === Kb || void 0 === Kb ? void 0 : Kb.horizontal) && void 0 !== Ob ? Ob : Bb.e.maxChunkHorizAddDistance,
-         maxVertDistance: null !== (Ub = null === Kb || void 0 === Kb ? void 0 : Kb.vertical) && void 0 !== Ub ? Ub : Bb.e.maxChunkVertAddDistance,
+         maxHorizDistance: null !== (Nd = null === Gd || void 0 === Gd ? void 0 : Gd.horizontal) && void 0 !== Nd ? Nd : pd.g.maxChunkHorizAddDistance,
+         maxVertDistance: null !== (Pd = null === Gd || void 0 === Gd ? void 0 : Gd.vertical) && void 0 !== Pd ? Pd : pd.g.maxChunkVertAddDistance,
```

#### 111. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1134-L1135` → after: `L1134-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1134-L1135) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1134-L1135)

```diff
-         ...(0, Gb.h)()
-       }, (0, Ub.e)(), (0, Lb.E)("wasm").length > 0)
+         ...(0, Wd.i)()
+       }, (0, Pd.d)(), (0, Zd.F)("wasm").length > 0)
```

#### 112. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1144` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1144) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1144)

```diff
-       return (null !== (bb = lb) && void 0 !== bb ? bb : Kb()).basis
+       return (null !== (dd = Id) && void 0 !== dd ? dd : Gd()).basis
```

#### 113. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1151` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1151) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1151)

```diff
-   40470: (bb, ub, hb) => {
+   41036: (dd, Jd, kd) => {
```

#### 114. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1154` → after: `L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1154) · [Before (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1154)

```diff
-       h: () => Gb
+       i: () => Wd
```

#### 115. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1156-L1157` → after: `L1156-L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1156-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1156-L1157) · [Before (L1156-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1156-L1157)

```diff
-     var Bb = hb(2951),
-       Ob = hb(934);
+     var pd = kd(3018),
+       Nd = kd(1013);
```

#### 116. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1160` → after: `L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1160) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1160)

```diff
-       return null !== bb.gameSource && (0, Bb.k)(ub, bb.gameSource)
+       return null !== dd.gameSource && (0, pd.o)(Jd, dd.gameSource)
```

#### 117. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1165` → after: `L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1165) · [Before (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1165)

```diff
-       const hb = (0, Ob.i)(ub) ? (0, Ob.p)(ub) : null;
+       const kd = (0, Nd.i)(Jd) ? (0, Nd.o)(Jd) : null;
```

#### 118. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1169` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1169) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1169)

```diff
-   40444: (bb, ub, hb) => {
+   41008: (dd, Jd, kd) => {
```

#### 119. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1171` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1171) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1171)

```diff
-       e: () => Lb
+       c: () => Zd
```

#### 120. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1173-L1175` → after: `L1173-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1173-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1173-L1175) · [Before (L1173-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1173-L1175)

```diff
-     var Bb = hb(571),
-       Ob = hb(40452),
-       Gb = hb(40413);
+     var pd = kd(597),
+       Nd = kd(41011),
+       Wd = kd(40986);
```

#### 121. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1177-L1183` → after: `L1177-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1177-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1177-L1183) · [Before (L1177-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1177-L1183)

```diff
-       const ub = await (0, Ob.f)({
-         Helmet: hb(37553),
-         Chestplate: hb(37557),
-         Gauntlets: hb(37578),
-         Leggings: hb(37563),
-         Boots: hb(37571)
-       } [Bb.e[bb]]);
+       const Jd = await (0, Nd.j)({
+         Helmet: kd(38151),
+         Chestplate: kd(38154),
+         Gauntlets: kd(38167),
+         Leggings: kd(38160),
+         Boots: kd(38163)
+       } [pd.c[dd]]);
```

#### 122. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1185` → after: `L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1185) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1185)

```diff
-         return (0, Gb.n)(ub)
+         return (0, Wd.s)(Jd)
```

#### 123. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1193` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1193) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1193)

```diff
-           ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ob.l;
+           Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd.n;
```

#### 124. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1197-L1198` → after: `L1197-L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1197-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1197-L1198) · [Before (L1197-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1197-L1198)

```diff
-         for (let bb = 0; bb < Bb.e.length; bb++) this.part(bb).catch((ub => {
-           console.warn(`The grayscale armour ${Bb.e[bb]} image didn't decode ahead of use`, ub)
+         for (let dd = 0; dd < pd.c.length; dd++) this.part(dd).catch((Jd => {
+           console.warn(`The grayscale armour ${pd.c[dd]} image didn't decode ahead of use`, Jd)
```

#### 125. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1220` → after: `L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1220) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1220)

```diff
-           throw new Ob.c("decode", `grayscale armour ${Bb.e[bb]}`, {
+           throw new Nd.d("decode", `grayscale armour ${pd.c[dd]}`, {
```

#### 126. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1234)

```diff
-           throw this.decoded.delete(bb), ub instanceof Ob.c ? ub : new Ob.c("decode", `grayscale armour ${Bb.e[bb]}`, {
+           throw this.decoded.delete(dd), Jd instanceof Nd.d ? Jd : new Nd.d("decode", `grayscale armour ${pd.c[dd]}`, {
```

#### 127. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1242` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1242) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1242)

```diff
-   40435: (bb, ub, hb) => {
+   41006: (dd, Jd, kd) => {
```

#### 128. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1247-L1248` → after: `L1245-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1245-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1245-L1248) · [Before (L1247-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1247-L1248)

```diff
-       g: () => Hb,
-       k: () => pb
+       i: () => ed,
+       l: () => Kd,
+       n: () => od,
+       p: () => Od
```

#### 129. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1250-L1252` → after: `L1250-L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1250-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1250-L1252) · [Before (L1250-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1250-L1252)

```diff
-     var Bb = hb(40391),
-       Ob = hb(40444),
-       Gb = hb(40452);
+     var pd = kd(40963),
+       Nd = kd(41008),
+       Wd = kd(41011);
```

#### 130. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1277` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1277) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1277)

```diff
-       const ub = (0, Bb.q)();
+       const Jd = (0, pd.l)();
```

#### 131. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1283` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1283) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1283)

```diff
-         armourAtlasUrl: async () => (await hb.e(202).then((() => hb(33950)))).armourAtlasUrl,
+         armourAtlasUrl: async () => (await kd.e(202).then((() => kd(34385)))).armourAtlasUrl,
```

#### 132. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1289` → after: `L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1289) · [Before (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1289)

```diff
-         particleItemUrl: async bb => (Ob ??= hb.e(38).then((() => hb(51036))).catch((bb => {
+         particleItemUrl: async dd => (Nd ??= kd.e(38).then((() => kd(51597))).catch((dd => {
```

#### 133. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1298` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1298) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1298)

```diff
-         this.sources = bb, this.onFailure = ub, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.grey … [truncated]
+         this.sources = dd, this.onFailure = Jd, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.grey … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1311)

```diff
-         this.glbWrittenImages.delete(bb), ub && this.setGlbImages(bb, void 0 !== hb && hb.length > 0 ? hb : void 0)
+         this.glbWrittenImages.delete(dd), Jd && this.setGlbImages(dd, void 0 !== kd && kd.length > 0 ? kd : void 0)
```

#### 135. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1315` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1315) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1315)

```diff
-         this.glbTakenCount.set(bb, (null !== (hb = this.glbTakenCount.get(bb)) && void 0 !== hb ? hb : 0) + 1), void 0 === ub ? this.glbImages.delete(bb) : this.glbImages.set(bb, ub);
+         this.glbTakenCount.set(dd, (null !== (kd = this.glbTakenCount.get(dd)) && void 0 !== kd ? kd : 0) + 1), void 0 === Jd ? this.glbImages.delete(dd) : this.glbImages.set(dd, Jd);
```

#### 136. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1331` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1331) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1331)

```diff
-         if (this.FZ) return;
+         if (this.pL) return;
```

#### 137. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1368)

```diff
-         this.FZ = !0, this.loading.clear(), this.ready.length = 0;
+         this.pL = !0, this.loading.clear(), this.ready.length = 0;
```

#### 138. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1379` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1379) · [Before (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1379)

```diff
-           this.FZ || this.loading.get(ub) !== hb ? this.release(Bb.id) : (this.loading.delete(ub), this.answered.set(Bb.id, bb), this.ready.push({
+           this.pL || this.loading.get(Jd) !== kd ? this.release(pd.id) : (this.loading.delete(Jd), this.answered.set(pd.id, dd), this.ready.push({
```

#### 139. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1385` → after: `L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1385) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1385)

```diff
-           if (this.FZ || this.loading.get(ub) !== hb) return;
+           if (this.pL || this.loading.get(Jd) !== kd) return;
```

#### 140. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1390` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1390) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1390)

```diff
-           const Ob = Bb instanceof Gb.c && "decode" === Bb.stage ? Zb : Xb;
+           const Nd = pd instanceof Wd.d && "decode" === pd.stage ? Qd : Ld;
```

#### 141. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1421)

```diff
-             throw new Gb.c("fetch", `image kind ${bb.kind}`, {
+             throw new Wd.d("fetch", `image kind ${dd.kind}`, {
```

#### 142. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1435` → after: `L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1435) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1435)

```diff
-             throw new Gb.c("fetch", Bb, {
+             throw new Wd.d("fetch", pd, {
```

#### 143. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1442` → after: `L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1442) · [Before (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1442)

```diff
-         if (!Bb) throw new Gb.c("decode", `image ${bb.index} of file ${2147483647&bb.word}`, {
+         if (!pd) throw new Wd.d("decode", `image ${dd.index} of file ${2147483647&dd.word}`, {
```

#### 144. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1455` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1455) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1455)

```diff
-       return `${ub}:${hb}:${Bb}`
+       return `${Jd}:${kd}:${pd}`
```

#### 145. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1459)

```diff
-       if (null === bb) throw new Gb.c("fetch", `no URL for image ${Ab(ub)}`, {
+       if (null === dd) throw new Wd.d("fetch", `no URL for image ${Rd(Jd)}`, {
```

#### 146. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1469` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1469) · [Before (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1469)

```diff
-       return Lb.setUint8(0, bb.kind), Lb.setUint8(1, bb.index), Lb.setUint8(2, ub), Lb.setUint32(4, bb.word, !0), Lb.setUint32(8, null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.id) && void 0 !== Bb ? Bb : 0, !0), Lb.setUint16(12, Math.min(null !== (Ob = null === hb ||  … [truncated]
+       return Zd.setUint8(0, dd.kind), Zd.setUint8(1, dd.index), Zd.setUint8(2, Jd), Zd.setUint32(4, dd.word, !0), Zd.setUint32(8, null !== (pd = null === kd || void 0 === kd ? void 0 : kd.id) && void 0 !== pd ? pd : 0, !0), Zd.setUint16(12, Math.min(null !== (Nd = null === kd ||  … [truncated]
```

#### 147. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1486` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1486) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1486)

```diff
-       const Gb = null !== (ub = Bb.images) && void 0 !== ub ? ub : [];
+       const Wd = null !== (Jd = pd.images) && void 0 !== Jd ? Jd : [];
```

#### 148. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1492-L1493` → after: `L1492-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1492-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1492-L1493) · [Before (L1492-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1492-L1493)

```diff
-         if (!Gb || 0 !== (null !== (hb = Gb.buffer) && void 0 !== hb ? hb : 0) || void 0 === Gb.byteLength) return null;
-         const Lb = null !== (Ob = Gb.byteOffset) && void 0 !== Ob ? Ob : 0,
+         if (!Wd || 0 !== (null !== (kd = Wd.buffer) && void 0 !== kd ? kd : 0) || void 0 === Wd.byteLength) return null;
+         const Zd = null !== (Nd = Wd.byteOffset) && void 0 !== Nd ? Nd : 0,
```

#### 149. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1499` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1499) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1499)

```diff
-   40116: (bb, ub, hb) => {
+   40658: (dd, Jd, kd) => {
```

#### 150. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1503` → after: `L1502-L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1502-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1502-L1503) · [Before (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1503)

```diff
-       h: () => Ob
+       e: () => Wd,
+       f: () => Nd
```

#### 151. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1520` → after: `L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1520) · [Before (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1520)

```diff
-   36201: (bb, ub, hb) => {
+   36765: (dd, Jd, kd) => {
```

#### 152. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1522-L1525` → after: `L1522-L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1522-L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1522-L1525) · [Before (L1522-L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1522-L1525)

```diff
-       c: () => ab,
-       g: () => wb,
-       h: () => Ab,
-       i: () => Sb
+       e: () => Kd,
+       i: () => ld,
+       m: () => Rd,
+       n: () => Cd
```

#### 153. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1527-L1532` → after: `L1527-L1532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1527-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1527-L1532) · [Before (L1527-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1527-L1532)

```diff
-     var Bb = hb(13),
-       Ob = hb(2273),
-       Gb = hb(2276),
-       Ub = hb(2280),
-       Lb = hb(2358),
-       Yb = hb(16);
+     var pd = kd(22),
+       Nd = kd(2337),
+       Wd = kd(2345),
+       Pd = kd(2352),
+       Zd = kd(2405),
+       gd = kd(29);
```

#### 154. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1535)

```diff
-       return (!(0, Ub.e)() || 0 === bb && 0 === ub) && (0, Gb.y)(Ob.i.Joystick, 0, bb, ub, 0)
+       return (!(0, Pd.c)() || 0 === dd && 0 === Jd) && (0, Wd.A)(Nd.k.Joystick, 0, dd, Jd, 0)
```

#### 155. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1562` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1562) · [Before (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1562)

```diff
-       return document.documentElement.classList.contains(Lb.k)
+       return document.documentElement.classList.contains(Zd.i)
```

#### 156. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1626)

```diff
-         if (!ub) return void this.write(Ob.i.TouchZone, bb, 0, 0, 0);
+         if (!Jd) return void this.write(Nd.k.TouchZone, dd, 0, 0, 0);
```

#### 157. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1631)

```diff
-         this.write(Ob.i.TouchZone, bb, Gb.x - this.canvasLeft, Gb.y - this.canvasTop, pb(hb.width, hb.height));
+         this.write(Nd.k.TouchZone, dd, Wd.x - this.canvasLeft, Wd.y - this.canvasTop, Od(kd.width, kd.height));
```

#### 158. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1633` → after: `L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1633) · [Before (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1633)

```diff
-         this.write(Ob.i.TouchZone, 256 | bb, 0, 0, Ub ? pb(Ub.width, Ub.height) : 0)
+         this.write(Nd.k.TouchZone, 256 | dd, 0, 0, Pd ? Od(Pd.width, Pd.height) : 0)
```

#### 159. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1645-L1646` → after: `L1645-L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1645-L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1645-L1646) · [Before (L1645-L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1645-L1646)

```diff
-     }(Gb.y);
-     (0, Yb.l)(Lb.e, (() => {
+     }(Wd.A);
+     (0, gd.n)(Zd.e, (() => {
```

#### 160. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1650` → after: `L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1650) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1650)

```diff
-   40326: (bb, ub, hb) => {
+   40886: (dd, Jd, kd) => {
```

#### 161. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1655-L1660` → after: `L1655-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1655-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1655-L1660) · [Before (L1655-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1655-L1660)

```diff
-     var Bb = hb(40333),
-       Ob = hb(38692),
-       Gb = hb(36074),
-       Ub = hb(40256),
-       Lb = hb(40301);
-     const Yb = Bb.b.timeForPlayerToConnect - 1e4;
+     var pd = kd(40888),
+       Nd = kd(39220),
+       Wd = kd(36631),
+       Pd = kd(40801),
+       Zd = kd(40868);
+     const gd = pd.d.timeForPlayerToConnect - 1e4;
```

#### 162. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1666` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1666) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1666)

```diff
-         throw console.error("[bloxd-wasm-client] could not get a traffic code", Xb), new Lb.y(Xb)
+         throw console.error("[bloxd-wasm-client] could not get a traffic code", Ld), new Zd.z(Ld)
```

#### 163. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1672` → after: `L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1672) · [Before (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1672)

```diff
-         const ub = (0, Gb.d)(bb, Sb, ab, Yb, (bb => {
+         const Jd = (0, Wd.g)(dd, Cd, Kd, gd, (dd => {
```

#### 164. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1677` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1677) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1677)

```diff
-         const Ob = (0, Ub.E)();
+         const Nd = (0, Pd.H)();
```

#### 165. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1692` → after: `L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1692) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1692)

```diff
-         optionsAfterRefusal: async ub => await (0, Ob.d)(bb, ub) ? Hb().joinOptions : null
+         optionsAfterRefusal: async Jd => await (0, Nd.e)(dd, Jd) ? od().joinOptions : null
```

#### 166. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1696` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1696) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1696)

```diff
-   4815: (bb, ub, hb) => {
+   4911: (dd, Jd, kd) => {
```

#### 167. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1699` → after: `L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1699) · [Before (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1699)

```diff
-       g: () => Ub
+       i: () => Pd
```

#### 168. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1701-L1702` → after: `L1701-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1701-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1701-L1702) · [Before (L1701-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1701-L1702)

```diff
-     var Bb = hb(2951),
-       Ob = hb(4819);
+     var pd = kd(3018),
+       Nd = kd(4915);
```

#### 169. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1707)

```diff
-         pack: bb.metaData.id === Bb.c ? null : bb,
+         pack: dd.metaData.id === pd.e ? null : dd,
```

#### 170. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1714` → after: `L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1714) · [Before (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1714)

```diff
-       null !== hb && (0, Ob.c)(hb.pack, bb) && (Gb = null, ub && hb.prompt())
+       null !== kd && (0, Nd.d)(kd.pack, dd) && (Wd = null, Jd && kd.prompt())
```

#### 171. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1717)

```diff
-   40461: (bb, ub, hb) => {
+   41020: (dd, Jd, kd) => {
```

#### 172. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1720-L1722` → after: `L1720-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1720-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1720-L1722) · [Before (L1720-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1720-L1722)

```diff
-       f: () => Gb,
-       j: () => Hb,
-       m: () => Ub
+       g: () => Wd,
+       h: () => od,
+       k: () => Pd
```

#### 173. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1724-L1725` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1724-L1725) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1724-L1725)

```diff
-     var Bb = hb(40435),
-       Ob = hb(40391);
+     var pd = kd(41006),
+       Nd = kd(40963);
```

#### 174. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1789` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1789) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1789)

```diff
-           return null !== (hb = null === (Bb = ub()) || void 0 === Bb ? void 0 : Bb.armourAtlasUrl()) && void 0 !== hb ? hb : bb.armourAtlasUrl()
+           return null !== (kd = null === (pd = Jd()) || void 0 === pd ? void 0 : pd.armourAtlasUrl()) && void 0 !== kd ? kd : dd.armourAtlasUrl()
```

#### 175. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1794)

```diff
-           const bb = await hb.e(38).then((() => hb(51036))).catch((() => null));
+           const dd = await kd.e(38).then((() => kd(51597))).catch((() => null));
```

#### 176. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1799)

```diff
-           return null !== (bb = null === (ub = await Lb()) || void 0 === ub ? void 0 : ub.blockImageName(hb)) && void 0 !== bb ? bb : null
+           return null !== (dd = null === (Jd = await Zd()) || void 0 === Jd ? void 0 : Jd.blockImageName(kd)) && void 0 !== dd ? dd : null
```

#### 177. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1805` → after: `L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1805) · [Before (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1805)

```diff
-       return (0, Ob.q)().catch((() => null))
+       return (0, Nd.l)().catch((() => null))
```

#### 178. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1813)

```diff
-           Ob = null !== (bb = null === Bb || void 0 === Bb ? void 0 : Bb.slice(Bb.lastIndexOf("/") + 1)) && void 0 !== bb ? bb : null;
+           Nd = null !== (dd = null === pd || void 0 === pd ? void 0 : pd.slice(pd.lastIndexOf("/") + 1)) && void 0 !== dd ? dd : null;
```

#### 179. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1828)

```diff
-       const ub = [Bb.e.ArmourAtlas, Bb.e.LifeformAtlas, Bb.e.GroupAtlas, Bb.e.BlockImage, Bb.e.Particle];
+       const Jd = [pd.l.ArmourAtlas, pd.l.LifeformAtlas, pd.l.GroupAtlas, pd.l.BlockImage, pd.l.Particle];
```

#### 180. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1831-L1833` → after: `L1831-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1831-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1831-L1833) · [Before (L1831-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1831-L1833)

```diff
-           case Bb.e.Particle:
-             return bb.index === Bb.g.Item;
-           case Bb.e.LifeformAtlas:
+           case pd.l.Particle:
+             return dd.index === pd.n.Item;
+           case pd.l.LifeformAtlas:
```

#### 181. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1841` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1841) · [Before (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1841)

```diff
-   40335: (bb, ub, hb) => {
+   40891: (dd, Jd, kd) => {
```

#### 182. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1845` → after: `L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1845) · [Before (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1845)

```diff
-       h: () => Ub,
+       f: () => Pd,
```

#### 183. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1847)

```diff
-       j: () => Gb
+       l: () => Wd
```

#### 184. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1868)

```diff
-       Promise.resolve().then((() => hb(94))).then((ub => {
+       Promise.resolve().then((() => kd(103))).then((Jd => {
```

#### 185. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1879)

```diff
-       null !== window.onbeforeunload ? Promise.resolve().then((() => hb(1622))).then((ub => {
+       null !== window.onbeforeunload ? Promise.resolve().then((() => kd(1753))).then((Jd => {
```

#### 186. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1894` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1894) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1894)

```diff
-   4819: (bb, ub, hb) => {
+   4915: (dd, Jd, kd) => {
```

#### 187. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1908` → after: `L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1908) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1908)

```diff
-       c: () => Bb
+       d: () => pd
```

#### 188. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1911` → after: `L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1911) · [Before (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1911)

```diff
-   40366: (bb, ub, hb) => {
+   40933: (dd, Jd, kd) => {
```

#### 189. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1913` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1913) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1913)

```diff
-       b: () => rb,
+       d: () => Bd,
```

#### 190. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1918-L1924` → after: `L1918-L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1918-L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1918-L1924) · [Before (L1918-L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1918-L1924)

```diff
-     var Bb = hb(1709),
-       Ob = hb(1713),
-       Gb = hb(38688),
-       Ub = hb(38699),
-       Lb = hb(1672),
-       Yb = hb(40293),
-       Sb = hb(40301);
+     var pd = kd(1822),
+       Nd = kd(1827),
+       Wd = kd(39215),
+       Pd = kd(39222),
+       Zd = kd(1797),
+       gd = kd(40860),
+       Cd = kd(40868);
```

#### 191. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1948)

```diff
-       return `${Bb?"https":"http"}://${Ob}${Gb}/matchmake/${ub}/${encodeURIComponent(hb)}${Ub?`?${Ub}`:""}`
+       return `${pd?"https":"http"}://${Nd}${Wd}/matchmake/${Jd}/${encodeURIComponent(kd)}${Pd?`?${Pd}`:""}`
```

#### 192. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1953-L1954` → after: `L1953-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1953-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1953-L1954) · [Before (L1953-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1953-L1954)

```diff
-       const Bb = null !== (hb = ub.protocol) && void 0 !== hb ? hb : "ws";
-       if ("ws" !== Bb) throw new Error(`seat reservation asks for the ${Bb} transport`);
+       const pd = null !== (kd = Jd.protocol) && void 0 !== kd ? kd : "ws";
+       if ("ws" !== pd) throw new Error(`seat reservation asks for the ${pd} transport`);
```

#### 193. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1962` → after: `L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1962) · [Before (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1962)

```diff
-       return `${Ob?"wss":"ws"}://${ub.room.publicAddress||`${Gb}${Ub}`}/${ub.room.processId}/${ub.room.roomId}?${Yb.toString()}`
+       return `${Nd?"wss":"ws"}://${Jd.room.publicAddress||`${Wd}${Pd}`}/${Jd.room.processId}/${Jd.room.roomId}?${gd.toString()}`
```

#### 194. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1967` → after: `L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1967) · [Before (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1967)

```diff
-       const Zb = null !== (Yb = ab.sleep) && void 0 !== Yb ? Yb : Bb.b,
+       const Qd = null !== (gd = Kd.sleep) && void 0 !== gd ? gd : pd.e,
```

#### 195. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1969-L1970` → after: `L1969-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1969-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1969-L1970) · [Before (L1969-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1969-L1970)

```diff
-         ob = new Lb.e(Ub.b, (() => {
-           (0, Ob.j)(pb.controller, new Ub.c)
+         ed = new Zd.e(Pd.d, (() => {
+           (0, Nd.e)(Od.controller, new Pd.g)
```

#### 196. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1985` → after: `L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1985) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1985)

```diff
-             if (Xb > 0) await Lb(null !== (pb = wb[Xb - 1]) && void 0 !== pb ? pb : 1500, Ub);
+             if (Ld > 0) await Zd(null !== (Od = ld[Ld - 1]) && void 0 !== Od ? Od : 1500, Pd);
```

#### 197. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1987)

```diff
-             (0, Ob.r)(Ub);
+             (0, Nd.j)(Pd);
```

#### 198. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L1991` → after: `L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L1991) · [Before (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L1991)

```diff
-               (0, Ob.r)(Ub), Zb = Ab(ob);
+               (0, Nd.j)(Pd), Qd = Rd(ed);
```

#### 199. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2003)

```diff
-               Zb = new Sb.w(`seat request answered HTTP ${ub.status}${null===hb?" without JSON":" without a seat"}`, !1)
+               Qd = new Cd.x(`seat request answered HTTP ${Jd.status}${null===kd?" without JSON":" without a seat"}`, !1)
```

#### 200. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2006` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2006) · [Before (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2006)

```diff
-           throw null !== (Gb = Zb) && void 0 !== Gb ? Gb : new Sb.w("seat request made no attempt", !1)
+           throw null !== (Wd = Qd) && void 0 !== Wd ? Wd : new Cd.x("seat request made no attempt", !1)
```

#### 201. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2018` → after: `L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2018) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2018)

```diff
-       return new Sb.w(bb instanceof Error ? bb.message : String(bb), !0, bb)
+       return new Cd.x(dd instanceof Error ? dd.message : String(dd), !0, dd)
```

#### 202. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2024)

```diff
-       } = hb, Ub = null !== (Bb = hb.fetch) && void 0 !== Bb ? Bb : fetch, Lb = await Ub(bb, {
+       } = kd, Pd = null !== (pd = kd.fetch) && void 0 !== pd ? pd : fetch, Zd = await Pd(dd, {
```

#### 203. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2041` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2041) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2041)

```diff
-             answer: "object" === typeof ub && null !== ub ? ub : null,
+             answer: "object" === typeof Jd && null !== Jd ? Jd : null,
```

#### 204. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2055)

```diff
-       return (0, Ob.r)(Gb), {
+       return (0, Nd.j)(Wd), {
```

#### 205. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2064)

```diff
-       return new Sb.m(bb, "number" === typeof(null === ub || void 0 === ub ? void 0 : ub.code) ? ub.code : 0, (0, Yb.r)(bb).text)
+       return new Cd.m(dd, "number" === typeof(null === Jd || void 0 === Jd ? void 0 : Jd.code) ? Jd.code : 0, (0, gd.p)(dd).text)
```

#### 206. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2084` → after: `L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2084) · [Before (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2084)

```diff
-         throw new Wb(`the seat's reconnect was refused: ${null!==Ub&&void 0!==Ub?Ub:`HTTP ${Ob.status}`}`, bb)
+         throw new vd(`the seat's reconnect was refused: ${null!==Pd&&void 0!==Pd?Pd:`HTTP ${Nd.status}`}`, dd)
```

#### 207. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2106` → after: `L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2106) · [Before (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2106)

```diff
-   40052: (bb, ub, hb) => {
+   40578: (dd, Jd, kd) => {
```

#### 208. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2110-L2112` → after: `L2111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2111) · [Before (L2110-L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2110-L2112)

```diff
-       F: () => gb,
-       H: () => Wb,
-       I: () => Cb,
+       G: () => ed,
```

#### 209. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2114-L2119` → after: `L2113-L2118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2113-L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2113-L2118) · [Before (L2114-L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2114-L2119)

```diff
-       L: () => Db,
-       P: () => vb,
-       S: () => Xb,
-       W: () => Jb,
-       Z: () => lb,
-       db: () => Kb,
+       O: () => Sd,
+       Q: () => Ld,
+       R: () => Xd,
+       V: () => Id,
+       X: () => Rd,
+       Y: () => Gd,
```

#### 210. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2121-L2122` → after: `L2120-L2121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2120-L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2120-L2121) · [Before (L2121-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2121-L2122)

```diff
-       f: () => tb,
-       fb: () => db,
+       g: () => jd,
+       h: () => bd,
```

#### 211. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2124-L2125` → after: `L2123-L2124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2123-L2124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2123-L2124) · [Before (L2124-L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2124-L2125)

```diff
-       m: () => Zb,
-       n: () => pb,
+       l: () => Od,
+       p: () => Yd,
```

#### 212. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2127-L2129` → after: `L2126-L2129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2126-L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2126-L2129) · [Before (L2127-L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2127-L2129)

```diff
-       u: () => jb,
-       v: () => xb,
-       z: () => nb
+       s: () => Fd,
+       t: () => ad,
+       w: () => Bd,
+       y: () => md
```

#### 213. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2131` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2131) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2131)

```diff
-     var Bb = hb(2775);
+     var pd = kd(2839);
```

#### 214. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2162)

```diff
-       return !ArrayBuffer.isView(bb) || bb instanceof DataView ? Array.isArray(bb) ? bb.map((bb => ub(bb))) : bb : Array.from(bb, (bb => ub(bb)))
+       return !ArrayBuffer.isView(dd) || dd instanceof DataView ? Array.isArray(dd) ? dd.map((dd => Jd(dd))) : dd : Array.from(dd, (dd => Jd(dd)))
```

#### 215. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2182` → after: `L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2182) · [Before (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2182)

```diff
-       return null === bb || "object" !== typeof bb ? bb : [Ub(bb.uS), Ub(bb.hS)]
+       return null === dd || "object" !== typeof dd ? dd : [Pd(dd.WC), Pd(dd.PC)]
```

#### 216. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2186` → after: `L2186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2186) · [Before (L2186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2186)

```diff
-       return null === bb || "object" !== typeof bb ? bb : [Gb(bb.Fb, Sb), Gb(bb.Ya, Sb)]
+       return null === dd || "object" !== typeof dd ? dd : [Wd(dd.zd, Cd), Wd(dd.oK, Cd)]
```

#### 217. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2190` → after: `L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2190) · [Before (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2190)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.XS), Ub(ub.pS)];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.IC), Pd(Jd.vC)];
```

#### 218. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2195` → after: `L2195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2195) · [Before (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2195)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [ub.id, ub.ha];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Jd.id, Jd.WK];
```

#### 219. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2200)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [ub.vu, Ub(ub.tu), ub.Ju, Ub(ub.Mu), ub.qu, ub.Eu, ub.WU, Ub(ub.CU), Ub(ub.dU)];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Jd.SJ, Pd(Jd.jJ), Jd.XJ, Pd(Jd.UJ), Jd.EJ, Jd.cJ, Jd.BP, Pd(Jd.sP), Pd(Jd.iP)];
```

#### 220. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2205` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2205) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2205)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Gb(ub.RY, Sb), ub.bS];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Wd(Jd.pC, Cd), Jd.NC];
```

#### 221. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2210` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2210) · [Before (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2210)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Gb(ub.KS, (bb => Ub(bb))), Ub(ub.WS), ub.CS];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Wd(Jd.sC, (dd => Pd(dd))), Pd(Jd.iC), Jd.aC];
```

#### 222. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2215` → after: `L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2215) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2215)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Gb(ub.Ba, Sb), Ub(ub.Oa), ub.Ga];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Wd(Jd.PK, Cd), Pd(Jd.ZK), Jd.gK];
```

#### 223. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2220` → after: `L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2220) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2220)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.tB), Ub(ub.JB)];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.np), Pd(Jd.Up)];
```

#### 224. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2225)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.FS)];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.HC)];
```

#### 225. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2234` → after: `L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2234) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2234)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.gS), Ub(ub.iS), Ub(ub.uS), Ub(ub.hS)];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.XC), Pd(Jd.fC), Pd(Jd.WC), Pd(Jd.PC)];
```

#### 226. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2247)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.lU)];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.xP)];
```

#### 227. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2256` → after: `L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2256) · [Before (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2256)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.yY), Ub(ub.VY)];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.Vg), Pd(Jd.zg)];
```

#### 228. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2273` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2273) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2273)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.KU)];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.qP)];
```

#### 229. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2278` → after: `L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2278) · [Before (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2278)

```diff
-       return (ab ??= (0, Bb.f)().map((bb => bb.name)), ab).map((ub => {
+       return (Kd ??= (0, pd.g)().map((dd => dd.name)), Kd).map((Jd => {
```

#### 230. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2285` → after: `L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2285) · [Before (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2285)

```diff
-       return null === (ub = bb) || "object" !== typeof ub ? ub : [ub.Xa, ub.oa, ub.Aa];
+       return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Jd.RK, Jd.IK, Jd.GK];
```

#### 231. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2289` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2289) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2289)

```diff
-   40465: (bb, ub, hb) => {
+   41028: (dd, Jd, kd) => {
```

#### 232. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2291)

```diff
-       e: () => Gb
+       b: () => Wd
```

#### 233. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2293-L2294` → after: `L2293-L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2293-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2293-L2294) · [Before (L2293-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2293-L2294)

```diff
-     var Bb = hb(40470),
-       Ob = hb(40461);
+     var pd = kd(41036),
+       Nd = kd(41020);
```

#### 234. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2338)

```diff
-     }(Ob.f)
+     }(Nd.g)
```

#### 235. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2340)

```diff
-   40288: (bb, ub, hb) => {
+   40851: (dd, Jd, kd) => {
```

#### 236. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2350-L2372` → after: `L2350-L2372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2350-L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2350-L2372) · [Before (L2350-L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2350-L2372)

```diff
-     var Bb = hb(191),
-       Ob = hb(1141),
-       Gb = hb(148),
-       Ub = hb(38710),
-       Lb = hb(1811),
-       Yb = hb(16),
-       Sb = hb(4444),
-       ab = hb(1206),
-       Hb = hb(1613),
-       wb = hb(1218),
-       Zb = hb(38856),
-       Xb = hb(1193),
-       pb = hb(38868),
-       ob = hb(38786),
-       Ab = hb(36083),
-       lb = hb(38688),
- ... (7 more removed lines; see GitHub link above)
+     var pd = kd(193),
+       Nd = kd(1266),
+       Wd = kd(149),
+       Pd = kd(39228),
+       Zd = kd(1932),
+       gd = kd(29),
+       Cd = kd(4543),
+       Kd = kd(1332),
+       od = kd(1751),
+       ld = kd(1348),
+       Qd = kd(39376),
+       Ld = kd(1320),
+       Od = kd(39385),
+       ed = kd(39298),
+       Rd = kd(36640),
+       Id = kd(39215),
+ ... (7 more added lines; see GitHub link above)
```

#### 237. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2506` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2506) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2506)

```diff
-       return null === (bb = null === (ub = (0, rb.l)()) || void 0 === ub ? void 0 : ub.localPlayerAlive()) || void 0 === bb || bb
+       return null === (dd = null === (Jd = (0, Bd.k)()) || void 0 === Jd ? void 0 : Jd.localPlayerAlive()) || void 0 === dd || dd
```

#### 238. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2511` → after: `L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2511) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2511)

```diff
-       return null !== (bb = null === (ub = (0, rb.l)()) || void 0 === ub ? void 0 : ub.localDeaths()) && void 0 !== bb ? bb : null
+       return null !== (dd = null === (Jd = (0, Bd.k)()) || void 0 === Jd ? void 0 : Jd.localDeaths()) && void 0 !== dd ? dd : null
```

#### 239. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2518)

```diff
-           return (0, db.x)((() => {
+           return (0, qd.D)((() => {
```

#### 240. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2541)

```diff
-             null === (bb = (0, rb.l)()) || void 0 === bb || bb.respawn()
+             null === (dd = (0, Bd.k)()) || void 0 === dd || dd.respawn()
```

#### 241. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2545-L2546` → after: `L2545-L2546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2545-L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2545-L2546) · [Before (L2545-L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2545-L2546)

```diff
-             null === (ub = (0, rb.l)()) || void 0 === ub || ub.send(nb.e.PlayEmote, (0, nb.H)({
-               FS: bb
+             null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.send(ad.e.PlayEmote, (0, ad.A)({
+               HC: dd
```

#### 242. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2554)

```diff
-             null === (ub = (0, rb.l)()) || void 0 === ub || ub.thirdPersonFor(hb)
+             null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.thirdPersonFor(kd)
```

#### 243. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2558` → after: `L2558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2558) · [Before (L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2558)

```diff
-             null === (ub = (0, rb.l)()) || void 0 === ub || ub.bindCustomButtonKeys(bb)
+             null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.bindCustomButtonKeys(dd)
```

#### 244. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2566` → after: `L2566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2566) · [Before (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2566)

```diff
-             null === (ub = (0, rb.l)()) || void 0 === ub || ub.pressCustomButton(hb, Bb)
+             null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.pressCustomButton(kd, pd)
```

#### 245. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2570-L2571` → after: `L2570-L2571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2570-L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2570-L2571) · [Before (L2570-L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2570-L2571)

```diff
-             const ub = (0, nb.P)({
-                 KU: bb
+             const Jd = (0, ad.O)({
+                 qP: dd
```

#### 246. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2574` → after: `L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2574) · [Before (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2574)

```diff
-                 const bb = (0, rb.l)();
+                 const dd = (0, Bd.k)();
```

#### 247. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2578` → after: `L2578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2578) · [Before (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2578)

```diff
-               const bb = (0, db.x)((() => {
+               const dd = (0, qd.D)((() => {
```

#### 248. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2585` → after: `L2585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2585) · [Before (L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2585)

```diff
-             null === (ub = (0, rb.l)()) || void 0 === ub || ub.setCameraZoom(bb)
+             null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.setCameraZoom(dd)
```

#### 249. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2593` → after: `L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2593) · [Before (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2593)

```diff
-             return null !== (bb = null === (ub = (0, rb.l)()) || void 0 === ub ? void 0 : ub.cameraZoom()) && void 0 !== bb ? bb : 0
+             return null !== (dd = null === (Jd = (0, Bd.k)()) || void 0 === Jd ? void 0 : Jd.cameraZoom()) && void 0 !== dd ? dd : 0
```

#### 250. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2597-L2605` → after: `L2597-L2605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2597-L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2597-L2605) · [Before (L2597-L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2597-L2605)

```diff
-     var tb = hb(40293),
-       Jb = hb(40301),
-       eb = hb(40305),
-       Nb = hb(40326),
-       sb = hb(1153),
-       Mb = hb(94),
-       mb = hb(4281),
-       Ib = hb(3495),
-       Pb = hb(1072);
+     var jd = kd(40860),
+       Xd = kd(40868),
+       fd = kd(40870),
+       nd = kd(40886),
+       Ud = kd(1275),
+       yd = kd(103),
+       Dd = kd(4379),
+       Td = kd(3610),
+       Ed = kd(1184);
```

#### 251. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2607-L2608` → after: `L2607-L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2607-L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2607-L2608) · [Before (L2607-L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2607-L2608)

```diff
-       sY: () => (0, sb.d)(),
-       inbuiltOverwritten: () => mb.h,
+       Tg: () => (0, Ud.e)(),
+       inbuiltOverwritten: () => Dd.c,
```

#### 252. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2611-L2613` → after: `L2611-L2613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2611-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2611-L2613) · [Before (L2611-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2611-L2613)

```diff
-       emitReplaced: () => (0, Yb.c)(),
-       confirmMesh: () => (0, Ib.c)(),
-       confirmMeshHitStack: () => (0, Ib.f)()
+       emitReplaced: () => (0, gd.e)(),
+       confirmMesh: () => (0, Td.e)(),
+       confirmMeshHitStack: () => (0, Td.g)()
```

#### 253. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2615-L2624` → after: `L2615-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2615-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2615-L2624) · [Before (L2615-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2615-L2624)

```diff
-     var Eb = hb(40310),
-       yb = hb(40335);
-     var Vb = hb(13),
-       Fb = hb(1819),
-       fb = hb(1874),
-       kb = hb(1544),
-       Tb = hb(1914),
-       cb = hb(1095),
-       Qb = hb(1144),
-       Rb = hb(40278);
+     var hd = kd(40874),
+       rd = kd(40891);
+     var ud = kd(22),
+       td = kd(1938),
+       Vd = kd(1975),
+       zd = kd(1675),
+       Hd = kd(2011),
+       wd = kd(1211),
+       Ad = kd(1273),
+       dJ = kd(40827);
```

#### 254. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2627` → after: `L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2627) · [Before (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2627)

```diff
-       return Qb.h.get().getCurrentLanguageCode()
+       return Ad.c.get().getCurrentLanguageCode()
```

#### 255. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2633` → after: `L2633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2633) · [Before (L2633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2633)

```diff
-           translate: (bb, ub) => (0, cb.A)(bu(), bb, ub),
+           translate: (dd, Jd) => (0, wd.v)(JJ(), dd, Jd),
```

#### 256. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2635-L2636` → after: `L2635-L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2635-L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2635-L2636) · [Before (L2635-L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2635-L2636)

```diff
-             const ub = (0, fb.p)(bb, Vb.d.get("isTouchScreen"));
-             return null !== ub ? (0, cb.D)(bu(), ub.translationKey, ub.params) : (0, fb.l)((0, fb.n)(bb))
+             const Jd = (0, Vd.u)(dd, ud.d.get("isTouchScreen"));
+             return null !== Jd ? (0, wd.x)(JJ(), Jd.translationKey, Jd.params) : (0, Vd.s)((0, Vd.t)(dd))
```

#### 257. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2638` → after: `L2638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2638) · [Before (L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2638)

```diff
-           isFriend: Tb.c,
+           isFriend: Hd.f,
```

#### 258. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2646` → after: `L2646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2646) · [Before (L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2646)

```diff
-           (0, cb.l)(bb).then((() => {
+           (0, wd.j)(dd).then((() => {
```

#### 259. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2650` → after: `L2650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2650) · [Before (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2650)

```diff
-         Ob = () => kb.b.getSocialState().friends.map((bb => bb.name.toLowerCase())).sort().join(" ");
+         Nd = () => zd.c.getSocialState().friends.map((dd => dd.name.toLowerCase())).sort().join(" ");
```

#### 260. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2653` → after: `L2653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2653) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2653)

```diff
-       const Ub = [(0, Qb.l)((() => {
+       const Pd = [(0, Ad.d)((() => {
```

#### 261. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2655` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2655) · [Before (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2655)

```diff
-       })), (0, Yb.l)("customBindingsChanged", ub), (0, Yb.l)("appManagerUpdated|isTouchScreen", ub), (0, Tb.b)((() => {
+       })), (0, gd.n)("customBindingsChanged", Jd), (0, gd.n)("appManagerUpdated|isTouchScreen", Jd), (0, Hd.d)((() => {
```

#### 262. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2664-L2680` → after: `L2664-L2680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2664-L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2664-L2680) · [Before (L2664-L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2664-L2680)

```diff
-     var hu = hb(595),
-       Bu = hb(934),
-       Ou = hb(1843),
-       Gu = hb(298),
-       Uu = hb(2683),
-       Lu = hb(35948),
-       Yu = hb(2688),
-       Su = hb(38357),
-       au = hb(4466),
-       Hu = hb(40198),
-       wu = hb(625),
-       Zu = hb(599),
-       Xu = hb(637),
-       pu = hb(645),
-       ou = hb(1836),
-       Au = hb(3502),
- ... (1 more removed lines; see GitHub link above)
+     var pJ = kd(614),
+       NJ = kd(1013),
+       WJ = kd(1958),
+       PJ = kd(300),
+       ZJ = kd(2761),
+       gJ = kd(36480),
+       CJ = kd(2770),
+       KJ = kd(38870),
+       oJ = kd(4563),
+       lJ = kd(40745),
+       QJ = kd(661),
+       LJ = kd(626),
+       OJ = kd(679),
+       eJ = kd(681),
+       RJ = kd(1955),
+       IJ = kd(3613),
+ ... (1 more added lines; see GitHub link above)
```

#### 263. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2682-L2691` → after: `L2682-L2691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2682-L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2682-L2691) · [Before (L2682-L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2682-L2691)

```diff
-     var Wu = hb(1103),
-       Cu = hb(1713),
-       du = hb(4188),
-       ru = hb(3233),
-       ju = hb(41),
-       nu = hb(290),
-       Du = hb(270),
-       xu = hb(40154),
-       zu = hb(4547);
-     var gu = hb(40338);
+     var xJ = kd(1220),
+       qJ = kd(1827),
+       BJ = kd(4275),
+       sJ = kd(3277),
+       iJ = kd(53),
+       aJ = kd(296),
+       MJ = kd(282),
+       FJ = kd(40692),
+       YJ = kd(4673);
+     var mJ = kd(40893);
```

#### 264. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2697` → after: `L2697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2697) · [Before (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2697)

```diff
-         (0, xu.E)()
+         (0, FJ.G)()
```

#### 265. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2702)

```diff
-           value: String((0, xu.v)())
+           value: String((0, FJ.s)())
```

#### 266. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2709` → after: `L2709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2709) · [Before (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2709)

```diff
-         (0, gu.i)(bb)
+         (0, mJ.k)(dd)
```

#### 267. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2718-L2719` → after: `L2718-L2719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2718-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2718-L2719) · [Before (L2718-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2718-L2719)

```diff
-           if (null !== (0, wb.b)().websocketUrl) try {
-             (0, db.K)().leaveGame(bb)
+           if (null !== (0, ld.d)().websocketUrl) try {
+             (0, qd.P)().leaveGame(dd)
```

#### 268. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2721` → after: `L2721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2721) · [Before (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2721)

```diff
-             (0, wb.l)({
+             (0, ld.r)({
```

#### 269. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2733` → after: `L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2733) · [Before (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2733)

```diff
-         return (0, db.q)(bb)
+         return (0, qd.v)(dd)
```

#### 270. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2736` → after: `L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2736) · [Before (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2736)

```diff
-         return (0, db.p)(bb)
+         return (0, qd.s)(dd)
```

#### 271. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2739` → after: `L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2739) · [Before (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2739)

```diff
-         return (0, db.x)(bb)
+         return (0, qd.D)(dd)
```

#### 272. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2742` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2742) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2742)

```diff
-     var Ju = hb(40347);
+     var XJ = kd(40900);
```

#### 273. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2790-L2801` → after: `L2790-L2801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2790-L2801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2790-L2801) · [Before (L2790-L2801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2790-L2801)

```diff
-       return su((await hb.e(202).then((() => hb(33950)))).averageColors)
-     }
-     var Iu = hb(4555),
-       Pu = hb(4564),
-       qu = hb(40095),
-       Eu = hb(35912),
-       yu = hb(40264),
-       Vu = hb(580),
-       Fu = hb(36693),
-       fu = hb(571),
-       ku = hb(314),
-       Tu = hb(40230);
+       return UJ((await kd.e(202).then((() => kd(34385)))).averageColors)
+     }
+     var TJ = kd(4680),
+       EJ = kd(4688),
+       cJ = kd(40629),
+       hJ = kd(36448),
+       rJ = kd(40807),
+       uJ = kd(605),
+       tJ = kd(37203),
+       VJ = kd(597),
+       zJ = kd(313),
+       HJ = kd(40778);
```

#### 274. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2805-L2808` → after: `L2805-L2808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2805-L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2805-L2808) · [Before (L2805-L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2805-L2808)

```diff
-       mobTypes: Vu.k,
-       vehicleTypes: Fu.d,
-       mobAiStates: Vu.i,
-       playerPoses: fu.n
+       mobTypes: uJ.n,
+       vehicleTypes: tJ.e,
+       mobAiStates: uJ.l,
+       playerPoses: VJ.q
```

#### 275. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2810-L2819` → after: `L2810-L2819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2810-L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2810-L2819) · [Before (L2810-L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2810-L2819)

```diff
-     var bh = hb(40212),
-       uh = hb(40351),
-       hh = hb(40358),
-       Bh = hb(40362),
-       Oh = hb(3256),
-       Gh = hb(38672),
-       Uh = hb(4584),
-       Lh = hb(2273);
-     const Yh = Lh.t.KeysDisabled | Lh.t.LookFrozen | Lh.t.ClicksSuppressed,
-       Sh = Oh.h;
+     var Jk = kd(40771),
+       kk = kd(40906),
+       pk = kd(40919),
+       Nk = kd(40924),
+       Wk = kd(3308),
+       Pk = kd(39203),
+       Zk = kd(4709),
+       gk = kd(2337);
+     const Ck = gk.y.KeysDisabled | gk.y.LookFrozen | gk.y.ClicksSuppressed,
+       Kk = Wk.f;
```

#### 276. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2827` → after: `L2827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2827) · [Before (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2827)

```diff
-         }), this.drops = 0, this.session = new Gh.e({
+         }), this.drops = 0, this.session = new Pk.d({
```

#### 277. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2837` → after: `L2837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2837) · [Before (L2837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2837)

```diff
-             bb.OJ(ub), (0, Uh.j)(Yh, ub ? Yh : 0, "reconnectFreeze")
+             dd.SF(Jd), (0, Zk.i)(Ck, Jd ? Ck : 0, "reconnectFreeze")
```

#### 278. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2848` → after: `L2848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2848) · [Before (L2848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2848)

```diff
-         return (0, hh.e)(this, ah)[ah]
+         return (0, pk.b)(this, lk)[lk]
```

#### 279. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2863` → after: `L2863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2863) · [Before (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2863)

```diff
-         0 !== bb && (bb === (0, hh.e)(this, ah)[ah] ? ((0, hh.e)(this, ah)[ah] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = bb))
+         0 !== dd && (dd === (0, pk.b)(this, lk)[lk] ? ((0, pk.b)(this, lk)[lk] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = dd))
```

#### 280. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2866` → after: `L2866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L2866) · [Before (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmPlay.js#L2866)

```diff
-         this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, hh.e)(this, ah)[ah] = 0, this.session.onConnectionLost(bb)
+         this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, pk.b)(this, lk)[lk] = 0, this.session.onConnectionLost(dd)
```
