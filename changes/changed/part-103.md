# Changed — Bundle Modifications Report (Part 103 / 141)

- **Updated at**: `2026-11-25T08:36 JST`
- **Part**: `103 / 141` (**417** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 102](part-102.md) · [Part 104 →](part-104.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3948 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 2058. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17421` → after: `L17421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17421) · [Before (L17421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17421)

```diff
-           null === (ZB = nB) || void 0 === ZB || ZB.frame(BB, IB.tanHalfFovY), null === (TB = hB) || void 0 === TB || TB.frame(IB.cameraHeading), null === (JB = zB) || void 0 === JB || JB.frame(IB, null !== (oB = cB) && void 0 !== oB && oB.checkValid(GB) ? cB.aU(GB) : null)
+           null === (Vt = Xt) || void 0 === Vt || Vt.frame(tt, et.tanHalfFovY), null === (Ot = Qt) || void 0 === Ot || Ot.frame(et.cameraHeading), null === (qt = lt) || void 0 === qt || qt.frame(et, null !== (Dt = Ht) && void 0 !== Dt && Dt.checkValid(mt) ? Ht.YM(mt) : null)
```

#### 2059. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17424` → after: `L17424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17424) · [Before (L17424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17424)

```diff
-           "frontlineHud" === BB ? vB.sN(IB) : "frontlineScoreboard" === BB ? vB.receiveScoreboard(IB) : "frontlineRoundEnd" === BB ? kB.sN(IB) : "frontlinePrefs" === BB && (NB = IB, gB())
+           "frontlineHud" === tt ? dt.Qf(et) : "frontlineScoreboard" === tt ? dt.receiveScoreboard(et) : "frontlineRoundEnd" === tt ? jt.Qf(et) : "frontlinePrefs" === tt && (ft = et, wt())
```

#### 2060. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17429` → after: `L17429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17429) · [Before (L17429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17429)

```diff
-   39497: (BB, IB, ZB) => {
+   39655: (tt, et, Vt) => {
```

#### 2061. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17488` → after: `L17488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17488) · [Before (L17488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17488)

```diff
-             "ballState" === BB ? (kB = null !== (ZB = IB.eId) && void 0 !== ZB ? ZB : null, kB || gB()) : "frozen" === BB ? vB = IB.frozen : "pitchInfo" === BB && (cB = IB.goalZRed, nB = IB.goalZBlue, hB = Math.abs(nB - cB) / 2)
+             "ballState" === tt ? (jt = null !== (Vt = et.eId) && void 0 !== Vt ? Vt : null, jt || wt()) : "frozen" === tt ? dt = et.frozen : "pitchInfo" === tt && (Ht = et.goalZRed, Xt = et.goalZBlue, Qt = Math.abs(Xt - Ht) / 2)
```

#### 2062. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17490` → after: `L17490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17490) · [Before (L17490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17490)

```diff
-           Iz: BB => {
+           BQ: tt => {
```

#### 2063. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17496` → after: `L17496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17496) · [Before (L17496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17496)

```diff
-   39500: (BB, IB, ZB) => {
+   39658: (tt, et, Vt) => {
```

#### 2064. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17511-L17512` → after: `L17511-L17512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17511-L17512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17511-L17512) · [Before (L17511-L17512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17511-L17512)

```diff
-       oB = ZB(38094),
-       GB = ZB(360);
+       Dt = Vt(38281),
+       mt = Vt(391);
```

#### 2065. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17516` → after: `L17516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17516) · [Before (L17516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17516)

```diff
-       return `${"Basic"===IB?"":`${IB} `}${"Simple"===BB?"":`${BB} `}Lucky Block`
+       return `${"Basic"===et?"":`${et} `}${"Simple"===tt?"":`${tt} `}Lucky Block`
```

#### 2066. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17529` → after: `L17529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17529) · [Before (L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17529)

```diff
-       FB = [...["Red", "Blue", "Green", "Yellow"].map((BB => `${(0,GB.eb)(BB)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", hB, ...zB];
+       Et = [...["Red", "Blue", "Green", "Yellow"].map((tt => `${(0,mt.gb)(tt)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Qt, ...lt];
```

#### 2067. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17534` → after: `L17534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17534) · [Before (L17534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17534)

```diff
-     var gB = ZB(665);
+     var wt = Vt(710);
```

#### 2068. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17562` → after: `L17562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17562) · [Before (L17562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17562)

```diff
-         (null === TB || void 0 === TB ? void 0 : TB.name) === BB && (null !== (IB = TB.amount) && void 0 !== IB ? IB : 1) <= 1 && WB(BB) && this.pending.set(ZB, BB)
+         (null === Ot || void 0 === Ot ? void 0 : Ot.name) === tt && (null !== (et = Ot.amount) && void 0 !== et ? et : 1) <= 1 && bt(tt) && this.pending.set(Vt, tt)
```

#### 2069. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17591-L17593` → after: `L17591-L17593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17591-L17593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17591-L17593) · [Before (L17591-L17593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17591-L17593)

```diff
-     var dB = ZB(36619),
-       CB = ZB(82),
-       QB = ZB(1091),
+     var Jt = Vt(36861),
+       Ct = Vt(83),
+       ut = Vt(1140),
```

#### 2070. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17609-L17616` → after: `L17609-L17616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17609-L17616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17609-L17616) · [Before (L17609-L17616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17609-L17616)

```diff
-     var pB = ZB(342),
-       aB = ZB(2526),
-       HB = ZB(20),
-       MB = ZB(2719),
-       jB = ZB(1979),
-       PB = ZB(36613),
-       RB = ZB(1102);
-     var rB = ZB(1153);
+     var ct = Vt(377),
+       Rt = Vt(2498),
+       It = Vt(26),
+       Pt = Vt(2681),
+       Zt = Vt(2018),
+       Lt = Vt(36853),
+       Ft = Vt(1152);
+     var kt = Vt(1188);
```

#### 2071. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17625` → after: `L17625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17625) · [Before (L17625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17625)

```diff
-       const BB = (0, aB.d)("currencyAmounts"),
+       const tt = (0, Rt.i)("currencyAmounts"),
```

#### 2072. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17627` → after: `L17627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17627) · [Before (L17627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17627)

```diff
-       return !IB || IB.hidden ? null : (0, rB.jsx)(PB.h, {
+       return !et || et.hidden ? null : (0, kt.jsx)(Lt.g, {
```

#### 2073. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17641` → after: `L17641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17641) · [Before (L17641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17641)

```diff
-       } = (0, HB.o)(["openEverythingMenuName"]), cB = (0, MB.b)(), [nB, hB] = (0, JB.useState)(oB), [zB, FB] = (0, JB.useState)(null), [NB, gB] = (0, JB.useState)(0), [qB, yB] = (0, JB.useState)([]), UB = (0, JB.useRef)(oB), WB = (0, JB.useRef)(!1), dB = (0, JB.useRef)(null), QB  … [truncated]
+       } = (0, It.k)(["openEverythingMenuName"]), Ht = (0, Pt.e)(), [Xt, Qt] = (0, qt.useState)(Dt), [lt, Et] = (0, qt.useState)(null), [ft, wt] = (0, qt.useState)(0), [yt, Nt] = (0, qt.useState)([]), Mt = (0, qt.useRef)(Dt), bt = (0, qt.useRef)(!1), Jt = (0, qt.useRef)(null), ut  … [truncated]
```

#### 2074. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17674` → after: `L17674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17674) · [Before (L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17674)

```diff
-           const ZB = null !== (IB = vB.find((IB => BB < YB(IB)))) && void 0 !== IB ? IB : "Super";
+           const Vt = null !== (et = dt.find((et => tt < Wt(et)))) && void 0 !== et ? et : "Super";
```

#### 2075. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17694` → after: `L17694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17694) · [Before (L17694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17694)

```diff
-                 transform: `scaleX(${OB.progress})`
+                 transform: `scaleX(${vt.progress})`
```

#### 2076. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17699` → after: `L17699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17699) · [Before (L17699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17699)

```diff
-                 animationDelay: `${null!==(IB=null===zB||void 0===zB?void 0:zB.delayMs)&&void 0!==IB?IB:0}ms`
+                 animationDelay: `${null!==(et=null===lt||void 0===lt?void 0:lt.delayMs)&&void 0!==et?et:0}ms`
```

#### 2077. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17705` → after: `L17705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17705) · [Before (L17705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17705)

```diff
-                 animationDelay: `${null!==(TB=null===zB||void 0===zB?void 0:zB.delayMs)&&void 0!==TB?TB:0}ms`
+                 animationDelay: `${null!==(Ot=null===lt||void 0===lt?void 0:lt.delayMs)&&void 0!==Ot?Ot:0}ms`
```

#### 2078. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17711` → after: `L17711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17711) · [Before (L17711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17711)

```diff
-             }, null !== (ZB = null === zB || void 0 === zB ? void 0 : zB.id) && void 0 !== ZB ? ZB : 0), (0, rB.jsx)("span", {
+             }, null !== (Vt = null === lt || void 0 === lt ? void 0 : lt.id) && void 0 !== Vt ? Vt : 0), (0, kt.jsx)("span", {
```

#### 2079. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17714` → after: `L17714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17714) · [Before (L17714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17714)

```diff
-             }), aB && (0, rB.jsx)(RB.d, {
+             }), Rt && (0, kt.jsx)(Ft.b, {
```

#### 2080. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17744` → after: `L17744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17744) · [Before (L17744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17744)

```diff
-           transform: `translate(${GB}px, ${vB}px) scale(0.3)`,
+           transform: `translate(${mt}px, ${dt}px) scale(0.3)`,
```

#### 2081. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17747` → after: `L17747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17747) · [Before (L17747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17747)

```diff
-           transform: `translate(${kB}px, ${cB}px) scale(1.3)`,
+           transform: `translate(${jt}px, ${Ht}px) scale(1.3)`,
```

#### 2082. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17751` → after: `L17751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17751) · [Before (L17751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17751)

```diff
-           transform: `translate(${JB.left}px, ${JB.top}px) scale(0.8)`,
+           transform: `translate(${qt.left}px, ${qt.top}px) scale(0.8)`,
```

#### 2083. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17771` → after: `L17771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17771) · [Before (L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17771)

```diff
-     var fB = ZB(24);
+     var At = Vt(31);
```

#### 2084. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17783` → after: `L17783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17783) · [Before (L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17783)

```diff
-       return null !== (IB = AB[BB.split(" ")[0]]) && void 0 !== IB ? IB : "#e07bff"
+       return null !== (et = Yt[tt.split(" ")[0]]) && void 0 !== et ? et : "#e07bff"
```

#### 2085. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17806` → after: `L17806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17806) · [Before (L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17806)

```diff
-         this.Gq()
+         this.sw()
```

#### 2086. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17821` → after: `L17821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17821) · [Before (L17821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17821)

```diff
-         ZB && this.Gq()
+         Vt && this.sw()
```

#### 2087. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17827` → after: `L17827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17827) · [Before (L17827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17827)

```diff
-         }, fB.l.Gq(lB, this.view)
+         }, At.j.sw(it, this.view)
```

#### 2088. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17830` → after: `L17830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17830) · [Before (L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17830)

```diff
-     var xB = ZB(1507);
+     var xt = Vt(1554);
```

#### 2089. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17833` → after: `L17833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17833) · [Before (L17833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17833)

```diff
-       return document.querySelector(`.HotBar [data-inven-idx="${BB}"]`)
+       return document.querySelector(`.HotBar [data-inven-idx="${tt}"]`)
```

#### 2090. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17843` → after: `L17843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17843) · [Before (L17843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17843)

```diff
-         TB(null !== (BB = null === (ZB = EB(IB.slot)) || void 0 === ZB ? void 0 : ZB.getBoundingClientRect()) && void 0 !== BB ? BB : null)
+         Ot(null !== (tt = null === (Vt = Tt(et.slot)) || void 0 === Vt ? void 0 : Vt.getBoundingClientRect()) && void 0 !== tt ? tt : null)
```

#### 2091. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17911` → after: `L17911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17911) · [Before (L17911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17911)

```diff
-           placeAgainstBeds: (0, oB.d)()
+           placeAgainstBeds: (0, Dt.c)()
```

#### 2092. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17914` → after: `L17914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17914) · [Before (L17914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17914)

```diff
-           vB = BB, cB = (0, dB.x)((0, JB.createElement)(JB.Fragment, null, (0, JB.createElement)(LB), (0, JB.createElement)(VB, {
+           dt = tt, Ht = (0, Jt.q)((0, qt.createElement)(qt.Fragment, null, (0, qt.createElement)(ot), (0, qt.createElement)(nt, {
```

#### 2093. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17922-L17923` → after: `L17922-L17923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17922-L17923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17922-L17923) · [Before (L17922-L17923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17922-L17923)

```diff
-         Iz: () => {
-           nB.Iz(), hB.Iz()
+         BQ: () => {
+           Xt.BQ(), Qt.BQ()
```

#### 2094. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17926` → after: `L17926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17926) · [Before (L17926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17926)

```diff
-           "luckyGearUpgrade" === BB && hB.sN(IB)
+           "luckyGearUpgrade" === tt && Qt.Qf(et)
```

#### 2095. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17943` → after: `L17943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17943) · [Before (L17943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17943)

```diff
-   39507: (BB, IB, ZB) => {
+   39661: (tt, et, Vt) => {
```

#### 2096. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17947` → after: `L17947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17947) · [Before (L17947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17947)

```diff
-     var TB = ZB(24);
+     var Ot = Vt(31);
```

#### 2097. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17955` → after: `L17955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17955) · [Before (L17955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17955)

```diff
-           IB || "Workbench" !== JB.getMetaInfo(vB).rootName || TB.l.Gq("toggleMenu", "inventory|Workbench")
+           et || "Workbench" !== qt.getMetaInfo(dt).rootName || Ot.j.sw("toggleMenu", "inventory|Workbench")
```

#### 2098. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17960` → after: `L17960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17960) · [Before (L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17960)

```diff
-   39515: (BB, IB, ZB) => {
+   39666: (tt, et, Vt) => {
```

#### 2099. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17986` → after: `L17986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L17986) · [Before (L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L17986)

```diff
-         Iz: () => {
+         BQ: () => {
```

#### 2100. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18012` → after: `L18012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18012) · [Before (L18012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18012)

```diff
-   39520: (BB, IB, ZB) => {
+   39673: (tt, et, Vt) => {
```

#### 2101. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18019-L18024` → after: `L18019-L18024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18019-L18024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18019-L18024) · [Before (L18019-L18024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18019-L18024)

```diff
-       GB = ZB(36619),
-       vB = ZB(20),
-       kB = ZB(1507),
-       cB = ZB(2066),
-       nB = ZB(1248),
-       hB = ZB(1091),
+       mt = Vt(36861),
+       dt = Vt(26),
+       jt = Vt(1554),
+       Ht = Vt(2074),
+       Xt = Vt(1286),
+       Qt = Vt(1140),
```

#### 2102. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18026-L18032` → after: `L18026-L18032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18026-L18032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18026-L18032) · [Before (L18026-L18032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18026-L18032)

```diff
-       FB = ZB(1711),
-       NB = ZB(36613),
-       gB = ZB(1102),
-       qB = ZB(1979),
-       yB = ZB(2060),
-       UB = ZB(3595),
-       WB = ZB(1805);
+       Et = Vt(1732),
+       ft = Vt(36853),
+       wt = Vt(1152),
+       yt = Vt(2018),
+       Nt = Vt(2066),
+       Mt = Vt(3482),
+       bt = Vt(1826);
```

#### 2103. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18041` → after: `L18041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18041) · [Before (L18041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18041)

```diff
-     var QB = ZB(24);
+     var ut = Vt(31);
```

#### 2104. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18131` → after: `L18131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18131) · [Before (L18131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18131)

```diff
-       return null !== (IB = iB.get(BB)) && void 0 !== IB ? IB : null
+       return null !== (et = St.get(tt)) && void 0 !== et ? et : null
```

#### 2105. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18195` → after: `L18195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18195) · [Before (L18195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18195)

```diff
-           this.placement.stop(), this.JN(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
+           this.placement.stop(), this.iE(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
```

#### 2106. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18197` → after: `L18197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18197) · [Before (L18197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18197)

```diff
-           this.placement.start(BB), (0, GB.f)()
+           this.placement.start(tt), (0, mt.c)()
```

#### 2107. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18199` → after: `L18199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18199) · [Before (L18199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18199)

```diff
-           this.api.sendCommand(`${JB} cancel`)
+           this.api.sendCommand(`${qt} cancel`)
```

#### 2108. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18207` → after: `L18207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18207) · [Before (L18207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18207)

```diff
-         this.pages = HB(IB, ZB), QB.l.Gq(MB, this.pages, !0)
+         this.pages = It(et, Vt), ut.j.sw(Pt, this.pages, !0)
```

#### 2109. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18211` → after: `L18211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18211) · [Before (L18211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18211)

```diff
-         this.openRequested = IB, this.Iz()
+         this.openRequested = et, this.BQ()
```

#### 2110. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18215` → after: `L18215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18215) · [Before (L18215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18215)

```diff
-         null === BB || vB.d.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, FB.n)() || (0, WB.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = BB, (0, GB.t)()))
+         null === tt || dt.b.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, Et.q)() || (0, bt.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = tt, (0, mt.m)()))
```

#### 2111. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18218` → after: `L18218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18218) · [Before (L18218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18218)

```diff
-         this.reported.has(BB) || (this.reported.add(BB), this.api.sendCommand(`${JB} report ${BB}`))
+         this.reported.has(tt) || (this.reported.add(tt), this.api.sendCommand(`${qt} report ${tt}`))
```

#### 2112. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18221` → after: `L18221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18221) · [Before (L18221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18221)

```diff
-     var PB = ZB(1153);
+     var Lt = Vt(1188);
```

#### 2113. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18231` → after: `L18231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18231) · [Before (L18231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18231)

```diff
-         } = (0, vB.o)(["isTouchScreen"]),
+         } = (0, dt.k)(["isTouchScreen"]),
```

#### 2114. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18234` → after: `L18234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18234) · [Before (L18234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18234)

```diff
-         } = (0, nB.G)(),
+         } = (0, Xt.H)(),
```

#### 2115. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18236-L18238` → after: `L18236-L18238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18236-L18238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18236-L18238) · [Before (L18236-L18238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18236-L18238)

```diff
-       return (0, UB.e)((BB => null !== ZB && BB.code === RB && !BB.repeat && !(0, WB.isTypingInInput)()), (BB => {
-         (0, FB.C)(BB, !0, GB.t)
-       })), null === ZB ? null : (0, PB.jsx)(NB.h, {
+       return (0, Mt.c)((tt => null !== Vt && tt.code === Ft && !tt.repeat && !(0, bt.isTypingInInput)()), (tt => {
+         (0, Et.G)(tt, !0, mt.m)
+       })), null === Vt ? null : (0, Lt.jsx)(ft.g, {
```

#### 2116. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18248` → after: `L18248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18248) · [Before (L18248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18248)

```diff
-             onClick: GB.t,
+             onClick: mt.m,
```

#### 2117. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18258` → after: `L18258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18258) · [Before (L18258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18258)

```diff
-             }), "openJournal" === cB.hint && (0, PB.jsx)(gB.d, {
+             }), "openJournal" === Ht.hint && (0, Lt.jsx)(wt.b, {
```

#### 2118. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18266` → after: `L18266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18266) · [Before (L18266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18266)

```diff
-     var mB = ZB(9296);
+     var Gt = Vt(9425);
```

#### 2119. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18297` → after: `L18297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18297) · [Before (L18297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18297)

```diff
-         return `r${BB}|m${Number(IB)}`
+         return `r${tt}|m${Number(et)}`
```

#### 2120. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18331` → after: `L18331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18331) · [Before (L18331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18331)

```diff
-         const [, FB, NB] = null !== (JB = uB.exec(hB)) && void 0 !== JB ? JB : [];
+         const [, Et, ft] = null !== (qt = Ut.exec(Qt)) && void 0 !== qt ? qt : [];
```

#### 2121. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18334` → after: `L18334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18334) · [Before (L18334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18334)

```diff
-           zB = null !== (gB = null === (qB = oB[`${nB}|meta|${[eB.split("").filter(((BB,IB)=>FB.split("").some((BB=>{const ZB=eB.indexOf(BB);return((TB?3-ZB:ZB)+GB)%4===IB})))).join(""),NB].filter(Boolean).join("|")}`]) || void 0 === qB ? void 0 : qB.id) && void 0 !== gB ? gB : v … [truncated]
+           lt = null !== (wt = null === (yt = Dt[`${Xt}|meta|${[rt.split("").filter(((tt,et)=>Et.split("").some((tt=>{const Vt=rt.indexOf(tt);return((Ot?3-Vt:Vt)+mt)%4===et})))).join(""),ft].filter(Boolean).join("|")}`]) || void 0 === yt ? void 0 : yt.id) && void 0 !== wt ? wt : d … [truncated]
```

#### 2122. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18339` → after: `L18339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18339) · [Before (L18339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18339)

```diff
-           let IB = hB.replace(`rot${cB}`, `rot${BB}`);
+           let et = Qt.replace(`rot${Ht}`, `rot${tt}`);
```

#### 2123. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18344` → after: `L18344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18344) · [Before (L18344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18344)

```diff
-             IB = `${JB[1]}|${BB.join("")}`
+             et = `${qt[1]}|${tt.join("")}`
```

#### 2124. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18346-L18347` → after: `L18346-L18347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18346-L18347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18346-L18347) · [Before (L18346-L18347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18346-L18347)

```diff
-           const GB = `${nB}|${IB}`;
-           if (zB = null !== (yB = null === (UB = oB[GB]) || void 0 === UB ? void 0 : UB.id) && void 0 !== yB ? yB : null, null === zB) {
+           const mt = `${Xt}|${et}`;
+           if (lt = null !== (Nt = null === (Mt = Dt[mt]) || void 0 === Mt ? void 0 : Mt.id) && void 0 !== Nt ? Nt : null, null === lt) {
```

#### 2125. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18361-L18362` → after: `L18361-L18362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18361-L18362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18361-L18362) · [Before (L18361-L18362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18361-L18362)

```diff
-       const oB = JB ? IB : BB;
-       return null === TB ? oB : TB - oB
+       const Dt = qt ? et : tt;
+       return null === Ot ? Dt : Ot - Dt
```

#### 2126. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18370-L18371` → after: `L18370-L18371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18370-L18371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18370-L18371) · [Before (L18370-L18371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18370-L18371)

```diff
-       const oB = JB ? BB : IB;
-       return null === TB ? oB : TB - oB
+       const Dt = qt ? tt : et;
+       return null === Ot ? Dt : Ot - Dt
```

#### 2127. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18438` → after: `L18438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18438) · [Before (L18438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18438)

```diff
-       const ZB = `${BB}|${IB}`;
+       const Vt = `${tt}|${et}`;
```

#### 2128. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18462` → after: `L18462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18462) · [Before (L18462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18462)

```diff
-               throw new Error(`Invalid rotation: ${BB}`)
+               throw new Error(`Invalid rotation: ${tt}`)
```

#### 2129. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18469` → after: `L18469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18469) · [Before (L18469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18469)

```diff
-         }(IB, kB, cB), hB = lB.for(mB.f), zB = oB.map((BB => (0, mB.e)(hB.turnBlockId((0, mB.g)(BB), IB, !1)))), FB = [];
+         }(et, jt, Ht), Qt = it.for(Gt.h), lt = Dt.map((tt => (0, Gt.d)(Qt.turnBlockId((0, Gt.k)(tt), et, !1)))), Et = [];
```

#### 2130. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18503` → after: `L18503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18503) · [Before (L18503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18503)

```diff
-             TB[IB[1]] = (null !== (ZB = TB[IB[1]]) && void 0 !== ZB ? ZB : 0) + 1
+             Ot[et[1]] = (null !== (Vt = Ot[et[1]]) && void 0 !== Vt ? Vt : 0) + 1
```

#### 2131. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18524` → after: `L18524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18524) · [Before (L18524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18524)

```diff
-         this.shown = BB, this.topOpen = 0, null === BB && this.Gq(null)
+         this.shown = tt, this.topOpen = 0, null === tt && this.sw(null)
```

#### 2132. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18528` → after: `L18528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18528) · [Before (L18528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18528)

```diff
-         null !== TB && (BB >= IB && (this.topOpen = ZB), this.Gq(VB(TB.id, IB - TB.y, BB >= IB ? ZB : this.topOpen + ZB)))
+         null !== Ot && (tt >= et && (this.topOpen = Vt), this.sw(nt(Ot.id, et - Ot.y, tt >= et ? Vt : this.topOpen + Vt)))
```

#### 2133. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18532` → after: `L18532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18532) · [Before (L18532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18532)

```diff
-         (null === BB || void 0 === BB ? void 0 : BB.id) === (null === IB || void 0 === IB ? void 0 : IB.id) && (null === BB || void 0 === BB ? void 0 : BB.filled) === (null === IB || void 0 === IB ? void 0 : IB.filled) && (null === BB || void 0 === BB ? void 0 : BB.total) === (nu … [truncated]
+         (null === tt || void 0 === tt ? void 0 : tt.id) === (null === et || void 0 === et ? void 0 : et.id) && (null === tt || void 0 === tt ? void 0 : tt.filled) === (null === et || void 0 === et ? void 0 : et.filled) && (null === tt || void 0 === tt ? void 0 : tt.total) === (nu … [truncated]
```

#### 2134. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18546` → after: `L18546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18546) · [Before (L18546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18546)

```diff
-         this.plot = BB, QB.l.Gq(BI, BB, !0)
+         this.plot = tt, ut.j.sw(ee, tt, !0)
```

#### 2135. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18552` → after: `L18552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18552) · [Before (L18552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18552)

```diff
-         this.guide = BB, QB.l.Gq(II, BB, !0)
+         this.guide = tt, ut.j.sw(Ve, tt, !0)
```

#### 2136. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18555` → after: `L18555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18555) · [Before (L18555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18555)

```diff
-         QB.l.Gq(ZI, void 0, !0)
+         ut.j.sw(Oe, void 0, !0)
```

#### 2137. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18558-L18561` → after: `L18558-L18561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18558-L18561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18558-L18561) · [Before (L18558-L18561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18558-L18561)

```diff
-     var JI = ZB(1343),
-       oI = ZB(38583),
-       GI = ZB(36909),
-       vI = ZB(1538);
+     var De = Vt(1371),
+       me = Vt(38755),
+       de = Vt(37110),
+       je = Vt(1574);
```

#### 2138. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18570` → after: `L18570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18570) · [Before (L18570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18570)

```diff
-       } = (0, nB.G)();
+       } = (0, Xt.H)();
```

#### 2139. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18574` → after: `L18574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18574) · [Before (L18574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18574)

```diff
-         ...(0, vI.h)(IB, "pointerup"),
+         ...(0, je.e)(et, "pointerup"),
```

#### 2140. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18588-L18589` → after: `L18588-L18589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18588-L18589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18588-L18589) · [Before (L18588-L18589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18588-L18589)

```diff
-       } = (0, nB.G)(), vB = (0, oB.useRef)(IB);
-       return vB.current = IB, (0, JI.t)("popup", vB, null === TB ? null : TB.onSkip, null !== TB, null, "controller:menusSkipTutorial"), (0, PB.jsxs)(GI.e, {
+       } = (0, Xt.H)(), dt = (0, Dt.useRef)(et);
+       return dt.current = et, (0, De.w)("popup", dt, null === Ot ? null : Ot.onSkip, null !== Ot, null, "controller:menusSkipTutorial"), (0, Lt.jsxs)(de.h, {
```

#### 2141. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18629` → after: `L18629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18629) · [Before (L18629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18629)

```diff
-           children: (0, PB.jsx)(gB.d, {
+           children: (0, Lt.jsx)(wt.b, {
```

#### 2142. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18659` → after: `L18659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18659) · [Before (L18659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18659)

```diff
-               transform: `scaleX(${TB/ZB})`
+               transform: `scaleX(${Ot/Vt})`
```

#### 2143. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18676` → after: `L18676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18676) · [Before (L18676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18676)

```diff
-       } = (0, nB.G)(), {
+       } = (0, Xt.H)(), {
```

#### 2144. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18678` → after: `L18678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18678) · [Before (L18678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18678)

```diff
-       } = (0, vB.o)(["isTouchScreen"]), oB = IB.filled < 5;
+       } = (0, dt.k)(["isTouchScreen"]), Dt = et.filled < 5;
```

#### 2145. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18685` → after: `L18685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18685) · [Before (L18685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18685)

```diff
-             children: (0, PB.jsx)(gB.d, {
+             children: (0, Lt.jsx)(wt.b, {
```

#### 2146. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18690` → after: `L18690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18690) · [Before (L18690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18690)

```diff
-         }), (0, PB.jsx)(NB.h, {
+         }), (0, Lt.jsx)(ft.g, {
```

#### 2147. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18708` → after: `L18708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18708) · [Before (L18708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18708)

```diff
-       const IB = cB.u["alt-fire"][0];
+       const et = Ht.r["alt-fire"][0];
```

#### 2148. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18710` → after: `L18710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18710) · [Before (L18710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18710)

```diff
-         key: (0, cB.n)(IB)
+         key: (0, Ht.k)(et)
```

#### 2149. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18717` → after: `L18717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18717) · [Before (L18717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18717)

```diff
-         children: (0, PB.jsx)(gB.d, {
+         children: (0, Lt.jsx)(wt.b, {
```

#### 2150. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18723-L18731` → after: `L18723-L18731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18723-L18731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18723-L18731) · [Before (L18723-L18731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18723-L18731)

```diff
-     var gI = ZB(1353),
-       qI = ZB(2719),
-       yI = ZB(38463),
-       UI = ZB(38249),
-       WI = ZB(36958),
-       dI = ZB(9328),
-       CI = ZB(9347),
-       QI = ZB(360),
-       sI = ZB(37855);
+     var ye = Vt(1387),
+       Ne = Vt(2681),
+       ae = Vt(38634),
+       Me = Vt(38428),
+       be = Vt(37164),
+       Je = Vt(9454),
+       Ce = Vt(9475),
+       ue = Vt(391),
+       Ke = Vt(38056);
```

#### 2151. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18752` → after: `L18752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18752) · [Before (L18752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18752)

```diff
-       OI = [...WI.c.blockRemoveActionRoots, ...UI.d, ...dI.i, "Board", "Code Block", "Custom Lobby Block"],
+       ve = [...be.b.blockRemoveActionRoots, ...Me.b, ...Je.f, "Board", "Code Block", "Custom Lobby Block"],
```

#### 2152. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18759` → after: `L18759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18759) · [Before (L18759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18759)

```diff
-           IB = Math.max(...BB.map((BB => mB.f[BB].id))) + 1,
+           et = Math.max(...tt.map((tt => Gt.h[tt].id))) + 1,
```

#### 2153. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18779` → after: `L18779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18779) · [Before (L18779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18779)

```diff
-           } = mB.f[zB];
+           } = Gt.h[lt];
```

#### 2154. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18785` → after: `L18785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18785) · [Before (L18785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18785)

```diff
-             TB[BB] = cB(`${IB.rootName}|rot${ZB?IB.rot%4+1:IB.rot}|${IB.halfblockPlacement}|${NB.replace("Right","Left")}`)
+             Ot[tt] = Ht(`${et.rootName}|rot${Vt?et.rot%4+1:et.rot}|${et.halfblockPlacement}|${ft.replace("Right","Left")}`)
```

#### 2155. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18787` → after: `L18787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18787) · [Before (L18787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18787)

```diff
-           JB[BB] = FB ? 1 : 0, oB[BB] = kB || null !== IB.open || zB in sI.d || nB.has(IB.rootName) || void 0 !== (0, UI.g)(IB.rootName) ? 1 : 0;
+           qt[tt] = Et ? 1 : 0, Dt[tt] = jt || null !== et.open || lt in Ke.d || Xt.has(et.rootName) || void 0 !== (0, Me.f)(et.rootName) ? 1 : 0;
```

#### 2156. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18791` → after: `L18791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18791) · [Before (L18791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18791)

```diff
-           GB[BB] = null !== IB.open || UI.d.includes(gB) || gB.includes("Bookshelf") || gB.includes("Mailbox") ? 1 : 0, vB[BB] = null !== (hB = (0, yI.f)(BB)) && void 0 !== hB ? hB : gB
+           mt[tt] = null !== et.open || Me.b.includes(wt) || wt.includes("Bookshelf") || wt.includes("Mailbox") ? 1 : 0, dt[tt] = null !== (Qt = (0, ae.h)(tt)) && void 0 !== Qt ? Qt : wt
```

#### 2157. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18805` → after: `L18805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18805) · [Before (L18805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18805)

```diff
-       return Object.keys(mB.f).filter((BB => mB.f[BB].name === BB))
+       return Object.keys(Gt.h).filter((tt => Gt.h[tt].name === tt))
```

#### 2158. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18810` → after: `L18810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18810) · [Before (L18810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18810)

```diff
-       const ZB = mB.f[BB],
+       const Vt = Gt.h[tt],
```

#### 2159. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18815-L18817` → after: `L18815-L18817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18815-L18817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18815-L18817) · [Before (L18815-L18817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18815-L18817)

```diff
-         [, ...oB] = (null !== (IB = ZB.rootMetaDesc) && void 0 !== IB ? IB : BB).split("|"),
-         GB = oB.filter((BB => !("meta" === BB || YI.test(BB) || (0, CI.D)(ZB) && /^[nesw]+$/.test(BB) || dI.i.includes(TB) && /^[lrud]+$/.test(BB) || QI.N.includes(TB) && /^(left|right)$/.test(BB))));
-       return [TB, ...GB].map((BB => "fenceGate" === ZB.model && BB === `rot${JB}` ? "rot" + ((JB - 1) % 2 + 1) : BB)).join("|")
+         [, ...Dt] = (null !== (et = Vt.rootMetaDesc) && void 0 !== et ? et : tt).split("|"),
+         mt = Dt.filter((tt => !("meta" === tt || We.test(tt) || (0, Ce.I)(Vt) && /^[nesw]+$/.test(tt) || Je.f.includes(Ot) && /^[lrud]+$/.test(tt) || ue.M.includes(Ot) && /^(left|right)$/.test(tt))));
+       return [Ot, ...mt].map((tt => "fenceGate" === Vt.model && tt === `rot${qt}` ? "rot" + ((qt - 1) % 2 + 1) : tt)).join("|")
```

#### 2160. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18837` → after: `L18837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18837) · [Before (L18837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18837)

```diff
-       return wI.get(mB.f[BB].meta.rootName)
+       return he.get(Gt.h[tt].meta.rootName)
```

#### 2161. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18839-L18840` → after: `L18839-L18840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18839-L18840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18839-L18840) · [Before (L18839-L18840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18839-L18840)

```diff
-     var rI = ZB(9325),
-       mI = ZB(9340);
+     var ke = Vt(9449),
+       Ge = Vt(9466);
```

#### 2162. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18851` → after: `L18851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18851) · [Before (L18851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18851)

```diff
-       fI = [0, 1, 2, 3].map((BB => (0, rI.e)((0, rI.l)([
+       Ae = [0, 1, 2, 3].map((tt => (0, ke.e)((0, ke.r)([
```

#### 2163. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18857` → after: `L18857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18857) · [Before (L18857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18857)

```diff
-         cq: IB,
+         ey: et,
```

#### 2164. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18861-L18862` → after: `L18861-L18862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18861-L18862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18861-L18862) · [Before (L18861-L18862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18861-L18862)

```diff
-       } = mB.f[BB];
-       return void 0 !== IB ? IB : "CentreCross" === ZB ? LI : null !== TB && void 0 !== TB && TB.startsWith("torch") ? JB.halfblockPlacement === mI.e.side ? fI[JB.rot - 1] : JB.halfblockPlacement === mI.e.top ? uI : eI : XI
+       } = Gt.h[tt];
+       return void 0 !== et ? et : "CentreCross" === Vt ? oe : null !== Ot && void 0 !== Ot && Ot.startsWith("torch") ? qt.halfblockPlacement === Ge.b.side ? Ae[qt.rot - 1] : qt.halfblockPlacement === Ge.b.top ? Ue : re : ze
```

#### 2165. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18864` → after: `L18864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18864) · [Before (L18864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18864)

```diff
-     var AI = ZB(201);
+     var Ye = Vt(229);
```

#### 2166. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18870` → after: `L18870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18870) · [Before (L18870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18870)

```diff
-         const IB = AI.f.YN;
+         const et = Ye.e.ff;
```

#### 2167. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18897` → after: `L18897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18897) · [Before (L18897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18897)

```diff
-     var bI = ZB(38562);
+     var pe = Vt(38741);
```

#### 2168. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18964` → after: `L18964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18964) · [Before (L18964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18964)

```diff
-           (0, bI.i)(BB, IB, TB, ZB.size + .01, .12)
+           (0, pe.j)(tt, et, Ot, Vt.size + .01, .12)
```

#### 2169. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18990` → after: `L18990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L18990) · [Before (L18990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L18990)

```diff
-         (0, bI.d)(BB, IB, vB, kB, oB)
+         (0, pe.c)(tt, et, dt, jt, Dt)
```

#### 2170. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19028` → after: `L19028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19028) · [Before (L19028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19028)

```diff
-         IB.set(GB, (null !== (ZB = IB.get(GB)) && void 0 !== ZB ? ZB : 0) + 1)
+         et.set(mt, (null !== (Vt = et.get(mt)) && void 0 !== Vt ? Vt : 0) + 1)
```

#### 2171. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19070` → after: `L19070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19070) · [Before (L19070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19070)

```diff
-           const GB = null !== (IB = null === (ZB = this.placing) || void 0 === ZB ? void 0 : ZB.rotation) && void 0 !== IB ? IB : 0,
+           const mt = null !== (et = null === (Vt = this.placing) || void 0 === Vt ? void 0 : Vt.rotation) && void 0 !== et ? et : 0,
```

#### 2172. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19074` → after: `L19074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19074) · [Before (L19074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19074)

```diff
-             kB = this.api.aU(this.localPlayerId),
+             jt = this.api.YM(this.localPlayerId),
```

#### 2173. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19100` → after: `L19100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19100) · [Before (L19100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19100)

```diff
-             }(this.api, vB, kB, this.camera.forward)) && void 0 !== oB ? oB : this.cornerOnTarget(vB)) && void 0 !== TB ? TB : [Math.floor(kB[0]) + 2, Math.floor(kB[2])];
+             }(this.api, dt, jt, this.camera.forward)) && void 0 !== Dt ? Dt : this.cornerOnTarget(dt)) && void 0 !== Ot ? Ot : [Math.floor(jt[0]) + 2, Math.floor(jt[2])];
```

#### 2174. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19111` → after: `L19111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19111) · [Before (L19111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19111)

```diff
-           }, this.update(), this.api.sendCommand(`${JB} preview`)
+           }, this.update(), this.api.sendCommand(`${qt} preview`)
```

#### 2175. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19153` → after: `L19153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19153) · [Before (L19153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19153)

```diff
-           BB.waiting || (BB.blocked ? this.Gq({
+           tt.waiting || (tt.blocked ? this.sw({
```

#### 2176. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19164` → after: `L19164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19164) · [Before (L19164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19164)

```diff
-           this.api.sendCommand(`${JB} place ${IB} ${TB.join(" ")} ${ZB}`), BB.sent = {
+           this.api.sendCommand(`${qt} place ${et} ${Ot.join(" ")} ${Vt}`), tt.sent = {
```

#### 2177. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19171` → after: `L19171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19171) · [Before (L19171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19171)

```diff
-           null !== this.placing && (this.close(), this.api.sendCommand(`${JB} preview off`))
+           null !== this.placing && (this.close(), this.api.sendCommand(`${qt} preview off`))
```

#### 2178. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19212` → after: `L19212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19212) · [Before (L19212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19212)

```diff
-         const [IB, ZB, TB] = this.api.aU(this.localPlayerId);
+         const [et, Vt, Ot] = this.api.YM(this.localPlayerId);
```

#### 2179. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19253` → after: `L19253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19253) · [Before (L19253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19253)

```diff
-         this.placing = null, this.meshes.dispose(), this.Gq(null)
+         this.placing = null, this.meshes.dispose(), this.sw(null)
```

#### 2180. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19280` → after: `L19280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19280) · [Before (L19280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19280)

```diff
-         (null === kB || void 0 === kB ? void 0 : kB.id) === BB && kB.blocked === GB && kB.toClear === vB && kB.waiting === cB && kB.refusals === TB && kB.settled === nB || this.Gq({
+         (null === jt || void 0 === jt ? void 0 : jt.id) === tt && jt.blocked === mt && jt.toClear === dt && jt.waiting === Ht && jt.refusals === Ot && jt.settled === Xt || this.sw({
```

#### 2181. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19290` → after: `L19290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19290) · [Before (L19290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19290)

```diff
-         this.view = BB, QB.l.Gq(vZ, BB, !0)
+         this.view = tt, ut.j.sw(jV, tt, !0)
```

#### 2182. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19308` → after: `L19308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19308) · [Before (L19308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19308)

```diff
-     var zZ = ZB(4728);
+     var EV = Vt(4677);
```

#### 2183. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19369` → after: `L19369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19369) · [Before (L19369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19369)

```diff
-       (0, zZ.e)(!0, !0, NZ);
+       (0, EV.d)(!0, !0, wV);
```

#### 2184. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19414` → after: `L19414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19414) · [Before (L19414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19414)

```diff
-       return (0, gI.l)().some((BB => BB !== gI.e && BB !== NZ))
+       return (0, ye.k)().some((tt => tt !== ye.c && tt !== wV))
```

#### 2185. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19428` → after: `L19428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19428) · [Before (L19428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19428)

```diff
-       } = (0, nB.G)(), {
+       } = (0, Xt.H)(), {
```

#### 2186. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19430` → after: `L19430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19430) · [Before (L19430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19430)

```diff
-       } = (0, vB.o)(["isTouchScreen"]), FB = (0, kB.h)(II, IB.getGuide()), NB = (0, kB.h)(BI, IB.getPlot()), gB = (0, kB.h)(DB, TB.get()), qB = function(BB) {
+       } = (0, dt.k)(["isTouchScreen"]), Et = (0, jt.h)(Ve, et.getGuide()), ft = (0, jt.h)(ee, et.getPlot()), wt = (0, jt.h)(gt, Ot.get()), yt = function(tt) {
```

#### 2187. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19435` → after: `L19435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19435) · [Before (L19435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19435)

```diff
-         } = (0, vB.o)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), JB = (0, qI.b)(), [GB, cB] = (0, oB.useState)(UZ);
+         } = (0, dt.k)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), qt = (0, Ne.e)(), [mt, Ht] = (0, Dt.useState)(MV);
```

#### 2188. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19441-L19442` → after: `L19441-L19442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19441-L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19441-L19442) · [Before (L19441-L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19441-L19442)

```diff
-           const IB = (0, gI.k)(BB),
-             ZB = (0, gI.j)(BB);
+           const et = (0, ye.j)(tt),
+             Vt = (0, ye.i)(tt);
```

#### 2189. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19459` → after: `L19459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19459) · [Before (L19459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19459)

```diff
-         return (0, kB.d)(ZI, (() => {
+         return (0, jt.f)(Oe, (() => {
```

#### 2190. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19492` → after: `L19492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19492) · [Before (L19492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19492)

```diff
-             key: (0, cB.n)(RB)
+             key: (0, Ht.k)(Ft)
```

#### 2191. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19501` → after: `L19501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19501) · [Before (L19501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19501)

```diff
-           target: zB ? YB : wB,
+           target: lt ? Wt : ht,
```

#### 2192. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19514-L19515` → after: `L19514-L19515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19514-L19515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19514-L19515) · [Before (L19514-L19515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19514-L19515)

```diff
-     var CZ = ZB(38532),
-       QZ = ZB(38539);
+     var CV = Vt(38716),
+       uV = Vt(38718);
```

#### 2193. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19528` → after: `L19528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19528) · [Before (L19528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19528)

```diff
-         if (null === ZB) return void(0, CZ.f)(IB, !0);
+         if (null === Vt) return void(0, CV.g)(et, !0);
```

#### 2194. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19530` → after: `L19530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19530) · [Before (L19530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19530)

```diff
-         null !== TB && (0, CZ.d)(IB, Math.round(100 * TB.x) / 100, Math.round(100 * TB.y) / 100)
+         null !== Ot && (0, CV.e)(et, Math.round(100 * Ot.x) / 100, Math.round(100 * Ot.y) / 100)
```

#### 2195. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19533-L19535` → after: `L19533-L19535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19533-L19535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19533-L19535) · [Before (L19533-L19535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19533-L19535)

```diff
-     var wZ = ZB(1516),
-       OZ = ZB(4714),
-       YZ = ZB(1170);
+     var hV = Vt(1556),
+       vV = Vt(4665),
+       WV = Vt(1213);
```

#### 2196. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19565` → after: `L19565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19565) · [Before (L19565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19565)

```diff
-       } = (0, nB.G)();
+       } = (0, Xt.H)();
```

#### 2197. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19620` → after: `L19620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19620) · [Before (L19620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19620)

```diff
-                   }), (0, PB.jsx)(wZ.p, {
+                   }), (0, Lt.jsx)(hV.m, {
```

#### 2198. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19642` → after: `L19642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19642) · [Before (L19642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19642)

```diff
-       } = (0, nB.G)();
+       } = (0, Xt.H)();
```

#### 2199. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19645` → after: `L19645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19645) · [Before (L19645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19645)

```diff
-         children: (0, PB.jsx)(wZ.g, {
+         children: (0, Lt.jsx)(hV.f, {
```

#### 2200. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19651` → after: `L19651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19651) · [Before (L19651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19651)

```diff
-           children: (0, PB.jsx)(gB.d, {
+           children: (0, Lt.jsx)(wt.b, {
```

#### 2201. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19672` → after: `L19672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19672) · [Before (L19672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19672)

```diff
-       } = (0, nB.G)(), {
+       } = (0, Xt.H)(), {
```

#### 2202. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19675` → after: `L19675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19675) · [Before (L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19675)

```diff
-       } = YB(IB.id), kB = EB(IB.id, 0).cells.length, cB = "locked" === IB.state, hB = ZB ? wZ.g : wZ.p;
+       } = Wt(et.id), jt = Tt(et.id, 0).cells.length, Ht = "locked" === et.state, Qt = Vt ? hV.f : hV.m;
```

#### 2203. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19702` → after: `L19702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19702) · [Before (L19702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19702)

```diff
-             children: (0, PB.jsx)(gB.d, {
+             children: (0, Lt.jsx)(wt.b, {
```

#### 2204. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19720` → after: `L19720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19720) · [Before (L19720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19720)

```diff
-             }), (0, PB.jsx)(wZ.k, {
+             }), (0, Lt.jsx)(hV.g, {
```

#### 2205. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19757` → after: `L19757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19757) · [Before (L19757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19757)

```diff
-     var rZ = ZB(1956);
+     var kV = Vt(1993);
```

#### 2206. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19764` → after: `L19764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19764) · [Before (L19764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19764)

```diff
-       return (0, rZ.K)(Math.acos(QI.e.clamp(BB, -1, 1)))
+       return (0, kV.G)(Math.acos(ue.e.clamp(tt, -1, 1)))
```

#### 2207. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19769` → after: `L19769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19769) · [Before (L19769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19769)

```diff
-         GB = (0, rZ.K)(JB / (ZB * Math.abs(Math.sin((0, rZ.l)(BB))))),
+         mt = (0, kV.G)(qt / (Vt * Math.abs(Math.sin((0, kV.l)(tt))))),
```

#### 2208. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19771` → after: `L19771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19771) · [Before (L19771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19771)

```diff
-         kB = GB > 0 ? 3 * oB / GB : 1 / 0;
+         jt = mt > 0 ? 3 * Dt / mt : 1 / 0;
```

#### 2209. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19796` → after: `L19796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19796) · [Before (L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19796)

```diff
-       BB.style.transform = `rotateY(${-IB}deg)`, BB.classList.add("Turning")
+       tt.style.transform = `rotateY(${-et}deg)`, tt.classList.add("Turning")
```

#### 2210. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19805` → after: `L19805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19805) · [Before (L19805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19805)

```diff
-         return null === BB ? hB : (vB.current = null, BB.animation.cancel(), (IB = kB.current[BB.direction]).style.transform = "", IB.classList.remove("Turning"), null === BB.next ? hB : (JB(BB.next), BB.next));
+         return null === tt ? Qt : (dt.current = null, tt.animation.cancel(), (et = jt.current[tt.direction]).style.transform = "", et.classList.remove("Turning"), null === tt.next ? Qt : (qt(tt.next), tt.next));
```

#### 2211. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19810` → after: `L19810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19810) · [Before (L19810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19810)

```diff
-           GB = IB === ("Forward" === BB) ? nB : 0;
+           mt = et === ("Forward" === tt) ? Xt : 0;
```

#### 2212. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19813` → after: `L19813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19813) · [Before (L19813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19813)

```diff
-           transform: `rotateY(${-oB}deg)`
+           transform: `rotateY(${-Dt}deg)`
```

#### 2213. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19815` → after: `L19815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19815) · [Before (L19815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19815)

```diff
-           transform: `rotateY(${-GB}deg)`
+           transform: `rotateY(${-mt}deg)`
```

#### 2214. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19817` → after: `L19817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19817) · [Before (L19817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19817)

```diff
-           duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : LZ(oB, GB, JB.offsetWidth, nB, GB > oB ? -ZB : ZB),
+           duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : oV(Dt, mt, qt.offsetWidth, Xt, mt > Dt ? -Vt : Vt),
```

#### 2215. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19823` → after: `L19823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19823) · [Before (L19823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19823)

```diff
-           next: IB ? TB + ("Forward" === BB ? cB : -cB) : null
+           next: et ? Ot + ("Forward" === tt ? Ht : -Ht) : null
```

#### 2216. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19831` → after: `L19831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19831) · [Before (L19831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19831)

```diff
-         ("Forward" === IB ? ZB + cB < BB : ZB > 0) && gB(IB, !0, 0, ZB)
+         ("Forward" === et ? Vt + Ht < tt : Vt > 0) && wt(et, !0, 0, Vt)
```

#### 2217. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19847` → after: `L19847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19847) · [Before (L19847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19847)

```diff
-             return (BB < 0 ? ZB : TB) ? QI.e.clampAbs(BB, IB) : Math.sign(BB) * IB * (1 - 1 / (.55 * Math.abs(BB) / IB + 1))
+             return (tt < 0 ? Vt : Ot) ? ue.e.clampAbs(tt, et) : Math.sign(tt) * et * (1 - 1 / (.55 * Math.abs(tt) / et + 1))
```

#### 2218. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19860` → after: `L19860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19860) · [Before (L19860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19860)

```diff
-             return ("Forward" === oB ? TB : JB) ? oB : null
+             return ("Forward" === Dt ? Ot : qt) ? Dt : null
```

#### 2219. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19877` → after: `L19877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19877) · [Before (L19877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19877)

```diff
-                 return (BB < 0 ? ZB : TB) ? BB : Math.sign(BB) * IB * (1 / (1 - Math.min(Math.abs(BB) / IB, .99)) - 1) / .55
+                 return (tt < 0 ? Vt : Ot) ? tt : Math.sign(tt) * et * (1 / (1 - Math.min(Math.abs(tt) / et, .99)) - 1) / .55
```

#### 2220. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19889` → after: `L19889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19889) · [Before (L19889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19889)

```diff
-               direction: null !== (IB = null === JB || void 0 === JB ? void 0 : JB.direction) && void 0 !== IB ? IB : null,
+               direction: null !== (et = null === qt || void 0 === qt ? void 0 : qt.direction) && void 0 !== et ? et : null,
```

#### 2221. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19937` → after: `L19937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19937) · [Before (L19937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19937)

```diff
-       } = (0, nB.G)(), vB = (0, kB.h)(MB, IB.getPages()), cB = (0, kB.h)(II, ZB.getGuide()), hB = vB.find((BB => BB.active)), FB = (NB = cB, gB = void 0 === hB ? null : hB.id, "active" === NB[0] && null === gB);
+       } = (0, Xt.H)(), dt = (0, jt.h)(Pt, et.getPages()), Ht = (0, jt.h)(Ve, Vt.getGuide()), Qt = dt.find((tt => tt.active)), Et = (ft = Ht, wt = void 0 === Qt ? null : Qt.id, "active" === ft[0] && null === wt);
```

#### 2222. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19939` → after: `L19939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19939) · [Before (L19939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19939)

```diff
-       const qB = (0, YZ.m)(AZ),
+       const yt = (0, WV.o)(YV),
```

#### 2223. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19950` → after: `L19950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19950) · [Before (L19950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19950)

```diff
-           return -1 !== IB ? IB : Math.max(0, BB.findIndex((BB => "open" === BB.state)))
+           return -1 !== et ? et : Math.max(0, tt.findIndex((tt => "open" === tt.state)))
```

#### 2224. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19954` → after: `L19954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19954) · [Before (L19954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19954)

```diff
-       }), [IB]), (0, UB.e)((BB => !FB && ("ArrowLeft" === BB.code || "ArrowRight" === BB.code) && !(0, WB.isTypingInInput)()), (BB => {
+       }), [et]), (0, Mt.c)((tt => !Et && ("ArrowLeft" === tt.code || "ArrowRight" === tt.code) && !(0, bt.isTypingInInput)()), (tt => {
```

#### 2225. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19966` → after: `L19966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19966) · [Before (L19966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19966)

```diff
-         close: GB.i,
+         close: mt.g,
```

#### 2226. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19976` → after: `L19976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19976) · [Before (L19976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19976)

```diff
-           children: [(0, PB.jsx)(wZ.l, {
+           children: [(0, Lt.jsx)(hV.j, {
```

#### 2227. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L19978` → after: `L19978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R19978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L19978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L19978) · [Before (L19978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L19978)

```diff
-             onClick: GB.i
+             onClick: mt.g
```

#### 2228. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20024` → after: `L20024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20024) · [Before (L20024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20024)

```diff
-       } = IB, cB = [IB.dir[0] / oB, IB.dir[1] / oB, IB.dir[2] / oB], nB = null === kB ? vB : Math.min(vB, function(BB, IB, ZB) {
+       } = et, Ht = [et.dir[0] / Dt, et.dir[1] / Dt, et.dir[2] / Dt], Xt = null === jt ? dt : Math.min(dt, function(tt, et, Vt) {
```

#### 2229. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20034` → after: `L20034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20034) · [Before (L20034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20034)

```diff
-           oB = JB(NB) ? vB : nB;
+           Dt = qt(ft) ? dt : Xt;
```

#### 2230. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20059` → after: `L20059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20059) · [Before (L20059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20059)

```diff
-       return TB <= JB ? TB : 1 / 0
+       return Ot <= qt ? Ot : 1 / 0
```

#### 2231. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20061-L20062` → after: `L20061-L20062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20061-L20062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20061-L20062) · [Before (L20061-L20062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20061-L20062)

```diff
-     var EZ = ZB(36926),
-       DZ = ZB(38123);
+     var TV = Vt(37117),
+       gV = Vt(38309);
```

#### 2232. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20069` → after: `L20069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20069) · [Before (L20069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20069)

```diff
-         if (!(0, EZ.h)(BB, this.shown))
+         if (!(0, TV.d)(tt, this.shown))
```

#### 2233. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20078-L20079` → after: `L20078-L20079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20078-L20079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20078-L20079) · [Before (L20078-L20079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20078-L20079)

```diff
-           const IB = [DZ.c, DZ.c, DZ.c, 0, 0, 0];
-           this.meshes = [this.build([IB], DZ.e, BB), this.build((0, DZ.b)(), DZ.k, BB)]
+           const et = [gV.e, gV.e, gV.e, 0, 0, 0];
+           this.meshes = [this.build([et], gV.f, tt), this.build((0, gV.b)(), gV.n, tt)]
```

#### 2234. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20083` → after: `L20083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20083) · [Before (L20083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20083)

```diff
-         for (const IB of null !== (BB = this.meshes) && void 0 !== BB ? BB : []) {
+         for (const et of null !== (tt = this.meshes) && void 0 !== tt ? tt : []) {
```

#### 2235. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20092` → after: `L20092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20092) · [Before (L20092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20092)

```diff
-         for (const [oB, GB, vB, kB, cB, nB] of BB)(0, bI.f)(TB, JB, [kB + .5, cB + .5, nB + .5], [oB, GB, vB]);
+         for (const [Dt, mt, dt, jt, Ht, Xt] of tt)(0, pe.g)(Ot, qt, [jt + .5, Ht + .5, Xt + .5], [Dt, mt, dt]);
```

#### 2236. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20105-L20106` → after: `L20105-L20106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20105-L20106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20105-L20106) · [Before (L20105-L20106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20105-L20106)

```diff
-       const ZB = AI.f.uq / 2;
-       return BB[0] < IB[0] + ZB && BB[0] + 1 > IB[0] - ZB && BB[1] < IB[1] + AI.f.fq && BB[1] + 1 > IB[1] && BB[2] < IB[2] + ZB && BB[2] + 1 > IB[2] - ZB
+       const Vt = Ye.e.iy / 2;
+       return tt[0] < et[0] + Vt && tt[0] + 1 > et[0] - Vt && tt[1] < et[1] + Ye.e.Yy && tt[1] + 1 > et[1] && tt[2] < et[2] + Vt && tt[2] + 1 > et[2] - Vt
```

#### 2237. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20127` → after: `L20127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20127) · [Before (L20127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20127)

```diff
-         return this.playerCells.splice(0, 1 / 0, ...ZT(IB)), this.next = this.pickFrom(null === BB ? [IB[0], IB[1] + 1, IB[2]] : (0, EZ.e)(BB), (() => !1)), this.next
+         return this.playerCells.splice(0, 1 / 0, ...OO(et)), this.next = this.pickFrom(null === tt ? [et[0], et[1] + 1, et[2]] : (0, TV.b)(tt), (() => !1)), this.next
```

#### 2238. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20131` → after: `L20131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20131) · [Before (L20131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20131)

```diff
-           TB = [ZB[0], ZB[1] + AI.f.fq * AI.f.playerEyeToHeightRatio, ZB[2]],
+           Ot = [Vt[0], Vt[1] + Ye.e.Yy * Ye.e.playerEyeToHeightRatio, Vt[2]],
```

#### 2239. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20160-L20161` → after: `L20160-L20161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20160-L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20160-L20161) · [Before (L20160-L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20160-L20161)

```diff
-       const JB = AI.f.uq / 2;
-       return [Math.floor(IB), Math.floor(ZB), Math.floor(TB), Math.floor(IB - JB), Math.floor(IB + JB), Math.floor(ZB + AI.f.fq), Math.floor(TB - JB), Math.floor(TB + JB)]
+       const qt = Ye.e.iy / 2;
+       return [Math.floor(et), Math.floor(Vt), Math.floor(Ot), Math.floor(et - qt), Math.floor(et + qt), Math.floor(Vt + Ye.e.Yy), Math.floor(Ot - qt), Math.floor(Ot + qt)]
```

#### 2240. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20181` → after: `L20181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20181) · [Before (L20181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20181)

```diff
-         null !== BB && vB.push([GB, (0, EZ.e)(BB)]), this.tap = {
+         null !== tt && dt.push([mt, (0, TV.b)(tt)]), this.tap = {
```

#### 2241. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20195-L20196` → after: `L20195-L20196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20195-L20196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20195-L20196) · [Before (L20195-L20196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20195-L20196)

```diff
-         const TB = (0, EZ.e)(BB);
-         return (0, EZ.h)(ZB.next, BB) || ZB.lines.some((BB => {
+         const Ot = (0, TV.b)(tt);
+         return (0, TV.d)(Vt.next, tt) || Vt.lines.some((tt => {
```

#### 2242. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20220` → after: `L20220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20220) · [Before (L20220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20220)

```diff
-         const ZB = this.pickNext((0, EZ.e)(IB.from), (BB => (0, EZ.h)(BB, IB.from)));
+         const Vt = this.pickNext((0, TV.b)(et.from), (tt => (0, TV.d)(tt, et.from)));
```

#### 2243. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20226` → after: `L20226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20226) · [Before (L20226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20226)

```diff
-         if (null !== TB && BB < TB.endMs && (0, EZ.h)(TB.to, ZB)) return;
+         if (null !== Ot && tt < Ot.endMs && (0, TV.d)(Ot.to, Vt)) return;
```

#### 2244. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20245` → after: `L20245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20245) · [Before (L20245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20245)

```diff
-         const IB = "active" === BB[0] ? `${BB[1]}|${BB[3]}|${BB[4]}|${BB[5]}|${BB[6]}` : "";
+         const et = "active" === tt[0] ? `${tt[1]}|${tt[3]}|${tt[4]}|${tt[5]}|${tt[6]}` : "";
```

#### 2245. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20273` → after: `L20273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20273) · [Before (L20273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20273)

```diff
-         for (let JB = 0; JB < BB.length; JB += 4) IB.add(`${BB[JB]},${BB[JB+1]},${BB[JB+2]}`);
+         for (let qt = 0; qt < tt.length; qt += 4) et.add(`${tt[qt]},${tt[qt+1]},${tt[qt+2]}`);
```

#### 2246. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20279` → after: `L20279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20279) · [Before (L20279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20279)

```diff
-           const BB = `${TB[JB]},${TB[JB+1]},${TB[JB+2]}`;
+           const tt = `${Ot[qt]},${Ot[qt+1]},${Ot[qt+2]}`;
```

#### 2247. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20292` → after: `L20292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20292) · [Before (L20292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20292)

```diff
-           const [ZB, cB, nB, hB] = [BB[kB], BB[kB + 1], BB[kB + 2], BB[kB + 3]], zB = this.api.getBlockId(ZB, cB, nB), FB = `${ZB},${cB},${nB}`, NB = MI(this.blockIds[hB], zB);
+           const [Vt, Ht, Xt, Qt] = [tt[jt], tt[jt + 1], tt[jt + 2], tt[jt + 3]], lt = this.api.getBlockId(Vt, Ht, Xt), Et = `${Vt},${Ht},${Xt}`, ft = Pe(this.blockIds[Qt], lt);
```

#### 2248. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20325` → after: `L20325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20325) · [Before (L20325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20325)

```diff
-         this.outline.show(null !== (BB = this.aimed) && void 0 !== BB ? BB : this.nextCell.TF(this.lastFilled))
+         this.outline.show(null !== (tt = this.aimed) && void 0 !== tt ? tt : this.nextCell.il(this.lastFilled))
```

#### 2249. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20331` → after: `L20331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20331) · [Before (L20331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20331)

```diff
-         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === ZB ? null : ZB.position), this.outline.show(null !== (IB = this.aimed) && void 0 !== IB ? IB : this.nextCell.get())
+         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Vt ? null : Vt.position), this.outline.show(null !== (et = this.aimed) && void 0 !== et ? et : this.nextCell.get())
```

#### 2250. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20352` → after: `L20352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20352) · [Before (L20352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20352)

```diff
-           const vB = BB.FZB(IB),
+           const dt = tt.bVt(et),
```

#### 2251. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20390` → after: `L20390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20390) · [Before (L20390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20390)

```diff
-         this.sent || vB.d.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
+         this.sent || dt.b.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
```

#### 2252. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20393-L20394` → after: `L20393-L20394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20393-L20394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20393-L20394) · [Before (L20393-L20394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20393-L20394)

```diff
-     var vT = ZB(4416),
-       kT = ZB(39216);
+     var jO = Vt(4339),
+       HO = Vt(39365);
```

#### 2253. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20401-L20403` → after: `L20401-L20403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20401-L20403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20401-L20403) · [Before (L20401-L20403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20401-L20403)

```diff
-         ah: 48,
-         minLifeTime: .3 / kT.b,
-         maxLifeTime: .55 / kT.b,
+         uQ: 48,
+         minLifeTime: .3 / HO.d,
+         maxLifeTime: .55 / HO.d,
```

#### 2254. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20409` → after: `L20409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20409) · [Before (L20409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20409)

```diff
-         gravity: [0, -14 * kT.b * kT.b, 0],
+         gravity: [0, -14 * HO.d * HO.d, 0],
```

#### 2255. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20419` → after: `L20419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20419) · [Before (L20419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20419)

```diff
-         blendMode: vT.g.Standard
+         blendMode: jO.f.Standard
```

#### 2256. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20425-L20427` → after: `L20425-L20427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20425-L20427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20425-L20427) · [Before (L20425-L20427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20425-L20427)

```diff
-       ah: 96,
-       minLifeTime: .5 / kT.b,
-       maxLifeTime: .9 / kT.b,
+       uQ: 96,
+       minLifeTime: .5 / HO.d,
+       maxLifeTime: .9 / HO.d,
```

#### 2257. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20433` → after: `L20433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20433) · [Before (L20433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20433)

```diff
-       gravity: [0, 2 * kT.b * kT.b, 0],
+       gravity: [0, 2 * HO.d * HO.d, 0],
```

#### 2258. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20442` → after: `L20442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20442) · [Before (L20442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20442)

```diff
-       blendMode: vT.g.OneOne
+       blendMode: jO.f.OneOne
```

#### 2259. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20451` → after: `L20451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20451) · [Before (L20451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20451)

```diff
-             const BB = `${JB},${oB},${GB}`;
+             const tt = `${qt},${Dt},${mt}`;
```

#### 2260. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20496` → after: `L20496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20496) · [Before (L20496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20496)

```diff
-         } = (0, nB.G)(),
+         } = (0, Xt.H)(),
```

#### 2261. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20499` → after: `L20499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20499) · [Before (L20499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20499)

```diff
-         } = (0, vB.o)(["isTouchScreen"]),
+         } = (0, dt.k)(["isTouchScreen"]),
```

#### 2262. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20503` → after: `L20503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20503) · [Before (L20503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20503)

```diff
-       if ((0, UB.e)((BB => hB && !BB.repeat && !(0, WB.isTypingInInput)() && !(0, FB.n)() && !JB), (BB => {
+       if ((0, Mt.c)((tt => Qt && !tt.repeat && !(0, bt.isTypingInInput)() && !(0, Et.q)() && !qt), (tt => {
```

#### 2263. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20507` → after: `L20507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20507) · [Before (L20507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20507)

```diff
-             return cB.u[zT].includes(BB) ? IB.rotate : null
+             return Ht.r[EO].includes(tt) ? et.rotate : null
```

#### 2264. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20512` → after: `L20512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20512) · [Before (L20512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20512)

```diff
-       return ZB.blocked ? qB = "plotsGame:placementOffPlot" : ZB.toClear > 0 ? qB = "plotsGame:placementClear" : "placeSpot" !== GB.hint && "placeBuild" !== GB.hint || (qB = null), (0, PB.jsx)(NB.h, {
+       return Vt.blocked ? yt = "plotsGame:placementOffPlot" : Vt.toClear > 0 ? yt = "plotsGame:placementClear" : "placeSpot" !== mt.hint && "placeBuild" !== mt.hint || (yt = null), (0, Lt.jsx)(ft.g, {
```

#### 2265. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20527` → after: `L20527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20527) · [Before (L20527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20527)

```diff
-             children: [(0, PB.jsxs)(wZ.g, {
+             children: [(0, Lt.jsxs)(hV.f, {
```

#### 2266. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20532` → after: `L20532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20532) · [Before (L20532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20532)

```diff
-             }), (0, PB.jsxs)(wZ.M, {
+             }), (0, Lt.jsxs)(hV.G, {
```

#### 2267. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20542` → after: `L20542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20542) · [Before (L20542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20542)

```diff
-               children: (0, PB.jsxs)(wZ.p, {
+               children: (0, Lt.jsxs)(hV.m, {
```

#### 2268. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20563-L20566` → after: `L20563-L20566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20563-L20566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20563-L20566) · [Before (L20563-L20566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20563-L20566)

```diff
-     var UT = ZB(2460),
-       WT = ZB(36708),
-       dT = ZB(2054),
-       CT = ZB(1325);
+     var MO = Vt(2435),
+       bO = Vt(36941),
+       JO = Vt(2063),
+       CO = Vt(1354);
```

#### 2269. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20579` → after: `L20579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20579) · [Before (L20579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20579)

```diff
-         GB = (0, WT.k)(TB);
+         mt = (0, bO.j)(Ot);
```

#### 2270. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20593` → after: `L20593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20593) · [Before (L20593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20593)

```diff
-         }, `${vB},${cB}`)
+         }, `${dt},${Ht}`)
```

#### 2271. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20609` → after: `L20609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20609) · [Before (L20609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20609)

```diff
-       } = (0, nB.G)(), hB = (0, dT.j)("hiddenPlayerNames"), FB = (0, dT.j)("players"), NB = null === GB ? null : null !== (IB = null === (ZB = FB.byId[GB]) || void 0 === ZB ? void 0 : ZB.cosmetics) && void 0 !== IB ? IB : null, qB = cB("plotsGame:plotBannerCoords", {
+       } = (0, Xt.H)(), Qt = (0, JO.h)("hiddenPlayerNames"), Et = (0, JO.h)("players"), ft = null === mt ? null : null !== (et = null === (Vt = Et.byId[mt]) || void 0 === Vt ? void 0 : Vt.cosmetics) && void 0 !== et ? et : null, yt = Ht("plotsGame:plotBannerCoords", {
```

#### 2272. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20624` → after: `L20624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20624) · [Before (L20624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20624)

```diff
-           children: [null !== NB && (0, PB.jsx)(UT.b, {
+           children: [null !== ft && (0, Lt.jsx)(MO.c, {
```

#### 2273. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20626` → after: `L20626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20626) · [Before (L20626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20626)

```diff
-           }), null === NB && (0, PB.jsx)(gB.d, {
+           }), null === ft && (0, Lt.jsx)(wt.b, {
```

#### 2274. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20634` → after: `L20634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20634) · [Before (L20634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20634)

```diff
-               name: (0, CT.e)(oB, hB)
+               name: (0, CO.f)(Dt, Qt)
```

#### 2275. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20662` → after: `L20662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20662) · [Before (L20662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20662)

```diff
-           cB = new JT(BB, JB, kB, IB), nB = new cZ(BB, JB), hB = new jB(BB, nB), zB = new sZ(BB, JB, cB.nextCell), FB = new GT(BB), NB.push((0, GB.x)((0, oB.createElement)(dZ, {
+           Ht = new DO(tt, qt, jt, et), Xt = new XV(tt, qt), Qt = new Zt(tt, Xt), lt = new KV(tt, qt, Ht.nextCell), Et = new dO(tt), ft.push((0, mt.q)((0, Dt.createElement)(JV, {
```

#### 2276. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20683-L20684` → after: `L20683-L20684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20683-L20684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20683-L20684) · [Before (L20683-L20684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20683-L20684)

```diff
-         Iz: () => {
-           FB.Iz(), cB.Iz(), nB.Iz(), hB.Iz()
+         BQ: () => {
+           Et.BQ(), Ht.BQ(), Xt.BQ(), Qt.BQ()
```

#### 2277. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20705-L20706` → after: `L20705-L20706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20705-L20706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20705-L20706) · [Before (L20705-L20706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20705-L20706)

```diff
-             cB.sN(BB), nB.sN(BB)
-           } else "plotsJournal" === BB ? hB.sN(IB) : "plotsJournalOpen" === BB ? hB.openFromServer(IB) : "plotsPreviewEnd" === BB ? nB.endFromServer() : "plotsGuide" === BB ? vB.receiveGuide(IB) : "plotsGuideDone" === BB && vB.receiveGuideDone()
+             Ht.Qf(tt), Xt.Qf(tt)
+           } else "plotsJournal" === tt ? Qt.Qf(et) : "plotsJournalOpen" === tt ? Qt.openFromServer(et) : "plotsPreviewEnd" === tt ? Xt.endFromServer() : "plotsGuide" === tt ? dt.receiveGuide(et) : "plotsGuideDone" === tt && dt.receiveGuideDone()
```

#### 2278. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20711` → after: `L20711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20711) · [Before (L20711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20711)

```diff
-   39601: (BB, IB, ZB) => {
+   39755: (tt, et, Vt) => {
```

#### 2279. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20727` → after: `L20727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20727) · [Before (L20727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20727)

```diff
-   39610: (BB, IB, ZB) => {
+   39763: (tt, et, Vt) => {
```

#### 2280. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20745` → after: `L20745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20745) · [Before (L20745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20745)

```diff
-   39615: (BB, IB, ZB) => {
+   39766: (tt, et, Vt) => {
```

#### 2281. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20749` → after: `L20749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20749) · [Before (L20749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20749)

```diff
-     var TB = ZB(34220);
+     var Ot = Vt(34406);
```

#### 2282. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20753-L20755` → after: `L20753-L20755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20753-L20755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20753-L20755) · [Before (L20753-L20755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20753-L20755)

```diff
-       if ("parenthetical-seconds" === IB) return ` (${BB}s)`;
-       const TB = `${Math.floor(BB/60)}:${(BB%60).toString().padStart(2,"0")}`;
-       return ZB ? `${ZB}${TB}` : TB
+       if ("parenthetical-seconds" === et) return ` (${tt}s)`;
+       const Ot = `${Math.floor(tt/60)}:${(tt%60).toString().padStart(2,"0")}`;
+       return Vt ? `${Vt}${Ot}` : Ot
```

#### 2283. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20763` → after: `L20763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20763) · [Before (L20763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20763)

```diff
-       vB.content = [...null !== (GB = JB.baseNametag.content) && void 0 !== GB ? GB : [], {
+       dt.content = [...null !== (mt = qt.baseNametag.content) && void 0 !== mt ? mt : [], {
```

#### 2284. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20768` → after: `L20768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20768) · [Before (L20768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20768)

```diff
-         str: `: ${(0,TB.b)(oB)}`
+         str: `: ${(0,Ot.d)(Dt)}`
```

#### 2285. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20783` → after: `L20783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20783) · [Before (L20783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20783)

```diff
-         Iz: BB => {
+         BQ: tt => {
```

#### 2286. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20798` → after: `L20798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20798) · [Before (L20798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20798)

```diff
-             if ("content" === JB.location) hB.content = [...null !== (ZB = JB.baseNametag.content) && void 0 !== ZB ? ZB : [], nB];
+             if ("content" === qt.location) Qt.content = [...null !== (Vt = qt.baseNametag.content) && void 0 !== Vt ? Vt : [], Xt];
```

#### 2287. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20849` → after: `L20849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20849) · [Before (L20849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20849)

```diff
-   8849: (BB, IB, ZB) => {
+   8952: (tt, et, Vt) => {
```

#### 2288. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20854` → after: `L20854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20854) · [Before (L20854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20854)

```diff
-     var TB = ZB(24);
+     var Ot = Vt(31);
```

#### 2289. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20860` → after: `L20860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20860) · [Before (L20860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20860)

```diff
-           "Air" === vB && TB.l.Gq(JB)
+           "Air" === dt && Ot.j.sw(qt)
```

#### 2290. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20865` → after: `L20865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20865) · [Before (L20865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20865)

```diff
-   38094: (BB, IB, ZB) => {
+   38281: (tt, et, Vt) => {
```

#### 2291. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20867` → after: `L20867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20867) · [Before (L20867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20867)

```diff
-       d: () => vB
+       c: () => dt
```

#### 2292. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20869-L20872` → after: `L20869-L20872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20869-L20872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20869-L20872) · [Before (L20869-L20872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20869-L20872)

```diff
-     var TB = ZB(360),
-       JB = ZB(36964),
-       oB = ZB(4665);
-     const GB = ["Leaf Bed", "_Leaf Bed Head", ...TB.Kc.flatMap((BB => [`${BB} Bed`, `_${BB} Bed Head`, `${BB} Strongbed`, `_${BB} Strongbed Head`]))];
+     var Ot = Vt(391),
+       qt = Vt(37172),
+       Dt = Vt(4614);
+     const mt = ["Leaf Bed", "_Leaf Bed Head", ...Ot.Nc.flatMap((tt => [`${tt} Bed`, `_${tt} Bed Head`, `${tt} Strongbed`, `_${tt} Strongbed Head`]))];
```

#### 2293. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20883` → after: `L20883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20883) · [Before (L20883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20883)

```diff
-           if ((0, JB.d)(BB.getMetaInfo(vB).rootName) && !BB.isEntityInteractable(kB) && (0, oB.f)(null === (cB = BB.FZB(IB)) || void 0 === cB ? void 0 : cB.typeObj.type)) return "preventAction"
+           if ((0, qt.e)(tt.getMetaInfo(dt).rootName) && !tt.isEntityInteractable(jt) && (0, Dt.e)(null === (Ht = tt.bVt(et)) || void 0 === Ht ? void 0 : Ht.typeObj.type)) return "preventAction"
```

#### 2294. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20888` → after: `L20888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20888) · [Before (L20888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20888)

```diff
-   39216: (BB, IB, ZB) => {
+   39365: (tt, et, Vt) => {
```

#### 2295. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20890-L20891` → after: `L20890-L20891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20890-L20891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20890-L20891) · [Before (L20890-L20891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20890-L20891)

```diff
-       b: () => TB,
-       d: () => oB
+       d: () => Ot,
+       g: () => Dt
```

#### 2296. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20899` → after: `L20899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20899) · [Before (L20899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20899)

```diff
-         this.style = BB, this.ah = IB, this.half = ZB, this.particles = null, this.lastFrame = -1
+         this.style = tt, this.uQ = et, this.half = Vt, this.particles = null, this.lastFrame = -1
```

#### 2297. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20909-L20910` → after: `L20909-L20910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20909-L20910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20909-L20910) · [Before (L20909-L20910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20909-L20910)

```diff
-             texture: BB.soft ? JB : "square_particle",
-             ah: IB,
+             texture: tt.soft ? qt : "square_particle",
+             uQ: et,
```

#### 2298. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20932` → after: `L20932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20932) · [Before (L20932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20932)

```diff
-         }(this.style, this.ah), {
+         }(this.style, this.uQ), {
```

#### 2299. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20943` → after: `L20943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20943) · [Before (L20943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20943)

```diff
-   38873: (BB, IB, ZB) => {
+   39039: (tt, et, Vt) => {
```

#### 2300. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20949` → after: `L20949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20949) · [Before (L20949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20949)

```diff
-           Iz: 0
+           BQ: 0
```

#### 2301. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20951-L20952` → after: `L20951-L20952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20951-L20952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20951-L20952) · [Before (L20951-L20952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20951-L20952)

```diff
-         cW: function(BB, IB) {},
-         nH: null,
+         qJ: function(tt, et) {},
+         nS: null,
```

#### 2302. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20954-L20955` → after: `L20954-L20955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20954-L20955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20954-L20955) · [Before (L20954-L20955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20954-L20955)

```diff
-           if (ZB[0] && 100 !== ZB[0].Iz++) return;
-           const TB = BB.zW.aU(BB.Jm);
+           if (Vt[0] && 100 !== Vt[0].BQ++) return;
+           const Ot = tt.mJ.YM(tt.lL);
```

#### 2303. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20957` → after: `L20957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20957) · [Before (L20957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20957)

```diff
-             const IB = BB.zW.aU(JB.bR);
+             const et = tt.mJ.YM(qt.uZ);
```

#### 2304. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20960` → after: `L20960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20960) · [Before (L20960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20960)

```diff
-             ZB > 500 && BB.zW.deleteEntity(JB.bR), JB.Iz = 0
+             Vt > 500 && tt.mJ.deleteEntity(qt.uZ), qt.BQ = 0
```

#### 2305. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20976` → after: `L20976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20976) · [Before (L20976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20976)

```diff
-   38830: (BB, IB, ZB) => {
+   38997: (tt, et, Vt) => {
```

#### 2306. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20981` → after: `L20981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20981) · [Before (L20981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20981)

```diff
-     var TB = ZB(2912);
+     var Ot = Vt(2848);
```

#### 2307. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20991` → after: `L20991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20991) · [Before (L20991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20991)

```diff
-         cW: function(BB, IB) {
+         qJ: function(tt, et) {
```

#### 2308. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L20994-L20996` → after: `L20994-L20996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20994-L20996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L20994-L20996) · [Before (L20994-L20996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L20994-L20996)

```diff
-         nH: null,
-         FW: function(IB, ZB) {
-           const oB = (0, TB.h)().Ig.kR,
+         nS: null,
+         dJ: function(et, Vt) {
+           const Dt = (0, Ot.e)().Bf.xI,
```

#### 2309. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21000-L21001` → after: `L21000-L21001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21000-L21001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21000-L21001) · [Before (L21000-L21001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21000-L21001)

```diff
-             const IB = BB.zW.RIB(TB.bR);
-             null === IB.gR ? IB.mesh.rotation.set(IB.mesh.rotation.x, TB.heading, IB.mesh.rotation.z) : oB.getCulledForEntity(IB.gR, TB.bR) || oB.setRotationEuler(IB.gR, 0, TB.heading, 0)
+             const et = tt.mJ.oet(Ot.uZ);
+             null === et.RP ? et.mesh.rotation.set(et.mesh.rotation.x, Ot.heading, et.mesh.rotation.z) : Dt.getCulledForEntity(et.RP, Ot.uZ) || Dt.setRotationEuler(et.RP, 0, Ot.heading, 0)
```

#### 2310. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21009-L21010` → after: `L21009-L21010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21009-L21010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21009-L21010) · [Before (L21009-L21010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21009-L21010)

```diff
-       const JB = BB.zW.getState(IB, "autoRotate");
-       JB && (null === (TB = BB.zW.RIB(IB)) || void 0 === TB ? void 0 : TB.gR) === ZB && BB.Ig.kR.setRotationEuler(ZB, 0, JB.heading, 0)
+       const qt = tt.mJ.getState(et, "autoRotate");
+       qt && (null === (Ot = tt.mJ.oet(et)) || void 0 === Ot ? void 0 : Ot.RP) === Vt && tt.Bf.xI.setRotationEuler(Vt, 0, qt.heading, 0)
```

#### 2311. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21013` → after: `L21013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21013) · [Before (L21013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21013)

```diff
-   38877: (BB, IB, ZB) => {
+   39042: (tt, et, Vt) => {
```

#### 2312. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21017` → after: `L21017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21017) · [Before (L21017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21017)

```diff
-     var TB = ZB(364),
+     var Ot = Vt(404),
```

#### 2313. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21019` → after: `L21019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21019) · [Before (L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21019)

```diff
-       oB = ZB(37504);
+       Dt = Vt(37699);
```

#### 2314. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21031-L21033` → after: `L21031-L21033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21031-L21033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21031-L21033) · [Before (L21031-L21033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21031-L21033)

```diff
-         cW: function(BB, IB) {},
-         nH: function(BB) {},
-         FW: function(IB, ZB) {
+         qJ: function(tt, et) {},
+         nS: function(tt) {},
+         dJ: function(et, Vt) {
```

#### 2315. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21037` → after: `L21037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21037) · [Before (L21037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21037)

```diff
-               TB.onEnd(), BB.zW.deleteEntity(TB.bR);
+               Ot.onEnd(), tt.mJ.deleteEntity(Ot.uZ);
```

#### 2316. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21041` → after: `L21041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21041) · [Before (L21041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21041)

```diff
-             const ZB = BB.zW.aU(TB.bR);
+             const Vt = tt.mJ.YM(Ot.uZ);
```

#### 2317. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21043-L21044` → after: `L21043-L21044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21043-L21044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21043-L21044) · [Before (L21043-L21044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21043-L21044)

```diff
-             BB.zW.setPosition(TB.bR, ZB);
-             const GB = BB.zW.RIB(TB.bR);
+             tt.mJ.setPosition(Ot.uZ, Vt);
+             const mt = tt.mJ.oet(Ot.uZ);
```

#### 2318. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21047` → after: `L21047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21047) · [Before (L21047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21047)

```diff
-                 [ZB, JB, vB] = BB.zW.yV(TB.bR),
+                 [Vt, qt, dt] = tt.mJ.oB(Ot.uZ),
```

#### 2319. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21049` → after: `L21049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21049) · [Before (L21049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21049)

```diff
-               (0, oB.o)(IB, ZB + kB - IB.position.x, JB + cB - IB.position.y, vB + nB - IB.position.z), TB._updatedLookAt = !0
+               (0, Dt.p)(et, Vt + jt - et.position.x, qt + Ht - et.position.y, dt + Xt - et.position.z), Ot._updatedLookAt = !0
```

#### 2320. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21056` → after: `L21056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21056) · [Before (L21056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21056)

```diff
-   38884: (BB, IB, ZB) => {
+   39044: (tt, et, Vt) => {
```

#### 2321. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21060` → after: `L21060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21060) · [Before (L21060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21060)

```diff
-     var TB, JB, oB, GB, vB, kB, cB, nB, hB, zB = ZB(364),
+     var Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt = Vt(404),
```

#### 2322. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21062-L21065` → after: `L21062-L21065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21062-L21065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21062-L21065) · [Before (L21062-L21065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21062-L21065)

```diff
-       NB = ZB(37928),
-       gB = ZB(38888),
-       qB = ZB(37812),
-       yB = ZB(1281);
+       ft = Vt(38126),
+       wt = Vt(39049),
+       yt = Vt(37997),
+       Nt = Vt(1308);
```

#### 2323. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21078-L21080` → after: `L21078-L21080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21078-L21080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21078-L21080) · [Before (L21078-L21080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21078-L21080)

```diff
-         nH: function(BB, IB) {},
-         FW: function(IB, ZB) {
-           for (const TB of ZB) TB.bR === BB.Jm && (TB.targetRotationOffset[0] = TB.frontFacing ? Math.PI : 0, TB.targetRotationOffset[1] = 0, TB.targetRotationOffset[2] = TB.frontFacing ? Math.PI : 0, TB.shakeTime > 0 && (TB.targetRotationOffset[0] += .2 * TB.shakePower * Math.co … [truncated]
+         nS: function(tt, et) {},
+         dJ: function(et, Vt) {
+           for (const Ot of Vt) Ot.uZ === tt.lL && (Ot.targetRotationOffset[0] = Ot.frontFacing ? Math.PI : 0, Ot.targetRotationOffset[1] = 0, Ot.targetRotationOffset[2] = Ot.frontFacing ? Math.PI : 0, Ot.shakeTime > 0 && (Ot.targetRotationOffset[0] += .2 * Ot.shakePower * Math.co … [truncated]
```

#### 2324. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21084-L21099` → after: `L21084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21084) · [Before (L21084-L21099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21084-L21099)

```diff
-     const WB = [5, 0, 1, "h", 3, "a", 109, 7, 211, 144, "d", 8, 255, "length", "undefined", "b", void 0, "c", 63, 6, "fromCodePoint", 12, "push", 174, !1, 91, 8191, 88, 13, 14, 38, "e", "f", 4, !0, 2, 100, 149, 178, 232, 44, 105, 228, 80, null, 195, 10, 77, 9, 112, 11, 15, 94, "i … [truncated]
- 
-     function dB(BB) {
-       return typeof TB[BB] === WB[14] ? TB[BB] = function(...BB) {
-         for (sB(BB[WB[13]] = WB[2], BB[WB[5]] = 'I1#TBNWr>qRmU]KuJ4@t`"_0=s*;E)Vf<O3YHMb!g~ny7d(hl?c,j|Q}Fo2PiD[Z+9vp/CA&S^:{wGLxX.k%5zae$68', BB[-WB[0]] = "" + (BB[WB[1]] || ""), BB[WB[4]] = BB[-WB[0]].length, BB[WB[10]] = [], BB[-WB[8]] = WB[1], BB[-WB[9]] = WB[1], BB[WB[7]] =  … [truncated]
-           if (BB[-WB[6]] = BB[WB[5]].indexOf(BB[-WB[0]][BB[WB[3]]]), BB[-WB[6]] !== -WB[2])
-             if (BB[WB[7]] < WB[1]) BB[WB[7]] = BB[-WB[6]];
-             else {
-               sB(BB[WB[7]] += BB[-WB[6]] * WB[25], BB[-WB[8]] |= BB[WB[7]] << BB[-WB[9]], BB[-WB[9]] += (BB[WB[7]] & WB[26]) > WB[27] ? WB[28] : WB[29]);
-               do {
-                 sB(BB[WB[10]].push(BB[-WB[8]] & WB[12]), BB[-WB[8]] >>= WB[11], BB[-WB[9]] -= WB[11])
-               } while (BB[-WB[9]] > WB[7]);
-               BB[WB[7]] = -WB[2]
-             } return BB[WB[7]] > -WB[2] && BB[WB[10]].push((BB[-WB[8]] | BB[WB[7]] << BB[-WB[9]]) & WB[12]), CB(BB[WB[10]])
-       }(JB[BB]) : TB[BB]
-     }
+     const bt = [1, 78, 0, 8, "c", "i", 7, 5, "f", 4, 255, "length", 3, 42, "e", "undefined", "a", void 0, 2, 131, 63, 6, "fromCodePoint", 12, "push", "b", 91, 8191, 88, 13, 14, 21, 153, 84, "d", "h", 83, 9, 197, 225, 111, 75, 173, 71, 168, 245, 159, "g", 180, 37, 109, 134, 110, 2 … [truncated]
```

#### 2325. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21102` → after: `L21087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21087) · [Before (L21102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21102)

```diff
-       return BB[WB[13]] = WB[2], typeof GB !== WB[14] && GB ? (new GB).decode(new vB(BB[WB[1]])) : typeof kB !== WB[14] && kB ? kB.from(BB[WB[1]]).toString("utf-8") : hB(BB[WB[1]])
+       return tt[bt[11]] = bt[0], typeof mt !== bt[15] && mt ? (new mt).decode(new dt(tt[bt[2]])) : typeof jt !== bt[15] && jt ? jt.from(tt[bt[2]]).toString("utf-8") : Qt(tt[bt[2]])
```

#### 2326. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21110-L21111` → after: `L21095-L21096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21095-L21096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21095-L21096) · [Before (L21110-L21111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21110-L21111)

```diff
-     sB(TB = {}, JB = ['0(uqEQMr(Fhw_*"Y:diRO/m|}2D1xKD0.9irM/>>y>imhKCVpq_r)', "bq^,J&72e+fw`J1f}9JLpSl(4Q9v_MU", "70=^eo*>D[+YybXg8lGf}2dtZU", "K<]RKC.]5],K?lg@cl1", "MQq{,MZ1cqE41", "VMGrMFU(^[,v~Be_!4<^8OX(yFmJ!KHs4ohW3gw3?o,ZHhs0D3>Vl!Qgtt", "4&Q}~XZ1D>8|/;u", "BQfVaj*=U9.p`u … [truncated]
-       var BB, IB, ZB, TB = [function() {
+     ut(Ot = {}, qt = ["!:NwG%yvI%o&[t_Q%.wC<w$#", '`{`A)b?!0uHW";v*0eSVVJtv=!2H]iPYOzD+u6]ZPxVXNy{yie6hssM5', "$N(o48>VbYoNI1^[NT;=)kL5", 'sI6T/F7z0x{L:b.$^N<TPenvn<oh.;Y$"&}@h]xF`!({,>;>$Q~RYwb#', "OrI=Fl8X3aY][Jx$a2wC9?QQF([!f4A$cYA>w4Mv}!TT?kA>oAlABV`1|:", 'pO0TIl,"#hc%SOj1T^l … [truncated]
+       ut(tt[bt[11]] = bt[2], tt[-bt[13]] = [function() {
```

#### 2327. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21119-L21120` → after: `L21104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21104) · [Before (L21119-L21120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21119-L21120)

```diff
-       }];
-       sB(BB = void 0, IB = []);
+       }], tt[bt[0]] = bt[17], tt[bt[4]] = []);
```

#### 2328. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21122` → after: `L21106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21106) · [Before (L21122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21122)

```diff
-         sB(BB = Object, IB[WB[22]]("".__proto__.constructor.name))
+         ut(tt[bt[0]] = Object, tt[bt[4]][bt[24]]("".__proto__.constructor.name))
```

#### 2329. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21124-L21128` → after: `L21108-L21111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21108-L21111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21108-L21111) · [Before (L21124-L21128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21124-L21128)

```diff
-       BB: for (ZB = WB[1]; ZB < TB[WB[13]]; ZB++) try {
-         var JB;
-         for (BB = TB[ZB](), JB = WB[1]; JB < IB[WB[13]]; JB++)
-           if (typeof BB[IB[JB]] === WB[14]) continue BB;
-         return BB
+       tt: for (tt[bt[12]] = bt[2]; tt[bt[12]] < tt[-bt[13]][bt[11]]; tt[bt[12]]++) try {
+         for (tt[bt[0]] = tt[-bt[13]][tt[bt[12]]](), tt[bt[14]] = bt[2]; tt[bt[14]] < tt[bt[4]][bt[11]]; tt[bt[14]]++)
+           if (typeof tt[bt[0]][tt[bt[4]][tt[bt[14]]]] === bt[15]) continue tt;
+         return tt[bt[0]]
```

#### 2330. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21130-L21132` → after: `L21113-L21115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21113-L21115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21113-L21115) · [Before (L21130-L21132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21130-L21132)

```diff
-       return BB || this
-     }() || {}, GB = oB.TextDecoder, vB = oB.Uint8Array, kB = oB.UN, cB = oB.String || String, nB = oB.Array || Array, hB = function(...BB) {
-       return sB(BB[WB[13]] = WB[1], BB[WB[15]] = new nB(128), BB[WB[23]] = cB[WB[20]] || cB.fromCharCode, BB[WB[10]] = []),
+       return tt[bt[0]] || this
+     }() || {}, mt = Dt.TextDecoder, dt = Dt.Uint8Array, jt = Dt.mf, Ht = Dt.String || String, Xt = Dt.Array || Array, Qt = function(...tt) {
+       return ut(tt[bt[11]] = bt[2], tt[bt[16]] = new Xt(128), tt[bt[25]] = Ht[bt[22]] || Ht.fromCharCode, tt[bt[18]] = []),
```

#### 2331. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21134-L21164` → after: `L21117-L21118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21117-L21118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21117-L21118) · [Before (L21134-L21164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21134-L21164)

```diff
-           for (sB(IB[WB[13]] = WB[2], IB[WB[5]] = WB[16], IB[WB[15]] = WB[16], IB[WB[17]] = IB[WB[1]][WB[13]], BB[WB[10]][WB[13]] = WB[1]), IB[WB[10]] = WB[1]; IB[WB[10]] < IB[WB[17]];) sB(IB[WB[15]] = IB[WB[1]][IB[WB[10]]++], IB[WB[15]] <= 127 ? IB[WB[5]] = IB[WB[15]] : IB[WB[15 … [truncated]
-           return BB[WB[10]].join("")
-         }
-     }()), dB(WB[43]) + "5" in QB && (module.exports = async (BB = () => {
-       throw new Error(dB(81))
-     }) => {
-       const IB = new Set(process.argv.slice(WB[35]));
-       if (!IB.has(dB(82))) {
-         if (IB.size !== WB[2]) return WB[24];
-         if (!IB.has("-v")) return WB[24]
-       }
-       return await (async (IB, ZB) => {
-         function oB(BB) {
-           var IB, ZB, TB, JB, oB, GB, vB, kB = 'N"8}uD{CZTG1$q(7OP~,Ec[3v5#s^&+z2RIx`k*!;We)jr9:KM.@Q]p/=UyH>_Y<miB?g|6h0afno%w4lbtXFJSdLVA';
-           for (sB(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = WB[1], oB = WB[1], GB = -WB[2]), vB = WB[1]; vB < ZB; vB++) {
-             var cB = kB.indexOf(IB[vB]);
- ... (15 more removed lines; see GitHub link above)
+           for (ut(et[bt[11]] = bt[0], et[bt[16]] = bt[17], et[bt[19]] = bt[17], et[bt[4]] = et[bt[2]][bt[11]], tt[bt[18]][bt[11]] = bt[2]), et[bt[9]] = bt[2]; et[bt[9]] < et[bt[4]];) ut(et[bt[19]] = et[bt[2]][et[bt[9]]++], et[bt[19]] <= 127 ? et[bt[16]] = et[bt[19]] : et[bt[19]]  … [truncated]
+           return tt[bt[18]].join("")
```

#### 2332. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21166-L21173` → after: `L21120-L21127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21120-L21127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21120-L21127) · [Before (L21166-L21173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21166-L21173)

```diff
-         return ZB === await BB() ? GB(85) + "l)" : ""
-       })(), WB[34]
-     }), (() => {
-       function BB(...BB) {
-         return BB[WB[13]] = WB[2], typeof TB[BB[WB[1]]] === WB[14] ? TB[BB[WB[1]]] = function(...BB) {
-           for (sB(BB[WB[13]] = WB[2], BB[WB[5]] = ',A%y<`)]FdK$s1uvBOR9i|?pc&IM3Y/(X7[Dn+.:^;Uw{Wb=zoJQ"kZm2hS_!6qxTN8}ef405>CVE#rj*Hlt@~PGagL', BB[WB[15]] = "" + (BB[WB[1]] || ""), BB[WB[4]] = BB[WB[15]].length, BB[WB[33]] = [], BB[WB[31]] = WB[1], BB[WB[32]] = WB[1], BB[WB[7]]  … [truncated]
-             if (BB[WB[30]] = BB[WB[5]].indexOf(BB[WB[15]][BB[WB[3]]]), BB[WB[30]] !== -WB[2])
-               if (BB[WB[7]] < WB[1]) BB[WB[7]] = BB[WB[30]];
+     }()), (() => {
+       function tt(tt) {
+         return typeof Ot[tt] === bt[15] ? Ot[tt] = function(tt) {
+           var et, Vt, Ot, qt, Dt, mt, dt;
+           for (ut(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = bt[2], Dt = bt[2], mt = -bt[0]), dt = bt[2]; dt < Vt; dt++) {
+             var jt = '<uevzw$OIfsCHF96nyQD:gM1.82rXTbAhZSaNm*{,>5(_VRKq=W/`t}#Gklo@xJ;B%~)iP"7d]p+cjYL0?4|3E[!&^U'.indexOf(et[dt]);
+             if (jt !== -bt[0])
+               if (mt < bt[2]) mt = jt;
```

#### 2333. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21175` → after: `L21129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21129) · [Before (L21175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21175)

```diff
-                 sB(BB[WB[7]] += BB[WB[30]] * WB[25], BB[WB[31]] |= BB[WB[7]] << BB[WB[32]], BB[WB[32]] += (BB[WB[7]] & WB[26]) > WB[27] ? WB[28] : WB[29]);
+                 ut(mt += jt * bt[26], qt |= mt << Dt, Dt += (mt & bt[27]) > bt[28] ? bt[29] : bt[30]);
```

#### 2334. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21177-L21227` → after: `L21131-L21134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21131-L21134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21131-L21134) · [Before (L21177-L21227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21177-L21227)

```diff
-                   sB(BB[WB[33]].push(BB[WB[31]] & WB[12]), BB[WB[31]] >>= WB[11], BB[WB[32]] -= WB[11])
-                 } while (BB[WB[32]] > WB[7]);
-                 BB[WB[7]] = -WB[2]
-               } return BB[WB[7]] > -WB[2] && BB[WB[33]].push((BB[WB[31]] | BB[WB[7]] << BB[WB[32]]) & WB[12]), CB(BB[WB[33]])
-         }(JB[BB[WB[1]]]) : TB[BB[WB[1]]]
-       } [][WB[13]] = WB[1], BB(86) in QB && function() {
-         const BB = require("big-integer");
-         class IB {
-           static randomPrime(...IB) {
-             IB[WB[13]] = WB[2];
-             const ZB = BB.one.shiftLeft(IB[WB[1]] - WB[2]),
-               TB = BB.one.shiftLeft(IB[WB[1]]).prev();
-             for (; WB[34];) {
-               let IB = BB.randBetween(ZB, TB);
-               if (IB.isProbablePrime(256)) return IB
-             }
- ... (35 more removed lines; see GitHub link above)
+                   ut(Ot.push(qt & bt[10]), qt >>= bt[3], Dt -= bt[3])
+                 } while (Dt > bt[6]);
+                 mt = -bt[0]
+               }
```

#### 2335. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21229-L21238` → after: `L21136-L21145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21136-L21145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21136-L21145) · [Before (L21229-L21238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21229-L21238)

```diff
-         }
-         module.exports = IB
-       }();
-       const IB = Date[BB(87)]() < new Date(BB(WB[27]) + BB(89) + BB(90) + "0Z")[BB(WB[25]) + WB[31]](),
-         ZB = BB(92) + BB(93) + BB(WB[52]),
-         oB = BB(95) + "I=",
-         GB = BB(96) + "s=",
-         vB = BB(97) + BB(98),
-         kB = BB(99) + BB(WB[36]),
-         cB = BB(101) + "Zl",
+           return mt > -bt[0] && Ot.push((qt | mt << Dt) & bt[10]), Jt(Ot)
+         }(qt[tt]) : Ot[tt]
+       }
+       const et = Date[tt(103)]() < new Date(tt(104) + tt(105) + tt(106) + "0Z")[tt(107) + bt[14]](),
+         Vt = tt(108) + tt(bt[50]) + tt(bt[52]),
+         mt = tt(bt[40]) + "I=",
+         dt = tt(112) + "s=",
+         jt = tt(113) + tt(114),
+         Ht = tt(115) + tt(116),
+         Xt = tt(117) + "Zl",
```

#### 2336. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21248-L21250` → after: `L21209-L21211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21209-L21211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21209-L21211) · [Before (L21248-L21250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21248-L21250)

```diff
-               for (sB(BB[WB[13]] = WB[2], BB[WB[2]] = 'f8(0<ujvZ,GPAFV:ba9D1@">B4h57S{sK6np]wT?Jx$!_W}`&#*|y3k~XE%2=;.+dzoOYNIQ[)qcCm/t^rRlgeULiMH', BB[-WB[37]] = "" + (BB[WB[1]] || ""), BB[-WB[38]] = BB[-WB[37]].length, BB[WB[42]] = [], BB[WB[40]] = WB[1], BB[WB[41]] = WB[1], BB … [truncated]
-                 if (BB[-WB[19]] = BB[WB[2]].indexOf(BB[-WB[37]][BB[WB[11]]]), BB[-WB[19]] !== -WB[2])
-                   if (BB[WB[39]] < WB[1]) BB[WB[39]] = BB[-WB[19]];
+               for (ut(tt[bt[11]] = bt[0], tt[-bt[41]] = 'n./x_e=<rw9HF;L31Y%hzf5!Co@suO&y+RE0[GmgNMa^`V~U7bS}Dq*d|>icpW("{?Bl)4X,v$]6ATJ2PIjkZ8#:QKt', tt[-bt[0]] = "" + (tt[bt[2]] || ""), tt[-bt[40]] = tt[-bt[0]].length, tt[-bt[44]] = [], tt[bt[43]] = bt[2], tt[bt[21]] = bt[2], t … [truncated]
+                 if (tt[-bt[42]] = tt[-bt[41]].indexOf(tt[-bt[0]][tt[bt[35]]]), tt[-bt[42]] !== -bt[0])
+                   if (tt[bt[6]] < bt[2]) tt[bt[6]] = tt[-bt[42]];
```

#### 2337. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21252` → after: `L21213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21213) · [Before (L21252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21252)

```diff
-                     sB(BB[WB[39]] += BB[-WB[19]] * WB[25], BB[WB[40]] |= BB[WB[39]] << BB[WB[41]], BB[WB[41]] += (BB[WB[39]] & WB[26]) > WB[27] ? WB[28] : WB[29]);
+                     ut(tt[bt[6]] += tt[-bt[42]] * bt[26], tt[bt[43]] |= tt[bt[6]] << tt[bt[21]], tt[bt[21]] += (tt[bt[6]] & bt[27]) > bt[28] ? bt[29] : bt[30]);
```

#### 2338. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21254-L21261` → after: `L21215-L21218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21215-L21218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21215-L21218) · [Before (L21254-L21261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21254-L21261)

```diff
-                       sB(BB[WB[42]].push(BB[WB[40]] & WB[12]), BB[WB[40]] >>= WB[11], BB[WB[41]] -= WB[11])
-                     } while (BB[WB[41]] > WB[7]);
-                     BB[WB[39]] = -WB[2]
-                   } return BB[WB[39]] > -WB[2] && BB[WB[42]].push((BB[WB[40]] | BB[WB[39]] << BB[WB[41]]) & WB[12]), CB(BB[WB[42]])
-             }
- 
-             function GB(...BB) {
-               return BB[WB[13]] = WB[2], typeof TB[BB[WB[1]]] === WB[14] ? TB[BB[WB[1]]] = oB(JB[BB[WB[1]]]) : TB[BB[WB[1]]]
+                       ut(tt[-bt[44]].push(tt[bt[43]] & bt[10]), tt[bt[43]] >>= bt[3], tt[bt[21]] -= bt[3])
+                     } while (tt[bt[21]] > bt[6]);
+                     tt[bt[6]] = -bt[0]
+                   } return tt[bt[6]] > -bt[0] && tt[-bt[44]].push((tt[bt[43]] | tt[bt[6]] << tt[bt[21]]) & bt[10]), Jt(tt[-bt[44]])
```

#### 2339. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21276-L21280` → after: `L21222-L21230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21222-L21230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21222-L21230) · [Before (L21276-L21280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21276-L21280)

```diff
-               var IB, ZB, TB, JB, oB, GB, vB;
-               for (sB(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = WB[1], oB = WB[1], GB = -WB[2]), vB = WB[1]; vB < ZB; vB++) {
-                 var kB = '0FVNfq,*uMGAswJ3=Lp?~g|mTKdeS5t;$(xb{_RBa9EIUCZW<&#+P"Hlzr812ih6n)v[oQ>j!4/]}D`@c:O^X7%y.kY'.indexOf(IB[vB]);
-                 if (kB !== -WB[2])
-                   if (GB < WB[1]) GB = kB;
+               return typeof Ot[tt] === bt[15] ? Ot[tt] = Ht(qt[tt]) : Ot[tt]
+             }
+             Xt(123), (0, ft[bt[4]])("en")
+           }
+           if (!window[Nt][Mt][Mt]()[lt](Kt)) {
+             function ht(...tt) {
+               for (ut(tt[bt[11]] = bt[0], tt[bt[0]] = '@FVogidPY1zQ"DkJa4+#ZU$^&H~=K;j{t3EXL(brquvlw<SB*AM[sR9:x!/)yOnCf?G28|05]_Teh6I%m>.7}Wc`pN,', tt[bt[18]] = "" + (tt[bt[2]] || ""), tt[bt[4]] = tt[bt[18]].length, tt[bt[9]] = [], tt[-bt[48]] = bt[2], tt[bt[49]] = bt[2], tt[bt[ … [truncated]
+                 if (tt[bt[46]] = tt[bt[0]].indexOf(tt[bt[18]][tt[bt[35]]]), tt[bt[46]] !== -bt[0])
+                   if (tt[bt[47]] < bt[2]) tt[bt[47]] = tt[bt[46]];
```

#### 2340. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21282` → after: `L21232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21232) · [Before (L21282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21282)

```diff
-                     sB(GB += kB * WB[25], JB |= GB << oB, oB += (GB & WB[26]) > WB[27] ? WB[28] : WB[29]);
+                     ut(tt[bt[47]] += tt[bt[46]] * bt[26], tt[-bt[48]] |= tt[bt[47]] << tt[bt[49]], tt[bt[49]] += (tt[bt[47]] & bt[27]) > bt[28] ? bt[29] : bt[30]);
```

#### 2341. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21284-L21289` → after: `L21234-L21237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21234-L21237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21234-L21237) · [Before (L21284-L21289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21284-L21289)

```diff
-                       sB(TB.push(JB & WB[12]), JB >>= WB[11], oB -= WB[11])
-                     } while (oB > WB[7]);
-                     GB = -WB[2]
-                   }
-               }
-               return GB > -WB[2] && TB.push((JB | GB << oB) & WB[12]), CB(TB)
+                       ut(tt[bt[9]].push(tt[-bt[48]] & bt[10]), tt[-bt[48]] >>= bt[3], tt[bt[49]] -= bt[3])
+                     } while (tt[bt[49]] > bt[6]);
+                     tt[bt[47]] = -bt[0]
+                   } return tt[bt[47]] > -bt[0] && tt[bt[9]].push((tt[-bt[48]] | tt[bt[47]] << tt[bt[49]]) & bt[10]), Jt(tt[bt[9]])
```

#### 2342. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21292-L21293` → after: `L21240-L21241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21240-L21241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21240-L21241) · [Before (L21292-L21293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21292-L21293)

```diff
-             function dB(...BB) {
-               return BB[WB[13]] = WB[2], typeof TB[BB[WB[1]]] === WB[14] ? TB[BB[WB[1]]] = cB(JB[BB[WB[1]]]) : TB[BB[WB[1]]]
+             function vt(tt) {
+               return typeof Ot[tt] === bt[15] ? Ot[tt] = ht(qt[tt]) : Ot[tt]
```

#### 2343. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21297-L21360` → after: `L21245-L21252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21245-L21252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21245-L21252) · [Before (L21297-L21360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21297-L21360)

```diff
-               function IB(...BB) {
-                 return BB[WB[13]] = WB[2], typeof TB[BB[WB[1]]] === WB[14] ? TB[BB[WB[1]]] = function(...BB) {
-                   for (sB(BB[WB[13]] = WB[2], BB[-WB[47]] = '?YnMoh$1QN@:zr~*V}bR>HI_O=Eev3uUl5wGxgZWA|[<&B7p9my"%k2c!qDt,(f6j{TFS0]Ls^i#4/;.Ka8`d)JXC+P', BB[-WB[30]] = "" + (BB[WB[1]] || ""), BB[WB[4]] = BB[-WB[30]].length, BB[WB[33]] = [], BB[WB[50]] = WB[1], BB[WB[19]] = WB[1] … [truncated]
-                     if (BB[WB[48]] = BB[-WB[47]].indexOf(BB[-WB[30]][BB[WB[11]]]), BB[WB[48]] !== -WB[2])
-                       if (BB[-WB[49]] < WB[1]) BB[-WB[49]] = BB[WB[48]];
-                       else {
-                         sB(BB[-WB[49]] += BB[WB[48]] * WB[25], BB[WB[50]] |= BB[-WB[49]] << BB[WB[19]], BB[WB[19]] += (BB[-WB[49]] & WB[26]) > WB[27] ? WB[28] : WB[29]);
-                         do {
-                           sB(BB[WB[33]].push(BB[WB[50]] & WB[12]), BB[WB[50]] >>= WB[11], BB[WB[19]] -= WB[11])
-                         } while (BB[WB[19]] > WB[7]);
-                         BB[-WB[49]] = -WB[2]
-                       } return BB[-WB[49]] > -WB[2] && BB[WB[33]].push((BB[WB[50]] | BB[-WB[49]] << BB[WB[19]]) & WB[12]), CB(BB[WB[33]])
-                 }(JB[BB[WB[1]]]) : TB[BB[WB[1]]]
-               }
-               BB[WB[13]] = WB[1];
-               const ZB = require("path"),
- ... (48 more removed lines; see GitHub link above)
+               ut(tt[bt[11]] = bt[2], tt[bt[16]] = function(...et) {
+                 return ut(et[bt[11]] = bt[18], et[bt[50]] = [], et[-bt[51]] = et[bt[2]].length, et[bt[2]].sort(((tt, et) => tt - et)), tt[bt[0]](et[bt[50]], [], bt[2], et[-bt[51]], et[bt[2]], et[bt[0]])), et[bt[50]]
+               }, tt[bt[0]] = function(...et) {
+                 if (ut(et[bt[11]] = bt[21], et[-bt[49]] = bt[57]), !(et[bt[7]] < bt[2])) {
+                   if (et[bt[7]] === bt[2]) return et[bt[2]].push(et[bt[0]]);
+                   for (et[bt[25]] = et[bt[18]]; et[bt[25]] < et[bt[12]] && !(et[bt[9]][et[bt[25]]] > et[bt[7]]); et[bt[25]]++) et[bt[25]] > et[bt[18]] && et[bt[9]][et[bt[25]]] === et[bt[9]][et[bt[25]] - bt[0]] || ut(et[-bt[49]] = Array.from(et[bt[0]]), et[-bt[49]].push(et[bt[9]][ … [truncated]
+                 }
+               }, console.log(tt[bt[16]]))
```

#### 2344. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21362` → after: `L21254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21254) · [Before (L21362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21362)

```diff
-             BB(WB[61]) + "M" in QB && iB(), (WB[1], NB[WB[31]])("en")
+             vt(124) + "D" in Ct && Wt(), (0, ft[bt[4]])("fr")
```

#### 2345. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21367-L21372` → after: `L21258-L21263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21258-L21263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21258-L21263) · [Before (L21367-L21372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21367-L21372)

```diff
-         BB[WB[13]] = WB[1],
-           function(BB) {
-             return typeof TB[BB] === WB[14] ? TB[BB] = function(...BB) {
-               for (sB(BB[WB[13]] = WB[2], BB[-WB[57]] = 'E*DL9.5>et]w:fF[xv%#l@Rcb;Y3!=U(4_0OI/T?1|,6"GN+nWZMu2Cm{}$~Q)zHBh8Jk7qVy^P&a<iKsSAp`rXjodg', BB[WB[35]] = "" + (BB[WB[1]] || ""), BB[WB[17]] = BB[WB[35]].length, BB[WB[60]] = [], BB[WB[31]] = WB[1], BB[WB[19]] = WB[1], BB[ … [truncated]
-                 if (BB[-WB[58]] = BB[-WB[57]].indexOf(BB[WB[35]][BB[WB[56]]]), BB[-WB[58]] !== -WB[2])
-                   if (BB[WB[59]] < WB[1]) BB[WB[59]] = BB[-WB[58]];
+         tt[bt[11]] = bt[2],
+           function(...tt) {
+             return tt[bt[11]] = bt[0], typeof Ot[tt[bt[2]]] === bt[15] ? Ot[tt[bt[2]]] = function(...tt) {
+               for (ut(tt[bt[11]] = bt[0], tt[bt[0]] = '3^;/"9u{!:|>04D=,Eodjn5gL?v*6R_&}hwO)k@BaCAitGTl~VU+2mYpQKsFI(#7c8e<$x]ZJMy`.H1PWqS%zN[Xrbf', tt[bt[25]] = "" + (tt[bt[2]] || ""), tt[bt[52]] = tt[bt[25]].length, tt[bt[56]] = [], tt[bt[33]] = bt[2], tt[bt[8]] = bt[2], tt[bt[ … [truncated]
+                 if (tt[-bt[54]] = tt[bt[0]].indexOf(tt[bt[25]][tt[bt[53]]]), tt[-bt[54]] !== -bt[0])
+                   if (tt[bt[55]] < bt[2]) tt[bt[55]] = tt[-bt[54]];
```

#### 2346. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21374` → after: `L21265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21265) · [Before (L21374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21374)

```diff
-                     sB(BB[WB[59]] += BB[-WB[58]] * WB[25], BB[WB[31]] |= BB[WB[59]] << BB[WB[19]], BB[WB[19]] += (BB[WB[59]] & WB[26]) > WB[27] ? WB[28] : WB[29]);
+                     ut(tt[bt[55]] += tt[-bt[54]] * bt[26], tt[bt[33]] |= tt[bt[55]] << tt[bt[8]], tt[bt[8]] += (tt[bt[55]] & bt[27]) > bt[28] ? bt[29] : bt[30]);
```

#### 2347. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21376-L21394` → after: `L21267-L21278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21267-L21278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21267-L21278) · [Before (L21376-L21394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21376-L21394)

```diff
-                       sB(BB[WB[60]].push(BB[WB[31]] & WB[12]), BB[WB[31]] >>= WB[11], BB[WB[19]] -= WB[11])
-                     } while (BB[WB[19]] > WB[7]);
-                     BB[WB[59]] = -WB[2]
-                   } return BB[WB[59]] > -WB[2] && BB[WB[60]].push((BB[WB[31]] | BB[WB[59]] << BB[WB[19]]) & WB[12]), CB(BB[WB[60]])
-             }(JB[BB]) : TB[BB]
-           }(WB[6]) + "2" in QB && function(...BB) {
-             sB(BB[WB[13]] = WB[1], BB[WB[5]] = function(...BB) {
-               for (sB(BB[WB[13]] = WB[2], BB[WB[62]] = BB[WB[1]].length, BB[WB[61]] = [], BB[-WB[47]] = WB[1], BB[WB[33]] = WB[1], BB[WB[1]].sort(((BB, IB) => BB - IB))), BB[WB[31]] = WB[1]; BB[WB[31]] < BB[WB[62]]; BB[WB[31]]++)
-                 if (!(BB[WB[31]] > WB[1] && BB[WB[1]][BB[WB[31]]] === BB[WB[1]][BB[WB[31]] - WB[2]]))
-                   for (sB(BB[-WB[47]] = BB[WB[31]] + WB[2], BB[WB[33]] = BB[WB[62]] - WB[2]); BB[-WB[47]] < BB[WB[33]];)
-                     if (BB[WB[1]][BB[WB[31]]] + BB[WB[1]][BB[-WB[47]]] + BB[WB[1]][BB[WB[33]]] < WB[1]) BB[-WB[47]]++;
-                     else if (BB[WB[1]][BB[WB[31]]] + BB[WB[1]][BB[-WB[47]]] + BB[WB[1]][BB[WB[33]]] > WB[1]) BB[WB[33]]--;
-               else {
-                 for (BB[WB[61]].push([BB[WB[1]][BB[WB[31]]], BB[WB[1]][BB[-WB[47]]], BB[WB[1]][BB[WB[33]]]]); BB[-WB[47]] < BB[WB[33]] && BB[WB[1]][BB[-WB[47]]] === BB[WB[1]][BB[-WB[47]] + WB[2]];) BB[-WB[47]]++;
-                 for (; BB[-WB[47]] < BB[WB[33]] && BB[WB[1]][BB[WB[33]]] === BB[WB[1]][BB[WB[33]] - WB[2]];) BB[WB[33]]--;
-                 sB(BB[-WB[47]]++, BB[WB[33]]--)
- ... (3 more removed lines; see GitHub link above)
+                       ut(tt[bt[56]].push(tt[bt[33]] & bt[10]), tt[bt[33]] >>= bt[3], tt[bt[8]] -= bt[3])
+                     } while (tt[bt[8]] > bt[6]);
+                     tt[bt[55]] = -bt[0]
+                   } return tt[bt[55]] > -bt[0] && tt[bt[56]].push((tt[bt[33]] | tt[bt[55]] << tt[bt[8]]) & bt[10]), Jt(tt[bt[56]])
+             }(qt[tt[bt[2]]]) : Ot[tt[bt[2]]]
+           }(125) in Ct && function(...tt) {
+             function et() {}
+             tt[bt[11]] = bt[2], ut(tt[bt[59]] = function(tt, Vt) {
+               var Ot, qt, Dt, mt, dt, jt = bt[2];
+               for (ut(Ot = bt[2], qt = new et(bt[2]), Dt = qt, mt = tt, dt = Vt); mt !== bt[57] || dt !== bt[57];) ut(Ot = (mt ? mt.val : bt[2]) + (dt ? dt.val : bt[2]) + jt, jt = Math.floor(Ot / bt[58]), Dt.next = new et(Ot % bt[58]), Dt = Dt.next, mt = mt ? mt.next : bt[57], dt … [truncated]
+               return jt && (Dt.next = new et(jt)), qt.next
+             }, console.log(tt[bt[59]]))
```

#### 2348. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21399` → after: `L21283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21283) · [Before (L21399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21399)

```diff
-   38836: (BB, IB, ZB) => {
+   39006: (tt, et, Vt) => {
```

#### 2349. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21405` → after: `L21289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21289) · [Before (L21405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21405)

```diff
-     var TB = ZB(364),
+     var Ot = Vt(404),
```

#### 2350. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21407-L21426` → after: `L21291-L21310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21291-L21310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21291-L21310) · [Before (L21407-L21426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21407-L21426)

```diff
-       oB = ZB(38844),
-       GB = ZB(38159),
-       vB = ZB(24),
-       kB = ZB(2912),
-       cB = ZB(37108),
-       nB = ZB(37685),
-       hB = ZB(37814),
-       zB = ZB(37812),
-       FB = ZB(360),
-       NB = ZB(1956),
-       gB = ZB(650),
-       qB = ZB(37990),
-       yB = ZB(37462),
-       UB = ZB(37243),
-       WB = ZB(37253),
-       dB = ZB(38851),
- ... (4 more removed lines; see GitHub link above)
+       Dt = Vt(39010),
+       mt = Vt(38347),
+       dt = Vt(31),
+       jt = Vt(2848),
+       Ht = Vt(37323),
+       Xt = Vt(37891),
+       Qt = Vt(38005),
+       lt = Vt(37997),
+       Et = Vt(391),
+       ft = Vt(1993),
+       wt = Vt(697),
+       yt = Vt(38184),
+       Nt = Vt(37658),
+       Mt = Vt(37454),
+       bt = Vt(37467),
+       Jt = Vt(39019),
+ ... (4 more added lines; see GitHub link above)
```

#### 2351. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21467` → after: `L21351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21351) · [Before (L21467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21467)

```diff
-           cape: gB.h,
+           cape: wt.e,
```

#### 2352. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21475` → after: `L21359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21359) · [Before (L21475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21475)

```diff
-         cW: (IB, ZB) => {
+         qJ: (et, Vt) => {
```

#### 2353. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21484-L21485` → after: `L21368-L21369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21368-L21369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21368-L21369) · [Before (L21484-L21485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21484-L21485)

```diff
-             if (BB.cape = IB, IB === gB.h) return BB.mesh && mB(BB), !1;
-             const ZB = (0, kB.h)();
+             if (tt.cape = et, et === wt.e) return tt.mesh && Gt(tt), !1;
+             const Vt = (0, jt.e)();
```

#### 2354. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21487` → after: `L21371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21371) · [Before (L21487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21487)

```diff
-               (0, sB.f)(BB.mesh.material, {
+               (0, Kt.h)(tt.mesh.material, {
```

#### 2355. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21491` → after: `L21375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21375) · [Before (L21491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21491)

```diff
-             YB || (YB = GB.d.Player.capeMesh, iB = YB.qm().boundingBox, pB = 1 + iB.maximum.y - iB.minimum.y);
+             Wt || (Wt = mt.b.Player.capeMesh, St = Wt.fL().boundingBox, ct = 1 + St.maximum.y - St.minimum.y);
```

#### 2356. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21494` → after: `L21378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21378) · [Before (L21494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21494)

```diff
-               BB.mesh = YB.clone(`Cape|${BB.bR}`, null);
+               tt.mesh = Wt.clone(`Cape|${tt.uZ}`, null);
```

#### 2357. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21496-L21499` → after: `L21380-L21383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21380-L21383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21380-L21383) · [Before (L21496-L21499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21496-L21499)

```diff
-               BB.defaultPosition = new wB.rN(0, (JB - iB.maximum.y + iB.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), BB.mesh.position = BB.defaultPosition.clone();
-               const oB = IB.Tm[IB.Jm][BB.bR];
-               BB.mesh.isVisible = !(null !== oB && void 0 !== oB && oB._invisibleEffect) && !(null !== (ZB = IB.zW.hZB(BB.bR)) && void 0 !== ZB && ZB.drawnHidden);
-               const GB = IB.Ig.kR,
+               tt.defaultPosition = new ht.uf(0, (qt - St.maximum.y + St.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), tt.mesh.position = tt.defaultPosition.clone();
+               const Dt = et.dL[et.lL][tt.uZ];
+               tt.mesh.isVisible = !(null !== Dt && void 0 !== Dt && Dt._invisibleEffect) && !(null !== (Vt = et.mJ.aVt(tt.uZ)) && void 0 !== Vt && Vt.drawnHidden);
+               const mt = et.Bf.xI,
```

#### 2358. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21501-L21502` → after: `L21385-L21386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21385-L21386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21385-L21386) · [Before (L21501-L21502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21501-L21502)

```diff
-                   gR: vB
-                 } = IB.zW.gZB(BB.bR),
+                   RP: dt
+                 } = et.mJ.CVt(tt.uZ),
```

#### 2359. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21505` → after: `L21389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21389) · [Before (L21505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21505)

```diff
-                 gR: vB,
+                 RP: dt,
```

#### 2360. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21517` → after: `L21401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21401) · [Before (L21517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21517)

```diff
-                 lg: IB.Ig.JR(),
+                 Fw: et.Bf.vI(),
```

#### 2361. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21526` → after: `L21410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21410) · [Before (L21526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21526)

```diff
-                   (0, CB.e)(BB), (0, QB.c)(BB, IB.Ig), (0, UB.r)(BB, dB.b, cB, pB, iB.maximum.y), (0, UB.K)(BB), BB.castsSunShadow = !1
+                   (0, Ct.d)(tt), (0, ut.d)(tt, et.Bf), (0, Mt.p)(tt, Jt.b, Ht, ct, St.maximum.y), (0, Mt.G)(tt), tt.castsSunShadow = !1
```

#### 2362. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21529` → after: `L21413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21413) · [Before (L21529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21529)

```diff
-               }).mirror, BB.mesh.Im("aOpacity", 1), BB.mesh.Zm.aOpacity = null !== (TB = null === oB || void 0 === oB ? void 0 : oB.opacity) && void 0 !== TB ? TB : 1, (0, qB.g)(BB.mesh), BB.bones = cB, BB.paused = !1, (0, hB.getSmoothedPosition)(IB, BB.bR, BB.lastPos), IB.Ig.xg( … [truncated]
+               }).mirror, tt.mesh.tL("aOpacity", 1), tt.mesh.qL.aOpacity = null !== (Ot = null === Dt || void 0 === Dt ? void 0 : Dt.opacity) && void 0 !== Ot ? Ot : 1, (0, yt.f)(tt.mesh), tt.bones = Ht, tt.paused = !1, (0, Qt.getSmoothedPosition)(et, tt.uZ, tt.lastPos), et.Bf.ow( … [truncated]
```

#### 2363. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21531` → after: `L21415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21415) · [Before (L21531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21531)

```diff
-           }(ZB, BB), ZB.invisibleSub = vB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|_invisibleEffect`, (TB => {
+           }(Vt, tt), Vt.invisibleSub = dt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|_invisibleEffect`, (Ot => {
```

#### 2364. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21533` → after: `L21417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21417) · [Before (L21533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21533)

```diff
-             ZB.mesh && !ZB.mesh.mC() && (ZB.mesh.isVisible = !TB && !(null !== (JB = BB.zW.hZB(IB)) && void 0 !== JB && JB.drawnHidden))
+             Vt.mesh && !Vt.mesh.bC() && (Vt.mesh.isVisible = !Ot && !(null !== (qt = tt.mJ.aVt(et)) && void 0 !== qt && qt.drawnHidden))
```

#### 2365. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21536-L21537` → after: `L21420-L21421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21420-L21421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21420-L21421) · [Before (L21536-L21537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21536-L21537)

```diff
-         nH: (BB, IB) => {
-           vB.l.unsubscribe(IB.playerRankSub), IB.playerRankSub = null, mB(IB), vB.l.unsubscribe(IB.invisibleSub)
+         nS: (tt, et) => {
+           dt.j.unsubscribe(et.playerRankSub), et.playerRankSub = null, Gt(et), dt.j.unsubscribe(et.invisibleSub)
```

#### 2366. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21539-L21540` → after: `L21423-L21424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21423-L21424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21423-L21424) · [Before (L21539-L21540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21539-L21540)

```diff
-         FW: (IB, ZB) => {
-           const TB = Math.min((null !== IB && void 0 !== IB ? IB : 1 / 0) / 1e3, RB.maxDeltaTime),
+         dJ: (et, Vt) => {
+           const Ot = Math.min((null !== et && void 0 !== et ? et : 1 / 0) / 1e3, Ft.maxDeltaTime),
```

#### 2367. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21542-L21543` → after: `L21426-L21427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21426-L21427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21426-L21427) · [Before (L21542-L21543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21542-L21543)

```diff
-             oB = BB.MBB / 1e3,
-             GB = NB.c.lerpWeight(RB.lerpSpeed * TB);
+             Dt = tt.Jtt / 1e3,
+             mt = ft.b.lerpWeight(Ft.lerpSpeed * Ot);
```

#### 2368. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21545-L21547` → after: `L21429-L21431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21429-L21431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21429-L21431) · [Before (L21545-L21547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21545-L21547)

```diff
-             if (vB.mesh && ((0, cB.pausesOutOfView)(BB, vB.bR, vB.attachedTo.gR) ? vB.paused = !0 : (vB.paused && (vB.paused = !1, (0, hB.getSmoothedPosition)(BB, vB.bR, vB.lastPos)), LB(vB, TB, JB, oB, GB, BB)), BB.Ig.Xg)) {
-               const IB = BB.zW.oZB(vB.bR)._lightLevels;
-               (0, yB.n)(vB.mesh, IB)
+             if (dt.mesh && ((0, Ht.pausesOutOfView)(tt, dt.uZ, dt.attachedTo.RP) ? dt.paused = !0 : (dt.paused && (dt.paused = !1, (0, Qt.getSmoothedPosition)(tt, dt.uZ, dt.lastPos)), ot(dt, Ot, qt, Dt, mt, tt)), tt.Bf.Rw)) {
+               const et = tt.mJ.EVt(dt.uZ)._lightLevels;
+               (0, Nt.v)(dt.mesh, et)
```

#### 2369. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21555` → after: `L21439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21439) · [Before (L21555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21555)

```diff
-       BB.mesh && BB.attachedTo && !BB.mesh.mC() && (0, kB.h)().Ig.kR.detachTransformNodeIfFound(BB.mesh, BB.attachedTo.gR, BB.attachedTo.nodeIndex), null === (IB = BB.mesh) || void 0 === IB || null === (ZB = IB.material) || void 0 === ZB || ZB.dispose(), null === (TB = BB.mesh) | … [truncated]
+       tt.mesh && tt.attachedTo && !tt.mesh.bC() && (0, jt.e)().Bf.xI.detachTransformNodeIfFound(tt.mesh, tt.attachedTo.RP, tt.attachedTo.nodeIndex), null === (et = tt.mesh) || void 0 === et || null === (Vt = et.material) || void 0 === Vt || Vt.dispose(), null === (Ot = tt.mesh) | … [truncated]
```

#### 2370. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21562` → after: `L21446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21446) · [Before (L21562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21562)

```diff
-           url: ZB(38857)(`./cape_${BB}.png`),
+           url: Vt(39024)(`./cape_${tt}.png`),
```

#### 2371. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21565` → after: `L21449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21449) · [Before (L21565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21565)

```diff
-           samplingMode: WB.j.nearestNearestMipLinear
+           samplingMode: bt.k.nearestNearestMipLinear
```

#### 2372. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21567` → after: `L21451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21451) · [Before (L21567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21567)

```diff
-         IB = (0, WB.v)((0, kB.h)().Ig.JR(), TB), (0, WB.S)(IB), aB.set(BB, IB)
+         et = (0, bt.A)((0, jt.e)().Bf.vI(), Ot), (0, bt.Y)(et), Rt.set(tt, et)
```

#### 2373. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21576` → after: `L21460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21460) · [Before (L21576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21576)

```diff
-       const cB = BB.bR;
+       const Ht = tt.uZ;
```

#### 2374. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21578` → after: `L21462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21462) · [Before (L21578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21578)

```diff
-       const gB = GB.zW.getState(cB, "updateWalkingState"),
+       const wt = mt.mJ.getState(Ht, "updateWalkingState"),
```

#### 2375. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21581` → after: `L21465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21465) · [Before (L21581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21581)

```diff
-       const UB = GB.zW.uIB(cB);
+       const Mt = mt.mJ.xet(Ht);
```

#### 2376. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21586` → after: `L21470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21470) · [Before (L21586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21586)

```diff
-           const BB = kB[0] * NB.c.friction(RB.friction.exp * IB),
+           const tt = jt[0] * ft.b.friction(Ft.friction.exp * et),
```

#### 2377. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21588` → after: `L21472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21472) · [Before (L21588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21588)

```diff
-           Math.abs(BB) > Math.abs(ZB) ? kB[0] = BB : kB[0] = ZB, kB[0] += RB.angle.def
+           Math.abs(tt) > Math.abs(Vt) ? jt[0] = tt : jt[0] = Vt, jt[0] += Ft.angle.def
```

#### 2378. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21592-L21594` → after: `L21476-L21478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21476-L21478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21476-L21478) · [Before (L21592-L21594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21592-L21594)

```diff
-           const oB = GB.zW.getState(cB, "meshRotation"),
-             vB = oB.iW ? (0, nB.getRemoteTargetHeading)(GB, oB) : oB.renderRotation[1],
-             zB = (0, FB.Kb)(vB);
+           const Dt = mt.mJ.getState(Ht, "meshRotation"),
+             dt = Dt.NJ ? (0, Xt.getRemoteTargetHeading)(mt, Dt) : Dt.renderRotation[1],
+             lt = (0, Et.Rb)(dt);
```

#### 2379. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21597` → after: `L21481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21481) · [Before (L21597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21597)

```diff
-             qB = GB.zW.vx(cB);
+             yt = mt.mJ.YG(Ht);
```

#### 2380. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21599` → after: `L21483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21483) · [Before (L21599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21599)

```diff
-           if (qB ? yB = qB.zq : (JB().sub(HB, gB, BB.lastPos), JB().scale(HB, HB, ZB > 0 ? 1 / ZB : 0), yB = HB), TB = JB().dot(yB, zB) * RB.vel.self * IB, kB[0] > RB.angle.softMax && kB.at(-3) > RB.angle.softMax) {
+           if (yt ? Nt = yt.Dy : (qt().sub(It, wt, tt.lastPos), qt().scale(It, It, Vt > 0 ? 1 / Vt : 0), Nt = It), Ot = qt().dot(Nt, lt) * Ft.vel.self * et, jt[0] > Ft.angle.softMax && jt.at(-3) > Ft.angle.softMax) {
```

#### 2381. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21604` → after: `L21488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21488) · [Before (L21604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21604)

```diff
-           TB = (0, NB.f)(TB, -UB, UB), kB[0] += TB
+           Ot = (0, ft.e)(Ot, -Mt, Mt), jt[0] += Ot
```

#### 2382. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21606-L21608` → after: `L21490-L21492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21490-L21492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21490-L21492) · [Before (L21606-L21608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21606-L21608)

```diff
-         const oB = 2 * (0, NB.f)(kB[0] - RB.angle.def, 0, .5),
-           vB = (0, NB.f)(TB, 0, 1) + oB;
-         yB = (0, NB.C)(jB / BB.bones.skeleLen, 0, vB)
+         const Dt = 2 * (0, ft.e)(jt[0] - Ft.angle.def, 0, .5),
+           dt = (0, ft.e)(Ot, 0, 1) + Dt;
+         Nt = (0, ft.A)(Zt / tt.bones.skeleLen, 0, dt)
```

#### 2383. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21610-L21611` → after: `L21494-L21495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21494-L21495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21494-L21495) · [Before (L21610-L21611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21610-L21611)

```diff
-       kB[0] += OB.noise2D(BB.windX, TB) * RB.vel.wind * IB, kB[0] = (0, NB.f)(kB[0], RB.angle.min, RB.angle.max);
-       for (let JB = kB.length - 3; JB > 0; JB -= 3) kB[JB] = (0, NB.C)(kB[JB], kB[JB - 3] - yB, oB);
+       jt[0] += vt.noise2D(tt.windX, Ot) * Ft.vel.wind * et, jt[0] = (0, ft.e)(jt[0], Ft.angle.min, Ft.angle.max);
+       for (let qt = jt.length - 3; qt > 0; qt -= 3) jt[qt] = (0, ft.A)(jt[qt], jt[qt - 3] - Nt, Dt);
```

#### 2384. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21619` → after: `L21503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21503) · [Before (L21619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21619)

```diff
-       const TB = BB.zW.getState(IB, "cape"),
+       const Ot = tt.mJ.getState(et, "cape"),
```

#### 2385. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21625` → after: `L21509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21509) · [Before (L21625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21625)

```diff
-       } = BB.zW.uIB(IB), GB = "gliding" === oB || "sleeping" === oB, vB = GB ? 0 : RB.angle.def, kB = GB ? 0 : jB / TB.bones.skeleLen, cB = GB ? 0 : Math.sin(Math.abs(BB.zW.getState(IB, "updateWalkingState").walkingAngle)) * PB;
+       } = tt.mJ.xet(et), mt = "gliding" === Dt || "sleeping" === Dt, dt = mt ? 0 : Ft.angle.def, jt = mt ? 0 : Zt / Ot.bones.skeleLen, Ht = mt ? 0 : Math.sin(Math.abs(tt.mJ.getState(et, "updateWalkingState").walkingAngle)) * Lt;
```

#### 2386. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21636` → after: `L21520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21520) · [Before (L21636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21636)

```diff
-   38896: (BB, IB, ZB) => {
+   39060: (tt, et, Vt) => {
```

#### 2387. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21640-L21641` → after: `L21524-L21525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21524-L21525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21524-L21525) · [Before (L21640-L21641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21640-L21641)

```diff
-     var TB = ZB(37837),
-       JB = ZB(3854);
+     var Ot = Vt(38035),
+       qt = Vt(3751);
```

#### 2388. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21650-L21651` → after: `L21534-L21535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21534-L21535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21534-L21535) · [Before (L21650-L21651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21650-L21651)

```diff
-         cW: function(BB, IB) {},
-         nH: null,
+         qJ: function(tt, et) {},
+         nS: null,
```

#### 2389. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21654-L21656` → after: `L21538-L21540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21538-L21540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21538-L21540) · [Before (L21654-L21656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21654-L21656)

```diff
-             const IB = oB.bR,
-               ZB = BB.zW.vx(IB);
-             ZB.preventFallOffEdge && !oB._preventFallOffLastTick && (0, JB.hY)();
+             const et = Dt.uZ,
+               Vt = tt.mJ.YG(et);
+             Vt.preventFallOffEdge && !Dt._preventFallOffLastTick && (0, qt.Qv)();
```

#### 2390. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21661` → after: `L21545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21545) · [Before (L21661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21661)

```diff
-             } = BB.zW.uIB(IB), cB = (0, TB.f)(GB, vB, kB, oB._preventFallOffLastTick);
+             } = tt.mJ.xet(et), Ht = (0, Ot.j)(mt, dt, jt, Dt._preventFallOffLastTick);
```

#### 2391. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21668` → after: `L21552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21552) · [Before (L21668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21668)

```diff
-   38888: (BB, IB, ZB) => {
+   39049: (tt, et, Vt) => {
```

#### 2392. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21673` → after: `L21557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21557) · [Before (L21673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21673)

```diff
-     var TB = ZB(38892);
+     var Ot = Vt(39052);
```

#### 2393. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21683-L21684` → after: `L21567-L21568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21567-L21568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21567-L21568) · [Before (L21683-L21684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21683-L21684)

```diff
-         cW: function(BB, IB) {},
-         nH: function(BB, IB) {},
+         qJ: function(tt, et) {},
+         nS: function(tt, et) {},
```

#### 2394. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21688` → after: `L21572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21572) · [Before (L21688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21688)

```diff
-             TB.length && BB.zW.Qr(TB[0].bR, "doOnFirstTick")
+             Ot.length && tt.mJ.ZZ(Ot[0].uZ, "doOnFirstTick")
```

#### 2395. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21698` → after: `L21582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21582) · [Before (L21698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21698)

```diff
-   38905: (BB, IB, ZB) => {
+   39063: (tt, et, Vt) => {
```

#### 2396. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21702-L21713` → after: `L21586-L21597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21586-L21597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21586-L21597) · [Before (L21702-L21713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21702-L21713)

```diff
-     var TB = ZB(24),
-       JB = ZB(8935),
-       oB = ZB(36829),
-       GB = ZB(342),
-       vB = ZB(37336),
-       kB = ZB(38914),
-       cB = ZB(38721),
-       nB = ZB(38734),
-       hB = ZB(38919),
-       zB = ZB(37270),
-       FB = ZB(20),
-       NB = ZB(38926);
+     var Ot = Vt(31),
+       qt = Vt(9050),
+       Dt = Vt(37032),
+       mt = Vt(377),
+       dt = Vt(37545),
+       jt = Vt(39065),
+       Ht = Vt(38906),
+       Xt = Vt(38915),
+       Qt = Vt(39068),
+       lt = Vt(37480),
+       Et = Vt(26),
+       ft = Vt(39070);
```

#### 2397. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21722` → after: `L21606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21606) · [Before (L21722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21722)

```diff
-             for (const BB of oB.items)(0, kB.p)(BB.content, BB.sizeCache.x, oB.y, oB.height, TB, BB.sizeCache.width, JB);
+             for (const tt of Dt.items)(0, jt.q)(tt.content, tt.sizeCache.x, Dt.y, Dt.height, Ot, tt.sizeCache.width, qt);
```

#### 2398. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21726-L21727` → after: `L21610-L21611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21610-L21611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21610-L21611) · [Before (L21726-L21727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21726-L21727)

```diff
-             BB.items.length > 0 && (0, kB.q)(BB.items.map((BB => BB.content)), 0, BB.y, BB.height, TB, JB)
-           }(0, cB.g)(TB)
+             tt.items.length > 0 && (0, jt.t)(tt.items.map((tt => tt.content)), 0, tt.y, tt.height, Ot, qt)
+           }(0, Ht.k)(Ot)
```

#### 2399. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21731` → after: `L21615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21615) · [Before (L21731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21731)

```diff
-         BB.zW.RIB(IB.planeEId) || function(IB) {
+         tt.mJ.oet(et.planeEId) || function(et) {
```

#### 2400. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21736` → after: `L21620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21620) · [Before (L21736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21736)

```diff
-           } = (0, kB.o)(BB, IB.bR, `${IB.bR}MultilineText`);
+           } = (0, jt.o)(tt, et.uZ, `${et.uZ}MultilineText`);
```

#### 2401. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21741` → after: `L21625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21625) · [Before (L21741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21741)

```diff
-             ZB = kB.g.VERTICAL_PADDING;
+             Vt = jt.h.VERTICAL_PADDING;
```

#### 2402. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21744-L21745` → after: `L21628-L21629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21628-L21629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21628-L21629) · [Before (L21744-L21745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21744-L21745)

```diff
-               oB = JB.width + 2 * kB.g.HORIZONTAL_PADDING;
-             IB = Math.max(IB, oB), ZB += JB.height + kB.g.LINE_SPACING
+               Dt = qt.width + 2 * jt.h.HORIZONTAL_PADDING;
+             et = Math.max(et, Dt), Vt += qt.height + jt.h.LINE_SPACING
```

#### 2403. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21752` → after: `L21636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21636) · [Before (L21752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21752)

```diff
-         (0, vB.D)(IB.texture, TB.width, TB.height), IB.plane.ek.set(TB.width * kB.g.TEXT_PLANE_RATIO, TB.height * kB.g.TEXT_PLANE_RATIO, 1), WB(IB, TB), IB.sizeCache = TB
+         (0, dt.H)(et.texture, Ot.width, Ot.height), et.plane.cj.set(Ot.width * jt.h.TEXT_PLANE_RATIO, Ot.height * jt.h.TEXT_PLANE_RATIO, 1), bt(et, Ot), et.sizeCache = Ot
```

#### 2404. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21779-L21780` → after: `L21663-L21664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21663-L21664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21663-L21664) · [Before (L21779-L21780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21779-L21780)

```diff
-               const IB = (0, kB.x)(BB.content).substring(0, ZB - JB),
-                 oB = (0, kB.z)(BB.content) ? {
+               const et = (0, jt.z)(tt.content).substring(0, Vt - qt),
+                 Dt = (0, jt.A)(tt.content) ? {
```

#### 2405. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21799` → after: `L21683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21683) · [Before (L21799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21799)

```diff
-         if ((0, nB.c)(BB)) return void(IB.newMessageWhileLost ||= !JB);
+         if ((0, Xt.b)(tt)) return void(et.newMessageWhileLost ||= !qt);
```

#### 2406. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21807-L21808` → after: `L21691-L21692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21691-L21692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21691-L21692) · [Before (L21807-L21808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21807-L21808)

```diff
-           const IB = (0, kB.u)(BB.content, kB.g.DEFAULT_FONT_SIZE),
-             ZB = (0, kB.A)(),
+           const et = (0, jt.x)(tt.content, jt.h.DEFAULT_FONT_SIZE),
+             Vt = (0, jt.B)(),
```

#### 2407. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21816-L21817` → after: `L21700-L21701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21700-L21701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21700-L21701) · [Before (L21816-L21817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21816-L21817)

```diff
-             if ((0, kB.z)(oB)) {
-               const BB = (0, kB.x)(oB);
+             if ((0, jt.A)(Dt)) {
+               const tt = (0, jt.z)(Dt);
```

#### 2408. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21830-L21831` → after: `L21714-L21715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21714-L21715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21714-L21715) · [Before (L21830-L21831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21830-L21831)

```diff
-                 ZB = TB[TB.length - 1].items.reduce(((BB, IB) => BB + ((0, kB.z)(IB.content) ? (0, NB.c)((0, kB.x)(IB.content)) : IB.numCharacters)), 0),
-                 JB = (0, NB.f)(BB, ZB);
+                 Vt = Ot[Ot.length - 1].items.reduce(((tt, et) => tt + ((0, jt.A)(et.content) ? (0, ft.e)((0, jt.z)(et.content)) : et.numCharacters)), 0),
+                 qt = (0, ft.i)(tt, Vt);
```

#### 2409. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21850` → after: `L21734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21734) · [Before (L21850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21850)

```diff
-           let JB = kB.g.VERTICAL_PADDING / 2;
+           let qt = jt.h.VERTICAL_PADDING / 2;
```

#### 2410. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21859` → after: `L21743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21743) · [Before (L21859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21859)

```diff
-               oB.width = BB, oB.height = IB, oB.y = JB, JB += IB + kB.g.LINE_SPACING
+               Dt.width = tt, Dt.height = et, Dt.y = qt, qt += et + jt.h.LINE_SPACING
```

#### 2411. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21864` → after: `L21748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21748) · [Before (L21864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21864)

```diff
-             animateInDelay: kB.g.ANIMATE_IN_DELAY
+             animateInDelay: jt.h.ANIMATE_IN_DELAY
```

#### 2412. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21869` → after: `L21753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21753) · [Before (L21869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21869)

```diff
-             for (const BB of ZB.items)(0, kB.z)(BB.content) ? IB += (0, kB.x)(BB.content).length : IB += 1;
+             for (const tt of Vt.items)(0, jt.A)(tt.content) ? et += (0, jt.z)(tt.content).length : et += 1;
```

#### 2413. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21872-L21873` → after: `L21756-L21757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21756-L21757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21756-L21757) · [Before (L21872-L21873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21872-L21873)

```diff
-         const cB = (0, vB.g)(IB.texture);
-         cB.clearRect(0, 0, IB.sizeCache.width, IB.sizeCache.height), cB.fillStyle = null !== (TB = IB.processedTextBox.backgroundColor) && void 0 !== TB ? TB : "#22283b", cB.fillRect(0, 0, IB.sizeCache.width, IB.sizeCache.height), IB.drawnCharCount > 0 ? ZB(IB, yB(IB.processedTex … [truncated]
+         const Ht = (0, dt.h)(et.texture);
+         Ht.clearRect(0, 0, et.sizeCache.width, et.sizeCache.height), Ht.fillStyle = null !== (Ot = et.processedTextBox.backgroundColor) && void 0 !== Ot ? Ot : "#22283b", Ht.fillRect(0, 0, et.sizeCache.width, et.sizeCache.height), et.drawnCharCount > 0 ? Vt(et, Nt(et.processedTex … [truncated]
```

#### 2414. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21878-L21881` → after: `L21762-L21765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21762-L21765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21762-L21765) · [Before (L21878-L21881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21878-L21881)

```diff
-         const zB = BB.zW.YZB(IB.planeEId);
-         let FB = null !== (TB = IB.yOffset) && void 0 !== TB ? TB : 2.1;
-         const NB = BB.zW.aU(IB.bR),
-           gB = BB.zW.aU(BB.Jm);
+         const lt = tt.mJ.ZVt(et.planeEId);
+         let Et = null !== (Ot = et.yOffset) && void 0 !== Ot ? Ot : 2.1;
+         const ft = tt.mJ.YM(et.uZ),
+           wt = tt.mJ.YM(tt.lL);
```

#### 2415. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21885` → after: `L21769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21769) · [Before (L21885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21885)

```diff
-           const IB = BB.camera.XV();
+           const et = tt.camera.zp();
```

#### 2416. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21891` → after: `L21775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21775) · [Before (L21891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21891)

```diff
-           CB = null !== (JB = IB.xOffset) && void 0 !== JB ? JB : .6;
+           Ct = null !== (qt = et.xOffset) && void 0 !== qt ? qt : .6;
```

#### 2417. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21895` → after: `L21779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21779) · [Before (L21895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21895)

```diff
-           const BB = CB + ZB.width * kB.g.TEXT_PLANE_RATIO / 2;
+           const tt = Ct + Vt.width * jt.h.TEXT_PLANE_RATIO / 2;
```

#### 2418. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21898-L21900` → after: `L21782-L21784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21782-L21784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21782-L21784) · [Before (L21898-L21900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21898-L21900)

```diff
-         const wB = BB.zW.uIB(IB.bR);
-         FB += null !== (oB = null === wB || void 0 === wB || null === (GB = wB.meshOffset) || void 0 === GB ? void 0 : GB[1]) && void 0 !== oB ? oB : 0, QB += null !== (vB = null === wB || void 0 === wB || null === (cB = wB.meshOffset) || void 0 === cB ? void 0 : cB[0]) && void 0 … [truncated]
-         FB -= ZB.height * kB.g.TEXT_PLANE_RATIO / 2, BB.zW.RIB(IB.planeEId) && (zB.offset[1] = FB, zB.offset[0] = QB, zB.offset[2] = sB)
+         const ht = tt.mJ.xet(et.uZ);
+         Et += null !== (Dt = null === ht || void 0 === ht || null === (mt = ht.meshOffset) || void 0 === mt ? void 0 : mt[1]) && void 0 !== Dt ? Dt : 0, ut += null !== (dt = null === ht || void 0 === ht || null === (Ht = ht.meshOffset) || void 0 === Ht ? void 0 : Ht[0]) && void 0 … [truncated]
+         Et -= Vt.height * jt.h.TEXT_PLANE_RATIO / 2, tt.mJ.oet(et.planeEId) && (lt.offset[1] = Et, lt.offset[0] = ut, lt.offset[2] = Kt)
```

#### 2419. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21904` → after: `L21788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21788) · [Before (L21904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21904)

```diff
-         return BB.zW.RIB(IB.planeEId) ? (IB.missingPlaneLogged = !1, IB.plane) : (IB.missingPlaneLogged || (0, nB.c)(BB) || (IB.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
+         return tt.mJ.oet(et.planeEId) ? (et.missingPlaneLogged = !1, et.plane) : (et.missingPlaneLogged || (0, Xt.b)(tt) || (et.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
```

#### 2420. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21908` → after: `L21792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21792) · [Before (L21908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21908)

```diff
-         const ZB = BB.zW.getState(IB.bR, "hidingMeshManager");
+         const Vt = tt.mJ.getState(et.uZ, "hidingMeshManager");
```

#### 2421. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21911-L21912` → after: `L21795-L21796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21795-L21796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21795-L21796) · [Before (L21911-L21912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21911-L21912)

```diff
-       return (0, nB.d)(BB.Ig.JR(), (() => {
-         for (const ZB of BB.zW.fR(IB)) {
+       return (0, Xt.c)(tt.Bf.vI(), (() => {
+         for (const Vt of tt.mJ.bZ(et)) {
```

#### 2422. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21942-L21943` → after: `L21826-L21827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21826-L21827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21826-L21827) · [Before (L21942-L21943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21942-L21943)

```diff
-         cW: function(IB, ZB) {
-           ZB._visibilityCombinator = new oB.d((IB => {
+         qJ: function(et, Vt) {
+           Vt._visibilityCombinator = new Dt.b((et => {
```

#### 2423. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21945` → after: `L21829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21829) · [Before (L21945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21945)

```diff
-           })), ZB.hideNametagSub = TB.l.subscribe("appManagerUpdated|areNametagsHidden", (BB => {
+           })), Vt.hideNametagSub = Ot.j.subscribe("appManagerUpdated|areNametagsHidden", (tt => {
```

#### 2424. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21947` → after: `L21831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21831) · [Before (L21947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21947)

```diff
-           })), ZB._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !FB.d.get("areNametagsHidden")), CB(ZB), ZB.textBoxSub = TB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|multilineTextBox`, (BB => {
+           })), Vt._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !Et.b.get("areNametagsHidden")), Ct(Vt), Vt.textBoxSub = Ot.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|multilineTextBox`, (tt => {
```

#### 2425. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21950` → after: `L21834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21834) · [Before (L21950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21950)

```diff
-           ZB.unsubscribeKeyPromptChanges = (0, JB.r)((() => {
+           Vt.unsubscribeKeyPromptChanges = (0, qt.n)((() => {
```

#### 2426. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21952-L21953` → after: `L21836-L21837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21836-L21837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21836-L21837) · [Before (L21952-L21953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21952-L21953)

```diff
-             null !== (BB = ZB.textBox) && void 0 !== BB && null !== (IB = BB.content) && void 0 !== IB && IB.some(GB.Bb) && UB(ZB, !0)
-           })), BB.Jm in BB.Tm && IB in BB.Tm[BB.Jm] && "multilineTextBox" in BB.Tm[BB.Jm][IB] && (ZB.textBox = BB.Tm[BB.Jm][IB].multilineTextBox), UB(ZB)
+             null !== (tt = Vt.textBox) && void 0 !== tt && null !== (et = tt.content) && void 0 !== et && et.some(mt.ib) && Mt(Vt, !0)
+           })), tt.lL in tt.dL && et in tt.dL[tt.lL] && "multilineTextBox" in tt.dL[tt.lL][et] && (Vt.textBox = tt.dL[tt.lL][et].multilineTextBox), Mt(Vt)
```

#### 2427. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21959` → after: `L21843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21843) · [Before (L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21959)

```diff
-             ZB && ((0, kB.B)(ZB, (0, hB.x)(null === (TB = JB.textBox) || void 0 === TB ? void 0 : TB.visibleThroughWalls, BB.vW.canSeeNametagsThroughWalls)), CB(JB), null !== JB.timeSinceAnimationStart && JB.textBox && (JB.timeSinceAnimationStart += IB, JB.toDrawCharCount = Math. … [truncated]
+             Vt && ((0, jt.C)(Vt, (0, Qt.s)(null === (Ot = qt.textBox) || void 0 === Ot ? void 0 : Ot.visibleThroughWalls, tt.OJ.canSeeNametagsThroughWalls)), Ct(qt), null !== qt.timeSinceAnimationStart && qt.textBox && (qt.timeSinceAnimationStart += et, qt.toDrawCharCount = Math. … [truncated]
```

#### 2428. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21962` → after: `L21846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21846) · [Before (L21962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21962)

```diff
-         FW: function(IB, ZB) {
+         dJ: function(et, Vt) {
```

#### 2429. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21968-L21970` → after: `L21852-L21854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21852-L21854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21852-L21854) · [Before (L21968-L21970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21968-L21970)

```diff
-               const ZB = (0, kB.B)(IB, (0, hB.x)(null === (TB = JB.textBox) || void 0 === TB ? void 0 : TB.visibleThroughWalls, BB.vW.canSeeNametagsThroughWalls)),
-                 oB = (0, hB.z)(BB, JB.bR, JB.planeEId, ZB);
-               (0, hB.m)(BB, JB.planeEId), IB.ek.set(JB.sizeCache.width * kB.g.TEXT_PLANE_RATIO * oB, JB.sizeCache.height * kB.g.TEXT_PLANE_RATIO * oB, 1)
+               const Vt = (0, jt.C)(et, (0, Qt.s)(null === (Ot = qt.textBox) || void 0 === Ot ? void 0 : Ot.visibleThroughWalls, tt.OJ.canSeeNametagsThroughWalls)),
+                 Dt = (0, Qt.v)(tt, qt.uZ, qt.planeEId, Vt);
+               (0, Qt.k)(tt, qt.planeEId), et.cj.set(qt.sizeCache.width * jt.h.TEXT_PLANE_RATIO * Dt, qt.sizeCache.height * jt.h.TEXT_PLANE_RATIO * Dt, 1)
```

#### 2430. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21974` → after: `L21858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21858) · [Before (L21974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21974)

```diff
-         nH: function(IB, ZB) {
+         nS: function(et, Vt) {
```

#### 2431. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21976` → after: `L21860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21860) · [Before (L21976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21976)

```diff
-           BB.zW.deleteEntity(ZB.planeEId), TB.l.unsubscribe(ZB.textBoxSub), TB.l.unsubscribe(ZB.hideNametagSub), null === (JB = ZB.unsubscribeKeyPromptChanges) || void 0 === JB || JB.call(ZB)
+           tt.mJ.deleteEntity(Vt.planeEId), Ot.j.unsubscribe(Vt.textBoxSub), Ot.j.unsubscribe(Vt.hideNametagSub), null === (qt = Vt.unsubscribeKeyPromptChanges) || void 0 === qt || qt.call(Vt)
```

#### 2432. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21981` → after: `L21865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21865) · [Before (L21981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21981)

```diff
-   38929: (BB, IB, ZB) => {
+   39079: (tt, et, Vt) => {
```

#### 2433. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21985` → after: `L21869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21869) · [Before (L21985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21985)

```diff
-     var TB = ZB(364),
+     var Ot = Vt(404),
```

#### 2434. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21987-L22013` → after: `L21871-L21897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21871-L21897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21871-L21897) · [Before (L21987-L22013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L21987-L22013)

```diff
-       oB = ZB(37336),
-       GB = ZB(38423),
-       vB = ZB(37469),
-       kB = ZB(38919),
-       cB = ZB(38433),
-       nB = ZB(24),
-       hB = ZB(8935),
-       zB = ZB(342),
-       FB = ZB(650),
-       NB = ZB(2912),
-       gB = ZB(105),
-       qB = ZB(36794),
-       yB = ZB(38504),
-       UB = ZB(36829),
-       WB = ZB(36706),
-       dB = ZB(38914),
- ... (11 more removed lines; see GitHub link above)
+       Dt = Vt(37545),
+       mt = Vt(38600),
+       dt = Vt(37663),
+       jt = Vt(39068),
+       Ht = Vt(38613),
+       Xt = Vt(31),
+       Qt = Vt(9050),
+       lt = Vt(377),
+       Et = Vt(697),
+       ft = Vt(2848),
+       wt = Vt(106),
+       yt = Vt(37002),
+       Nt = Vt(38690),
+       Mt = Vt(37032),
+       bt = Vt(36932),
+       Jt = Vt(39065),
+ ... (11 more added lines; see GitHub link above)
```

#### 2435. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22030` → after: `L21914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21914) · [Before (L22030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22030)

```diff
-         return Number.isFinite(ZB) && ZB > 0 ? ZB : IB
+         return Number.isFinite(Vt) && Vt > 0 ? Vt : et
```

#### 2436. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22044` → after: `L21928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21928) · [Before (L22044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22044)

```diff
-         const TB = null !== (ZB = BB.applyTo) && void 0 !== ZB ? ZB : "both";
+         const Ot = null !== (Vt = tt.applyTo) && void 0 !== Vt ? Vt : "both";
```

#### 2437. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22050` → after: `L21934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21934) · [Before (L22050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22050)

```diff
-         return "glow" === BB.style ? 3 * IB : Math.ceil(IB / 2) + 1
+         return "glow" === tt.style ? 3 * et : Math.ceil(et / 2) + 1
```

#### 2438. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22064` → after: `L21948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21948) · [Before (L22064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22064)

```diff
-         return Math.round(JB().uG(BB.zW.aU(BB.Jm), BB.zW.aU(IB)))
+         return Math.round(qt().pm(tt.mJ.YM(tt.lL), tt.mJ.YM(et)))
```

#### 2439. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22068` → after: `L21952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21952) · [Before (L22068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22068)

```diff
-         const IB = fB(BB.bR),
+         const et = At(tt.uZ),
```

#### 2440. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22074-L22075` → after: `L21958-L21959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21958-L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21958-L21959) · [Before (L22074-L22075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22074-L22075)

```diff
-         const ZB = (0, NB.d)();
-         return IB !== BB.Jm && "Player" === ZB.getLifeformType(IB) && (0, CB.c)(ZB.getRawEntityName(IB), QB.b.shown)
+         const Vt = (0, ft.c)();
+         return et !== tt.lL && "Player" === Vt.getLifeformType(et) && (0, Ct.e)(Vt.getRawEntityName(et), ut.d.shown)
```

#### 2441. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22081-L22083` → after: `L21965-L21967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21965-L21967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21965-L21967) · [Before (L22081-L22083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22081-L22083)

```diff
-         const ZB = (0, dB.k)(BB.content, (0, dB.A)()),
-           JB = (0, dB.k)(BB.subtitle, (0, dB.A)()),
-           oB = (0, dB.m)(IB),
+         const Vt = (0, Jt.k)(tt.content, (0, Jt.B)()),
+           qt = (0, Jt.k)(tt.subtitle, (0, Jt.B)()),
+           Dt = (0, Jt.l)(et),
```

#### 2442. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22086` → after: `L21970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21970) · [Before (L22086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22086)

```diff
-           kB = Math.max(dB.g.VERTICAL_PADDING, function(BB) {
+           jt = Math.max(Jt.h.VERTICAL_PADDING, function(tt) {
```

#### 2443. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22088` → after: `L21972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21972) · [Before (L22088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22088)

```diff
-             return "never" === (null !== (IB = null === (ZB = BB.healthbar) || void 0 === ZB ? void 0 : ZB.display) && void 0 !== IB ? IB : "onDamage") ? 0 : TB(BB) + eB(BB)
+             return "never" === (null !== (et = null === (Vt = tt.healthbar) || void 0 === Vt ? void 0 : Vt.display) && void 0 !== et ? et : "onDamage") ? 0 : Ot(tt) + rt(tt)
```

#### 2444. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22093` → after: `L21977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21977) · [Before (L22093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22093)

```diff
-           return IB ? LB(IB) + dB.g.HORIZONTAL_PADDING / 2 : 0
+           return et ? ot(et) + Jt.h.HORIZONTAL_PADDING / 2 : 0
```

#### 2445. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22096` → after: `L21980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21980) · [Before (L22096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22096)

```diff
-           const BB = Math.max(ZB.width, JB.width) + dB.g.HORIZONTAL_PADDING;
+           const tt = Math.max(Vt.width, qt.width) + Jt.h.HORIZONTAL_PADDING;
```

#### 2446. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22107` → after: `L21991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L21991) · [Before (L22107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22107)

```diff
-           cB = (0, oB.g)(kB),
+           Ht = (0, Dt.h)(jt),
```

#### 2447. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22118` → after: `L22002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22002) · [Before (L22118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22118)

```diff
-               hB = OB.e.getTexture(vB, YB.m.ICON).url,
+               Qt = vt.e.getTexture(dt, Wt.k.ICON).url,
```

#### 2448. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22121` → after: `L22005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22005) · [Before (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22121)

```diff
-               ZB.nameTagId === nB && (cB.imageSmoothingEnabled = !1, cB.drawImage(zB, TB, oB, 64, 64), (0, sB.g)(kB))
+               Vt.nameTagId === Xt && (Ht.imageSmoothingEnabled = !1, Ht.drawImage(lt, Ot, Dt, 64, 64), (0, Kt.k)(jt))
```

#### 2449. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22132-L22133` → after: `L22016-L22017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22016-L22017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22016-L22017) · [Before (L22132-L22133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22132-L22133)

```diff
-         const qB = (vB.width.full - vB.width.content) / 2 + dB.g.HORIZONTAL_PADDING / 2;
-         if ((0, dB.q)(BB.content, qB, gB, vB.height.content, kB, hB), BB.subtitle) {
+         const yt = (dt.width.full - dt.width.content) / 2 + Jt.h.HORIZONTAL_PADDING / 2;
+         if ((0, Jt.t)(tt.content, yt, wt, dt.height.content, jt, Qt), tt.subtitle) {
```

#### 2450. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22135-L22136` → after: `L22019-L22020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22019-L22020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22019-L22020) · [Before (L22135-L22136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22135-L22136)

```diff
-           const IB = (vB.width.full - vB.width.subtitle) / 2 + dB.g.HORIZONTAL_PADDING / 2;
-           cB.fillStyle = BB.subtitleBackgroundColor, cB.fillRect(FB, gB, zB, vB.height.subtitle), (0, dB.q)(BB.subtitle, IB, gB, vB.height.subtitle, kB, hB)
+           const et = (dt.width.full - dt.width.subtitle) / 2 + Jt.h.HORIZONTAL_PADDING / 2;
+           Ht.fillStyle = tt.subtitleBackgroundColor, Ht.fillRect(Et, wt, lt, dt.height.subtitle), (0, Jt.t)(tt.subtitle, et, wt, dt.height.subtitle, jt, Qt)
```

#### 2451. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22153` → after: `L22037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22037) · [Before (L22153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22153)

```diff
-             const oB = [...JB && JB.length > 0 ? JB : IB].sort(((BB, IB) => BB.healthFraction - IB.healthFraction)),
+             const Dt = [...qt && qt.length > 0 ? qt : et].sort(((tt, et) => tt.healthFraction - et.healthFraction)),
```

#### 2452. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22155` → after: `L22039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22039) · [Before (L22155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22155)

```diff
-             return (null !== GB && void 0 !== GB ? GB : oB[oB.length - 1]).colour
+             return (null !== mt && void 0 !== mt ? mt : Dt[Dt.length - 1]).colour
```

#### 2453. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22211` → after: `L22095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22095) · [Before (L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22211)

```diff
-         }(0, sB.g)(kB)
+         }(0, Kt.k)(jt)
```

#### 2454. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22215` → after: `L22099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22099) · [Before (L22215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22215)

```diff
-         null !== IB.planeEId && (BB.zW.deleteEntity(IB.planeEId), IB.planeEId = null, IB._planeMesh = null, IB._planeTexture = null, IB._lightState = null, IB._scaleX = NaN, IB._scaleY = NaN, IB._offsetY = NaN)
+         null !== et.planeEId && (tt.mJ.deleteEntity(et.planeEId), et.planeEId = null, et._planeMesh = null, et._planeTexture = null, et._lightState = null, et._scaleX = NaN, et._scaleY = NaN, et._offsetY = NaN)
```

#### 2455. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22225-L22226` → after: `L22109-L22110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22109-L22110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22109-L22110) · [Before (L22225-L22226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22225-L22226)

```diff
-           } = (0, dB.o)(BB, IB.bR, `${IB.bR}NameTag`, 1, 1, !0);
-           IB.planeEId = ZB, IB._planeMesh = TB, IB._planeTexture = oB, IB._lightState = GB, BB.zW.YZB(ZB).PZB = (ZB, TB) => {
+           } = (0, Jt.o)(tt, et.uZ, `${et.uZ}NameTag`, 1, 1, !0);
+           et.planeEId = Vt, et._planeMesh = Ot, et._planeTexture = Dt, et._lightState = mt, tt.mJ.ZVt(Vt).oVt = (Vt, Ot) => {
```

#### 2456. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22229` → after: `L22113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22113) · [Before (L22229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22229)

```diff
-               const cB = null !== (ZB = null === (TB = BB.Tm[BB.Jm][IB.bR]) || void 0 === TB ? void 0 : TB.meshScaling) && void 0 !== ZB ? ZB : {},
+               const Ht = null !== (Vt = null === (Ot = tt.dL[tt.lL][et.uZ]) || void 0 === Ot ? void 0 : Ot.meshScaling) && void 0 !== Vt ? Vt : {},
```

#### 2457. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22232-L22235` → after: `L22116-L22119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22116-L22119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22116-L22119) · [Before (L22232-L22235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22232-L22235)

```diff
-                 zB = nI(IB.bR),
-                 FB = (0, NB.d)().sV(IB.bR);
-               let gB = (null !== (oB = IB.nameYOffset) && void 0 !== oB ? oB : MB.c) * FB;
-               const qB = BB.zW.uIB(IB.bR);
+                 lt = Qe(et.uZ),
+                 Et = (0, ft.c)().YB(et.uZ);
+               let wt = (null !== (Dt = et.nameYOffset) && void 0 !== Dt ? Dt : Pt.b) * Et;
+               const yt = tt.mJ.xet(et.uZ);
```

#### 2458. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22237` → after: `L22121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22121) · [Before (L22237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22237)

```diff
-                 const BB = (0, NB.d)().getLifeformType(IB.bR);
+                 const tt = (0, ft.c)().getLifeformType(et.uZ);
```

#### 2459. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22239` → after: `L22123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22123) · [Before (L22239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22239)

```diff
-                 if (null !== BB) gB += (null !== (UB = null === (WB = (0, yB.c)(BB).poseNameRise) || void 0 === WB ? void 0 : WB[qB.pose]) && void 0 !== UB ? UB : 0) * FB
+                 if (null !== tt) wt += (null !== (Mt = null === (bt = (0, Nt.c)(tt).poseNameRise) || void 0 === bt ? void 0 : bt[yt.pose]) && void 0 !== Mt ? Mt : 0) * Et
```

#### 2460. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22241-L22242` → after: `L22125-L22126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22125-L22126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22125-L22126) · [Before (L22241-L22242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22241-L22242)

```diff
-               if (gB += null !== (GB = null === qB || void 0 === qB || null === (vB = qB.meshOffset) || void 0 === vB ? void 0 : vB[1]) && void 0 !== GB ? GB : 0, zB) {
-                 const ZB = .23 * (JB().uG(BB.zW.aU(BB.Jm), BB.zW.aU(IB.bR)) - kB.g) / kB.g;
+               if (wt += null !== (mt = null === yt || void 0 === yt || null === (dt = yt.meshOffset) || void 0 === dt ? void 0 : dt[1]) && void 0 !== mt ? mt : 0, lt) {
+                 const Vt = .23 * (qt().pm(tt.mJ.YM(tt.lL), tt.mJ.YM(et.uZ)) - jt.d) / jt.d;
```

#### 2461. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22251-L22254` → after: `L22135-L22138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22135-L22138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22135-L22138) · [Before (L22251-L22254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22251-L22254)

```diff
-         (0, oB.D)(TB, GB.width, GB.height), SB(IB, dB.g.TEXT_PLANE_RATIO * GB.width, dB.g.TEXT_PLANE_RATIO * GB.height), IB._layoutHeight = dB.g.TEXT_PLANE_RATIO * GB.height;
-         const vB = (0, dB.k)(ZB.content, (0, dB.A)()),
-           cB = (0, dB.k)(ZB.subtitle, (0, dB.A)()),
-           nB = (0, dB.m)(IB.effects);
+         (0, Dt.H)(Ot, mt.width, mt.height), te(et, Jt.h.TEXT_PLANE_RATIO * mt.width, Jt.h.TEXT_PLANE_RATIO * mt.height), et._layoutHeight = Jt.h.TEXT_PLANE_RATIO * mt.height;
+         const dt = (0, Jt.k)(Vt.content, (0, Jt.B)()),
+           Ht = (0, Jt.k)(Vt.subtitle, (0, Jt.B)()),
+           Xt = (0, Jt.l)(et.effects);
```

#### 2462. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22258-L22259` → after: `L22142-L22143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22142-L22143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22142-L22143) · [Before (L22258-L22259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22258-L22259)

```diff
-             content: vB.width + dB.g.HORIZONTAL_PADDING,
-             subtitle: cB.width + dB.g.HORIZONTAL_PADDING,
+             content: dt.width + Jt.h.HORIZONTAL_PADDING,
+             subtitle: Ht.width + Jt.h.HORIZONTAL_PADDING,
```

#### 2463. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22272` → after: `L22156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22156) · [Before (L22272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22272)

```diff
-         const TB = zI(BB.bR, IB),
+         const Ot = Ee(tt.uZ, et),
```

#### 2464. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22276-L22277` → after: `L22160-L22161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22160-L22161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22160-L22161) · [Before (L22276-L22277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22276-L22277)

```diff
-           oB = TB * dB.g.TEXT_PLANE_RATIO * JB.height.full;
-         return SB(BB, TB * dB.g.TEXT_PLANE_RATIO * JB.width.full * ZB, oB * ZB), oB
+           Dt = Ot * Jt.h.TEXT_PLANE_RATIO * qt.height.full;
+         return te(tt, Ot * Jt.h.TEXT_PLANE_RATIO * qt.width.full * Vt, Dt * Vt), Dt
```

#### 2465. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22281` → after: `L22165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22165) · [Before (L22281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22281)

```diff
-         BB._scaleX === IB && BB._scaleY === ZB || (BB._scaleX = IB, BB._scaleY = ZB, BB._planeMesh.ek.set(IB, ZB, 1))
+         tt._scaleX === et && tt._scaleY === Vt || (tt._scaleX = et, tt._scaleY = Vt, tt._planeMesh.cj.set(et, Vt, 1))
```

#### 2466. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22286` → after: `L22170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22170) · [Before (L22286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22286)

```diff
-         return null !== (IB = BB.name) && void 0 !== IB ? IB : (0, NB.d)().getEntityName(BB.bR, !gB.featureFlags.canSeeRealPlayerNames)
+         return null !== (et = tt.name) && void 0 !== et ? et : (0, ft.c)().getEntityName(tt.uZ, !wt.featureFlags.canSeeRealPlayerNames)
```

#### 2467. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22295` → after: `L22179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22179) · [Before (L22295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22295)

```diff
-         if ((0, wB.c)(BB)) return;
+         if ((0, ht.b)(tt)) return;
```

#### 2468. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22300` → after: `L22184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22184) · [Before (L22300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22300)

```diff
-           (IB = IB ? JSON.parse(JSON.stringify(IB)) : {}).content ? IB.content = (0, dB.u)(IB.content, dB.g.DEFAULT_FONT_SIZE) : IB.content = [{
+           (et = et ? JSON.parse(JSON.stringify(et)) : {}).content ? et.content = (0, Jt.x)(et.content, Jt.h.DEFAULT_FONT_SIZE) : et.content = [{
```

#### 2469. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22303` → after: `L22187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22187) · [Before (L22303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22303)

```diff
-           const GB = (0, NB.d)().getPlayerRanks(BB).map((BB => FB.m[BB])).filter((BB => BB.nameTag && BB.visible));
+           const mt = (0, ft.c)().getPlayerRanks(tt).map((tt => Et.j[tt])).filter((tt => tt.nameTag && tt.visible));
```

#### 2470. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22305` → after: `L22189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22189) · [Before (L22305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22305)

```diff
-           const vB = FB.t[TB];
+           const dt = Et.o[Ot];
```

#### 2471. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22307` → after: `L22191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22191) · [Before (L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22307)

```diff
-             for (const kB of IB.content)(0, dB.z)(kB) && (kB.style ? (0, zB.gc)(kB.style) || (kB.style.color = vB) : kB.style = {
+             for (const jt of et.content)(0, Jt.A)(jt) && (jt.style ? (0, lt.Ib)(jt.style) || (jt.style.color = dt) : jt.style = {
```

#### 2472. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22310` → after: `L22194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22194) · [Before (L22310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22310)

```diff
-           if (AB(BB) ? (IB.content.push(dB.c), tB.add(BB)) : tB.delete(BB), nI(BB)) {
+           if (Yt(tt) ? (et.content.push(Jt.d), Bt.add(tt)) : Bt.delete(tt), Qe(tt)) {
```

#### 2473. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22313` → after: `L22197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22197) · [Before (L22313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22313)

```diff
-               str: ` ${ZB}m`,
+               str: ` ${Vt}m`,
```

#### 2474. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22319-L22320` → after: `L22203-L22204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22203-L22204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22203-L22204) · [Before (L22319-L22320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22319-L22320)

```diff
-           return IB.subtitle && (IB.subtitle = (0, dB.u)(IB.subtitle, dB.g.DEFAULT_SUBTITLE_FONT_SIZE)), IB.backgroundColor = null !== (JB = IB.backgroundColor) && void 0 !== JB ? JB : "#22283b", IB.subtitleBackgroundColor = null !== (oB = IB.subtitleBackgroundColor) && void 0 != … [truncated]
-         }(IB.bR, IB.nameTagInfo, ZB, IB.nameColour);
+           return et.subtitle && (et.subtitle = (0, Jt.x)(et.subtitle, Jt.h.DEFAULT_SUBTITLE_FONT_SIZE)), et.backgroundColor = null !== (qt = et.backgroundColor) && void 0 !== qt ? qt : "#22283b", et.subtitleBackgroundColor = null !== (Dt = et.subtitleBackgroundColor) && void 0 != … [truncated]
+         }(et.uZ, et.nameTagInfo, Vt, et.nameColour);
```
