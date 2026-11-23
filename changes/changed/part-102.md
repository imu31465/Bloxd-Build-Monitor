# Changed — Bundle Modifications Report (Part 102 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `102 / 104` (**435** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 101](part-101.md) · [Part 103 →](part-103.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/main.js` (1085 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L215` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L217) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L215)

```diff
-               jumpLock: "on" === Ak.e.mobile_jump_lock_v1
+               jumpLock: "on" === IC.d.mobile_jump_lock_v1
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L222` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L224) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L222)

```diff
-             return lk.h ? "webgl_holdback" : !0 === bk.f.getItem(wk.H) ? "old_intel_driver" : lk.j && !0 === bk.f.getItem(wk.D) ? "intel_gen9" : pk.s && (0, lk.e)(bk.f.getItem(wk.C)) ? "gpu_class_webgl" : pk.s && !0 === bk.f.getItem(wk.N) ? "gpu_wasm_arm" : !pk.s && (0, lk.m)(nav … [truncated]
+             return PC.h ? "webgl_holdback" : !0 === nC.i.getItem(pC.L) ? "old_intel_driver" : PC.k && !0 === nC.i.getItem(pC.I) ? "intel_gen9" : GC.z && (0, PC.e)(nC.i.getItem(pC.G)) ? "gpu_class_webgl" : GC.z && !0 === nC.i.getItem(pC.P) ? "gpu_wasm_arm" : !GC.z && (0, PC.m)(nav … [truncated]
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L224-L226` → after: `L226-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L226-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L226-L228) · [Before (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L224-L226)

```diff
-           const xe = Ke(),
-             ne = lk.r && null === xe;
-           let Ue = null === bk.f.getItem(fk.jc);
+           let Wz = Fz();
+           const Nz = PC.u && null === Wz;
+           let Mz = null === nC.i.getItem(wC.hc);
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L238-L239` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L240-L241) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L238-L239)

```diff
-             soundVolume: (0, rk.b)(),
-             musicVolume: null !== (Vk = bk.f.getItem("musicVol")) && void 0 !== Vk ? Vk : .5,
+             soundVolume: (0, fC.d)(),
+             musicVolume: null !== (hC = nC.i.getItem("musicVol")) && void 0 !== hC ? hC : .5,
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L252-L253` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L256-L257) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L252-L253)

```diff
-               const kk = bk.f.getItem("showDistantNametags");
-               return "boolean" === typeof kk ? kk : null
+               const CC = nC.i.getItem("showDistantNametags");
+               return "boolean" === typeof CC ? CC : null
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L266-L267` → after: `L270-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L270-L271) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L266-L267)

```diff
-             showDebugOverlay: null !== (Fk = bk.f.getItem("showDebugOverlay")) && void 0 !== Fk && Fk,
-             enabledDebugFeatures: null !== (uk = bk.f.getItem("enabledDebugFeatures")) && void 0 !== uk ? uk : {},
+             showDebugOverlay: null !== (KC = nC.i.getItem("showDebugOverlay")) && void 0 !== KC && KC,
+             enabledDebugFeatures: null !== (YC = nC.i.getItem("enabledDebugFeatures")) && void 0 !== YC ? YC : {},
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L275-L278` → after: `L279-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L279-L282) · [Before (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L275-L278)

```diff
-               useProfanityFilter: null === (qk = bk.f.getItem("UseProfanityFilter")) || void 0 === qk || qk,
-               showChat: null === (Ik = bk.f.getItem("showChat")) || void 0 === Ik || Ik,
-               showNewItemIndicator: null === (zk = bk.f.getItem("showNewItemIndicator")) || void 0 === zk || zk,
-               showFriendOnlineToasts: null === (Qk = bk.f.getItem("showFriendOnlineToasts")) || void 0 === Qk || Qk,
+               useProfanityFilter: null === (dC = nC.i.getItem("UseProfanityFilter")) || void 0 === dC || dC,
+               showChat: null === (mC = nC.i.getItem("showChat")) || void 0 === mC || mC,
+               showNewItemIndicator: null === (HC = nC.i.getItem("showNewItemIndicator")) || void 0 === HC || HC,
+               showFriendOnlineToasts: null === (EC = nC.i.getItem("showFriendOnlineToasts")) || void 0 === EC || EC,
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L281-L282` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L285-L286) · [Before (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L281-L282)

```diff
-                 const ek = bk.f.getItem("friendRequestNotifications");
-                 return null !== (kk = Yk.e.find((kk => kk === ek))) && void 0 !== kk ? kk : "toastAndTray"
+                 const zC = nC.i.getItem("friendRequestNotifications");
+                 return null !== (CC = AC.b.find((CC => CC === zC))) && void 0 !== CC ? CC : "toastAndTray"
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L284-L302` → after: `L288-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L288-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L288-L306) · [Before (L284-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L284-L302)

```diff
-               touchscreenSensitivity: null !== (vk = bk.f.getItem("touchscreenSensitivity")) && void 0 !== vk ? vk : 150,
-               mouseSensitivity: null !== (Ek = bk.f.getItem("mouseSensitivity")) && void 0 !== Ek ? Ek : 15,
-               showCoordinates: null !== (hk = bk.f.getItem("showCoordinates")) && void 0 !== hk && hk,
-               showChunkCoordinates: null !== (ak = bk.f.getItem("showChunkCoordinates")) && void 0 !== ak && ak,
-               showFPS: null !== (Wk = bk.f.getItem("showFPS")) && void 0 !== Wk && Wk,
-               disableBunnyHopping: null !== (tk = bk.f.getItem("disableBunnyHopping")) && void 0 !== tk && tk,
-               disableTexAtlas: null !== (Xk = bk.f.getItem("disableTexAtlas")) && void 0 !== Xk && Xk,
-               disableFullscreen: null !== (Bk = bk.f.getItem("disableFullscreen")) && void 0 !== Bk && Bk,
-               ezBridging: null === (ck = bk.f.getItem("ezBridging")) || void 0 === ck || ck,
-               ezTowering: null === (Tk = bk.f.getItem("ezTowering")) || void 0 === Tk || Tk,
-               crouchIsToggle: null !== (Zk = bk.f.getItem("crouchIsToggle")) && void 0 !== Zk && Zk,
-               vibration: null === (Ok = bk.f.getItem("vibration")) || void 0 === Ok || Ok,
-               hideUiIsToggle: null !== (gk = bk.f.getItem("hideUiIsToggle")) && void 0 !== gk && gk,
-               enableLighting: null !== (Gk = bk.f.getItem("enableLighting")) && void 0 !== Gk && Gk,
-               showFog: null !== (Nk = bk.f.getItem("showFog")) && void 0 !== Nk && Nk,
-               fogChunkDistance: null !== (Rk = bk.f.getItem("fogChunkDistance")) && void 0 !== Rk ? Rk : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (lC = nC.i.getItem("touchscreenSensitivity")) && void 0 !== lC ? lC : 150,
+               mouseSensitivity: null !== (XC = nC.i.getItem("mouseSensitivity")) && void 0 !== XC ? XC : 15,
+               showCoordinates: null !== (cC = nC.i.getItem("showCoordinates")) && void 0 !== cC && cC,
+               showChunkCoordinates: null !== (uC = nC.i.getItem("showChunkCoordinates")) && void 0 !== uC && uC,
+               showFPS: null !== (rC = nC.i.getItem("showFPS")) && void 0 !== rC && rC,
+               disableBunnyHopping: null !== (sC = nC.i.getItem("disableBunnyHopping")) && void 0 !== sC && sC,
+               disableTexAtlas: null !== (TC = nC.i.getItem("disableTexAtlas")) && void 0 !== TC && TC,
+               disableFullscreen: null !== (aC = nC.i.getItem("disableFullscreen")) && void 0 !== aC && aC,
+               ezBridging: null === (tC = nC.i.getItem("ezBridging")) || void 0 === tC || tC,
+               ezTowering: null === (DC = nC.i.getItem("ezTowering")) || void 0 === DC || DC,
+               crouchIsToggle: null !== (jC = nC.i.getItem("crouchIsToggle")) && void 0 !== jC && jC,
+               vibration: null === (yC = nC.i.getItem("vibration")) || void 0 === yC || yC,
+               hideUiIsToggle: null !== (LC = nC.i.getItem("hideUiIsToggle")) && void 0 !== LC && LC,
+               enableLighting: null !== (UC = nC.i.getItem("enableLighting")) && void 0 !== UC && UC,
+               showFog: null !== (BC = nC.i.getItem("showFog")) && void 0 !== BC && BC,
+               fogChunkDistance: null !== (OC = nC.i.getItem("fogChunkDistance")) && void 0 !== OC ? OC : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L306-L313` → after: `L310-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L310-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L310-L317) · [Before (L306-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L306-L313)

```diff
-               useWebGpu: null !== (ie = bk.f.getItem(fk.jc)) && void 0 !== ie ? ie : ne,
-               pixelScale: null !== (De = bk.f.getItem("pixelScale")) && void 0 !== De ? De : (0, xk.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (fe = bk.f.getItem("pixelSmoothing")) || void 0 === fe || fe,
-               showChunkBorders: null !== (Se = bk.f.getItem("showChunkBorders")) && void 0 !== Se && Se,
-               showWeaponRaycasts: null !== (be = bk.f.getItem("showWeaponRaycasts")) && void 0 !== be && be,
-               chunkFadeIn: null === (re = bk.f.getItem("chunkFadeIn")) || void 0 === re || re,
-               enableClipping: null !== (Pe = bk.f.getItem("enableClipping")) && void 0 !== Pe && Pe,
-               clipDurationSeconds: null !== (me = bk.f.getItem("clipDurationSeconds")) && void 0 !== me ? me : Lk.i,
+               useWebGpu: null !== (zz = nC.i.getItem(wC.hc)) && void 0 !== zz ? zz : Nz,
+               pixelScale: null !== (Zz = nC.i.getItem("pixelScale")) && void 0 !== Zz ? Zz : (0, NC.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (Qz = nC.i.getItem("pixelSmoothing")) || void 0 === Qz || Qz,
+               showChunkBorders: null !== (wz = nC.i.getItem("showChunkBorders")) && void 0 !== wz && wz,
+               showWeaponRaycasts: null !== (bz = nC.i.getItem("showWeaponRaycasts")) && void 0 !== bz && bz,
+               chunkFadeIn: null === (nz = nC.i.getItem("chunkFadeIn")) || void 0 === nz || nz,
+               enableClipping: null !== (fz = nC.i.getItem("enableClipping")) && void 0 !== fz && fz,
+               clipDurationSeconds: null !== (oz = nC.i.getItem("clipDurationSeconds")) && void 0 !== oz ? oz : xC.e,
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L315` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L319) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L315)

```diff
-                 null === bk.f.getItem(sk) && (120 === bk.f.getItem("cameraFOV") && bk.f.removeItem("cameraFOV"), bk.f.setItem(sk, !0));
+                 null === nC.i.getItem(vC) && (120 === nC.i.getItem("cameraFOV") && nC.i.removeItem("cameraFOV"), nC.i.setItem(vC, !0));
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L320` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L324) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L320)

```diff
-                     return [ik, null !== (ek = bk.f.getItem(ik)) && void 0 !== ek ? ek : Dk]
+                     return [ZC, null !== (zC = nC.i.getItem(ZC)) && void 0 !== zC ? zC : QC]
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L322` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L326) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L322)

```diff
-                 return fk.zb.includes(ek.joystickMode) || (console.warn("Dropping stored joystick mode", ek.joystickMode), bk.f.removeItem("joystickMode"), ek.joystickMode = kk.joystickMode), ek
+                 return wC.yb.includes(zC.joystickMode) || (console.warn("Dropping stored joystick mode", zC.joystickMode), nC.i.removeItem("joystickMode"), zC.joystickMode = CC.joystickMode), zC
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L330` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L334) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L330)

```diff
-             const ik = null !== (ek = bk.f.getItem(Uk.c)) && void 0 !== ek ? ek : (0, nk.f)();
+             const ZC = null !== (zC = nC.i.getItem(gC.d)) && void 0 !== zC ? zC : (0, MC.g)();
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L340` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L344) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L340)

```diff
-             return null !== bk.f.getItem(Uk.c)
+             return null !== nC.i.getItem(gC.d)
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L346` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L350) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L346)

```diff
-               for (const ek in kk) Dk.j.tm(`appManagerUpdated|${ek}`, kk[ek])
+               for (const zC in CC) QC.o.bp(`appManagerUpdated|${zC}`, CC[zC])
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L354` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L358) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L354)

```diff
-               for (const fk in kk)(0, Sk.Sd)(He[fk], kk[fk]) || (ek[fk] = kk[fk], ik = !0);
+               for (const wC in CC)(0, bC.Td)(gz[wC], CC[wC]) || (zC[wC] = CC[wC], ZC = !0);
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L361` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L365) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L361)

```diff
-                 bk.f.setItem("UseProfanityFilter", kk.useProfanityFilter), bk.f.setItem("showChat", kk.showChat), bk.f.setItem("showNewItemIndicator", kk.showNewItemIndicator), bk.f.setItem("showFriendOnlineToasts", kk.showFriendOnlineToasts), bk.f.setItem("friendRequestNotificat … [truncated]
+                 nC.i.setItem("UseProfanityFilter", CC.useProfanityFilter), nC.i.setItem("showChat", CC.showChat), nC.i.setItem("showNewItemIndicator", CC.showNewItemIndicator), nC.i.setItem("showFriendOnlineToasts", CC.showFriendOnlineToasts), nC.i.setItem("friendRequestNotificat … [truncated]
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L364` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L368) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L364)

```diff
-                     for (const Dk of Object.keys(ik)) kk[Dk] !== ek[Dk] && (kk[Dk] === ik[Dk] ? bk.f.removeItem(Dk) : bk.f.setItem(Dk, kk[Dk]))
+                     for (const QC of Object.keys(ZC)) CC[QC] !== zC[QC] && (CC[QC] === ZC[QC] ? nC.i.removeItem(QC) : nC.i.setItem(QC, CC[QC]))
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L367` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L371) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L367)

```diff
-               void 0 !== ek.soundVolume && bk.f.setItem("soundVol", ek.soundVolume), void 0 !== ek.musicVolume && bk.f.setItem("musicVol", ek.musicVolume), void 0 !== ek.showDistantNametags && bk.f.setItem("showDistantNametags", ek.showDistantNametags), void 0 !== ek.showDebugOve … [truncated]
+               void 0 !== zC.soundVolume && nC.i.setItem("soundVol", zC.soundVolume), void 0 !== zC.musicVolume && nC.i.setItem("musicVol", zC.musicVolume), void 0 !== zC.showDistantNametags && nC.i.setItem("showDistantNametags", zC.showDistantNametags), void 0 !== zC.showDebugOve … [truncated]
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L378-L379` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L382-L383) · [Before (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L378-L379)

```diff
-               const ek = le() ? null : (0, nk.c)(kk);
-               return null !== ek && void 0 !== ek ? ek : He.clientEscMenuOptions.antiAliasing
+               const zC = pz() ? null : (0, MC.b)(CC);
+               return null !== zC && void 0 !== zC ? zC : gz.clientEscMenuOptions.antiAliasing
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L382-L394` → after: `L386-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L386-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L386-L401) · [Before (L382-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L382-L394)

```diff
-               (0, nk.e)(kk);
-               const ek = le() ? He.clientEscMenuOptions.antiAliasing : (0, nk.f)();
-               if (ek !== He.clientEscMenuOptions.antiAliasing) {
-                 const kk = {
-                   ...He.clientEscMenuOptions,
-                   antiAliasing: ek
-                 };
-                 Object.assign(He, {
-                   clientEscMenuOptions: kk
-                 }), pe({
-                   clientEscMenuOptions: kk
-                 })
-               }
+               (0, MC.f)(CC);
+               const zC = pz() ? gz.clientEscMenuOptions.antiAliasing : (0, MC.g)();
+               zC !== gz.clientEscMenuOptions.antiAliasing && this.setEscMenuOptionsUnstored({
+                 antiAliasing: zC
+               })
+             }
+             setEscMenuOptionsUnstored(CC) {
+               const zC = {
+                 ...gz.clientEscMenuOptions,
+                 ...CC
+               };
+               Object.assign(gz, {
+                 clientEscMenuOptions: zC
+               }), Pz({
+                 clientEscMenuOptions: zC
+               })
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L397` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L404) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L397)

```diff
-               let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Hk.l)(),
+               let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, SC.n)(),
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L399-L400` → after: `L406-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L406-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L406-L412) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L399-L400)

```diff
-               const ik = (0, Hk.u)(kk, ek);
-               return (0, Hk.z)() && !0 === bk.f.getItem(fk.jc) && bk.f.removeItem(fk.jc), ik
+               const ZC = (0, SC.t)(CC, zC);
+               return (0, SC.B)() && !0 === nC.i.getItem(wC.hc) && nC.i.removeItem(wC.hc), ZC
+             }
+             holdWebGpuForAccountLoss(CC) {
+               (0, SC.e)(CC) && (0, SC.B)() && Mz && gz.clientEscMenuOptions.useWebGpu && (Wz = Fz(), this.setEscMenuOptionsUnstored({
+                 useWebGpu: !1
+               }))
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L403` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L415) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L403)

```diff
-               return (0, Hk.F)() || !0 === bk.f.getItem(wk.H)
+               return (0, SC.H)() || !0 === nC.i.getItem(pC.L)
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L406` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L418) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L406)

```diff
-               return (0, Hk.z)()
+               return (0, SC.B)()
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L409` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L421) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L409)

```diff
-               return Ue ? xe : null
+               return Mz ? Wz : null
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L412` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L424) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L412)

```diff
-               !0 === bk.f.getItem(wk.H) && (0, xk.hasUsableWebGpuAdapter)()
+               !0 === nC.i.getItem(pC.L) && (0, NC.hasUsableWebGpuAdapter)()
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L456` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L468) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L456)

```diff
-         }, , , , (kk, ek, ik) => {
+         }, , , , , , , , (CC, zC, ZC) => {
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L458-L462` → after: `L470-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L470-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L470-L474) · [Before (L458-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L458-L462)

```diff
-             d: () => rk,
-             g: () => Sk,
-             i: () => Mk,
-             j: () => mk,
-             k: () => Kk
+             e: () => fC,
+             h: () => bC,
+             k: () => FC,
+             o: () => qC,
+             q: () => WC
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L464` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L476) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L464)

```diff
-           var Dk = ik(29),
+           var QC = ZC(35),
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L474` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L486) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L474)

```diff
-               super(...arguments), this.Kl = !1, this.Ul = [], this.Al = {}
+               super(...arguments), this.kp = !1, this.RP = [], this.QG = {}
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L478` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L490) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L478)

```diff
-               this.Kl || !ik ? this.emit(kk, ek) : this.Ul.push({
+               this.kp || !ZC ? this.emit(CC, zC) : this.RP.push({
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L485-L486` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L497-L498) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L485-L486)

```diff
-               const Dk = this.Vl(kk, ek);
-               return this.on(kk, Dk), this.Al[kk] = (null !== (ik = this.Al[kk]) && void 0 !== ik ? ik : 0) + 1, {
+               const QC = this.wG(CC, zC);
+               return this.on(CC, QC), this.QG[CC] = (null !== (ZC = this.QG[CC]) && void 0 !== ZC ? ZC : 0) + 1, {
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L495` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L507) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L495)

```diff
-               const ik = this.Vl(kk, ek);
+               const ZC = this.wG(CC, zC);
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L504-L505` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L516-L517) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L504-L505)

```diff
-                 ik = this.Al[ek];
-               ik > 1 ? this.Al[ek] = ik - 1 : 1 === ik && delete this.Al[ek]
+                 ZC = this.QG[zC];
+               ZC > 1 ? this.QG[zC] = ZC - 1 : 1 === ZC && delete this.QG[zC]
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L512` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L524) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L512)

```diff
-                   console.error(`Error in PubSub listener for event ${kk}:`, Dk)
+                   console.error(`Error in PubSub listener for event ${CC}:`, QC)
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L517` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L529) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L517)

```diff
-               this.Kl = kk, kk && (this.Ul.forEach((kk => {
+               this.kp = CC, CC && (this.RP.forEach((CC => {
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L522-L523` → after: `L534-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L534-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L534-L535) · [Before (L522-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L522-L523)

```diff
-                 this.tm(ek, ik)
-               })), this.Ul = [])
+                 this.bp(zC, ZC)
+               })), this.RP = [])
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L526` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L538) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L526)

```diff
-               this.Ul = []
+               this.RP = []
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L532` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L544) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L532)

```diff
-             mk.Bl(!0)
+             qC.WG(!0)
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L541` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L553) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L541)

```diff
-         }, , , kk => {
+         }, , , , , , , CC => {
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L548` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L560) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L548)

```diff
-             this.sU = kk, this.context = ek, this.once = ik || !1
+             this.Qg = CC, this.context = zC, this.once = ZC || !1
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L554-L555` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L566-L567) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L554-L555)

```diff
-               Pk = ik ? ik + ek : ek;
-             return kk._events[Pk] ? kk._events[Pk].sU ? kk._events[Pk] = [kk._events[Pk], rk] : kk._events[Pk].push(rk) : (kk._events[Pk] = rk, kk._eventsCount++), kk
+               oC = ZC ? ZC + zC : zC;
+             return CC._events[oC] ? CC._events[oC].Qg ? CC._events[oC] = [CC._events[oC], fC] : CC._events[oC].push(fC) : (CC._events[oC] = fC, CC._eventsCount++), CC
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L559` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L571) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L559)

```diff
-             0 === --kk._eventsCount ? kk._events = new Dk : delete kk._events[ek]
+             0 === --CC._eventsCount ? CC._events = new QC : delete CC._events[zC]
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L571` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L583) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L571)

```diff
-             var ek = ik ? ik + kk : kk,
+             var zC = ZC ? ZC + CC : CC,
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L574-L575` → after: `L586-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L586-L587) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L574-L575)

```diff
-             if (Dk.sU) return [Dk.sU];
-             for (var fk = 0, Sk = Dk.length, bk = new Array(Sk); fk < Sk; fk++) bk[fk] = Dk[fk].sU;
+             if (QC.Qg) return [QC.Qg];
+             for (var wC = 0, bC = QC.length, nC = new Array(bC); wC < bC; wC++) nC[wC] = QC[wC].Qg;
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L578` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L590) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L578)

```diff
-             var ek = ik ? ik + kk : kk,
+             var zC = ZC ? ZC + CC : CC,
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L580` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L592) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L580)

```diff
-             return Dk ? Dk.sU ? 1 : Dk.length : 0
+             return QC ? QC.Qg ? 1 : QC.length : 0
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L582` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L594) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L582)

```diff
-             var rk = ik ? ik + kk : kk;
+             var fC = ZC ? ZC + CC : CC;
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L586-L587` → after: `L598-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L598-L599) · [Before (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L586-L587)

```diff
-             if (Mk.sU) {
-               switch (Mk.once && this.removeListener(kk, Mk.sU, void 0, !0), Kk) {
+             if (FC.Qg) {
+               switch (FC.once && this.removeListener(CC, FC.Qg, void 0, !0), WC) {
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L589` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L601) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L589)

```diff
-                   return Mk.sU.call(Mk.context), !0;
+                   return FC.Qg.call(FC.context), !0;
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L591` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L603) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L591)

```diff
-                   return Mk.sU.call(Mk.context, ek), !0;
+                   return FC.Qg.call(FC.context, zC), !0;
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L593` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L605) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L593)

```diff
-                   return Mk.sU.call(Mk.context, ek, Dk), !0;
+                   return FC.Qg.call(FC.context, zC, QC), !0;
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L595` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L607) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L595)

```diff
-                   return Mk.sU.call(Mk.context, ek, Dk, fk), !0;
+                   return FC.Qg.call(FC.context, zC, QC, wC), !0;
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L597` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L609) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L597)

```diff
-                   return Mk.sU.call(Mk.context, ek, Dk, fk, Sk), !0;
+                   return FC.Qg.call(FC.context, zC, QC, wC, bC), !0;
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L599` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L611) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L599)

```diff
-                   return Mk.sU.call(Mk.context, ek, Dk, fk, Sk, bk), !0
+                   return FC.Qg.call(FC.context, zC, QC, wC, bC, nC), !0
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L602` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L614) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L602)

```diff
-               Mk.sU.apply(Mk.context, Pk)
+               FC.Qg.apply(FC.context, oC)
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L605` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L617) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L605)

```diff
-               for (mk = 0; mk < nk; mk++) switch (Mk[mk].once && this.removeListener(kk, Mk[mk].sU, void 0, !0), Kk) {
+               for (qC = 0; qC < MC; qC++) switch (FC[qC].once && this.removeListener(CC, FC[qC].Qg, void 0, !0), WC) {
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L607` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L619) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L607)

```diff
-                   Mk[mk].sU.call(Mk[mk].context);
+                   FC[qC].Qg.call(FC[qC].context);
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L610` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L622) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L610)

```diff
-                   Mk[mk].sU.call(Mk[mk].context, ek);
+                   FC[qC].Qg.call(FC[qC].context, zC);
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L613` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L625) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L613)

```diff
-                   Mk[mk].sU.call(Mk[mk].context, ek, Dk);
+                   FC[qC].Qg.call(FC[qC].context, zC, QC);
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L616` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L628) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L616)

```diff
-                   Mk[mk].sU.call(Mk[mk].context, ek, Dk, fk);
+                   FC[qC].Qg.call(FC[qC].context, zC, QC, wC);
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L621` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L633) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L621)

```diff
-                   Mk[mk].sU.apply(Mk[mk].context, Pk)
+                   FC[qC].Qg.apply(FC[qC].context, oC)
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L630` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L642) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L630)

```diff
-             var Sk = ik ? ik + kk : kk;
+             var bC = ZC ? ZC + CC : CC;
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L634` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L646) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L634)

```diff
-             if (rk.sU) rk.sU !== ek || fk && !rk.once || Dk && rk.context !== Dk || bk(this, Sk);
+             if (fC.Qg) fC.Qg !== zC || wC && !fC.once || QC && fC.context !== QC || nC(this, bC);
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L636-L637` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L648-L649) · [Before (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L636-L637)

```diff
-               for (var Pk = 0, mk = [], Mk = rk.length; Pk < Mk; Pk++)(rk[Pk].sU !== ek || fk && !rk[Pk].once || Dk && rk[Pk].context !== Dk) && mk.push(rk[Pk]);
-               mk.length ? this._events[Sk] = 1 === mk.length ? mk[0] : mk : bk(this, Sk)
+               for (var oC = 0, qC = [], FC = fC.length; oC < FC; oC++)(fC[oC].Qg !== zC || wC && !fC[oC].once || QC && fC[oC].context !== QC) && qC.push(fC[oC]);
+               qC.length ? this._events[bC] = 1 === qC.length ? qC[0] : qC : nC(this, bC)
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L640` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L652) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L640)

```diff
-           }, rk.prototype.Gl = function(kk) {
+           }, fC.prototype.xG = function(CC) {
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L642` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L654) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L642)

```diff
-             return kk ? (ek = ik ? ik + kk : kk, this._events[ek] && bk(this, ek)) : (this._events = new Dk, this._eventsCount = 0), this
+             return CC ? (zC = ZC ? ZC + CC : CC, this._events[zC] && nC(this, zC)) : (this._events = new QC, this._eventsCount = 0), this
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L644` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L656) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L644)

```diff
-         }, , , , , , , , , (kk, ek, ik) => {
+         }, , , (CC, zC, ZC) => {
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L650-L651` → after: `L660-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L660-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L660-L663) · [Before (L650-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L650-L651)

```diff
-             h: () => Uk,
-             j: () => mk
+             i: () => WC,
+             k: () => NC,
+             m: () => gC,
+             q: () => qC
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L653` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L665) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L653)

```diff
-           var Dk = ik(47),
+           var QC = ZC(41),
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L655` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L667) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L655)

```diff
-             Sk = ik(52),
+             bC = ZC(43),
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L659` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L671) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L659)

```diff
-               return `bloxd-${kk}`
+               return `bloxd-${CC}`
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L690` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L702) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L690)

```diff
-                 return console.error("Caught error", ik, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (ek = this._cachedVals[kk]) && void 0 !== ek ? ek : null
+                 return console.error("Caught error", ZC, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (zC = this._cachedVals[CC]) && void 0 !== zC ? zC : null
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L724` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L736) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L724)

```diff
-                 return console.error("Caught error", ik, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", ZC, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L755` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L767) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L755)

```diff
-                 return console.error("Caught error", ik, "when attempting to read from sessionStorage."), null !== (ek = this._cachedVals[kk]) && void 0 !== ek ? ek : null
+                 return console.error("Caught error", ZC, "when attempting to read from sessionStorage."), null !== (zC = this._cachedVals[CC]) && void 0 !== zC ? zC : null
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L782` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L794) · [Before (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L782)

```diff
-                 return null !== (Dk = this._cachedVals[kk]) && void 0 !== Dk ? Dk : null
+                 return null !== (QC = this._cachedVals[CC]) && void 0 !== QC ? QC : null
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L804` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L816) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L804)

```diff
-                   for (let Dk, fk, Sk = 0, bk = 0; fk = kk.charAt(bk++); ~fk && (Dk = Sk % 4 ? 64 * Dk + fk : fk, Sk++ % 4) ? ek += String.fromCharCode(255 & Dk >> (-2 * Sk & 6)) : 0) fk = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(fk);
+                   for (let QC, wC, bC = 0, nC = 0; wC = CC.charAt(nC++); ~wC && (QC = bC % 4 ? 64 * QC + wC : wC, bC++ % 4) ? zC += String.fromCharCode(255 & QC >> (-2 * bC & 6)) : 0) wC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(wC);
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L811` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L823) · [Before (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L811)

```diff
-               return bk ? fk = bk : (fk = Hk.FZAkcO(fk), kk[Sk] = fk), fk
+               return nC ? wC = nC : (wC = SC.FZAkcO(wC), CC[bC] = wC), wC
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L853` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L865) · [Before (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L853)

```diff
-         }, , , , , , , , , (kk, ek, ik) => {
+         }, , , (CC, zC, ZC) => {
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L985` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L997) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L985)

```diff
-                 return kk instanceof this ? kk : Sk.resolve(new this(fk), kk)
+                 return CC instanceof this ? CC : bC.resolve(new this(wC), CC)
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1034` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1046) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1034)

```diff
-                 return this.state !== Pk ? Kk(ik, this.state === rk ? kk : ek, this.outcome) : this.queue.push(new Mk(ik, kk, ek)), ik
+                 return this.state !== oC ? WC(ZC, this.state === fC ? CC : zC, this.outcome) : this.queue.push(new FC(ZC, CC, zC)), ZC
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1407` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1419) · [Before (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1407)

```diff
-                       return kk ? ek : qk(ek)
+                       return CC ? zC : dC(zC)
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1683` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1695) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1683)

```diff
-                   kk instanceof ArrayBuffer ? (Dk = kk, fk += De) : (Dk = kk.buffer, "[object Int8Array]" === ik ? fk += Se : "[object Uint8Array]" === ik ? fk += be : "[object Uint8ClampedArray]" === ik ? fk += re : "[object Int16Array]" === ik ? fk += Pe : "[object Uint16Array] … [truncated]
+                   CC instanceof ArrayBuffer ? (QC = CC, wC += Zz) : (QC = CC.buffer, "[object Int8Array]" === ZC ? wC += wz : "[object Uint8Array]" === ZC ? wC += bz : "[object Uint8ClampedArray]" === ZC ? wC += nz : "[object Int16Array]" === ZC ? wC += fz : "[object Uint16Array] … [truncated]
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1707` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1719) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1707)

```diff
-                   case De:
+                   case Zz:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1709` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1721) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1709)

```diff
-                   case fe:
+                   case Qz:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1713` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1725) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1713)

```diff
-                   case Se:
+                   case wz:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1715` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1727) · [Before (L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1715)

```diff
-                   case be:
+                   case bz:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1717` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1729) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1717)

```diff
-                   case re:
+                   case nz:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1719` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1731) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1719)

```diff
-                   case Pe:
+                   case fz:
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1721` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1733) · [Before (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1721)

```diff
-                   case Me:
+                   case qz:
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1723` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1735) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1723)

```diff
-                   case me:
+                   case oz:
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1725` → after: `L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1737) · [Before (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1725)

```diff
-                   case Ke:
+                   case Fz:
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L1727` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1739) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1727)

```diff
-                   case xe:
+                   case Wz:
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L1729` → after: `L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1741) · [Before (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1729)

```diff
-                   case ne:
+                   case Nz:
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L1767` → after: `L1779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1779) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1767)

```diff
-                 return ik.Rl = Ye, fk
+                 return ZC.JG = Rz, wC
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L1789` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1801) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1789)

```diff
-                         Dk && (Dk = fk.Rl.deserialize(Dk)), ek(Dk)
+                         QC && (QC = wC.JG.deserialize(QC)), zC(QC)
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L1809` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1821) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1809)

```diff
-                             if (mk && (mk = fk.Rl.deserialize(mk)), void 0 !== (mk = kk(mk, Pk.key, rk + 1))) return void ek(mk)
+                             if (qC && (qC = wC.JG.deserialize(qC)), void 0 !== (qC = CC(qC, oC.key, fC + 1))) return void zC(qC)
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L1829` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L1841) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L1829)

```diff
-                     Pk.Rl.serialize(ek, (function(ek, mk) {
+                     oC.JG.serialize(zC, (function(zC, qC) {
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2040` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2052) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2040)

```diff
-                 return ik.keyPrefix = ae(kk, ek._defaultConfig), te() ? (ek._dbInfo = ik, ik.Rl = Ye, mk.resolve()) : mk.reject()
+                 return ZC.keyPrefix = cz(CC, zC._defaultConfig), rz() ? (zC._dbInfo = ZC, ZC.JG = Rz, qC.resolve()) : qC.reject()
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2060` → after: `L2072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2072) · [Before (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2060)

```diff
-                   return Dk && (Dk = ek.Rl.deserialize(Dk)), Dk
+                   return QC && (QC = zC.JG.deserialize(QC)), QC
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2072` → after: `L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2084) · [Before (L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2072)

```diff
-                         if (mk && (mk = ek.Rl.deserialize(mk)), void 0 !== (mk = kk(mk, Pk.substring(fk), bk++))) return mk
+                         if (qC && (qC = zC.JG.deserialize(qC)), void 0 !== (qC = CC(qC, oC.substring(wC), nC++))) return qC
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2130` → after: `L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2142) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2130)

```diff
-                     bk.Rl.serialize(ek, (function(ek, Dk) {
+                     nC.JG.serialize(zC, (function(zC, QC) {
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2350` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2362) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2350)

```diff
-         }, , , , , (kk, ek, ik) => {
+         }, , (CC, zC, ZC) => {
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2419` → after: `L2431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2431) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2419)

```diff
-         }, , , (kk, ek, ik) => {
+         }, , (CC, zC, ZC) => {
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2421` → after: `L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2433) · [Before (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2421)

```diff
-             b: () => fk
+             d: () => wC
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2427` → after: `L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2439) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2427)

```diff
-             return null !== (kk = Dk.f.getItem("soundVol")) && void 0 !== kk ? kk : .5
+             return null !== (CC = QC.i.getItem("soundVol")) && void 0 !== CC ? CC : .5
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2429-L2432` → after: `L2441-L2444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2441-L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2441-L2444) · [Before (L2429-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2429-L2432)

```diff
-         }, , , , , (kk, ek, ik) => {
-           kk.exports = ik(66)
-         }, , , , , , (kk, ek, ik) => {
-           var Dk = ik(72),
+         }, , , (CC, zC, ZC) => {
+           CC.exports = ZC(56)
+         }, , , , , , , , (CC, zC, ZC) => {
+           var QC = ZC(58),
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2543-L2544` → after: `L2555-L2556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2555-L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2555-L2556) · [Before (L2543-L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2543-L2544)

```diff
-                   case fk:
-                   case Sk:
+                   case wC:
+                   case bC:
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2565` → after: `L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2577) · [Before (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2565)

```diff
-                   return null === kk || "object" !== typeof kk ? null : "function" === typeof(kk = xk && kk[xk] || kk["@@iterator"]) ? kk : null
+                   return null === CC || "object" !== typeof CC ? null : "function" === typeof(CC = NC && CC[NC] || CC["@@iterator"]) ? CC : null
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L2719` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2731) · [Before (L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2719)

```diff
-         }, , , , , , kk => {
+         }, , CC => {
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L2752` → after: `L2764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2764) · [Before (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2752)

```diff
-         }, , , (kk, ek, ik) => {
+         }, , (CC, zC, ZC) => {
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L2759-L2763` → after: `L2771-L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2771-L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2771-L2775) · [Before (L2759-L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2759-L2763)

```diff
-           }(), kk.exports = ik(81)
-         }, , , , , , (kk, ek, ik) => {
-           var Dk = ik(60),
-             fk = ik(72),
-             Sk = ik(88);
+           }(), CC.exports = ZC(65)
+         }, , , , , (CC, zC, ZC) => {
+           var QC = ZC(48),
+             wC = ZC(58),
+             bC = ZC(68);
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L2850` → after: `L2862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2862) · [Before (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2850)

```diff
-             }(ek) && (null === ik ? kk.removeAttribute(ek) : kk.setAttribute(ek, "" + ik)) : fk.mustUseProperty ? kk[fk.propertyName] = null === ik ? 3 !== fk.type && "" : ik : (ek = fk.attributeName, Dk = fk.attributeNamespace, null === ik ? kk.removeAttribute(ek) : (ik = 3 ===  … [truncated]
+             }(zC) && (null === ZC ? CC.removeAttribute(zC) : CC.setAttribute(zC, "" + ZC)) : wC.mustUseProperty ? CC[wC.propertyName] = null === ZC ? 3 !== wC.type && "" : ZC : (zC = wC.attributeName, QC = wC.attributeNamespace, null === ZC ? CC.removeAttribute(zC) : (ZC = 3 ===  … [truncated]
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L2891` → after: `L2903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L2903) · [Before (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2891)

```diff
-             return null === kk || "object" !== typeof kk ? null : "function" === typeof(kk = Bk && kk[Bk] || kk["@@iterator"]) ? kk : null
+             return null === CC || "object" !== typeof CC ? null : "function" === typeof(CC = aC && CC[aC] || CC["@@iterator"]) ? CC : null
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L2989` → after: `L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3001) · [Before (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2989)

```diff
-               case jk:
+               case iC:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L2991` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3003) · [Before (L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2991)

```diff
-               case Ak:
+               case IC:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L2993` → after: `L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3005) · [Before (L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2993)

```diff
-               case dk:
+               case eC:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L2995` → after: `L3007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3007) · [Before (L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2995)

```diff
-               case sk:
+               case vC:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L2997` → after: `L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3009) · [Before (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2997)

```diff
-               case qk:
+               case dC:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L2999` → after: `L3011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3011) · [Before (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L2999)

```diff
-               case Ik:
+               case mC:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L3003` → after: `L3015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3015) · [Before (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3003)

```diff
-               case Fk:
+               case KC:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L3005` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3017) · [Before (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3005)

```diff
-               case Vk:
+               case hC:
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L3007` → after: `L3019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3019) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3007)

```diff
-               case uk:
+               case YC:
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3010` → after: `L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3022) · [Before (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3010)

```diff
-               case zk:
+               case HC:
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3012` → after: `L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3024) · [Before (L3012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3012)

```diff
-               case vk:
+               case lC:
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3014` → after: `L3026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3026) · [Before (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3014)

```diff
-               case Qk:
+               case EC:
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3098` → after: `L3110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3110) · [Before (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3098)

```diff
-               checked: null != ik ? ik : kk._wrapperState.initialChecked
+               checked: null != ZC ? ZC : CC._wrapperState.initialChecked
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L3398` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3410) · [Before (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3398)

```diff
-             kk: switch (ek) {
+             CC: switch (zC) {
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L3464` → after: `L3476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3476) · [Before (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3464)

```diff
-             return 3 === ek.tag ? ik : null
+             return 3 === zC.tag ? ZC : null
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L3536` → after: `L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3548) · [Before (L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3536)

```diff
-                 return ik.stateNode.current === ik ? kk : ek
+                 return ZC.stateNode.current === ZC ? CC : zC
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L3748` → after: `L3760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3760) · [Before (L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3748)

```diff
-             return 0 !== (kk = -1073741825 & kk.pendingLanes) ? kk : 1073741824 & kk ? 1073741824 : 0
+             return 0 !== (CC = -1073741825 & CC.pendingLanes) ? CC : 1073741824 & CC ? 1073741824 : 0
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L3872` → after: `L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3884) · [Before (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3872)

```diff
-             return KD = fk.slice(kk, 1 < ek ? 1 - ek : void 0)
+             return oQ = wC.slice(CC, 1 < zC ? 1 - zC : void 0)
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L3877` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3889) · [Before (L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3877)

```diff
-             return "charCode" in kk ? 0 === (kk = kk.charCode) && 13 === ek && (kk = 13) : kk = ek, 10 === kk && (kk = 13), 32 <= kk || 13 === kk ? kk : 0
+             return "charCode" in CC ? 0 === (CC = CC.charCode) && 13 === zC && (CC = 13) : CC = zC, 10 === CC && (CC = 13), 32 <= CC || 13 === CC ? CC : 0
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L3891` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L3903) · [Before (L3891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L3891)

```diff
-               return this.isDefaultPrevented = (null != fk.defaultPrevented ? fk.defaultPrevented : !1 === fk.returnValue) ? UD : HD, this.isPropagationStopped = HD, this
+               return this.isDefaultPrevented = (null != wC.defaultPrevented ? wC.defaultPrevented : !1 === wC.returnValue) ? WQ : NQ, this.isPropagationStopped = NQ, this
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L4251` → after: `L4263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4263) · [Before (L4251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4251)

```diff
-               kk: {
+               CC: {
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L4293` → after: `L4305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4305) · [Before (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4293)

```diff
-             var Dk = ik.window === ik ? ik.document : 9 === ik.nodeType ? ik : ik.ownerDocument;
+             var QC = ZC.window === ZC ? ZC.document : 9 === ZC.nodeType ? ZC : ZC.ownerDocument;
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L4331` → after: `L4343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4343) · [Before (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4331)

```diff
-               kk: {
+               CC: {
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L4357` → after: `L4369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4369) · [Before (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4357)

```diff
-           function of(kk) {
+           function Tw(CC) {
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L4397` → after: `L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4409) · [Before (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4397)

```diff
-             if (0 === (1 & ek) && 0 === (2 & ek) && null !== Dk) kk: for (;;) {
+             if (0 === (1 & zC) && 0 === (2 & zC) && null !== QC) CC: for (;;) {
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L4431` → after: `L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4443) · [Before (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4431)

```diff
-               kk: {
+               CC: {
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L4481-L4483` → after: `L4493-L4495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4493-L4495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4493-L4495) · [Before (L4481-L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4481-L4483)

```diff
-                     case vi:
-                     case Ei:
-                     case ai:
+                     case HZ:
+                     case EZ:
+                     case lZ:
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L4486` → after: `L4498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4498) · [Before (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4486)

```diff
-                     case Wi:
+                     case XZ:
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L4526-L4527` → after: `L4538-L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4538-L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4538-L4539) · [Before (L4526-L4527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4526-L4527)

```diff
-                 if (Pk = "mouseout" === kk || "pointerout" === kk, (!(rk = "mouseover" === kk || "pointerover" === kk) || 0 !== (16 & ek) || !(mk = ik.relatedTarget || ik.fromElement) || !wS(mk) && !mk[US]) && (Pk || rk) && (rk = fk.window === fk ? fk : (rk = fk.ownerDocument) ?  … [truncated]
-                   if (Mk = sD, Hk = "onMouseLeave", xk = "onMouseEnter", Uk = "mouse", "pointerout" !== kk && "pointerover" !== kk || (Mk = tD, Hk = "onPointerLeave", xk = "onPointerEnter", Uk = "pointer"), Kk = null == Pk ? rk : pS(Pk), nk = null == mk ? rk : pS(mk), (rk = new M … [truncated]
+                 if (oC = "mouseout" === CC || "pointerout" === CC, (!(fC = "mouseover" === CC || "pointerover" === CC) || 0 !== (16 & zC) || !(qC = ZC.relatedTarget || ZC.fromElement) || !Nb(qC) && !qC[Fb]) && (oC || fC) && (fC = wC.window === wC ? wC : (fC = wC.ownerDocument) ?  … [truncated]
+                   if (FC = JQ, SC = "onMouseLeave", NC = "onMouseEnter", gC = "mouse", "pointerout" !== CC && "pointerover" !== CC || (FC = cQ, SC = "onPointerLeave", NC = "onPointerEnter", gC = "pointer"), WC = null == oC ? fC : gb(oC), MC = null == qC ? fC : gb(qC), (fC = new F … [truncated]
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L4573` → after: `L4585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4585) · [Before (L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4573)

```diff
-                 if (ZD) kk: {
+                 if (tQ) CC: {
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L4591` → after: `L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4603) · [Before (L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4591)

```diff
-                 }), pk ? yk.data = pk : null !== (pk = kf(ik)) && (yk.data = pk))), (pk = gD ? function(kk, ek) {
+                 }), GC ? RC.data = GC : null !== (GC = OQ(ZC)) && (RC.data = GC))), (GC = jQ ? function(CC, zC) {
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L4829` → after: `L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4841) · [Before (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4829)

```diff
-             kb = void 0 !== TS ? TS : function() {},
+             Bb = void 0 !== sb ? sb : function() {},
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L4834` → after: `L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4846) · [Before (L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4834)

```diff
-             Sb = 1e4 > fb ? oS : function() {
+             zn = 1e4 > Cn ? Tb : function() {
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L4840` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4852) · [Before (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4840)

```diff
-               case OS:
+               case tb:
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L4842` → after: `L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4854) · [Before (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4842)

```diff
-               case gS:
+               case Db:
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L4844` → after: `L4856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4856) · [Before (L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4844)

```diff
-               case GS:
+               case jb:
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L4846` → after: `L4858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4858) · [Before (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4846)

```diff
-               case NS:
+               case yb:
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L4848` → after: `L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L4860) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L4848)

```diff
-               case RS:
+               case Lb:
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L5001` → after: `L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5013) · [Before (L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5001)

```diff
-               null === ik ? ek.next = ek : (ek.next = ik.next, ik.next = ek), kk.pending = ek
+               null === ZC ? zC.next = zC : (zC.next = ZC.next, ZC.next = zC), CC.pending = zC
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L5021` → after: `L5033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5033) · [Before (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5021)

```diff
-                   null === Sk ? fk = Sk = bk : Sk = Sk.next = bk, ik = ik.next
+                   null === bC ? wC = bC = nC : bC = bC.next = nC, ZC = ZC.next
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L5023` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5035) · [Before (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5023)

```diff
-                 null === Sk ? fk = Sk = ek : Sk = Sk.next = ek
+                 null === bC ? wC = bC = zC : bC = bC.next = zC
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L5033` → after: `L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5045) · [Before (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5033)

```diff
-             null === (kk = ik.lastBaseUpdate) ? ik.firstBaseUpdate = ek : kk.next = ek, ik.lastBaseUpdate = ek
+             null === (CC = ZC.lastBaseUpdate) ? ZC.firstBaseUpdate = zC : CC.next = zC, ZC.lastBaseUpdate = zC
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L5046` → after: `L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5058) · [Before (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5046)

```diff
-               mk.next = null, null === rk ? bk = Mk : rk.next = Mk, rk = mk;
+               qC.next = null, null === fC ? nC = FC : fC.next = FC, fC = qC;
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L5050` → after: `L5062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5062) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5050)

```diff
-                 xk !== rk && (null === xk ? Kk.firstBaseUpdate = Mk : xk.next = Mk, Kk.lastBaseUpdate = mk)
+                 NC !== fC && (null === NC ? WC.firstBaseUpdate = FC : NC.next = FC, WC.lastBaseUpdate = qC)
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L5066` → after: `L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5078) · [Before (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5066)

```diff
-                   kk: {
+                   CC: {
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L5119` → after: `L5131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5131) · [Before (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5119)

```diff
-             ik = null === (ik = ik(Dk, ek = kk.memoizedState)) || void 0 === ik ? ek : fk({}, ek, ik), kk.memoizedState = ik, 0 === kk.lanes && (kk.updateQueue.baseState = ik)
+             ZC = null === (ZC = ZC(QC, zC = CC.memoizedState)) || void 0 === ZC ? zC : wC({}, zC, ZC), CC.memoizedState = ZC, 0 === CC.lanes && (CC.updateQueue.baseState = ZC)
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L5156` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5168) · [Before (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5156)

```diff
-             return "object" === typeof Sk && null !== Sk ? Sk = Cb(Sk) : (fk = IS(ek) ? uS : VS.current, Sk = (Dk = null !== (Dk = ek.contextTypes) && void 0 !== Dk) ? qS(kk, fk) : dS), ek = new ek(ik, Sk), kk.memoizedState = null !== ek.state && void 0 !== ek.state ? ek.state :  … [truncated]
+             return "object" === typeof bC && null !== bC ? bC = Rn(bC) : (wC = hb(zC) ? vb : Ib.current, bC = (QC = null !== (QC = zC.contextTypes) && void 0 !== QC) ? eb(CC, wC) : Jb), zC = new zC(ZC, bC), CC.memoizedState = null !== zC.state && void 0 !== zC.state ? zC.state :  … [truncated]
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L5167` → after: `L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5179) · [Before (L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5167)

```diff
-             "object" === typeof Sk && null !== Sk ? fk.context = Cb(Sk) : (Sk = IS(ek) ? uS : VS.current, fk.context = qS(kk, Sk)), ub(kk, ik, fk, Dk), fk.state = kk.memoizedState, "function" === typeof(Sk = ek.getDerivedStateFromProps) && (zb(kk, ek, Sk, ik), fk.state = kk.memoi … [truncated]
+             "object" === typeof bC && null !== bC ? wC.context = Rn(bC) : (bC = hb(zC) ? vb : Ib.current, wC.context = eb(CC, bC)), hn(CC, ZC, wC, QC), wC.state = CC.memoizedState, "function" === typeof(bC = zC.getDerivedStateFromProps) && (dn(CC, zC, bC, ZC), wC.state = CC.memoi … [truncated]
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L5219` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5231) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5219)

```diff
-               return ek.index = Dk, kk ? null !== (Dk = ek.alternate) ? (Dk = Dk.index) < ik ? (ek.flags = 2, ik) : Dk : (ek.flags = 2, ik) : ik
+               return zC.index = QC, CC ? null !== (QC = zC.alternate) ? (QC = QC.index) < ZC ? (zC.flags = 2, ZC) : QC : (zC.flags = 2, ZC) : ZC
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L5246` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5258) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5246)

```diff
-                   case Ck:
+                   case JC:
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L5248` → after: `L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5260) · [Before (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5248)

```diff
-                   case Ak:
+                   case IC:
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L5262` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5274) · [Before (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5262)

```diff
-                   case Ck:
+                   case JC:
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L5264` → after: `L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5276) · [Before (L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5264)

```diff
-                   case Ak:
+                   case IC:
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L5277-L5280` → after: `L5289-L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5289-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5289-L5292) · [Before (L5277-L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5277-L5280)

```diff
-                   case Ck:
-                     return kk = kk.get(null === Dk.key ? ik : Dk.key) || null, Dk.type === jk ? Kk(ek, kk, Dk.props.children, fk, Dk.key) : mk(ek, kk, Dk, fk);
-                   case Ak:
-                     return Mk(ek, kk = kk.get(null === Dk.key ? ik : Dk.key) || null, Dk, fk)
+                   case JC:
+                     return CC = CC.get(null === QC.key ? ZC : QC.key) || null, QC.type === iC ? WC(zC, CC, QC.props.children, wC, QC.key) : qC(zC, CC, QC, wC);
+                   case IC:
+                     return FC(zC, CC = CC.get(null === QC.key ? ZC : QC.key) || null, QC, wC)
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L5296` → after: `L5308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5308) · [Before (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5296)

```diff
-                 kk && Kk && null === lk.alternate && ek(fk, Kk), bk = Sk(lk, bk, Hk), null === Mk ? mk = lk : Mk.sibling = lk, Mk = lk, Kk = wk
+                 CC && WC && null === PC.alternate && zC(wC, WC), nC = bC(PC, nC, SC), null === FC ? qC = PC : FC.sibling = PC, FC = PC, WC = pC
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L5300` → after: `L5312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5312) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5300)

```diff
-                 for (; Hk < rk.length; Hk++) null !== (Kk = xk(fk, rk[Hk], Pk)) && (bk = Sk(Kk, bk, Hk), null === Mk ? mk = Kk : Mk.sibling = Kk, Mk = Kk);
+                 for (; SC < fC.length; SC++) null !== (WC = NC(wC, fC[SC], oC)) && (nC = bC(WC, nC, SC), null === FC ? qC = WC : FC.sibling = WC, FC = WC);
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L5303` → after: `L5315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5315) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5303)

```diff
-               for (Kk = Dk(fk, Kk); Hk < rk.length; Hk++) null !== (wk = Uk(Kk, fk, Hk, rk[Hk], Pk)) && (kk && null !== wk.alternate && Kk.delete(null === wk.key ? Hk : wk.key), bk = Sk(wk, bk, Hk), null === Mk ? mk = wk : Mk.sibling = wk, Mk = wk);
+               for (WC = QC(wC, WC); SC < fC.length; SC++) null !== (pC = gC(WC, wC, SC, fC[SC], oC)) && (CC && null !== pC.alternate && WC.delete(null === pC.key ? SC : pC.key), nC = bC(pC, nC, SC), null === FC ? qC = pC : FC.sibling = pC, FC = pC);
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L5320` → after: `L5332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5332) · [Before (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5320)

```diff
-                 kk && Hk && null === yk.alternate && ek(fk, Hk), rk = Sk(yk, rk, wk), null === Kk ? Mk = yk : Kk.sibling = yk, Kk = yk, Hk = lk
+                 CC && SC && null === RC.alternate && zC(wC, SC), fC = bC(RC, fC, pC), null === WC ? FC = RC : WC.sibling = RC, WC = RC, SC = PC
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L5324` → after: `L5336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5336) · [Before (L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5324)

```diff
-                 for (; !pk.done; wk++, pk = Pk.next()) null !== (pk = xk(fk, pk.value, mk)) && (rk = Sk(pk, rk, wk), null === Kk ? Mk = pk : Kk.sibling = pk, Kk = pk);
+                 for (; !GC.done; pC++, GC = oC.next()) null !== (GC = NC(wC, GC.value, qC)) && (fC = bC(GC, fC, pC), null === WC ? FC = GC : WC.sibling = GC, WC = GC);
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L5327` → after: `L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5339) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5327)

```diff
-               for (Hk = Dk(fk, Hk); !pk.done; wk++, pk = Pk.next()) null !== (pk = Uk(Hk, fk, wk, pk.value, mk)) && (kk && null !== pk.alternate && Hk.delete(null === pk.key ? wk : pk.key), rk = Sk(pk, rk, wk), null === Kk ? Mk = pk : Kk.sibling = pk, Kk = pk);
+               for (SC = QC(wC, SC); !GC.done; pC++, GC = oC.next()) null !== (GC = gC(SC, wC, pC, GC.value, qC)) && (CC && null !== GC.alternate && SC.delete(null === GC.key ? pC : GC.key), fC = bC(GC, fC, pC), null === WC ? FC = GC : WC.sibling = GC, WC = GC);
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L5337-L5338` → after: `L5349-L5350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5349-L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5349-L5350) · [Before (L5337-L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5337-L5338)

```diff
-                 case Ck:
-                   kk: {
+                 case JC:
+                   CC: {
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L5358-L5359` → after: `L5370-L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5370-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5370-L5371) · [Before (L5358-L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5358-L5359)

```diff
-                 case Ak:
-                   kk: {
+                 case IC:
+                   CC: {
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L5484` → after: `L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5496) · [Before (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5484)

```diff
-           function mr(kk) {
+           function of(CC) {
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L5491` → after: `L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5503) · [Before (L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5491)

```diff
-             if (!Sr) return mr(kk), Sr = !0, !1;
+             if (!wf) return of(CC), wf = !0, !1;
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L5495` → after: `L5507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5507) · [Before (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5495)

```diff
-             if (mr(kk), 13 === kk.tag) {
+             if (of(CC), 13 === CC.tag) {
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L5497` → after: `L5509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5509) · [Before (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5497)

```diff
-               kk: {
+               CC: {
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L5547` → after: `L5559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5559) · [Before (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5547)

```diff
-             if (wr = Sk, lr = ek, ek.memoizedState = null, ek.updateQueue = null, ek.lanes = 0, Ur.current = null === kk || null === kk.memoizedState ? Rr : Jr, kk = ik(Dk, fk), Lr) {
+             if (Sf = bC, pf = zC, zC.memoizedState = null, zC.updateQueue = null, zC.lanes = 0, Mf.current = null === CC || null === CC.memoizedState ? Vf : Co, CC = ZC(QC, wC), Af) {
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L5566` → after: `L5578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5578) · [Before (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5566)

```diff
-             return null === yr ? lr.memoizedState = yr = kk : yr = yr.next = kk, yr
+             return null === Gf ? pf.memoizedState = Gf = CC : Gf = Gf.next = CC, Gf
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L5584` → after: `L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5596) · [Before (L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5584)

```diff
-               }, null === yr ? lr.memoizedState = yr = kk : yr = yr.next = kk
+               }, null === Gf ? pf.memoizedState = Gf = CC : Gf = Gf.next = CC
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L5633` → after: `L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5645) · [Before (L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5633)

```diff
-               null === Pk ? Sk = Dk : Pk.next = rk, Lf(Dk, ek.memoizedState) || (iP = !0), ek.memoizedState = Dk, ek.baseState = Sk, ek.baseQueue = Pk, ik.lastRenderedState = Dk
+               null === oC ? bC = QC : oC.next = fC, Pw(QC, zC.memoizedState) || (Qo = !0), zC.memoizedState = QC, zC.baseState = bC, zC.baseQueue = oC, ZC.lastRenderedState = QC
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L5661` → after: `L5673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5673) · [Before (L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5661)

```diff
-             if (null !== fk ? kk = fk === Dk : (kk = kk.mutableReadLanes, (kk = (wr & kk) === kk) && (ek._workInProgressVersionPrimary = Dk, xr.push(ek))), kk) return ik(ek._source);
+             if (null !== wC ? CC = wC === QC : (CC = CC.mutableReadLanes, (CC = (Sf & CC) === CC) && (zC._workInProgressVersionPrimary = QC, Wf.push(zC))), CC) return ZC(zC._source);
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L5743` → after: `L5755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5755) · [Before (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5743)

```diff
-             }, lr.updateQueue = ek, ek.lastEffect = kk.next = kk) : null === (ik = ek.lastEffect) ? ek.lastEffect = kk.next = kk : (Dk = ik.next, ik.next = kk, kk.next = Dk, ek.lastEffect = kk), kk
+             }, pf.updateQueue = zC, zC.lastEffect = CC.next = CC) : null === (ZC = zC.lastEffect) ? zC.lastEffect = CC.next = CC : (QC = ZC.next, ZC.next = CC, CC.next = QC, zC.lastEffect = CC), CC
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L5838` → after: `L5850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L5850) · [Before (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L5838)

```diff
-             if (null === bk ? Sk.next = Sk : (Sk.next = bk.next, bk.next = Sk), ek.pending = Sk, bk = kk.alternate, kk === lr || null !== bk && bk === lr) Lr = Yr = !0;
+             if (null === nC ? bC.next = bC : (bC.next = nC.next, nC.next = bC), zC.pending = bC, nC = CC.alternate, CC === pf || null !== nC && nC === pf) Af = Rf = !0;
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L6040` → after: `L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6052) · [Before (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6040)

```diff
-             return bk = kk.child, 0 === (fk & Sk) && (fk = bk.memoizedProps, (ik = null !== (ik = ik.compare) ? ik : Af)(fk, Dk) && kk.ref === ek.ref) ? sP(kk, ek, Sk) : (ek.flags |= 1, (kk = lM(bk, Dk)).ref = ek.ref, kk.return = ek, ek.child = kk)
+             return nC = CC.child, 0 === (wC & bC) && (wC = nC.memoizedProps, (ZC = null !== (ZC = ZC.compare) ? ZC : Rw)(wC, QC) && CC.ref === zC.ref) ? eo(CC, zC, bC) : (zC.flags |= 1, (CC = RF(nC, QC)).ref = zC.ref, CC.return = zC, zC.child = CC)
```

#### 210. `bundles/bloxd.io/main.js` (Changed code · before: `L6060` → after: `L6072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6072) · [Before (L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6060)

```diff
-                 if (0 === (1073741824 & ik)) return kk = null !== Sk ? Sk.baseLanes | ik : ik, ek.lanes = ek.childLanes = 1073741824, ek.memoizedState = {
+                 if (0 === (1073741824 & ZC)) return CC = null !== bC ? bC.baseLanes | ZC : ZC, zC.lanes = zC.childLanes = 1073741824, zC.memoizedState = {
```

#### 211. `bundles/bloxd.io/main.js` (Changed code · before: `L6077` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6089) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6077)

```diff
-             var Sk = IS(ik) ? uS : VS.current;
+             var bC = hb(ZC) ? vb : Ib.current;
```

#### 212. `bundles/bloxd.io/main.js` (Changed code · before: `L6093` → after: `L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6105) · [Before (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6093)

```diff
-               "object" === typeof mk && null !== mk ? mk = Cb(mk) : mk = qS(ek, mk = IS(ik) ? uS : VS.current);
+               "object" === typeof qC && null !== qC ? qC = Rn(qC) : qC = eb(zC, qC = hb(ZC) ? vb : Ib.current);
```

#### 213. `bundles/bloxd.io/main.js` (Changed code · before: `L6100` → after: `L6112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6112) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6100)

```diff
-               bk = ek.stateNode, sb(kk, ek), rk = ek.memoizedProps, mk = ek.type === ek.elementType ? rk : nb(ek.type, rk), bk.props = mk, Kk = ek.pendingProps, xk = bk.context, "object" === typeof(Pk = ik.contextType) && null !== Pk ? Pk = Cb(Pk) : Pk = qS(ek, Pk = IS(ik) ? uS : … [truncated]
+               nC = zC.stateNode, Jn(CC, zC), fC = zC.memoizedProps, qC = zC.type === zC.elementType ? fC : Fn(zC.type, fC), nC.props = qC, WC = zC.pendingProps, NC = nC.context, "object" === typeof(oC = ZC.contextType) && null !== oC ? oC = Rn(oC) : oC = eb(zC, oC = hb(ZC) ? vb : … [truncated]
```

#### 214. `bundles/bloxd.io/main.js` (Changed code · before: `L6183` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6195) · [Before (L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6183)

```diff
-               yH: null,
+               Vg: null,
```

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L6189` → after: `L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6201) · [Before (L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6189)

```diff
-             } : (bk.isBackwards = ek, bk.yH = null, bk.renderingStartTime = 0, bk.last = Dk, bk.tail = ik, bk.tailMode = fk, bk.lastEffect = Sk)
+             } : (nC.isBackwards = zC, nC.Vg = null, nC.renderingStartTime = 0, nC.last = QC, nC.tail = ZC, nC.tailMode = wC, nC.lastEffect = bC)
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L6198` → after: `L6210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6210) · [Before (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6198)

```diff
-               if (null !== kk && 0 !== (64 & kk.flags)) kk: for (kk = ek.child; null !== kk;) {
+               if (null !== CC && 0 !== (64 & CC.flags)) CC: for (CC = zC.child; null !== CC;) {
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L6347` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6359) · [Before (L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6347)

```diff
-                     switch (mk = 9 === Sk.nodeType ? Sk : Sk.ownerDocument, kk === Ue && (kk = we(ik)), kk === Ue ? "script" === ik ? ((kk = mk.createElement("div")).innerHTML = "<script><\/script>", kk = kk.removeChild(kk.firstChild)) : "string" === typeof Dk.is ? kk = mk.create … [truncated]
+                     switch (qC = 9 === bC.nodeType ? bC : bC.ownerDocument, CC === Mz && (CC = Sz(ZC)), CC === Mz ? "script" === ZC ? ((CC = qC.createElement("div")).innerHTML = "<script><\/script>", CC = CC.removeChild(CC.firstChild)) : "string" === typeof QC.is ? CC = qC.create … [truncated]
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L6424` → after: `L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6436) · [Before (L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6424)

```diff
-                   ik = Gb(gb.current), Gb(Zb.current), Mr(ek) ? (Dk = ek.stateNode, ik = ek.memoizedProps, Dk[xS] = ek, Dk.nodeValue !== ik && (ek.flags |= 4)) : ((Dk = (9 === ik.nodeType ? ik : ik.ownerDocument).createTextNode(Dk))[xS] = ek, ek.stateNode = Dk)
+                   ZC = Un(Ln.current), Un(jn.current), qf(zC) ? (QC = zC.stateNode, ZC = zC.memoizedProps, QC[ob] = zC, QC.nodeValue !== ZC && (zC.flags |= 4)) : ((QC = (9 === ZC.nodeType ? ZC : ZC.ownerDocument).createTextNode(QC))[ob] = zC, zC.stateNode = QC)
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L6430` → after: `L6442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6442) · [Before (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6430)

```diff
-                 return Rb(), UP(ek), null === kk && of(ek.stateNode.containerInfo), null;
+                 return On(), So(zC), null === CC && Tw(zC.stateNode.containerInfo), null;
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L6435` → after: `L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6447) · [Before (L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6435)

```diff
-                 if (rk = 0 !== (64 & ek.flags), null === (mk = Dk.yH))
+                 if (fC = 0 !== (64 & zC.flags), null === (qC = QC.Vg))
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L6456` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6468) · [Before (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6456)

```diff
-                   Dk.isBackwards ? (mk.sibling = ek.child, ek.child = mk) : (null !== (ik = Dk.last) ? ik.sibling = mk : ek.child = mk, Dk.last = mk)
+                   QC.isBackwards ? (qC.sibling = zC.child, zC.child = qC) : (null !== (ZC = QC.last) ? ZC.sibling = qC : zC.child = qC, QC.last = qC)
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L6458` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6470) · [Before (L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6458)

```diff
-                 return null !== Dk.tail ? (ik = Dk.tail, Dk.yH = ik, Dk.tail = ik.sibling, Dk.lastEffect = ek.lastEffect, Dk.renderingStartTime = Sb(), ik.sibling = null, ek = er.current, sS(er, rk ? 1 & ek | 2 : 1 & ek), ik) : null;
+                 return null !== QC.tail ? (ZC = QC.tail, QC.Vg = ZC, QC.tail = ZC.sibling, QC.lastEffect = zC.lastEffect, QC.renderingStartTime = zn(), ZC.sibling = null, zC = Cf.current, xb(Cf, fC ? 1 & zC | 2 : 1 & zC), ZC) : null;
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L6608` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6620) · [Before (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6608)

```diff
-                 componentStack: null !== kk ? kk : ""
+                 componentStack: null !== CC ? CC : ""
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L6639` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6651) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6639)

```diff
-                   ek = (kk = ek.stateNode).getSnapshotBeforeUpdate(ek.elementType === ek.type ? ik : nb(ek.type, ik), Dk), kk.__reactInternalSnapshotBeforeUpdate = ek
+                   zC = (CC = zC.stateNode).getSnapshotBeforeUpdate(zC.elementType === zC.type ? ZC : Fn(zC.type, ZC), QC), CC.__reactInternalSnapshotBeforeUpdate = zC
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L6778` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6790) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6778)

```diff
-             kk: {
+             CC: {
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L6797` → after: `L6809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6809) · [Before (L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6797)

```diff
-             16 & ik.flags && (Le(ek, ""), ik.flags &= -17);kk: ek: for (ik = kk;;) {
+             16 & ZC.flags && (Az(zC, ""), ZC.flags &= -17);CC: zC: for (ZC = CC;;) {
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L6838` → after: `L6850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6850) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6838)

```diff
-                 kk: for (;;) {
+                 CC: for (;;) {
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L6854` → after: `L6866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L6866) · [Before (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6854)

```diff
-                 kk: for (var rk = kk, Pk = fk, mk = Pk;;)
+                 CC: for (var fC = CC, oC = wC, qC = oC;;)
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L6999` → after: `L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7011) · [Before (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L6999)

```diff
-             return 0 !== (48 & km) ? Sb() : -1 !== um ? um : um = Sb()
+             return 0 !== (48 & Qq) ? zn() : -1 !== Hq ? Hq : Hq = zn()
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L7056` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7068) · [Before (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7056)

```diff
-             if (Dk = Zi(kk, kk === em ? Dm : 0), ek = Ti, 0 === Dk) null !== ik && (ik !== JS && BS(ik), kk.callbackNode = null, kk.callbackPriority = 0);
+             if (QC = tZ(CC, CC === wq ? nq : 0), zC = TZ, 0 === QC) null !== ZC && (ZC !== Ub && ub(ZC), CC.callbackNode = null, CC.callbackPriority = 0);
```

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L7096` → after: `L7108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7108) · [Before (L7096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7096)

```diff
-             var ik = Zi(kk, kk === em ? Dm : 0);
+             var ZC = tZ(CC, CC === wq ? nq : 0);
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L7247` → after: `L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7259) · [Before (L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7247)

```diff
-                 kk: {
+                 CC: {
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L7329` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7341) · [Before (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7329)

```diff
-             return RP.current = Nr, null === kk ? Nr : kk
+             return zq.current = kf, null === CC ? kf : CC
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L7369` → after: `L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7381) · [Before (L7369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7369)

```diff
-                 null !== kk && 0 === (2048 & kk.flags) && (null === kk.firstEffect && (kk.firstEffect = ek.firstEffect), null !== ek.lastEffect && (null !== kk.lastEffect && (kk.lastEffect.nextEffect = ek.firstEffect), kk.lastEffect = ek.lastEffect), 1 < ek.flags && (null !== kk. … [truncated]
+                 null !== CC && 0 === (2048 & CC.flags) && (null === CC.firstEffect && (CC.firstEffect = zC.firstEffect), null !== zC.lastEffect && (null !== CC.lastEffect && (CC.lastEffect.nextEffect = zC.firstEffect), CC.lastEffect = zC.lastEffect), 1 < zC.flags && (null !== CC. … [truncated]
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L7403` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7415) · [Before (L7403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7403)

```diff
-             if (null !== dm && 0 === (24 & Dk) && dm.has(kk) && dm.delete(kk), kk === em && (im = em = null, Dm = 0), 1 < ik.flags ? null !== ik.lastEffect ? (ik.lastEffect.nextEffect = ik, Dk = ik.firstEffect) : Dk = ik : Dk = ik.firstEffect, null !== Dk) {
+             if (null !== Yq && 0 === (24 & QC) && Yq.has(CC) && Yq.delete(CC), CC === wq && (bq = wq = null, nq = 0), 1 < ZC.flags ? null !== ZC.lastEffect ? (ZC.lastEffect.nextEffect = ZC, QC = ZC.firstEffect) : QC = ZC : QC = ZC.firstEffect, null !== QC) {
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L7409` → after: `L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7421) · [Before (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7409)

```diff
-                 else kk: if (Pk = (Pk = rk.ownerDocument) && Pk.defaultView || window, (Mk = Pk.getSelection && Pk.getSelection()) && 0 !== Mk.rangeCount) {
+                 else CC: if (oC = (oC = fC.ownerDocument) && oC.defaultView || window, (FC = oC.getSelection && oC.getSelection()) && 0 !== FC.rangeCount) {
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L7424` → after: `L7436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7436) · [Before (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7424)

```diff
-                   ek: for (;;) {
+                   zC: for (;;) {
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L7496` → after: `L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7508) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7496)

```diff
-                 null !== rk && Ff(yk) && (Yk = rk.start, void 0 === (Lk = rk.end) && (Lk = Yk), "selectionStart" in yk ? (yk.selectionStart = Yk, yk.selectionEnd = Math.min(Lk, yk.value.length)) : (Lk = (Yk = yk.ownerDocument || document) && Yk.defaultView || window).getSelection … [truncated]
+                 null !== fC && iw(RC) && (AC = fC.start, void 0 === (xC = fC.end) && (xC = AC), "selectionStart" in RC ? (RC.selectionStart = AC, RC.selectionEnd = Math.min(xC, RC.value.length)) : (xC = (AC = RC.ownerDocument || document) && AC.defaultView || window).getSelection … [truncated]
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L7661-L7662` → after: `L7673-L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7673-L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7673-L7674) · [Before (L7661-L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7661-L7662)

```diff
-             else kk: switch (kk) {
-               case jk:
+             else CC: switch (CC) {
+               case iC:
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L7664` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7676) · [Before (L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7664)

```diff
-               case hk:
+               case cC:
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L7667` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7679) · [Before (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7667)

```diff
-               case sk:
+               case vC:
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L7670` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7682) · [Before (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7670)

```diff
-               case dk:
+               case eC:
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L7672` → after: `L7684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7684) · [Before (L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7672)

```diff
-               case qk:
+               case dC:
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L7674` → after: `L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7686) · [Before (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7674)

```diff
-               case Ik:
+               case mC:
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L7676` → after: `L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7688) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7676)

```diff
-               case ak:
+               case uC:
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L7678` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7690) · [Before (L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7678)

```diff
-               case Wk:
+               case rC:
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L7682` → after: `L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7694) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7682)

```diff
-                   case Vk:
+                   case hC:
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L7685` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7697) · [Before (L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7685)

```diff
-                   case Fk:
+                   case KC:
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L7688` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7700) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7688)

```diff
-                   case uk:
+                   case YC:
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L7691` → after: `L7703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7703) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7691)

```diff
-                   case zk:
+                   case HC:
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L7694` → after: `L7706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7706) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7694)

```diff
-                   case Qk:
+                   case EC:
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L7697` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7709) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7697)

```diff
-                   case vk:
+                   case lC:
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L7701` → after: `L7713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7713) · [Before (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7701)

```diff
-                 throw Error(bk(130, null == kk ? kk : typeof kk, ""))
+                 throw Error(nC(130, null == CC ? CC : typeof CC, ""))
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L7734-L7735` → after: `L7746-L7747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7746-L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7746-L7747) · [Before (L7734-L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7734-L7735)

```diff
-             kk: if (ik) {
-               ek: {
+             CC: if (ZC) {
+               zC: {
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L7762` → after: `L7774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7774) · [Before (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7762)

```diff
-             return null === ek.context ? ek.context = ik : ek.pendingContext = ik, (ek = db(Sk, rk)).payload = {
+             return null === zC.context ? zC.context = ZC : zC.pendingContext = ZC, (zC = In(bC, fC)).payload = {
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L7774` → after: `L7786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7786) · [Before (L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7774)

```diff
-               kk.retryLane = 0 !== ik && ik < ek ? ik : ek
+               CC.retryLane = 0 !== ZC && ZC < zC ? ZC : zC
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L7784` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7796) · [Before (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7784)

```diff
-             if (ik = new AM(kk, ek, null != ik && !0 === ik.hydrate), ek = HM(3, null, null, 2 === ek ? 7 : 1 === ek ? 3 : 0), ik.current = ek, ek.stateNode = ik, jb(ek), kk[US] = ik.current, of(8 === kk.nodeType ? kk.parentNode : kk), Dk)
+             if (ZC = new vF(CC, zC, null != ZC && !0 === ZC.hydrate), zC = PF(3, null, null, 2 === zC ? 7 : 1 === zC ? 3 : 0), ZC.current = zC, zC.stateNode = ZC, xn(zC), CC[Fb] = ZC.current, Tw(8 === CC.nodeType ? CC.parentNode : CC), QC)
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L7876` → after: `L7888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7888) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7876)

```diff
-                       if (null !== (fk = ek.memoizedState) && (fk.yH = null, fk.tail = null, fk.lastEffect = null), sS(er, er.current), Dk) break;
+                       if (null !== (wC = zC.memoizedState) && (wC.Vg = null, wC.tail = null, wC.lastEffect = null), xb(Cf, Cf.current), QC) break;
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L7901` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7913) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7901)

```diff
-                 kk: {
+                 CC: {
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L7927` → after: `L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7939) · [Before (L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7927)

```diff
-                 return Dk = ek.type, fk = ek.pendingProps, mP(kk, ek, Dk, fk = ek.elementType === Dk ? fk : nb(Dk, fk), ik);
+                 return QC = zC.type, wC = zC.pendingProps, Fo(CC, zC, QC, wC = zC.elementType === QC ? wC : Fn(QC, wC), ZC);
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L7929` → after: `L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7941) · [Before (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7929)

```diff
-                 return Dk = ek.type, fk = ek.pendingProps, MP(kk, ek, Dk, fk = ek.elementType === Dk ? fk : nb(Dk, fk), ik);
+                 return QC = zC.type, wC = zC.pendingProps, Wo(CC, zC, QC, wC = zC.elementType === QC ? wC : Fn(QC, wC), ZC);
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L7951` → after: `L7963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7963) · [Before (L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7951)

```diff
-                 return Dk = ek.type, fk = ek.pendingProps, fP(kk, ek, Dk, fk = ek.elementType === Dk ? fk : nb(Dk, fk), ik);
+                 return QC = zC.type, wC = zC.pendingProps, bo(CC, zC, QC, wC = zC.elementType === QC ? wC : Fn(QC, wC), ZC);
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L7958` → after: `L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L7970) · [Before (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L7958)

```diff
-                 kk: {
+                 CC: {
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L8009` → after: `L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8021) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8009)

```diff
-                 return Dk = ek.type, fk = ek.pendingProps, fk = ek.elementType === Dk ? fk : nb(Dk, fk), null !== kk && (kk.alternate = null, ek.alternate = null, ek.flags |= 2), ek.tag = 1, IS(Dk) ? (kk = !0, ES(ek)) : kk = !1, Lb(ek, ik), Eb(ek, Dk, fk), ab(ek, Dk, fk, ik), KP( … [truncated]
+                 return QC = zC.type, wC = zC.pendingProps, wC = zC.elementType === QC ? wC : Fn(QC, wC), null !== CC && (CC.alternate = null, zC.alternate = null, zC.flags |= 2), zC.tag = 1, hb(QC) ? (CC = !0, mb(zC)) : CC = !1, Gn(zC, ZC), En(zC, QC, wC), cn(zC, QC, wC, ZC), No( … [truncated]
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L8166-L8168` → after: `L8178-L8180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8178-L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8178-L8180) · [Before (L8166-L8168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8166-L8168)

```diff
-         }, , , , , , , (kk, ek, ik) => {
-           kk.exports = ik(91)
-         }, , , (kk, ek) => {
+         }, , , (CC, zC, ZC) => {
+           CC.exports = ZC(70)
+         }, , (CC, zC) => {
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L8245` → after: `L8257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8257) · [Before (L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8245)

```diff
-             kk: for (;;) {
+             CC: for (;;) {
```

#### 267. `bundles/bloxd.io/main.js` (Changed code · before: `L8263` → after: `L8275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8275) · [Before (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8263)

```diff
-                 kk: for (var Dk = 0, fk = kk.length; Dk < fk;) {
+                 CC: for (var QC = 0, wC = CC.length; QC < wC;) {
```

#### 268. `bundles/bloxd.io/main.js` (Changed code · before: `L8282` → after: `L8294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8294) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8282)

```diff
-             return 0 !== ik ? ik : kk.id - ek.id
+             return 0 !== ZC ? ZC : CC.id - zC.id
```

#### 269. `bundles/bloxd.io/main.js` (Changed code · before: `L8322` → after: `L8334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8334) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8322)

```diff
-                   ik = ek.unstable_now(), "function" === typeof rk ? uk.callback = rk : uk === Ak(dk) && jk(dk), vk(ik)
+                   ZC = zC.unstable_now(), "function" === typeof fC ? YC.callback = fC : YC === IC(eC) && iC(eC), lC(ZC)
```

#### 270. `bundles/bloxd.io/main.js` (Changed code · before: `L8382` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8394) · [Before (L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8382)

```diff
-             switch ("object" === typeof bk && null !== bk ? bk = "number" === typeof(bk = bk.delay) && 0 < bk ? rk + bk : rk : bk = rk, kk) {
+             switch ("object" === typeof nC && null !== nC ? nC = "number" === typeof(nC = nC.delay) && 0 < nC ? fC + nC : fC : nC = fC, CC) {
```

#### 271. `bundles/bloxd.io/main.js` (Changed code · before: `L8418` → after: `L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8430) · [Before (L8418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8418)

```diff
-         }, , , , , , , , (kk, ek, ik) => {
+         }, , , , , , , (CC, zC, ZC) => {
```

#### 272. `bundles/bloxd.io/main.js` (Changed code · before: `L8458-L8461` → after: `L8470-L8473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8470-L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8470-L8473) · [Before (L8458-L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8458-L8461)

```diff
-           var Dk = ik(176),
-             fk = ik(179),
-             Sk = ik(189),
-             bk = ik(102),
+           var QC = ZC(162),
+             wC = ZC(171),
+             bC = ZC(184),
+             nC = ZC(85),
```

#### 273. `bundles/bloxd.io/main.js` (Changed code · before: `L8463-L8465` → after: `L8475-L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8475-L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8475-L8477) · [Before (L8463-L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8463-L8465)

```diff
-             Pk = ik(107),
-             mk = ik(111),
-             Mk = ik(115),
+             oC = ZC(88),
+             qC = ZC(91),
+             FC = ZC(94),
```

#### 274. `bundles/bloxd.io/main.js` (Changed code · before: `L8467-L8471` → after: `L8479-L8483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8479-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8479-L8483) · [Before (L8467-L8471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8467-L8471)

```diff
-             xk = ik(131),
-             nk = ik(167),
-             Uk = ik(169),
-             Hk = ik(129);
-           xk.E && !xk.w[xk.E].enabled && console.error(`Selected subsiteUsed ${xk.E} but it is not enabled`);
+             NC = ZC(113),
+             MC = ZC(143),
+             gC = ZC(147),
+             SC = ZC(107);
+           NC.H && !NC.B[NC.H].enabled && console.error(`Selected subsiteUsed ${NC.H} but it is not enabled`);
```

#### 275. `bundles/bloxd.io/main.js` (Changed code · before: `L8479` → after: `L8491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8491) · [Before (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8479)

```diff
-             return [`Browser: ${yk()}`, `Version: ${Yk()}`, `Platform: ${navigator.platform}`, `Platform Type: ${Vk()}`, `Input Type: ${(0,mk.d)()}`].join(kk)
+             return [`Browser: ${RC()}`, `Version: ${AC()}`, `Platform: ${navigator.platform}`, `Platform Type: ${hC()}`, `Input Type: ${(0,qC.c)()}`].join(CC)
```

#### 276. `bundles/bloxd.io/main.js` (Changed code · before: `L8507` → after: `L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8519) · [Before (L8507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8507)

```diff
-             return lk().getPlatformType() || ("touchOnly" === (0, mk.d)() ? "tablet" : "desktop")
+             return PC().getPlatformType() || ("touchOnly" === (0, qC.c)() ? "tablet" : "desktop")
```

#### 277. `bundles/bloxd.io/main.js` (Changed code · before: `L8526` → after: `L8538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8538) · [Before (L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8526)

```diff
-             return "macos" === kk && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== kk || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, mk.d)() ? Dk.x.includes(kk) ? kk : "other" : "android"
+             return "macos" === CC && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== CC || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, qC.c)() ? QC.o.includes(CC) ? CC : "other" : "android"
```

#### 278. `bundles/bloxd.io/main.js` (Changed code · before: `L8531` → after: `L8543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8543) · [Before (L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8531)

```diff
-             return Dk.L.includes(kk) ? kk : "other"
+             return QC.z.includes(CC) ? CC : "other"
```

#### 279. `bundles/bloxd.io/main.js` (Changed code · before: `L8536` → after: `L8548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8548) · [Before (L8536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8536)

```diff
-             return !hk() && ("mobile" === kk || "tablet" === kk || "touchOnly" === (0, mk.d)() || Pk.currentUrl.hasSearchParam("mobile"))
+             return !cC() && ("mobile" === CC || "tablet" === CC || "touchOnly" === (0, qC.c)() || oC.currentUrl.hasSearchParam("mobile"))
```

#### 280. `bundles/bloxd.io/main.js` (Changed code · before: `L8548` → after: `L8560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8560) · [Before (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8548)

```diff
-             return fk.G.some((ek => ek === kk))
+             return wC.N.some((zC => zC === CC))
```

#### 281. `bundles/bloxd.io/main.js` (Changed code · before: `L8552` → after: `L8564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8564) · [Before (L8552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8552)

```diff
-             return Qk(xk.t)
+             return EC(NC.y)
```

#### 282. `bundles/bloxd.io/main.js` (Changed code · before: `L8556` → after: `L8568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8568) · [Before (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8556)

```diff
-             return qk() || "mouseOnly" !== (0, mk.d)() || navigator.maxTouchPoints > 0
+             return dC() || "mouseOnly" !== (0, qC.c)() || navigator.maxTouchPoints > 0
```

#### 283. `bundles/bloxd.io/main.js` (Changed code · before: `L8562` → after: `L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8574) · [Before (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8562)

```diff
-           const ak = "bloxd" === xk.t && "bloxd" === xk.E && !Pk.currentUrl.hasSearchParam("portal"),
+           const uC = "bloxd" === NC.y && "bloxd" === NC.H && !oC.currentUrl.hasSearchParam("portal"),
```

#### 284. `bundles/bloxd.io/main.js` (Changed code · before: `L8565-L8566` → after: `L8577-L8578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8577-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8577-L8578) · [Before (L8565-L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8565-L8566)

```diff
-               useSocialFeatures: "coolmathgames" !== xk.t,
-               useDiscord: "coolmathgames" !== xk.t,
+               useSocialFeatures: "coolmathgames" !== NC.y,
+               useDiscord: "coolmathgames" !== NC.y,
```

#### 285. `bundles/bloxd.io/main.js` (Changed code · before: `L8568-L8582` → after: `L8580-L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8580-L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8580-L8594) · [Before (L8568-L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8568-L8582)

```diff
-               useForceRotateForceFullscreenOverlay: "crazygames" !== xk.t && "minijuegos" !== xk.E && "coolmathgames" !== xk.t && "msnPlay" !== xk.t && "desktopMicrosoftStore" !== xk.t && !(0, xk.e)(),
-               useLogin: "coolmathgames" !== xk.t && (0, xk.f)(),
-               useRecaptcha: !Sk.g.recaptchaDisabled && !(0, xk.e)(),
-               useTurnstile: !Sk.g.turnstileDisabled && !(0, xk.e)() && "mobileIos" !== xk.t && !nk.e,
-               canChangeName: "coolmathgames" !== xk.t,
-               canUseInviteLinks: ("bloxd" === xk.t || "crazygames" === xk.t) && !(0, xk.e)(),
-               canUseFriendLinks: "bloxd" === xk.t && "bloxd" === xk.E && !(0, xk.e)(),
-               canSeePlayerWrittenText: "coolmathgames" !== xk.t,
-               canSeeRealPlayerNames: "coolmathgames" !== xk.t,
-               canUseCustomLobbies: "coolmathgames" !== xk.t,
-               canUseCustomGames: "coolmathgames" !== xk.t && !(0, xk.m)(),
-               canUseYoutubeHomepage: "bloxd" === xk.t,
-               canShowBrowserTips: "coolmathgames" !== xk.t && !vk() && "desktopMicrosoftStore" !== xk.t && !(0, xk.e)(),
-               isOwnTopLevelSite: ak && !xk.j,
-               sanitizeShopInput: "coolmathgames" === xk.t,
+               useForceRotateForceFullscreenOverlay: "crazygames" !== NC.y && "minijuegos" !== NC.H && "coolmathgames" !== NC.y && "msnPlay" !== NC.y && "desktopMicrosoftStore" !== NC.y && !(0, NC.e)(),
+               useLogin: "coolmathgames" !== NC.y && (0, NC.i)(),
+               useRecaptcha: !bC.f.recaptchaDisabled && !(0, NC.e)(),
+               useTurnstile: !bC.f.turnstileDisabled && !(0, NC.e)() && "mobileIos" !== NC.y && !MC.b,
+               canChangeName: "coolmathgames" !== NC.y,
+               canUseInviteLinks: ("bloxd" === NC.y || "crazygames" === NC.y) && !(0, NC.e)(),
+               canUseFriendLinks: "bloxd" === NC.y && "bloxd" === NC.H && !(0, NC.e)(),
+               canSeePlayerWrittenText: "coolmathgames" !== NC.y,
+               canSeeRealPlayerNames: "coolmathgames" !== NC.y,
+               canUseCustomLobbies: "coolmathgames" !== NC.y,
+               canUseCustomGames: "coolmathgames" !== NC.y && !(0, NC.o)(),
+               canUseYoutubeHomepage: "bloxd" === NC.y,
+               canShowBrowserTips: "coolmathgames" !== NC.y && !lC() && "desktopMicrosoftStore" !== NC.y && !(0, NC.e)(),
+               isOwnTopLevelSite: uC && !NC.m,
+               sanitizeShopInput: "coolmathgames" === NC.y,
```

#### 286. `bundles/bloxd.io/main.js` (Changed code · before: `L8584-L8585` → after: `L8596-L8597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8596-L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8596-L8597) · [Before (L8584-L8585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8584-L8585)

```diff
-                 canChangeTexturePack: "coolmathgames" !== xk.t,
-                 canUseShaderPacks: "coolmathgames" !== xk.t
+                 canChangeTexturePack: "coolmathgames" !== NC.y,
+                 canUseShaderPacks: "coolmathgames" !== NC.y
```

#### 287. `bundles/bloxd.io/main.js` (Changed code · before: `L8622-L8623` → after: `L8634-L8635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8634-L8635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8634-L8635) · [Before (L8622-L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8622-L8623)

```diff
-               const kk = (0, Hk.m)();
-               return void 0 === kk ? "not_probed" : (0, Uk.c)(kk)
+               const CC = (0, SC.j)();
+               return void 0 === CC ? "not_probed" : (0, gC.d)(CC)
```

#### 288. `bundles/bloxd.io/main.js` (Changed code · before: `L8625` → after: `L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8637) · [Before (L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8625)

```diff
-             return Jk ??= (0, Uk.c)((0, Hk.t)()), Jk
+             return kC ??= (0, gC.d)((0, SC.r)()), kC
```

#### 289. `bundles/bloxd.io/main.js` (Changed code · before: `L8654` → after: `L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8666) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8654)

```diff
-             const Dk = null !== (kk = null !== (ek = Bk) && void 0 !== ek ? ek : null === (ik = (0, Hk.t)()) || void 0 === ik ? void 0 : ik.vendor) && void 0 !== kk ? kk : null;
+             const QC = null !== (CC = null !== (zC = aC) && void 0 !== zC ? zC : null === (ZC = (0, SC.r)()) || void 0 === ZC ? void 0 : ZC.vendor) && void 0 !== CC ? CC : null;
```

#### 290. `bundles/bloxd.io/main.js` (Changed code · before: `L8661` → after: `L8673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8673) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8661)

```diff
-               const Dk = null !== (kk = null !== (ek = Bk) && void 0 !== ek ? ek : null === (ik = (0, Hk.m)()) || void 0 === ik ? void 0 : ik.vendor) && void 0 !== kk ? kk : null;
+               const QC = null !== (CC = null !== (zC = aC) && void 0 !== zC ? zC : null === (ZC = (0, SC.j)()) || void 0 === ZC ? void 0 : ZC.vendor) && void 0 !== CC ? CC : null;
```

#### 291. `bundles/bloxd.io/main.js` (Changed code · before: `L8692` → after: `L8704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8704) · [Before (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8692)

```diff
-               const ek = await (0, Mk.w)(kk);
+               const zC = await (0, FC.C)(CC);
```

#### 292. `bundles/bloxd.io/main.js` (Changed code · before: `L8694` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8706) · [Before (L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8694)

```diff
-               return Kk.f.setItem(Mk.H, (0, Mk.e)(ek)), Kk.f.setItem(Mk.D, (0, Mk.o)(ek)), "usable"
+               return WC.i.setItem(FC.L, (0, FC.g)(zC)), WC.i.setItem(FC.I, (0, FC.r)(zC)), "usable"
```

#### 293. `bundles/bloxd.io/main.js` (Changed code · before: `L8708` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8720) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8708)

```diff
-                     for (let Dk, fk, Sk = 0, bk = 0; fk = kk.charAt(bk++); ~fk && (Dk = Sk % 4 ? 64 * Dk + fk : fk, Sk++ % 4) ? ek += String.fromCharCode(255 & Dk >> (-2 * Sk & 6)) : 0) fk = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(fk);
+                     for (let QC, wC, bC = 0, nC = 0; wC = CC.charAt(nC++); ~wC && (QC = bC % 4 ? 64 * QC + wC : wC, bC++ % 4) ? zC += String.fromCharCode(255 & QC >> (-2 * bC & 6)) : 0) wC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(wC);
```

#### 294. `bundles/bloxd.io/main.js` (Changed code · before: `L8715` → after: `L8727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8727) · [Before (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8715)

```diff
-                 return bk ? fk = bk : (fk = ne.kGdYVv(fk), kk[Sk] = fk), fk
+                 return nC ? wC = nC : (wC = Nz.kGdYVv(wC), CC[bC] = wC), wC
```

#### 295. `bundles/bloxd.io/main.js` (Changed code · before: `L8736` → after: `L8748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8748) · [Before (L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8736)

```diff
-                 kk = null !== (ek = kk) && void 0 !== ek ? ek : "";
+                 CC = null !== (zC = CC) && void 0 !== zC ? zC : "";
```

#### 296. `bundles/bloxd.io/main.js` (Changed code · before: `L8740` → after: `L8752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8752) · [Before (L8740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8740)

```diff
-                   ik += (null !== (Dk = kk[fk]) && void 0 !== Dk ? Dk : fk.toString()).charCodeAt(0).toString(32)
+                   ZC += (null !== (QC = CC[wC]) && void 0 !== QC ? QC : wC.toString()).charCodeAt(0).toString(32)
```

#### 297. `bundles/bloxd.io/main.js` (Changed code · before: `L8744-L8745` → after: `L8756-L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8756-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8756-L8757) · [Before (L8744-L8745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8744-L8745)

```diff
-               we = ik(224).shouldUseUkPrivacyPolicy;
-             tk = He(xk.t) + "_" + He(xk.E) + "_" + (we() ? "eu-gdpr" : "non-eu") + "_secure=" + window.isSecureContext
+               Sz = ZC(216).shouldUseUkPrivacyPolicy;
+             sC = gz(NC.y) + "_" + gz(NC.H) + "_" + (Sz() ? "eu-gdpr" : "non-eu") + "_secure=" + window.isSecureContext
```

#### 298. `bundles/bloxd.io/main.js` (Changed code · before: `L8747` → after: `L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L8759) · [Before (L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L8747)

```diff
-         }, , , function(kk) {
+         }, , , , , , , , function(CC) {
```

#### 299. `bundles/bloxd.io/main.js` (Changed code · before: `L9029` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L9041) · [Before (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L9029)

```diff
-               var Dk, fk = (Dk = ik(91)) && Dk.__esModule ? Dk : {
+               var QC, wC = (QC = ZC(91)) && QC.__esModule ? QC : {
```

#### 300. `bundles/bloxd.io/main.js` (Changed code · before: `L9081` → after: `L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L9093) · [Before (L9081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L9081)

```diff
-                 return kk && kk.__esModule ? kk : {
+                 return CC && CC.__esModule ? CC : {
```

#### 301. `bundles/bloxd.io/main.js` (Changed code · before: `L9147` → after: `L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L9159) · [Before (L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L9147)

```diff
-                 }, ek.JU = function() {
+                 }, zC.mg = function() {
```

#### 302. `bundles/bloxd.io/main.js` (Changed code · before: `L9150` → after: `L9162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L9162) · [Before (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L9150)

```diff
-                   return kk ? String(this.JU().name).toLowerCase() || "" : this.JU().name || ""
+                   return CC ? String(this.mg().name).toLowerCase() || "" : this.mg().name || ""
```

#### 303. `bundles/bloxd.io/main.js` (Changed code · before: `L9230` → after: `L9242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L9242) · [Before (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L9230)

```diff
-               var Dk, fk = (Dk = ik(17)) && Dk.__esModule ? Dk : {
+               var QC, wC = (QC = ZC(17)) && QC.__esModule ? QC : {
```

#### 304. `bundles/bloxd.io/main.js` (Changed code · before: `L9630` → after: `L9642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L9642) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L9630)

```diff
-               var Dk, fk = (Dk = ik(17)) && Dk.__esModule ? Dk : {
+               var QC, wC = (QC = ZC(17)) && QC.__esModule ? QC : {
```

#### 305. `bundles/bloxd.io/main.js` (Changed code · before: `L9771` → after: `L9783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L9783) · [Before (L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L9771)

```diff
-               var Dk, fk = (Dk = ik(17)) && Dk.__esModule ? Dk : {
+               var QC, wC = (QC = ZC(17)) && QC.__esModule ? QC : {
```

#### 306. `bundles/bloxd.io/main.js` (Changed code · before: `L9971` → after: `L9983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L9983) · [Before (L9971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L9971)

```diff
-               var Dk, fk = (Dk = ik(17)) && Dk.__esModule ? Dk : {
+               var QC, wC = (QC = ZC(17)) && QC.__esModule ? QC : {
```

#### 307. `bundles/bloxd.io/main.js` (Changed code · before: `L10042` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10054) · [Before (L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10042)

```diff
-         }, , , , , (kk, ek, ik) => {
+         }, , , (CC, zC, ZC) => {
```

#### 308. `bundles/bloxd.io/main.js` (Changed code · before: `L10081` → after: `L10093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10093) · [Before (L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10081)

```diff
-                 rk = fk.pathname + (bk ? `?${bk}` : "") + fk.hash;
+                 fC = wC.pathname + (nC ? `?${nC}` : "") + wC.hash;
```

#### 309. `bundles/bloxd.io/main.js` (Changed code · before: `L10098` → after: `L10110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10110) · [Before (L10098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10098)

```diff
-                     for (let Dk, fk, Sk = 0, bk = 0; fk = kk.charAt(bk++); ~fk && (Dk = Sk % 4 ? 64 * Dk + fk : fk, Sk++ % 4) ? ek += String.fromCharCode(255 & Dk >> (-2 * Sk & 6)) : 0) fk = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(fk);
+                     for (let QC, wC, bC = 0, nC = 0; wC = CC.charAt(nC++); ~wC && (QC = bC % 4 ? 64 * QC + wC : wC, bC++ % 4) ? zC += String.fromCharCode(255 & QC >> (-2 * bC & 6)) : 0) wC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(wC);
```

#### 310. `bundles/bloxd.io/main.js` (Changed code · before: `L10105` → after: `L10117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10117) · [Before (L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10105)

```diff
-                 return rk ? fk = rk : (fk = Sk.TgIWQA(fk), kk[bk] = fk), fk
+                 return fC ? wC = fC : (wC = bC.TgIWQA(wC), CC[nC] = wC), wC
```

#### 311. `bundles/bloxd.io/main.js` (Changed code · before: `L10117` → after: `L10129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10129) · [Before (L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10117)

```diff
-                 "string" === typeof(null === (ek = kk.data) || void 0 === ek ? void 0 : ek.type) && "updateSearchParam" === (null === (ik = kk.data) || void 0 === ik ? void 0 : ik.type) && (console.log(`Adding search param ${kk.data.name} with value ${kk.data.value}`), fk.setSear … [truncated]
+                 "string" === typeof(null === (zC = CC.data) || void 0 === zC ? void 0 : zC.type) && "updateSearchParam" === (null === (ZC = CC.data) || void 0 === ZC ? void 0 : ZC.type) && (console.log(`Adding search param ${CC.data.name} with value ${CC.data.value}`), wC.setSear … [truncated]
```

#### 312. `bundles/bloxd.io/main.js` (Changed code · before: `L10144` → after: `L10156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10156) · [Before (L10144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10144)

```diff
-         }, , , , (kk, ek, ik) => {
+         }, , , (CC, zC, ZC) => {
```

#### 313. `bundles/bloxd.io/main.js` (Changed code · before: `L10146` → after: `L10158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10158) · [Before (L10146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10146)

```diff
-             d: () => Hk
+             c: () => SC
```

#### 314. `bundles/bloxd.io/main.js` (Changed code · before: `L10176` → after: `L10188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10188) · [Before (L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10176)

```diff
-         }, , , , (kk, ek, ik) => {
+         }, , , (CC, zC, ZC) => {
```

#### 315. `bundles/bloxd.io/main.js` (Changed code · before: `L10178-L10186` → after: `L10190-L10198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10190-L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10190-L10198) · [Before (L10178-L10186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10178-L10186)

```diff
-             A: () => wk,
-             C: () => Uk,
-             D: () => nk,
-             H: () => Kk,
-             J: () => lk,
-             N: () => Hk,
-             b: () => pk,
-             e: () => bk,
-             h: () => mk,
+             C: () => bC.n,
+             F: () => pC,
+             G: () => gC,
+             I: () => MC,
+             L: () => WC,
+             O: () => PC,
+             P: () => SC,
+             d: () => GC,
+             g: () => nC,
```

#### 316. `bundles/bloxd.io/main.js` (Changed code · before: `L10188-L10192` → after: `L10200-L10204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10200-L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10200-L10204) · [Before (L10188-L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10188-L10192)

```diff
-             o: () => rk,
-             p: () => Pk,
-             q: () => xk,
-             t: () => Sk.f,
-             w: () => Sk.j
+             n: () => FC,
+             r: () => fC,
+             t: () => oC,
+             x: () => NC,
+             z: () => bC.l
```

#### 317. `bundles/bloxd.io/main.js` (Changed code · before: `L10194` → after: `L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10206) · [Before (L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10194)

```diff
-           var Dk = ik(102),
+           var QC = ZC(85),
```

#### 318. `bundles/bloxd.io/main.js` (Changed code · before: `L10196` → after: `L10208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10208) · [Before (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10196)

```diff
-             Sk = ik(121);
+             bC = ZC(102);
```

#### 319. `bundles/bloxd.io/main.js` (Changed code · before: `L10212` → after: `L10224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10224) · [Before (L10212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10212)

```diff
-             let Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ek = null === (ik = globalThis.navigator) || void 0 === ik ? void 0 : ik.userAgent) && void 0 !== ek ? ek : "";
+             let QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zC = null === (ZC = globalThis.navigator) || void 0 === ZC ? void 0 : ZC.userAgent) && void 0 !== zC ? zC : "";
```

#### 320. `bundles/bloxd.io/main.js` (Changed code · before: `L10218` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10230) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10218)

```diff
-             let Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ek = null === (ik = globalThis.navigator) || void 0 === ik ? void 0 : ik.userAgent) && void 0 !== ek ? ek : "";
+             let QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zC = null === (ZC = globalThis.navigator) || void 0 === ZC ? void 0 : ZC.userAgent) && void 0 !== zC ? zC : "";
```

#### 321. `bundles/bloxd.io/main.js` (Changed code · before: `L10224` → after: `L10236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10236) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10224)

```diff
-             let Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ek = null === (ik = globalThis.navigator) || void 0 === ik ? void 0 : ik.userAgent) && void 0 !== ek ? ek : "";
+             let QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zC = null === (ZC = globalThis.navigator) || void 0 === ZC ? void 0 : ZC.userAgent) && void 0 !== zC ? zC : "";
```

#### 322. `bundles/bloxd.io/main.js` (Changed code · before: `L10235` → after: `L10247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10247) · [Before (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10235)

```diff
-         }, , , , , , (kk, ek, ik) => {
+         }, , , , , , , , (CC, zC, ZC) => {
```

#### 323. `bundles/bloxd.io/main.js` (Changed code · before: `L10241` → after: `L10251-L10253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10251-L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10251-L10253) · [Before (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10241)

```diff
-             j: () => fk
+             j: () => fC,
+             l: () => oC,
+             n: () => wC
```

#### 324. `bundles/bloxd.io/main.js` (Changed code · before: `L10243` → after: `L10255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10255) · [Before (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10243)

```diff
-           var Dk = ik(129);
+           var QC = ZC(107);
```

#### 325. `bundles/bloxd.io/main.js` (Changed code · before: `L10251` → after: `L10263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10263) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10251)

```diff
-                 powerPreference: Dk.e
+                 powerPreference: QC.b
```

#### 326. `bundles/bloxd.io/main.js` (Changed code · before: `L10253-L10254` → after: `L10265-L10266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10265-L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10265-L10266) · [Before (L10253-L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10253-L10254)

```diff
-               Mk = null !== mk && void 0 !== mk ? mk : Pk ? await kk.requestAdapter({
-                 powerPreference: Dk.e,
+               FC = null !== qC && void 0 !== qC ? qC : oC ? await CC.requestAdapter({
+                 powerPreference: QC.b,
```

#### 327. `bundles/bloxd.io/main.js` (Changed code · before: `L10258` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10270) · [Before (L10258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10258)

```diff
-             if (await Sk(Mk), null !== (ek = null !== (ik = null === (fk = Mk.info) || void 0 === fk ? void 0 : fk.isFallbackAdapter) && void 0 !== ik ? ik : Mk.isFallbackAdapter) && void 0 !== ek && ek) return "software_adapter";
+             if (await bC(FC), null !== (zC = null !== (ZC = null === (wC = FC.info) || void 0 === wC ? void 0 : wC.isFallbackAdapter) && void 0 !== ZC ? ZC : FC.isFallbackAdapter) && void 0 !== zC && zC) return "software_adapter";
```

#### 328. `bundles/bloxd.io/main.js` (Changed code · before: `L10264` → after: `L10276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10276) · [Before (L10264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10264)

```diff
-               (0, Dk.A)(kk, ek)
+               (0, QC.w)(CC, zC)
```

#### 329. `bundles/bloxd.io/main.js` (Changed code · before: `L10275-L10276` → after: `L10287-L10288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10287-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10287-L10288) · [Before (L10275-L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10275-L10276)

```diff
-               vendor: null !== (ek = null === (ik = kk.info) || void 0 === ik ? void 0 : ik.vendor) && void 0 !== ek ? ek : "",
-               architecture: null !== (Dk = null === (fk = kk.info) || void 0 === fk ? void 0 : fk.architecture) && void 0 !== Dk ? Dk : ""
+               vendor: null !== (zC = null === (ZC = CC.info) || void 0 === ZC ? void 0 : ZC.vendor) && void 0 !== zC ? zC : "",
+               architecture: null !== (QC = null === (wC = CC.info) || void 0 === wC ? void 0 : wC.architecture) && void 0 !== QC ? QC : ""
```

#### 330. `bundles/bloxd.io/main.js` (Changed code · before: `L10282` → after: `L10294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10294) · [Before (L10282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10282)

```diff
-             return /swiftshader/i.test(`${null!==(ek=null===(ik=kk.info)||void 0===ik?void 0:ik.vendor)&&void 0!==ek?ek:""} ${null!==(Dk=null===(fk=kk.info)||void 0===fk?void 0:fk.architecture)&&void 0!==Dk?Dk:""}`)
+             return /swiftshader/i.test(`${null!==(zC=null===(ZC=CC.info)||void 0===ZC?void 0:ZC.vendor)&&void 0!==zC?zC:""} ${null!==(QC=null===(wC=CC.info)||void 0===wC?void 0:wC.architecture)&&void 0!==QC?QC:""}`)
```

#### 331. `bundles/bloxd.io/main.js` (Changed code · before: `L10288` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10300) · [Before (L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10288)

```diff
-         }, , , , , , , , (kk, ek, ik) => {
+         }, , , , , (CC, zC, ZC) => {
```

#### 332. `bundles/bloxd.io/main.js` (Changed code · before: `L10290-L10299` → after: `L10302-L10311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10302-L10311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10302-L10311) · [Before (L10290-L10299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10290-L10299)

```diff
-             A: () => Kk,
-             D: () => Mk,
-             e: () => lk,
-             f: () => wk,
-             g: () => Uk,
-             k: () => xk,
-             m: () => bk,
-             p: () => nk,
-             t: () => Sk,
-             w: () => Hk
+             b: () => PC,
+             d: () => pC,
+             h: () => gC,
+             i: () => NC,
+             j: () => nC,
+             n: () => MC,
+             r: () => bC,
+             v: () => SC,
+             w: () => WC,
+             z: () => FC
```

#### 333. `bundles/bloxd.io/main.js` (Changed code · before: `L10317` → after: `L10329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10329) · [Before (L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10317)

```diff
-                     vendor: null !== (ik = kk.getParameter(null !== (Dk = null === Sk || void 0 === Sk ? void 0 : Sk.UNMASKED_VENDOR_WEBGL) && void 0 !== Dk ? Dk : kk.VENDOR)) && void 0 !== ik ? ik : "",
+                     vendor: null !== (ZC = CC.getParameter(null !== (QC = null === bC || void 0 === bC ? void 0 : bC.UNMASKED_VENDOR_WEBGL) && void 0 !== QC ? QC : CC.VENDOR)) && void 0 !== ZC ? ZC : "",
```

#### 334. `bundles/bloxd.io/main.js` (Changed code · before: `L10340` → after: `L10352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10352) · [Before (L10340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10340)

```diff
-             return fk ? Dk : void 0
+             return wC ? QC : void 0
```

#### 335. `bundles/bloxd.io/main.js` (Changed code · before: `L10362` → after: `L10374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10374) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10362)

```diff
-             return fk && null !== (kk = Dk) && void 0 !== kk && kk.renderer ? Dk : rk
+             return wC && null !== (CC = QC) && void 0 !== CC && CC.renderer ? QC : fC
```

#### 336. `bundles/bloxd.io/main.js` (Changed code · before: `L10375` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10387) · [Before (L10375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10375)

```diff
-             mk ??= null !== (ek = null === (ik = kk.getSupportedExtensions()) || void 0 === ik ? void 0 : ik.includes("KHR_parallel_shader_compile")) && void 0 !== ek ? ek : null
+             qC ??= null !== (zC = null === (ZC = CC.getSupportedExtensions()) || void 0 === ZC ? void 0 : ZC.includes("KHR_parallel_shader_compile")) && void 0 !== zC ? zC : null
```

#### 337. `bundles/bloxd.io/main.js` (Changed code · before: `L10394` → after: `L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10406) · [Before (L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10394)

```diff
-         }, , (kk, ek, ik) => {
+         }, , , , , , (CC, zC, ZC) => {
```

#### 338. `bundles/bloxd.io/main.js` (Changed code · before: `L10396-L10397` → after: `L10408-L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10408-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10408-L10410) · [Before (L10396-L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10396-L10397)

```diff
-             A: () => Kk,
-             E: () => wk,
+             B: () => qC,
+             F: () => WC,
+             H: () => pC,
```

#### 339. `bundles/bloxd.io/main.js` (Changed code · before: `L10399-L10400` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10412) · [Before (L10399-L10400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10399-L10400)

```diff
-             f: () => Yk,
-             j: () => lk,
+             i: () => AC,
```

#### 340. `bundles/bloxd.io/main.js` (Changed code · before: `L10402-L10405` → after: `L10414-L10417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10414-L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10414-L10417) · [Before (L10402-L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10402-L10405)

```diff
-             p: () => Pk,
-             q: () => Mk,
-             t: () => Hk,
-             w: () => mk
+             o: () => RC,
+             s: () => oC,
+             u: () => FC,
+             y: () => SC
```

#### 341. `bundles/bloxd.io/main.js` (Changed code · before: `L10407` → after: `L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10419) · [Before (L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10407)

```diff
-           var Dk = ik(165),
+           var QC = ZC(134),
```

#### 342. `bundles/bloxd.io/main.js` (Changed code · before: `L10409-L10410` → after: `L10421-L10422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10421-L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10421-L10422) · [Before (L10409-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10409-L10410)

```diff
-             Sk = ik(107),
-             bk = ik(139);
+             bC = ZC(88),
+             nC = ZC(119);
```

#### 343. `bundles/bloxd.io/main.js` (Changed code · before: `L10578` → after: `L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10590) · [Before (L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10578)

```diff
-             Mk = (Dk.I.filter((kk => Pk[kk].enabled)), Dk.L.filter((kk => mk[kk].enabled)), "siteUsed"),
+             FC = (QC.G.filter((CC => oC[CC].enabled)), QC.I.filter((CC => qC[CC].enabled)), "siteUsed"),
```

#### 344. `bundles/bloxd.io/main.js` (Changed code · before: `L10588` → after: `L10600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10600) · [Before (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10588)

```diff
-               const ek = (0, bk.b)();
+               const zC = (0, nC.e)();
```

#### 345. `bundles/bloxd.io/main.js` (Changed code · before: `L10592` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10604) · [Before (L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10592)

```diff
-                 return fk.g.setItem(xk, kk), kk
+                 return wC.k.setItem(NC, CC), CC
```

#### 346. `bundles/bloxd.io/main.js` (Changed code · before: `L10598` → after: `L10610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10610) · [Before (L10598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10598)

```diff
-                 if (null !== (ik = null === (Dk = Pk[kk]) || void 0 === Dk ? void 0 : Dk.enabled) && void 0 !== ik && ik) return Uk(kk) ? fk.g.setItem(xk, kk) : fk.g.removeItem(xk), kk;
+                 if (null !== (ZC = null === (QC = oC[CC]) || void 0 === QC ? void 0 : QC.enabled) && void 0 !== ZC && ZC) return gC(CC) ? wC.k.setItem(NC, CC) : wC.k.removeItem(NC), CC;
```

#### 347. `bundles/bloxd.io/main.js` (Changed code · before: `L10601-L10602` → after: `L10613-L10614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10613-L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10613-L10614) · [Before (L10601-L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10601-L10602)

```diff
-               const mk = fk.g.getItem(xk);
-               if (Uk(mk)) return console.info(`Site used is ${mk}, kept from this tab's entry URL`), mk;
+               const qC = wC.k.getItem(NC);
+               if (gC(qC)) return console.info(`Site used is ${qC}, kept from this tab's entry URL`), qC;
```

#### 348. `bundles/bloxd.io/main.js` (Changed code · before: `L10608` → after: `L10620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10620) · [Before (L10608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10608)

```diff
-               return rk().includes("discord") && !rk().includes("/auth-callback/discord") && (kk = "discord"), (rk().includes("coolmathgames") || Sk.currentUrl.hasSearchParam("coolmath")) && (kk = "coolmathgames"), rk().includes("gx.games") && (kk = "gxGames"), console.info(`Site … [truncated]
+               return fC().includes("discord") && !fC().includes("/auth-callback/discord") && (CC = "discord"), (fC().includes("coolmathgames") || bC.currentUrl.hasSearchParam("coolmath")) && (CC = "coolmathgames"), fC().includes("gx.games") && (CC = "gxGames"), console.info(`Site … [truncated]
```

#### 349. `bundles/bloxd.io/main.js` (Changed code · before: `L10641` → after: `L10653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10653) · [Before (L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10641)

```diff
-         }, , , , , , , , (kk, ek, ik) => {
+         }, , , , , , (CC, zC, ZC) => {
```

#### 350. `bundles/bloxd.io/main.js` (Changed code · before: `L10643-L10644` → after: `L10655-L10656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10655-L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10655-L10656) · [Before (L10643-L10644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10643-L10644)

```diff
-             b: () => bk,
-             f: () => rk
+             e: () => nC,
+             i: () => fC
```

#### 351. `bundles/bloxd.io/main.js` (Changed code · before: `L10646-L10647` → after: `L10658-L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10658-L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10658-L10659) · [Before (L10646-L10647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10646-L10647)

```diff
-           var Dk = ik(146),
-             fk = ik(151);
+           var QC = ZC(123),
+             wC = ZC(127);
```

#### 352. `bundles/bloxd.io/main.js` (Changed code · before: `L10661-L10663` → after: `L10673-L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10673-L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10673-L10675) · [Before (L10661-L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10661-L10663)

```diff
-                 if ("object" !== typeof ek || null === ek || !Object.prototype.hasOwnProperty.call(ek, fk.d)) return null;
-                 const ik = fk.j.safeParse(ek[fk.d]);
-                 return ik.success ? ik.data : (console.warn(`App bridge: the app's injected hello is invalid: ${Dk.N(ik.error)}`), null)
+                 if ("object" !== typeof zC || null === zC || !Object.prototype.hasOwnProperty.call(zC, wC.c)) return null;
+                 const ZC = wC.j.safeParse(zC[wC.c]);
+                 return ZC.success ? ZC.data : (console.warn(`App bridge: the app's injected hello is invalid: ${QC.J(ZC.error)}`), null)
```

#### 353. `bundles/bloxd.io/main.js` (Changed code · before: `L10676` → after: `L10688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10688) · [Before (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10676)

```diff
-         }, , , , , , , (kk, ek, ik) => {
+         }, , , , (CC, zC, ZC) => {
```

#### 354. `bundles/bloxd.io/main.js` (Changed code · before: `L10679-L10680` → after: `L10691-L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10691-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10691-L10693) · [Before (L10679-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10679-L10680)

```diff
-             i: () => he,
-             m: () => qe,
+             g: () => Xz,
+             j: () => Yz,
+             l: () => Dz,
```

#### 355. `bundles/bloxd.io/main.js` (Changed code · before: `L10682-L10684` → after: `L10695-L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10695-L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10695-L10697) · [Before (L10682-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10682-L10684)

```diff
-             q: () => Ge,
-             t: () => Xe,
-             x: () => Re,
+             p: () => sz,
+             r: () => Oz,
+             v: () => QZ,
```

#### 356. `bundles/bloxd.io/main.js` (Changed code · before: `L10687-L10688` → after: `L10700-L10702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10700-L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10700-L10702) · [Before (L10687-L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10687-L10688)

```diff
-             D: () => We,
-             H: () => ii,
+             E: () => zZ,
+             F: () => fZ,
+             J: () => mC,
```

#### 357. `bundles/bloxd.io/main.js` (Changed code · before: `L10695-L10697` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10709) · [Before (L10695-L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10695-L10697)

```diff
-             Y: () => ki,
-             $: () => ce,
-             ab: () => ze
+             X: () => mz
```

#### 358. `bundles/bloxd.io/main.js` (Changed code · before: `L10726` → after: `L10738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10738) · [Before (L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10726)

```diff
-               const fk = ik?.Parent ? new Sk : this;
+               const wC = ZC?.Parent ? new bC : this;
```

#### 359. `bundles/bloxd.io/main.js` (Changed code · before: `L10749` → after: `L10761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10761) · [Before (L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10749)

```diff
-               super(`Encountered unidirectional transform during encode: ${kk}`), this.name = "ZodEncodeError"
+               super(`Encountered unidirectional transform during encode: ${CC}`), this.name = "ZodEncodeError"
```

#### 360. `bundles/bloxd.io/main.js` (Changed code · before: `L10893` → after: `L10905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10905) · [Before (L10893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10893)

```diff
-             return "string" === typeof kk ? kk : kk?.message
+             return "string" === typeof CC ? CC : CC?.message
```

#### 361. `bundles/bloxd.io/main.js` (Changed code · before: `L10927` → after: `L10939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10939) · [Before (L10927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10927)

```diff
-             for (const Dk of ik) "number" === typeof Dk ? ek.push(`[${Dk}]`) : "symbol" === typeof Dk ? ek.push(`[${JSON.stringify(String(Dk))}]`) : /[^\w$]/.test(Dk) ? ek.push(`[${JSON.stringify(Dk)}]`) : (ek.length && ek.push("."), ek.push(Dk));
+             for (const QC of ZC) "number" === typeof QC ? zC.push(`[${QC}]`) : "symbol" === typeof QC ? zC.push(`[${JSON.stringify(String(QC))}]`) : /[^\w$]/.test(QC) ? zC.push(`[${JSON.stringify(QC)}]`) : (zC.length && zC.push("."), zC.push(QC));
```

#### 362. `bundles/bloxd.io/main.js` (Changed code · before: `L10934` → after: `L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L10946) · [Before (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L10934)

```diff
-             for (const Dk of ik) ek.push(`\u2716 ${Dk.message}`), Dk.path?.length && ek.push(`  \u2192 at ${qk(Dk.path)}`);
+             for (const QC of ZC) zC.push(`\u2716 ${QC.message}`), QC.path?.length && zC.push(`  \u2192 at ${dC(QC.path)}`);
```

#### 363. `bundles/bloxd.io/main.js` (Changed code · before: `L11133` → after: `L11145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11145) · [Before (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11133)

```diff
-               gk.init(kk, ek), kk._zod.pattern = [...kk?._zod.bag?.patterns ?? []].pop() ?? (ik = kk._zod.bag, new RegExp(`^${ik?`[\\s\\S]{${ik?.minimum??0},${ik?.maximum??""}}`:"[\\s\\S]*"}$`)), kk._zod.parse = (ik, Dk) => {
+               LC.init(CC, zC), CC._zod.pattern = [...CC?._zod.bag?.patterns ?? []].pop() ?? (ZC = CC._zod.bag, new RegExp(`^${ZC?`[\\s\\S]{${ZC?.minimum??0},${ZC?.maximum??""}}`:"[\\s\\S]*"}$`)), CC._zod.parse = (ZC, QC) => {
```

#### 364. `bundles/bloxd.io/main.js` (Changed code · before: `L11227` → after: `L11239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11239) · [Before (L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11227)

```diff
-               if (!kk.shape?.[fk]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${fk}": expected a Zod schema`);
+               if (!CC.shape?.[wC]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${wC}": expected a Zod schema`);
```

#### 365. `bundles/bloxd.io/main.js` (Changed code · before: `L11338` → after: `L11350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11350) · [Before (L11338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11338)

```diff
-                 return new RegExp(`^(${kk.map((kk=>Kk(kk.source))).join("|")})$`)
+                 return new RegExp(`^(${CC.map((CC=>WC(CC.source))).join("|")})$`)
```

#### 366. `bundles/bloxd.io/main.js` (Changed code · before: `L11368` → after: `L11380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11380) · [Before (L11368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11368)

```diff
-                 if (!Dk || 0 === Object.keys(Dk).length) throw new Error(`Invalid discriminated union option at index "${ek.options.indexOf(ik)}"`);
+                 if (!QC || 0 === Object.keys(QC).length) throw new Error(`Invalid discriminated union option at index "${zC.options.indexOf(ZC)}"`);
```

#### 367. `bundles/bloxd.io/main.js` (Changed code · before: `L11381` → after: `L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11393) · [Before (L11381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11381)

```diff
-                 if (!kk || 0 === kk.size) throw new Error(`Invalid discriminated union option at index "${ek.options.indexOf(Dk)}"`);
+                 if (!CC || 0 === CC.size) throw new Error(`Invalid discriminated union option at index "${zC.options.indexOf(QC)}"`);
```

#### 368. `bundles/bloxd.io/main.js` (Changed code · before: `L11383` → after: `L11395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11395) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11383)

```diff
-                   if (ik.has(ek)) throw new Error(`Duplicate discriminator value "${String(ek)}"`);
+                   if (ZC.has(zC)) throw new Error(`Duplicate discriminator value "${String(zC)}"`);
```

#### 369. `bundles/bloxd.io/main.js` (Changed code · before: `L11485` → after: `L11497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11497) · [Before (L11485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11485)

```diff
-               kk._zod.values = Dk, kk._zod.pattern = new RegExp(`^(${ik.filter((kk=>yk.has(typeof kk))).map((kk=>"string"===typeof kk?Yk(kk):kk.toString())).join("|")})$`), kk._zod.parse = (ek, fk) => {
+               CC._zod.values = QC, CC._zod.pattern = new RegExp(`^(${ZC.filter((CC=>RC.has(typeof CC))).map((CC=>"string"===typeof CC?AC(CC):CC.toString())).join("|")})$`), CC._zod.parse = (zC, wC) => {
```

#### 370. `bundles/bloxd.io/main.js` (Changed code · before: `L11498` → after: `L11510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11510) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11498)

```diff
-               kk._zod.values = ik, kk._zod.pattern = new RegExp(`^(${ek.values.map((kk=>"string"===typeof kk?Yk(kk):kk?Yk(kk.toString()):String(kk))).join("|")})$`), kk._zod.parse = (Dk, fk) => {
+               CC._zod.values = ZC, CC._zod.pattern = new RegExp(`^(${zC.values.map((CC=>"string"===typeof CC?AC(CC):CC?AC(CC.toString()):String(CC))).join("|")})$`), CC._zod.parse = (QC, wC) => {
```

#### 371. `bundles/bloxd.io/main.js` (Changed code · before: `L11513` → after: `L11525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11525) · [Before (L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11513)

```diff
-                   return (bk instanceof Promise ? bk : Promise.resolve(bk)).then((kk => (ik.value = kk, ik)))
+                   return (nC instanceof Promise ? nC : Promise.resolve(nC)).then((CC => (ZC.value = CC, ZC)))
```

#### 372. `bundles/bloxd.io/main.js` (Changed code · before: `L11529` → after: `L11541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11541) · [Before (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11529)

```diff
-                 return kk ? new RegExp(`^(${Kk(kk.source)})?$`) : void 0
+                 return CC ? new RegExp(`^(${WC(CC.source)})?$`) : void 0
```

#### 373. `bundles/bloxd.io/main.js` (Changed code · before: `L11535` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11547) · [Before (L11535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11535)

```diff
-                 return void 0 === kk.value ? kk : ek.innerType._zod.run(kk, ik)
+                 return void 0 === CC.value ? CC : zC.innerType._zod.run(CC, ZC)
```

#### 374. `bundles/bloxd.io/main.js` (Changed code · before: `L11541-L11542` → after: `L11553-L11554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11553-L11554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11553-L11554) · [Before (L11541-L11542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11541-L11542)

```diff
-                 return kk ? new RegExp(`^(${Kk(kk.source)}|null)$`) : void 0
-               })), nk(kk._zod, "values", (() => ek.innerType._zod.values ? new Set([...ek.innerType._zod.values, null]) : void 0)), kk._zod.parse = (kk, ik) => null === kk.value ? kk : ek.innerType._zod.run(kk, ik)
+                 return CC ? new RegExp(`^(${WC(CC.source)}|null)$`) : void 0
+               })), MC(CC._zod, "values", (() => zC.innerType._zod.values ? new Set([...zC.innerType._zod.values, null]) : void 0)), CC._zod.parse = (CC, ZC) => null === CC.value ? CC : zC.innerType._zod.run(CC, ZC)
```

#### 375. `bundles/bloxd.io/main.js` (Changed code · before: `L11601` → after: `L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11613) · [Before (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11601)

```diff
-                 return Object.keys(Dk).length ? Dk : void 0
+                 return Object.keys(QC).length ? QC : void 0
```

#### 376. `bundles/bloxd.io/main.js` (Changed code · before: `L11811` → after: `L11823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11823) · [Before (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11811)

```diff
-               values: Array.isArray(kk) ? kk : [kk],
+               values: Array.isArray(CC) ? CC : [CC],
```

#### 377. `bundles/bloxd.io/main.js` (Changed code · before: `L11872` → after: `L11884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11884) · [Before (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11872)

```diff
-         }, , , , , (kk, ek, ik) => {
+         }, , , , (CC, zC, ZC) => {
```

#### 378. `bundles/bloxd.io/main.js` (Changed code · before: `L11874-L11875` → after: `L11886-L11887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11886-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11886-L11887) · [Before (L11874-L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11874-L11875)

```diff
-             d: () => mk,
-             f: () => rk,
+             c: () => qC,
+             g: () => fC,
```

#### 379. `bundles/bloxd.io/main.js` (Changed code · before: `L11877-L11878` → after: `L11889-L11890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11889-L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11889-L11890) · [Before (L11877-L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11877-L11878)

```diff
-             n: () => Mk,
-             p: () => Pk
+             m: () => FC,
+             o: () => oC
```

#### 380. `bundles/bloxd.io/main.js` (Changed code · before: `L11880-L11882` → after: `L11892-L11894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11892-L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11892-L11894) · [Before (L11880-L11882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11880-L11882)

```diff
-           var Dk = ik(146),
-             fk = ik(157);
-           const Sk = Dk.D({
+           var QC = ZC(123),
+             wC = ZC(131);
+           const bC = QC.C({
```

#### 381. `bundles/bloxd.io/main.js` (Changed code · before: `L11884-L11886` → after: `L11896-L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11896-L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11896-L11898) · [Before (L11884-L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11884-L11886)

```diff
-               notificationCanAsk: Dk.m(),
-               pushToken: Dk.y(Dk.W()),
-               privacyOptionsRequired: Dk.y(Dk.m())
+               notificationCanAsk: QC.j(),
+               pushToken: QC.v(QC.P()),
+               privacyOptionsRequired: QC.v(QC.j())
```

#### 382. `bundles/bloxd.io/main.js` (Changed code · before: `L11888-L11893` → after: `L11900-L11905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11900-L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11900-L11905) · [Before (L11888-L11893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11888-L11893)

```diff
-             bk = Dk.D({
-               protocol: Dk.C(),
-               platform: Dk.q(["ios", "android"]),
-               appVersion: Dk.W(),
-               build: Dk.W(),
-               capabilities: Dk.P(Dk.W(), Dk.C())
+             nC = QC.C({
+               protocol: QC.y(),
+               platform: QC.o(["ios", "android"]),
+               appVersion: QC.P(),
+               build: QC.P(),
+               capabilities: QC.L(QC.P(), QC.y())
```

#### 383. `bundles/bloxd.io/main.js` (Changed code · before: `L11895` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11907) · [Before (L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11895)

```diff
-             rk = Dk.t(bk, {
+             fC = QC.p(nC, {
```

#### 384. `bundles/bloxd.io/main.js` (Changed code · before: `L11898-L11900` → after: `L11910-L11912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11910-L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11910-L11912) · [Before (L11898-L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11898-L11900)

```diff
-             Pk = Dk.D({
-               protocols: Dk.i(Dk.C()),
-               webVersion: Dk.W()
+             oC = QC.C({
+               protocols: QC.g(QC.y()),
+               webVersion: QC.P()
```

#### 385. `bundles/bloxd.io/main.js` (Changed code · before: `L11908` → after: `L11920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11920) · [Before (L11908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11908)

```diff
-         }, , , , , , (kk, ek, ik) => {
+         }, , , , (CC, zC, ZC) => {
```

#### 386. `bundles/bloxd.io/main.js` (Changed code · before: `L11910-L11911` → after: `L11922-L11923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11922-L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11922-L11923) · [Before (L11910-L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11910-L11911)

```diff
-             e: () => bk,
-             g: () => Sk,
+             b: () => nC,
+             d: () => bC,
```

#### 387. `bundles/bloxd.io/main.js` (Changed code · before: `L11914-L11919` → after: `L11926-L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11926-L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11926-L11931) · [Before (L11914-L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11914-L11919)

```diff
-           var Dk = ik(146);
-           const fk = Dk.D({
-               top: Dk.C(),
-               right: Dk.C(),
-               bottom: Dk.C(),
-               left: Dk.C()
+           var QC = ZC(123);
+           const wC = QC.C({
+               top: QC.y(),
+               right: QC.y(),
+               bottom: QC.y(),
+               left: QC.y()
```

#### 388. `bundles/bloxd.io/main.js` (Changed code · before: `L11922-L11923` → after: `L11934-L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11934-L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11934-L11935) · [Before (L11922-L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11922-L11923)

```diff
-               setOrientation: Dk.D({
-                 orientation: Dk.q(["portrait", "landscape", "default"])
+               setOrientation: QC.C({
+                 orientation: QC.o(["portrait", "landscape", "default"])
```

#### 389. `bundles/bloxd.io/main.js` (Changed code · before: `L11929` → after: `L11941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11941) · [Before (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11929)

```diff
-         }, , , , , , , , (kk, ek, ik) => {
+         }, , , (CC, zC, ZC) => {
```

#### 390. `bundles/bloxd.io/main.js` (Changed code · before: `L11942-L11943` → after: `L11954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11954) · [Before (L11942-L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11942-L11943)

```diff
-             C: () => Sk,
-             D: () => Kk,
+             A: () => WC,
```

#### 391. `bundles/bloxd.io/main.js` (Changed code · before: `L11947-L11948` → after: `L11959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11959) · [Before (L11947-L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11947-L11948)

```diff
-             L: () => Hk,
-             P: () => lk,
+             K: () => PC,
```

#### 392. `bundles/bloxd.io/main.js` (Changed code · before: `L11951-L11956` → after: `L11962-L11968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11962-L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L11962-L11968) · [Before (L11951-L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L11951-L11956)

```diff
-             k: () => nk,
-             n: () => mk,
-             q: () => bk,
-             u: () => rk,
-             y: () => Dk,
-             z: () => fk
+             h: () => MC,
+             l: () => qC,
+             m: () => nC,
+             p: () => fC,
+             r: () => QC,
+             v: () => wC,
+             w: () => bC
```

#### 393. `bundles/bloxd.io/main.js` (Changed code · before: `L12019` → after: `L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12031) · [Before (L12019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12019)

```diff
-         }, , (kk, ek, ik) => {
+         }, , , , , , , , , (CC, zC, ZC) => {
```

#### 394. `bundles/bloxd.io/main.js` (Changed code · before: `L12021` → after: `L12033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12033) · [Before (L12021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12021)

```diff
-             e: () => Pk
+             b: () => oC
```

#### 395. `bundles/bloxd.io/main.js` (Changed code · before: `L12023-L12024` → after: `L12035-L12036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12035-L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12035-L12036) · [Before (L12023-L12024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12023-L12024)

```diff
-           var Dk = ik(151),
-             fk = ik(139),
+           var QC = ZC(127),
+             wC = ZC(119),
```

#### 396. `bundles/bloxd.io/main.js` (Changed code · before: `L12026` → after: `L12038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12038) · [Before (L12026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12026)

```diff
-             bk = ik(107);
+             nC = ZC(88);
```

#### 397. `bundles/bloxd.io/main.js` (Changed code · before: `L12031` → after: `L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12043) · [Before (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12031)

```diff
-               bk.currentUrl.removeSearchParam(rk), kk ? Sk.g.setItem(rk, "1") : Sk.g.removeItem(rk)
+               nC.currentUrl.removeSearchParam(fC), CC ? bC.k.setItem(fC, "1") : bC.k.removeItem(fC)
```

#### 398. `bundles/bloxd.io/main.js` (Changed code · before: `L12033-L12034` → after: `L12045-L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12045-L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12045-L12046) · [Before (L12033-L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12033-L12034)

```diff
-             const kk = (0, fk.b)();
-             return null !== kk ? (0, Dk.n)(kk, "appCheck") : !!(0, fk.f)() || "1" === Sk.g.getItem(rk) && void 0 !== window.ReactNativeWebView
+             const CC = (0, wC.e)();
+             return null !== CC ? (0, QC.m)(CC, "appCheck") : !!(0, wC.i)() || "1" === bC.k.getItem(fC) && void 0 !== window.ReactNativeWebView
```

#### 399. `bundles/bloxd.io/main.js` (Changed code · before: `L12036` → after: `L12048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12048) · [Before (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12036)

```diff
-         }, , (kk, ek, ik) => {
+         }, , , , (CC, zC, ZC) => {
```

#### 400. `bundles/bloxd.io/main.js` (Changed code · before: `L12038-L12041` → after: `L12050-L12052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12050-L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12050-L12052) · [Before (L12038-L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12038-L12041)

```diff
-             c: () => Kk,
-             f: () => mk,
-             h: () => Mk,
-             j: () => xk,
+             d: () => WC,
+             e: () => qC,
+             i: () => FC,
```

#### 401. `bundles/bloxd.io/main.js` (Changed code · before: `L12043-L12044` → after: `L12054-L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12054-L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12054-L12056) · [Before (L12043-L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12043-L12044)

```diff
-             q: () => Hk,
-             u: () => nk
+             p: () => gC,
+             t: () => SC,
+             x: () => MC
```

#### 402. `bundles/bloxd.io/main.js` (Changed code · before: `L12046` → after: `L12058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12058) · [Before (L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12046)

```diff
-           var Dk = ik(171);
+           var QC = ZC(155);
```

#### 403. `bundles/bloxd.io/main.js` (Changed code · before: `L12063` → after: `L12075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12075) · [Before (L12063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12063)

```diff
-             const ek = `${kk.vendor} ${kk.renderer}`;
+             const zC = `${CC.vendor} ${CC.renderer}`;
```

#### 404. `bundles/bloxd.io/main.js` (Changed code · before: `L12078-L12079` → after: `L12090-L12091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12090-L12091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12090-L12091) · [Before (L12078-L12079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12078-L12079)

```diff
-             (null !== (ik = kk.antiAliasing) && void 0 !== ik ? ik : ek.antiAliasing) && ek.antiAliasing && (fk.antiAliasing = kk.antiAliasing);
-             const Sk = null !== (Dk = kk.pixelScale) && void 0 !== Dk ? Dk : ek.pixelScale;
+             (null !== (ZC = CC.antiAliasing) && void 0 !== ZC ? ZC : zC.antiAliasing) && zC.antiAliasing && (wC.antiAliasing = CC.antiAliasing);
+             const bC = null !== (QC = CC.pixelScale) && void 0 !== QC ? QC : zC.pixelScale;
```

#### 405. `bundles/bloxd.io/main.js` (Changed code · before: `L12086-L12087` → after: `L12098-L12099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12098-L12099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12098-L12099) · [Before (L12086-L12087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12086-L12087)

```diff
-             void 0 !== ek.antiAliasing && kk.antiAliasing === nk.antiAliasing && (Dk.antiAliasing = null !== (fk = ek.antiAliasing) && void 0 !== fk ? fk : ik.antiAliasing);
-             void 0 !== ek.pixelScale && kk.pixelScale === nk.pixelScale && (Dk.pixelScale = null !== (Sk = ek.pixelScale) && void 0 !== Sk ? Sk : ik.pixelScale);
+             void 0 !== zC.antiAliasing && CC.antiAliasing === MC.antiAliasing && (QC.antiAliasing = null !== (wC = zC.antiAliasing) && void 0 !== wC ? wC : ZC.antiAliasing);
+             void 0 !== zC.pixelScale && CC.pixelScale === MC.pixelScale && (QC.pixelScale = null !== (bC = zC.pixelScale) && void 0 !== bC ? bC : ZC.pixelScale);
```

#### 406. `bundles/bloxd.io/main.js` (Changed code · before: `L12090` → after: `L12102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12102) · [Before (L12090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12090)

```diff
-         }, , (kk, ek, ik) => {
+         }, , , , , , , , (CC, zC, ZC) => {
```

#### 407. `bundles/bloxd.io/main.js` (Changed code · before: `L12092-L12094` → after: `L12104-L12107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12104-L12107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12104-L12107) · [Before (L12092-L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12092-L12094)

```diff
-             B: () => bk,
-             D: () => Uk,
-             E: () => Hk,
+             C: () => wC,
+             G: () => nC,
+             K: () => gC,
+             L: () => SC,
```

#### 408. `bundles/bloxd.io/main.js` (Changed code · before: `L12096` → after: `L12109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12109) · [Before (L12096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12096)

```diff
-             f: () => Kk,
+             g: () => WC,
```

#### 409. `bundles/bloxd.io/main.js` (Changed code · before: `L12098` → after: `L12111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12111) · [Before (L12098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12098)

```diff
-             k: () => Pk,
+             j: () => oC,
```

#### 410. `bundles/bloxd.io/main.js` (Changed code · before: `L12102-L12105` → after: `L12115-L12117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12115-L12117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12115-L12117) · [Before (L12102-L12105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12102-L12105)

```diff
-             r: () => rk,
-             v: () => nk,
-             w: () => wk,
-             z: () => fk
+             s: () => fC,
+             u: () => MC,
+             y: () => pC
```

#### 411. `bundles/bloxd.io/main.js` (Changed code · before: `L12125` → after: `L12137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12137) · [Before (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12125)

```diff
-         }, , , , , (kk, ek, ik) => {
+         }, , , , , , , (CC, zC, ZC) => {
```

#### 412. `bundles/bloxd.io/main.js` (Changed code · before: `L12127-L12130` → after: `L12139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12139) · [Before (L12127-L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12127-L12130)

```diff
-             B: () => mk,
-             E: () => fk,
-             I: () => Uk,
-             L: () => rk,
+             c: () => WC,
```

#### 413. `bundles/bloxd.io/main.js` (Changed code · before: `L12139` → after: `L12151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12151) · [Before (L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12139)

```diff
-             x: () => bk
+             z: () => fC
```

#### 414. `bundles/bloxd.io/main.js` (Changed code · before: `L12154` → after: `L12166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12166) · [Before (L12154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12154)

```diff
-         }, , , (kk, ek, ik) => {
+         }, , , , , , , , , (CC, zC, ZC) => {
```

#### 415. `bundles/bloxd.io/main.js` (Changed code · before: `L12156-L12158` → after: `L12168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12168) · [Before (L12156-L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12156-L12158)

```diff
-             $: () => zk,
-             A: () => Ik,
-             D: () => Fk,
+             B: () => dC,
```

#### 416. `bundles/bloxd.io/main.js` (Changed code · before: `L12162-L12173` → after: `L12171-L12183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12171-L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12171-L12183) · [Before (L12162-L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12162-L12173)

```diff
-             K: () => Ak,
-             O: () => Vk,
-             P: () => Ck,
-             T: () => Lk,
-             W: () => hk,
-             X: () => uk,
-             c: () => dk,
-             db: () => yk,
-             fb: () => ak,
-             g: () => Qk,
-             ib: () => Ek,
-             j: () => rk,
+             L: () => vC,
+             N: () => qC,
+             R: () => iC,
+             U: () => IC,
+             V: () => hC,
+             Y: () => JC,
+             Z: () => xC,
+             ab: () => cC,
+             cb: () => YC,
+             d: () => eC,
+             gb: () => HC,
+             h: () => EC,
+             kb: () => RC,
```

#### 417. `bundles/bloxd.io/main.js` (Changed code · before: `L12180` → after: `L12191-L12192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12191-L12192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12191-L12192) · [Before (L12180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12180)

```diff
-             w: () => qk
+             ub: () => pC,
+             x: () => oC
```

#### 418. `bundles/bloxd.io/main.js` (Changed code · before: `L12182-L12184` → after: `L12194-L12196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12194-L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12194-L12196) · [Before (L12182-L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12182-L12184)

```diff
-           var Dk = ik(165),
-             fk = ik(171),
-             Sk = ik(182);
+           var QC = ZC(134),
+             wC = ZC(155),
+             bC = ZC(179);
```

#### 419. `bundles/bloxd.io/main.js` (Changed code · before: `L12195` → after: `L12207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12207) · [Before (L12195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12195)

```diff
-             Mk = ["shop.buy_pack", "shop.gift_pack", "shop.buy_premium_currency", "auth.login_provider", "auth.login_done", "auth.login_failed", "home.create_game_cta", "home.browser_tip", "social.open_menu", "social.friend_join", "social.add_friend", "social.remove_friend", "soc … [truncated]
+             FC = ["shop.buy_pack", "shop.gift_pack", "shop.buy_premium_currency", "auth.login_provider", "auth.login_done", "auth.login_failed", "home.create_game_cta", "home.browser_tip", "social.open_menu", "social.friend_join", "social.add_friend", "social.remove_friend", "soc … [truncated]
```

#### 420. `bundles/bloxd.io/main.js` (Changed code · before: `L12198` → after: `L12210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12210) · [Before (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12198)

```diff
-             nk = Kk.flatMap((kk => xk.map((ek => `${kk}:${ek}`)))),
+             MC = WC.flatMap((CC => NC.map((zC => `${CC}:${zC}`)))),
```

#### 421. `bundles/bloxd.io/main.js` (Changed code · before: `L12202` → after: `L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12214) · [Before (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12202)

```diff
-             }, ((kk, ek) => `queued_${ek}`));
+             }, ((CC, zC) => `queued_${zC}`));
```

#### 422. `bundles/bloxd.io/main.js` (Changed code · before: `L12205` → after: `L12217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12217) · [Before (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12205)

```diff
-             return `queued_${Math.min(kk,Uk)}`
+             return `queued_${Math.min(CC,gC)}`
```

#### 423. `bundles/bloxd.io/main.js` (Changed code · before: `L12208-L12209` → after: `L12220-L12221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12220-L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12220-L12221) · [Before (L12208-L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12208-L12209)

```diff
-             pk = ["cached", "a", "b", "a_b", "appCheck", "appCheck_b", ...["blocked", "blocked_holdout", "blocked_ipv6", "direct_reachable", "cf_unreachable", "cf_join", "cf_join_failed", ...lk.map((kk => `cf_join_failed:${kk}`)), "cf_join_refused", "cf_join_left"], "direct", "cf … [truncated]
-             yk = (Sk.f, Dk.L, fk.z, 20),
+             GC = ["cached", "a", "b", "a_b", "appCheck", "appCheck_b", ...["blocked", "blocked_ipv6", "direct_reachable", "cf_unreachable", "cf_join", "cf_join_failed", ...PC.map((CC => `cf_join_failed:${CC}`)), "cf_join_refused", "cf_join_left"], "direct", "cf", "direct_failed", … [truncated]
+             RC = (bC.e, QC.I, wC.C, 20),
```

#### 424. `bundles/bloxd.io/main.js` (Changed code · before: `L12220` → after: `L12232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12232) · [Before (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12220)

```diff
-             qk = new RegExp(`^[A-Za-z0-9_.:-]{0,${uk}}$`),
+             dC = new RegExp(`^[A-Za-z0-9_.:-]{0,${YC}}$`),
```

#### 425. `bundles/bloxd.io/main.js` (Changed code · before: `L12228` → after: `L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12240) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12228)

```diff
-         }, , , (kk, ek, ik) => {
+         }, , , , , , , , (CC, zC, ZC) => {
```

#### 426. `bundles/bloxd.io/main.js` (Changed code · before: `L12230` → after: `L12242-L12243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12242-L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12242-L12243) · [Before (L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12230)

```diff
-             d: () => Sk,
+             b: () => bC,
+             e: () => QC,
```

#### 427. `bundles/bloxd.io/main.js` (Changed code · before: `L12232` → after: `L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12245) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12232)

```diff
-             h: () => fk,
+             i: () => fC,
```

#### 428. `bundles/bloxd.io/main.js` (Changed code · before: `L12234-L12235` → after: `L12247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12247) · [Before (L12234-L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12234-L12235)

```diff
-             m: () => bk,
-             o: () => Pk
+             n: () => oC
```

#### 429. `bundles/bloxd.io/main.js` (Changed code · before: `L12239-L12252` → after: `L12251-L12264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12251-L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12251-L12264) · [Before (L12239-L12252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12239-L12252)

```diff
-               operatingSystem: "PM",
-               platformType: "fM",
-               gpuVendor: "SM",
-               gpuFamily: "nM",
-               softwareRenderer: "CM",
-               iosDeviceClass: "uM",
-               deviceMemory: "dM",
-               screenResolutionBand: "IM",
-               refreshHzBand: "FM",
-               renderBackend: "bM",
-               webgpuFallbackReason: "pM",
-               antiAliasing: "qM",
-               shaderPackActive: "lM",
-               shaderPackShadows: "jM"
+               operatingSystem: "Jo",
+               platformType: "Go",
+               gpuVendor: "Ro",
+               gpuFamily: "Ko",
+               softwareRenderer: "jo",
+               iosDeviceClass: "Vo",
+               deviceMemory: "Bo",
+               screenResolutionBand: "zq",
+               refreshHzBand: "ko",
+               renderBackend: "Ao",
+               webgpuFallbackReason: "uo",
+               antiAliasing: "Cq",
+               shaderPackActive: "Xo",
+               shaderPackShadows: "Lo"
```

#### 430. `bundles/bloxd.io/main.js` (Changed code · before: `L12258` → after: `L12270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12270) · [Before (L12258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12258)

```diff
-         }, , , , , , , (kk, ek, ik) => {
+         }, , , , , (CC, zC, ZC) => {
```

#### 431. `bundles/bloxd.io/main.js` (Changed code · before: `L12260-L12262` → after: `L12272-L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12272-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12272-L12274) · [Before (L12260-L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12260-L12262)

```diff
-             c: () => rk,
-             g: () => bk,
-             j: () => mk,
+             e: () => fC,
+             f: () => nC,
+             h: () => qC,
```

#### 432. `bundles/bloxd.io/main.js` (Changed code · before: `L12264-L12265` → after: `L12276-L12277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12276-L12277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12276-L12277) · [Before (L12264-L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12264-L12265)

```diff
-             l: () => Sk,
-             m: () => Pk
+             o: () => bC,
+             q: () => oC
```

#### 433. `bundles/bloxd.io/main.js` (Changed code · before: `L12267-L12268` → after: `L12279-L12280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12279-L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12279-L12280) · [Before (L12267-L12268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12267-L12268)

```diff
-           var Dk = ik(194),
-             fk = ik(212);
+           var QC = ZC(189),
+             wC = ZC(201);
```

#### 434. `bundles/bloxd.io/main.js` (Changed code · before: `L12280-L12281` → after: `L12292-L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12292-L12293) · [Before (L12280-L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12280-L12281)

```diff
-               zp: .5,
-               Qp: 1.8,
+               tp: .5,
+               Dp: 1.8,
```

#### 435. `bundles/bloxd.io/main.js` (Changed code · before: `L12291` → after: `L12303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12303) · [Before (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12291)

```diff
-               oU: 32,
+               Ig: 32,
```

#### 436. `bundles/bloxd.io/main.js` (Changed code · before: `L12298` → after: `L12310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12310) · [Before (L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12298)

```diff
-               Xp: !0,
+               jp: !0,
```

#### 437. `bundles/bloxd.io/main.js` (Changed code · before: `L12302` → after: `L12314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12314) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12302)

```diff
-               Sy: 6,
+               yp: 6,
```

#### 438. `bundles/bloxd.io/main.js` (Changed code · before: `L12337` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12349) · [Before (L12337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12337)

```diff
-               Wx: 3,
+               hN: 3,
```

#### 439. `bundles/bloxd.io/main.js` (Changed code · before: `L12339-L12340` → after: `L12351-L12352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12351-L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12351-L12352) · [Before (L12339-L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12339-L12340)

```diff
-               discordProductionId: fk.i,
-               discordPreprodId: fk.e,
+               discordProductionId: wC.f,
+               discordPreprodId: wC.c,
```

#### 440. `bundles/bloxd.io/main.js` (Changed code · before: `L12342-L12343` → after: `L12354-L12355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12354-L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12354-L12355) · [Before (L12342-L12343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12342-L12343)

```diff
-               turnstileDisabled: !1 === Dk.b.greenlightChecksEnabled,
-               recaptchaDisabled: !1 === Dk.b.greenlightChecksEnabled,
+               turnstileDisabled: !1 === QC.e.greenlightChecksEnabled,
+               recaptchaDisabled: !1 === QC.e.greenlightChecksEnabled,
```

#### 441. `bundles/bloxd.io/main.js` (Changed code · before: `L12735` → after: `L12747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12747) · [Before (L12735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12735)

```diff
-             if (Kk.has(kk)) throw new Error(`Duplicate leave code: ${kk}`);
+             if (WC.has(CC)) throw new Error(`Duplicate leave code: ${CC}`);
```

#### 442. `bundles/bloxd.io/main.js` (Changed code · before: `L12740` → after: `L12752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12752) · [Before (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12740)

```diff
-             b: () => Sk
+             e: () => bC
```

#### 443. `bundles/bloxd.io/main.js` (Changed code · before: `L12742-L12743` → after: `L12754-L12755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12754-L12755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12754-L12755) · [Before (L12742-L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12742-L12743)

```diff
-           var Dk = ik(197),
-             fk = ik(204);
+           var QC = ZC(191),
+             wC = ZC(193);
```

#### 444. `bundles/bloxd.io/main.js` (Changed code · before: `L12758` → after: `L12770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12770) · [Before (L12758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12758)

```diff
-           (0, fk.m)() && function(kk) {
+           (0, wC.n)() && function(CC) {
```

#### 445. `bundles/bloxd.io/main.js` (Changed code · before: `L12760` → after: `L12772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12772) · [Before (L12760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12760)

```diff
-               const ik = (0, Dk.c)({
+               const ZC = (0, QC.d)({
```

#### 446. `bundles/bloxd.io/main.js` (Changed code · before: `L12764` → after: `L12776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12776) · [Before (L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12764)

```diff
-               if (void 0 !== ik) throw new Error(`Rename ${ek} to ${ik} in packages/shared/src/localConfigValues.ts`);
+               if (void 0 !== ZC) throw new Error(`Rename ${zC} to ${ZC} in packages/shared/src/localConfigValues.ts`);
```

#### 447. `bundles/bloxd.io/main.js` (Changed code · before: `L12769` → after: `L12781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12781) · [Before (L12769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12769)

```diff
-               const kk = ik(221);
+               const CC = ZC(210);
```

#### 448. `bundles/bloxd.io/main.js` (Changed code · before: `L12773` → after: `L12785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12785) · [Before (L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12773)

```diff
-         }, , , (kk, ek, ik) => {
+         }, , (CC, zC, ZC) => {
```

#### 449. `bundles/bloxd.io/main.js` (Changed code · before: `L12788` → after: `L12799-L12800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12799-L12800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12799-L12800) · [Before (L12788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12788)

```diff
-             e: () => Sk
+             h: () => QC,
+             i: () => bC
```

#### 450. `bundles/bloxd.io/main.js` (Changed code · before: `L12790` → after: `L12802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12802) · [Before (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12790)

```diff
-         }, , , , , , , (kk, ek, ik) => {
+         }, , (CC, zC, ZC) => {
```

#### 451. `bundles/bloxd.io/main.js` (Changed code · before: `L12795` → after: `L12807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12807) · [Before (L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12795)

```diff
-             m: () => Sk
+             n: () => bC
```

#### 452. `bundles/bloxd.io/main.js` (Changed code · before: `L12797` → after: `L12809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12809) · [Before (L12797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12797)

```diff
-           var Dk = ik(212);
+           var QC = ZC(201);
```

#### 453. `bundles/bloxd.io/main.js` (Changed code · before: `L12808` → after: `L12820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12820) · [Before (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12808)

```diff
-               return kk.includes("preprod") || kk.includes(Dk.e)
+               return CC.includes("preprod") || CC.includes(QC.c)
```

#### 454. `bundles/bloxd.io/main.js` (Changed code · before: `L12819` → after: `L12831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/main.js#L12831) · [Before (L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/main.js#L12819)

```diff
-               if (!mk.includes(ek)) throw new Error(`Invalid port offset "${kk}". Must be one of: ${mk.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+               if (!qC.includes(zC)) throw new Error(`Invalid port offset "${CC}". Must be one of: ${qC.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```
