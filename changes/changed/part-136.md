# Changed — Bundle Modifications Report (Part 136 / 141)

- **Updated at**: `2026-11-25T08:36 JST`
- **Part**: `136 / 141` (**439** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 135](part-135.md) · [Part 137 →](part-137.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89)

#### 8. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L90)

```diff
-       (0, gB.o)("webgpuloss", BB)
+       (0, wt.n)("webgpuloss", tt)
```

#### 9. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L95-L104` → after: `L95-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L95-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L95-L104) · [Before (L95-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L95-L104)

```diff
-         lossHolds: (0, FB.D)(),
-         lossStopsPack: (0, FB.K)(),
-         anyLoss: (0, FB.l)(),
-         oldIntelDriver: !0 === hB.m.getItem(zB.H),
-         defaultOffForPacks: JB.d.isWebGpuDefaultOff(),
-         defaultOffReason: JB.d.webGpuDefaultOffReason(),
-         settingStored: hB.m.getItem(TB.wc),
-         setting: JB.d.get("clientEscMenuOptions").useWebGpu,
-         urlRenderer: cB.currentUrl.getSearchParam(nB.b),
-         storedRenderer: hB.m.getItem(nB.c)
+         lossHolds: (0, Et.z)(),
+         lossStopsPack: (0, Et.F)(),
+         anyLoss: (0, Et.g)(),
+         oldIntelDriver: !0 === Qt.e.getItem(lt.F),
+         defaultOffForPacks: qt.b.isWebGpuDefaultOff(),
+         defaultOffReason: qt.b.webGpuDefaultOffReason(),
+         settingStored: Qt.e.getItem(Ot.Rb),
+         setting: qt.b.get("clientEscMenuOptions").useWebGpu,
+         urlRenderer: Ht.currentUrl.getSearchParam(Xt.c),
+         storedRenderer: Qt.e.getItem(Xt.e)
```

#### 10. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L111)

```diff
-         if ("object" !== typeof BB) return `unreadable (${typeof BB})`;
+         if ("object" !== typeof tt) return `unreadable (${typeof tt})`;
```

#### 11. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L114)

```diff
-           oB = ["browser " + (IB ? "this one" : "another"), null === JB ? "no time" : `set ${((ZB-JB)/qB.p).toFixed(1)} h ago`, `losses ${"number"===typeof TB.losses?TB.losses:"unset (1)"}${null!==JB&&ZB-JB<qB.l?", the last within a day":""}`, `first page ${"hidden"===TB.firstPag … [truncated]
+           Dt = ["browser " + (et ? "this one" : "another"), null === qt ? "no time" : `set ${((Vt-qt)/yt.o).toFixed(1)} h ago`, `losses ${"number"===typeof Ot.losses?Ot.losses:"unset (1)"}${null!==qt&&Vt-qt<yt.l?", the last within a day":""}`, `first page ${"hidden"===Ot.firstPag … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L116-L117` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L116-L117) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L116-L117)

```diff
-           const BB = "string" === typeof TB.reason ? CB(TB.reason, yB.e) : "no reason";
-           oB.push(`cause ${BB} ${!0===TB.causeSent?"reported":"unreported"}`)
+           const tt = "string" === typeof Ot.reason ? Ct(Ot.reason, Nt.d) : "no reason";
+           Dt.push(`cause ${tt} ${!0===Ot.causeSent?"reported":"unreported"}`)
```

#### 13. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L122)

```diff
-           return "object" === typeof BB && null !== BB && BB.browser === (0, FB.h)()
+           return "object" === typeof tt && null !== tt && tt.browser === (0, Et.f)()
```

#### 14. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L130)

```diff
-       const BB = (0, FB.s)().now;
+       const tt = (0, Et.p)().now;
```

#### 15. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L139-L140` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L139-L140) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L139-L140)

```diff
-       } = (0, FB.s)(), TB = JSON.stringify(BB) === JSON.stringify(IB) ? "XF" : `now ${rB(IB)}`;
-       PB(`load (${vB.B?"wasm":"js"}, os ${(0,kB.getOperatingSystem)()}): stored loss ${rB(BB)}; ${TB}; cause kept apart ${function(BB,IB){if(null===BB||void 0===BB)return"none";const{reason:ZB,at:TB}="object"===typeof BB?BB:{},JB="number"===typeof TB?`
+       } = (0, Et.p)(), Ot = JSON.stringify(tt) === JSON.stringify(et) ? "hE" : `now ${kt(et)}`;
+       Lt(`load (${dt.K?"wasm":"js"}, os ${(0,jt.getOperatingSystem)()}): stored loss ${kt(tt)}; ${Ot}; cause kept apart ${function(tt,et){if(null===tt||void 0===tt)return"none";const{reason:Vt,at:Ot}="object"===typeof tt?tt:{},qt="number"===typeof Ot?`
```

#### 16. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L142)

```diff
-           ((IB - TB) / qB.p).toFixed(1)
+           ((et - Ot) / yt.o).toFixed(1)
```

#### 17. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L146)

```diff
-           "string" === typeof ZB ? CB(ZB, yB.e) : "no reason"
+           "string" === typeof Vt ? Ct(Vt, Nt.d) : "no reason"
```

#### 18. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L150)

```diff
-         `}((0,NB.i)(),Date.now())}; unreported ${function(BB,IB){if(null===BB||void 0===BB||"object"!==typeof BB)return"none";const ZB=BB;return IB.map((BB=>`${BB} ${"number"===typeof ZB[BB]?ZB[BB]:0}`)).join(", ")}(ZB,FB.e)}; webgpu_loss_page ${FB.G}`), PB(`load: ${sB(RB())}; pa … [truncated]
+         `}((0,ft.j)(),Date.now())}; unreported ${function(tt,et){if(null===tt||void 0===tt||"object"!==typeof tt)return"none";const Vt=tt;return et.map((tt=>`${tt} ${"number"===typeof Vt[tt]?Vt[tt]:0}`)).join(", ")}(Vt,Et.c)}; webgpu_loss_page ${Et.A}`), Lt(`load: ${Kt(Ft())}; pa … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L156-L157` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L156-L157) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L156-L157)

```diff
-         return `engine (js): useWebGpu ${QB(BB.useWebGpu)} (${TB}); ${wB(IB)}; webgpu fallback ${null!==ZB&&void 0!==ZB?ZB:"unset"}`
-       }(BB, (0, oB.f)(), (0, kB.getWebGpuFallbackReason)()))
+         return `engine (js): useWebGpu ${ut(tt.useWebGpu)} (${Ot}); ${ht(et)}; webgpu fallback ${null!==Vt&&void 0!==Vt?Vt:"unset"}`
+       }(tt, (0, Dt.k)(), (0, jt.getWebGpuFallbackReason)()))
```

#### 20. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L174)

```diff
-           }] = await Promise.all([ZB.e(117).then((() => ZB(39281))), ZB.e(93).then((() => ZB(41304))), ZB.e(141).then((() => ZB(41308)))]), kB = await JB.load();
+           }] = await Promise.all([Vt.e(117).then((() => Vt(39419))), Vt.e(93).then((() => Vt(41494))), Vt.e(141).then((() => Vt(41503)))]), jt = await qt.load();
```

#### 21. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L176)

```diff
-           const cB = null !== (IB = oB()) && void 0 !== IB ? IB : GB(BB),
+           const Ht = null !== (et = Dt()) && void 0 !== et ? et : mt(tt),
```

#### 22. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L180` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L180) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L180)

```diff
-             text: `${"active"===kB.status?iB(kB.pack.name,"active",nB.length):iB(null,`blocked (${kB.messageKey})`,null!==(TB=null===nB||void 0===nB?void 0:nB.length)&&void 0!==TB?TB:null)}; game policy ${cB}, runs in it ${hB?"yes":"no"}`,
+             text: `${"active"===jt.status?St(jt.pack.name,"active",Xt.length):St(null,`blocked (${jt.messageKey})`,null!==(Ot=null===Xt||void 0===Xt?void 0:Xt.length)&&void 0!==Ot?Ot:null)}; game policy ${Ht}, runs in it ${Qt?"yes":"no"}`,
```

#### 23. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L184)

```diff
-       if (null === GB) return void(aB.noPack() && PB(`join ${oB}: no shader pack on this page (further joins without one not logged)`));
+       if (null === mt) return void(Rt.noPack() && Lt(`join ${Dt}: no shader pack on this page (further joins without one not logged)`));
```

#### 24. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L187)

```diff
-       if ("cap" === vB) return void PB(`join ${oB}: further joins not logged`);
+       if ("cap" === dt) return void Lt(`join ${Dt}: further joins not logged`);
```

#### 25. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L191-L193` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L191-L193) · [Before (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L191-L193)

```diff
-               return void 0 === BB.couldntRun ? "joined" : `joined without the pack: ${BB.couldntRun}`;
-             case "fZ":
-               return "fZ";
+               return void 0 === tt.couldntRun ? "joined" : `joined without the pack: ${tt.couldntRun}`;
+             case "nV":
+               return "nV";
```

#### 26. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L195)

```diff
-               return `failed: ${BB.messageKey}`
+               return `failed: ${tt.messageKey}`
```

#### 27. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L198-L199` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L198-L199) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L198-L199)

```diff
-         cB = ("ok" === IB.status ? IB.couldntRun : "failed" === IB.status ? IB.messageKey : void 0) === pB ? `; cause: ${JB()}` : "";
-       "outcome" !== vB ? (PB(`join ${oB}: ${GB.text}`), GB.runs && (PB(`join ${oB}: needs WebGPU; ${TB()}`), PB(`join ${oB}: ${sB(RB())}`)), PB(`join ${oB}: ${kB}${cB}`)) : PB(`join ${oB}: ${kB}${cB}`)
+         Ht = ("ok" === et.status ? et.couldntRun : "failed" === et.status ? et.messageKey : void 0) === ct ? `; cause: ${qt()}` : "";
+       "outcome" !== dt ? (Lt(`join ${Dt}: ${mt.text}`), mt.runs && (Lt(`join ${Dt}: needs WebGPU; ${Ot()}`), Lt(`join ${Dt}: ${Kt(Ft())}`)), Lt(`join ${Dt}: ${jt}${Ht}`)) : Lt(`join ${Dt}: ${jt}${Ht}`)
```

#### 28. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L205-L206` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L205-L206) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L205-L206)

```diff
-       return uB(BB, ZB, (() => `Lite runtime ${null===IB?"no":"yes, running "+(JB?"yes":"no")}; ${wB((0,oB.f)())}`), (() => {
-         return BB = HB, IB = RB(), ZB = "ios" === (0, kB.getOperatingSystem)(), TB = mB(), null === BB ? "engine choice not seen" : BB.packActive ? (0, UB.e)(BB.packActive, BB.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : IB.lossSt … [truncated]
+       return Ut(tt, Vt, (() => `Lite runtime ${null===et?"no":"yes, running "+(qt?"yes":"no")}; ${ht((0,Dt.k)())}`), (() => {
+         return tt = It, et = Ft(), Vt = "ios" === (0, jt.getOperatingSystem)(), Ot = Gt(), null === tt ? "engine choice not seen" : tt.packActive ? (0, Mt.e)(tt.packActive, tt.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : et.lossSt … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L217)

```diff
-         couldntRun: null !== ZB && void 0 !== ZB ? ZB : void 0
+         couldntRun: null !== Vt && void 0 !== Vt ? Vt : void 0
```

#### 30. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L220)

```diff
-         return null === BB ? "pick not seen" : "off_after_loss" === BB.reason ? `off after a loss, ${"pack"===BB.source?OB(ZB,TB):`from ${null!==(vB=BB.source)&&void 0!==vB?vB:"none"}`}` : "not_requested" === BB.reason ? `not requested, from ${null!==(GB=BB.source)&&void 0!==GB?G … [truncated]
+         return null === tt ? "pick not seen" : "off_after_loss" === tt.reason ? `off after a loss, ${"pack"===tt.source?vt(Vt,Ot):`from ${null!==(dt=tt.source)&&void 0!==dt?dt:"none"}`}` : "not_requested" === tt.reason ? `not requested, from ${null!==(mt=tt.source)&&void 0!==mt?m … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L230-L231` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L230-L231) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L230-L231)

```diff
-         return `loss (${BB}): ${IB}${null===ZB?"":` ${CB(ZB,dB)}`}; ${TB}`
-       }(BB, IB, ZB, `stored ${rB((0,FB.s)().now)}; holds ${JB.lossHolds?"yes":"no"}, stops packs ${JB.lossStopsPack?"yes":"no"}`))
+         return `loss (${tt}): ${et}${null===Vt?"":` ${Ct(Vt,Jt)}`}; ${Ot}`
+       }(tt, et, Vt, `stored ${kt((0,Et.p)().now)}; holds ${qt.lossHolds?"yes":"no"}, stops packs ${qt.lossStopsPack?"yes":"no"}`))
```

#### 32. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L234)

```diff
-   34095: (BB, IB, ZB) => {
+   34305: (tt, et, Vt) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1044 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1)

```diff
- /*! For license information please see c6gaap.worldgenWorker.c68f1924.chunk.js.LICENSE.txt */
+ /*! For license information please see igzsf.worldgenWorker.0cbf67e3.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4)

```diff
-       1723: BB => {
+       1744: tt => {
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82)

```diff
-             return IB === 1 / 0 ? IB : void 0 !== IB ? Math.max(0, Math.ceil(IB - ZB())) : 0
+             return et === 1 / 0 ? et : void 0 !== et ? Math.max(0, Math.ceil(et - Vt())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151)

```diff
-       3007: BB => {
+       2940: tt => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157)

```diff
-       3011: BB => {
+       2945: tt => {
```

#### 6. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167)

```diff
-       39821: BB => {
+       39962: tt => {
```

#### 7. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171)

```diff
-             for (var GB = JB[oB] = new Array(IB), vB = oB < TB / 2 ? oB : oB + 1, kB = 1; kB <= IB; kB++) {
+             for (var mt = qt[Dt] = new Array(et), dt = Dt < Ot / 2 ? Dt : Dt + 1, jt = 1; jt <= et; jt++) {
```

#### 8. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L178-L180` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180)

```diff
-       3e3: (BB, IB, ZB) => {
-         var TB = ZB(3007),
-           JB = ZB(3011),
+       2934: (tt, et, Vt) => {
+         var Ot = Vt(2940),
+           qt = Vt(2945),
```

#### 9. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L325-L328` → after: `L325-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328) · [Before (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328)

```diff
-       39793: (BB, IB, ZB) => {
-         var TB = ZB(39797).integer,
-           JB = ZB(39804),
-           oB = ZB(39813);
+       39939: (tt, et, Vt) => {
+         var Ot = Vt(39943).integer,
+           qt = Vt(39950),
+           Dt = Vt(39956);
```

#### 10. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L392-L395` → after: `L392-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395) · [Before (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395)

```diff
-       39829: (BB, IB, ZB) => {
-         var TB = ZB(39797).array,
-           JB = ZB(39804),
-           oB = ZB(39813);
+       39968: (tt, et, Vt) => {
+         var Ot = Vt(39943).array,
+           qt = Vt(39950),
+           Dt = Vt(39956);
```

#### 11. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L478-L479` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479)

```diff
-       39813: (BB, IB, ZB) => {
-         var TB = ZB(39821);
+       39956: (tt, et, Vt) => {
+         var Ot = Vt(39962);
```

#### 12. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L498-L500` → after: `L498-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500)

```diff
-       39784: (BB, IB, ZB) => {
-         var TB = ZB(39793),
-           JB = ZB(39829);
+       39935: (tt, et, Vt) => {
+         var Ot = Vt(39939),
+           qt = Vt(39968);
```

#### 13. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521)

```diff
-       39804: BB => {
+       39950: tt => {
```

#### 14. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535)

```diff
-       39797: BB => {
+       39943: tt => {
```

#### 15. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L561-L562` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562)

```diff
-       37794: (BB, IB, ZB) => {
-         var TB = ZB(37800);
+       37980: (tt, et, Vt) => {
+         var Ot = Vt(37982);
```

#### 16. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594)

```diff
-       37800: (BB, IB) => {
+       37982: (tt, et) => {
```

#### 17. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L648` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L648) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L648)

```diff
-       39731: (BB, IB, ZB) => {
+       39880: (tt, et, Vt) => {
```

#### 18. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L652-L654` → after: `L652-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L652-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L652-L654) · [Before (L652-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L652-L654)

```diff
-         var TB = ZB(39748),
-           JB = ZB(39735),
-           oB = ZB(39839);
+         var Ot = Vt(39896),
+           qt = Vt(39890),
+           Dt = Vt(39979);
```

#### 19. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L663)

```diff
-           return GB(`${BB}Wasteland`)
+           return mt(`${tt}Wasteland`)
```

#### 20. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L698)

```diff
-           return 36 * (1 === TB ? BB : IB) + 2 + Math.floor(32 * kB(BB, IB, ZB ^ zB ^ TB))
+           return 36 * (1 === Ot ? tt : et) + 2 + Math.floor(32 * jt(tt, et, Vt ^ lt ^ Ot))
```

#### 21. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L700-L701` → after: `L700-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L700-L701) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L700-L701)

```diff
-         var qB = ZB(39733),
-           yB = ZB(39743);
+         var yt = Vt(39888),
+           Nt = Vt(39893);
```

#### 22. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L728)

```diff
-             BB !== OB && (OB = BB, YB = (0, qB.j)(BB), iB = vB(BB))
+             tt !== vt && (vt = tt, Wt = (0, yt.k)(tt), St = dt(tt))
```

#### 23. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L777)

```diff
-               return TB > ZB && (oB = .25 - oB), BB < 0 && (oB = .5 - oB), IB < 0 ? 1 - oB : oB
+               return Ot > Vt && (Dt = .25 - Dt), tt < 0 && (Dt = .5 - Dt), et < 0 ? 1 - Dt : Dt
```

#### 24. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L810)

```diff
-             return ZB && MB(ZB, BB, IB) ? ZB : null
+             return Vt && Pt(Vt, tt, et) ? Vt : null
```

#### 25. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L817)

```diff
-                 if (oB && JB >= oB.floorY - yB.e && TB <= oB.topY + WB) {
+                 if (Dt && qt >= Dt.floorY - Nt.d && Ot <= Dt.topY + bt) {
```

#### 26. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L842` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L842) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L842)

```diff
-         var LB = ZB(39774);
+         var ot = Vt(39921);
```

#### 27. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L846)

```diff
-             this.YN = IB, this.chances = JB, this.mound = oB, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = ZB.salt ^ GB(TB), this.sinkholes = ZB.sinkholes;
+             this.ff = et, this.chances = qt, this.mound = Dt, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = Vt.salt ^ mt(Ot), this.sinkholes = Vt.sinkholes;
```

#### 28. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L867)

```diff
-               for (let JB = 0; JB < vB.height && kB + JB < this.YN; JB++) kB + JB >= 0 && BB.set(TB - IB, kB + JB, oB - ZB, vB.block);
+               for (let qt = 0; qt < dt.height && jt + qt < this.ff; qt++) jt + qt >= 0 && tt.set(Ot - et, jt + qt, Dt - Vt, dt.block);
```

#### 29. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L874)

```diff
-               if (nB += null !== (hB = this.chances[zB]) && void 0 !== hB ? hB : 0, cB < nB) return void(eB.has(zB) && this.sinkholes.taking(TB, oB) || this.place(BB, TB - IB, GB + 1 - JB, oB - ZB, zB, kB(TB, oB, 1540483477 ^ this.salt)))
+               if (Xt += null !== (Qt = this.chances[lt]) && void 0 !== Qt ? Qt : 0, Ht < Xt) return void(rt.has(lt) && this.sinkholes.taking(Ot, Dt) || this.place(tt, Ot - et, mt + 1 - qt, Dt - Vt, lt, jt(Ot, Dt, 1540483477 ^ this.salt)))
```

#### 30. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L879` → after: `L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L879) · [Before (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L879)

```diff
-                 ZB + JB >= 0 && ZB + JB < this.YN && BB.set(IB, ZB + JB, TB, oB)
+                 Vt + qt >= 0 && Vt + qt < this.ff && tt.set(et, Vt + qt, Ot, Dt)
```

#### 31. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L888)

```diff
-         class fB extends LB.f {
+         class At extends ot.e {
```

#### 32. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L896)

```diff
-             super.init(), this.floraGenerator = new uB(this.blockMetadata, this.YN, this.noise, this.seed, this.floraChances, ((BB, IB) => this.mound(BB, IB)))
+             super.init(), this.floraGenerator = new Ut(this.blockMetadata, this.ff, this.noise, this.seed, this.floraChances, ((tt, et) => this.mound(tt, et)))
```

#### 33. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L934)

```diff
-               return 0 === TB || 1 === TB && kB(BB, IB, ZB ^ zB ^ 3) < .5 ? 2 - TB : 0
+               return 0 === Ot || 1 === Ot && jt(tt, et, Vt ^ lt ^ 3) < .5 ? 2 - Ot : 0
```

#### 34. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L963)

```diff
-             })), this.canyon = new JB.g([{
+             })), this.canyon = new qt.i([{
```

#### 35. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L966` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L966) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L966)

```diff
-             }], `${BB}WastelandCanyon`), this.canyonWarp = new JB.g([{
+             }], `${tt}WastelandCanyon`), this.canyonWarp = new qt.i([{
```

#### 36. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L969)

```diff
-             }], `${BB}WastelandCanyonWarp`), this.canyonMask = new JB.g([{
+             }], `${tt}WastelandCanyonWarp`), this.canyonMask = new qt.i([{
```

#### 37. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L972)

```diff
-             }], `${BB}WastelandCanyonMask`), this.patchNoise = new JB.g([{
+             }], `${tt}WastelandCanyonMask`), this.patchNoise = new qt.i([{
```

#### 38. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L978)

```diff
-             }], `${BB}WastelandPatch`), this.fineNoise = new JB.g([{
+             }], `${tt}WastelandPatch`), this.fineNoise = new qt.i([{
```

#### 39. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L984` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L984) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L984)

```diff
-             }], `${BB}WastelandFine`)
+             }], `${tt}WastelandFine`)
```

#### 40. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1007-L1010` → after: `L1007-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1007-L1010) · [Before (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1007-L1010)

```diff
-         var tB = ZB(4428),
-           bB = ZB(665),
-           xB = ZB(39207),
-           EB = ZB(39759);
+         var Bt = Vt(4347),
+           pt = Vt(710),
+           xt = Vt(39353),
+           Tt = Vt(39909);
```

#### 41. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1021)

```diff
-             return BB.set(0, 0, 0, KB("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
+             return tt.set(0, 0, 0, st("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
```

#### 42. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1061-L1062` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1061-L1062) · [Before (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1061-L1062)

```diff
-               qualityDistribution: new tB.i([{
-                 value: bB.i.UNCOMMON,
+               qualityDistribution: new Bt.g([{
+                 value: pt.h.UNCOMMON,
```

#### 43. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1065)

```diff
-                 value: bB.i.RARE,
+                 value: pt.h.RARE,
```

#### 44. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1068)

```diff
-                 value: bB.i.EPIC,
+                 value: pt.h.EPIC,
```

#### 45. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1076)

```diff
-               mobTypeDistribution: new tB.i([{
+               mobTypeDistribution: new Bt.g([{
```

#### 46. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1084)

```diff
-           return (0, LB.ab)(BB, [{
+           return (0, ot.jb)(tt, [{
```

#### 47. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1094)

```diff
-             super(BB, IB, ZB, `${oB}DustFlats`, GB, vB, TI(TB.l.MEDIUM, 1.25, BI)), this.key = "dustFlats", this.floraChances = {
+             super(tt, et, Vt, `${Dt}DustFlats`, mt, dt, qe(Ot.k.MEDIUM, 1.25, ee)), this.key = "dustFlats", this.floraChances = {
```

#### 48. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1098)

```diff
-             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = FB.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new JB.g([{
+             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = Et.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new qt.i([{
```

#### 49. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1104)

```diff
-             }], `${oB}DustFlatsHeight`)
+             }], `${Dt}DustFlatsHeight`)
```

#### 50. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1119)

```diff
-             super(BB, IB, ZB, `${TB}ScorchedMesa`, oB, GB), this.key = "scorchedMesa", this.floraChances = {
+             super(tt, et, Vt, `${Ot}ScorchedMesa`, Dt, mt), this.key = "scorchedMesa", this.floraChances = {
```

#### 51. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1123` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1123) · [Before (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1123)

```diff
-             }, this.outcropChance = FB.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
+             }, this.outcropChance = Et.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1129` → after: `L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1129) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1129)

```diff
-             }], `${TB}ScorchedMesaHeight`);
+             }], `${Ot}ScorchedMesaHeight`);
```

#### 53. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1161)

```diff
-             super(BB, IB, ZB, `${TB}ShatteredHighlands`, oB, GB), this.key = "shatteredHighlands", this.floraChances = {
+             super(tt, et, Vt, `${Ot}ShatteredHighlands`, Dt, mt), this.key = "shatteredHighlands", this.floraChances = {
```

#### 54. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1164` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1164) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1164)

```diff
-             }, this.outcropChance = FB.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
+             }, this.outcropChance = Et.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
```

#### 55. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1167` → after: `L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1167) · [Before (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1167)

```diff
-             }], `${TB}HighlandsRidge1`), this.ridge2 = new JB.g([{
+             }], `${Ot}HighlandsRidge1`), this.ridge2 = new qt.i([{
```

#### 56. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1170)

```diff
-             }], `${TB}HighlandsRidge2`), this.bumps = new JB.g([{
+             }], `${Ot}HighlandsRidge2`), this.bumps = new qt.i([{
```

#### 57. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1173` → after: `L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1173) · [Before (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1173)

```diff
-             }], `${TB}HighlandsBumps`)
+             }], `${Ot}HighlandsBumps`)
```

#### 58. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1184` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1184) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1184)

```diff
-             return 0 !== JB ? JB : IB > 50 ? this.ids.Stone : IB > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+             return 0 !== qt ? qt : et > 50 ? this.ids.Stone : et > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
```

#### 59. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1195` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1195) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1195)

```diff
-               return null === GB || cB(BB >> 2, IB, ZB >> 2, JB) >= .25 ? null : cB(BB, IB, ZB, JB) < .65 ? GB : null
+               return null === mt || Ht(tt >> 2, et, Vt >> 2, qt) >= .25 ? null : Ht(tt, et, Vt, qt) < .65 ? mt : null
```

#### 60. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1202` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1202) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1202)

```diff
-             super(BB, IB, ZB, `${oB}RuinFields`, GB, vB, TI(TB.l.HIGH, 2.25, II)), this.key = "ruinFields", this.floraChances = {
+             super(tt, et, Vt, `${Dt}RuinFields`, mt, dt, qe(Ot.k.HIGH, 2.25, Ve)), this.key = "ruinFields", this.floraChances = {
```

#### 61. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1207` → after: `L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1207) · [Before (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1207)

```diff
-             }, this.outcropChance = FB.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new JB.g([{
+             }, this.outcropChance = Et.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new qt.i([{
```

#### 62. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1213` → after: `L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1213) · [Before (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1213)

```diff
-             }], `${oB}RuinFieldsHeight`)
+             }], `${Dt}RuinFieldsHeight`)
```

#### 63. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1225)

```diff
-             super(BB, IB, ZB, `${TB}SaltFlats`, oB, GB), this.key = "saltFlats", this.floraChances = {
+             super(tt, et, Vt, `${Ot}SaltFlats`, Dt, mt), this.key = "saltFlats", this.floraChances = {
```

#### 64. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1228` → after: `L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1228) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1228)

```diff
-             }, this.outcropChance = FB.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new JB.g([{
+             }, this.outcropChance = Et.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new qt.i([{
```

#### 65. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1234)

```diff
-             }], `${TB}SaltFlatsHeight`)
+             }], `${Ot}SaltFlatsHeight`)
```

#### 66. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1252)

```diff
-             super(BB, IB, ZB, `${TB}SurvivorGrove`, oB, GB), this.key = "survivorGrove", this.floraChances = {
+             super(tt, et, Vt, `${Ot}SurvivorGrove`, Dt, mt), this.key = "survivorGrove", this.floraChances = {
```

#### 67. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1256` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1256) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1256)

```diff
-             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = FB.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new JB.g([{
+             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = Et.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new qt.i([{
```

#### 68. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1262` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1262) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1262)

```diff
-             }], `${TB}SurvivorGroveHeight`)
+             }], `${Ot}SurvivorGroveHeight`)
```

#### 69. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1277` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1277) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1277)

```diff
-               YN: IB,
+               ff: et,
```

#### 70. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1293` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1293) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1293)

```diff
-               hB = (0, oB.g)(ZB);
+               Qt = (0, Dt.j)(Vt);
```

#### 71. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1303` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1303) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1303)

```diff
-       641: (BB, IB, ZB) => {
+       694: (tt, et, Vt) => {
```

#### 72. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1313-L1314` → after: `L1313-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1313-L1314) · [Before (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1313-L1314)

```diff
-               if (void 0 !== ZB[BB]) throw new Error(`Duplicate value found in bi-directional table: ${String(BB)}`);
-               ZB[BB] = "string" === IB ? TB : Number(TB)
+               if (void 0 !== Vt[tt]) throw new Error(`Duplicate value found in bi-directional table: ${String(tt)}`);
+               Vt[tt] = "string" === et ? Ot : Number(Ot)
```

#### 73. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1326)

```diff
-       39759: (BB, IB, ZB) => {
+       39909: (tt, et, Vt) => {
```

#### 74. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1328` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1328) · [Before (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1328)

```diff
-           b: () => JB
+           d: () => qt
```

#### 75. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1330)

```diff
-         var TB = ZB(39207);
+         var Ot = Vt(39353);
```

#### 76. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1359)

```diff
-       39207: (BB, IB, ZB) => {
+       39353: (tt, et, Vt) => {
```

#### 77. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1486` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1486) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1486)

```diff
-             super(`${TB.name} has been mutated during iteration`)
+             super(`${Ot.name} has been mutated during iteration`)
```

#### 78. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1490)

```diff
-       39832: (BB, IB, ZB) => {
+       39975: (tt, et, Vt) => {
```

#### 79. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1493)

```diff
-           d: () => GB
+           c: () => mt
```

#### 80. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1560` → after: `L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1560) · [Before (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1560)

```diff
-           return BB > -oB && BB < oB && IB > -oB && IB < oB ? BB * (2 * oB) + IB : `${BB}|${IB}`
+           return tt > -Dt && tt < Dt && et > -Dt && et < Dt ? tt * (2 * Dt) + et : `${tt}|${et}`
```

#### 81. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1572` → after: `L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1572) · [Before (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1572)

```diff
-       39767: (BB, IB, ZB) => {
+       39914: (tt, et, Vt) => {
```

#### 82. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1583)

```diff
-       39774: (BB, IB, ZB) => {
+       39921: (tt, et, Vt) => {
```

#### 83. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1585` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1585) · [Before (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1585)

```diff
-           b: () => fB,
+           c: () => At,
```

#### 84. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1587` → after: `L1587-L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1587-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1587-L1588) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1587)

```diff
-           f: () => aB,
+           e: () => Rt,
+           i: () => pt,
```

#### 85. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1589-L1592` → after: `L1590-L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1590-L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1590-L1592) · [Before (L1589-L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1589-L1592)

```diff
-           k: () => xB,
-           n: () => SB,
-           p: () => HB,
-           t: () => LB,
+           m: () => te,
+           q: () => It,
+           s: () => ot,
```

#### 86. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1597-L1598` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1596) · [Before (L1597-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1597-L1598)

```diff
-           C: () => mB,
-           F: () => jB,
+           E: () => Pt,
```

#### 87. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1602-L1605` → after: `L1600-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1600-L1601) · [Before (L1602-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1602-L1605)

```diff
-           L: () => eB,
-           O: () => PB,
-           R: () => EB,
-           S: () => DB,
+           M: () => Yt,
+           Q: () => Ft,
```

#### 88. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1608-L1609` → after: `L1604-L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1604-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1604-L1609) · [Before (L1608-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1608-L1609)

```diff
-           $: () => rB,
-           ab: () => pB
+           _: () => Tt,
+           ab: () => gt,
+           bb: () => Bt,
+           db: () => zt,
+           fb: () => kt,
+           jb: () => ct
```

#### 89. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1611-L1614` → after: `L1611-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1611-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1611-L1614) · [Before (L1611-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1611-L1614)

```diff
-         var TB = ZB(39735),
-           JB = ZB(665),
-           oB = ZB(39778),
-           GB = ZB(4428);
+         var Ot = Vt(39890),
+           qt = Vt(710),
+           Dt = Vt(39926),
+           mt = Vt(4347);
```

#### 90. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1621` → after: `L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1621) · [Before (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1621)

```diff
-             this.columnRandom = new GB.j(""), this.flowerPatchRandom = new GB.j(""), this.cactusRandom = new GB.j(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
+             this.columnRandom = new mt.k(""), this.flowerPatchRandom = new mt.k(""), this.cactusRandom = new mt.k(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
```

#### 91. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1761` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1761) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1761)

```diff
-             this.doFlowerGen = null !== gB.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new oB.d("flwrPtch", gB.flowerPatchDistApart, !1, !0, ZB, 4, IB)), this.grassId = BB.Grass.id, this.tallGrassId = BB["Tall Grass"].id, this.tallGrassTopId = BB["Tall G … [truncated]
+             this.doFlowerGen = null !== wt.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new Dt.b("flwrPtch", wt.flowerPatchDistApart, !1, !0, Vt, 4, et)), this.grassId = tt.Grass.id, this.tallGrassId = tt["Tall Grass"].id, this.tallGrassTopId = tt["Tall G … [truncated]
```

#### 92. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1764)

```diff
-             if (vB + 3 >= oB && vB + 1 < oB + this.YN) {
+             if (dt + 3 >= Dt && dt + 1 < Dt + this.ff) {
```

#### 93. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1766)

```diff
-               kB.reseed(`${JB}${GB}${this.seed}flora`);
+               jt.reseed(`${qt}${mt}${this.seed}flora`);
```

#### 94. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1770` → after: `L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1770) · [Before (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1770)

```diff
-                 0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.grassId)
+                 0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.grassId)
```

#### 95. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1775` → after: `L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1775) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1775)

```diff
-                     0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.tallGrassId)
+                     0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.tallGrassId)
```

#### 96. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1778)

```diff
-                     0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.tallGrassTopId)
+                     0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.tallGrassTopId)
```

#### 97. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1785)

```diff
-                     0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.cornSeedsId)
+                     0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.cornSeedsId)
```

#### 98. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1788` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1788) · [Before (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1788)

```diff
-                     0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.cornPlantId)
+                     0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.cornPlantId)
```

#### 99. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1791)

```diff
-                     0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.cornPlantId)
+                     0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.cornPlantId)
```

#### 100. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1797)

```diff
-                   0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.spectralGrassId)
+                   0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.spectralGrassId)
```

#### 101. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1800` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1800) · [Before (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1800)

```diff
-                   0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.pineGrassId)
+                   0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.pineGrassId)
```

#### 102. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1803` → after: `L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1803) · [Before (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1803)

```diff
-                   0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.pineFernId)
+                   0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.pineFernId)
```

#### 103. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1808)

```diff
-                       0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.jungleTallGrassId)
+                       0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.jungleTallGrassId)
```

#### 104. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1811` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1811) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1811)

```diff
-                       0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.jungleTallGrassTopId)
+                       0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.jungleTallGrassTopId)
```

#### 105. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1817` → after: `L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1817) · [Before (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1817)

```diff
-                     0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.catnipId)
+                     0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.catnipId)
```

#### 106. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1820` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1820) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1820)

```diff
-                     0 <= TB && TB < this.YN && BB.set(JB - IB, TB, GB - ZB, this.autumnFernId)
+                     0 <= Ot && Ot < this.ff && tt.set(qt - et, Ot, mt - Vt, this.autumnFernId)
```

#### 107. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1826` → after: `L1826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1826) · [Before (L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1826)

```diff
-                   nB = (0, TB.D)(cB, JB, GB);
+                   Xt = (0, Ot.A)(Ht, qt, mt);
```

#### 108. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1829` → after: `L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1829) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1829)

```diff
-                   TB.reseed(`${cB[0]}${cB[1]}${this.seed}flowerpatch`);
+                   Ot.reseed(`${Ht[0]}${Ht[1]}${this.seed}flowerpatch`);
```

#### 109. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1844` → after: `L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1844) · [Before (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1844)

```diff
-               TB.reseed(`${JB}${GB}${this.seed}cactus`);
+               Ot.reseed(`${qt}${mt}${this.seed}cactus`);
```

#### 110. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1848` → after: `L1848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1848) · [Before (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1848)

```diff
-                   nB = Math.min(vB + cB + 1, oB + this.YN),
+                   Xt = Math.min(dt + Ht + 1, Dt + this.ff),
```

#### 111. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1855-L1858` → after: `L1855-L1858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1855-L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1855-L1858) · [Before (L1855-L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1855-L1858)

```diff
-         var kB = ZB(39748),
-           cB = ZB(39759),
-           nB = ZB(39207),
-           hB = ZB(39767);
+         var jt = Vt(39896),
+           Ht = Vt(39909),
+           Xt = Vt(39353),
+           Qt = Vt(39914);
```

#### 112. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1864)

```diff
-             if (!(0, JB.L)(BB)) throw new Error(`Duplicate chunk at ${oB.chunkX}, ${oB.chunkY}, ${oB.chunkZ}`);
+             if (!(0, qt.B)(tt)) throw new Error(`Duplicate chunk at ${Dt.chunkX}, ${Dt.chunkY}, ${Dt.chunkZ}`);
```

#### 113. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1867` → after: `L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1867) · [Before (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1867)

```diff
-           return new cB.b(BB, {
+           return new Ht.d(tt, {
```

#### 114. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2075` → after: `L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R2075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2075) · [Before (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2075)

```diff
-             if (!(0, JB.L)(BB)) throw new Error(`Duplicate chunk at ${oB.chunkX}, ${oB.chunkY}, ${oB.chunkZ}`);
+             if (!(0, qt.B)(tt)) throw new Error(`Duplicate chunk at ${Dt.chunkX}, ${Dt.chunkY}, ${Dt.chunkZ}`);
```

#### 115. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2078` → after: `L2078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R2078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2078) · [Before (L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2078)

```diff
-           return new cB.b(BB, {
+           return new Ht.d(tt, {
```

#### 116. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2291)

```diff
-             if (!(0, JB.L)(BB)) throw new Error(`Duplicate chunk at ${oB.chunkX}, ${oB.chunkY}, ${oB.chunkZ}`);
+             if (!(0, qt.B)(tt)) throw new Error(`Duplicate chunk at ${Dt.chunkX}, ${Dt.chunkY}, ${Dt.chunkZ}`);
```

#### 117. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2294` → after: `L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R2294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2294) · [Before (L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2294)

```diff
-           return new cB.b(BB, {
+           return new Ht.d(tt, {
```

#### 118. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2717` → after: `L2717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R2717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2717) · [Before (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2717)

```diff
-             if (!(0, JB.L)(BB)) throw new Error(`Duplicate chunk at ${oB.chunkX}, ${oB.chunkY}, ${oB.chunkZ}`);
+             if (!(0, qt.B)(tt)) throw new Error(`Duplicate chunk at ${Dt.chunkX}, ${Dt.chunkY}, ${Dt.chunkZ}`);
```

#### 119. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2720` → after: `L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2720) · [Before (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L2720)

```diff
-           return new cB.b(BB, {
+           return new Ht.d(tt, {
```

#### 120. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3151-L3152` → after: `L3151-L3152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3151-L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3151-L3152) · [Before (L3151-L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3151-L3152)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 121. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3155` → after: `L3155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3155) · [Before (L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3155)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 122. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3158` → after: `L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3158) · [Before (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3158)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 123. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3165-L3166` → after: `L3165-L3166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3165-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3165-L3166) · [Before (L3165-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3165-L3166)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 124. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3169)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 125. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3172` → after: `L3172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3172) · [Before (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3172)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 126. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3179-L3180` → after: `L3179-L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3179-L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3179-L3180) · [Before (L3179-L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3179-L3180)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 127. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3183` → after: `L3183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3183) · [Before (L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3183)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 128. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3186` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3186) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3186)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 129. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3193-L3194` → after: `L3193-L3194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3193-L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3193-L3194) · [Before (L3193-L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3193-L3194)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 130. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3197)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 131. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3200` → after: `L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3200) · [Before (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3200)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 132. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3242-L3243` → after: `L3242-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3242-L3243) · [Before (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3242-L3243)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.LEGENDARY,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.LEGENDARY,
```

#### 133. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3355-L3356` → after: `L3355-L3356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3355-L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3355-L3356) · [Before (L3355-L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3355-L3356)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 134. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3359` → after: `L3359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3359) · [Before (L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3359)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 135. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3362` → after: `L3362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3362) · [Before (L3362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3362)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 136. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3404-L3405` → after: `L3404-L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3404-L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3404-L3405) · [Before (L3404-L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3404-L3405)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 137. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3408` → after: `L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3408) · [Before (L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3408)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 138. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3411` → after: `L3411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3411) · [Before (L3411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3411)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 139. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3429-L3430` → after: `L3429-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3429-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3429-L3430) · [Before (L3429-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3429-L3430)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.RARE,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.RARE,
```

#### 140. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3433` → after: `L3433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3433) · [Before (L3433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3433)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 141. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3440-L3441` → after: `L3440-L3441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3440-L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3440-L3441) · [Before (L3440-L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3440-L3441)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 142. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3444` → after: `L3444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3444) · [Before (L3444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3444)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 143. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3447` → after: `L3447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3447) · [Before (L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3447)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 144. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3455` → after: `L3455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3455) · [Before (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3455)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 145. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3485-L3486` → after: `L3485-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3485-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3485-L3486) · [Before (L3485-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3485-L3486)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 146. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3489` → after: `L3489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3489) · [Before (L3489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3489)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 147. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3492` → after: `L3492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3492) · [Before (L3492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3492)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 148. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3499-L3500` → after: `L3499-L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3499-L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3499-L3500) · [Before (L3499-L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3499-L3500)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 149. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3503` → after: `L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3503) · [Before (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3503)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 150. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3506` → after: `L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3506) · [Before (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3506)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 151. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3514` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3514) · [Before (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3514)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 152. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3544-L3545` → after: `L3544-L3545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3544-L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3544-L3545) · [Before (L3544-L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3544-L3545)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 153. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3548` → after: `L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3548) · [Before (L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3548)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 154. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3555-L3556` → after: `L3555-L3556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3555-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3555-L3556) · [Before (L3555-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3555-L3556)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 155. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3559` → after: `L3559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3559) · [Before (L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3559)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 156. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3567)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 157. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3597-L3598` → after: `L3597-L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3597-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3597-L3598) · [Before (L3597-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3597-L3598)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 158. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3601` → after: `L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3601) · [Before (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3601)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 159. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3604` → after: `L3604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3604) · [Before (L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3604)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 160. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3612` → after: `L3612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3612) · [Before (L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3612)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 161. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3660-L3661` → after: `L3660-L3661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3660-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3660-L3661) · [Before (L3660-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3660-L3661)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 162. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3664` → after: `L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3664) · [Before (L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3664)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 163. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3667` → after: `L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3667) · [Before (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3667)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 164. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3674-L3675` → after: `L3674-L3675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3674-L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3674-L3675) · [Before (L3674-L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3674-L3675)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 165. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3678` → after: `L3678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3678) · [Before (L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3678)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 166. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3681` → after: `L3681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3681) · [Before (L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3681)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 167. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3689` → after: `L3689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3689) · [Before (L3689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3689)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 168. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3725-L3726` → after: `L3725-L3726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3725-L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3725-L3726) · [Before (L3725-L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3725-L3726)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 169. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3729` → after: `L3729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3729) · [Before (L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3729)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 170. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3732` → after: `L3732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3732) · [Before (L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3732)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 171. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3739-L3740` → after: `L3739-L3740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3739-L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3739-L3740) · [Before (L3739-L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3739-L3740)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 172. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3743` → after: `L3743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3743) · [Before (L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3743)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 173. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3746` → after: `L3746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3746) · [Before (L3746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3746)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 174. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3753-L3754` → after: `L3753-L3754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3753-L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3753-L3754) · [Before (L3753-L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3753-L3754)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 175. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3757` → after: `L3757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3757) · [Before (L3757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3757)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 176. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3760` → after: `L3760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3760) · [Before (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3760)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 177. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3768` → after: `L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3768) · [Before (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3768)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 178. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3810-L3811` → after: `L3810-L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3810-L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3810-L3811) · [Before (L3810-L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3810-L3811)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.EPIC,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.EPIC,
```

#### 179. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3818-L3819` → after: `L3818-L3819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3818-L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3818-L3819) · [Before (L3818-L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3818-L3819)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.LEGENDARY,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.LEGENDARY,
```

#### 180. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3827` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3827) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3827)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 181. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3869-L3870` → after: `L3869-L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3869-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3869-L3870) · [Before (L3869-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3869-L3870)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.EPIC,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.EPIC,
```

#### 182. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3877-L3878` → after: `L3877-L3878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3877-L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3877-L3878) · [Before (L3877-L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3877-L3878)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.LEGENDARY,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.LEGENDARY,
```

#### 183. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3886` → after: `L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3886) · [Before (L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3886)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 184. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3904-L3905` → after: `L3904-L3905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3904-L3905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3904-L3905) · [Before (L3904-L3905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3904-L3905)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 185. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3908` → after: `L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3908) · [Before (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3908)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 186. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3915-L3916` → after: `L3915-L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3915-L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3915-L3916) · [Before (L3915-L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3915-L3916)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 187. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3919` → after: `L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3919) · [Before (L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3919)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 188. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3922` → after: `L3922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3922) · [Before (L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3922)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 189. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3930` → after: `L3930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3930) · [Before (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3930)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 190. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3957-L3958` → after: `L3957-L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3957-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3957-L3958) · [Before (L3957-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3957-L3958)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 191. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3961` → after: `L3961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3961) · [Before (L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3961)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 192. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3968-L3969` → after: `L3968-L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3968-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3968-L3969) · [Before (L3968-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3968-L3969)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 193. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3972` → after: `L3972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3972) · [Before (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3972)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 194. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3979-L3980` → after: `L3979-L3980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3979-L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3979-L3980) · [Before (L3979-L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3979-L3980)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 195. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3983` → after: `L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3983) · [Before (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3983)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 196. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3986` → after: `L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3986) · [Before (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3986)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 197. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L3994` → after: `L3994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R3994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L3994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3994) · [Before (L3994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L3994)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 198. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4018-L4019` → after: `L4018-L4019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4018-L4019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4018-L4019) · [Before (L4018-L4019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4018-L4019)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 199. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4022` → after: `L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4022) · [Before (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4022)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 200. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4029-L4030` → after: `L4029-L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4029-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4029-L4030) · [Before (L4029-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4029-L4030)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 201. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4033` → after: `L4033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4033) · [Before (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4033)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 202. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4036` → after: `L4036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4036) · [Before (L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4036)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 203. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4044` → after: `L4044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4044) · [Before (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4044)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 204. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4062-L4063` → after: `L4062-L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4062-L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4062-L4063) · [Before (L4062-L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4062-L4063)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 205. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4066` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4066) · [Before (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4066)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 206. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4073-L4074` → after: `L4073-L4074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4073-L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4073-L4074) · [Before (L4073-L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4073-L4074)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 207. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4077` → after: `L4077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4077) · [Before (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4077)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 208. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4080` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4080) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4080)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 209. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4088)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 210. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4106-L4107` → after: `L4106-L4107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4106-L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4106-L4107) · [Before (L4106-L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4106-L4107)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 211. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4110` → after: `L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4110) · [Before (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4110)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 212. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4117-L4118` → after: `L4117-L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4117-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4117-L4118) · [Before (L4117-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4117-L4118)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 213. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4121` → after: `L4121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4121) · [Before (L4121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4121)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 214. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4124` → after: `L4124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4124) · [Before (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4124)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 215. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4131-L4132` → after: `L4131-L4132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4131-L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4131-L4132) · [Before (L4131-L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4131-L4132)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 216. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4135` → after: `L4135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4135) · [Before (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4135)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 217. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4138` → after: `L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4138) · [Before (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4138)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 218. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4146` → after: `L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4146) · [Before (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4146)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 219. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4164-L4165` → after: `L4164-L4165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4164-L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4164-L4165) · [Before (L4164-L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4164-L4165)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 220. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4168` → after: `L4168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4168) · [Before (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4168)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 221. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4171` → after: `L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4171) · [Before (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4171)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 222. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4178-L4179` → after: `L4178-L4179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4178-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4178-L4179) · [Before (L4178-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4178-L4179)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 223. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4182` → after: `L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4182) · [Before (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4182)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 224. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4185` → after: `L4185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4185) · [Before (L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4185)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 225. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4192-L4193` → after: `L4192-L4193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4192-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4192-L4193) · [Before (L4192-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4192-L4193)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 226. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4196` → after: `L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4196) · [Before (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4196)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 227. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4199` → after: `L4199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4199) · [Before (L4199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4199)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 228. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4207` → after: `L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4207) · [Before (L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4207)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 229. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4231-L4232` → after: `L4231-L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4231-L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4231-L4232) · [Before (L4231-L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4231-L4232)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 230. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4235` → after: `L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4235) · [Before (L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4235)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 231. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4242-L4243` → after: `L4242-L4243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4242-L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4242-L4243) · [Before (L4242-L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4242-L4243)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 232. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4246` → after: `L4246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4246) · [Before (L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4246)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 233. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4249` → after: `L4249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4249) · [Before (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4249)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 234. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4257` → after: `L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4257) · [Before (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4257)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 235. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4287-L4288` → after: `L4287-L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4287-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4287-L4288) · [Before (L4287-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4287-L4288)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 236. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4291` → after: `L4291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4291) · [Before (L4291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4291)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 237. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4298-L4299` → after: `L4298-L4299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4298-L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4298-L4299) · [Before (L4298-L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4298-L4299)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 238. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4302` → after: `L4302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4302) · [Before (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4302)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 239. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4305` → after: `L4305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4305) · [Before (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4305)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 240. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4313` → after: `L4313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4313) · [Before (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4313)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 241. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4321` → after: `L4321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4321) · [Before (L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4321)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 242. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4351-L4352` → after: `L4351-L4352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4351-L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4351-L4352) · [Before (L4351-L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4351-L4352)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 243. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4355` → after: `L4355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4355) · [Before (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4355)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 244. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4362-L4363` → after: `L4362-L4363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4362-L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4362-L4363) · [Before (L4362-L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4362-L4363)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 245. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4366` → after: `L4366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4366) · [Before (L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4366)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 246. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4369` → after: `L4369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4369) · [Before (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4369)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 247. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4377` → after: `L4377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4377) · [Before (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4377)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 248. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4385` → after: `L4385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4385) · [Before (L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4385)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 249. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4415-L4416` → after: `L4415-L4416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4415-L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4415-L4416) · [Before (L4415-L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4415-L4416)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 250. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4419` → after: `L4419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4419) · [Before (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4419)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 251. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4426-L4427` → after: `L4426-L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4426-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4426-L4427) · [Before (L4426-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4426-L4427)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 252. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4430` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4430) · [Before (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4430)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 253. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4433` → after: `L4433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4433) · [Before (L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4433)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 254. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4441` → after: `L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4441) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4441)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 255. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4449` → after: `L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4449) · [Before (L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4449)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 256. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4467-L4468` → after: `L4467-L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4467-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4467-L4468) · [Before (L4467-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4467-L4468)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 257. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4471` → after: `L4471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4471) · [Before (L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4471)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 258. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4474` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4474) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4474)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 259. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4481-L4482` → after: `L4481-L4482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4481-L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4481-L4482) · [Before (L4481-L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4481-L4482)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 260. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4485` → after: `L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4485) · [Before (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4485)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 261. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4488` → after: `L4488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4488) · [Before (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4488)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 262. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4496` → after: `L4496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4496) · [Before (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4496)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 263. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4504` → after: `L4504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4504) · [Before (L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4504)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 264. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4537-L4538` → after: `L4537-L4538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4537-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4537-L4538) · [Before (L4537-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4537-L4538)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 265. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4541` → after: `L4541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4541) · [Before (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4541)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 266. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4544` → after: `L4544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4544) · [Before (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4544)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 267. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4551-L4552` → after: `L4551-L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4551-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4551-L4552) · [Before (L4551-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4551-L4552)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 268. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4555` → after: `L4555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4555) · [Before (L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4555)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 269. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4558` → after: `L4558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4558) · [Before (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4558)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 270. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4565-L4566` → after: `L4565-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4565-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4565-L4566) · [Before (L4565-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4565-L4566)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.EPIC,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.EPIC,
```

#### 271. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4574` → after: `L4574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4574) · [Before (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4574)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 272. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4582` → after: `L4582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4582) · [Before (L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4582)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 273. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4590` → after: `L4590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4590) · [Before (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4590)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 274. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4620-L4621` → after: `L4620-L4621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4620-L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4620-L4621) · [Before (L4620-L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4620-L4621)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 275. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4624` → after: `L4624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4624) · [Before (L4624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4624)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 276. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4627` → after: `L4627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4627) · [Before (L4627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4627)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 277. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4634-L4635` → after: `L4634-L4635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4634-L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4634-L4635) · [Before (L4634-L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4634-L4635)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.RARE,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.RARE,
```

#### 278. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4638` → after: `L4638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4638) · [Before (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4638)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 279. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4645-L4646` → after: `L4645-L4646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4645-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4645-L4646) · [Before (L4645-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4645-L4646)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 280. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4649` → after: `L4649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4649) · [Before (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4649)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 281. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4657` → after: `L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4657) · [Before (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4657)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 282. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4665` → after: `L4665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4665) · [Before (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4665)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 283. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4689-L4690` → after: `L4689-L4690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4689-L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4689-L4690) · [Before (L4689-L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4689-L4690)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 284. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4693` → after: `L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4693) · [Before (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4693)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 285. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4700-L4701` → after: `L4700-L4701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4700-L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4700-L4701) · [Before (L4700-L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4700-L4701)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 286. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4704` → after: `L4704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4704) · [Before (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4704)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 287. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4707` → after: `L4707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4707) · [Before (L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4707)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 288. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4714-L4715` → after: `L4714-L4715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4714-L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4714-L4715) · [Before (L4714-L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4714-L4715)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.RARE,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.RARE,
```

#### 289. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4718` → after: `L4718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4718) · [Before (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4718)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 290. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4726` → after: `L4726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4726) · [Before (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4726)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 291. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4734` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4734) · [Before (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4734)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 292. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4761-L4762` → after: `L4761-L4762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4761-L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4761-L4762) · [Before (L4761-L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4761-L4762)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 293. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4765` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4765) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4765)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 294. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4768` → after: `L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4768) · [Before (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4768)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 295. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4775-L4776` → after: `L4775-L4776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4775-L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4775-L4776) · [Before (L4775-L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4775-L4776)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 296. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4779` → after: `L4779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4779) · [Before (L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4779)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 297. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4786-L4787` → after: `L4786-L4787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4786-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4786-L4787) · [Before (L4786-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4786-L4787)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 298. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4790` → after: `L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4790) · [Before (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4790)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 299. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4793` → after: `L4793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4793) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4793)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 300. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4801` → after: `L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4801) · [Before (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4801)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 301. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4809` → after: `L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4809) · [Before (L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4809)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 302. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4836-L4837` → after: `L4836-L4837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4836-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4836-L4837) · [Before (L4836-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4836-L4837)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 303. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4840` → after: `L4840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4840) · [Before (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4840)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 304. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4847-L4848` → after: `L4847-L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4847-L4848) · [Before (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4847-L4848)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 305. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4851` → after: `L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4851) · [Before (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4851)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 306. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4854` → after: `L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4854) · [Before (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4854)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 307. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4861-L4862` → after: `L4861-L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4861-L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4861-L4862) · [Before (L4861-L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4861-L4862)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 308. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4865` → after: `L4865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4865) · [Before (L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4865)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 309. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4868` → after: `L4868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4868) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4868)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 310. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4875-L4876` → after: `L4875-L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4875-L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4875-L4876) · [Before (L4875-L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4875-L4876)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.RARE,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.RARE,
```

#### 311. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4879` → after: `L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4879) · [Before (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4879)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 312. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4882` → after: `L4882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4882) · [Before (L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4882)

```diff
-                   value: JB.i.LEGENDARY,
+                   value: qt.h.LEGENDARY,
```

#### 313. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4890` → after: `L4890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4890) · [Before (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4890)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 314. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4898` → after: `L4898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4898) · [Before (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4898)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 315. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4906` → after: `L4906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4906) · [Before (L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4906)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 316. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4933-L4934` → after: `L4933-L4934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4933-L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4933-L4934) · [Before (L4933-L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4933-L4934)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 317. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4937` → after: `L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4937) · [Before (L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4937)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 318. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4940` → after: `L4940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4940) · [Before (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4940)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 319. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4947-L4948` → after: `L4947-L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4947-L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4947-L4948) · [Before (L4947-L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4947-L4948)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 320. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4951` → after: `L4951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4951) · [Before (L4951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4951)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 321. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4958-L4959` → after: `L4958-L4959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4958-L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4958-L4959) · [Before (L4958-L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4958-L4959)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 322. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4962` → after: `L4962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4962) · [Before (L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4962)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 323. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4965` → after: `L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4965) · [Before (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4965)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 324. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4973` → after: `L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4973) · [Before (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4973)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 325. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4981` → after: `L4981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4981) · [Before (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4981)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 326. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5011-L5012` → after: `L5011-L5012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5011-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5011-L5012) · [Before (L5011-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5011-L5012)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 327. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5015` → after: `L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5015) · [Before (L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5015)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 328. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5018` → after: `L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5018) · [Before (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5018)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 329. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5025-L5026` → after: `L5025-L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5025-L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5025-L5026) · [Before (L5025-L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5025-L5026)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 330. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5029` → after: `L5029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5029) · [Before (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5029)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 331. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5032` → after: `L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5032) · [Before (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5032)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 332. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5039-L5040` → after: `L5039-L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5039-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5039-L5040) · [Before (L5039-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5039-L5040)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.RARE,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.RARE,
```

#### 333. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5043` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5043) · [Before (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5043)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 334. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5046` → after: `L5046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5046) · [Before (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5046)

```diff
-                   value: JB.i.LEGENDARY,
+                   value: qt.h.LEGENDARY,
```

#### 335. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5053-L5054` → after: `L5053-L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5053-L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5053-L5054) · [Before (L5053-L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5053-L5054)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.RARE,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.RARE,
```

#### 336. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5057` → after: `L5057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5057) · [Before (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5057)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 337. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5065` → after: `L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5065) · [Before (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5065)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 338. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5073` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5073) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5073)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 339. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5081` → after: `L5081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5081) · [Before (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5081)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 340. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5111-L5112` → after: `L5111-L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5111-L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5111-L5112) · [Before (L5111-L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5111-L5112)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 341. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5115` → after: `L5115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5115) · [Before (L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5115)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 342. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5118` → after: `L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5118) · [Before (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5118)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 343. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5125-L5126` → after: `L5125-L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5125-L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5125-L5126) · [Before (L5125-L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5125-L5126)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 344. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5129` → after: `L5129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5129) · [Before (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5129)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 345. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5132` → after: `L5132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5132) · [Before (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5132)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 346. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5139-L5140` → after: `L5139-L5140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5139-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5139-L5140) · [Before (L5139-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5139-L5140)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 347. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5143` → after: `L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5143) · [Before (L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5143)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 348. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5146)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 349. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5153-L5154` → after: `L5153-L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5153-L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5153-L5154) · [Before (L5153-L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5153-L5154)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 350. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5157` → after: `L5157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5157) · [Before (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5157)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 351. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5160` → after: `L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5160) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5160)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 352. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5167-L5168` → after: `L5167-L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5167-L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5167-L5168) · [Before (L5167-L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5167-L5168)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.EPIC,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.EPIC,
```

#### 353. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5171` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5171) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5171)

```diff
-                   value: JB.i.LEGENDARY,
+                   value: qt.h.LEGENDARY,
```

#### 354. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5178-L5179` → after: `L5178-L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5178-L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5178-L5179) · [Before (L5178-L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5178-L5179)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.RARE,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.RARE,
```

#### 355. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5182` → after: `L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5182) · [Before (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5182)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 356. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5190` → after: `L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5190) · [Before (L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5190)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 357. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5198` → after: `L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5198) · [Before (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5198)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 358. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5206` → after: `L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5206) · [Before (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5206)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 359. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5214` → after: `L5214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5214) · [Before (L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5214)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 360. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5247-L5248` → after: `L5247-L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5247-L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5247-L5248) · [Before (L5247-L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5247-L5248)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 361. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5251` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5251) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5251)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 362. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5258-L5259` → after: `L5258-L5259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5258-L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5258-L5259) · [Before (L5258-L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5258-L5259)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.EPIC,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.EPIC,
```

#### 363. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5262` → after: `L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5262) · [Before (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5262)

```diff
-                   value: JB.i.LEGENDARY,
+                   value: qt.h.LEGENDARY,
```

#### 364. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5269-L5270` → after: `L5269-L5270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5269-L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5269-L5270) · [Before (L5269-L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5269-L5270)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 365. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5273` → after: `L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5273) · [Before (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5273)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 366. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5276` → after: `L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5276) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5276)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 367. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5283-L5284` → after: `L5283-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5283-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5283-L5284) · [Before (L5283-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5283-L5284)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 368. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5287` → after: `L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5287) · [Before (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5287)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 369. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5290` → after: `L5290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5290) · [Before (L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5290)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 370. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5297-L5298` → after: `L5297-L5298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5297-L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5297-L5298) · [Before (L5297-L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5297-L5298)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 371. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5301` → after: `L5301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5301) · [Before (L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5301)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 372. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5304` → after: `L5304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5304) · [Before (L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5304)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 373. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5311-L5312` → after: `L5311-L5312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5311-L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5311-L5312) · [Before (L5311-L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5311-L5312)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 374. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5315` → after: `L5315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5315) · [Before (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5315)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 375. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5318` → after: `L5318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5318) · [Before (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5318)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 376. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5326` → after: `L5326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5326) · [Before (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5326)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 377. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5334` → after: `L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5334) · [Before (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5334)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 378. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5342` → after: `L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5342) · [Before (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5342)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 379. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5350` → after: `L5350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5350) · [Before (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5350)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 380. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5358` → after: `L5358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5358) · [Before (L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5358)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 381. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5370-L5371` → after: `L5370-L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5370-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5370-L5371) · [Before (L5370-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5370-L5371)

```diff
-                 IT: -15,
-                 BT: -97
+                 QO: -15,
+                 XO: -97
```

#### 382. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5379-L5380` → after: `L5379-L5380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5379-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5379-L5380) · [Before (L5379-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5379-L5380)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.COMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.COMMON,
```

#### 383. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5383` → after: `L5383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5383) · [Before (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5383)

```diff
-                   value: JB.i.UNCOMMON,
+                   value: qt.h.UNCOMMON,
```

#### 384. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5386` → after: `L5386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5386) · [Before (L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5386)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 385. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5394` → after: `L5394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5394) · [Before (L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5394)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 386. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5430-L5431` → after: `L5430-L5431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5430-L5431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5430-L5431) · [Before (L5430-L5431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5430-L5431)

```diff
-                 IT: -40,
-                 BT: -97
+                 QO: -40,
+                 XO: -97
```

#### 387. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5439-L5440` → after: `L5439-L5440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5439-L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5439-L5440) · [Before (L5439-L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5439-L5440)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 388. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5443` → after: `L5443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5443) · [Before (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5443)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 389. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5446` → after: `L5446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5446) · [Before (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5446)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 390. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5453-L5454` → after: `L5453-L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5453-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5453-L5454) · [Before (L5453-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5453-L5454)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 391. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5457` → after: `L5457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5457) · [Before (L5457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5457)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 392. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5460` → after: `L5460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5460) · [Before (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5460)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 393. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5468` → after: `L5468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5468) · [Before (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5468)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 394. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5504-L5505` → after: `L5504-L5505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5504-L5505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5504-L5505) · [Before (L5504-L5505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5504-L5505)

```diff
-                 IT: -60,
-                 BT: -95
+                 QO: -60,
+                 XO: -95
```

#### 395. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5513-L5514` → after: `L5513-L5514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5513-L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5513-L5514) · [Before (L5513-L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5513-L5514)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.RARE,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.RARE,
```

#### 396. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5517` → after: `L5517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5517) · [Before (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5517)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 397. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5520` → after: `L5520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5520) · [Before (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5520)

```diff
-                   value: JB.i.LEGENDARY,
+                   value: qt.h.LEGENDARY,
```

#### 398. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5527-L5528` → after: `L5527-L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5527-L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5527-L5528) · [Before (L5527-L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5527-L5528)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.RARE,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.RARE,
```

#### 399. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5531` → after: `L5531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5531) · [Before (L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5531)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 400. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5534` → after: `L5534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5534) · [Before (L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5534)

```diff
-                   value: JB.i.LEGENDARY,
+                   value: qt.h.LEGENDARY,
```

#### 401. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5541-L5542` → after: `L5541-L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5541-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5541-L5542) · [Before (L5541-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5541-L5542)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 402. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5545` → after: `L5545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5545) · [Before (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5545)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 403. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5548` → after: `L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5548) · [Before (L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5548)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 404. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5555-L5556` → after: `L5555-L5556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5555-L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5555-L5556) · [Before (L5555-L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5555-L5556)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 405. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5559` → after: `L5559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5559) · [Before (L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5559)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 406. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5562` → after: `L5562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5562) · [Before (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5562)

```diff
-                   value: JB.i.EPIC,
+                   value: qt.h.EPIC,
```

#### 407. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5570` → after: `L5570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5570) · [Before (L5570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5570)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 408. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5587` → after: `L5587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5587) · [Before (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5587)

```diff
-                 mobTypeDistribution: new GB.i([{
+                 mobTypeDistribution: new mt.g([{
```

#### 409. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5623-L5624` → after: `L5623-L5624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5623-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5623-L5624) · [Before (L5623-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5623-L5624)

```diff
-                 IT: -70,
-                 BT: -95
+                 QO: -70,
+                 XO: -95
```

#### 410. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5632-L5633` → after: `L5632-L5633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5632-L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5632-L5633) · [Before (L5632-L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5632-L5633)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 411. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5636` → after: `L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5636) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5636)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 412. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5643-L5644` → after: `L5643-L5644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5643-L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5643-L5644) · [Before (L5643-L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5643-L5644)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.UNCOMMON,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.UNCOMMON,
```

#### 413. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5647` → after: `L5647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5647) · [Before (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5647)

```diff
-                   value: JB.i.RARE,
+                   value: qt.h.RARE,
```

#### 414. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5654-L5655` → after: `L5654-L5655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5654-L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5654-L5655) · [Before (L5654-L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5654-L5655)

```diff
-                 qualityDistribution: new GB.i([{
-                   value: JB.i.EPIC,
+                 qualityDistribution: new mt.g([{
+                   value: qt.h.EPIC,
```
