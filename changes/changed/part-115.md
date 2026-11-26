# Changed — Bundle Modifications Report (Part 115 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `115 / 154` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 114](part-114.md) · [Part 116 →](part-116.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (1049 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 137. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1480` → after: `L1480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1480) · [Before (L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1480)

```diff
-         return null !== (LH = HH[rH]) && void 0 !== LH ? LH : AH.g[rH]
+         return null !== (GB = BB[DB]) && void 0 !== GB ? GB : YB.f[DB]
```

#### 138. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1493-L1498` → after: `L1493-L1498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1493-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1493-L1498) · [Before (L1493-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1493-L1498)

```diff
-       EH = (HH, BH) => null !== HH && void 0 !== HH ? HH : "nintendo" === BH,
-       XH = HH => EH((0, rH.g)().swapConfirmBack, (0, rH.i)()) && CH.get(HH) || HH,
-       GH = HH => zH((0, rH.g)().bindings, XH(HH)),
-       YH = HH => AH.g[XH(HH)],
-       uH = Object.keys(AH.g),
-       QH = HH => "gameplay" === (0, AH.q)(HH) ? ["gameplay"] : (0, AH.m)(HH),
+       MB = (BB, OB) => null !== BB && void 0 !== BB ? BB : "nintendo" === OB,
+       PB = BB => MB((0, DB.k)().swapConfirmBack, (0, DB.o)()) && JB.get(BB) || BB,
+       zB = BB => yB((0, DB.k)().bindings, PB(BB)),
+       lB = BB => YB.f[PB(BB)],
+       pB = Object.keys(YB.f),
+       qB = BB => "gameplay" === (0, YB.o)(BB) ? ["gameplay"] : (0, YB.k)(BB),
```

#### 139. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1505` → after: `L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1505) · [Before (L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1505)

```diff
-           hH = new Set((0, AH.t)(BH)),
+           oB = new Set((0, YB.q)(OB)),
```

#### 140. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1516-L1518` → after: `L1516-L1518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1516-L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1516-L1518) · [Before (L1516-L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1516-L1518)

```diff
-           const BH = zH(HH, XH) === rH ? LH : rH,
-             hH = (0, AH.m)(XH).some((HH => AH.k.has(HH)));
-           if ((0, SH.D)(BH) && hH) return null;
+           const OB = yB(BB, PB) === DB ? GB : DB,
+             oB = (0, YB.k)(PB).some((BB => YB.j.has(BB)));
+           if ((0, QB.L)(OB) && oB) return null;
```

#### 141. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1521` → after: `L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1521) · [Before (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1521)

```diff
-         for (const SH of Object.keys(EH)) EH[SH] === AH.g[SH] && delete EH[SH];
+         for (const QB of Object.keys(MB)) MB[QB] === YB.f[QB] && delete MB[QB];
```

#### 142. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1524` → after: `L1524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1524) · [Before (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1524)

```diff
-       xH = (HH, BH) => null !== MH((0, rH.g)().bindings, XH(HH), BH),
+       RB = (BB, OB) => null !== NB((0, DB.k)().bindings, PB(BB), OB),
```

#### 143. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1527-L1528` → after: `L1527-L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1527-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1527-L1528) · [Before (L1527-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1527-L1528)

```diff
-         const LH = MH((0, rH.g)().bindings, XH(HH), BH);
-         return !!LH && ((0, rH.k)({
+         const GB = NB((0, DB.k)().bindings, PB(BB), OB);
+         return !!GB && ((0, DB.q)({
```

#### 144. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1533` → after: `L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1533) · [Before (L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1533)

```diff
-         const LH = (0, AH.t)(BH);
+         const GB = (0, YB.q)(OB);
```

#### 145. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1550` → after: `L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1550) · [Before (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1550)

```diff
-         const LH = (0, rH.g)();
+         const GB = (0, DB.k)();
```

#### 146. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1553` → after: `L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1553) · [Before (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1553)

```diff
-           const LH = BH ? UH[HH][rH] : AH.g[rH];
+           const GB = OB ? SB[BB][DB] : YB.f[DB];
```

#### 147. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1556-L1557` → after: `L1556-L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1556-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1556-L1557) · [Before (L1556-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1556-L1557)

```diff
-         return (0, rH.k)({
-           swapSticks: "southpaw" === HH ? BH : LH.swapSticks,
+         return (0, DB.q)({
+           swapSticks: "southpaw" === BB ? OB : GB.swapSticks,
```

#### 148. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1562` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1562) · [Before (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1562)

```diff
-         (0, rH.k)({
+         (0, DB.q)({
```

#### 149. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1567-L1569` → after: `L1567-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1567-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1567-L1569) · [Before (L1567-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1567-L1569)

```diff
-       mH = () => (0, rH.g)().swapSticks ? "RightStick" : "LeftStick",
-       oH = () => (0, rH.g)().swapSticks ? "LeftStick" : "RightStick",
-       IH = HH => (0, rH.g)().swapSticks && (0, SH.D)(HH),
+       dB = () => (0, DB.k)().swapSticks ? "RightStick" : "LeftStick",
+       KB = () => (0, DB.k)().swapSticks ? "LeftStick" : "RightStick",
+       uB = BB => (0, DB.k)().swapSticks && (0, QB.L)(BB),
```

#### 150. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1572-L1574` → after: `L1572-L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1572-L1574) · [Before (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1572-L1574)

```diff
-         if (AH.C.has(HH)) return mH();
-         const BH = AH.y[HH];
-         return BH && ("leaderboard" !== BH || (0, hH.c)(HH, (0, hH.b)())) ? GH(BH) : null
+         if (YB.x.has(BB)) return dB();
+         const OB = YB.w[BB];
+         return OB && ("leaderboard" !== OB || (0, oB.d)(BB, (0, oB.c)())) ? zB(OB) : null
```

#### 151. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1577` → after: `L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1577) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1577)

```diff
-   8846: (HH, BH, LH) => {
+   8863: (BB, OB, GB) => {
```

#### 152. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1586-L1588` → after: `L1586-L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1586-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1586-L1588) · [Before (L1586-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1586-L1588)

```diff
-       getBoundButton: () => EH.k,
-       getControllerSettings: () => GH.g,
-       getGlyphForNoaAction: () => EH.q,
+       getBoundButton: () => MB.h,
+       getControllerSettings: () => zB.k,
+       getGlyphForNoaAction: () => MB.m,
```

#### 153. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1593` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1593) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1593)

```diff
-       getPadRepeatTiming: () => QH.f,
+       getPadRepeatTiming: () => qB.h,
```

#### 154. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1599-L1604` → after: `L1599-L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1599-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1599-L1600) · [Before (L1599-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1599-L1604)

```diff
-     var rH = LH(1123),
-       SH = LH(1405),
-       hH = LH(8855),
-       tH = LH(69),
-       zH = LH(15),
-       CH = LH(18),
+     var DB = GB(1175),
+       QB = GB(1450),
```

#### 155. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1606` → after: `L1602-L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1602-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1602-L1608) · [Before (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1606)

```diff
-       XH = LH(8901),
+       jB = GB(70),
+       yB = GB(16),
+       JB = GB(25),
+       MB = GB(8890),
+       PB = GB(8915),
+       zB = GB(8902),
+       lB = GB(8919),
```

#### 156. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1608-L1612` → after: `L1610-L1612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1610-L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1610-L1612) · [Before (L1608-L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1608-L1612)

```diff
-       YH = LH(8908),
-       uH = LH(8857),
-       QH = LH(9342),
-       WH = LH(9347),
-       MH = LH(1696);
+       qB = GB(9328),
+       ZB = GB(9337),
+       NB = GB(1730);
```

#### 157. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1632` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1632) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1632)

```diff
-           SH = (0, uH.f)(BH.stick, PH(BH.moveDeadzone)),
+           QB = (0, pB.n)(OB.stick, AB(OB.moveDeadzone)),
```

#### 158. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1691` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1691) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1691)

```diff
-         const BH = (0, uH.f)(HH, .2);
+         const OB = (0, pB.n)(BB, .2);
```

#### 159. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1695` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1695) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1695)

```diff
-         const LH = (0, uH.f)(HH, .2),
+         const GB = (0, pB.n)(BB, .2),
```

#### 160. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1716)

```diff
-         for (let SH = HH instanceof HTMLElement ? HH : null !== (AH = null === HH || void 0 === HH ? void 0 : HH.parentElement) && void 0 !== AH ? AH : null; SH; SH = SH.parentElement) {
+         for (let QB = BB instanceof HTMLElement ? BB : null !== (YB = null === BB || void 0 === BB ? void 0 : BB.parentElement) && void 0 !== YB ? YB : null; QB; QB = QB.parentElement) {
```

#### 161. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1723)

```diff
-         return rH instanceof HTMLElement && bH(rH, BH) ? rH : null
+         return DB instanceof HTMLElement && fB(DB, OB) ? DB : null
```

#### 162. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1738` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1738) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1738)

```diff
-         let LH = kH(HH, BH) ? HH : null,
+         let GB = kB(BB, OB) ? BB : null,
```

#### 163. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1764-L1765` → after: `L1764-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1764-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1764-L1765) · [Before (L1764-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1764-L1765)

```diff
-     var qH = LH(45),
-       gH = LH(1038),
+     var gB = GB(56),
+       rB = GB(1090),
```

#### 164. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1767` → after: `L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1767) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1767)

```diff
-       RH = LH(1225);
+       wB = GB(1282);
```

#### 165. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1781)

```diff
-           AH = LH ? `${LH.left},${LH.top},${LH.width},${LH.height}` : "";
+           YB = GB ? `${GB.left},${GB.top},${GB.width},${GB.height}` : "";
```

#### 166. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1784` → after: `L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1784) · [Before (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1784)

```diff
-         this.shownKey = AH, BH.classList.toggle("Visible", null !== LH), LH && (BH.classList.toggle("Snap", rH), BH.style.width = `${LH.width}px`, BH.style.height = `${LH.height}px`, BH.style.transform = `translate(${LH.left}px, ${LH.top}px)`, rH && (BH.offsetWidth, BH.classList. … [truncated]
+         this.shownKey = YB, OB.classList.toggle("Visible", null !== GB), GB && (OB.classList.toggle("Snap", DB), OB.style.width = `${GB.width}px`, OB.style.height = `${GB.height}px`, OB.style.transform = `translate(${GB.left}px, ${GB.top}px)`, DB && (OB.offsetWidth, OB.classList. … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1791)

```diff
-         const AH = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!nH){nH=!0;const HH=document.createElement("div");HH.setAttribute("aria-hidden","true"),HH.style.cssText="po … [truncated]
+         const YB = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!cB){cB=!0;const BB=document.createElement("div");BB.setAttribute("aria-hidden","true"),BB.style.cssText="po … [truncated]
```

#### 168. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1801)

```diff
-         return tH <= SH || zH <= hH ? BH : {
+         return jB <= QB || yB <= oB ? OB : {
```

#### 169. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1823` → after: `L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1823) · [Before (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1823)

```diff
-     var wH = LH(9356);
+     var eB = GB(9344);
```

#### 170. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1853` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1853) · [Before (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1853)

```diff
-     var aH = LH(9364);
+     var CB = GB(9354);
```

#### 171. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1957-L1958` → after: `L1957-L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L1957-L1958) · [Before (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L1957-L1958)

```diff
-     var iH = LH(9370),
-       pH = LH(2548);
+     var sB = GB(9363),
+       xB = GB(2575);
```

#### 172. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2055)

```diff
-         return null !== rH && void 0 !== rH ? rH : AH
+         return null !== DB && void 0 !== DB ? DB : YB
```

#### 173. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2130` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2130) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2130)

```diff
-       kB = HH => HH.hasAttribute("data-inven-idx") ? "slot" : HH.hasAttribute("data-recipe-key") ? "recipe" : HH.hasAttribute("data-craft-ingredient") || (0, pH.x)(HH) ? "info" : (0, wH.S)(HH) ? "textField" : "button",
+       kO = BB => BB.hasAttribute("data-inven-idx") ? "slot" : BB.hasAttribute("data-recipe-key") ? "recipe" : BB.hasAttribute("data-craft-ingredient") || (0, xB.x)(BB) ? "info" : (0, eB.I)(BB) ? "textField" : "button",
```

#### 174. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2137)

```diff
-           recipe: null !== (BH = HH && (null === (LH = oB(HH)) || void 0 === LH ? void 0 : LH.getAttribute("data-recipe-key"))) && void 0 !== BH ? BH : null
+           recipe: null !== (OB = BB && (null === (GB = KO(BB)) || void 0 === GB ? void 0 : GB.getAttribute("data-recipe-key"))) && void 0 !== OB ? OB : null
```

#### 175. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2193` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2193) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2193)

```diff
-           MH = null !== (xH = tH.get(HH)) && void 0 !== xH ? xH : null, MH || (MH = {
+           NB = null !== (RB = jB.get(BB)) && void 0 !== RB ? RB : null, NB || (NB = {
```

#### 176. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2214` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2214) · [Before (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2214)

```diff
-             scrollGroup: null !== (PH = null === WH || void 0 === WH ? void 0 : WH.group) && void 0 !== PH ? PH : null,
+             scrollGroup: null !== (AB = null === ZB || void 0 === ZB ? void 0 : ZB.group) && void 0 !== AB ? AB : null,
```

#### 177. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2216` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2216) · [Before (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2216)

```diff
-             clip: null !== (TH = null === WH || void 0 === WH ? void 0 : WH.box) && void 0 !== TH ? TH : null,
+             clip: null !== (VB = null === ZB || void 0 === ZB ? void 0 : ZB.box) && void 0 !== VB ? VB : null,
```

#### 178. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2220` → after: `L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2220) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2220)

```diff
-             scrollContainer: null !== (UH = null === WH || void 0 === WH ? void 0 : WH.container) && void 0 !== UH ? UH : null
+             scrollContainer: null !== (SB = null === ZB || void 0 === ZB ? void 0 : ZB.container) && void 0 !== SB ? SB : null
```

#### 179. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2248` → after: `L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2248) · [Before (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2248)

```diff
-         return null !== (HH = null === (BH = this.latched) || void 0 === BH ? void 0 : BH.hold) && void 0 !== HH ? HH : null
+         return null !== (BB = null === (OB = this.latched) || void 0 === OB ? void 0 : OB.hold) && void 0 !== BB ? BB : null
```

#### 180. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2254` → after: `L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2254) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2254)

```diff
-     var NB = LH(9377);
+     var XO = GB(9365);
```

#### 181. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2278` → after: `L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2278) · [Before (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2278)

```diff
-           hH = `${rH}|${Math.round(AH.clientX)},${Math.round(AH.clientY)}`,
+           oB = `${DB}|${Math.round(YB.clientX)},${Math.round(YB.clientY)}`,
```

#### 182. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2286` → after: `L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2286) · [Before (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2286)

```diff
-         if (tH) return void("element" === SH.kind ? (0, wH.r)(SH.element, SH.element, jB(AH)) : HH.hover(null, AH));
+         if (jB) return void("element" === QB.kind ? (0, eB.p)(QB.element, QB.element, EO(YB)) : BB.hover(null, YB));
```

#### 183. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2289` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2289) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2289)

```diff
-         "element" === XH.kind ? (0, wH.r)(XH.element, GH, jB(AH)) : GH && (0, wH.r)(null, GH, jB(AH))
+         "element" === PB.kind ? (0, eB.p)(PB.element, zB, EO(YB)) : zB && (0, eB.p)(null, zB, EO(YB))
```

#### 184. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2299` → after: `L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2299) · [Before (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2299)

```diff
-         "element" === HH.kind && (0, wH.r)(HH.element, BH, jB(LH))
+         "element" === BB.kind && (0, eB.p)(BB.element, OB, EO(GB))
```

#### 185. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2318` → after: `L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2318) · [Before (L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2318)

```diff
-         return 0 !== (0, uH.f)(HH, .2).y
+         return 0 !== (0, pB.n)(BB, .2).y
```

#### 186. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2338)

```diff
-     var ZB = LH(9385);
+     var TO = GB(9370);
```

#### 187. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2371)

```diff
-         return HH = (0, EH.k)("inventory"), !yB.map(EH.k).includes(HH) && !(0, uH.D)(HH);
+         return BB = (0, MB.h)("inventory"), !tO.map(MB.h).includes(BB) && !(0, pB.L)(BB);
```

#### 188. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2418` → after: `L2418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2418) · [Before (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2418)

```diff
-               for (const LH of XH.querySelectorAll(`${UB}:first-child`)) {
+               for (const GB of PB.querySelectorAll(`${SO}:first-child`)) {
```

#### 189. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2436` → after: `L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2436) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2436)

```diff
-                   MH = WH && !rH.has(WH.container) ? WH : null;
+                   NB = ZB && !DB.has(ZB.container) ? ZB : null;
```

#### 190. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2441` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2441) · [Before (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2441)

```diff
-                   scrollGroup: null !== (tH = null === MH || void 0 === MH ? void 0 : MH.group) && void 0 !== tH ? tH : null,
+                   scrollGroup: null !== (jB = null === NB || void 0 === NB ? void 0 : NB.group) && void 0 !== jB ? jB : null,
```

#### 191. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2443` → after: `L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2443) · [Before (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2443)

```diff
-                   clip: null !== (zH = null === MH || void 0 === MH ? void 0 : MH.box) && void 0 !== zH ? zH : null,
+                   clip: null !== (yB = null === NB || void 0 === NB ? void 0 : NB.box) && void 0 !== yB ? yB : null,
```

#### 192. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2447` → after: `L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2447) · [Before (L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2447)

```diff
-                   scrollContainer: null !== (CH = null === MH || void 0 === MH ? void 0 : MH.container) && void 0 !== CH ? CH : null
+                   scrollContainer: null !== (JB = null === NB || void 0 === NB ? void 0 : NB.container) && void 0 !== JB ? JB : null
```

#### 193. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2495-L2496` → after: `L2495-L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2495-L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2495-L2496) · [Before (L2495-L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2495-L2496)

```diff
-           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(uH.y.map((HH => [HH, (0, QH.d)(uH.C)]))), this.stickRepeat = new uH.b((0, QH.d)(uH.Y)), this.pageUpTimer = (0, QH.d)(uH.T … [truncated]
-             this.endInteraction((0, iH.f)()), (0, iH.h)() || this.forgetSurface()
+           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(pB.G.map((BB => [BB, (0, qB.d)(pB.H)]))), this.stickRepeat = new pB.e((0, qB.d)(pB.kb)), this.pageUpTimer = (0, qB.d)(pB. … [truncated]
+             this.endInteraction((0, sB.e)()), (0, sB.i)() || this.forgetSurface()
```

#### 194. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2499` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2499) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2499)

```diff
-             this.reopenSlotIdx = null !== (HH = this.focused ? fB(this.focused).idx : null) && void 0 !== HH ? HH : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, iH.q)(), this.panelMemory.clear(), this. … [truncated]
+             this.reopenSlotIdx = null !== (BB = this.focused ? mO(this.focused).idx : null) && void 0 !== BB ? BB : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, sB.o)(), this.panelMemory.clear(), this. … [truncated]
```

#### 195. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2504-L2505` → after: `L2504-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2504-L2505) · [Before (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2504-L2505)

```diff
-           }, this.shouldBlockRealPointer = HH => HH.isTrusted && !(0, MH.t)(HH) && this.isShowing(), this.noteRealPointer = HH => {
-             HH instanceof MouseEvent && HH.isTrusted && !(0, MH.t)(HH) && (this.lastRealPointer ??= {
+           }, this.shouldBlockRealPointer = BB => BB.isTrusted && !(0, NB.r)(BB) && this.isShowing(), this.noteRealPointer = BB => {
+             BB instanceof MouseEvent && BB.isTrusted && !(0, NB.r)(BB) && (this.lastRealPointer ??= {
```

#### 196. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2511` → after: `L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2511) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2511)

```diff
-             return HH === (0, EH.k)("inventoryClose") ? !(null !== (BH = (0, iH.f)()) && void 0 !== BH && BH.isHolding()) : !(HH !== (0, EH.k)("inventory") || !HL()) || ((0, uH.D)(HH) ? this.isNavButton(HH) : pB.some((BH => (0, EH.k)(BH) === HH)))
+             return BB === (0, MB.h)("inventoryClose") ? !(null !== (OB = (0, sB.e)()) && void 0 !== OB && OB.isHolding()) : !(BB !== (0, MB.h)("inventory") || !BG()) || ((0, pB.L)(BB) ? this.isNavButton(BB) : xO.some((OB => (0, MB.h)(OB) === BB)))
```

#### 197. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2516-L2518` → after: `L2516-L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2516-L2518) · [Before (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2516-L2518)

```diff
-           const hH = (0, iH.f)();
-           if (!(0, YH.j)()) return void(this.wasShowing && (this.endInteraction(hH), this.rehoverRealPointer()));
-           this.wasShowing = !0, this.applyFocusRequest(), HH.wokeDevice && this.focusWakePointer(!(null === hH || void 0 === hH || !hH.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, GH.g)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
+           const oB = (0, sB.e)();
+           if (!(0, lB.k)()) return void(this.wasShowing && (this.endInteraction(oB), this.rehoverRealPointer()));
+           this.wasShowing = !0, this.applyFocusRequest(), BB.wokeDevice && this.focusWakePointer(!(null === oB || void 0 === oB || !oB.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, zB.k)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2525` → after: `L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2525) · [Before (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2525)

```diff
-             uH = null !== (BH = null === (LH = CH.actionElement) || void 0 === LH ? void 0 : LH.querySelector(".DoCraftItem")) && void 0 !== BH ? BH : CH.actionElement;
+             pB = null !== (OB = null === (GB = JB.actionElement) || void 0 === GB ? void 0 : GB.querySelector(".DoCraftItem")) && void 0 !== OB ? OB : JB.actionElement;
```

#### 199. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2536)

```diff
-             pressed: HH.isHeld((0, EH.k)("inventoryPrimary"))
+             pressed: BB.isHeld((0, MB.h)("inventoryPrimary"))
```

#### 200. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2552` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2552) · [Before (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2552)

```diff
-             pressHints: null !== (AH = null === (rH = CH.press) || void 0 === rH ? void 0 : rH.hints) && void 0 !== AH ? AH : null,
+             pressHints: null !== (YB = null === (DB = JB.press) || void 0 === DB ? void 0 : DB.hints) && void 0 !== YB ? YB : null,
```

#### 201. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2564` → after: `L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2564) · [Before (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2564)

```diff
-           const LH = (0, YH.c)();
+           const GB = (0, lB.d)();
```

#### 202. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2568` → after: `L2568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2568) · [Before (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2568)

```diff
-           this.setFocus(null !== (BH = xB(LH, AH)) && void 0 !== BH ? BH : HH ? QB(LH, AH, (HH => {
+           this.setFocus(null !== (OB = RO(GB, YB)) && void 0 !== OB ? OB : BB ? qO(GB, YB, (BB => {
```

#### 203. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2575)

```diff
-           })) : null, !1), "cursor" === (0, GH.g)().inventoryNavigation && (this.pointer = {
+           })) : null, !1), "cursor" === (0, zB.k)().inventoryNavigation && (this.pointer = {
```

#### 204. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2585` → after: `L2585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2585) · [Before (L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2585)

```diff
-           BH && (0, wH.r)(null, BH, HH)
+           OB && (0, eB.p)(null, OB, BB)
```

#### 205. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2598` → after: `L2598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2598) · [Before (L2598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2598)

```diff
-           return this.focused && null !== (HH = this.getTargets().byElement.get(this.focused)) && void 0 !== HH ? HH : null
+           return this.focused && null !== (BB = this.getTargets().byElement.get(this.focused)) && void 0 !== BB ? BB : null
```

#### 206. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2626` → after: `L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2626) · [Before (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2626)

```diff
-               })(BH, (0, iH.f)()),
+               })(OB, (0, sB.e)()),
```

#### 207. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2629` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2629) · [Before (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2629)

```diff
-             rH = null !== HH || void 0 !== tH, AH = null !== (SH = null !== (hH = null !== HH && void 0 !== HH ? HH : tH) && void 0 !== hH ? hH : zH && LH.get(zH)) && void 0 !== SH ? SH : vB(BH)
+             DB = null !== BB || void 0 !== jB, YB = null !== (QB = null !== (oB = null !== BB && void 0 !== BB ? BB : jB) && void 0 !== oB ? oB : yB && GB.get(yB)) && void 0 !== QB ? QB : WO(OB)
```

#### 208. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2644` → after: `L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2644) · [Before (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2644)

```diff
-             if ("cursor" === (0, GH.g)().inventoryNavigation) {
+             if ("cursor" === (0, zB.k)().inventoryNavigation) {
```

#### 209. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2672` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2672) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2672)

```diff
-           this.focusTarget = BH, (null === BH || void 0 === BH ? void 0 : BH.element) !== this.focused && (this.focused = null !== (HH = null === BH || void 0 === BH ? void 0 : BH.element) && void 0 !== HH ? HH : null, BH && (this.panelMemory.set(BH.panel, BH.element), this.lastR … [truncated]
+           this.focusTarget = OB, (null === OB || void 0 === OB ? void 0 : OB.element) !== this.focused && (this.focused = null !== (BB = null === OB || void 0 === OB ? void 0 : OB.element) && void 0 !== BB ? BB : null, OB && (this.panelMemory.set(OB.panel, OB.element), this.lastR … [truncated]
```

#### 210. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2676` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2676) · [Before (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2676)

```diff
-             AH = LH && (0, GH.g)().cursorMagnetism ? tB(WB(LH)) : null;
+             YB = GB && (0, zB.k)().cursorMagnetism ? jO(ZO(GB)) : null;
```

#### 211. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2679` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2679) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2679)

```diff
-             moveDeadzone: (0, GH.g)().moveDeadzone,
+             moveDeadzone: (0, zB.k)().moveDeadzone,
```

#### 212. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2682` → after: `L2682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2682) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2682)

```diff
-             cursorSpeedPercent: (0, GH.g)().cursorSpeed,
+             cursorSpeedPercent: (0, zB.k)().cursorSpeed,
```

#### 213. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2715` → after: `L2715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2715) · [Before (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2715)

```diff
-             return null !== (AH = uB(rH, BH, LH)) && void 0 !== AH ? AH : QB(HH, BH)
+             return null !== (YB = pO(DB, OB, GB)) && void 0 !== YB ? YB : qO(BB, OB)
```

#### 214. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2720` → after: `L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2720) · [Before (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2720)

```diff
-           return !iB.some((BH => (0, EH.k)(BH) === HH)) && !(HH === (0, EH.k)("inventory") && HL())
+           return !sO.some((OB => (0, MB.h)(OB) === BB)) && !(BB === (0, MB.h)("inventory") && BG())
```

#### 215. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2723` → after: `L2723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2723) · [Before (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2723)

```diff
-           const LH = (0, GH.g)().inventoryNavigation,
+           const GB = (0, zB.k)().inventoryNavigation,
```

#### 216. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2729` → after: `L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2729) · [Before (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2729)

```diff
-           for (const zH of uH.y) {
+           for (const yB of pB.G) {
```

#### 217. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2733` → after: `L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2733) · [Before (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2733)

```diff
-           const SH = this.stickGate.update(HH.leftStick, (0, GH.g)().moveDeadzone);
+           const QB = this.stickGate.update(BB.leftStick, (0, zB.k)().moveDeadzone);
```

#### 218. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2735-L2736` → after: `L2735-L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2735-L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2735-L2736) · [Before (L2735-L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2735-L2736)

```diff
-             const BH = ((HH, BH, LH, AH) => "hybrid" !== HH ? "cursor" === HH : !AH && (BH || LH))(LH, null !== this.pointer, SH, null !== rH);
-             return BH && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(HH, "cursor" === LH ? AH : {
+             const OB = ((BB, OB, GB, YB) => "hybrid" !== BB ? "cursor" === BB : !YB && (OB || GB))(GB, null !== this.pointer, QB, null !== DB);
+             return OB && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(BB, "cursor" === GB ? YB : {
```

#### 219. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2741-L2742` → after: `L2741-L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2741-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2741-L2742) · [Before (L2741-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2741-L2742)

```diff
-           const hH = (0, uH.f)(HH.leftStick, (0, GH.g)().moveDeadzone),
-             tH = this.stickRepeat.update(SH ? (0, uH.Z)(hH) : null, BH);
+           const oB = (0, pB.n)(BB.leftStick, (0, zB.k)().moveDeadzone),
+             jB = this.stickRepeat.update(QB ? (0, pB.nb)(oB) : null, OB);
```

#### 220. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2753-L2754` → after: `L2753-L2754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2753-L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2753-L2754) · [Before (L2753-L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2753-L2754)

```diff
-           const HH = (0, iH.q)();
-           HH && (this.targets.invalidate(), this.setFocus((0, iH.e)(this.getTargets().targets, HH)))
+           const BB = (0, sB.o)();
+           BB && (this.targets.invalidate(), this.setFocus((0, sB.d)(this.getTargets().targets, BB)))
```

#### 221. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2758-L2759` → after: `L2758-L2759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2758-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2758-L2759) · [Before (L2758-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2758-L2759)

```diff
-           const rH = HH.wasPressed((0, EH.k)("inventoryPanelPrevious")),
-             SH = HH.wasPressed((0, EH.k)("inventoryPanelNext"));
+           const DB = BB.wasPressed((0, MB.h)("inventoryPanelPrevious")),
+             QB = BB.wasPressed((0, MB.h)("inventoryPanelNext"));
```

#### 222. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2771` → after: `L2771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2771) · [Before (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2771)

```diff
-           })(hH, bB), CH = null !== (BH = null === (LH = this.focusTarget) || void 0 === LH ? void 0 : LH.panel) && void 0 !== BH ? BH : null, XH = SH ? 1 : -1, 0 === zH.length ? null : zH[zB(null === CH ? -1 : zH.indexOf(CH), zH.length, XH)]);
+           })(oB, fO), JB = null !== (OB = null === (GB = this.focusTarget) || void 0 === GB ? void 0 : GB.panel) && void 0 !== OB ? OB : null, PB = QB ? 1 : -1, 0 === yB.length ? null : yB[yO(null === JB ? -1 : yB.indexOf(JB), yB.length, PB)]);
```

#### 223. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2776` → after: `L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2776) · [Before (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2776)

```diff
-             uH = null !== (AH = YH.find((HH => HH.element === GH && HH.visible))) && void 0 !== AH ? AH : LL(YH, (0, iH.f)());
+             pB = null !== (YB = lB.find((BB => BB.element === zB && BB.visible))) && void 0 !== YB ? YB : GG(lB, (0, sB.e)());
```

#### 224. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2780-L2781` → after: `L2780-L2781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2780-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2780-L2781) · [Before (L2780-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2780-L2781)

```diff
-           const LH = (0, EH.k)("menuPageUp"),
-             AH = (0, EH.k)("menuPageDown"),
+           const GB = (0, MB.h)("menuPageUp"),
+             YB = (0, MB.h)("menuPageDown"),
```

#### 225. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2786` → after: `L2786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2786) · [Before (L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2786)

```diff
-           if (!HH.wasPressed(SH ? AH : LH) && this.hasCategories) return;
+           if (!BB.wasPressed(QB ? YB : GB) && this.hasCategories) return;
```

#### 226. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2792` → after: `L2792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2792) · [Before (L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2792)

```diff
-               return (0, wH.n)(AH, (0, wH.C)(AH)), !0
+               return (0, eB.n)(YB, (0, eB.w)(YB)), !0
```

#### 227. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2796` → after: `L2796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2796) · [Before (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2796)

```diff
-             const HH = null !== (tH = null === (zH = this.focusTarget) || void 0 === zH ? void 0 : zH.scrollGroup) && void 0 !== tH ? tH : null,
+             const BB = null !== (jB = null === (yB = this.focusTarget) || void 0 === yB ? void 0 : yB.scrollGroup) && void 0 !== jB ? jB : null,
```

#### 228. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2805` → after: `L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2805) · [Before (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2805)

```diff
-           } = this.getTargets(), XH = this.currentTarget(), GH = XH && qB(XH) ? XH : CH.find((HH => qB(HH) && HH.visible));
+           } = this.getTargets(), PB = this.currentTarget(), zB = PB && gO(PB) ? PB : JB.find((BB => gO(BB) && BB.visible));
```

#### 229. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2811` → after: `L2811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2811) · [Before (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2811)

```diff
-               hH = rH.y + ("Down" === LH ? AH : -AH);
+               oB = DB.y + ("Down" === GB ? YB : -YB);
```

#### 230. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2823` → after: `L2823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2823) · [Before (L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2823)

```diff
-           this.setFocus(null !== YH && void 0 !== YH ? YH : GH)
+           this.setFocus(null !== lB && void 0 !== lB ? lB : zB)
```

#### 231. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2830)

```diff
-           } = this.getTargets(), zH = this.pointer, CH = !zH && this.focusTarget && qB(this.focusTarget) ? this.focusTarget.scrollContainer : null, EH = zH && (null === (BH = tH.find((HH => HH.clip && MB(HH.clip, zH)))) || void 0 === BH ? void 0 : BH.scrollContainer), XH = null ! … [truncated]
+           } = this.getTargets(), yB = this.pointer, JB = !yB && this.focusTarget && gO(this.focusTarget) ? this.focusTarget.scrollContainer : null, MB = yB && (null === (OB = jB.find((BB => BB.clip && NO(BB.clip, yB)))) || void 0 === OB ? void 0 : OB.scrollContainer), PB = null ! … [truncated]
```

#### 232. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2850` → after: `L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2850) · [Before (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2850)

```diff
-           }, AH = this.focused ? oB(this.focused) : null, rH = AH ? (0, ZB.e)(AH) : null;
+           }, YB = this.focused ? KO(this.focused) : null, DB = YB ? (0, TO.c)(YB) : null;
```

#### 233. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2866` → after: `L2866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2866) · [Before (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2866)

```diff
-               const SH = (0, EH.k)(rH);
+               const QB = (0, MB.h)(DB);
```

#### 234. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2879-L2880` → after: `L2879-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2879-L2880) · [Before (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2879-L2880)

```diff
-           const AH = HH.wasPressed((0, EH.k)("inventoryPrimary")) || HH.wasPressed((0, EH.k)("inventoryHotbarSwap"));
-           if (!AH && !HH.wasPressed((0, EH.k)("inventoryClose")) && !BH.isHolding()) return !(HH.wasPressed((0, EH.k)("inventory")) && HL());
+           const YB = BB.wasPressed((0, MB.h)("inventoryPrimary")) || BB.wasPressed((0, MB.h)("inventoryHotbarSwap"));
+           if (!YB && !BB.wasPressed((0, MB.h)("inventoryClose")) && !OB.isHolding()) return !(BB.wasPressed((0, MB.h)("inventory")) && BG());
```

#### 235. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2891` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2891) · [Before (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2891)

```diff
-           } = this.getTargets(), rH = document.querySelector(aB), SH = null !== (BH = rH && AH.get(rH)) && void 0 !== BH ? BH : LH.find((HH => "hotbar" === HH.panel));
+           } = this.getTargets(), DB = document.querySelector(CO), QB = null !== (OB = DB && YB.get(DB)) && void 0 !== OB ? OB : GB.find((BB => "hotbar" === BB.panel));
```

#### 236. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2901` → after: `L2901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2901) · [Before (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2901)

```diff
-           const AH = (0, EH.k)("inventoryDrop");
+           const YB = (0, MB.h)("inventoryDrop");
```

#### 237. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2904` → after: `L2904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2904) · [Before (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2904)

```diff
-               kind: "LX"
+               kind: "sJ"
```

#### 238. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2909` → after: `L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2909) · [Before (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2909)

```diff
-             return void(HH && (this.dropFrom(HH, !1, LH), this.dropLatch.press(HH, this.focusKey(), BH, WH.c[(0, GH.g)().tapHoldTime].dropStackMs), this.afterAction()))
+             return void(BB && (this.dropFrom(BB, !1, GB), this.dropLatch.press(BB, this.focusKey(), OB, ZB.d[(0, zB.k)().tapHoldTime].dropStackMs), this.afterAction()))
```

#### 239. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2913` → after: `L2913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2913) · [Before (L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2913)

```diff
-           SH && ((HH, BH, LH) => "LX" === HH.kind ? BH : !BH && LH(HH.idx))(SH, LH.isHolding(), LH.hasItemAt) && (this.dropFrom(SH, !0, LH), this.afterAction())
+           QB && ((BB, OB, GB) => "sJ" === BB.kind ? OB : !OB && GB(BB.idx))(QB, GB.isHolding(), GB.hasItemAt) && (this.dropFrom(QB, !0, GB), this.afterAction())
```

#### 240. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2916` → after: `L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2916) · [Before (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2916)

```diff
-           "LX" === HH.kind ? LH.dropHeld(BH, this.slotPoint()) : LH.dropSlot(HH.idx, BH)
+           "sJ" === BB.kind ? GB.dropHeld(OB, this.slotPoint()) : GB.dropSlot(BB.idx, OB)
```

#### 241. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2936` → after: `L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2936) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2936)

```diff
-           switch (SH && BL.has(HH) && (0, MH.y)(SH), HH) {
+           switch (QB && OG.has(BB) && (0, NB.x)(QB), BB) {
```

#### 242. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2954` → after: `L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2954) · [Before (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2954)

```diff
-               (0, wH.n)(SH, (0, wH.C)(SH));
+               (0, eB.n)(QB, (0, eB.w)(QB));
```

#### 243. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2957` → after: `L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2957) · [Before (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2957)

```diff
-               (0, wH.S)(SH) && (0, wH.O)(SH);
+               (0, eB.I)(QB) && (0, eB.E)(QB);
```

#### 244. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2988` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2988) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2988)

```diff
-           })(HH, this.state) || (this.state = HH, CH.k.AX(NB.g, HH))
+           })(BB, this.state) || (this.state = BB, JB.o.tM(XO.i, BB))
```

#### 245. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2992-L2995` → after: `L2992-L2995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2992-L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2992-L2995) · [Before (L2992-L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2992-L2995)

```diff
-     var hL = LH(9390),
-       tL = LH(304),
-       zL = LH(1659),
-       CL = LH(8875);
+     var oG = GB(9376),
+       jG = GB(331),
+       yG = GB(1699),
+       JG = GB(8896);
```

#### 246. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2997` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L2997) · [Before (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L2997)

```diff
-       XL = HH => HH instanceof HTMLElement && (0, pH.u)(HH) && !(0, pH.x)(HH),
+       PG = BB => BB instanceof HTMLElement && (0, xB.s)(BB) && !(0, xB.x)(BB),
```

#### 247. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3001` → after: `L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3001) · [Before (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3001)

```diff
-         for (const rH of null !== (LH = null === (AH = HH.parentElement) || void 0 === AH ? void 0 : AH.children) && void 0 !== LH ? LH : []) {
+         for (const DB of null !== (GB = null === (YB = BB.parentElement) || void 0 === YB ? void 0 : YB.children) && void 0 !== GB ? GB : []) {
```

#### 248. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3060` → after: `L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3060) · [Before (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3060)

```diff
-           AH[LH] && !(rH ? SH : hH) || tH.add(LH)
+           YB[GB] && !(DB ? QB : oB) || jB.add(GB)
```

#### 249. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3129-L3131` → after: `L3129-L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3129-L3131) · [Before (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3129-L3131)

```diff
-     var mL = LH(1711),
-       oL = LH(9399),
-       IL = LH(9407);
+     var dG = GB(1739),
+       KG = GB(9381),
+       uG = GB(9384);
```

#### 250. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3133-L3140` → after: `L3133-L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3133-L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3133-L3140) · [Before (L3133-L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3133-L3140)

```diff
-         if ("death" !== HH || "inGame" !== zH.c.get("gameState") || "off" === (0, GH.g)().quickChat || null === (0, mL.e)()) return !1;
-         const BH = (0, EH.k)("chat");
-         return BH !== (0, EH.k)("menuConfirm") && BH !== (0, EH.k)("menuBack")
-       },
-       lL = new oL.b;
-     var KL = LH(4685),
-       cL = LH(9412),
-       eL = LH(9419);
+         if ("death" !== BB || "inGame" !== yB.c.get("gameState") || "off" === (0, zB.k)().quickChat || null === (0, dG.b)()) return !1;
+         const OB = (0, MB.h)("chat");
+         return OB !== (0, MB.h)("menuConfirm") && OB !== (0, MB.h)("menuBack")
+       },
+       IG = new KG.c;
+     var FG = GB(4696),
+       iG = GB(9391),
+       LG = GB(9394);
```

#### 251. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3143` → after: `L3143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3143) · [Before (L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3143)

```diff
-         for (const LH of HH.querySelectorAll("[data-pad-tabs]"))(0, pH.u)(LH) && (!BH || Number(LH.dataset.padTabs) < Number(BH.dataset.padTabs)) && (BH = LH);
+         for (const GB of BB.querySelectorAll("[data-pad-tabs]"))(0, xB.s)(GB) && (!OB || Number(GB.dataset.padTabs) < Number(OB.dataset.padTabs)) && (OB = GB);
```

#### 252. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3152` → after: `L3152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3152) · [Before (L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3152)

```diff
-               for (const AH of (0, pH.l)(BH)) {
+               for (const YB of (0, xB.i)(OB)) {
```

#### 253. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3168` → after: `L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3168) · [Before (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3168)

```diff
-         })([...LH.querySelectorAll("[data-pad-tab]")].filter((HH => (0, pH.u)(HH) && !(0, pH.x)(HH))), AH);
+         })([...GB.querySelectorAll("[data-pad-tab]")].filter((BB => (0, xB.s)(BB) && !(0, xB.x)(BB))), YB);
```

#### 254. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3170` → after: `L3170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3170) · [Before (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3170)

```diff
-         const hH = null !== (rH = null === HH || void 0 === HH ? void 0 : HH.getFocused()) && void 0 !== rH ? rH : null,
+         const oB = null !== (DB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== DB ? DB : null,
```

#### 255. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3173` → after: `L3173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3173) · [Before (L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3173)

```diff
-         (0, wH.c)(SH), HH && (zH ? gL(HH, BH, zH, LH) : HH.setFocus(SH, {
+         (0, eB.b)(QB), BB && (yB ? rG(BB, OB, yB, GB) : BB.setFocus(QB, {
```

#### 256. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3179` → after: `L3179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3179) · [Before (L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3179)

```diff
-         const LH = cH(null !== (BH = mH(HH, "x")) && void 0 !== BH ? BH : HH),
+         const GB = iB(null !== (OB = dB(BB, "x")) && void 0 !== OB ? OB : BB),
```

#### 257. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3182` → after: `L3182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3182) · [Before (L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3182)

```diff
-         return (rH.length > 0 ? rH : AH).sort(((HH, BH) => bL(HH.getBoundingClientRect(), BH.getBoundingClientRect())))
+         return (DB.length > 0 ? DB : YB).sort(((BB, OB) => fG(BB.getBoundingClientRect(), OB.getBoundingClientRect())))
```

#### 258. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3185` → after: `L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3185) · [Before (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3185)

```diff
-         const AH = [...BH.querySelectorAll("[data-pad-row]")].filter(pH.u),
+         const YB = [...OB.querySelectorAll("[data-pad-row]")].filter(xB.s),
```

#### 259. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3208` → after: `L3208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3208) · [Before (L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3208)

```diff
-         const SH = null !== (AH = null === HH || void 0 === HH ? void 0 : HH.getFocused()) && void 0 !== AH ? AH : null,
+         const QB = null !== (YB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== YB ? YB : null,
```

#### 260. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3210` → after: `L3210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3210) · [Before (L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3210)

```diff
-           tH = null !== (rH = SH ? mH(SH, hH, BH) : null) && void 0 !== rH ? rH : IH(BH, hH);
+           jB = null !== (DB = QB ? dB(QB, oB, OB) : null) && void 0 !== DB ? DB : uB(OB, oB);
```

#### 261. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3212` → after: `L3212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3212) · [Before (L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3212)

```diff
-         const zH = SH ? (0, wH.C)(SH) : null;
+         const yB = QB ? (0, eB.w)(QB) : null;
```

#### 262. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3229` → after: `L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3229) · [Before (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3229)

```diff
-           tH = OL((0, wH.C)(SH), hH.map((HH => HH.getBoundingClientRect()))),
+           jB = UG((0, eB.w)(QB), oB.map((BB => BB.getBoundingClientRect()))),
```

#### 263. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3231` → after: `L3231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3231) · [Before (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3231)

```diff
-         return HH.setFocus(null !== zH && void 0 !== zH && zH.isConnected ? zH : null !== (AH = hH[tH]) && void 0 !== AH ? AH : null, {
+         return BB.setFocus(null !== yB && void 0 !== yB && yB.isConnected ? yB : null !== (YB = oB[jB]) && void 0 !== YB ? YB : null, {
```

#### 264. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3236-L3237` → after: `L3236-L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3236-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3236-L3237) · [Before (L3236-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3236-L3237)

```diff
-         const BH = (0, EH.k)(HH);
-         return (0, uH.D)(BH) || CL.u.some((HH => (0, EH.k)(HH) === BH)) ? null : BH
+         const OB = (0, MB.h)(BB);
+         return (0, pB.L)(OB) || JG.s.some((BB => (0, MB.h)(BB) === OB)) ? null : OB
```

#### 265. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3247` → after: `L3247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3247) · [Before (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3247)

```diff
-             return null !== (BH = null === (LH = qL(HH)) || void 0 === LH ? void 0 : LH.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== BH ? BH : null
+             return null !== (OB = null === (GB = gG(BB)) || void 0 === GB ? void 0 : GB.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== OB ? OB : null
```

#### 266. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3250` → after: `L3250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3250) · [Before (L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3250)

```diff
-         (0, hL.c)(), LH === tL.o.SETTINGS && (0, zL.n)(zH.c.get("openEverythingMenuName")) ? zH.c.set({
+         (0, oG.d)(), GB === jG.p.SETTINGS && (0, yG.m)(yB.c.get("openEverythingMenuName")) ? yB.c.set({
```

#### 267. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3252` → after: `L3252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3252) · [Before (L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3252)

```diff
-         }) : (0, zL.B)((0, eL.c)("padMenuShortcut"), LH, AH), HH && SH && rH && gL(HH, BH, SH, rH.closest("[data-pad-tabs]"))
+         }) : (0, yG.A)((0, LG.b)("padMenuShortcut"), GB, YB), BB && QB && DB && rG(BB, OB, QB, DB.closest("[data-pad-tabs]"))
```

#### 268. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3256-L3257` → after: `L3256-L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3256-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3256-L3257) · [Before (L3256-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3256-L3257)

```diff
-       JL = (0, QH.d)(uH.T),
-       iL = (0, QH.d)(uH.T),
+       vG = (0, qB.d)(pB.eb),
+       sG = (0, qB.d)(pB.eb),
```

#### 269. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3260-L3261` → after: `L3260-L3261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3260-L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3260-L3261) · [Before (L3260-L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3260-L3261)

```diff
-             const LH = (0, EH.k)("chat");
-             return fL(BH) && HH.isHeld(LH) ? "hold" === lL.update(HH.wasPressed(LH), HH.isHeld(LH), performance.now(), WH.c[(0, GH.g)().tapHoldTime].wheelMs) && (XH.b.consumeButton(LH), CH.k.AX(IL.p), !0) : (lL.release(), !1)
+             const GB = (0, MB.h)("chat");
+             return mG(OB) && BB.isHeld(GB) ? "hold" === IG.update(BB.wasPressed(GB), BB.isHeld(GB), performance.now(), ZB.d[(0, zB.k)().tapHoldTime].wheelMs) && (PB.c.consumeButton(GB), JB.o.tM(uG.r), !0) : (IG.release(), !1)
```

#### 270. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3268` → after: `L3268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3268) · [Before (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3268)

```diff
-           if (BH.wasPressed((0, EH.k)(hH))) {
+           if (OB.wasPressed((0, MB.h)(oB))) {
```

#### 271. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3281` → after: `L3281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3281) · [Before (L3281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3281)

```diff
-           const LH = (0, EH.k)(hH);
+           const GB = (0, MB.h)(oB);
```

#### 272. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3285-L3288` → after: `L3285-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3285-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3285-L3288) · [Before (L3285-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3285-L3288)

```diff
-         return ZL(BH, "pause") ? (SH || (0, zL.x)() && "menu" !== LH.layer.kind || dL(HH, AH, (0, zL.x)() ? tL.o.SETTINGS : (0, KL.e)()), !0) : !!ZL(BH, "leaderboard") && ("home" === LH.layer.kind ? (HH => {
-           const BH = [...HH.querySelectorAll("[data-pad-notifications]")].find(pH.u);
-           BH && (0, wH.c)(BH)
-         })(AH) : SH || dL(HH, AH, tL.o.LOBBY_LEADERBOARD, "inGame" === zH.c.get("gameState")), !0)
+         return TG(OB, "pause") ? (QB || (0, yG.u)() && "menu" !== GB.layer.kind || bG(BB, YB, (0, yG.u)() ? jG.p.SETTINGS : (0, FG.b)()), !0) : !!TG(OB, "leaderboard") && ("home" === GB.layer.kind ? (BB => {
+           const OB = [...BB.querySelectorAll("[data-pad-notifications]")].find(xB.s);
+           OB && (0, eB.b)(OB)
+         })(YB) : QB || bG(BB, YB, jG.p.LOBBY_LEADERBOARD, "inGame" === yB.c.get("gameState")), !0)
```

#### 273. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3293` → after: `L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3293) · [Before (L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3293)

```diff
-         if (BH.wasPressed((0, EH.k)("menuSecondary"))) {
+         if (OB.wasPressed((0, MB.h)("menuSecondary"))) {
```

#### 274. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3296` → after: `L3296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3296) · [Before (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3296)

```diff
-           if (rH) return (0, wH.c)(rH), !0;
+           if (DB) return (0, eB.b)(DB), !0;
```

#### 275. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3299` → after: `L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3299) · [Before (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3299)

```diff
-             return BH && (0, pH.w)(BH, LH.root) ? (HH.setFocus(BH, {
+             return OB && (0, xB.t)(OB, GB.root) ? (BB.setFocus(OB, {
```

#### 276. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3301` → after: `L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3301) · [Before (L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3301)

```diff
-             }), (0, wH.c)(BH)) : zH.c.set({
+             }), (0, eB.b)(OB)) : yB.c.set({
```

#### 277. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3309` → after: `L3309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3309) · [Before (L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3309)

```diff
-           if (!rH || !(0, pH.u)(rH)) return void(0, zL.B)((0, eL.c)("padMenuShortcut"), tL.o.SOCIAL);
+           if (!DB || !(0, xB.s)(DB)) return void(0, yG.A)((0, LG.b)("padMenuShortcut"), jG.p.SOCIAL);
```

#### 278. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3311` → after: `L3311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3311) · [Before (L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3311)

```diff
-           const SH = null !== (LH = null === (AH = rH.querySelector("[data-pad-friends-start]")) || void 0 === AH ? void 0 : AH.getBoundingClientRect().top) && void 0 !== LH ? LH : -1 / 0,
+           const QB = null !== (GB = null === (YB = DB.querySelector("[data-pad-friends-start]")) || void 0 === YB ? void 0 : YB.getBoundingClientRect().top) && void 0 !== GB ? GB : -1 / 0,
```

#### 279. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3314` → after: `L3314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3314) · [Before (L3314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3314)

```diff
-             zH = tH.length > 0 ? tH : hH,
+             yB = jB.length > 0 ? jB : oB,
```

#### 280. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3323` → after: `L3323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3323) · [Before (L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3323)

```diff
-         const rH = (0, wH.G)(HH);
+         const DB = (0, eB.x)(BB);
```

#### 281. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3325-L3326` → after: `L3325-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3325-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3325-L3326) · [Before (L3325-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3325-L3326)

```diff
-         const SH = (null !== (BH = null !== (LH = null !== (AH = HH.getAttribute("aria-label")) && void 0 !== AH ? AH : HH.getAttribute("title")) && void 0 !== LH ? LH : HH.textContent) && void 0 !== BH ? BH : "").replace(/\s+/g, " ").trim();
-         return SH ? `${HH.tagName}:${SH.slice(0,100)}` : null
+         const QB = (null !== (OB = null !== (GB = null !== (YB = BB.getAttribute("aria-label")) && void 0 !== YB ? YB : BB.getAttribute("title")) && void 0 !== GB ? GB : BB.textContent) && void 0 !== OB ? OB : "").replace(/\s+/g, " ").trim();
+         return QB ? `${BB.tagName}:${QB.slice(0,100)}` : null
```

#### 282. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3347` → after: `L3347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3347) · [Before (L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3347)

```diff
-           SH = (0, wH.G)(BH),
+           QB = (0, eB.x)(OB),
```

#### 283. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3371` → after: `L3371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3371) · [Before (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3371)

```diff
-         return null !== (LH = null !== (AH = hH[rH.ordinal]) && void 0 !== AH ? AH : hH[0]) && void 0 !== LH ? LH : null
+         return null !== (GB = null !== (YB = oB[DB.ordinal]) && void 0 !== YB ? YB : oB[0]) && void 0 !== GB ? GB : null
```

#### 284. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3377` → after: `L3377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3377) · [Before (L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3377)

```diff
-     var LA = LH(1214);
+     var GY = GB(1268);
```

#### 285. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3392` → after: `L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3392) · [Before (L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3392)

```diff
-             const LH = (null !== (AH = HH[SH]) && void 0 !== AH ? AH : 0) - (null !== (rH = BH[SH]) && void 0 !== rH ? rH : 0);
+             const GB = (null !== (YB = BB[QB]) && void 0 !== YB ? YB : 0) - (null !== (DB = OB[QB]) && void 0 !== DB ? DB : 0);
```

#### 286. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3405` → after: `L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3405) · [Before (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3405)

```diff
-         return null !== (LH = rA(HH.root, BH.root)) && void 0 !== LH ? LH : HH.order > BH.order
+         return null !== (GB = DY(BB.root, OB.root)) && void 0 !== GB ? GB : BB.order > OB.order
```

#### 287. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3414-L3415` → after: `L3414-L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3414-L3415) · [Before (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3414-L3415)

```diff
-           LH = "number" === typeof BH ? BH : null;
-         if (null !== LH && LH === zA && CA === (0, LA.b)()) return tA;
+           GB = "number" === typeof OB ? OB : null;
+         if (null !== GB && GB === yY && JY === (0, GY.c)()) return jY;
```

#### 288. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3418` → after: `L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3418) · [Before (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3418)

```diff
-           SH = [...document.querySelectorAll("[data-pad-covers]")].filter(pH.u);
+           QB = [...document.querySelectorAll("[data-pad-covers]")].filter(xB.s);
```

#### 289. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3421` → after: `L3421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3421) · [Before (L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3421)

```diff
-             BH = !!HH && (0, pH.u)(HH) && !hA(HH, SH);
+             OB = !!BB && (0, xB.s)(BB) && !oY(BB, QB);
```

#### 290. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3430-L3431` → after: `L3430-L3431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3430-L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3430-L3431) · [Before (L3430-L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3430-L3431)

```diff
-         tA = AH, zA = LH, CA = (0, LA.b)();
-         for (const hH of rH)(0, LA.h)(hH);
+         jY = YB, yY = GB, JY = (0, GY.c)();
+         for (const oB of DB)(0, GY.j)(oB);
```

#### 291. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3440` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3440) · [Before (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3440)

```diff
-         return null !== (HH = null === (BH = EA()) || void 0 === BH ? void 0 : BH.root) && void 0 !== HH ? HH : null
+         return null !== (BB = null === (OB = MY()) || void 0 === OB ? void 0 : OB.root) && void 0 !== BB ? BB : null
```

#### 292. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3448` → after: `L3448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3448) · [Before (L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3448)

```diff
-       WA = (0, GH.g)().menuNavigation,
+       ZY = (0, zB.k)().menuNavigation,
```

#### 293. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3452-L3453` → after: `L3452-L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3452-L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3452-L3453) · [Before (L3452-L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3452-L3453)

```diff
-     CH.k.subscribe(GH.e, (() => {
-       const HH = (0, GH.g)().menuNavigation;
+     JB.o.subscribe(zB.g, (() => {
+       const BB = (0, zB.k)().menuNavigation;
```

#### 294. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3458` → after: `L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3458) · [Before (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3458)

```diff
-         return null !== (HH = uA) && void 0 !== HH ? HH : (0, GH.g)().menuNavigation
+         return null !== (BB = pY) && void 0 !== BB ? BB : (0, zB.k)().menuNavigation
```

#### 295. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3485` → after: `L3485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3485) · [Before (L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3485)

```diff
-           has: (0, pH.p)(HH)
+           has: (0, xB.l)(BB)
```

#### 296. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3511-L3512` → after: `L3511-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3511-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3511-L3512) · [Before (L3511-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3511-L3512)

```diff
-     var IA = LH(4954),
-       fA = LH(5513);
+     var uY = GB(4963),
+       mY = GB(5515);
```

#### 297. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3514` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3514) · [Before (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3514)

```diff
-       KA = `${lA}, [data-pad-back]`,
+       FY = `${IY}, [data-pad-back]`,
```

#### 298. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3545-L3546` → after: `L3545-L3546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3545-L3546) · [Before (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3545-L3546)

```diff
-         const LH = HH.querySelector(`${NA}[data-pad-selected='true']`);
-         return LH && BH.includes(LH) ? LH : null
+         const GB = BB.querySelector(`${XY}[data-pad-selected='true']`);
+         return GB && OB.includes(GB) ? GB : null
```

#### 299. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3562` → after: `L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3562) · [Before (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3562)

```diff
-         if (tH && tH !== hH) return hH || (this.contentReturn = new WeakRef(HH)), null !== (zH = RA(tH, LH)) && void 0 !== zH ? zH : BH;
+         if (jB && jB !== oB) return oB || (this.contentReturn = new WeakRef(BB)), null !== (yB = wY(jB, GB)) && void 0 !== yB ? yB : OB;
```

#### 300. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3566` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3566) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3566)

```diff
-         return EH && CH.contains(EH) && LH.includes(EH) ? EH : null !== (SH = this.pickRegionStart(CH, mH(BH, "y", AH), LH)) && void 0 !== SH ? SH : BH
+         return MB && JB.contains(MB) && GB.includes(MB) ? MB : null !== (QB = this.pickRegionStart(JB, dB(OB, "y", YB), GB)) && void 0 !== QB ? QB : OB
```

#### 301. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3574` → after: `L3574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3574) · [Before (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3574)

```diff
-         return LH.some((HH => SH.contains(HH) && !HH.closest(KA))) || !BH.closest(KA) ? SH : null
+         return GB.some((BB => QB.contains(BB) && !BB.closest(FY))) || !OB.closest(FY) ? QB : null
```

#### 302. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3603` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3603) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3603)

```diff
-         for (const SH of (0, pH.l)(HH)) {
+         for (const QB of (0, xB.i)(BB)) {
```

#### 303. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3623-L3624` → after: `L3623-L3624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3623-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3623-L3624) · [Before (L3623-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3623-L3624)

```diff
-           if (LH) return BH === HH || BH.querySelectorAll(pH.e).length <= 1 ? LH : null;
-           if (BH !== HH && BH.querySelectorAll(pH.e).length > 1) return null
+           if (GB) return OB === BB || OB.querySelectorAll(xB.d).length <= 1 ? GB : null;
+           if (OB !== BB && OB.querySelectorAll(xB.d).length > 1) return null
```

#### 304. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3629` → after: `L3629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3629) · [Before (L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3629)

```diff
-         (0, wH.r)(HH, BH, LH);
+         (0, eB.p)(BB, OB, GB);
```

#### 305. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3632` → after: `L3632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3632) · [Before (L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3632)

```diff
-         AH !== rH && (0, wH.r)(AH, rH, rH ? (0, wH.C)(rH) : LH, {
+         YB !== DB && (0, eB.p)(YB, DB, DB ? (0, eB.w)(DB) : GB, {
```

#### 306. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3647` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3647) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3647)

```diff
-         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new BA, this.tabStripNav = new nA, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
+         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new OY, this.tabStripNav = new cY, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
```

#### 307. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3653` → after: `L3653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3653) · [Before (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3653)

```diff
-         const HH = XH.b.register({
+         const BB = PB.c.register({
```

#### 308. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3655` → after: `L3655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3655) · [Before (L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3655)

```diff
-             isActive: () => (0, YH.j)() && "focus" === kA(),
+             isActive: () => (0, lB.k)() && "focus" === kY(),
```

#### 309. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3662` → after: `L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3662) · [Before (L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3662)

```diff
-             wakePressActs: HH => (0, XH.e)(HH) || HH === (0, EH.k)("menuConfirm") && (0, wH.K)((0, YH.c)())
+             wakePressActs: BB => (0, PB.g)(BB) || BB === (0, MB.h)("menuConfirm") && (0, eB.B)((0, lB.d)())
```

#### 310. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3664-L3665` → after: `L3664-L3665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3664-L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3664-L3665) · [Before (L3664-L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3664-L3665)

```diff
-           BH = (0, LA.i)((HH => {
-             const BH = (0, LA.q)(HH);
+           OB = (0, GY.l)((BB => {
+             const OB = (0, GY.r)(BB);
```

#### 311. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3669-L3670` → after: `L3669-L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3669-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3669-L3670) · [Before (L3669-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3669-L3670)

```diff
-         const AH = hH.i.onFrame((HH => {
-             (0, YH.j)() || HH.timestampMs - LH < 100 || (LH = HH.timestampMs, EA())
+         const YB = oB.g.onFrame((BB => {
+             (0, lB.k)() || BB.timestampMs - GB < 100 || (GB = BB.timestampMs, MY())
```

#### 312. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3673` → after: `L3673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3673) · [Before (L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3673)

```diff
-             HH.isTrusted && HH.target instanceof Element && hH.i.getActivePad() && this.noteChosenStop(HH.target)
+             BB.isTrusted && BB.target instanceof Element && oB.g.getActivePad() && this.noteChosenStop(BB.target)
```

#### 313. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3683` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3683) · [Before (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3683)

```diff
-         const rH = null !== (BH = null === (LH = HH.closest(".Dropdown-root")) || void 0 === LH ? void 0 : LH.querySelector(".Dropdown-control")) && void 0 !== BH ? BH : HH,
+         const DB = null !== (OB = null === (GB = BB.closest(".Dropdown-root")) || void 0 === GB ? void 0 : GB.querySelector(".Dropdown-control")) && void 0 !== OB ? OB : BB,
```

#### 314. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3686` → after: `L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3686) · [Before (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3686)

```diff
-         const hH = (0, LA.q)(AH.layer);
+         const oB = (0, GY.r)(YB.layer);
```

#### 315. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3690` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3690) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3690)

```diff
-         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = SH, this.lastFocusedCentre = (0, wH.C)(SH), this.rememberFocus(SH), this.notify())
+         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = QB, this.lastFocusedCentre = (0, eB.w)(QB), this.rememberFocus(QB), this.notify())
```

#### 316. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3711` → after: `L3711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3711) · [Before (L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3711)

```diff
-           this.stickRepeat.reset(), null !== (HH = this.focused) && void 0 !== HH && HH.isConnected && sA(this.focused, null, (0, wH.C)(this.focused)), this.notify()
+           this.stickRepeat.reset(), null !== (BB = this.focused) && void 0 !== BB && BB.isConnected && HY(this.focused, null, (0, eB.w)(this.focused)), this.notify()
```

#### 317. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3731-L3733` → after: `L3731-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3731-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3731-L3733) · [Before (L3731-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3731-L3733)

```diff
-           const BH = (0, wH.C)(HH);
-           this.lastFocusedCentre = BH, this.movedInLayer && this.rememberFocus(HH), sA(rH, HH, BH), "false" === HH.getAttribute("aria-pressed") && HH.closest("[data-pad-select-on-focus]") && (0, wH.c)(HH)
-         } else rH && sA(rH, null, (0, wH.C)(rH));
+           const OB = (0, eB.w)(BB);
+           this.lastFocusedCentre = OB, this.movedInLayer && this.rememberFocus(BB), HY(DB, BB, OB), "false" === BB.getAttribute("aria-pressed") && BB.closest("[data-pad-select-on-focus]") && (0, eB.b)(BB)
+         } else DB && HY(DB, null, (0, eB.w)(DB));
```

#### 318. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3748` → after: `L3748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3748) · [Before (L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3748)

```diff
-         const SH = (0, LA.q)(BH.layer);
+         const QB = (0, GY.r)(OB.layer);
```

#### 319. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3773` → after: `L3773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3773) · [Before (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3773)

```diff
-         const AH = null !== (BH = this.findOpenDropdown(LH)) && void 0 !== BH ? BH : LH,
+         const YB = null !== (OB = this.findOpenDropdown(GB)) && void 0 !== OB ? OB : GB,
```

#### 320. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3775)

```diff
-           SH = (0, LA.q)(AH.layer);
+           QB = (0, GY.r)(YB.layer);
```

#### 321. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3778` → after: `L3778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3778) · [Before (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3778)

```diff
-           if (null !== this.layerKey && AH.root === this.layerRoot && BH && (0, pH.w)(BH, AH.root)) this.continueLayer(SH, BH), this.wasActive || this.resume(AH.root, rH);
+           if (null !== this.layerKey && YB.root === this.layerRoot && OB && (0, xB.t)(OB, YB.root)) this.continueLayer(QB, OB), this.wasActive || this.resume(YB.root, DB);
```

#### 322. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3786` → after: `L3786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3786) · [Before (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3786)

```diff
-         if (this.layerKind = AH.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), HH.wokeDevice && this.focusPointedStop(AH.root), this.validateFocus(AH, rH), rH < this.pressGuardUntilMs && this.pressGuardExtends && (HH.wasPressed((0, EH.k)("menuConfirm")) || HH … [truncated]
+         if (this.layerKind = YB.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), BB.wokeDevice && this.focusPointedStop(YB.root), this.validateFocus(YB, DB), DB < this.pressGuardUntilMs && this.pressGuardExtends && (BB.wasPressed((0, MB.h)("menuConfirm")) || BB … [truncated]
```

#### 323. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3790-L3791` → after: `L3790-L3791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3790-L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3790-L3791) · [Before (L3790-L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3790-L3791)

```diff
-             return BH !== vA && (vA = BH, xA.lock()), xA.update(HH, (0, GH.g)().moveDeadzone)
-           })(HH.leftStick)) return tH = this.getHandoff(), MA = YA(tH), QA = GA(), void XH.b.handOffHeldInput();
+             return OB !== WY && (WY = OB, RY.lock()), RY.update(BB, (0, zB.k)().moveDeadzone)
+           })(BB.leftStick)) return jB = this.getHandoff(), NY = lY(jB), qY = zY(), void PB.c.handOffHeldInput();
```

#### 324. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3797` → after: `L3797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3797) · [Before (L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3797)

```diff
-         if (!BH || !(0, pH.u)(BH)) return null;
+         if (!OB || !(0, xB.s)(OB)) return null;
```

#### 325. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3814` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3814) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3814)

```diff
-         const BH = (0, YH.c)(),
+         const OB = (0, lB.d)(),
```

#### 326. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3833` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3833) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3833)

```diff
-         this.restoredFromMemory = null !== LH, this.setFocus(null !== LH && void 0 !== LH ? LH : this.pickInitial(HH, {
+         this.restoredFromMemory = null !== GB, this.setFocus(null !== GB && void 0 !== GB ? GB : this.pickInitial(BB, {
```

#### 327. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3845` → after: `L3845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3845) · [Before (L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3845)

```diff
-         AH && pA(AH, HH) ? this.takeOver(HH, AH, BH) : null !== (LH = this.focused) && void 0 !== LH && LH.isConnected && sA(null, this.focused, (0, wH.C)(this.focused))
+         YB && xY(YB, BB) ? this.takeOver(BB, YB, OB) : null !== (GB = this.focused) && void 0 !== GB && GB.isConnected && HY(null, this.focused, (0, eB.w)(this.focused))
```

#### 328. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3849` → after: `L3849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3849) · [Before (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3849)

```diff
-         return null !== (BH = this.layerKey ? this.findRemembered(HH, this.layerKey) : null) && void 0 !== BH ? BH : this.pickInitial(HH, {
+         return null !== (OB = this.layerKey ? this.findRemembered(BB, this.layerKey) : null) && void 0 !== OB ? OB : this.pickInitial(BB, {
```

#### 329. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3861` → after: `L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3861) · [Before (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3861)

```diff
-           point: AH ? (0, wH.C)(AH) : null !== (LH = this.lastFocusedCentre) && void 0 !== LH ? LH : this.getLayerStartPoint(rH),
+           point: YB ? (0, eB.w)(YB) : null !== (GB = this.lastFocusedCentre) && void 0 !== GB ? GB : this.getLayerStartPoint(DB),
```

#### 330. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3874` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3874) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3874)

```diff
-         return (0, wH.C)(null !== BH && void 0 !== BH ? BH : HH)
+         return (0, eB.w)(null !== OB && void 0 !== OB ? OB : BB)
```

#### 331. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3881` → after: `L3881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3881) · [Before (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3881)

```diff
-         } = BH, hH = AH instanceof HTMLElement && (0, pH.w)(AH, HH) ? AH : null;
+         } = OB, oB = YB instanceof HTMLElement && (0, xB.t)(YB, BB) ? YB : null;
```

#### 332. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3887` → after: `L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3887) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3887)

```diff
-           }) : this.focusNearest(HH, SH), void(this.focused && this.focused === BH && this.focused.isConnected && sA(null, this.focused, (0, wH.C)(this.focused)))
+           }) : this.focusNearest(BB, QB), void(this.focused && this.focused === OB && this.focused.isConnected && HY(null, this.focused, (0, eB.w)(this.focused)))
```

#### 333. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3896` → after: `L3896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3896) · [Before (L3896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3896)

```diff
-           EH = CH >= 0 ? CH : OL(SH, zH);
+           MB = JB >= 0 ? JB : UG(QB, yB);
```

#### 334. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3913)

```diff
-         const AH = [...HH.querySelectorAll(FA)].filter((AH => (null === LH || void 0 === LH || !LH.has(AH)) && (BH ? (0, pH.y)(AH, HH) : (0, pH.w)(AH, HH)))),
+         const YB = [...BB.querySelectorAll(hY)].filter((YB => (null === GB || void 0 === GB || !GB.has(YB)) && (OB ? (0, xB.A)(YB, BB) : (0, xB.t)(YB, BB)))),
```

#### 335. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3918-L3919` → after: `L3918-L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3918-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3918-L3919) · [Before (L3918-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3918-L3919)

```diff
-         const LH = [...HH.querySelectorAll(dA)].filter(pH.u);
-         for (const AH of [...(0, pH.l)(HH), ...LH]) {
+         const GB = [...BB.querySelectorAll(bY)].filter(xB.s);
+         for (const YB of [...(0, xB.i)(BB), ...GB]) {
```

#### 336. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3939)

```diff
-         for (const GH of (0, pH.l)(HH))
+         for (const zB of (0, xB.i)(BB))
```

#### 337. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3942` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3942) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3942)

```diff
-           if (LH && performance.now() - AH < 1e4 && (0, pH.r)(HH)) return null;
+           if (GB && performance.now() - YB < 1e4 && (0, xB.o)(BB)) return null;
```

#### 338. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3948` → after: `L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3948) · [Before (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3948)

```diff
-           EH = CH.length > 0 ? CH : hH,
+           MB = JB.length > 0 ? JB : oB,
```

#### 339. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3956` → after: `L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3956) · [Before (L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3956)

```diff
-           if (rH && (0, pH.w)(rH, HH.root)) return this.pendingFocus = null, void this.setFocus(rH, {
+           if (DB && (0, xB.t)(DB, BB.root)) return this.pendingFocus = null, void this.setFocus(DB, {
```

#### 340. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3962-L3963` → after: `L3962-L3963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3962-L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3962-L3963) · [Before (L3962-L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3962-L3963)

```diff
-           SH = !!rH && (0, pH.w)(rH, HH.root);
-         if (!(!SH && rH && rH === this.lastActivated && BH - this.lastActivatedAtMs < 5e3 && HH.root.contains(rH) && (0, pH.u)(rH) && (0, pH.x)(rH))) {
+           QB = !!DB && (0, xB.t)(DB, BB.root);
+         if (!(!QB && DB && DB === this.lastActivated && OB - this.lastActivatedAtMs < 5e3 && BB.root.contains(DB) && (0, xB.s)(DB) && (0, xB.x)(DB))) {
```

#### 341. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3968` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3968) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3968)

```diff
-                 AH = null !== LH && void 0 !== LH ? LH : this.restoredFromMemory ? null : this.pickDefault(HH.root);
+                 YB = null !== GB && void 0 !== GB ? GB : this.restoredFromMemory ? null : this.pickDefault(BB.root);
```

#### 342. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3980-L3981` → after: `L3980-L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3980-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3980-L3981) · [Before (L3980-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3980-L3981)

```diff
-         if (HH.wasPressed((0, EH.k)("menuToggleCursor"))) return TA(this.getHandoff()), !0;
-         if (HH.wasPressed((0, EH.k)("menuBack"))) {
+         if (BB.wasPressed((0, MB.h)("menuToggleCursor"))) return VY(this.getHandoff()), !0;
+         if (BB.wasPressed((0, MB.h)("menuBack"))) {
```

#### 343. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3987` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3987) · [Before (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3987)

```diff
-         const LH = (0, EH.k)("menuConfirm");
+         const GB = (0, MB.h)("menuConfirm");
```

#### 344. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3989` → after: `L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L3989) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L3989)

```diff
-         HH.wasPressed(LH) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (AH = null === (rH = this.focused) || void 0 === rH ? void 0 : rH.getAttribute("data-pad-repeat")) && void 0 !== AH ? AH : null, this.confirmRepeated = HH.wokeDevice, this.confirm … [truncated]
+         BB.wasPressed(GB) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (YB = null === (DB = this.focused) || void 0 === DB ? void 0 : DB.getAttribute("data-pad-repeat")) && void 0 !== YB ? YB : null, this.confirmRepeated = BB.wokeDevice, this.confirm … [truncated]
```

#### 345. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4006` → after: `L4006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4006) · [Before (L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4006)

```diff
-         if (!(0, GH.g)().menuBackToCategories) return !1;
+         if (!(0, zB.k)().menuBackToCategories) return !1;
```

#### 346. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4016` → after: `L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4016) · [Before (L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4016)

```diff
-           return null !== (LH = this.getEnabledCandidates(HH).find((HH => (0, wH.G)(HH) === BH))) && void 0 !== LH ? LH : null
+           return null !== (GB = this.getEnabledCandidates(BB).find((BB => (0, eB.x)(BB) === OB))) && void 0 !== GB ? GB : null
```

#### 347. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4021-L4022` → after: `L4021-L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4021-L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4021-L4022) · [Before (L4021-L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4021-L4022)

```diff
-         if ((0, fA.d)(HH) || (0, wH.I)(HH)) return;
-         this.lastActivatedKey = null !== (BH = (0, wH.G)(HH)) && void 0 !== BH ? BH : this.lastActivatedKey, this.lastActivated = HH, this.lastActivatedAtMs = performance.now(), this.rememberFocus(HH);
+         if ((0, mY.b)(BB) || (0, eB.A)(BB)) return;
+         this.lastActivatedKey = null !== (OB = (0, eB.x)(BB)) && void 0 !== OB ? OB : this.lastActivatedKey, this.lastActivated = BB, this.lastActivatedAtMs = performance.now(), this.rememberFocus(BB);
```

#### 348. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4026` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4026) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4026)

```diff
-             AH = new Set(LH.querySelectorAll(`[data-pad-initial-area], ${dA}`)),
+             YB = new Set(GB.querySelectorAll(`[data-pad-initial-area], ${bY}`)),
```

#### 349. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4030)

```diff
-             return (0, pH.w)(HH, LH) ? null : null !== (rH = this.pickDefault(LH, {
+             return (0, xB.t)(BB, GB) ? null : null !== (DB = this.pickDefault(GB, {
```

#### 350. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4032)

```diff
-             })) && void 0 !== rH ? rH : this.pickNewAreaStart(LH, AH)
+             })) && void 0 !== DB ? DB : this.pickNewAreaStart(GB, YB)
```

#### 351. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4034` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4034) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4034)

```diff
-         }(0, wH.c)(HH), (0, wH.h)(HH)
+         }(0, eB.b)(BB), (0, eB.i)(BB)
```

#### 352. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4037-L4038` → after: `L4037-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4037-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4037-L4038) · [Before (L4037-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4037-L4038)

```diff
-         const rH = fL(BH.layer.kind) ? (0, EH.k)("chat") : null;
-         for (const tH of uH.y) {
+         const DB = mG(OB.layer.kind) ? (0, MB.h)("chat") : null;
+         for (const jB of pB.G) {
```

#### 353. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4041` → after: `L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4041) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4041)

```diff
-         const SH = AH ? (0, uH.f)(HH.leftStick, (0, GH.g)().moveDeadzone) : {
+         const QB = YB ? (0, pB.n)(BB.leftStick, (0, zB.k)().moveDeadzone) : {
```

#### 354. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4045` → after: `L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4045) · [Before (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4045)

```diff
-           hH = this.stickRepeat.update((0, uH.Z)(SH), LH);
+           oB = this.stickRepeat.update((0, pB.nb)(QB), GB);
```

#### 355. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4066` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4066) · [Before (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4066)

```diff
-           zH = tH ? (0, fA.d)(hH) : null;
+           yB = jB ? (0, mY.b)(oB) : null;
```

#### 356. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4160` → after: `L4160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4160) · [Before (L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4160)

```diff
-         (0, wH.c)(HH), this.focusWhenFound((() => "true" !== HH.dataset.padSelected ? null : BH.isConnected ? this.tabStripNav.pickContentStart(BH, this.getEnabledCandidates(LH), LH) : rH ? this.tabStripNav.pickReplacedContentStart(HH, rH, this.getEnabledCandidates(LH), LH) : nul … [truncated]
+         (0, eB.b)(BB), this.focusWhenFound((() => "true" !== BB.dataset.padSelected ? null : OB.isConnected ? this.tabStripNav.pickContentStart(OB, this.getEnabledCandidates(GB), GB) : DB ? this.tabStripNav.pickReplacedContentStart(BB, DB, this.getEnabledCandidates(GB), GB) : nul … [truncated]
```

#### 357. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4178` → after: `L4178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4178) · [Before (L4178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4178)

```diff
-         const LH = (0, uH.f)(HH.rightStick, .2);
+         const GB = (0, pB.n)(BB.rightStick, .2);
```

#### 358. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4188` → after: `L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4188) · [Before (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4188)

```diff
-           const hH = null !== (rH = mH(this.focused, SH, BH.root)) && void 0 !== rH ? rH : IH(BH.root, SH);
+           const oB = null !== (DB = dB(this.focused, QB, OB.root)) && void 0 !== DB ? DB : uB(OB.root, QB);
```

#### 359. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4196-L4197` → after: `L4196-L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4196-L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4196-L4197) · [Before (L4196-L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4196-L4197)

```diff
-     var Hr = LH(8913);
-     var Br = LH(9426);
+     var BD = GB(8924);
+     var OD = GB(9397);
```

#### 360. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4268-L4271` → after: `L4268-L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4268-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4268-L4271) · [Before (L4268-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4268-L4271)

```diff
-           return "function" === typeof(null === BH || void 0 === BH ? void 0 : BH.playEffect) ? BH : null
-         })(hH.i.getActiveGamepad()),
-         isVibrationOn: () => (0, GH.g)().vibration,
-         isPadInUse: YH.j
+           return "function" === typeof(null === OB || void 0 === OB ? void 0 : OB.playEffect) ? OB : null
+         })(oB.g.getActiveGamepad()),
+         isVibrationOn: () => (0, zB.k)().vibration,
+         isPadInUse: lB.k
```

#### 361. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4276-L4280` → after: `L4276-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4276-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4276-L4280) · [Before (L4276-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4276-L4280)

```diff
-     var hr = LH(8920),
-       tr = LH(3209),
-       zr = LH(101),
-       Cr = LH(30),
-       Er = LH(656);
+     var oD = GB(8932),
+       jD = GB(3262),
+       yD = GB(104),
+       JD = GB(31),
+       MD = GB(677);
```

#### 362. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4290` → after: `L4290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4290) · [Before (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4290)

```diff
-         return null === LH || this.deps.readReportedVisitId() === LH ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(LH), this.deps.XX(BH, this.deps.getInputType()), "reported") : "notReady"
+         return null === GB || this.deps.readReportedVisitId() === GB ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(GB), this.deps.jP(OB, this.deps.getInputType()), "reported") : "notReady"
```

#### 363. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4294-L4298` → after: `L4294-L4298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4294-L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4294-L4298) · [Before (L4294-L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4294-L4298)

```diff
-     var Yr = LH(1352),
-       ur = LH(1789),
-       Qr = LH(642),
-       Wr = LH(1450),
-       Mr = LH(1194);
+     var lD = GB(1400),
+       pD = GB(1822),
+       qD = GB(662),
+       ZD = GB(1480),
+       ND = GB(1253);
```

#### 364. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4300` → after: `L4300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4300) · [Before (L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4300)

```diff
-         translationKey: `controller:${HH}`
+         translationKey: `controller:${BB}`
```

#### 365. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4362-L4363` → after: `L4362-L4363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4362-L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4362-L4363) · [Before (L4362-L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4362-L4363)

```diff
-         const AH = null !== (LH = Pr[HH][BH]) && void 0 !== LH ? LH : vr[BH];
-         return "string" === typeof AH ? AH : (0, rH.u)(Mr.g.get().getCurrentLanguageCode(), AH.translationKey)
+         const YB = null !== (GB = AD[BB][OB]) && void 0 !== GB ? GB : WD[OB];
+         return "string" === typeof YB ? YB : (0, DB.C)(ND.e.get().getCurrentLanguageCode(), YB.translationKey)
```

#### 366. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4371-L4373` → after: `L4371-L4373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4371-L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4371-L4373) · [Before (L4371-L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4371-L4373)

```diff
-         const rH = (0, YH.v)(),
-           SH = null !== LH && void 0 !== LH ? LH : rH,
-           hH = (0, hr.d)(SH, BH);
+         const DB = (0, lB.D)(),
+           QB = null !== GB && void 0 !== GB ? GB : DB,
+           oB = (0, oD.c)(QB, OB);
```

#### 367. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4379-L4380` → after: `L4379-L4380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4379-L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4379-L4380) · [Before (L4379-L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4379-L4380)

```diff
-             "--pad-glyph-mask": `url(${hH})`,
-             "--pad-glyph-aspect": (0, hr.c)(SH, BH)
+             "--pad-glyph-mask": `url(${oB})`,
+             "--pad-glyph-aspect": (0, oD.b)(QB, OB)
```

#### 368. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4384` → after: `L4384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4384) · [Before (L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4384)

```diff
-     var Vr = LH(1967);
+     var nD = GB(2e3);
```

#### 369. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4391` → after: `L4391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4391) · [Before (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4391)

```diff
-       } = (0, rH.B)();
+       } = (0, DB.H)();
```

#### 370. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4403` → after: `L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4403) · [Before (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4403)

```diff
-             }, ` ${BH.description}`] : [{
+             }, ` ${OB.description}`] : [{
```

#### 371. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4413` → after: `L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4413) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4413)

```diff
-     var br = LH(9433);
+     var fD = GB(9402);
```

#### 372. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4421` → after: `L4421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4421) · [Before (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4421)

```diff
-           "--pad-drop-stack-hold": `${BH.holdMs}ms`
+           "--pad-drop-stack-hold": `${OB.holdMs}ms`
```

#### 373. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4428-L4431` → after: `L4428-L4431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4428-L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4428-L4431) · [Before (L4428-L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4428-L4431)

```diff
-     var mr = LH(9453),
-       or = LH(9458),
-       Ir = LH(9463),
-       fr = LH(9450);
+     var dD = GB(9421),
+       KD = GB(9424),
+       uD = GB(9433),
+       mD = GB(9418);
```

#### 374. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4435` → after: `L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4435) · [Before (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4435)

```diff
-         } = (0, zH.m)(["gameState"]), BH = (0, YH.s)(), [AH, rH] = (0, qH.useState)(!1), [SH, hH] = (0, qH.useState)(!1);
+         } = (0, yB.o)(["gameState"]), OB = (0, lB.A)(), [YB, DB] = (0, gB.useState)(!1), [QB, oB] = (0, gB.useState)(!1);
```

#### 375. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4442` → after: `L4442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4442) · [Before (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4442)

```diff
-           return (Qr.K ? Promise.all([LH.e(84), LH.e(103), LH.e(300), LH.e(207), LH.e(251), LH.e(250), LH.e(102)]).then((() => LH(41856))).then((HH => HH.startWasmPadGameplay)) : Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(111), LH.e(87), LH.e(85), LH.e(86), LH.e(203), LH.e … [truncated]
+           return (qD.D ? Promise.all([GB.e(84), GB.e(103), GB.e(300), GB.e(207), GB.e(251), GB.e(250), GB.e(102)]).then((() => GB(41543))).then((BB => BB.startWasmPadGameplay)) : Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(111), GB.e(87), GB.e(85), GB.e(86), GB.e(203), GB.e … [truncated]
```

#### 376. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4468` → after: `L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4468) · [Before (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4468)

```diff
-         } = (0, rH.B)(), BH = (0, YH.s)(), {
+         } = (0, DB.H)(), OB = (0, lB.A)(), {
```

#### 377. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4471` → after: `L4471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4471) · [Before (L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4471)

```diff
-         } = (0, zH.m)(["gameState", "isUiHidden"]), {
+         } = (0, yB.o)(["gameState", "isUiHidden"]), {
```

#### 378. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4473-L4474` → after: `L4473-L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4473-L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4473-L4474) · [Before (L4473-L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4473-L4474)

```diff
-         } = (0, GH.n)(), hH = (0, br.m)(), tH = (0, br.q)(), [CH, XH] = (0, qH.useState)(Ir.b);
-         return (0, Wr.d)(fr.n, XH), !BH || SH || AH || "inGame" !== LH || !hH && !CH ? null : (0, RH.jsxs)("div", {
+         } = (0, zB.u)(), oB = (0, fD.i)(), jB = (0, fD.j)(), [JB, PB] = (0, gB.useState)(uD.c);
+         return (0, ZD.f)(mD.n, PB), !OB || QB || YB || "inGame" !== GB || !oB && !JB ? null : (0, wB.jsxs)("div", {
```

#### 379. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4479` → after: `L4479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4479) · [Before (L4479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4479)

```diff
-               glyph: (0, EH.k)("actionButton")
+               glyph: (0, MB.h)("actionButton")
```

#### 380. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4489` → after: `L4489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4489) · [Before (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4489)

```diff
-               glyph: (0, EH.k)("pickBlock")
+               glyph: (0, MB.h)("pickBlock")
```

#### 381. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4499` → after: `L4499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4499) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4499)

```diff
-         } = (0, rH.B)(), BH = (0, YH.s)(), {
+         } = (0, DB.H)(), OB = (0, lB.A)(), {
```

#### 382. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4502-L4503` → after: `L4502-L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4502-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4502-L4503) · [Before (L4502-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4502-L4503)

```diff
-         } = (0, zH.m)(["gameState", "isUiHidden"]), [SH, hH] = (0, qH.useState)(mr.c);
-         return (0, Wr.d)(fr.j, hH), BH && !AH && "inGame" === LH && SH ? (0, RH.jsxs)("div", {
+         } = (0, yB.o)(["gameState", "isUiHidden"]), [QB, oB] = (0, gB.useState)(dD.e);
+         return (0, ZD.f)(mD.m, oB), OB && !YB && "inGame" === GB && QB ? (0, wB.jsxs)("div", {
```

#### 383. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4515` → after: `L4515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4515) · [Before (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4515)

```diff
-         } = (0, rH.B)(), BH = (0, YH.s)(), {
+         } = (0, DB.H)(), OB = (0, lB.A)(), {
```

#### 384. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4518` → after: `L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4518) · [Before (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4518)

```diff
-         } = (0, zH.m)(["gameState", "isUiHidden"]), {
+         } = (0, yB.o)(["gameState", "isUiHidden"]), {
```

#### 385. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4520-L4521` → after: `L4520-L4521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4520-L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4520-L4521) · [Before (L4520-L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4520-L4521)

```diff
-         } = (0, GH.n)(), [hH, tH] = (0, qH.useState)(or.c);
-         return (0, Wr.d)(fr.i, tH), BH && !AH && "inGame" === LH && hH ? (0, RH.jsxs)("div", {
+         } = (0, zB.u)(), [oB, jB] = (0, gB.useState)(KD.d);
+         return (0, ZD.f)(mD.l, jB), OB && !YB && "inGame" === GB && oB ? (0, wB.jsxs)("div", {
```

#### 386. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4524` → after: `L4524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4524) · [Before (L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4524)

```diff
-             glyph: (0, EH.k)("attack")
+             glyph: (0, MB.h)("attack")
```

#### 387. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4530-L4534` → after: `L4530-L4534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4530-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4530-L4534) · [Before (L4530-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4530-L4534)

```diff
-     var qr = LH(9467),
-       gr = LH(2036),
-       Nr = LH(2628),
-       Rr = LH(8897);
-     const jr = HH => HH && !(0, qr.d)(gr.e.get("shopInfo")),
+     var gD = GB(9439),
+       rD = GB(2050),
+       XD = GB(2653),
+       wD = GB(8913);
+     const ED = BB => BB && !(0, gD.e)(rD.e.get("shopInfo")),
```

#### 388. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4536` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4536) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4536)

```diff
-         const HH = "inGame" === (0, zH.m)(["gameState"]).gameState;
+         const BB = "inGame" === (0, yB.o)(["gameState"]).gameState;
```

#### 389. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4546` → after: `L4546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4546) · [Before (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4546)

```diff
-         } = (0, rH.B)(), {
+         } = (0, DB.H)(), {
```

#### 390. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4548-L4550` → after: `L4548-L4550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4548-L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4548-L4550) · [Before (L4548-L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4548-L4550)

```diff
-         } = (0, GH.n)();
-         (0, YH.v)();
-         const LH = (0, NB.m)();
+         } = (0, zB.u)();
+         (0, lB.D)();
+         const GB = (0, XO.l)();
```

#### 391. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4552` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4552) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4552)

```diff
-           const HH = XH.b.register({
+           const BB = PB.c.register({
```

#### 392. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4563-L4564` → after: `L4563-L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4563-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4563-L4564) · [Before (L4563-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4563-L4564)

```diff
-           const LH = (0, iH.i)((() => {
-               "inventory" !== XH.b.getActiveConsumerName() && rL.forgetSurface()
+           const GB = (0, sB.j)((() => {
+               "inventory" !== PB.c.getActiveConsumerName() && DG.forgetSurface()
```

#### 393. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4568` → after: `L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4568) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4568)

```diff
-               (0, YH.j)() && (0, aH.k)(BH) && BH.closest(TB) && (0, iH.h)() && (0, iH.n)(BH)
+               (0, lB.k)() && (0, CB.f)(OB) && OB.closest(VO) && (0, sB.i)() && (0, sB.n)(OB)
```

#### 394. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4594` → after: `L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4594) · [Before (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4594)

```diff
-                   glyph: (0, EH.k)(HH)
+                   glyph: (0, MB.h)(BB)
```

#### 395. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4596` → after: `L4596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4596) · [Before (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4596)

```diff
-                   children: HH(`controller:${rH}`)
+                   children: BB(`controller:${DB}`)
```

#### 396. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4681` → after: `L4681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4681) · [Before (L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4681)

```diff
-         const LH = ((HH, BH) => [...ir[HH], BH ? ar : dr])(HH, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
+         const GB = ((BB, OB) => [...sD[BB], OB ? CD : bD])(BB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
```

#### 397. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4724` → after: `L4724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4724) · [Before (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4724)

```diff
-         return 1 === AH.length ? AH : HH
+         return 1 === YB.length ? YB : BB
```

#### 398. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4726` → after: `L4726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4726) · [Before (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4726)

```diff
-     var CS = LH(9339);
+     var JQ = GB(9322);
```

#### 399. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4751` → after: `L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4751) · [Before (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4751)

```diff
-       YS = ["qh", "nameTag"],
+       lQ = ["KJ", "nameTag"],
```

#### 400. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4767` → after: `L4767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4767) · [Before (L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4767)

```diff
-         (0, mL.l)(HH) ? (0, mL.e)().close(): (yA.noteChosenStop(HH), HH.blur())
+         (0, dG.h)(BB) ? (0, dG.b)().close(): (tY.noteChosenStop(BB), BB.blur())
```

#### 401. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4790` → after: `L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4790) · [Before (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4790)

```diff
-             (0, aH.d)(BH.target);
+             (0, CB.c)(OB.target);
```

#### 402. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4793` → after: `L4793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4793) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4793)

```diff
-             (0, aH.h)(BH.target, " ");
+             (0, CB.e)(OB.target, " ");
```

#### 403. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4796` → after: `L4796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4796) · [Before (L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4796)

```diff
-             (0, aH.h)(BH.target, "\n");
+             (0, CB.e)(OB.target, "\n");
```

#### 404. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4799` → after: `L4799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4799) · [Before (L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4799)

```diff
-             (0, aH.o)(BH.target, -1);
+             (0, CB.h)(OB.target, -1);
```

#### 405. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4802` → after: `L4802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4802) · [Before (L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4802)

```diff
-             (0, aH.o)(BH.target, 1);
+             (0, CB.h)(OB.target, 1);
```

#### 406. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4832` → after: `L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4832) · [Before (L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4832)

```diff
-             (0, mL.l)(BH.target) && (0, mL.e)().selectNextChannel()
+             (0, dG.h)(OB.target) && (0, dG.b)().selectNextChannel()
```

#### 407. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4840` → after: `L4840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4840) · [Before (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4840)

```diff
-         this.host.hide(), (0, mL.l)(LH) ? (0, mL.e)().submit() : (yA.noteChosenStop(LH), null === (HH = (BH = (0, mL.h)(LH)).submit) || void 0 === HH || HH.call(BH), document.activeElement === LH && LH.blur())
+         this.host.hide(), (0, dG.h)(GB) ? (0, dG.b)().submit() : (tY.noteChosenStop(GB), null === (BB = (OB = (0, dG.f)(GB)).submit) || void 0 === BB || BB.call(OB), document.activeElement === GB && GB.blur())
```

#### 408. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4854` → after: `L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4854) · [Before (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4854)

```diff
-         (0, aH.h)(BH, zS(HH, LH, AH)), this.host.setState({
+         (0, CB.e)(OB, yQ(BB, GB, YB)), this.host.setState({
```

#### 409. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4864-L4865` → after: `L4864-L4865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4864-L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4864-L4865) · [Before (L4864-L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4864-L4865)

```diff
-           LH && (BH.setSelectionRange(0, BH.value.length), (0, aH.h)(BH, LH))
-         } else XS.claim(performance.now()) && (this.host.hide(), (0, mL.e)().sendLine(this.phraseTexts[HH]))
+           GB && (OB.setSelectionRange(0, OB.value.length), (0, CB.e)(OB, GB))
+         } else PQ.claim(performance.now()) && (this.host.hide(), (0, dG.b)().sendLine(this.phraseTexts[BB]))
```

#### 410. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4868` → after: `L4868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4868) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4868)

```diff
-     var xS = LH(9361);
+     var RQ = GB(9346);
```

#### 411. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4879` → after: `L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4879) · [Before (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4879)

```diff
-         this.host = HH, this.editor = BH, this.lastDirection = null, this.navRepeat = new uH.b((0, QH.d)(vS)), this.commandRepeats = new Map(Dr.filter((HH => {
+         this.host = BB, this.editor = OB, this.lastDirection = null, this.navRepeat = new pB.e((0, qB.d)(WQ)), this.commandRepeats = new Map(aD.filter((BB => {
```

#### 412. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4902` → after: `L4902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4902) · [Before (L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4902)

```diff
-           const LH = (0, EH.k)(SH),
+           const GB = (0, MB.h)(QB),
```

#### 413. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4906` → after: `L4906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4906) · [Before (L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4906)

```diff
-         if (HH.wasPressed((0, EH.k)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
+         if (BB.wasPressed((0, MB.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
```

#### 414. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4914-L4916` → after: `L4914-L4916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4914-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4914-L4916) · [Before (L4914-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4914-L4916)

```diff
-         if (HH.wasPressed((0, EH.k)("keyboardClose"))) return void WS(BH);
-         const AH = (0, EH.k)("keyboardType");
-         if (HH.wasPressed(AH)) return XH.b.consumeButton(AH), void this.host.open(BH);
+         if (BB.wasPressed((0, MB.h)("keyboardClose"))) return void ZQ(OB);
+         const YB = (0, MB.h)("keyboardType");
+         if (BB.wasPressed(YB)) return PB.c.consumeButton(YB), void this.host.open(OB);
```

#### 415. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4919` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4919) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4919)

```diff
-         if (this.lastDirection = rH, !SH || (0, mL.l)(BH)) return;
+         if (this.lastDirection = DB, !QB || (0, dG.h)(OB)) return;
```

#### 416. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4921` → after: `L4921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4921) · [Before (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4921)

```diff
-         WS(BH), hH && XH.b.handOffHeldInput()
+         ZQ(OB), oB && PB.c.handOffHeldInput()
```

#### 417. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4925` → after: `L4925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4925) · [Before (L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4925)

```diff
-         if ("Up" === HH && 0 === BH.focus.row && "chat" === BH.kind) return (0, mL.e)().stepHistory(), void this.host.setState({
+         if ("Up" === BB && 0 === OB.focus.row && "chat" === OB.kind) return (0, dG.b)().stepHistory(), void this.host.setState({
```

#### 418. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4957)

```diff
-         for (const BH of uH.y)
+         for (const OB of pB.G)
```

#### 419. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4959` → after: `L4959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4959) · [Before (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4959)

```diff
-         return (0, uH.Z)((0, uH.f)(HH.leftStick, (0, GH.g)().moveDeadzone))
+         return (0, pB.nb)((0, pB.n)(BB.leftStick, (0, zB.k)().moveDeadzone))
```

#### 420. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4975` → after: `L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4975) · [Before (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4975)

```diff
-         BH && CH.k.AX(xS.c, HH.visible)
+         OB && JB.o.tM(RQ.d, BB.visible)
```

#### 421. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4983` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4983) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4983)

```diff
-         const HH = XH.b.register({
+         const BB = PB.c.register({
```

#### 422. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4985` → after: `L4985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4985) · [Before (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4985)

```diff
-             isActive: () => this.state.visible || (0, aH.k)(document.activeElement),
+             isActive: () => this.state.visible || (0, CB.f)(document.activeElement),
```

#### 423. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4992` → after: `L4992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4992) · [Before (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4992)

```diff
-             wakePressActs: HH => US.includes(HH) || !this.state.visible && HH === (0, EH.k)("keyboardType")
+             wakePressActs: BB => SQ.includes(BB) || !this.state.visible && BB === (0, MB.h)("keyboardType")
```

#### 424. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4996` → after: `L4996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L4996) · [Before (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L4996)

```diff
-             (0, aH.k)(BH) && (BH === this.pendingChatInput || (0, YH.j)() ? this.open(BH) : this.state.visible && BH !== this.state.target && (this.ownedField = null, this.hide()))
+             (0, CB.f)(OB) && (OB === this.pendingChatInput || (0, lB.k)() ? this.open(OB) : this.state.visible && OB !== this.state.target && (this.ownedField = null, this.hide()))
```

#### 425. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5004` → after: `L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5004) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5004)

```diff
-             HH.isTrusted && this.state.visible && (HH => !HH.repeat && !VS.has(HH.key) && !(0, CS.b)(HH.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(HH.key))(HH) && this.hide()
+             BB.isTrusted && this.state.visible && (BB => !BB.repeat && !nQ.has(BB.key) && !(0, JQ.e)(BB.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(BB.key))(BB) && this.hide()
```

#### 426. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5013` → after: `L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5013) · [Before (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5013)

```diff
-         const SH = CH.k.subscribe(fr.c, (() => {
+         const QB = JB.o.subscribe(mD.e, (() => {
```

#### 427. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5016` → after: `L5016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5016) · [Before (L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5016)

```diff
-           hH = CH.k.subscribe(xS.e, (HH => {
+           oB = JB.o.subscribe(RQ.f, (BB => {
```

#### 428. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5020` → after: `L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5020) · [Before (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5020)

```diff
-           HH(), document.removeEventListener("focusin", BH, !0), document.removeEventListener("focusout", LH, !0), window.removeEventListener("keydown", AH, !0), window.removeEventListener("resize", rH), CH.k.unsubscribe(SH), CH.k.unsubscribe(hH), this.clearPendingChat(), this.hi … [truncated]
+           BB(), document.removeEventListener("focusin", OB, !0), document.removeEventListener("focusout", GB, !0), window.removeEventListener("keydown", YB, !0), window.removeEventListener("resize", DB), JB.o.unsubscribe(QB), JB.o.unsubscribe(oB), this.clearPendingChat(), this.hi … [truncated]
```

#### 429. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5024` → after: `L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5024) · [Before (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5024)

```diff
-         const HH = (0, mL.e)();
+         const BB = (0, dG.b)();
```

#### 430. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5030` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5030) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5030)

```diff
-         (0, aH.k)(HH) ? (document.activeElement !== HH && HH.focus(), document.activeElement === HH && this.open(HH)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", HH)
+         (0, CB.f)(BB) ? (document.activeElement !== BB && BB.focus(), document.activeElement === BB && this.open(BB)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", BB)
```

#### 431. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5035` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5035) · [Before (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5035)

```diff
-         this.restoreInputMode(), (0, aH.p)(HH), this.savedInputMode = HH.getAttribute("inputmode"), HH.setAttribute("inputmode", "none");
+         this.restoreInputMode(), (0, CB.l)(BB), this.savedInputMode = BB.getAttribute("inputmode"), BB.setAttribute("inputmode", "none");
```

#### 432. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5040-L5041` → after: `L5040-L5041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5040-L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5040-L5041) · [Before (L5040-L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5040-L5041)

```diff
-           kind: (0, mL.l)(HH) ? "chat" : null !== (BH = (0, mL.h)(HH).kind) && void 0 !== BH ? BH : null,
-           accentsFirst: (AH = Mr.g.get().getCurrentLanguageCode(), pr.has(AH)),
+           kind: (0, dG.h)(BB) ? "chat" : null !== (OB = (0, dG.f)(BB).kind) && void 0 !== OB ? OB : null,
+           accentsFirst: (YB = ND.e.get().getCurrentLanguageCode(), xD.has(YB)),
```

#### 433. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5068` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5068) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5068)

```diff
-         this.state.visible ? this.padInput.onVisibleFrame(HH) : (0, aH.k)(BH) && this.padInput.onHiddenFrame(HH, BH)
+         this.state.visible ? this.padInput.onVisibleFrame(BB) : (0, CB.f)(OB) && this.padInput.onHiddenFrame(BB, OB)
```

#### 434. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5084` → after: `L5084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5084) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5084)

```diff
-     var bS = LH(2991);
+     var fQ = GB(3039);
```

#### 435. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5102` → after: `L5102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5102) · [Before (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5102)

```diff
-         qh: "controller:keyboardTargetBookTitle"
+         KJ: "controller:keyboardTargetBookTitle"
```

#### 436. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5134` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5134) · [Before (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5134)

```diff
-         } = (0, rH.B)(), LH = (() => {
+         } = (0, DB.H)(), GB = (() => {
```

#### 437. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5139-L5140` → after: `L5139-L5140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5139-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5139-L5140) · [Before (L5139-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5139-L5140)

```diff
-         })(), AH = (0, YH.s)(), SH = (0, qH.useRef)(null);
-         (0, GH.n)(), (0, YH.v)(), (0, qH.useEffect)((() => {
+         })(), YB = (0, lB.A)(), QB = (0, gB.useRef)(null);
+         (0, zB.u)(), (0, lB.D)(), (0, gB.useEffect)((() => {
```

#### 438. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5150` → after: `L5150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5150) · [Before (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5150)

```diff
-         const zH = null !== (HH = null === tH || void 0 === tH ? void 0 : tH.value) && void 0 !== HH ? HH : "",
+         const yB = null !== (BB = null === jB || void 0 === jB ? void 0 : jB.value) && void 0 !== BB ? BB : "",
```

#### 439. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5159` → after: `L5159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5159) · [Before (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5159)

```diff
-           })(zH, zH.startsWith("/") ? (0, bS.d)() : [], ES.length),
+           })(yB, yB.startsWith("/") ? (0, fQ.g)() : [], MQ.length),
```

#### 440. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5163` → after: `L5163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5163) · [Before (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5163)

```diff
-             return null !== (LH = CH[BH]) && void 0 !== LH ? LH : ""
+             return null !== (GB = JB[OB]) && void 0 !== GB ? GB : ""
```

#### 441. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5207` → after: `L5207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5207) · [Before (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5207)

```diff
-           className: NH()(mL.n, "top" === LH.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
+           className: XB()(dG.o, "top" === GB.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
```

#### 442. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5212` → after: `L5212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5212) · [Before (L5212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5212)

```diff
-             "--pad-keyboard-height": `${LH.maxHeightPx}px`
+             "--pad-keyboard-height": `${GB.maxHeightPx}px`
```

#### 443. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5260` → after: `L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5260) · [Before (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5260)

```diff
-                       glyph: (0, EH.k)(hH)
+                       glyph: (0, MB.h)(oB)
```

#### 444. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5287` → after: `L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5287) · [Before (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5287)

```diff
-         } = (0, aH.s)(BH), CH = "password" === BH.type ? "\u2022".repeat(hH.length) : hH;
+         } = (0, CB.o)(OB), JB = "password" === OB.type ? "\u2022".repeat(oB.length) : oB;
```

#### 445. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5315-L5316` → after: `L5315-L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5315-L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5315-L5316) · [Before (L5315-L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5315-L5316)

```diff
-     var eS = LH(1390),
-       qS = LH(3795);
+     var LQ = GB(1434),
+       gQ = GB(3848);
```

#### 446. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5319` → after: `L5319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5319) · [Before (L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5319)

```diff
-         return BH.map(EH.k)
+         return OB.map(MB.h)
```

#### 447. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5333` → after: `L5333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5333) · [Before (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5333)

```diff
-         for (const LH of HH)(0, pH.u)(LH) && BH.push(LH.getBoundingClientRect());
+         for (const GB of BB)(0, xB.s)(GB) && OB.push(GB.getBoundingClientRect());
```

#### 448. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5344` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5344) · [Before (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5344)

```diff
-         if (((0, qS.f)(null === BH || void 0 === BH ? void 0 : BH.layer.kind, (0, qS.g)()) || AH) && LH.push(...FS(document.querySelectorAll(RS.join(",")))), 0 === LH.length) return null;
+         if (((0, gQ.g)(null === OB || void 0 === OB ? void 0 : OB.layer.kind, (0, gQ.h)()) || YB) && GB.push(...hQ(document.querySelectorAll(wQ.join(",")))), 0 === GB.length) return null;
```

#### 449. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5348` → after: `L5348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5348) · [Before (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5348)

```diff
-         } = HH.getBoundingClientRect(), hH = window.innerHeight - 8, tH = (0, qS.j)(hH, {
+         } = BB.getBoundingClientRect(), oB = window.innerHeight - 8, jB = (0, gQ.m)(oB, {
```

#### 450. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5356` → after: `L5356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5356) · [Before (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5356)

```diff
-           LH = HH ? `${Math.round(window.innerHeight-HH.getBoundingClientRect().top)}px` : "";
+           GB = BB ? `${Math.round(window.innerHeight-BB.getBoundingClientRect().top)}px` : "";
```

#### 451. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5362` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5362) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5362)

```diff
-         } = (0, rH.B)(), {
+         } = (0, DB.H)(), {
```

#### 452. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5364-L5365` → after: `L5364-L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5364-L5365) · [Before (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5364-L5365)

```diff
-         } = (0, GH.n)(), LH = (0, YH.s)(), [AH, SH] = (0, qH.useState)(!1), [hH, CH] = (0, qH.useState)([]), [QH, WH] = (0, qH.useState)(null), MH = (0, qH.useRef)(null), xH = (0, qH.useRef)(null);
-         (0, Wr.d)(xS.c, (HH => {
+         } = (0, zB.u)(), GB = (0, lB.A)(), [YB, QB] = (0, gB.useState)(!1), [oB, JB] = (0, gB.useState)([]), [qB, ZB] = (0, gB.useState)(null), NB = (0, gB.useRef)(null), RB = (0, gB.useRef)(null);
+         (0, ZD.f)(RQ.d, (BB => {
```

#### 453. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5367` → after: `L5367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5367) · [Before (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5367)

```diff
-         })), (0, Wr.d)(qS.i, (() => {
+         })), (0, ZD.f)(gQ.l, (() => {
```

#### 454. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5378-L5379` → after: `L5378-L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5378-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5378-L5379) · [Before (L5378-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5378-L5379)

```diff
-                 const BH = XH.b.getActiveConsumerName(),
-                   LH = (0, qS.d)();
+                 const OB = PB.c.getActiveConsumerName(),
+                   GB = (0, gQ.f)();
```

#### 455. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5381-L5382` → after: `L5381-L5382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5381-L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5381-L5382) · [Before (L5381-L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5381-L5382)

```diff
-                   const HH = (0, EH.k)(LH),
-                     BH = "emoteWheel" === LH && "wheel" === (0, GH.g)().emoteButton || !(0, uH.G)(XH.b.getLastFrame().values, HH) ? {
+                   const BB = (0, MB.h)(GB),
+                     OB = "emoteWheel" === GB && "wheel" === (0, zB.k)().emoteButton || !(0, pB.P)(PB.c.getLastFrame().values, BB) ? {
```

#### 456. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5390` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5390) · [Before (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5390)

```diff
-                     glyphs: [(0, EH.z)(HH)],
+                     glyphs: [(0, MB.y)(BB)],
```

#### 457. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5398` → after: `L5398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5398) · [Before (L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5398)

```diff
-                 if (!AH || "focus" !== BH && "cursor" !== BH) return (0, qS.b)(EH.k);
+                 if (!YB || "focus" !== OB && "cursor" !== OB) return (0, gQ.c)(MB.h);
```

#### 458. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5404` → after: `L5404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5404) · [Before (L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5404)

```diff
-                   hH = (0, wH.z)(AH.root),
+                   oB = (0, eB.u)(YB.root),
```

#### 459. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5429` → after: `L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5429) · [Before (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5429)

```diff
-                 WH && (0, fA.d)(WH) ? rH.push({
+                 ZB && (0, mY.b)(ZB) ? DB.push({
```

#### 460. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5432` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5432) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5432)

```diff
-                 }) : WH && (0, wH.I)(WH) ? rH.push({
+                 }) : ZB && (0, eB.A)(ZB) ? DB.push({
```

#### 461. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5456` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5456) · [Before (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5456)

```diff
-                 return "inGame" === zH.c.get("gameState") && "popup" !== AH.layer.kind && null !== vH && ((0, zL.n)(vH) ? rH.push(...NS("leaderboard", "controller:menusClose")) : vH !== tL.o.LOBBY_LEADERBOARD && rH.push(...NS("leaderboard", "controller:menusLobby"))), rH.push({
+                 return "inGame" === yB.c.get("gameState") && "popup" !== YB.layer.kind && null !== WB && ((0, yG.m)(WB) ? DB.push(...XQ("leaderboard", "controller:menusClose")) : WB !== jG.p.LOBBY_LEADERBOARD && DB.push(...XQ("leaderboard", "controller:menusLobby"))), DB.push({
```

#### 462. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5462` → after: `L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5462) · [Before (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5462)

```diff
-               AH = ((HH, BH) => `${HH.map((HH=>`${HH.glyphs.join("+")}:${HH.labelKey}`)).join("|")}@${BH}`)(BH, LH);
+               YB = ((BB, OB) => `${BB.map((BB=>`${BB.glyphs.join("+")}:${BB.labelKey}`)).join("|")}@${OB}`)(OB, GB);
```

#### 463. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5496-L5497` → after: `L5496-L5497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5496-L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5496-L5497) · [Before (L5496-L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5496-L5497)

```diff
-     var dS = LH(1797);
-     const aS = [pH.e, "label", "[data-pad-slider]"].join(","),
+     var bQ = GB(1825);
+     const CQ = [xB.d, "label", "[data-pad-slider]"].join(","),
```

#### 464. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5504` → after: `L5504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5504) · [Before (L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5504)

```diff
-           const LH = document.documentElement.classList.contains(YH.p) ? BH[BH.length - 1] : void 0;
+           const GB = document.documentElement.classList.contains(lB.q) ? OB[OB.length - 1] : void 0;
```

#### 465. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5532` → after: `L5532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5532) · [Before (L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5532)

```diff
-           })) && lH(LH, HH, BH) ? LH : null
+           })) && IB(GB, BB, OB) ? GB : null
```

#### 466. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5541` → after: `L5541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5541) · [Before (L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5541)

```diff
-           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
+           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
```

#### 467. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5547` → after: `L5547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5547) · [Before (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5547)

```diff
-           const HH = XH.b.register({
+           const BB = PB.c.register({
```

#### 468. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5556` → after: `L5556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5556) · [Before (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5556)

```diff
-               wakePressActs: HH => (0, XH.e)(HH) || HH === (0, EH.k)("menuConfirm") && (0, wH.K)((0, YH.c)())
+               wakePressActs: BB => (0, PB.g)(BB) || BB === (0, MB.h)("menuConfirm") && (0, eB.B)((0, lB.d)())
```

#### 469. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5558` → after: `L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5558) · [Before (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5558)

```diff
-             BH = (0, LA.i)((HH => {
+             OB = (0, GY.l)((BB => {
```

#### 470. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5562` → after: `L5562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5562) · [Before (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5562)

```diff
-             LH = CH.k.subscribe("appManagerUpdated|activeInputDevice", (HH => {
+             GB = JB.o.subscribe("appManagerUpdated|activeInputDevice", (BB => {
```

#### 471. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5566` → after: `L5566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5566) · [Before (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5566)

```diff
-             HH(), BH(), CH.k.unsubscribe(LH), this.deactivate()
+             BB(), OB(), JB.o.unsubscribe(GB), this.deactivate()
```

#### 472. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5573` → after: `L5573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5573) · [Before (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5573)

```diff
-           return this.active && !this.hidden && (0, YH.j)()
+           return this.active && !this.hidden && (0, lB.k)()
```

#### 473. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5582` → after: `L5582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5582) · [Before (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5582)

```diff
-           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.AX()
+           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.tM()
```

#### 474. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5603` → after: `L5603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5603) · [Before (L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5603)

```diff
-           }, this.AX())
+           }, this.tM())
```

#### 475. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5610-L5613` → after: `L5610-L5613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5610-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5610-L5613) · [Before (L5610-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5610-L5613)

```diff
-           const LH = HH.wokeDevice ? (0, YH.c)() : null;
-           if (LH && this.jumpTo(LH), !(0, YH.j)()) return void this.hide();
-           const AH = (0, EH.k)("menuToggleCursor");
-           if (HH.wasPressed(AH)) return XH.b.consumeButton(AH), void TA(this.getHandoff(null));
+           const GB = BB.wokeDevice ? (0, lB.d)() : null;
+           if (GB && this.jumpTo(GB), !(0, lB.k)()) return void this.hide();
+           const YB = (0, MB.h)("menuToggleCursor");
+           if (BB.wasPressed(YB)) return PB.c.consumeButton(YB), void VY(this.getHandoff(null));
```

#### 476. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5615-L5618` → after: `L5615-L5618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5615-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5615-L5618) · [Before (L5615-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5615-L5618)

```diff
-           const rH = (0, EH.k)("menuConfirm"),
-             SH = (0, EH.k)("menuSecondary");
-           if (HH.wasPressed((0, EH.k)("menuBack"))) return (0, wH.l)(BH.root) || (0, wH.f)(BH.root) || XA(), void this.AX();
-           if (pL(null, HH, BH)) return HH.wasReleased(rH) && this.press && (this.updateHit(!1), this.updateConfirm(HH, rH)), void this.AX();
+           const DB = (0, MB.h)("menuConfirm"),
+             QB = (0, MB.h)("menuSecondary");
+           if (BB.wasPressed((0, MB.h)("menuBack"))) return (0, eB.l)(OB.root) || (0, eB.f)(OB.root) || PY(), void this.tM();
+           if (xG(null, BB, OB)) return BB.wasReleased(DB) && this.press && (this.updateHit(!1), this.updateConfirm(BB, DB)), void this.tM();
```

#### 477. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5630` → after: `L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5630) · [Before (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5630)

```diff
-             tH = (0, GH.g)().moveDeadzone,
+             jB = (0, zB.k)().moveDeadzone,
```

#### 478. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5632` → after: `L5632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5632) · [Before (L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5632)

```diff
-               const LH = (0, uH.f)(HH, PH(BH));
+               const GB = (0, pB.n)(BB, AB(OB));
```

#### 479. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5638` → after: `L5638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5638) · [Before (L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5638)

```diff
-             if (!zH && !VH(HH.rightStick) && !BH && !LH && !HH.wokeDevice) return void this.AX();
+             if (!yB && !nB(BB.rightStick) && !OB && !GB && !BB.wokeDevice) return void this.tM();
```

#### 480. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5641` → after: `L5641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5641) · [Before (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5641)

```diff
-             }, HH.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.AX()
+             }, BB.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.tM()
```

#### 481. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5650` → after: `L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5650) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5650)

```diff
-             cursorSpeedPercent: (0, GH.g)().cursorSpeed,
+             cursorSpeedPercent: (0, zB.k)().cursorSpeed,
```

#### 482. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5659` → after: `L5659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5659) · [Before (L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5659)

```diff
-           (QH || WH || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(QH), this.updateConfirm(HH, rH), this.updateSecondary(HH, SH), this.updateScroll(HH, BH), this.AX()
+           (qB || ZB || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(qB), this.updateConfirm(BB, DB), this.updateSecondary(BB, QB), this.updateScroll(BB, OB), this.tM()
```

#### 483. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5665` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5665) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5665)

```diff
-               key: (0, LA.q)(HH.layer),
+               key: (0, GY.r)(BB.layer),
```

#### 484. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5685` → after: `L5685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5685) · [Before (L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5685)

```diff
-           const AH = null !== LH && void 0 !== LH ? LH : yA.pickInitial(BH.root, {
+           const YB = null !== GB && void 0 !== GB ? GB : tY.pickInitial(OB.root, {
```

#### 485. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5690` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5690) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5690)

```diff
-           AH && (this.pendingPageStart = null, this.jumpTo((0, wH.C)(AH)))
+           YB && (this.pendingPageStart = null, this.jumpTo((0, eB.w)(YB)))
```

#### 486. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5700` → after: `L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5700) · [Before (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5700)

```diff
-             AH = LH && HH.order <= this.layerOrder ? LH : yA.getLayerStartPoint(HH.root);
+             YB = GB && BB.order <= this.layerOrder ? GB : tY.getLayerStartPoint(BB.root);
```

#### 487. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5707` → after: `L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5707) · [Before (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5707)

```diff
-             element: null !== (BH = this.interactive) && void 0 !== BH ? BH : this.findDraggedSliderNearby(),
+             element: null !== (OB = this.interactive) && void 0 !== OB ? OB : this.findDraggedSliderNearby(),
```

#### 488. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5718` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5718) · [Before (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5718)

```diff
-           return LH >= BH.top - 40 && LH <= BH.bottom + 40 ? HH : null
+           return GB >= OB.top - 40 && GB <= OB.bottom + 40 ? BB : null
```

#### 489. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5722-L5723` → after: `L5722-L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5722-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5722-L5723) · [Before (L5722-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5722-L5723)

```diff
-           const BH = uH.y.find((BH => HH.wasPressed(BH)));
-           return !!BH && (LH = this.getHandoff(BH), MA = YA(LH), QA = null, xA.lock(), XH.b.handOffHeldInput(), !0);
+           const OB = pB.G.find((OB => BB.wasPressed(OB)));
+           return !!OB && (GB = this.getHandoff(OB), NY = lY(GB), qY = null, RY.lock(), PB.c.handOffHeldInput(), !0);
```

#### 490. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5737` → after: `L5737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5737) · [Before (L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5737)

```diff
-           const LH = (0, GH.g)().cursorMagnetism && !(0, dS.e)(HH) && !HH.closest("[data-pad-slider]"),
+           const GB = (0, zB.k)().cursorMagnetism && !(0, bQ.c)(BB) && !BB.closest("[data-pad-slider]"),
```

#### 491. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5751` → after: `L5751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5751) · [Before (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5751)

```diff
-             AH = LH && !(0, MH.q)(LH) && (HH => {
+             YB = GB && !(0, NB.p)(GB) && (BB => {
```

#### 492. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5755-L5756` → after: `L5755-L5756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5755-L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5755-L5756) · [Before (L5755-L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5755-L5756)

```diff
-             })(LH) ? LH : null;
-           if (AH !== this.hit) return (0, wH.r)(this.hit, AH, BH), this.hit = AH, void this.setInteractive(AH ? (HH => {
+             })(GB) ? GB : null;
+           if (YB !== this.hit) return (0, eB.p)(this.hit, YB, OB), this.hit = YB, void this.setInteractive(YB ? (BB => {
```

#### 493. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5760` → after: `L5760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5760) · [Before (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5760)

```diff
-               const HH = null !== (LH = null === (AH = BH.parentElement) || void 0 === AH ? void 0 : AH.closest("[data-pad-focusable]")) && void 0 !== LH ? LH : BH;
+               const BB = null !== (GB = null === (YB = OB.parentElement) || void 0 === YB ? void 0 : YB.closest("[data-pad-focusable]")) && void 0 !== GB ? GB : OB;
```

#### 494. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5778` → after: `L5778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5778) · [Before (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5778)

```diff
-           HH && AH && (0, wH.r)(AH, AH, BH)
+           BB && YB && (0, eB.p)(YB, YB, OB)
```

#### 495. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5788` → after: `L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5788) · [Before (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5788)

```diff
-           this.hit && (0, wH.r)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
+           this.hit && (0, eB.p)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
```

#### 496. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5795` → after: `L5795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5795) · [Before (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5795)

```diff
-           if (!HH || (0, wH.I)(HH)) return {
+           if (!BB || (0, eB.A)(BB)) return {
```

#### 497. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5798` → after: `L5798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5798) · [Before (L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5798)

```diff
-           const BH = (0, fA.d)(HH),
+           const OB = (0, mY.b)(BB),
```

#### 498. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5804` → after: `L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5804) · [Before (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5804)

```diff
-           } : ((0, wH.t)(HH, this.getPoint()), {
+           } : ((0, eB.q)(BB, this.getPoint()), {
```

#### 499. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5833-L5834` → after: `L5833-L5834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5833-L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5833-L5834) · [Before (L5833-L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5833-L5834)

```diff
-             const HH = null !== SH && void 0 !== SH ? SH : LH.target.isConnected ? LH.target : null;
-             HH && (0, wH.v)(HH, rH);
+             const BB = null !== QB && void 0 !== QB ? QB : GB.target.isConnected ? GB.target : null;
+             BB && (0, eB.t)(BB, DB);
```

#### 500. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5840` → after: `L5840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5840) · [Before (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5840)

```diff
-             BH && (yA.noteCursorActivation(BH), (0, MH.h)(BH, new MouseEvent("click", (0, wH.U)(rH, 0, 0))), (0, wH.h)(BH), (0, wH.S)(BH) && (0, wH.O)(BH))
+             OB && (tY.noteCursorActivation(OB), (0, NB.g)(OB, new MouseEvent("click", (0, eB.J)(DB, 0, 0))), (0, eB.i)(OB), (0, eB.I)(OB) && (0, eB.E)(OB))
```

#### 501. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5845-L5846` → after: `L5845-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5845-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5845-L5846) · [Before (L5845-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5845-L5846)

```diff
-           const AH = null !== (HH = null === (BH = this.hit) || void 0 === BH ? void 0 : BH.closest("[data-pad-repeat]")) && void 0 !== HH ? HH : null;
-           this.repeatStop = AH, this.repeatKey = null !== (LH = null === AH || void 0 === AH ? void 0 : AH.getAttribute("data-pad-repeat")) && void 0 !== LH ? LH : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
+           const YB = null !== (BB = null === (OB = this.hit) || void 0 === OB ? void 0 : OB.closest("[data-pad-repeat]")) && void 0 !== BB ? BB : null;
+           this.repeatStop = YB, this.repeatKey = null !== (GB = null === YB || void 0 === YB ? void 0 : YB.getAttribute("data-pad-repeat")) && void 0 !== GB ? GB : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
```

#### 502. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5852` → after: `L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5852) · [Before (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5852)

```diff
-           HH.isConnected && !(0, pH.x)(HH) && HH.getAttribute("data-pad-repeat") === this.repeatKey && BH && HH.contains(BH) ? HH.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, yA.noteCursorActivation(HH), (0, MH.h … [truncated]
+           BB.isConnected && !(0, xB.x)(BB) && BB.getAttribute("data-pad-repeat") === this.repeatKey && OB && BB.contains(OB) ? BB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, tY.noteCursorActivation(BB), (0, NB.g … [truncated]
```

#### 503. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5858` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5858) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5858)

```diff
-           "slider" === HH.kind && HH.adjuster.endDrag(), "pointer" === HH.kind && HH.target.isConnected && (0, wH.v)(HH.target, this.getPoint())
+           "slider" === BB.kind && BB.adjuster.endDrag(), "pointer" === BB.kind && BB.target.isConnected && (0, eB.t)(BB.target, this.getPoint())
```

#### 504. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5912` → after: `L5912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5912) · [Before (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5912)

```diff
-           BH = (0, YH.s)();
+           OB = (0, lB.A)();
```

#### 505. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5932` → after: `L5932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5932) · [Before (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5932)

```diff
-                 return null !== BH && void 0 !== BH && BH.isConnected ? BH : null
+                 return null !== OB && void 0 !== OB && OB.isConnected ? OB : null
```

#### 506. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5935` → after: `L5935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5935) · [Before (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5935)

```diff
-               const tH = null !== (BH = null === rH || void 0 === rH ? void 0 : rH.closest("[data-pad-reticle-box]")) && void 0 !== BH ? BH : rH;
+               const jB = null !== (OB = null === DB || void 0 === DB ? void 0 : DB.closest("[data-pad-reticle-box]")) && void 0 !== OB ? OB : DB;
```

#### 507. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5970` → after: `L5970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L5970) · [Before (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L5970)

```diff
-         HH.style.transform = `translate3d(${BH.x}px, ${BH.y}px, 0)`, HH.classList.toggle("Visible", BH.visible), HH.classList.toggle("Pressed", BH.pressed)
+         BB.style.transform = `translate3d(${OB.x}px, ${OB.y}px, 0)`, BB.classList.toggle("Visible", OB.visible), BB.classList.toggle("Pressed", OB.pressed)
```

#### 508. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6003` → after: `L6003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6003) · [Before (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6003)

```diff
-             return (0, LA.m)({
+             return (0, GY.p)({
```

#### 509. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6014` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6014) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6014)

```diff
-                     return null !== (LH = [...HH.querySelectorAll("button")].find((HH => !HH.matches(".fc-cta-consent")))) && void 0 !== LH ? LH : null
+                     return null !== (GB = [...BB.querySelectorAll("button")].find((BB => !BB.matches(".fc-cta-consent")))) && void 0 !== GB ? GB : null
```

#### 510. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6032-L6033` → after: `L6032-L6033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6032-L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6032-L6033) · [Before (L6032-L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6032-L6033)

```diff
-           LH = hH.i.onFrame((() => {
-             const HH = (0, YH.j)() ? EA() : null,
+           GB = oB.g.onFrame((() => {
+             const BB = (0, lB.k)() ? MY() : null,
```

#### 511. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6046` → after: `L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6046) · [Before (L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6046)

```diff
-           const HH = (0, MH.n)(document.body),
+           const BB = (0, NB.k)(document.body),
```

#### 512. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6056` → after: `L6056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6056) · [Before (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6056)

```diff
-         } = (0, GH.n)(), BH = (0, eS.y)() && HH;
+         } = (0, zB.u)(), OB = (0, LQ.s)() && BB;
```

#### 513. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6065-L6068` → after: `L6065-L6068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6065-L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6065-L6068) · [Before (L6065-L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6065-L6068)

```diff
-     var zh = LH(9484),
-       Ch = LH(9509),
-       Eh = LH(9499);
-     LH(9511);
+     var yo = GB(9457),
+       Jo = GB(9478),
+       Mo = GB(9469);
+     GB(9482);
```

#### 514. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6077` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6077) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6077)

```diff
-           tH((0, Eh.F)(HH, BH, hH.current))
+           jB((0, Mo.C)(BB, OB, oB.current))
```

#### 515. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6079-L6081` → after: `L6079-L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6079-L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6079-L6081) · [Before (L6079-L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6079-L6081)

```diff
-         (0, qH.useLayoutEffect)((() => (BH(LH), (0, qS.o)(HH, LH), CH.k.AX(qS.i), () => {
-           BH(!1), (0, qS.o)(HH, !1), CH.k.AX(qS.i)
-         })), [LH, HH, BH]), (0, Wr.d)("appManagerUpdated|activeInputDevice", (HH => {
+         (0, gB.useLayoutEffect)((() => (OB(GB), (0, gQ.q)(BB, GB), JB.o.tM(gQ.l), () => {
+           OB(!1), (0, gQ.q)(BB, !1), JB.o.tM(gQ.l)
+         })), [GB, BB, OB]), (0, ZD.f)("appManagerUpdated|activeInputDevice", (BB => {
```

#### 516. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6083` → after: `L6083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6083) · [Before (L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6083)

```diff
-         })), (0, Wr.d)("appManagerUpdated|gameState", (HH => {
+         })), (0, ZD.f)("appManagerUpdated|gameState", (BB => {
```

#### 517. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6087` → after: `L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6087) · [Before (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6087)

```diff
-           (0, zL.t)() && zH()
+           (0, yG.r)() && yB()
```

#### 518. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6089` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6089) · [Before (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6089)

```diff
-         return (0, Wr.d)("appManagerUpdated|openEverythingMenuName", GH), (0, Wr.d)("appManagerUpdated|openInGameMenuName", GH), {
+         return (0, ZD.f)("appManagerUpdated|openEverythingMenuName", zB), (0, ZD.f)("appManagerUpdated|openInGameMenuName", zB), {
```

#### 519. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6115-L6116` → after: `L6115-L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6115-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6115-L6116) · [Before (L6115-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6115-L6116)

```diff
-               width: 2 * Eh.u + "rem",
-               height: 2 * Eh.u + "rem"
+               width: 2 * Mo.o + "rem",
+               height: 2 * Mo.o + "rem"
```

#### 520. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6120` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6120) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6120)

```diff
-               viewBox: `0 0 ${Eh.p} ${Eh.p}`,
+               viewBox: `0 0 ${Mo.j} ${Mo.j}`,
```

#### 521. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6122` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6122) · [Before (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6122)

```diff
-                 d: (0, Eh.w)(HH, LH, Eh.i, Eh.m, Eh.n),
+                 d: (0, Mo.r)(BB, GB, Mo.f, Mo.g, Mo.i),
```

#### 522. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6129-L6131` → after: `L6129-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6129-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6129-L6131) · [Before (L6129-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6129-L6131)

```diff
-                 cx: Eh.i,
-                 cy: Eh.i,
-                 r: Eh.n
+                 cx: Mo.f,
+                 cy: Mo.f,
+                 r: Mo.i
```

#### 523. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6134-L6136` → after: `L6134-L6136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6134-L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6134-L6136) · [Before (L6134-L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6134-L6136)

```diff
-                 cx: Eh.i,
-                 cy: Eh.i,
-                 r: Eh.m
+                 cx: Mo.f,
+                 cy: Mo.f,
+                 r: Mo.g
```

#### 524. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6139` → after: `L6139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6139) · [Before (L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6139)

```diff
-                 d: (0, Eh.w)(AH, LH, Eh.i, Eh.m, Eh.n)
+                 d: (0, Mo.r)(YB, GB, Mo.f, Mo.g, Mo.i)
```

#### 525. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6142` → after: `L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6142) · [Before (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6142)

```diff
-               const BH = (0, Eh.C)(HH, LH);
+               const OB = (0, Mo.x)(BB, GB);
```

#### 526. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6148-L6149` → after: `L6148-L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6148-L6149) · [Before (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6148-L6149)

```diff
-                   left: `calc(50% + ${Eh.e*Math.cos(BH)}rem)`,
-                   top: `calc(50% + ${Eh.e*Math.sin(BH)}rem)`
+                   left: `calc(50% + ${Mo.d*Math.cos(OB)}rem)`,
+                   top: `calc(50% + ${Mo.d*Math.sin(OB)}rem)`
```

#### 527. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6165-L6168` → after: `L6165-L6168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6165-L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6165-L6168) · [Before (L6165-L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6165-L6168)

```diff
-         } = (0, rH.B)(), BH = Xh("chat", IL.q), LH = (0, qH.useMemo)((() => ES.map((BH => HH(BH)))), [HH]);
-         return (0, Wr.d)(IL.p, (() => {
-           BH.open || (0, zh.g)() || (0, Ch.r)() || "inGame" !== zH.c.get("gameState") || (0, zL.t)() || !(0, mL.e)() || BH.show()
-         })), (0, Wr.d)(IL.i, (HH => {
+         } = (0, DB.H)(), OB = Po("chat", uG.t), GB = (0, gB.useMemo)((() => MQ.map((OB => BB(OB)))), [BB]);
+         return (0, ZD.f)(uG.r, (() => {
+           OB.open || (0, yo.f)() || (0, Jo.q)() || "inGame" !== yB.c.get("gameState") || (0, yG.r)() || !(0, dG.b)() || OB.show()
+         })), (0, ZD.f)(uG.i, (BB => {
```

#### 528. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6170` → after: `L6170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6170) · [Before (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6170)

```diff
-         })), (0, Wr.d)(IL.o, (() => {
+         })), (0, ZD.f)(uG.n, (() => {
```

#### 529. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6174-L6175` → after: `L6174-L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6174-L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6174-L6175) · [Before (L6174-L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6174-L6175)

```diff
-           null !== AH ? XS.claim(performance.now()) && (BH.close(), null === (HH = (0, mL.e)()) || void 0 === HH || HH.sendLine(LH[AH])) : BH.close()
-         })), (0, Wr.d)(IL.k, BH.close), BH.open ? (0, RH.jsx)(Gh, {
+           null !== YB ? PQ.claim(performance.now()) && (OB.close(), null === (BB = (0, dG.b)()) || void 0 === BB || BB.sendLine(GB[YB])) : OB.close()
+         })), (0, ZD.f)(uG.k, OB.close), OB.open ? (0, wB.jsx)(zo, {
```

#### 530. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6187-L6190` → after: `L6187-L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6187-L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6187-L6190) · [Before (L6187-L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6187-L6190)

```diff
-         } = (0, rH.B)(), BH = Xh("actionButton", Ch.t), [LH, AH] = (0, qH.useState)([]);
-         if ((0, Wr.d)(Ch.l, (HH => {
-             BH.open || (0, zh.g)() || (0, IL.e)() || "inGame" !== zH.c.get("gameState") || (0, zL.t)() || (AH(HH), BH.show())
-           })), (0, Wr.d)(Ch.d, (HH => {
+         } = (0, DB.H)(), OB = Po("actionButton", Jo.s), [GB, YB] = (0, gB.useState)([]);
+         if ((0, ZD.f)(Jo.m, (BB => {
+             OB.open || (0, yo.f)() || (0, uG.e)() || "inGame" !== yB.c.get("gameState") || (0, yG.r)() || (YB(BB), OB.show())
+           })), (0, ZD.f)(Jo.b, (BB => {
```

#### 531. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6192` → after: `L6192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6192) · [Before (L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6192)

```diff
-           })), (0, Wr.d)(Ch.i, (() => {
+           })), (0, ZD.f)(Jo.i, (() => {
```

#### 532. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6195-L6196` → after: `L6195-L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6195-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6195-L6196) · [Before (L6195-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6195-L6196)

```diff
-             BH.close(), null !== HH && CH.k.AX(Ch.p, LH[HH])
-           })), (0, Wr.d)(Ch.f, BH.close), !BH.open) return null;
+             OB.close(), null !== BB && JB.o.tM(Jo.p, GB[BB])
+           })), (0, ZD.f)(Jo.f, OB.close), !OB.open) return null;
```

#### 533. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6214` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6214) · [Before (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6214)

```diff
-     var Wh = LH(81);
+     var No = GB(92);
```

#### 534. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6217-L6218` → after: `L6217-L6218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6217-L6218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6217-L6218) · [Before (L6217-L6218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6217-L6218)

```diff
-         const LH = (0, MH.n)(document.getElementById("root")),
-           AH = (0, YH.e)(),
+         const GB = (0, NB.k)(document.getElementById("root")),
+           YB = (0, lB.f)(),
```

#### 535. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6220` → after: `L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6220) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6220)

```diff
-             const HH = [CH.k.subscribe(Br.g, (() => {
+             const BB = [JB.o.subscribe(OD.g, (() => {
```

#### 536. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6222` → after: `L6222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6222) · [Before (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6222)

```diff
-               })), CH.k.subscribe("damagedByOtherPlayer", (() => {
+               })), JB.o.subscribe("damagedByOtherPlayer", (() => {
```

#### 537. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6224` → after: `L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6224) · [Before (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6224)

```diff
-               })), CH.k.subscribe("yourAttackHit", (HH => {
+               })), JB.o.subscribe("yourAttackHit", (BB => {
```

#### 538. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6230` → after: `L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6230) · [Before (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6230)

```diff
-               BH = hH.i.onActivePadChanged((HH => {
+               OB = oB.g.onActivePadChanged((BB => {
```

#### 539. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6234` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6234) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6234)

```diff
-               for (const BH of HH) CH.k.unsubscribe(BH);
+               for (const OB of BB) JB.o.unsubscribe(OB);
```

#### 540. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6240` → after: `L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6240) · [Before (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6240)

```diff
-               getVisitId: Er.c,
+               getVisitId: MD.getVisitSessionId,
```

#### 541. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6243-L6244` → after: `L6243-L6244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6243-L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6243-L6244) · [Before (L6243-L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6243-L6244)

```diff
-                 const HH = Cr.f.getItem(Gr);
-                 return "string" === typeof HH ? HH : null
+                 const BB = JD.i.getItem(zD);
+                 return "string" === typeof BB ? BB : null
```

#### 542. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6247` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6247) · [Before (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6247)

```diff
-                 Cr.f.setItem(Gr, HH)
+                 JD.i.setItem(zD, BB)
```

#### 543. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6249` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6249) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6249)

```diff
-               isPadActive: YH.j,
+               isPadActive: lB.k,
```

#### 544. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6252` → after: `L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6252) · [Before (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6252)

```diff
-                 return null !== (HH = null === (BH = hH.i.getActivePad()) || void 0 === BH ? void 0 : BH.family) && void 0 !== HH ? HH : null
+                 return null !== (BB = null === (OB = oB.g.getActivePad()) || void 0 === OB ? void 0 : OB.family) && void 0 !== BB ? BB : null
```

#### 545. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6256` → after: `L6256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6256) · [Before (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6256)

```diff
-               XX: tr.logControllerUsedToGtag
+               jP: jD.logControllerUsedToGtag
```

#### 546. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6265` → after: `L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6265) · [Before (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6265)

```diff
-               rH = CH.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
+               DB = JB.o.subscribe("appManagerUpdated|activeInputDevice", (() => {
```

#### 547. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6268` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6268) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6268)

```diff
-               SH = (0, Er.k)((() => {
+               QB = (0, MD.onVisitStarted)((() => {
```

#### 548. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6272` → after: `L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6272) · [Before (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6272)

```diff
-               CH.k.unsubscribe(rH), SH(), null !== LH && clearTimeout(LH)
+               JB.o.unsubscribe(DB), QB(), null !== GB && clearTimeout(GB)
```

#### 549. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6275-L6277` → after: `L6275-L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6275-L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6275-L6277) · [Before (L6275-L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6275-L6277)

```diff
-           tH = hH.i.onFrame(((HH, BH, LH) => {
-             const AH = (0, YH.o)(HH, LH);
-             XH.b.dispatch(HH, BH, AH)
+           jB = oB.g.onFrame(((BB, OB, GB) => {
+             const YB = (0, lB.p)(BB, GB);
+             PB.c.dispatch(BB, OB, YB)
```

#### 550. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6279-L6280` → after: `L6279-L6280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6279-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6279-L6280) · [Before (L6279-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6279-L6280)

```diff
-         let EH = null !== (HH = null === (BH = hH.i.getActivePad()) || void 0 === BH ? void 0 : BH.family) && void 0 !== HH ? HH : null;
-         const uH = hH.i.onActivePadChanged((HH => {
+         let MB = null !== (BB = null === (OB = oB.g.getActivePad()) || void 0 === OB ? void 0 : OB.family) && void 0 !== BB ? BB : null;
+         const pB = oB.g.onActivePadChanged((BB => {
```

#### 551. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6282-L6283` → after: `L6282-L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6282-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6282-L6283) · [Before (L6282-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6282-L6283)

```diff
-             (XH.b.reset(), (0, YH.q)(), CH.k.AX(hH.e, HH), (null !== (BH = null === HH || void 0 === HH ? void 0 : HH.family) && void 0 !== BH ? BH : null) !== EH) && (EH = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.family) && void 0 !== LH ? LH : null, CH.k.AX(GH. … [truncated]
-             !HH && (0, YH.j)() && (0, YH.r)(zH.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
+             (PB.c.reset(), (0, lB.s)(), JB.o.tM(oB.c, BB), (null !== (OB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== OB ? OB : null) !== MB) && (MB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== GB ? GB : null, JB.o.tM(zB. … [truncated]
+             !BB && (0, lB.k)() && (0, lB.w)(yB.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
```

#### 552. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6286` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/controller.js#L6286) · [Before (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/controller.js#L6286)

```diff
-             "visible" !== document.visibilityState && XH.b.clear()
+             "visible" !== document.visibilityState && PB.c.clear()
```
